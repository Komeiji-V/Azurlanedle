import { bundledOfficialCatalogs } from "./default-catalog.generated";

const defaultCatalogSource = bundledOfficialCatalogs[0];
if (!defaultCatalogSource) throw new Error("没有可用的内置官方题库。");

export const DEFAULT_CATALOG_VERSION = defaultCatalogSource.gitCommitDate
  ? `${defaultCatalogSource.gitCommitDate} (${defaultCatalogSource.gitCommitSha.slice(0, 7)})`
  : defaultCatalogSource.sha256.slice(0, 7);

/**
 * 题库更新检查同样是可选的：构建阶段提供
 *   NEXT_PUBLIC_AZURLANEDLE_DB_URL     仓库 db 目录主页，用于「查看更新」
 *   NEXT_PUBLIC_AZURLANEDLE_DB_RAW_URL db 目录的原始地址前缀
 * 即可启用；未配置时更新中心只显示本地题库基线。
 */
export const OFFICIAL_CATALOG_REPO_URL = process.env.NEXT_PUBLIC_AZURLANEDLE_DB_URL ?? "";

export const OFFICIAL_CATALOG_SOURCES = bundledOfficialCatalogs.map(({ path, sha256 }) => ({ path, sha256 }));

const OFFICIAL_CATALOG_RAW_BASE_URL = process.env.NEXT_PUBLIC_AZURLANEDLE_DB_RAW_URL ?? "";
export const OFFICIAL_CATALOG_UPDATE_CONFIGURED = OFFICIAL_CATALOG_RAW_BASE_URL.length > 0;

const NOT_CONFIGURED_MESSAGE = "未配置题库更新源。";
const INSECURE_CONTEXT_MESSAGE = "当前页面不是安全上下文（需要 https 或 localhost），无法校验题库哈希。";

async function getSha256(source: ArrayBuffer): Promise<string> {
  // crypto.subtle 只在安全上下文可用：用 http://<局域网 IP>:8080 打开时是 undefined，
  // 直接调用会抛 TypeError 并被上层当成「检查失败」，这里明确区分出来
  if (!globalThis.crypto?.subtle) throw new Error(INSECURE_CONTEXT_MESSAGE);
  const digest = await crypto.subtle.digest("SHA-256", source);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/**
 * 内置题库的 sha256 是对「按 LF 归一化后的文本」算的（生成脚本会先把 CRLF 换成 LF），
 * 远端比对必须做同样的归一化，否则远端文件是 CRLF 时会永远报「有更新」。
 */
function normalizeLineEndings(source: ArrayBuffer): ArrayBuffer {
  const text = new TextDecoder().decode(source).replace(/\r\n/g, "\n");
  return new TextEncoder().encode(text).buffer as ArrayBuffer;
}

function getRawUrl(path: string, baseUrl: string): string {
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return `${baseUrl}/${encodedPath}`;
}

export async function hasOfficialCatalogUpdate(
  request: typeof fetch = fetch,
  sources: ReadonlyArray<{ path: string; sha256: string }> = OFFICIAL_CATALOG_SOURCES,
  rawBaseUrl = OFFICIAL_CATALOG_RAW_BASE_URL,
): Promise<boolean> {
  if (!rawBaseUrl) throw new Error(NOT_CONFIGURED_MESSAGE);
  const updateStates = await Promise.all(sources.map(async (source) => {
    const response = await request(getRawUrl(source.path, rawBaseUrl), { cache: "no-store" });
    if (!response.ok) throw new Error(`远端返回 ${response.status}（${source.path}）。`);
    const remoteSha256 = await getSha256(normalizeLineEndings(await response.arrayBuffer()));
    return remoteSha256 !== source.sha256.toLowerCase();
  }));
  return updateStates.some(Boolean);
}

export async function hasDefaultCatalogUpdate(
  request: typeof fetch = fetch,
  sha256 = defaultCatalogSource.sha256,
  rawBaseUrl = OFFICIAL_CATALOG_RAW_BASE_URL,
): Promise<boolean> {
  return hasOfficialCatalogUpdate(request, [{
    path: OFFICIAL_CATALOG_SOURCES[0].path,
    sha256,
  }], rawBaseUrl);
}

export const DEFAULT_CATALOG_PAGE_URL = OFFICIAL_CATALOG_REPO_URL
  ? `${OFFICIAL_CATALOG_REPO_URL.replace("/tree/", "/blob/")}/${defaultCatalogSource.path.slice(3).split("/").map(encodeURIComponent).join("/")}`
  : "";
