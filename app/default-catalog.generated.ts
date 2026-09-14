import type { LocalCatalog } from "./local-catalog";

export type BundledOfficialCatalog = {
  name: string;
  path: string;
  sha256: string;
  gitCommitSha: string;
  gitCommitDate: string;
  catalog: LocalCatalog;
};

const bundledCatalog0: LocalCatalog = {
  "tags": [
    {
      "id": 1,
      "name": "稀有度",
      "kind": "exact",
      "unit": "",
      "active": true
    },
    {
      "id": 2,
      "name": "阵营",
      "kind": "exact",
      "unit": "",
      "active": true
    },
    {
      "id": 3,
      "name": "舰种",
      "kind": "exact",
      "unit": "",
      "active": true
    },
    {
      "id": 4,
      "name": "舰级",
      "kind": "exact",
      "unit": "",
      "active": true
    },
    {
      "id": 5,
      "name": "建造时间",
      "kind": "ordered",
      "unit": "",
      "active": true
    },
    {
      "id": 6,
      "name": "实装活动",
      "kind": "ordered",
      "unit": "",
      "active": true
    },
    {
      "id": 7,
      "name": "声优",
      "kind": "exact-multi",
      "unit": "",
      "active": true
    }
  ],
  "characters": [
    {
      "id": 1,
      "name": "泛用型布里",
      "aliases": [
        "Universal Bulin"
      ],
      "active": true
    },
    {
      "id": 2,
      "name": "试作型布里MKII",
      "aliases": [
        "Trial Bulin MKII",
        "Prototype Bulin MKII"
      ],
      "active": true
    },
    {
      "id": 3,
      "name": "特装型布里MKIII",
      "aliases": [
        "Specialized Bulin MKIII",
        "Specialized Bulin Custom MKIII"
      ],
      "active": true
    },
    {
      "id": 4,
      "name": "杜威",
      "aliases": [
        "Dewey"
      ],
      "active": true
    },
    {
      "id": 5,
      "name": "卡辛",
      "aliases": [
        "Cassin"
      ],
      "active": true
    },
    {
      "id": 6,
      "name": "唐斯",
      "aliases": [
        "Downes"
      ],
      "active": true
    },
    {
      "id": 7,
      "name": "格里德利",
      "aliases": [
        "Gridley"
      ],
      "active": true
    },
    {
      "id": 8,
      "name": "克雷文",
      "aliases": [
        "Craven"
      ],
      "active": true
    },
    {
      "id": 9,
      "name": "麦考尔",
      "aliases": [
        "McCall"
      ],
      "active": true
    },
    {
      "id": 10,
      "name": "莫里",
      "aliases": [
        "Maury"
      ],
      "active": true
    },
    {
      "id": 11,
      "name": "弗莱彻",
      "aliases": [
        "Fletcher"
      ],
      "active": true
    },
    {
      "id": 12,
      "name": "威廉·D·波特",
      "aliases": [
        "William D. Porter"
      ],
      "active": true
    },
    {
      "id": 13,
      "name": "查尔斯·奥斯本",
      "aliases": [
        "Charles Ausburne"
      ],
      "active": true
    },
    {
      "id": 14,
      "name": "撒切尔",
      "aliases": [
        "Thatcher"
      ],
      "active": true
    },
    {
      "id": 15,
      "name": "奥利克",
      "aliases": [
        "Aulick"
      ],
      "active": true
    },
    {
      "id": 16,
      "name": "富特",
      "aliases": [
        "Foote"
      ],
      "active": true
    },
    {
      "id": 17,
      "name": "斯彭斯",
      "aliases": [
        "Spence"
      ],
      "active": true
    },
    {
      "id": 18,
      "name": "本森",
      "aliases": [
        "Benson"
      ],
      "active": true
    },
    {
      "id": 19,
      "name": "拉菲",
      "aliases": [
        "Laffey"
      ],
      "active": true
    },
    {
      "id": 20,
      "name": "西姆斯",
      "aliases": [
        "Sims"
      ],
      "active": true
    },
    {
      "id": 21,
      "name": "哈曼",
      "aliases": [
        "Hammann"
      ],
      "active": true
    },
    {
      "id": 22,
      "name": "埃尔德里奇",
      "aliases": [
        "Eldridge"
      ],
      "active": true
    },
    {
      "id": 23,
      "name": "贝利",
      "aliases": [
        "Bailey"
      ],
      "active": true
    },
    {
      "id": 24,
      "name": "拉德福特",
      "aliases": [
        "Radford"
      ],
      "active": true
    },
    {
      "id": 25,
      "name": "杰金斯",
      "aliases": [
        "Jenkins"
      ],
      "active": true
    },
    {
      "id": 26,
      "name": "尼古拉斯",
      "aliases": [
        "Nicholas"
      ],
      "active": true
    },
    {
      "id": 27,
      "name": "布什",
      "aliases": [
        "Bush"
      ],
      "active": true
    },
    {
      "id": 28,
      "name": "黑泽伍德",
      "aliases": [
        "Hazelwood"
      ],
      "active": true
    },
    {
      "id": 29,
      "name": "贝奇",
      "aliases": [
        "Bache"
      ],
      "active": true
    },
    {
      "id": 30,
      "name": "霍比",
      "aliases": [
        "Hobby"
      ],
      "active": true
    },
    {
      "id": 31,
      "name": "科尔克",
      "aliases": [
        "Kalk"
      ],
      "active": true
    },
    {
      "id": 32,
      "name": "金伯利",
      "aliases": [
        "Kimberly"
      ],
      "active": true
    },
    {
      "id": 33,
      "name": "马拉尼",
      "aliases": [
        "Mullany"
      ],
      "active": true
    },
    {
      "id": 34,
      "name": "艾尔温",
      "aliases": [
        "Aylwin"
      ],
      "active": true
    },
    {
      "id": 35,
      "name": "斯坦利",
      "aliases": [
        "Stanly"
      ],
      "active": true
    },
    {
      "id": 36,
      "name": "斯莫利",
      "aliases": [
        "Smalley"
      ],
      "active": true
    },
    {
      "id": 37,
      "name": "哈尔西·鲍威尔",
      "aliases": [
        "Halsey Powell"
      ],
      "active": true
    },
    {
      "id": 38,
      "name": "库珀",
      "aliases": [
        "Cooper"
      ],
      "active": true
    },
    {
      "id": 39,
      "name": "艾伦·萨姆纳",
      "aliases": [
        "Allen M. Sumner"
      ],
      "active": true
    },
    {
      "id": 40,
      "name": "史蒂芬·波特",
      "aliases": [
        "Stephen Potter"
      ],
      "active": true
    },
    {
      "id": 41,
      "name": "莫里森",
      "aliases": [
        "赛普拉斯",
        "Morrison"
      ],
      "active": true
    },
    {
      "id": 42,
      "name": "英格拉罕",
      "aliases": [
        "格拉哈姆",
        "Ingraham"
      ],
      "active": true
    },
    {
      "id": 43,
      "name": "布里斯托尔",
      "aliases": [
        "Bristol"
      ],
      "active": true
    },
    {
      "id": 44,
      "name": "哈曼II",
      "aliases": [
        "Hammann II"
      ],
      "active": true
    },
    {
      "id": 45,
      "name": "拉菲II",
      "aliases": [
        "Laffey II"
      ],
      "active": true
    },
    {
      "id": 46,
      "name": "贝尔",
      "aliases": [
        "Bell"
      ],
      "active": true
    },
    {
      "id": 47,
      "name": "米勒",
      "aliases": [
        "Miller"
      ],
      "active": true
    },
    {
      "id": 48,
      "name": "克拉伦斯·K·布朗森",
      "aliases": [
        "Clarence K. Bronson"
      ],
      "active": true
    },
    {
      "id": 49,
      "name": "奥马哈",
      "aliases": [
        "Omaha"
      ],
      "active": true
    },
    {
      "id": 50,
      "name": "罗利",
      "aliases": [
        "Raleigh"
      ],
      "active": true
    },
    {
      "id": 51,
      "name": "布鲁克林",
      "aliases": [
        "Brooklyn"
      ],
      "active": true
    },
    {
      "id": 52,
      "name": "菲尼克斯",
      "aliases": [
        "Phoenix"
      ],
      "active": true
    },
    {
      "id": 53,
      "name": "海伦娜",
      "aliases": [
        "Helena"
      ],
      "active": true
    },
    {
      "id": 54,
      "name": "亚特兰大",
      "aliases": [
        "Atlanta"
      ],
      "active": true
    },
    {
      "id": 55,
      "name": "朱诺",
      "aliases": [
        "Juneau"
      ],
      "active": true
    },
    {
      "id": 56,
      "name": "圣地亚哥",
      "aliases": [
        "圣戴安娜",
        "San Diego"
      ],
      "active": true
    },
    {
      "id": 57,
      "name": "克利夫兰",
      "aliases": [
        "Cleveland"
      ],
      "active": true
    },
    {
      "id": 58,
      "name": "哥伦比亚",
      "aliases": [
        "Columbia"
      ],
      "active": true
    },
    {
      "id": 59,
      "name": "里士满",
      "aliases": [
        "Richmond"
      ],
      "active": true
    },
    {
      "id": 60,
      "name": "火奴鲁鲁",
      "aliases": [
        "Honolulu"
      ],
      "active": true
    },
    {
      "id": 61,
      "name": "圣路易斯",
      "aliases": [
        "St. Louis"
      ],
      "active": true
    },
    {
      "id": 62,
      "name": "蒙彼利埃",
      "aliases": [
        "Montpelier"
      ],
      "active": true
    },
    {
      "id": 63,
      "name": "丹佛",
      "aliases": [
        "Denver"
      ],
      "active": true
    },
    {
      "id": 64,
      "name": "孟菲斯",
      "aliases": [
        "Memphis"
      ],
      "active": true
    },
    {
      "id": 65,
      "name": "康克德",
      "aliases": [
        "Concord"
      ],
      "active": true
    },
    {
      "id": 66,
      "name": "小海伦娜",
      "aliases": [
        "Lena"
      ],
      "active": true
    },
    {
      "id": 67,
      "name": "小克利夫兰",
      "aliases": [
        "Clevelad"
      ],
      "active": true
    },
    {
      "id": 68,
      "name": "小圣地亚哥",
      "aliases": [
        "小圣戴安娜",
        "Li'l Sandy"
      ],
      "active": true
    },
    {
      "id": 69,
      "name": "圣胡安",
      "aliases": [
        "San Juan"
      ],
      "active": true
    },
    {
      "id": 70,
      "name": "伯明翰",
      "aliases": [
        "Birmingham"
      ],
      "active": true
    },
    {
      "id": 71,
      "name": "克利夫兰(μ兵装)",
      "aliases": [
        "Cleveland",
        "Cleveland µ"
      ],
      "active": true
    },
    {
      "id": 72,
      "name": "比洛克西",
      "aliases": [
        "Biloxi"
      ],
      "active": true
    },
    {
      "id": 73,
      "name": "里诺",
      "aliases": [
        "Reno"
      ],
      "active": true
    },
    {
      "id": 74,
      "name": "马布尔黑德",
      "aliases": [
        "Marblehead"
      ],
      "active": true
    },
    {
      "id": 75,
      "name": "博伊西",
      "aliases": [
        "树城",
        "Boise"
      ],
      "active": true
    },
    {
      "id": 76,
      "name": "休斯敦II",
      "aliases": [
        "Houston II"
      ],
      "active": true
    },
    {
      "id": 77,
      "name": "博伊西(μ兵装)",
      "aliases": [
        "树城(μ兵装)",
        "Boise",
        "Boise µ"
      ],
      "active": true
    },
    {
      "id": 78,
      "name": "法戈",
      "aliases": [
        "Fargo"
      ],
      "active": true
    },
    {
      "id": 79,
      "name": "圣塔菲",
      "aliases": [
        "Santa Fe"
      ],
      "active": true
    },
    {
      "id": 80,
      "name": "帕萨迪纳",
      "aliases": [
        "Pasadena"
      ],
      "active": true
    },
    {
      "id": 81,
      "name": "彭萨科拉",
      "aliases": [
        "Pensacola"
      ],
      "active": true
    },
    {
      "id": 82,
      "name": "盐湖城",
      "aliases": [
        "Salt Lake City"
      ],
      "active": true
    },
    {
      "id": 83,
      "name": "北安普敦",
      "aliases": [
        "Northampton"
      ],
      "active": true
    },
    {
      "id": 84,
      "name": "芝加哥",
      "aliases": [
        "Chicago"
      ],
      "active": true
    },
    {
      "id": 85,
      "name": "休斯敦",
      "aliases": [
        "Houston"
      ],
      "active": true
    },
    {
      "id": 86,
      "name": "波特兰",
      "aliases": [
        "Portland"
      ],
      "active": true
    },
    {
      "id": 87,
      "name": "印第安纳波利斯",
      "aliases": [
        "Indianapolis"
      ],
      "active": true
    },
    {
      "id": 88,
      "name": "阿斯托利亚",
      "aliases": [
        "Astoria"
      ],
      "active": true
    },
    {
      "id": 89,
      "name": "昆西",
      "aliases": [
        "Quincy"
      ],
      "active": true
    },
    {
      "id": 90,
      "name": "文森斯",
      "aliases": [
        "Vincennes"
      ],
      "active": true
    },
    {
      "id": 91,
      "name": "威奇塔",
      "aliases": [
        "Wichita"
      ],
      "active": true
    },
    {
      "id": 92,
      "name": "新奥尔良",
      "aliases": [
        "New Orleans"
      ],
      "active": true
    },
    {
      "id": 93,
      "name": "明尼阿波利斯",
      "aliases": [
        "Minneapolis"
      ],
      "active": true
    },
    {
      "id": 94,
      "name": "旧金山",
      "aliases": [
        "雾城",
        "San Francisco"
      ],
      "active": true
    },
    {
      "id": 95,
      "name": "巴尔的摩",
      "aliases": [
        "Baltimore"
      ],
      "active": true
    },
    {
      "id": 96,
      "name": "布莱默顿",
      "aliases": [
        "Bremerton"
      ],
      "active": true
    },
    {
      "id": 97,
      "name": "巴尔的摩(μ兵装)",
      "aliases": [
        "Baltimore",
        "Baltimore µ"
      ],
      "active": true
    },
    {
      "id": 98,
      "name": "北安普敦II",
      "aliases": [
        "Northampton II"
      ],
      "active": true
    },
    {
      "id": 99,
      "name": "路易斯维尔",
      "aliases": [
        "Louisville"
      ],
      "active": true
    },
    {
      "id": 100,
      "name": "匹兹堡",
      "aliases": [
        "Pittsburgh"
      ],
      "active": true
    },
    {
      "id": 101,
      "name": "小安克雷奇",
      "aliases": [
        "Little Anchorage"
      ],
      "active": true
    },
    {
      "id": 102,
      "name": "星座",
      "aliases": [
        "Constellation"
      ],
      "active": true
    },
    {
      "id": 103,
      "name": "内华达",
      "aliases": [
        "Nevada"
      ],
      "active": true
    },
    {
      "id": 104,
      "name": "俄克拉荷马",
      "aliases": [
        "Oklahoma"
      ],
      "active": true
    },
    {
      "id": 105,
      "name": "宾夕法尼亚",
      "aliases": [
        "Pennsylvania"
      ],
      "active": true
    },
    {
      "id": 106,
      "name": "亚利桑那",
      "aliases": [
        "Arizona"
      ],
      "active": true
    },
    {
      "id": 107,
      "name": "田纳西",
      "aliases": [
        "Tennessee"
      ],
      "active": true
    },
    {
      "id": 108,
      "name": "加利福尼亚",
      "aliases": [
        "California"
      ],
      "active": true
    },
    {
      "id": 109,
      "name": "科罗拉多",
      "aliases": [
        "Colorado"
      ],
      "active": true
    },
    {
      "id": 110,
      "name": "马里兰",
      "aliases": [
        "Maryland"
      ],
      "active": true
    },
    {
      "id": 111,
      "name": "西弗吉尼亚",
      "aliases": [
        "West Virginia"
      ],
      "active": true
    },
    {
      "id": 112,
      "name": "北卡罗来纳",
      "aliases": [
        "North Carolina"
      ],
      "active": true
    },
    {
      "id": 113,
      "name": "华盛顿",
      "aliases": [
        "Washington"
      ],
      "active": true
    },
    {
      "id": 114,
      "name": "南达科他",
      "aliases": [
        "South Dakota"
      ],
      "active": true
    },
    {
      "id": 115,
      "name": "印第安纳",
      "aliases": [
        "Indiana"
      ],
      "active": true
    },
    {
      "id": 116,
      "name": "新泽西",
      "aliases": [
        "花园",
        "New Jersey"
      ],
      "active": true
    },
    {
      "id": 117,
      "name": "马萨诸塞",
      "aliases": [
        "Massachusetts"
      ],
      "active": true
    },
    {
      "id": 118,
      "name": "阿拉巴马",
      "aliases": [
        "Alabama"
      ],
      "active": true
    },
    {
      "id": 119,
      "name": "长岛",
      "aliases": [
        "Long Island"
      ],
      "active": true
    },
    {
      "id": 120,
      "name": "博格",
      "aliases": [
        "Bogue"
      ],
      "active": true
    },
    {
      "id": 121,
      "name": "卡萨布兰卡",
      "aliases": [
        "Casablanca"
      ],
      "active": true
    },
    {
      "id": 122,
      "name": "兰利",
      "aliases": [
        "Langley"
      ],
      "active": true
    },
    {
      "id": 123,
      "name": "列克星敦",
      "aliases": [
        "Lexington"
      ],
      "active": true
    },
    {
      "id": 124,
      "name": "萨拉托加",
      "aliases": [
        "Saratoga"
      ],
      "active": true
    },
    {
      "id": 125,
      "name": "突击者",
      "aliases": [
        "Ranger"
      ],
      "active": true
    },
    {
      "id": 126,
      "name": "约克城",
      "aliases": [
        "Yorktown"
      ],
      "active": true
    },
    {
      "id": 127,
      "name": "企业",
      "aliases": [
        "Enterprise"
      ],
      "active": true
    },
    {
      "id": 128,
      "name": "大黄蜂",
      "aliases": [
        "Hornet"
      ],
      "active": true
    },
    {
      "id": 129,
      "name": "胡蜂",
      "aliases": [
        "Wasp"
      ],
      "active": true
    },
    {
      "id": 130,
      "name": "埃塞克斯",
      "aliases": [
        "Essex"
      ],
      "active": true
    },
    {
      "id": 131,
      "name": "约克城II",
      "aliases": [
        "Yorktown II"
      ],
      "active": true
    },
    {
      "id": 132,
      "name": "无畏",
      "aliases": [
        "Intrepid"
      ],
      "active": true
    },
    {
      "id": 133,
      "name": "大黄蜂II",
      "aliases": [
        "Hornet II"
      ],
      "active": true
    },
    {
      "id": 134,
      "name": "富兰克林",
      "aliases": [
        "Franklin"
      ],
      "active": true
    },
    {
      "id": 135,
      "name": "提康德罗加",
      "aliases": [
        "卡莉永",
        "Ticonderoga"
      ],
      "active": true
    },
    {
      "id": 136,
      "name": "列克星敦II",
      "aliases": [
        "Lexington II"
      ],
      "active": true
    },
    {
      "id": 137,
      "name": "邦克山",
      "aliases": [
        "Bunker Hill"
      ],
      "active": true
    },
    {
      "id": 138,
      "name": "独立",
      "aliases": [
        "Independence"
      ],
      "active": true
    },
    {
      "id": 139,
      "name": "普林斯顿",
      "aliases": [
        "Princeton"
      ],
      "active": true
    },
    {
      "id": 140,
      "name": "科本斯",
      "aliases": [
        "Cowpens"
      ],
      "active": true
    },
    {
      "id": 141,
      "name": "兰利II",
      "aliases": [
        "Langley II"
      ],
      "active": true
    },
    {
      "id": 142,
      "name": "巴丹",
      "aliases": [
        "Bataan"
      ],
      "active": true
    },
    {
      "id": 143,
      "name": "圣哈辛托",
      "aliases": [
        "San Jacinto"
      ],
      "active": true
    },
    {
      "id": 144,
      "name": "香格里拉",
      "aliases": [
        "Shangri-La"
      ],
      "active": true
    },
    {
      "id": 145,
      "name": "小企业",
      "aliases": [
        "Little Enterprise"
      ],
      "active": true
    },
    {
      "id": 146,
      "name": "鲦鱼",
      "aliases": [
        "Dace"
      ],
      "active": true
    },
    {
      "id": 147,
      "name": "大青花鱼",
      "aliases": [
        "Albacore"
      ],
      "active": true
    },
    {
      "id": 148,
      "name": "棘鳍",
      "aliases": [
        "Cavalla"
      ],
      "active": true
    },
    {
      "id": 149,
      "name": "蓝鳃鱼",
      "aliases": [
        "Bluegill"
      ],
      "active": true
    },
    {
      "id": 150,
      "name": "大青花鱼(μ兵装)",
      "aliases": [
        "Albacore",
        "Albacore µ"
      ],
      "active": true
    },
    {
      "id": 151,
      "name": "射水鱼",
      "aliases": [
        "喷水鱼",
        "Archerfish"
      ],
      "active": true
    },
    {
      "id": 152,
      "name": "鹦鹉螺",
      "aliases": [
        "Nautilus"
      ],
      "active": true
    },
    {
      "id": 153,
      "name": "松鲷",
      "aliases": [
        "Flasher"
      ],
      "active": true
    },
    {
      "id": 154,
      "name": "鲱鱼",
      "aliases": [
        "Herring"
      ],
      "active": true
    },
    {
      "id": 155,
      "name": "女灶神",
      "aliases": [
        "Vestal"
      ],
      "active": true
    },
    {
      "id": 156,
      "name": "关岛",
      "aliases": [
        "Guam"
      ],
      "active": true
    },
    {
      "id": 157,
      "name": "西雅图",
      "aliases": [
        "Seattle"
      ],
      "active": true
    },
    {
      "id": 158,
      "name": "佐治亚",
      "aliases": [
        "Georgia"
      ],
      "active": true
    },
    {
      "id": 159,
      "name": "安克雷奇",
      "aliases": [
        "Anchorage"
      ],
      "active": true
    },
    {
      "id": 160,
      "name": "奇尔沙治",
      "aliases": [
        "Kearsarge"
      ],
      "active": true
    },
    {
      "id": 161,
      "name": "哈尔福德",
      "aliases": [
        "Halford"
      ],
      "active": true
    },
    {
      "id": 162,
      "name": "堪萨斯",
      "aliases": [
        "Kansas"
      ],
      "active": true
    },
    {
      "id": 163,
      "name": "女将",
      "aliases": [
        "Amazon"
      ],
      "active": true
    },
    {
      "id": 164,
      "name": "阿卡司塔",
      "aliases": [
        "Acasta"
      ],
      "active": true
    },
    {
      "id": 165,
      "name": "热心",
      "aliases": [
        "Ardent"
      ],
      "active": true
    },
    {
      "id": 166,
      "name": "小猎兔犬",
      "aliases": [
        "Beagle"
      ],
      "active": true
    },
    {
      "id": 167,
      "name": "大斗犬",
      "aliases": [
        "Bulldog"
      ],
      "active": true
    },
    {
      "id": 168,
      "name": "彗星",
      "aliases": [
        "Comet"
      ],
      "active": true
    },
    {
      "id": 169,
      "name": "新月",
      "aliases": [
        "Crescent"
      ],
      "active": true
    },
    {
      "id": 170,
      "name": "小天鹅",
      "aliases": [
        "Cygnet"
      ],
      "active": true
    },
    {
      "id": 171,
      "name": "狐提",
      "aliases": [
        "Foxhound"
      ],
      "active": true
    },
    {
      "id": 172,
      "name": "命运女神",
      "aliases": [
        "Fortune"
      ],
      "active": true
    },
    {
      "id": 173,
      "name": "格伦维尔",
      "aliases": [
        "Grenville"
      ],
      "active": true
    },
    {
      "id": 174,
      "name": "萤火虫",
      "aliases": [
        "Glowworm"
      ],
      "active": true
    },
    {
      "id": 175,
      "name": "勇敢",
      "aliases": [
        "Hardy"
      ],
      "active": true
    },
    {
      "id": 176,
      "name": "猎人",
      "aliases": [
        "Hunter"
      ],
      "active": true
    },
    {
      "id": 177,
      "name": "标枪",
      "aliases": [
        "Javelin"
      ],
      "active": true
    },
    {
      "id": 178,
      "name": "天后",
      "aliases": [
        "Juno"
      ],
      "active": true
    },
    {
      "id": 179,
      "name": "吸血鬼",
      "aliases": [
        "Vampire"
      ],
      "active": true
    },
    {
      "id": 180,
      "name": "丘比特",
      "aliases": [
        "Jupiter"
      ],
      "active": true
    },
    {
      "id": 181,
      "name": "泽西",
      "aliases": [
        "Jersey"
      ],
      "active": true
    },
    {
      "id": 182,
      "name": "无敌",
      "aliases": [
        "Matchless"
      ],
      "active": true
    },
    {
      "id": 183,
      "name": "火枪手",
      "aliases": [
        "Musketeer"
      ],
      "active": true
    },
    {
      "id": 184,
      "name": "回声",
      "aliases": [
        "Echo"
      ],
      "active": true
    },
    {
      "id": 185,
      "name": "爱斯基摩人",
      "aliases": [
        "Eskimo"
      ],
      "active": true
    },
    {
      "id": 186,
      "name": "伊卡洛斯",
      "aliases": [
        "Icarus"
      ],
      "active": true
    },
    {
      "id": 187,
      "name": "贾维斯",
      "aliases": [
        "Jervis"
      ],
      "active": true
    },
    {
      "id": 188,
      "name": "雅努斯",
      "aliases": [
        "Janus"
      ],
      "active": true
    },
    {
      "id": 189,
      "name": "英雄",
      "aliases": [
        "Hero"
      ],
      "active": true
    },
    {
      "id": 190,
      "name": "努比亚人",
      "aliases": [
        "Nubian"
      ],
      "active": true
    },
    {
      "id": 191,
      "name": "特拉法尔加",
      "aliases": [
        "Trafalgar"
      ],
      "active": true
    },
    {
      "id": 192,
      "name": "勇气",
      "aliases": [
        "Gallant"
      ],
      "active": true
    },
    {
      "id": 193,
      "name": "利安得",
      "aliases": [
        "Leander"
      ],
      "active": true
    },
    {
      "id": 194,
      "name": "阿基里斯",
      "aliases": [
        "Achilles"
      ],
      "active": true
    },
    {
      "id": 195,
      "name": "阿贾克斯",
      "aliases": [
        "Ajax"
      ],
      "active": true
    },
    {
      "id": 196,
      "name": "黛朵",
      "aliases": [
        "Dido"
      ],
      "active": true
    },
    {
      "id": 197,
      "name": "南安普顿",
      "aliases": [
        "Southampton"
      ],
      "active": true
    },
    {
      "id": 198,
      "name": "谢菲尔德",
      "aliases": [
        "Sheffield"
      ],
      "active": true
    },
    {
      "id": 199,
      "name": "曼彻斯特",
      "aliases": [
        "Manchester"
      ],
      "active": true
    },
    {
      "id": 200,
      "name": "格罗斯特",
      "aliases": [
        "Gloucester"
      ],
      "active": true
    },
    {
      "id": 201,
      "name": "爱丁堡",
      "aliases": [
        "Edinburgh"
      ],
      "active": true
    },
    {
      "id": 202,
      "name": "贝尔法斯特",
      "aliases": [
        "Belfast"
      ],
      "active": true
    },
    {
      "id": 203,
      "name": "阿瑞托莎",
      "aliases": [
        "Arethusa"
      ],
      "active": true
    },
    {
      "id": 204,
      "name": "加拉蒂亚",
      "aliases": [
        "Galatea"
      ],
      "active": true
    },
    {
      "id": 205,
      "name": "欧若拉",
      "aliases": [
        "Aurora"
      ],
      "active": true
    },
    {
      "id": 206,
      "name": "斐济",
      "aliases": [
        "Fiji"
      ],
      "active": true
    },
    {
      "id": 207,
      "name": "牙买加",
      "aliases": [
        "Jamaica"
      ],
      "active": true
    },
    {
      "id": 208,
      "name": "小贝法",
      "aliases": [
        "Little Bel"
      ],
      "active": true
    },
    {
      "id": 209,
      "name": "纽卡斯尔",
      "aliases": [
        "Newcastle"
      ],
      "active": true
    },
    {
      "id": 210,
      "name": "天狼星",
      "aliases": [
        "Sirius"
      ],
      "active": true
    },
    {
      "id": 211,
      "name": "库拉索",
      "aliases": [
        "Curacoa"
      ],
      "active": true
    },
    {
      "id": 212,
      "name": "杓鹬",
      "aliases": [
        "Curlew"
      ],
      "active": true
    },
    {
      "id": 213,
      "name": "确捷",
      "aliases": [
        "Swiftsure"
      ],
      "active": true
    },
    {
      "id": 214,
      "name": "黑太子",
      "aliases": [
        "Black Prince"
      ],
      "active": true
    },
    {
      "id": 215,
      "name": "谢菲尔德(μ兵装)",
      "aliases": [
        "Sheffield",
        "Sheffield µ"
      ],
      "active": true
    },
    {
      "id": 216,
      "name": "格拉斯哥",
      "aliases": [
        "Glasgow"
      ],
      "active": true
    },
    {
      "id": 217,
      "name": "赫敏",
      "aliases": [
        "Hermione"
      ],
      "active": true
    },
    {
      "id": 218,
      "name": "黛朵(μ兵装)",
      "aliases": [
        "Dido",
        "Dido µ"
      ],
      "active": true
    },
    {
      "id": 219,
      "name": "佩内洛珀",
      "aliases": [
        "Penelope"
      ],
      "active": true
    },
    {
      "id": 220,
      "name": "卡律布狄斯",
      "aliases": [
        "Charybdis"
      ],
      "active": true
    },
    {
      "id": 221,
      "name": "司战女神",
      "aliases": [
        "Bellona"
      ],
      "active": true
    },
    {
      "id": 222,
      "name": "进取",
      "aliases": [
        "Enterprise",
        "Enterprise (Royal Navy)"
      ],
      "active": true
    },
    {
      "id": 223,
      "name": "斯库拉",
      "aliases": [
        "Scylla"
      ],
      "active": true
    },
    {
      "id": 224,
      "name": "利物浦",
      "aliases": [
        "Liverpool"
      ],
      "active": true
    },
    {
      "id": 225,
      "name": "克利奥佩特拉",
      "aliases": [
        "Cleopatra"
      ],
      "active": true
    },
    {
      "id": 226,
      "name": "特立尼达",
      "aliases": [
        "Trinidad"
      ],
      "active": true
    },
    {
      "id": 227,
      "name": "伦敦",
      "aliases": [
        "London"
      ],
      "active": true
    },
    {
      "id": 228,
      "name": "什罗普郡",
      "aliases": [
        "Shropshire"
      ],
      "active": true
    },
    {
      "id": 229,
      "name": "肯特",
      "aliases": [
        "Kent"
      ],
      "active": true
    },
    {
      "id": 230,
      "name": "萨福克",
      "aliases": [
        "Suffolk"
      ],
      "active": true
    },
    {
      "id": 231,
      "name": "诺福克",
      "aliases": [
        "Norfolk"
      ],
      "active": true
    },
    {
      "id": 232,
      "name": "多塞特郡",
      "aliases": [
        "Dorsetshire"
      ],
      "active": true
    },
    {
      "id": 233,
      "name": "约克",
      "aliases": [
        "York"
      ],
      "active": true
    },
    {
      "id": 234,
      "name": "埃克塞特",
      "aliases": [
        "Exeter"
      ],
      "active": true
    },
    {
      "id": 235,
      "name": "苏塞克斯",
      "aliases": [
        "Sussex"
      ],
      "active": true
    },
    {
      "id": 236,
      "name": "小柴郡",
      "aliases": [
        "Little Cheshire"
      ],
      "active": true
    },
    {
      "id": 237,
      "name": "德文郡",
      "aliases": [
        "Devonshire"
      ],
      "active": true
    },
    {
      "id": 238,
      "name": "声望",
      "aliases": [
        "Renown"
      ],
      "active": true
    },
    {
      "id": 239,
      "name": "反击",
      "aliases": [
        "Repulse"
      ],
      "active": true
    },
    {
      "id": 240,
      "name": "胡德",
      "aliases": [
        "Hood"
      ],
      "active": true
    },
    {
      "id": 241,
      "name": "小声望",
      "aliases": [
        "Little Renown"
      ],
      "active": true
    },
    {
      "id": 242,
      "name": "伊丽莎白女王",
      "aliases": [
        "Queen Elizabeth"
      ],
      "active": true
    },
    {
      "id": 243,
      "name": "厌战",
      "aliases": [
        "Warspite"
      ],
      "active": true
    },
    {
      "id": 244,
      "name": "纳尔逊",
      "aliases": [
        "Nelson"
      ],
      "active": true
    },
    {
      "id": 245,
      "name": "罗德尼",
      "aliases": [
        "Rodney"
      ],
      "active": true
    },
    {
      "id": 246,
      "name": "英王乔治五世",
      "aliases": [
        "King George V"
      ],
      "active": true
    },
    {
      "id": 247,
      "name": "威尔士亲王",
      "aliases": [
        "Prince of Wales"
      ],
      "active": true
    },
    {
      "id": 248,
      "name": "约克公爵",
      "aliases": [
        "Duke of York"
      ],
      "active": true
    },
    {
      "id": 249,
      "name": "豪",
      "aliases": [
        "Howe"
      ],
      "active": true
    },
    {
      "id": 250,
      "name": "英勇",
      "aliases": [
        "Valiant"
      ],
      "active": true
    },
    {
      "id": 251,
      "name": "复仇",
      "aliases": [
        "Revenge"
      ],
      "active": true
    },
    {
      "id": 252,
      "name": "前卫",
      "aliases": [
        "Vanguard"
      ],
      "active": true
    },
    {
      "id": 253,
      "name": "皇家橡树",
      "aliases": [
        "Royal Oak"
      ],
      "active": true
    },
    {
      "id": 254,
      "name": "狮",
      "aliases": [
        "Lion"
      ],
      "active": true
    },
    {
      "id": 255,
      "name": "竞技神",
      "aliases": [
        "Hermes"
      ],
      "active": true
    },
    {
      "id": 256,
      "name": "百眼巨人",
      "aliases": [
        "Argus"
      ],
      "active": true
    },
    {
      "id": 257,
      "name": "独角兽",
      "aliases": [
        "Unicorn"
      ],
      "active": true
    },
    {
      "id": 258,
      "name": "半人马",
      "aliases": [
        "Centaur"
      ],
      "active": true
    },
    {
      "id": 259,
      "name": "追赶者",
      "aliases": [
        "Chaser"
      ],
      "active": true
    },
    {
      "id": 260,
      "name": "英仙座",
      "aliases": [
        "Perseus"
      ],
      "active": true
    },
    {
      "id": 261,
      "name": "阿尔比恩",
      "aliases": [
        "Albion"
      ],
      "active": true
    },
    {
      "id": 262,
      "name": "忒修斯",
      "aliases": [
        "Theseus"
      ],
      "active": true
    },
    {
      "id": 263,
      "name": "鹰",
      "aliases": [
        "Eagle"
      ],
      "active": true
    },
    {
      "id": 264,
      "name": "皇家方舟",
      "aliases": [
        "Ark Royal"
      ],
      "active": true
    },
    {
      "id": 265,
      "name": "光辉",
      "aliases": [
        "Illustrious"
      ],
      "active": true
    },
    {
      "id": 266,
      "name": "胜利",
      "aliases": [
        "Victorious"
      ],
      "active": true
    },
    {
      "id": 267,
      "name": "可畏",
      "aliases": [
        "Formidable"
      ],
      "active": true
    },
    {
      "id": 268,
      "name": "光荣",
      "aliases": [
        "Glorious"
      ],
      "active": true
    },
    {
      "id": 269,
      "name": "怨仇",
      "aliases": [
        "Implacable"
      ],
      "active": true
    },
    {
      "id": 270,
      "name": "小光辉",
      "aliases": [
        "Little Illustrious"
      ],
      "active": true
    },
    {
      "id": 271,
      "name": "光辉(μ兵装)",
      "aliases": [
        "Illustrious",
        "Illustrious µ"
      ],
      "active": true
    },
    {
      "id": 272,
      "name": "不挠",
      "aliases": [
        "Indomitable"
      ],
      "active": true
    },
    {
      "id": 273,
      "name": "小可畏",
      "aliases": [
        "Little Formidable"
      ],
      "active": true
    },
    {
      "id": 274,
      "name": "可畏(μ兵装)",
      "aliases": [
        "Formidable",
        "Formidable µ"
      ],
      "active": true
    },
    {
      "id": 275,
      "name": "黑暗界",
      "aliases": [
        "Erebus"
      ],
      "active": true
    },
    {
      "id": 276,
      "name": "恐怖",
      "aliases": [
        "Terror"
      ],
      "active": true
    },
    {
      "id": 277,
      "name": "阿贝克隆比",
      "aliases": [
        "Abercrombie"
      ],
      "active": true
    },
    {
      "id": 278,
      "name": "海王星",
      "aliases": [
        "Neptune"
      ],
      "active": true
    },
    {
      "id": 279,
      "name": "君主",
      "aliases": [
        "Monarch"
      ],
      "active": true
    },
    {
      "id": 280,
      "name": "柴郡",
      "aliases": [
        "Cheshire"
      ],
      "active": true
    },
    {
      "id": 281,
      "name": "德雷克",
      "aliases": [
        "Drake"
      ],
      "active": true
    },
    {
      "id": 282,
      "name": "普利茅斯",
      "aliases": [
        "Plymouth"
      ],
      "active": true
    },
    {
      "id": 283,
      "name": "吹雪",
      "aliases": [
        "桐",
        "Fubuki"
      ],
      "active": true
    },
    {
      "id": 284,
      "name": "白雪",
      "aliases": [
        "杉",
        "Shirayuki"
      ],
      "active": true
    },
    {
      "id": 285,
      "name": "深雪",
      "aliases": [
        "梧",
        "Miyuki"
      ],
      "active": true
    },
    {
      "id": 286,
      "name": "绫波",
      "aliases": [
        "柚",
        "Ayanami"
      ],
      "active": true
    },
    {
      "id": 287,
      "name": "晓",
      "aliases": [
        "枫",
        "Akatsuki"
      ],
      "active": true
    },
    {
      "id": 288,
      "name": "响",
      "aliases": [
        "栀",
        "Hibiki"
      ],
      "active": true
    },
    {
      "id": 289,
      "name": "雷",
      "aliases": [
        "梓",
        "Ikazuchi"
      ],
      "active": true
    },
    {
      "id": 290,
      "name": "电",
      "aliases": [
        "柏",
        "Inazuma"
      ],
      "active": true
    },
    {
      "id": 291,
      "name": "白露",
      "aliases": [
        "梿",
        "Shiratsuyu"
      ],
      "active": true
    },
    {
      "id": 292,
      "name": "夕立",
      "aliases": [
        "椿",
        "Yūdachi",
        "Yuudachi"
      ],
      "active": true
    },
    {
      "id": 293,
      "name": "时雨",
      "aliases": [
        "栴",
        "Shigure"
      ],
      "active": true
    },
    {
      "id": 294,
      "name": "雪风",
      "aliases": [
        "莲",
        "Yukikaze"
      ],
      "active": true
    },
    {
      "id": 295,
      "name": "阳炎",
      "aliases": [
        "萩",
        "Kagerō",
        "Kagerou"
      ],
      "active": true
    },
    {
      "id": 296,
      "name": "不知火",
      "aliases": [
        "蒲",
        "Shiranui"
      ],
      "active": true
    },
    {
      "id": 297,
      "name": "野分",
      "aliases": [
        "苓",
        "Nowaki"
      ],
      "active": true
    },
    {
      "id": 298,
      "name": "初春",
      "aliases": [
        "梅",
        "Hatsuharu"
      ],
      "active": true
    },
    {
      "id": 299,
      "name": "若叶",
      "aliases": [
        "楉",
        "Wakaba"
      ],
      "active": true
    },
    {
      "id": 300,
      "name": "初霜",
      "aliases": [
        "檨",
        "Hatsushimo"
      ],
      "active": true
    },
    {
      "id": 301,
      "name": "有明",
      "aliases": [
        "榎",
        "Ariake"
      ],
      "active": true
    },
    {
      "id": 302,
      "name": "夕暮",
      "aliases": [
        "棭",
        "Yūgure",
        "Yuugure"
      ],
      "active": true
    },
    {
      "id": 303,
      "name": "黑潮",
      "aliases": [
        "蓉",
        "Kuroshio"
      ],
      "active": true
    },
    {
      "id": 304,
      "name": "亲潮",
      "aliases": [
        "藮",
        "Oyashio"
      ],
      "active": true
    },
    {
      "id": 305,
      "name": "岛风",
      "aliases": [
        "芒",
        "Shimakaze"
      ],
      "active": true
    },
    {
      "id": 306,
      "name": "神风",
      "aliases": [
        "榊",
        "Kamikaze"
      ],
      "active": true
    },
    {
      "id": 307,
      "name": "松风",
      "aliases": [
        "棡",
        "Matsukaze"
      ],
      "active": true
    },
    {
      "id": 308,
      "name": "睦月",
      "aliases": [
        "松",
        "Mutsuki"
      ],
      "active": true
    },
    {
      "id": 309,
      "name": "如月",
      "aliases": [
        "樟",
        "Kisaragi"
      ],
      "active": true
    },
    {
      "id": 310,
      "name": "卯月",
      "aliases": [
        "楙",
        "Uzuki"
      ],
      "active": true
    },
    {
      "id": 311,
      "name": "水无月",
      "aliases": [
        "杌",
        "Minazuki"
      ],
      "active": true
    },
    {
      "id": 312,
      "name": "文月",
      "aliases": [
        "橗",
        "Fumizuki"
      ],
      "active": true
    },
    {
      "id": 313,
      "name": "长月",
      "aliases": [
        "枨",
        "Nagatsuki"
      ],
      "active": true
    },
    {
      "id": 314,
      "name": "三日月",
      "aliases": [
        "檧",
        "Mikazuki"
      ],
      "active": true
    },
    {
      "id": 315,
      "name": "海风",
      "aliases": [
        "菪",
        "Umikaze"
      ],
      "active": true
    },
    {
      "id": 316,
      "name": "山风",
      "aliases": [
        "杣",
        "Yamakaze"
      ],
      "active": true
    },
    {
      "id": 317,
      "name": "江风",
      "aliases": [
        "茳",
        "Kawakaze"
      ],
      "active": true
    },
    {
      "id": 318,
      "name": "清波",
      "aliases": [
        "棈",
        "Kiyonami"
      ],
      "active": true
    },
    {
      "id": 319,
      "name": "新月JP",
      "aliases": [
        "枥",
        "Niizuki"
      ],
      "active": true
    },
    {
      "id": 320,
      "name": "春月",
      "aliases": [
        "桸",
        "Harutsuki"
      ],
      "active": true
    },
    {
      "id": 321,
      "name": "宵月",
      "aliases": [
        "楛",
        "Yoizuki"
      ],
      "active": true
    },
    {
      "id": 322,
      "name": "浦风",
      "aliases": [
        "槆",
        "Urakaze"
      ],
      "active": true
    },
    {
      "id": 323,
      "name": "矶风",
      "aliases": [
        "柉",
        "Isokaze"
      ],
      "active": true
    },
    {
      "id": 324,
      "name": "滨风",
      "aliases": [
        "樇",
        "Hamakaze"
      ],
      "active": true
    },
    {
      "id": 325,
      "name": "谷风",
      "aliases": [
        "栭",
        "Tanikaze"
      ],
      "active": true
    },
    {
      "id": 326,
      "name": "朝潮",
      "aliases": [
        "棹",
        "Asashio"
      ],
      "active": true
    },
    {
      "id": 327,
      "name": "大潮",
      "aliases": [
        "荙",
        "Ōshio",
        "Ooshio"
      ],
      "active": true
    },
    {
      "id": 328,
      "name": "满潮",
      "aliases": [
        "樠",
        "Michishio"
      ],
      "active": true
    },
    {
      "id": 329,
      "name": "荒潮",
      "aliases": [
        "栘",
        "Arashio"
      ],
      "active": true
    },
    {
      "id": 330,
      "name": "浦波",
      "aliases": [
        "朴",
        "Uranami"
      ],
      "active": true
    },
    {
      "id": 331,
      "name": "旗风",
      "aliases": [
        "樋",
        "Hatakaze"
      ],
      "active": true
    },
    {
      "id": 332,
      "name": "卷波",
      "aliases": [
        "棬",
        "Makinami"
      ],
      "active": true
    },
    {
      "id": 333,
      "name": "霞",
      "aliases": [
        "蕸",
        "Kasumi"
      ],
      "active": true
    },
    {
      "id": 334,
      "name": "花月",
      "aliases": [
        "榵",
        "Hanazuki"
      ],
      "active": true
    },
    {
      "id": 335,
      "name": "长波",
      "aliases": [
        "苌",
        "Naganami"
      ],
      "active": true
    },
    {
      "id": 336,
      "name": "凉月",
      "aliases": [
        "栎",
        "Suzutsuki"
      ],
      "active": true
    },
    {
      "id": 337,
      "name": "追风",
      "aliases": [
        "椎",
        "Oite"
      ],
      "active": true
    },
    {
      "id": 338,
      "name": "风云",
      "aliases": [
        "枟",
        "Kazagumo"
      ],
      "active": true
    },
    {
      "id": 339,
      "name": "若月",
      "aliases": [
        "若",
        "Wakatsuki"
      ],
      "active": true
    },
    {
      "id": 340,
      "name": "初月",
      "aliases": [
        "檚",
        "Hatsuzuki"
      ],
      "active": true
    },
    {
      "id": 341,
      "name": "朝凪",
      "aliases": [
        "桎",
        "Asanagi"
      ],
      "active": true
    },
    {
      "id": 342,
      "name": "凉波",
      "aliases": [
        "椋",
        "Suzunami"
      ],
      "active": true
    },
    {
      "id": 343,
      "name": "妙风",
      "aliases": [
        "杪",
        "Taekaze"
      ],
      "active": true
    },
    {
      "id": 344,
      "name": "夕张",
      "aliases": [
        "狐",
        "Yūbari",
        "Yuubari"
      ],
      "active": true
    },
    {
      "id": 345,
      "name": "长良",
      "aliases": [
        "貊",
        "Nagara"
      ],
      "active": true
    },
    {
      "id": 346,
      "name": "五十铃",
      "aliases": [
        "貉",
        "Isuzu"
      ],
      "active": true
    },
    {
      "id": 347,
      "name": "名取",
      "aliases": [
        "猽",
        "Natori"
      ],
      "active": true
    },
    {
      "id": 348,
      "name": "由良",
      "aliases": [
        "㹨",
        "Yura"
      ],
      "active": true
    },
    {
      "id": 349,
      "name": "鬼怒",
      "aliases": [
        "猤",
        "Kinu"
      ],
      "active": true
    },
    {
      "id": 350,
      "name": "阿武隈",
      "aliases": [
        "貃",
        "Abukuma"
      ],
      "active": true
    },
    {
      "id": 351,
      "name": "最上",
      "aliases": [
        "猨",
        "Mogami"
      ],
      "active": true
    },
    {
      "id": 352,
      "name": "三隈",
      "aliases": [
        "狻",
        "Mikuma"
      ],
      "active": true
    },
    {
      "id": 353,
      "name": "川内",
      "aliases": [
        "貆",
        "Sendai"
      ],
      "active": true
    },
    {
      "id": 354,
      "name": "神通",
      "aliases": [
        "貎",
        "Jintsū",
        "Jintsuu"
      ],
      "active": true
    },
    {
      "id": 355,
      "name": "那珂",
      "aliases": [
        "豻",
        "Naka"
      ],
      "active": true
    },
    {
      "id": 356,
      "name": "阿贺野",
      "aliases": [
        "豼",
        "Agano"
      ],
      "active": true
    },
    {
      "id": 357,
      "name": "能代",
      "aliases": [
        "貅",
        "Noshiro"
      ],
      "active": true
    },
    {
      "id": 358,
      "name": "酒匂",
      "aliases": [
        "貄",
        "Sakawa"
      ],
      "active": true
    },
    {
      "id": 359,
      "name": "能代(μ兵装)",
      "aliases": [
        "貅(μ兵装)",
        "Noshiro",
        "Noshiro µ"
      ],
      "active": true
    },
    {
      "id": 360,
      "name": "渡良濑",
      "aliases": [
        "獭",
        "Watarase"
      ],
      "active": true
    },
    {
      "id": 361,
      "name": "绫濑",
      "aliases": [
        "狑",
        "Ayase"
      ],
      "active": true
    },
    {
      "id": 362,
      "name": "水无濑",
      "aliases": [
        "鼯",
        "Minase"
      ],
      "active": true
    },
    {
      "id": 363,
      "name": "古鹰",
      "aliases": [
        "狼",
        "Furutaka"
      ],
      "active": true
    },
    {
      "id": 364,
      "name": "加古",
      "aliases": [
        "狌",
        "Kako"
      ],
      "active": true
    },
    {
      "id": 365,
      "name": "青叶",
      "aliases": [
        "犹",
        "Aoba"
      ],
      "active": true
    },
    {
      "id": 366,
      "name": "衣笠",
      "aliases": [
        "猅",
        "Kinugasa"
      ],
      "active": true
    },
    {
      "id": 367,
      "name": "筑摩",
      "aliases": [
        "狘",
        "Chikuma"
      ],
      "active": true
    },
    {
      "id": 368,
      "name": "妙高",
      "aliases": [
        "獌",
        "Myōkō",
        "Myoukou"
      ],
      "active": true
    },
    {
      "id": 369,
      "name": "那智",
      "aliases": [
        "狏",
        "Nachi"
      ],
      "active": true
    },
    {
      "id": 370,
      "name": "足柄",
      "aliases": [
        "狳",
        "Ashigara"
      ],
      "active": true
    },
    {
      "id": 371,
      "name": "羽黑",
      "aliases": [
        "犰",
        "Haguro"
      ],
      "active": true
    },
    {
      "id": 372,
      "name": "高雄",
      "aliases": [
        "獒",
        "Takao"
      ],
      "active": true
    },
    {
      "id": 373,
      "name": "爱宕",
      "aliases": [
        "犬",
        "Atago"
      ],
      "active": true
    },
    {
      "id": 374,
      "name": "摩耶",
      "aliases": [
        "犮",
        "Maya"
      ],
      "active": true
    },
    {
      "id": 375,
      "name": "鸟海",
      "aliases": [
        "猋",
        "Chōkai",
        "Choukai"
      ],
      "active": true
    },
    {
      "id": 376,
      "name": "铃谷",
      "aliases": [
        "狺",
        "Suzuya"
      ],
      "active": true
    },
    {
      "id": 377,
      "name": "熊野",
      "aliases": [
        "猁",
        "Kumano"
      ],
      "active": true
    },
    {
      "id": 378,
      "name": "云仙",
      "aliases": [
        "猃",
        "Unzen"
      ],
      "active": true
    },
    {
      "id": 379,
      "name": "浅间",
      "aliases": [
        "猏",
        "Asama"
      ],
      "active": true
    },
    {
      "id": 380,
      "name": "金刚",
      "aliases": [
        "鲤",
        "Kongō",
        "Kongou"
      ],
      "active": true
    },
    {
      "id": 381,
      "name": "比叡",
      "aliases": [
        "鲟",
        "Hiei"
      ],
      "active": true
    },
    {
      "id": 382,
      "name": "榛名",
      "aliases": [
        "鲑",
        "Haruna"
      ],
      "active": true
    },
    {
      "id": 383,
      "name": "雾岛",
      "aliases": [
        "鳗",
        "Kirishima"
      ],
      "active": true
    },
    {
      "id": 384,
      "name": "天城",
      "aliases": [
        "鳐",
        "Amagi"
      ],
      "active": true
    },
    {
      "id": 385,
      "name": "小比叡",
      "aliases": [
        "小鲟",
        "Hiei-chan"
      ],
      "active": true
    },
    {
      "id": 386,
      "name": "小天城",
      "aliases": [
        "小鳐",
        "Amagi-chan"
      ],
      "active": true
    },
    {
      "id": 387,
      "name": "金刚(μ兵装)",
      "aliases": [
        "鲤(μ兵装)",
        "Kongō",
        "Kongou µ"
      ],
      "active": true
    },
    {
      "id": 388,
      "name": "扶桑",
      "aliases": [
        "魟",
        "Fusō",
        "Fusou"
      ],
      "active": true
    },
    {
      "id": 389,
      "name": "山城",
      "aliases": [
        "鲼",
        "Yamashiro"
      ],
      "active": true
    },
    {
      "id": 390,
      "name": "伊势",
      "aliases": [
        "鳌",
        "Ise"
      ],
      "active": true
    },
    {
      "id": 391,
      "name": "日向",
      "aliases": [
        "螯",
        "Hyūga",
        "Hyuuga"
      ],
      "active": true
    },
    {
      "id": 392,
      "name": "长门",
      "aliases": [
        "鲨",
        "Nagato"
      ],
      "active": true
    },
    {
      "id": 393,
      "name": "陆奥",
      "aliases": [
        "鲛",
        "Mutsu"
      ],
      "active": true
    },
    {
      "id": 394,
      "name": "加贺BB",
      "aliases": [
        "鸾",
        "Kaga",
        "Kaga(BB)"
      ],
      "active": true
    },
    {
      "id": 395,
      "name": "土佐",
      "aliases": [
        "䲠",
        "Tosa"
      ],
      "active": true
    },
    {
      "id": 396,
      "name": "武藏",
      "aliases": [
        "鳄",
        "Musashi"
      ],
      "active": true
    },
    {
      "id": 397,
      "name": "三笠",
      "aliases": [
        "鲐",
        "Mikasa"
      ],
      "active": true
    },
    {
      "id": 398,
      "name": "纪伊",
      "aliases": [
        "鲣",
        "Kii"
      ],
      "active": true
    },
    {
      "id": 399,
      "name": "尾张",
      "aliases": [
        "鳂",
        "Owari"
      ],
      "active": true
    },
    {
      "id": 400,
      "name": "骏河",
      "aliases": [
        "鲪",
        "Suruga"
      ],
      "active": true
    },
    {
      "id": 401,
      "name": "近江",
      "aliases": [
        "鳉",
        "Ōmi",
        "Oumi"
      ],
      "active": true
    },
    {
      "id": 402,
      "name": "飞鹰",
      "aliases": [
        "鸱",
        "Hiyō",
        "Hiyou"
      ],
      "active": true
    },
    {
      "id": 403,
      "name": "隼鹰",
      "aliases": [
        "鸢",
        "Jun'yō",
        "Junyou"
      ],
      "active": true
    },
    {
      "id": 404,
      "name": "凤翔",
      "aliases": [
        "凤",
        "Hōshō",
        "Houshou"
      ],
      "active": true
    },
    {
      "id": 405,
      "name": "瑞凤",
      "aliases": [
        "鹳",
        "Zuihō",
        "Zuihou"
      ],
      "active": true
    },
    {
      "id": 406,
      "name": "祥凤",
      "aliases": [
        "鹞",
        "Shōhō",
        "Shouhou"
      ],
      "active": true
    },
    {
      "id": 407,
      "name": "龙骧",
      "aliases": [
        "枭",
        "Ryūjō",
        "Ryuujou"
      ],
      "active": true
    },
    {
      "id": 408,
      "name": "龙凤",
      "aliases": [
        "鸗",
        "Ryūhō",
        "Ryuuhou"
      ],
      "active": true
    },
    {
      "id": 409,
      "name": "千岁",
      "aliases": [
        "鹂",
        "Chitose"
      ],
      "active": true
    },
    {
      "id": 410,
      "name": "千代田",
      "aliases": [
        "鹃",
        "Chiyoda"
      ],
      "active": true
    },
    {
      "id": 411,
      "name": "赤城",
      "aliases": [
        "凰",
        "Akagi"
      ],
      "active": true
    },
    {
      "id": 412,
      "name": "加贺",
      "aliases": [
        "鸾",
        "Kaga"
      ],
      "active": true
    },
    {
      "id": 413,
      "name": "苍龙",
      "aliases": [
        "蛟",
        "Sōryū",
        "Souryuu"
      ],
      "active": true
    },
    {
      "id": 414,
      "name": "飞龙",
      "aliases": [
        "龙",
        "Hiryū",
        "Hiryuu"
      ],
      "active": true
    },
    {
      "id": 415,
      "name": "翔鹤",
      "aliases": [
        "鹬",
        "Shōkaku",
        "Shoukaku"
      ],
      "active": true
    },
    {
      "id": 416,
      "name": "瑞鹤",
      "aliases": [
        "鹤",
        "Zuikaku"
      ],
      "active": true
    },
    {
      "id": 417,
      "name": "大凤",
      "aliases": [
        "鹩",
        "Taihō",
        "Taihou"
      ],
      "active": true
    },
    {
      "id": 418,
      "name": "信浓",
      "aliases": [
        "鵗",
        "Shinano"
      ],
      "active": true
    },
    {
      "id": 419,
      "name": "小赤城",
      "aliases": [
        "小凰",
        "Akagi-chan"
      ],
      "active": true
    },
    {
      "id": 420,
      "name": "赤城(μ兵装)",
      "aliases": [
        "凰(μ兵装)",
        "Akagi",
        "Akagi µ"
      ],
      "active": true
    },
    {
      "id": 421,
      "name": "大凤(μ兵装)",
      "aliases": [
        "鹩(μ兵装)",
        "Taihō",
        "Taihou µ"
      ],
      "active": true
    },
    {
      "id": 422,
      "name": "葛城",
      "aliases": [
        "鹖",
        "Katsuragi"
      ],
      "active": true
    },
    {
      "id": 423,
      "name": "小大凤",
      "aliases": [
        "小鹩",
        "TAIHOU-CHAN",
        "Taihou-chan"
      ],
      "active": true
    },
    {
      "id": 424,
      "name": "小信浓",
      "aliases": [
        "小鵗",
        "Shinano-chan"
      ],
      "active": true
    },
    {
      "id": 425,
      "name": "天城CV",
      "aliases": [
        "鳐",
        "Amagi",
        "Amagi(CV)"
      ],
      "active": true
    },
    {
      "id": 426,
      "name": "白凤",
      "aliases": [
        "䳆",
        "Hakuhō",
        "Hakuhou"
      ],
      "active": true
    },
    {
      "id": 427,
      "name": "伊19",
      "aliases": [
        "衣玖",
        "I19",
        "I-19"
      ],
      "active": true
    },
    {
      "id": 428,
      "name": "伊26",
      "aliases": [
        "双叶梦",
        "I26",
        "I-26"
      ],
      "active": true
    },
    {
      "id": 429,
      "name": "伊58",
      "aliases": [
        "冴矢",
        "I58",
        "I-58"
      ],
      "active": true
    },
    {
      "id": 430,
      "name": "伊25",
      "aliases": [
        "双叶檎",
        "I25",
        "I-25"
      ],
      "active": true
    },
    {
      "id": 431,
      "name": "伊56",
      "aliases": [
        "冴梦",
        "I56",
        "I-56"
      ],
      "active": true
    },
    {
      "id": 432,
      "name": "伊168",
      "aliases": [
        "伊吕波",
        "I168",
        "I-168"
      ],
      "active": true
    },
    {
      "id": 433,
      "name": "明石",
      "aliases": [
        "茗",
        "Akashi"
      ],
      "active": true
    },
    {
      "id": 434,
      "name": "伊13",
      "aliases": [
        "十纱",
        "I13",
        "I-13"
      ],
      "active": true
    },
    {
      "id": 435,
      "name": "伊404",
      "aliases": [
        "诗玲寺",
        "I404",
        "I-404"
      ],
      "active": true
    },
    {
      "id": 436,
      "name": "樫野",
      "aliases": [
        "㭴",
        "Kashino"
      ],
      "active": true
    },
    {
      "id": 437,
      "name": "伊吹",
      "aliases": [
        "峦",
        "Ibuki"
      ],
      "active": true
    },
    {
      "id": 438,
      "name": "出云",
      "aliases": [
        "侌",
        "Izumo"
      ],
      "active": true
    },
    {
      "id": 439,
      "name": "北风",
      "aliases": [
        "苝",
        "Kitakaze"
      ],
      "active": true
    },
    {
      "id": 440,
      "name": "吾妻",
      "aliases": [
        "猉",
        "Azuma"
      ],
      "active": true
    },
    {
      "id": 441,
      "name": "白龙",
      "aliases": [
        "鹫",
        "Hakuryū",
        "Hakuryuu"
      ],
      "active": true
    },
    {
      "id": 442,
      "name": "四万十",
      "aliases": [
        "虒",
        "Shimanto"
      ],
      "active": true
    },
    {
      "id": 443,
      "name": "大山",
      "aliases": [
        "鳝",
        "Daisen"
      ],
      "active": true
    },
    {
      "id": 444,
      "name": "Z1",
      "aliases": [
        "莉泽洛特",
        "Leberecht Maass"
      ],
      "active": true
    },
    {
      "id": 445,
      "name": "Z2",
      "aliases": [
        "格尔达",
        "Georg Thiele"
      ],
      "active": true
    },
    {
      "id": 446,
      "name": "Z9",
      "aliases": [
        "沃尔普加",
        "Wolfgang Zenker"
      ],
      "active": true
    },
    {
      "id": 447,
      "name": "Z11",
      "aliases": [
        "伯莎",
        "Bernd von Arnim"
      ],
      "active": true
    },
    {
      "id": 448,
      "name": "Z13",
      "aliases": [
        "埃丝特",
        "Erich Koellner"
      ],
      "active": true
    },
    {
      "id": 449,
      "name": "Z16",
      "aliases": [
        "弗蕾德贡",
        "Friedrich Eckoldt"
      ],
      "active": true
    },
    {
      "id": 450,
      "name": "Z18",
      "aliases": [
        "汉娜",
        "Hans Lüdemann"
      ],
      "active": true
    },
    {
      "id": 451,
      "name": "Z19",
      "aliases": [
        "赫尔米娜",
        "Hermann Künne"
      ],
      "active": true
    },
    {
      "id": 452,
      "name": "Z20",
      "aliases": [
        "卡洛琳",
        "Karl Galster"
      ],
      "active": true
    },
    {
      "id": 453,
      "name": "Z21",
      "aliases": [
        "威尔赫米娜",
        "Wilhelm Heidkamp"
      ],
      "active": true
    },
    {
      "id": 454,
      "name": "Z23",
      "aliases": [
        "妮米"
      ],
      "active": true
    },
    {
      "id": 455,
      "name": "Z24",
      "aliases": [
        "妮丝"
      ],
      "active": true
    },
    {
      "id": 456,
      "name": "Z25",
      "aliases": [
        "妮可"
      ],
      "active": true
    },
    {
      "id": 457,
      "name": "Z26",
      "aliases": [
        "妮露"
      ],
      "active": true
    },
    {
      "id": 458,
      "name": "Z28",
      "aliases": [
        "妮娅"
      ],
      "active": true
    },
    {
      "id": 459,
      "name": "Z35",
      "aliases": [
        "咪菓"
      ],
      "active": true
    },
    {
      "id": 460,
      "name": "Z36",
      "aliases": [
        "咪露"
      ],
      "active": true
    },
    {
      "id": 461,
      "name": "Z43",
      "aliases": [
        "希咪"
      ],
      "active": true
    },
    {
      "id": 462,
      "name": "Z46",
      "aliases": [
        "希露"
      ],
      "active": true
    },
    {
      "id": 463,
      "name": "Z47",
      "aliases": [
        "希娜"
      ],
      "active": true
    },
    {
      "id": 464,
      "name": "Z52",
      "aliases": [
        "柯妮"
      ],
      "active": true
    },
    {
      "id": 465,
      "name": "奥托·冯·阿尔文斯莱本",
      "aliases": [
        "奥莉薇娅·冯·阿诺德",
        "Otto von Alvensleben"
      ],
      "active": true
    },
    {
      "id": 466,
      "name": "柯尼斯堡",
      "aliases": [
        "阿尔伯缇娜",
        "Königsberg"
      ],
      "active": true
    },
    {
      "id": 467,
      "name": "卡尔斯鲁厄",
      "aliases": [
        "夏璐尔",
        "Karlsruhe"
      ],
      "active": true
    },
    {
      "id": 468,
      "name": "科隆",
      "aliases": [
        "克劳迪亚",
        "Köln"
      ],
      "active": true
    },
    {
      "id": 469,
      "name": "莱比锡",
      "aliases": [
        "莉普莎",
        "Leipzig"
      ],
      "active": true
    },
    {
      "id": 470,
      "name": "纽伦堡",
      "aliases": [
        "诺菈",
        "Nürnberg"
      ],
      "active": true
    },
    {
      "id": 471,
      "name": "马格德堡",
      "aliases": [
        "马格达莱娜",
        "Magdeburg"
      ],
      "active": true
    },
    {
      "id": 472,
      "name": "埃姆登",
      "aliases": [
        "埃玛",
        "Emden"
      ],
      "active": true
    },
    {
      "id": 473,
      "name": "埃尔宾",
      "aliases": [
        "埃尔薇菈",
        "Elbing"
      ],
      "active": true
    },
    {
      "id": 474,
      "name": "雷根斯堡",
      "aliases": [
        "瑞吉娜",
        "Regensburg"
      ],
      "active": true
    },
    {
      "id": 475,
      "name": "杜伊斯堡",
      "aliases": [
        "多琳妮娅",
        "Duisburg"
      ],
      "active": true
    },
    {
      "id": 476,
      "name": "希佩尔海军上将",
      "aliases": [
        "芙兰希卡",
        "Admiral Hipper"
      ],
      "active": true
    },
    {
      "id": 477,
      "name": "布吕歇尔",
      "aliases": [
        "布丽吉特",
        "Blücher"
      ],
      "active": true
    },
    {
      "id": 478,
      "name": "欧根亲王",
      "aliases": [
        "萨沃伊亲王",
        "Prinz Eugen"
      ],
      "active": true
    },
    {
      "id": 479,
      "name": "德意志",
      "aliases": [
        "亚勒玛妮亚",
        "Deutschland"
      ],
      "active": true
    },
    {
      "id": 480,
      "name": "斯佩伯爵海军上将",
      "aliases": [
        "休贝塔伯爵",
        "Admiral Graf.Spee",
        "Admiral Graf Spee"
      ],
      "active": true
    },
    {
      "id": 481,
      "name": "希佩尔海军上将(μ兵装)",
      "aliases": [
        "芙兰希卡(μ兵装)",
        "Admiral Hipper",
        "Admiral Hipper µ"
      ],
      "active": true
    },
    {
      "id": 482,
      "name": "罗恩(μ兵装)",
      "aliases": [
        "艾伯塔(μ兵装)",
        "Roon",
        "Roon µ"
      ],
      "active": true
    },
    {
      "id": 483,
      "name": "海因里希亲王",
      "aliases": [
        "赫莉米娜亲王",
        "Prinz Heinrich"
      ],
      "active": true
    },
    {
      "id": 484,
      "name": "阿达尔伯特亲王",
      "aliases": [
        "阿德莉娅亲王",
        "Prinz Adalbert"
      ],
      "active": true
    },
    {
      "id": 485,
      "name": "约克DE",
      "aliases": [
        "伊冯娜",
        "Yorck"
      ],
      "active": true
    },
    {
      "id": 486,
      "name": "小欧根",
      "aliases": [
        "小萨沃伊",
        "Little Prinz Eugen"
      ],
      "active": true
    },
    {
      "id": 487,
      "name": "小斯佩",
      "aliases": [
        "小休贝塔",
        "Little Spee"
      ],
      "active": true
    },
    {
      "id": 488,
      "name": "腓特烈·卡尔",
      "aliases": [
        "腓德雷卡·卡尔",
        "Friedrich Carl"
      ],
      "active": true
    },
    {
      "id": 489,
      "name": "欧根亲王(μ兵装)",
      "aliases": [
        "萨沃伊亲王(μ兵装)",
        "Prinz Eugen",
        "Prinz Eugen µ"
      ],
      "active": true
    },
    {
      "id": 490,
      "name": "小埃吉尔",
      "aliases": [
        "小埃格妮丝",
        "Little Ägir"
      ],
      "active": true
    },
    {
      "id": 491,
      "name": "沙恩霍斯特",
      "aliases": [
        "格尔林德",
        "Scharnhorst"
      ],
      "active": true
    },
    {
      "id": 492,
      "name": "格奈森瑙",
      "aliases": [
        "奥古斯塔",
        "Gneisenau"
      ],
      "active": true
    },
    {
      "id": 493,
      "name": "塞德利茨",
      "aliases": [
        "桑德菈",
        "Seydlitz"
      ],
      "active": true
    },
    {
      "id": 494,
      "name": "吕佐夫",
      "aliases": [
        "露西",
        "Lützow"
      ],
      "active": true
    },
    {
      "id": 495,
      "name": "布伦希尔德",
      "aliases": [
        "贝尔莎",
        "Brünhilde"
      ],
      "active": true
    },
    {
      "id": 496,
      "name": "亚尔薇特",
      "aliases": [
        "Alvitr"
      ],
      "active": true
    },
    {
      "id": 497,
      "name": "曾克海军上将",
      "aliases": [
        "泽特",
        "Admiral Zenker"
      ],
      "active": true
    },
    {
      "id": 498,
      "name": "俾斯麦",
      "aliases": [
        "奥德莉亚",
        "Bismarck"
      ],
      "active": true
    },
    {
      "id": 499,
      "name": "提尔比茨",
      "aliases": [
        "阿尔芙莉达",
        "Tirpitz"
      ],
      "active": true
    },
    {
      "id": 500,
      "name": "乌尔里希·冯·胡滕",
      "aliases": [
        "乌尔里克·冯·胡贝尔",
        "Ulrich von Hutten"
      ],
      "active": true
    },
    {
      "id": 501,
      "name": "图林根",
      "aliases": [
        "特鲁德",
        "Thüringen"
      ],
      "active": true
    },
    {
      "id": 502,
      "name": "俾斯麦Zwei",
      "aliases": [
        "奥德莉亚Zwei",
        "Bismarck Zwei"
      ],
      "active": true
    },
    {
      "id": 503,
      "name": "小腓特烈",
      "aliases": [
        "小腓德雷卡",
        "Little Friedrich"
      ],
      "active": true
    },
    {
      "id": 504,
      "name": "威悉",
      "aliases": [
        "威尔玛",
        "Weser"
      ],
      "active": true
    },
    {
      "id": 505,
      "name": "易北",
      "aliases": [
        "埃尔斯贝特",
        "Elbe"
      ],
      "active": true
    },
    {
      "id": 506,
      "name": "亚德",
      "aliases": [
        "阿黛尔",
        "Jade"
      ],
      "active": true
    },
    {
      "id": 507,
      "name": "齐柏林伯爵",
      "aliases": [
        "海拉伯爵",
        "Graf Zeppelin"
      ],
      "active": true
    },
    {
      "id": 508,
      "name": "小齐柏林",
      "aliases": [
        "小海拉",
        "Zeppy"
      ],
      "active": true
    },
    {
      "id": 509,
      "name": "彼得·史特拉塞",
      "aliases": [
        "佩特菈·斯坦贝瑟",
        "Peter Strasser"
      ],
      "active": true
    },
    {
      "id": 510,
      "name": "弗里茨·鲁梅",
      "aliases": [
        "菲莉西娅·鲁梅",
        "Fritz Rumey"
      ],
      "active": true
    },
    {
      "id": 511,
      "name": "U-81",
      "aliases": [
        "优哈依"
      ],
      "active": true
    },
    {
      "id": 512,
      "name": "U-47",
      "aliases": [
        "优希娜"
      ],
      "active": true
    },
    {
      "id": 513,
      "name": "U-557",
      "aliases": [
        "优可可娜"
      ],
      "active": true
    },
    {
      "id": 514,
      "name": "U-556",
      "aliases": [
        "优可可洛"
      ],
      "active": true
    },
    {
      "id": 515,
      "name": "U-73",
      "aliases": [
        "优娜米"
      ],
      "active": true
    },
    {
      "id": 516,
      "name": "U-101",
      "aliases": [
        "优伊欧伊"
      ],
      "active": true
    },
    {
      "id": 517,
      "name": "U-522",
      "aliases": [
        "优柯妮妮"
      ],
      "active": true
    },
    {
      "id": 518,
      "name": "U-110",
      "aliases": [
        "优伊伊丽"
      ],
      "active": true
    },
    {
      "id": 519,
      "name": "U-96",
      "aliases": [
        "优玖露"
      ],
      "active": true
    },
    {
      "id": 520,
      "name": "U-37",
      "aliases": [
        "优米娜"
      ],
      "active": true
    },
    {
      "id": 521,
      "name": "U-410",
      "aliases": [
        "优斯伊丽"
      ],
      "active": true
    },
    {
      "id": 522,
      "name": "U-1206",
      "aliases": [
        "优伊妮欧露"
      ],
      "active": true
    },
    {
      "id": 523,
      "name": "U-31",
      "aliases": [
        "优咪伊"
      ],
      "active": true
    },
    {
      "id": 524,
      "name": "U-552",
      "aliases": [
        "优可可妮"
      ],
      "active": true
    },
    {
      "id": 525,
      "name": "罗恩",
      "aliases": [
        "艾伯塔",
        "Roon"
      ],
      "active": true
    },
    {
      "id": 526,
      "name": "腓特烈大帝",
      "aliases": [
        "腓德雷卡大帝",
        "Friedrich der Große"
      ],
      "active": true
    },
    {
      "id": 527,
      "name": "美因茨",
      "aliases": [
        "米兹",
        "Mainz"
      ],
      "active": true
    },
    {
      "id": 528,
      "name": "奥丁",
      "aliases": [
        "沃登",
        "Odin"
      ],
      "active": true
    },
    {
      "id": 529,
      "name": "埃吉尔",
      "aliases": [
        "埃格妮丝",
        "Ägir"
      ],
      "active": true
    },
    {
      "id": 530,
      "name": "奥古斯特·冯·帕塞瓦尔",
      "aliases": [
        "奥斯特雷德·冯·帕赫贝尔",
        "August von Parseval"
      ],
      "active": true
    },
    {
      "id": 531,
      "name": "鲁普雷希特亲王",
      "aliases": [
        "蕾贝卡亲王",
        "Prinz Rupprecht"
      ],
      "active": true
    },
    {
      "id": 532,
      "name": "菲利克斯·舒尔茨",
      "aliases": [
        "弗郎西斯卡·舒伯特",
        "Felix Schultz"
      ],
      "active": true
    },
    {
      "id": 533,
      "name": "兴登堡",
      "aliases": [
        "希尔德加德",
        "Hindenburg"
      ],
      "active": true
    },
    {
      "id": 534,
      "name": "梅克伦堡",
      "aliases": [
        "梅克琳达",
        "Mecklenburg"
      ],
      "active": true
    },
    {
      "id": 535,
      "name": "鞍山",
      "aliases": [
        "An Shan"
      ],
      "active": true
    },
    {
      "id": 536,
      "name": "抚顺",
      "aliases": [
        "Fu Shun"
      ],
      "active": true
    },
    {
      "id": 537,
      "name": "长春",
      "aliases": [
        "Chang Chun"
      ],
      "active": true
    },
    {
      "id": 538,
      "name": "太原",
      "aliases": [
        "Tai Yuan"
      ],
      "active": true
    },
    {
      "id": 539,
      "name": "龙武",
      "aliases": [
        "Lung Wu"
      ],
      "active": true
    },
    {
      "id": 540,
      "name": "虎贲",
      "aliases": [
        "Hu Pen"
      ],
      "active": true
    },
    {
      "id": 541,
      "name": "飞云",
      "aliases": [
        "Fei Yuen"
      ],
      "active": true
    },
    {
      "id": 542,
      "name": "长风",
      "aliases": [
        "Ch'ang Feng",
        "Chang Feng"
      ],
      "active": true
    },
    {
      "id": 543,
      "name": "伏波",
      "aliases": [
        "Fu Po"
      ],
      "active": true
    },
    {
      "id": 544,
      "name": "逸仙",
      "aliases": [
        "Yat Sen"
      ],
      "active": true
    },
    {
      "id": 545,
      "name": "宁海",
      "aliases": [
        "Ning Hai"
      ],
      "active": true
    },
    {
      "id": 546,
      "name": "平海",
      "aliases": [
        "Ping Hai"
      ],
      "active": true
    },
    {
      "id": 547,
      "name": "应瑞",
      "aliases": [
        "Ying Swei"
      ],
      "active": true
    },
    {
      "id": 548,
      "name": "肇和",
      "aliases": [
        "Chao Ho"
      ],
      "active": true
    },
    {
      "id": 549,
      "name": "海天",
      "aliases": [
        "Hai Tien"
      ],
      "active": true
    },
    {
      "id": 550,
      "name": "海圻",
      "aliases": [
        "Hai Chi"
      ],
      "active": true
    },
    {
      "id": 551,
      "name": "济安",
      "aliases": [
        "Chi An"
      ],
      "active": true
    },
    {
      "id": 552,
      "name": "海容",
      "aliases": [
        "Hai Yung"
      ],
      "active": true
    },
    {
      "id": 553,
      "name": "建武",
      "aliases": [
        "Chien Wu"
      ],
      "active": true
    },
    {
      "id": 554,
      "name": "寰昌",
      "aliases": [
        "Huan Ch'ang"
      ],
      "active": true
    },
    {
      "id": 555,
      "name": "镇海",
      "aliases": [
        "Chen Hai"
      ],
      "active": true
    },
    {
      "id": 556,
      "name": "华甲",
      "aliases": [
        "Hwah Jah"
      ],
      "active": true
    },
    {
      "id": 557,
      "name": "定安",
      "aliases": [
        "Ting An"
      ],
      "active": true
    },
    {
      "id": 558,
      "name": "哈尔滨",
      "aliases": [
        "滨江",
        "Harbin"
      ],
      "active": true
    },
    {
      "id": 559,
      "name": "龙骑兵",
      "aliases": [
        "Carabiniere"
      ],
      "active": true
    },
    {
      "id": 560,
      "name": "文琴佐·焦贝蒂",
      "aliases": [
        "Vincenzo Gioberti"
      ],
      "active": true
    },
    {
      "id": 561,
      "name": "西北风",
      "aliases": [
        "Maestrale"
      ],
      "active": true
    },
    {
      "id": 562,
      "name": "西南风",
      "aliases": [
        "Libeccio"
      ],
      "active": true
    },
    {
      "id": 563,
      "name": "尼科洛索·达雷科",
      "aliases": [
        "Nicoloso da Recco"
      ],
      "active": true
    },
    {
      "id": 564,
      "name": "庞培·马格诺",
      "aliases": [
        "Pompeo Magno"
      ],
      "active": true
    },
    {
      "id": 565,
      "name": "阿尔弗雷多·奥里亚尼",
      "aliases": [
        "Alfredo Oriani"
      ],
      "active": true
    },
    {
      "id": 566,
      "name": "埃曼努埃尔·佩萨格诺",
      "aliases": [
        "Emanuele Pessagno"
      ],
      "active": true
    },
    {
      "id": 567,
      "name": "阿蒂利奥·雷戈洛",
      "aliases": [
        "Attilio Regolo"
      ],
      "active": true
    },
    {
      "id": 568,
      "name": "焦苏埃·卡尔杜齐",
      "aliases": [
        "Giosuè Carducci"
      ],
      "active": true
    },
    {
      "id": 569,
      "name": "阿布鲁齐公爵",
      "aliases": [
        "Duca degli Abruzzi"
      ],
      "active": true
    },
    {
      "id": 570,
      "name": "朱塞佩·加里波第",
      "aliases": [
        "Giuseppe Garibaldi"
      ],
      "active": true
    },
    {
      "id": 571,
      "name": "巴托洛梅奥·科莱奥尼",
      "aliases": [
        "Bartolomeo Colleoni"
      ],
      "active": true
    },
    {
      "id": 572,
      "name": "特伦托",
      "aliases": [
        "Trento"
      ],
      "active": true
    },
    {
      "id": 573,
      "name": "扎拉",
      "aliases": [
        "扎达尔",
        "Zara"
      ],
      "active": true
    },
    {
      "id": 574,
      "name": "波拉",
      "aliases": [
        "Pola"
      ],
      "active": true
    },
    {
      "id": 575,
      "name": "的里雅斯特",
      "aliases": [
        "Trieste"
      ],
      "active": true
    },
    {
      "id": 576,
      "name": "博尔扎诺",
      "aliases": [
        "Bolzano"
      ],
      "active": true
    },
    {
      "id": 577,
      "name": "戈里齐亚",
      "aliases": [
        "Gorizia"
      ],
      "active": true
    },
    {
      "id": 578,
      "name": "维托里奥·维内托",
      "aliases": [
        "Vittorio Veneto"
      ],
      "active": true
    },
    {
      "id": 579,
      "name": "利托里奥",
      "aliases": [
        "Littorio"
      ],
      "active": true
    },
    {
      "id": 580,
      "name": "罗马",
      "aliases": [
        "Roma"
      ],
      "active": true
    },
    {
      "id": 581,
      "name": "加富尔伯爵",
      "aliases": [
        "Conte di Cavour"
      ],
      "active": true
    },
    {
      "id": 582,
      "name": "朱利奥·凯撒",
      "aliases": [
        "Giulio Cesare"
      ],
      "active": true
    },
    {
      "id": 583,
      "name": "安德烈亚·多利亚",
      "aliases": [
        "Andrea Doria"
      ],
      "active": true
    },
    {
      "id": 584,
      "name": "拉斐尔",
      "aliases": [
        "Raffaello"
      ],
      "active": true
    },
    {
      "id": 585,
      "name": "天鹰",
      "aliases": [
        "Aquila"
      ],
      "active": true
    },
    {
      "id": 586,
      "name": "帝国",
      "aliases": [
        "Impero"
      ],
      "active": true
    },
    {
      "id": 587,
      "name": "托里拆利",
      "aliases": [
        "Torricelli"
      ],
      "active": true
    },
    {
      "id": 588,
      "name": "莱昂纳多·达·芬奇",
      "aliases": [
        "Leonardo Da Vinci",
        "Leonardo da Vinci"
      ],
      "active": true
    },
    {
      "id": 589,
      "name": "巴拉卡少校",
      "aliases": [
        "Maggiore Baracca"
      ],
      "active": true
    },
    {
      "id": 590,
      "name": "马可·波罗",
      "aliases": [
        "Marco Polo"
      ],
      "active": true
    },
    {
      "id": 591,
      "name": "那不勒斯",
      "aliases": [
        "Napoli"
      ],
      "active": true
    },
    {
      "id": 592,
      "name": "维托里奥·库尼贝尔蒂",
      "aliases": [
        "Vittorio Cuniberti"
      ],
      "active": true
    },
    {
      "id": 593,
      "name": "威严",
      "aliases": [
        "Grozny"
      ],
      "active": true
    },
    {
      "id": 594,
      "name": "明斯克",
      "aliases": [
        "Minsk"
      ],
      "active": true
    },
    {
      "id": 595,
      "name": "塔什干",
      "aliases": [
        "Tashkent"
      ],
      "active": true
    },
    {
      "id": 596,
      "name": "塔什干(μ兵装)",
      "aliases": [
        "Tashkent",
        "Tashkent µ"
      ],
      "active": true
    },
    {
      "id": 597,
      "name": "神速",
      "aliases": [
        "Stremitelny"
      ],
      "active": true
    },
    {
      "id": 598,
      "name": "雷鸣",
      "aliases": [
        "Gremyashchy"
      ],
      "active": true
    },
    {
      "id": 599,
      "name": "洪亮",
      "aliases": [
        "Gromky"
      ],
      "active": true
    },
    {
      "id": 600,
      "name": "灵敏",
      "aliases": [
        "Soobrazitelny"
      ],
      "active": true
    },
    {
      "id": 601,
      "name": "基辅",
      "aliases": [
        "Kiev"
      ],
      "active": true
    },
    {
      "id": 602,
      "name": "火力",
      "aliases": [
        "Ognevoy"
      ],
      "active": true
    },
    {
      "id": 603,
      "name": "凶猛",
      "aliases": [
        "Svirepy"
      ],
      "active": true
    },
    {
      "id": 604,
      "name": "阿芙乐尔",
      "aliases": [
        "Avrora"
      ],
      "active": true
    },
    {
      "id": 605,
      "name": "水星纪念",
      "aliases": [
        "Pamiat' Merkuria"
      ],
      "active": true
    },
    {
      "id": 606,
      "name": "恰巴耶夫",
      "aliases": [
        "Chapayev"
      ],
      "active": true
    },
    {
      "id": 607,
      "name": "基洛夫",
      "aliases": [
        "Kirov"
      ],
      "active": true
    },
    {
      "id": 608,
      "name": "古比雪夫",
      "aliases": [
        "Kuybyshev"
      ],
      "active": true
    },
    {
      "id": 609,
      "name": "摩尔曼斯克",
      "aliases": [
        "Murmansk"
      ],
      "active": true
    },
    {
      "id": 610,
      "name": "伏罗希洛夫",
      "aliases": [
        "Voroshilov"
      ],
      "active": true
    },
    {
      "id": 611,
      "name": "奥列格",
      "aliases": [
        "Oleg"
      ],
      "active": true
    },
    {
      "id": 612,
      "name": "塔林",
      "aliases": [
        "Tallinn"
      ],
      "active": true
    },
    {
      "id": 613,
      "name": "库尔斯克",
      "aliases": [
        "Kursk"
      ],
      "active": true
    },
    {
      "id": 614,
      "name": "甘古特",
      "aliases": [
        "Gangut"
      ],
      "active": true
    },
    {
      "id": 615,
      "name": "苏维埃同盟",
      "aliases": [
        "苏维埃萨尤斯",
        "Sovetsky Soyuz"
      ],
      "active": true
    },
    {
      "id": 616,
      "name": "苏维埃贝拉罗斯",
      "aliases": [
        "Sovetskaya Belorussiya"
      ],
      "active": true
    },
    {
      "id": 617,
      "name": "苏维埃罗西亚",
      "aliases": [
        "Sovetskaya Rossiya"
      ],
      "active": true
    },
    {
      "id": 618,
      "name": "阿尔汉格尔斯克",
      "aliases": [
        "Arkhangelsk"
      ],
      "active": true
    },
    {
      "id": 619,
      "name": "塞瓦斯托波尔",
      "aliases": [
        "Sevastopol"
      ],
      "active": true
    },
    {
      "id": 620,
      "name": "波尔塔瓦",
      "aliases": [
        "Poltava"
      ],
      "active": true
    },
    {
      "id": 621,
      "name": "喀山",
      "aliases": [
        "Kazan"
      ],
      "active": true
    },
    {
      "id": 622,
      "name": "伏尔加",
      "aliases": [
        "Volga"
      ],
      "active": true
    },
    {
      "id": 623,
      "name": "喀琅施塔得",
      "aliases": [
        "Kronshtadt"
      ],
      "active": true
    },
    {
      "id": 624,
      "name": "契卡洛夫",
      "aliases": [
        "Chkalov"
      ],
      "active": true
    },
    {
      "id": 625,
      "name": "纳希莫夫海军上将",
      "aliases": [
        "Admiral Nakhimov"
      ],
      "active": true
    },
    {
      "id": 626,
      "name": "迪米特里·顿斯科伊",
      "aliases": [
        "Dmitri Donskoi"
      ],
      "active": true
    },
    {
      "id": 627,
      "name": "凯旋",
      "aliases": [
        "Le Triomphant"
      ],
      "active": true
    },
    {
      "id": 628,
      "name": "福尔班",
      "aliases": [
        "Forbin"
      ],
      "active": true
    },
    {
      "id": 629,
      "name": "鲁莽",
      "aliases": [
        "Le Téméraire"
      ],
      "active": true
    },
    {
      "id": 630,
      "name": "倔强",
      "aliases": [
        "L'Opiniâtre"
      ],
      "active": true
    },
    {
      "id": 631,
      "name": "大胆",
      "aliases": [
        "Le Hardi"
      ],
      "active": true
    },
    {
      "id": 632,
      "name": "可怖",
      "aliases": [
        "Le Terrible"
      ],
      "active": true
    },
    {
      "id": 633,
      "name": "马耶·布雷泽",
      "aliases": [
        "Maillé Brézé"
      ],
      "active": true
    },
    {
      "id": 634,
      "name": "鲁莽(μ兵装)",
      "aliases": [
        "Le Téméraire",
        "Le Téméraire µ"
      ],
      "active": true
    },
    {
      "id": 635,
      "name": "埃米尔·贝尔汀",
      "aliases": [
        "Émile Bertin"
      ],
      "active": true
    },
    {
      "id": 636,
      "name": "圣女贞德",
      "aliases": [
        "Jeanne d'Arc"
      ],
      "active": true
    },
    {
      "id": 637,
      "name": "吉尚",
      "aliases": [
        "Guichen"
      ],
      "active": true
    },
    {
      "id": 638,
      "name": "迪盖·特鲁因",
      "aliases": [
        "Duguay-Trouin"
      ],
      "active": true
    },
    {
      "id": 639,
      "name": "絮弗伦",
      "aliases": [
        "Suffren"
      ],
      "active": true
    },
    {
      "id": 640,
      "name": "布伦努斯",
      "aliases": [
        "Brennus"
      ],
      "active": true
    },
    {
      "id": 641,
      "name": "迪凯纳",
      "aliases": [
        "Duquesne"
      ],
      "active": true
    },
    {
      "id": 642,
      "name": "马塞纳",
      "aliases": [
        "Masséna"
      ],
      "active": true
    },
    {
      "id": 643,
      "name": "黎塞留",
      "aliases": [
        "Richelieu"
      ],
      "active": true
    },
    {
      "id": 644,
      "name": "里昂",
      "aliases": [
        "Lyon"
      ],
      "active": true
    },
    {
      "id": 645,
      "name": "阿尔萨斯",
      "aliases": [
        "Alsace"
      ],
      "active": true
    },
    {
      "id": 646,
      "name": "贝劳森林",
      "aliases": [
        "Bois Belleau"
      ],
      "active": true
    },
    {
      "id": 647,
      "name": "贝亚恩",
      "aliases": [
        "Béarn"
      ],
      "active": true
    },
    {
      "id": 648,
      "name": "伴尔维",
      "aliases": [
        "Painlevé"
      ],
      "active": true
    },
    {
      "id": 649,
      "name": "絮库夫",
      "aliases": [
        "Surcouf"
      ],
      "active": true
    },
    {
      "id": 650,
      "name": "路易九世",
      "aliases": [
        "Saint Louis"
      ],
      "active": true
    },
    {
      "id": 651,
      "name": "香槟",
      "aliases": [
        "Champagne"
      ],
      "active": true
    },
    {
      "id": 652,
      "name": "布雷斯特",
      "aliases": [
        "Brest"
      ],
      "active": true
    },
    {
      "id": 653,
      "name": "贝亚德",
      "aliases": [
        "Bayard"
      ],
      "active": true
    },
    {
      "id": 654,
      "name": "勒马尔",
      "aliases": [
        "Le Mars"
      ],
      "active": true
    },
    {
      "id": 655,
      "name": "塔尔图",
      "aliases": [
        "Tartu"
      ],
      "active": true
    },
    {
      "id": 656,
      "name": "沃克兰",
      "aliases": [
        "Vauquelin"
      ],
      "active": true
    },
    {
      "id": 657,
      "name": "凯尔圣",
      "aliases": [
        "Kersaint"
      ],
      "active": true
    },
    {
      "id": 658,
      "name": "花剑",
      "aliases": [
        "Fleuret"
      ],
      "active": true
    },
    {
      "id": 659,
      "name": "重剑",
      "aliases": [
        "Épée"
      ],
      "active": true
    },
    {
      "id": 660,
      "name": "莫加多尔",
      "aliases": [
        "Mogador"
      ],
      "active": true
    },
    {
      "id": 661,
      "name": "恶毒",
      "aliases": [
        "Le Malin"
      ],
      "active": true
    },
    {
      "id": 662,
      "name": "恶毒(μ兵装)",
      "aliases": [
        "Le Malin",
        "Le Malin µ"
      ],
      "active": true
    },
    {
      "id": 663,
      "name": "不屈",
      "aliases": [
        "L'Indomptable"
      ],
      "active": true
    },
    {
      "id": 664,
      "name": "果敢",
      "aliases": [
        "L'Audacieux"
      ],
      "active": true
    },
    {
      "id": 665,
      "name": "拉·加利索尼埃",
      "aliases": [
        "La Galissonnière"
      ],
      "active": true
    },
    {
      "id": 666,
      "name": "马赛曲",
      "aliases": [
        "Marseillaise"
      ],
      "active": true
    },
    {
      "id": 667,
      "name": "福煦",
      "aliases": [
        "Foch"
      ],
      "active": true
    },
    {
      "id": 668,
      "name": "阿尔及利亚",
      "aliases": [
        "Algérie"
      ],
      "active": true
    },
    {
      "id": 669,
      "name": "迪普莱克斯",
      "aliases": [
        "Dupleix"
      ],
      "active": true
    },
    {
      "id": 670,
      "name": "敦刻尔克",
      "aliases": [
        "Dunkerque"
      ],
      "active": true
    },
    {
      "id": 671,
      "name": "斯特拉斯堡",
      "aliases": [
        "Strasbourg"
      ],
      "active": true
    },
    {
      "id": 672,
      "name": "让·巴尔",
      "aliases": [
        "简·布罗伊",
        "Jean Bart"
      ],
      "active": true
    },
    {
      "id": 673,
      "name": "克莱蒙梭",
      "aliases": [
        "Clemenceau"
      ],
      "active": true
    },
    {
      "id": 674,
      "name": "加斯科涅(μ兵装)",
      "aliases": [
        "Gascogne",
        "Gascogne µ"
      ],
      "active": true
    },
    {
      "id": 675,
      "name": "霞飞",
      "aliases": [
        "Joffre"
      ],
      "active": true
    },
    {
      "id": 676,
      "name": "加斯科涅",
      "aliases": [
        "Gascogne"
      ],
      "active": true
    },
    {
      "id": 677,
      "name": "弗兰德尔",
      "aliases": [
        "Flandre"
      ],
      "active": true
    },
    {
      "id": 678,
      "name": "埃佛森",
      "aliases": [
        "Evertsen"
      ],
      "active": true
    },
    {
      "id": 679,
      "name": "七省",
      "aliases": [
        "De Zeven Provinciën"
      ],
      "active": true
    },
    {
      "id": 680,
      "name": "金狮",
      "aliases": [
        "ハウデン・リーウ",
        "Gouden Leeuw"
      ],
      "active": true
    },
    {
      "id": 681,
      "name": "夜刀神十香",
      "aliases": [
        "Tohka Yatogami"
      ],
      "active": true
    },
    {
      "id": 682,
      "name": "鸢一折纸",
      "aliases": [
        "Origami Tobiichi"
      ],
      "active": true
    },
    {
      "id": 683,
      "name": "五河琴里",
      "aliases": [
        "Kotori Itsuka"
      ],
      "active": true
    },
    {
      "id": 684,
      "name": "四糸乃",
      "aliases": [
        "Yoshino"
      ],
      "active": true
    },
    {
      "id": 685,
      "name": "时崎狂三",
      "aliases": [
        "Kurumi Tokisaki"
      ],
      "active": true
    },
    {
      "id": 686,
      "name": "八舞耶倶矢·八舞夕弦",
      "aliases": [
        "Kaguya Yamai・Yuzuru Yamai"
      ],
      "active": true
    },
    {
      "id": 687,
      "name": "皇家财富号",
      "aliases": [
        "Royal Fortune"
      ],
      "active": true
    },
    {
      "id": 688,
      "name": "圣马丁号",
      "aliases": [
        "São Martinho"
      ],
      "active": true
    },
    {
      "id": 689,
      "name": "金鹿号",
      "aliases": [
        "Golden Hind"
      ],
      "active": true
    },
    {
      "id": 690,
      "name": "玛丽·西莱斯特号",
      "aliases": [
        "Mary Celeste"
      ],
      "active": true
    },
    {
      "id": 691,
      "name": "维达号",
      "aliases": [
        "Whydah"
      ],
      "active": true
    },
    {
      "id": 692,
      "name": "加里冒险号",
      "aliases": [
        "Adventure Galley"
      ],
      "active": true
    },
    {
      "id": 693,
      "name": "冈依沙瓦号",
      "aliases": [
        "Ganj-i-Sawai"
      ],
      "active": true
    },
    {
      "id": 694,
      "name": "幻想号",
      "aliases": [
        "Fancy"
      ],
      "active": true
    },
    {
      "id": 695,
      "name": "和睦号",
      "aliases": [
        "Amity"
      ],
      "active": true
    },
    {
      "id": 696,
      "name": "朴茨茅斯冒险号",
      "aliases": [
        "Portsmouth Adventure"
      ],
      "active": true
    },
    {
      "id": 697,
      "name": "海豚号",
      "aliases": [
        "Dolphin"
      ],
      "active": true
    },
    {
      "id": 698,
      "name": "安妮女王复仇号",
      "aliases": [
        "Queen Anne's Revenge"
      ],
      "active": true
    },
    {
      "id": 699,
      "name": "莱姆号",
      "aliases": [
        "Lyme"
      ],
      "active": true
    },
    {
      "id": 700,
      "name": "珍珠号",
      "aliases": [
        "Pearl"
      ],
      "active": true
    },
    {
      "id": 701,
      "name": "皇家詹姆斯号",
      "aliases": [
        "Royal James"
      ],
      "active": true
    },
    {
      "id": 702,
      "name": "冒险号",
      "aliases": [
        "Adventure"
      ],
      "active": true
    },
    {
      "id": 703,
      "name": "猎人·META",
      "aliases": [
        "Hunter META"
      ],
      "active": true
    },
    {
      "id": 704,
      "name": "命运女神·META",
      "aliases": [
        "Fortune META"
      ],
      "active": true
    },
    {
      "id": 705,
      "name": "旗风·META",
      "aliases": [
        "樋·META",
        "Hatakaze META"
      ],
      "active": true
    },
    {
      "id": 706,
      "name": "金伯利·META",
      "aliases": [
        "Kimberly META"
      ],
      "active": true
    },
    {
      "id": 707,
      "name": "吸血鬼·META",
      "aliases": [
        "Vampire META"
      ],
      "active": true
    },
    {
      "id": 708,
      "name": "霞·META",
      "aliases": [
        "蕸·META",
        "Kasumi META"
      ],
      "active": true
    },
    {
      "id": 709,
      "name": "格伦维尔·META",
      "aliases": [
        "Grenville META"
      ],
      "active": true
    },
    {
      "id": 710,
      "name": "江风·META",
      "aliases": [
        "茳·META",
        "Kawakaze META"
      ],
      "active": true
    },
    {
      "id": 711,
      "name": "夕立·META",
      "aliases": [
        "椿·META",
        "Yūdachi META",
        "Yuudachi META"
      ],
      "active": true
    },
    {
      "id": 712,
      "name": "杜威·META",
      "aliases": [
        "Dewey META"
      ],
      "active": true
    },
    {
      "id": 713,
      "name": "海伦娜·META",
      "aliases": [
        "Helena.META",
        "Helena META"
      ],
      "active": true
    },
    {
      "id": 714,
      "name": "孟菲斯·META",
      "aliases": [
        "Memphis META"
      ],
      "active": true
    },
    {
      "id": 715,
      "name": "谢菲尔德·META",
      "aliases": [
        "Sheffield META"
      ],
      "active": true
    },
    {
      "id": 716,
      "name": "拉·加利索尼埃·META",
      "aliases": [
        "La Galissonnière META",
        "La Galissonniére META"
      ],
      "active": true
    },
    {
      "id": 717,
      "name": "神通·META",
      "aliases": [
        "貎·META",
        "Jintsū.META",
        "Jintsuu META"
      ],
      "active": true
    },
    {
      "id": 718,
      "name": "基洛夫·META",
      "aliases": [
        "Kirov(META)",
        "Kirov META"
      ],
      "active": true
    },
    {
      "id": 719,
      "name": "水星纪念·META",
      "aliases": [
        "Pamiat' Merkuria(META)",
        "Pamiat' Merkuria META"
      ],
      "active": true
    },
    {
      "id": 720,
      "name": "博伊西·META",
      "aliases": [
        "树城·META",
        "Boise META"
      ],
      "active": true
    },
    {
      "id": 721,
      "name": "克利夫兰·META",
      "aliases": [
        "Cleveland META"
      ],
      "active": true
    },
    {
      "id": 722,
      "name": "特伦托·META",
      "aliases": [
        "Trento META"
      ],
      "active": true
    },
    {
      "id": 723,
      "name": "阿尔及利亚·META",
      "aliases": [
        "Algérie META"
      ],
      "active": true
    },
    {
      "id": 724,
      "name": "福煦·META",
      "aliases": [
        "Foch META"
      ],
      "active": true
    },
    {
      "id": 725,
      "name": "威奇塔·META",
      "aliases": [
        "Wichita META"
      ],
      "active": true
    },
    {
      "id": 726,
      "name": "希佩尔海军上将·META",
      "aliases": [
        "芙兰希卡·META",
        "Admiral Hipper META"
      ],
      "active": true
    },
    {
      "id": 727,
      "name": "博尔扎诺·META",
      "aliases": [
        "Bolzano META"
      ],
      "active": true
    },
    {
      "id": 728,
      "name": "格奈森瑙·META",
      "aliases": [
        "奥古斯塔·META",
        "Gneisenau.META",
        "Gneisenau META"
      ],
      "active": true
    },
    {
      "id": 729,
      "name": "沙恩霍斯特·META",
      "aliases": [
        "格尔林德·META",
        "Scharnhorst.META",
        "Scharnhorst META"
      ],
      "active": true
    },
    {
      "id": 730,
      "name": "反击·META",
      "aliases": [
        "Repulse META"
      ],
      "active": true
    },
    {
      "id": 731,
      "name": "声望·META",
      "aliases": [
        "Renown META"
      ],
      "active": true
    },
    {
      "id": 732,
      "name": "比叡·META",
      "aliases": [
        "鲟·META",
        "Hiei META"
      ],
      "active": true
    },
    {
      "id": 733,
      "name": "敦刻尔克·META",
      "aliases": [
        "Dunkerque META"
      ],
      "active": true
    },
    {
      "id": 734,
      "name": "扶桑·META",
      "aliases": [
        "魟·META",
        "Fusō.META",
        "Fusou META"
      ],
      "active": true
    },
    {
      "id": 735,
      "name": "山城·META",
      "aliases": [
        "鲼·META",
        "Yamashiro.META",
        "Yamashiro META"
      ],
      "active": true
    },
    {
      "id": 736,
      "name": "亚利桑那·META",
      "aliases": [
        "Arizona META"
      ],
      "active": true
    },
    {
      "id": 737,
      "name": "伊丽莎白女王·META",
      "aliases": [
        "Queen Elizabeth META"
      ],
      "active": true
    },
    {
      "id": 738,
      "name": "罗德尼·META",
      "aliases": [
        "Rodney META"
      ],
      "active": true
    },
    {
      "id": 739,
      "name": "长门·META",
      "aliases": [
        "鲨·META",
        "Nagato META"
      ],
      "active": true
    },
    {
      "id": 740,
      "name": "朱利奥·凯撒·META",
      "aliases": [
        "Giulio Cesare META"
      ],
      "active": true
    },
    {
      "id": 741,
      "name": "安德烈亚·多利亚·META",
      "aliases": [
        "Andrea Doria META"
      ],
      "active": true
    },
    {
      "id": 742,
      "name": "内华达·META",
      "aliases": [
        "Nevada META"
      ],
      "active": true
    },
    {
      "id": 743,
      "name": "飞鹰·META",
      "aliases": [
        "鸱·META",
        "Hiyō.META",
        "Hiyou META"
      ],
      "active": true
    },
    {
      "id": 744,
      "name": "隼鹰·META",
      "aliases": [
        "鸢·META",
        "Jun'yō.META",
        "Junyou META"
      ],
      "active": true
    },
    {
      "id": 745,
      "name": "普林斯顿·META",
      "aliases": [
        "Princeton META"
      ],
      "active": true
    },
    {
      "id": 746,
      "name": "凤翔·META",
      "aliases": [
        "凤·META",
        "Hōshō META",
        "Houshou META"
      ],
      "active": true
    },
    {
      "id": 747,
      "name": "飞龙·META",
      "aliases": [
        "龙·META",
        "Hiryu.META",
        "Hiryuu META"
      ],
      "active": true
    },
    {
      "id": 748,
      "name": "皇家方舟·META",
      "aliases": [
        "Ark Royal.META",
        "Ark Royal META"
      ],
      "active": true
    },
    {
      "id": 749,
      "name": "苍龙·META",
      "aliases": [
        "蛟·META",
        "Sōryū.META",
        "Souryuu META"
      ],
      "active": true
    },
    {
      "id": 750,
      "name": "贝亚恩·META",
      "aliases": [
        "Béarn META"
      ],
      "active": true
    },
    {
      "id": 751,
      "name": "大凤·META",
      "aliases": [
        "鹩·META",
        "Taihō META",
        "Taihou META"
      ],
      "active": true
    },
    {
      "id": 752,
      "name": "大黄蜂·META",
      "aliases": [
        "Hornet META"
      ],
      "active": true
    },
    {
      "id": 753,
      "name": "光荣·META",
      "aliases": [
        "Glorious META"
      ],
      "active": true
    },
    {
      "id": 754,
      "name": "约克城·META",
      "aliases": [
        "Yorktown META"
      ],
      "active": true
    },
    {
      "id": 755,
      "name": "U-556·META",
      "aliases": [
        "优可可洛·META",
        "U-556 META"
      ],
      "active": true
    },
    {
      "id": 756,
      "name": "女灶神·META",
      "aliases": [
        "Vestal META"
      ],
      "active": true
    },
    {
      "id": 757,
      "name": "黑暗界·META",
      "aliases": [
        "Erebus META"
      ],
      "active": true
    },
    {
      "id": 758,
      "name": "涅普顿",
      "aliases": [
        "Neptune",
        "Neptune (Neptunia)"
      ],
      "active": true
    },
    {
      "id": 759,
      "name": "诺瓦露",
      "aliases": [
        "Noire"
      ],
      "active": true
    },
    {
      "id": 760,
      "name": "布兰",
      "aliases": [
        "Blanc"
      ],
      "active": true
    },
    {
      "id": 761,
      "name": "贝露",
      "aliases": [
        "Vert"
      ],
      "active": true
    },
    {
      "id": 762,
      "name": "绀紫之心",
      "aliases": [
        "Purple Heart"
      ],
      "active": true
    },
    {
      "id": 763,
      "name": "圣黑之心",
      "aliases": [
        "Black Heart"
      ],
      "active": true
    },
    {
      "id": 764,
      "name": "群白之心",
      "aliases": [
        "White Heart"
      ],
      "active": true
    },
    {
      "id": 765,
      "name": "翡绿之心",
      "aliases": [
        "Green Heart"
      ],
      "active": true
    },
    {
      "id": 766,
      "name": "绊爱",
      "aliases": [
        "Kizuna",
        "Kizuna AI"
      ],
      "active": true
    },
    {
      "id": 767,
      "name": "绊爱·Elegant",
      "aliases": [
        "Kizuna·Elegant",
        "Elegant Kizuna AI"
      ],
      "active": true
    },
    {
      "id": 768,
      "name": "绊爱·Anniversary",
      "aliases": [
        "Kizuna·Anniversary",
        "Anniversary Kizuna AI"
      ],
      "active": true
    },
    {
      "id": 769,
      "name": "绊爱·SuperGamer",
      "aliases": [
        "Kizuna·SuperGamer",
        "Super Gamer Kizuna AI"
      ],
      "active": true
    },
    {
      "id": 770,
      "name": "白上吹雪",
      "aliases": [
        "Shirakami Fubuki"
      ],
      "active": true
    },
    {
      "id": 771,
      "name": "时乃空",
      "aliases": [
        "Tokino Sora"
      ],
      "active": true
    },
    {
      "id": 772,
      "name": "湊阿库娅",
      "aliases": [
        "Minato Aqua"
      ],
      "active": true
    },
    {
      "id": 773,
      "name": "夏色祭",
      "aliases": [
        "Natsuiro Matsuri"
      ],
      "active": true
    },
    {
      "id": 774,
      "name": "百鬼绫目",
      "aliases": [
        "Nakiri Ayame"
      ],
      "active": true
    },
    {
      "id": 775,
      "name": "紫咲诗音",
      "aliases": [
        "Murasaki Shion"
      ],
      "active": true
    },
    {
      "id": 776,
      "name": "大神澪",
      "aliases": [
        "Ōkami Mio",
        "Ookami Mio"
      ],
      "active": true
    },
    {
      "id": 777,
      "name": "玛莉萝丝",
      "aliases": [
        "Marie Rose"
      ],
      "active": true
    },
    {
      "id": 778,
      "name": "穗香",
      "aliases": [
        "Honoka"
      ],
      "active": true
    },
    {
      "id": 779,
      "name": "霞DOA",
      "aliases": [
        "Kasumi",
        "Kasumi (Venus Vacation)"
      ],
      "active": true
    },
    {
      "id": 780,
      "name": "海咲",
      "aliases": [
        "Misaki"
      ],
      "active": true
    },
    {
      "id": 781,
      "name": "凪咲",
      "aliases": [
        "Nagisa"
      ],
      "active": true
    },
    {
      "id": 782,
      "name": "女天狗",
      "aliases": [
        "Nyotengu"
      ],
      "active": true
    },
    {
      "id": 783,
      "name": "莫妮卡",
      "aliases": [
        "Monica"
      ],
      "active": true
    },
    {
      "id": 784,
      "name": "露娜",
      "aliases": [
        "Luna"
      ],
      "active": true
    },
    {
      "id": 785,
      "name": "环",
      "aliases": [
        "Tamaki"
      ],
      "active": true
    },
    {
      "id": 786,
      "name": "天海春香",
      "aliases": [
        "Haruka Amami"
      ],
      "active": true
    },
    {
      "id": 787,
      "name": "如月千早",
      "aliases": [
        "Chihaya Kisaragi"
      ],
      "active": true
    },
    {
      "id": 788,
      "name": "水濑伊织",
      "aliases": [
        "Iori Minase"
      ],
      "active": true
    },
    {
      "id": 789,
      "name": "三浦梓",
      "aliases": [
        "Azusa Miura"
      ],
      "active": true
    },
    {
      "id": 790,
      "name": "秋月律子",
      "aliases": [
        "Ritsuko Akizukii",
        "Ritsuko Akizuki"
      ],
      "active": true
    },
    {
      "id": 791,
      "name": "双海亚美",
      "aliases": [
        "Ami Futami"
      ],
      "active": true
    },
    {
      "id": 792,
      "name": "双海真美",
      "aliases": [
        "Mami Futami"
      ],
      "active": true
    },
    {
      "id": 793,
      "name": "宝多六花",
      "aliases": [
        "Takarada Rikka",
        "Rikka Takarada"
      ],
      "active": true
    },
    {
      "id": 794,
      "name": "新条茜",
      "aliases": [
        "Shinjou Akane",
        "Akane Shinjo"
      ],
      "active": true
    },
    {
      "id": 795,
      "name": "莲SSSS",
      "aliases": [
        "Hass"
      ],
      "active": true
    },
    {
      "id": 796,
      "name": "奈美子",
      "aliases": [
        "Namiko"
      ],
      "active": true
    },
    {
      "id": 797,
      "name": "南梦芽",
      "aliases": [
        "Yume Minami"
      ],
      "active": true
    },
    {
      "id": 798,
      "name": "飞鸟川千濑",
      "aliases": [
        "Asukagawa Chise",
        "Chise Asukagawa"
      ],
      "active": true
    },
    {
      "id": 799,
      "name": "貉SSSS",
      "aliases": [
        "Mujina"
      ],
      "active": true
    },
    {
      "id": 800,
      "name": "第二代",
      "aliases": [
        "The 2nd"
      ],
      "active": true
    },
    {
      "id": 801,
      "name": "公主",
      "aliases": [
        "Princess Hime"
      ],
      "active": true
    },
    {
      "id": 802,
      "name": "莱莎琳·斯托特",
      "aliases": [
        "Reisalin Stout"
      ],
      "active": true
    },
    {
      "id": 803,
      "name": "科洛蒂娅·巴兰茨",
      "aliases": [
        "Klaudia Valentz"
      ],
      "active": true
    },
    {
      "id": 804,
      "name": "帕特莉夏·阿贝尔海姆",
      "aliases": [
        "Patricia Abelheim"
      ],
      "active": true
    },
    {
      "id": 805,
      "name": "莉拉·德西亚斯",
      "aliases": [
        "Lila Decyrus"
      ],
      "active": true
    },
    {
      "id": 806,
      "name": "赛莉·古劳斯",
      "aliases": [
        "Serri Glaus"
      ],
      "active": true
    },
    {
      "id": 807,
      "name": "卡菈·伊迪亚斯",
      "aliases": [
        "Kala Ideas"
      ],
      "active": true
    },
    {
      "id": 808,
      "name": "飞鸟",
      "aliases": [
        "Asuka"
      ],
      "active": true
    },
    {
      "id": 809,
      "name": "斑鸠",
      "aliases": [
        "Ikaruga"
      ],
      "active": true
    },
    {
      "id": 810,
      "name": "焰",
      "aliases": [
        "Homura"
      ],
      "active": true
    },
    {
      "id": 811,
      "name": "雪泉",
      "aliases": [
        "Yumi"
      ],
      "active": true
    },
    {
      "id": 812,
      "name": "雪不归",
      "aliases": [
        "Fubuki",
        "Fubuki (Senran Kagura)"
      ],
      "active": true
    },
    {
      "id": 813,
      "name": "紫",
      "aliases": [
        "Murasaki"
      ],
      "active": true
    },
    {
      "id": 814,
      "name": "夕烧",
      "aliases": [
        "Yūyaki"
      ],
      "active": true
    },
    {
      "id": 815,
      "name": "菈菈·撒塔琳·戴比路克",
      "aliases": [
        "Lala Satalin Deviluke"
      ],
      "active": true
    },
    {
      "id": 816,
      "name": "娜娜·阿丝达·戴比路克",
      "aliases": [
        "Nana Astar Deviluke"
      ],
      "active": true
    },
    {
      "id": 817,
      "name": "梦梦·贝莉雅·戴比路克",
      "aliases": [
        "Momo Belia Deviluke",
        "Momo belia Deviluke"
      ],
      "active": true
    },
    {
      "id": 818,
      "name": "金色暗影",
      "aliases": [
        "Golden Darkness"
      ],
      "active": true
    },
    {
      "id": 819,
      "name": "西连寺春菜",
      "aliases": [
        "Haruna Sairenji"
      ],
      "active": true
    },
    {
      "id": 820,
      "name": "古手川唯",
      "aliases": [
        "Yui Kotegawa"
      ],
      "active": true
    },
    {
      "id": 821,
      "name": "BLACK★ROCK SHOOTER",
      "aliases": [],
      "active": true
    },
    {
      "id": 822,
      "name": "DEAD MASTER",
      "aliases": [
        "MASTER"
      ],
      "active": true
    },
    {
      "id": 823,
      "name": "优米雅·利斯菲尔德",
      "aliases": [
        "Yumia Liessfeldt"
      ],
      "active": true
    },
    {
      "id": 824,
      "name": "艾菈·冯·杜勒",
      "aliases": [
        "Isla von Duerer"
      ],
      "active": true
    },
    {
      "id": 825,
      "name": "妮娜·弗里德",
      "aliases": [
        "Nina Friede"
      ],
      "active": true
    },
    {
      "id": 826,
      "name": "蕾妮雅",
      "aliases": [
        "Lenja"
      ],
      "active": true
    },
    {
      "id": 827,
      "name": "赫斯缇雅",
      "aliases": [
        "Hestia"
      ],
      "active": true
    },
    {
      "id": 828,
      "name": "琉·璃昂",
      "aliases": [
        "Ryu Lion"
      ],
      "active": true
    }
  ],
  "values": [
    {
      "characterId": 1,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 1,
      "tagId": 2,
      "value": "其他"
    },
    {
      "characterId": 1,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 1,
      "tagId": 4,
      "value": "Bulin"
    },
    {
      "characterId": 1,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 1,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 1,
      "tagId": 7,
      "value": "下田麻美",
      "entries": [
        {
          "value": "下田麻美"
        }
      ]
    },
    {
      "characterId": 2,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 2,
      "tagId": 2,
      "value": "其他"
    },
    {
      "characterId": 2,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 2,
      "tagId": 4,
      "value": "Bulin"
    },
    {
      "characterId": 2,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 2,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 2,
      "tagId": 7,
      "value": "下田麻美",
      "entries": [
        {
          "value": "下田麻美"
        }
      ]
    },
    {
      "characterId": 3,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 3,
      "tagId": 2,
      "value": "其他"
    },
    {
      "characterId": 3,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 3,
      "tagId": 4,
      "value": "Bulin"
    },
    {
      "characterId": 3,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 3,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 3,
      "tagId": 7,
      "value": "下田麻美",
      "entries": [
        {
          "value": "下田麻美"
        }
      ]
    },
    {
      "characterId": 4,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 4,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 4,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 4,
      "tagId": 4,
      "value": "法拉格特级"
    },
    {
      "characterId": 4,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 4,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 4,
      "tagId": 7,
      "value": "岛袋美由利",
      "entries": [
        {
          "value": "岛袋美由利"
        }
      ]
    },
    {
      "characterId": 5,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 5,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 5,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 5,
      "tagId": 4,
      "value": "马汉级"
    },
    {
      "characterId": 5,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 5,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 5,
      "tagId": 7,
      "value": "春村奈奈",
      "entries": [
        {
          "value": "春村奈奈"
        },
        {
          "value": "はるむら なな"
        },
        {
          "value": "宣传"
        }
      ]
    },
    {
      "characterId": 6,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 6,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 6,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 6,
      "tagId": 4,
      "value": "马汉级"
    },
    {
      "characterId": 6,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 6,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 6,
      "tagId": 7,
      "value": "新名彩乃",
      "entries": [
        {
          "value": "新名彩乃"
        },
        {
          "value": "まつもと あやの"
        },
        {
          "value": "松本彩乃"
        }
      ]
    },
    {
      "characterId": 7,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 7,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 7,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 7,
      "tagId": 4,
      "value": "格里德利级"
    },
    {
      "characterId": 7,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 7,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 7,
      "tagId": 7,
      "value": "篠原成美",
      "entries": [
        {
          "value": "篠原成美"
        },
        {
          "value": "しのはら なるみ"
        }
      ]
    },
    {
      "characterId": 8,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 8,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 8,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 8,
      "tagId": 4,
      "value": "格里德利级"
    },
    {
      "characterId": 8,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 8,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 8,
      "tagId": 7,
      "value": "新名彩乃",
      "entries": [
        {
          "value": "新名彩乃"
        },
        {
          "value": "まつもと あやの"
        },
        {
          "value": "松本彩乃"
        }
      ]
    },
    {
      "characterId": 9,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 9,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 9,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 9,
      "tagId": 4,
      "value": "格里德利级"
    },
    {
      "characterId": 9,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 9,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 9,
      "tagId": 7,
      "value": "春村奈奈",
      "entries": [
        {
          "value": "春村奈奈"
        },
        {
          "value": "はるむら なな"
        },
        {
          "value": "宣传"
        }
      ]
    },
    {
      "characterId": 10,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 10,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 10,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 10,
      "tagId": 4,
      "value": "格里德利级"
    },
    {
      "characterId": 10,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 10,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 10,
      "tagId": 7,
      "value": "小原好美",
      "entries": [
        {
          "value": "小原好美"
        },
        {
          "value": "こはら このみ"
        }
      ]
    },
    {
      "characterId": 11,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 11,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 11,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 11,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 11,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 11,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 11,
      "tagId": 7,
      "value": "石见舞菜香",
      "entries": [
        {
          "value": "石见舞菜香"
        },
        {
          "value": "いわみ まなか"
        }
      ]
    },
    {
      "characterId": 12,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 12,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 12,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 12,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 12,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 12,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 12,
      "tagId": 7,
      "value": "诸星堇",
      "entries": [
        {
          "value": "诸星堇"
        },
        {
          "value": "諸星 すみれ"
        },
        {
          "value": "もろほし すみれ"
        }
      ]
    },
    {
      "characterId": 13,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 13,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 13,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 13,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 13,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 13,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 13,
      "tagId": 7,
      "value": "森田皋月",
      "entries": [
        {
          "value": "森田皋月"
        },
        {
          "value": "もりた さつき"
        }
      ]
    },
    {
      "characterId": 14,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 14,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 14,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 14,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 14,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 14,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 14,
      "tagId": 7,
      "value": "根本流风",
      "entries": [
        {
          "value": "根本流风"
        }
      ]
    },
    {
      "characterId": 15,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 15,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 15,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 15,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 15,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 15,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 15,
      "tagId": 7,
      "value": "芳野由奈",
      "entries": [
        {
          "value": "芳野由奈"
        }
      ]
    },
    {
      "characterId": 16,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 16,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 16,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 16,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 16,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 16,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 16,
      "tagId": 7,
      "value": "芳野由奈",
      "entries": [
        {
          "value": "芳野由奈"
        }
      ]
    },
    {
      "characterId": 17,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 17,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 17,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 17,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 17,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 17,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 17,
      "tagId": 7,
      "value": "芳野由奈",
      "entries": [
        {
          "value": "芳野由奈"
        }
      ]
    },
    {
      "characterId": 18,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 18,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 18,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 18,
      "tagId": 4,
      "value": "本森级"
    },
    {
      "characterId": 18,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 18,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 18,
      "tagId": 7,
      "value": "沼仓爱美",
      "entries": [
        {
          "value": "沼仓爱美"
        }
      ]
    },
    {
      "characterId": 19,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 19,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 19,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 19,
      "tagId": 4,
      "value": "本森级"
    },
    {
      "characterId": 19,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 19,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 19,
      "tagId": 7,
      "value": "长绳麻理亚",
      "entries": [
        {
          "value": "长绳麻理亚"
        },
        {
          "value": "長縄 まりあ"
        },
        {
          "value": "ながなわ まりあ"
        }
      ]
    },
    {
      "characterId": 20,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 20,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 20,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 20,
      "tagId": 4,
      "value": "西姆斯级"
    },
    {
      "characterId": 20,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 20,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 20,
      "tagId": 7,
      "value": "小松未可子",
      "entries": [
        {
          "value": "小松未可子"
        },
        {
          "value": "こまつ みかこ"
        }
      ]
    },
    {
      "characterId": 21,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 21,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 21,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 21,
      "tagId": 4,
      "value": "西姆斯级"
    },
    {
      "characterId": 21,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 21,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 21,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 22,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 22,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 22,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 22,
      "tagId": 4,
      "value": "坎农级"
    },
    {
      "characterId": 22,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 22,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 22,
      "tagId": 7,
      "value": "佐佐木望",
      "entries": [
        {
          "value": "佐佐木望"
        },
        {
          "value": "ささき のぞみ"
        }
      ]
    },
    {
      "characterId": 23,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 23,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 23,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 23,
      "tagId": 4,
      "value": "本森级"
    },
    {
      "characterId": 23,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 23,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 23,
      "tagId": 7,
      "value": "铃木绘理",
      "entries": [
        {
          "value": "铃木绘理"
        },
        {
          "value": "すずき えり"
        }
      ]
    },
    {
      "characterId": 24,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 24,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 24,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 24,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 24,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 24,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 24,
      "tagId": 7,
      "value": "伊濑茉莉也",
      "entries": [
        {
          "value": "伊濑茉莉也"
        },
        {
          "value": "いせ まりや"
        }
      ]
    },
    {
      "characterId": 25,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 25,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 25,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 25,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 25,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 25,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 25,
      "tagId": 7,
      "value": "伊濑茉莉也",
      "entries": [
        {
          "value": "伊濑茉莉也"
        },
        {
          "value": "いせ まりや"
        }
      ]
    },
    {
      "characterId": 26,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 26,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 26,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 26,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 26,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 26,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 26,
      "tagId": 7,
      "value": "市道真央",
      "entries": [
        {
          "value": "市道真央"
        }
      ]
    },
    {
      "characterId": 27,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 27,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 27,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 27,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 27,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 27,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 27,
      "tagId": 7,
      "value": "藤田茜",
      "entries": [
        {
          "value": "藤田茜"
        }
      ]
    },
    {
      "characterId": 28,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 28,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 28,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 28,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 28,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 28,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 28,
      "tagId": 7,
      "value": "藤田茜",
      "entries": [
        {
          "value": "藤田茜"
        }
      ]
    },
    {
      "characterId": 29,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 29,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 29,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 29,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 29,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 29,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 29,
      "tagId": 7,
      "value": "金子彩花",
      "entries": [
        {
          "value": "金子彩花"
        }
      ]
    },
    {
      "characterId": 30,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 30,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 30,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 30,
      "tagId": 4,
      "value": "本森级"
    },
    {
      "characterId": 30,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 30,
      "tagId": 6,
      "value": "2018-10-25 复刻：坠落之翼"
    },
    {
      "characterId": 30,
      "tagId": 7,
      "value": "小堀幸",
      "entries": [
        {
          "value": "小堀幸"
        }
      ]
    },
    {
      "characterId": 31,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 31,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 31,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 31,
      "tagId": 4,
      "value": "本森级"
    },
    {
      "characterId": 31,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 31,
      "tagId": 6,
      "value": "2018-10-25 复刻：坠落之翼"
    },
    {
      "characterId": 31,
      "tagId": 7,
      "value": "小堀幸",
      "entries": [
        {
          "value": "小堀幸"
        }
      ]
    },
    {
      "characterId": 32,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 32,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 32,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 32,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 32,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 32,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 32,
      "tagId": 7,
      "value": "诸星堇",
      "entries": [
        {
          "value": "诸星堇"
        },
        {
          "value": "諸星 すみれ"
        },
        {
          "value": "もろほし すみれ"
        }
      ]
    },
    {
      "characterId": 33,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 33,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 33,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 33,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 33,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 33,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 33,
      "tagId": 7,
      "value": "大龟明日香",
      "entries": [
        {
          "value": "大龟明日香"
        }
      ]
    },
    {
      "characterId": 34,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 34,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 34,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 34,
      "tagId": 4,
      "value": "法拉格特级"
    },
    {
      "characterId": 34,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 34,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 34,
      "tagId": 7,
      "value": "大桥步夕",
      "entries": [
        {
          "value": "大桥步夕"
        }
      ]
    },
    {
      "characterId": 35,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 35,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 35,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 35,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 35,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 35,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 35,
      "tagId": 7,
      "value": "坂井芳江",
      "entries": [
        {
          "value": "坂井芳江"
        }
      ]
    },
    {
      "characterId": 36,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 36,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 36,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 36,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 36,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 36,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 36,
      "tagId": 7,
      "value": "岩佐夏芽",
      "entries": [
        {
          "value": "岩佐夏芽"
        }
      ]
    },
    {
      "characterId": 37,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 37,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 37,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 37,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 37,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 37,
      "tagId": 6,
      "value": "2020-01-21"
    },
    {
      "characterId": 37,
      "tagId": 7,
      "value": "桃河里香",
      "entries": [
        {
          "value": "桃河里香"
        },
        {
          "value": "桃河 りか"
        },
        {
          "value": "ももかわ りか"
        }
      ]
    },
    {
      "characterId": 38,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 38,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 38,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 38,
      "tagId": 4,
      "value": "艾伦·M·萨姆纳级"
    },
    {
      "characterId": 38,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 38,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 38,
      "tagId": 7,
      "value": "冈咲美保",
      "entries": [
        {
          "value": "冈咲美保"
        },
        {
          "value": "おかさき みほ"
        }
      ]
    },
    {
      "characterId": 39,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 39,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 39,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 39,
      "tagId": 4,
      "value": "艾伦·M·萨姆纳级"
    },
    {
      "characterId": 39,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 39,
      "tagId": 6,
      "value": "2021-03-25 复刻：箱庭疗法"
    },
    {
      "characterId": 39,
      "tagId": 7,
      "value": "荻野叶月",
      "entries": [
        {
          "value": "荻野叶月"
        },
        {
          "value": "荻野葉月"
        }
      ]
    },
    {
      "characterId": 40,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 40,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 40,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 40,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 40,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 40,
      "tagId": 6,
      "value": "2021-03-25 复刻：箱庭疗法"
    },
    {
      "characterId": 40,
      "tagId": 7,
      "value": "杉浦诗织",
      "entries": [
        {
          "value": "杉浦诗织"
        },
        {
          "value": "杉浦 しおり"
        }
      ]
    },
    {
      "characterId": 41,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 41,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 41,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 41,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 41,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 41,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 41,
      "tagId": 7,
      "value": "並木樱",
      "entries": [
        {
          "value": "並木樱"
        },
        {
          "value": "並木 さくら"
        }
      ]
    },
    {
      "characterId": 42,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 42,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 42,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 42,
      "tagId": 4,
      "value": "艾伦·M·萨姆纳级"
    },
    {
      "characterId": 42,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 42,
      "tagId": 6,
      "value": "2021-08-19 复刻：微层混合"
    },
    {
      "characterId": 42,
      "tagId": 7,
      "value": "河野日和",
      "entries": [
        {
          "value": "河野日和"
        },
        {
          "value": "河野 ひより"
        },
        {
          "value": "こうの ひより"
        }
      ]
    },
    {
      "characterId": 43,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 43,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 43,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 43,
      "tagId": 4,
      "value": "艾伦·M·萨姆纳级"
    },
    {
      "characterId": 43,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 43,
      "tagId": 6,
      "value": "2022-01-27"
    },
    {
      "characterId": 43,
      "tagId": 7,
      "value": "风间万裕子",
      "entries": [
        {
          "value": "风间万裕子"
        },
        {
          "value": "かざま まゆこ"
        },
        {
          "value": "風間万裕子"
        }
      ]
    },
    {
      "characterId": 44,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 44,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 44,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 44,
      "tagId": 4,
      "value": "埃德索尔级"
    },
    {
      "characterId": 44,
      "tagId": 5,
      "value": "00:15:00"
    },
    {
      "characterId": 44,
      "tagId": 6,
      "value": "2022-12-22 定向折叠"
    },
    {
      "characterId": 44,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 45,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 45,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 45,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 45,
      "tagId": 4,
      "value": "艾伦·M·萨姆纳级"
    },
    {
      "characterId": 45,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 45,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 45,
      "tagId": 7,
      "value": "长绳麻理亚",
      "entries": [
        {
          "value": "长绳麻理亚"
        },
        {
          "value": "長縄 まりあ"
        },
        {
          "value": "ながなわ まりあ"
        }
      ]
    },
    {
      "characterId": 46,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 46,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 46,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 46,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 46,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 46,
      "tagId": 6,
      "value": "2024-08-15 铁翼擎风"
    },
    {
      "characterId": 46,
      "tagId": 7,
      "value": "伊藤结衣奈",
      "entries": [
        {
          "value": "伊藤结衣奈"
        },
        {
          "value": "いとう ゆいな"
        }
      ]
    },
    {
      "characterId": 47,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 47,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 47,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 47,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 47,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 47,
      "tagId": 6,
      "value": "2025-03-27 深谷来信"
    },
    {
      "characterId": 47,
      "tagId": 7,
      "value": "橘杏咲",
      "entries": [
        {
          "value": "橘杏咲"
        },
        {
          "value": "たちばな あずさ"
        }
      ]
    },
    {
      "characterId": 48,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 48,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 48,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 48,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 48,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 48,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 48,
      "tagId": 7,
      "value": "宫崎日和",
      "entries": [
        {
          "value": "宫崎日和"
        },
        {
          "value": "宮崎 ヒヨリ"
        },
        {
          "value": "みやざき ひより"
        }
      ]
    },
    {
      "characterId": 49,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 49,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 49,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 49,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 49,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 49,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 49,
      "tagId": 7,
      "value": "木村珠莉",
      "entries": [
        {
          "value": "木村珠莉"
        },
        {
          "value": "きむら じゅり"
        }
      ]
    },
    {
      "characterId": 50,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 50,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 50,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 50,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 50,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 50,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 50,
      "tagId": 7,
      "value": "木村珠莉",
      "entries": [
        {
          "value": "木村珠莉"
        },
        {
          "value": "きむら じゅり"
        }
      ]
    },
    {
      "characterId": 51,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 51,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 51,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 51,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 51,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 51,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 51,
      "tagId": 7,
      "value": "りん",
      "entries": [
        {
          "value": "りん"
        }
      ]
    },
    {
      "characterId": 52,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 52,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 52,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 52,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 52,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 52,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 52,
      "tagId": 7,
      "value": "りん",
      "entries": [
        {
          "value": "りん"
        }
      ]
    },
    {
      "characterId": 53,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 53,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 53,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 53,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 53,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 53,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 53,
      "tagId": 7,
      "value": "中条智世",
      "entries": [
        {
          "value": "中条智世"
        }
      ]
    },
    {
      "characterId": 54,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 54,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 54,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 54,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 54,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 54,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 54,
      "tagId": 7,
      "value": "荒浪和沙",
      "entries": [
        {
          "value": "荒浪和沙"
        }
      ]
    },
    {
      "characterId": 55,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 55,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 55,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 55,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 55,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 55,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 55,
      "tagId": 7,
      "value": "木村珠莉",
      "entries": [
        {
          "value": "木村珠莉"
        },
        {
          "value": "きむら じゅり"
        }
      ]
    },
    {
      "characterId": 56,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 56,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 56,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 56,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 56,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 56,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 56,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 57,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 57,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 57,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 57,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 57,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 57,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 57,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 58,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 58,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 58,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 58,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 58,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 58,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 58,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 59,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 59,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 59,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 59,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 59,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 59,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 59,
      "tagId": 7,
      "value": "小原莉子",
      "entries": [
        {
          "value": "小原莉子"
        }
      ]
    },
    {
      "characterId": 60,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 60,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 60,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 60,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 60,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 60,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 60,
      "tagId": 7,
      "value": "日笠阳子",
      "entries": [
        {
          "value": "日笠阳子"
        },
        {
          "value": "ひかさ ようこ"
        }
      ]
    },
    {
      "characterId": 61,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 61,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 61,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 61,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 61,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 61,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 61,
      "tagId": 7,
      "value": "日笠阳子",
      "entries": [
        {
          "value": "日笠阳子"
        },
        {
          "value": "ひかさ ようこ"
        }
      ]
    },
    {
      "characterId": 62,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 62,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 62,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 62,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 62,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 62,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 62,
      "tagId": 7,
      "value": "高橋李依",
      "entries": [
        {
          "value": "高橋李依"
        }
      ]
    },
    {
      "characterId": 63,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 63,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 63,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 63,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 63,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 63,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 63,
      "tagId": 7,
      "value": "小泽亚李",
      "entries": [
        {
          "value": "小泽亚李"
        },
        {
          "value": "おざわ あり"
        },
        {
          "value": "详情页"
        }
      ]
    },
    {
      "characterId": 64,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 64,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 64,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 64,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 64,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 64,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 64,
      "tagId": 7,
      "value": "椎名",
      "entries": [
        {
          "value": "椎名"
        },
        {
          "value": "公式"
        },
        {
          "value": "へきる"
        }
      ]
    },
    {
      "characterId": 65,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 65,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 65,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 65,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 65,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 65,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 65,
      "tagId": 7,
      "value": "优木加奈",
      "entries": [
        {
          "value": "优木加奈"
        },
        {
          "value": "優木 かな"
        },
        {
          "value": "ゆうき かな"
        }
      ]
    },
    {
      "characterId": 66,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 66,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 66,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 66,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 66,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 66,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 66,
      "tagId": 7,
      "value": "中条智世",
      "entries": [
        {
          "value": "中条智世"
        }
      ]
    },
    {
      "characterId": 67,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 67,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 67,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 67,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 67,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 67,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 67,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 68,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 68,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 68,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 68,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 68,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 68,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 68,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 69,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 69,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 69,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 69,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 69,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 69,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 69,
      "tagId": 7,
      "value": "紫苑雪",
      "entries": [
        {
          "value": "紫苑雪"
        }
      ]
    },
    {
      "characterId": 70,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 70,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 70,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 70,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 70,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 70,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 70,
      "tagId": 7,
      "value": "渡部纱弓",
      "entries": [
        {
          "value": "渡部纱弓"
        }
      ]
    },
    {
      "characterId": 71,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 71,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 71,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 71,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 71,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 71,
      "tagId": 6,
      "value": "2019-10-31"
    },
    {
      "characterId": 71,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 72,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 72,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 72,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 72,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 72,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 72,
      "tagId": 6,
      "value": "2020-01-21"
    },
    {
      "characterId": 72,
      "tagId": 7,
      "value": "小松郁",
      "entries": [
        {
          "value": "小松郁"
        }
      ]
    },
    {
      "characterId": 73,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 73,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 73,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 73,
      "tagId": 4,
      "value": "亚特兰大级"
    },
    {
      "characterId": 73,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 73,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 73,
      "tagId": 7,
      "value": "川崎芽衣子",
      "entries": [
        {
          "value": "川崎芽衣子"
        }
      ]
    },
    {
      "characterId": 74,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 74,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 74,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 74,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 74,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 74,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 74,
      "tagId": 7,
      "value": "武田羅梨沙多胡",
      "entries": [
        {
          "value": "武田羅梨沙多胡"
        },
        {
          "value": "たけだ らりさ たご"
        }
      ]
    },
    {
      "characterId": 75,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 75,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 75,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 75,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 75,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 75,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 75,
      "tagId": 7,
      "value": "筱原侑",
      "entries": [
        {
          "value": "筱原侑"
        },
        {
          "value": "ささは ゆう"
        },
        {
          "value": "篠原侑"
        }
      ]
    },
    {
      "characterId": 76,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 76,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 76,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 76,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 76,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 76,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 76,
      "tagId": 7,
      "value": "横田彩",
      "entries": [
        {
          "value": "横田彩"
        },
        {
          "value": "よこた あや"
        }
      ]
    },
    {
      "characterId": 77,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 77,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 77,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 77,
      "tagId": 4,
      "value": "布鲁克林级"
    },
    {
      "characterId": 77,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 77,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 77,
      "tagId": 7,
      "value": "筱原侑",
      "entries": [
        {
          "value": "筱原侑"
        },
        {
          "value": "ささは ゆう"
        },
        {
          "value": "篠原侑"
        }
      ]
    },
    {
      "characterId": 78,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 78,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 78,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 78,
      "tagId": 4,
      "value": "法戈级"
    },
    {
      "characterId": 78,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 78,
      "tagId": 6,
      "value": "2024-08-15 铁翼擎风"
    },
    {
      "characterId": 78,
      "tagId": 7,
      "value": "美坂朱音",
      "entries": [
        {
          "value": "美坂朱音"
        },
        {
          "value": "みさか あかね"
        }
      ]
    },
    {
      "characterId": 79,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 79,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 79,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 79,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 79,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 79,
      "tagId": 6,
      "value": "2025-03-27 深谷来信"
    },
    {
      "characterId": 79,
      "tagId": 7,
      "value": "平冢纱依",
      "entries": [
        {
          "value": "平冢纱依"
        },
        {
          "value": "ひらつか さえ"
        },
        {
          "value": "平塚紗依"
        }
      ]
    },
    {
      "characterId": 80,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 80,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 80,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 80,
      "tagId": 4,
      "value": "克利夫兰级"
    },
    {
      "characterId": 80,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 80,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 80,
      "tagId": 7,
      "value": "羽澄奈奈",
      "entries": [
        {
          "value": "羽澄奈奈"
        },
        {
          "value": "羽澄 なな"
        },
        {
          "value": "はすみ"
        }
      ]
    },
    {
      "characterId": 81,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 81,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 81,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 81,
      "tagId": 4,
      "value": "彭萨科拉级"
    },
    {
      "characterId": 81,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 81,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 81,
      "tagId": 7,
      "value": "石见舞菜香",
      "entries": [
        {
          "value": "石见舞菜香"
        },
        {
          "value": "いわみ まなか"
        }
      ]
    },
    {
      "characterId": 82,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 82,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 82,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 82,
      "tagId": 4,
      "value": "彭萨科拉级"
    },
    {
      "characterId": 82,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 82,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 82,
      "tagId": 7,
      "value": "石见舞菜香",
      "entries": [
        {
          "value": "石见舞菜香"
        },
        {
          "value": "いわみ まなか"
        }
      ]
    },
    {
      "characterId": 83,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 83,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 83,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 83,
      "tagId": 4,
      "value": "北安普敦级"
    },
    {
      "characterId": 83,
      "tagId": 5,
      "value": "01:40:00"
    },
    {
      "characterId": 83,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 83,
      "tagId": 7,
      "value": "小泉乔生",
      "entries": [
        {
          "value": "小泉乔生"
        },
        {
          "value": "小泉喬生"
        }
      ]
    },
    {
      "characterId": 84,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 84,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 84,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 84,
      "tagId": 4,
      "value": "北安普敦级"
    },
    {
      "characterId": 84,
      "tagId": 5,
      "value": "01:40:00"
    },
    {
      "characterId": 84,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 84,
      "tagId": 7,
      "value": "根本流风",
      "entries": [
        {
          "value": "根本流风"
        }
      ]
    },
    {
      "characterId": 85,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 85,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 85,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 85,
      "tagId": 4,
      "value": "北安普敦级"
    },
    {
      "characterId": 85,
      "tagId": 5,
      "value": "01:40:00"
    },
    {
      "characterId": 85,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 85,
      "tagId": 7,
      "value": "横田彩",
      "entries": [
        {
          "value": "横田彩"
        },
        {
          "value": "よこた あや"
        }
      ]
    },
    {
      "characterId": 86,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 86,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 86,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 86,
      "tagId": 4,
      "value": "波特兰级"
    },
    {
      "characterId": 86,
      "tagId": 5,
      "value": "01:50:00"
    },
    {
      "characterId": 86,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 86,
      "tagId": 7,
      "value": "吉冈香织",
      "entries": [
        {
          "value": "吉冈香织"
        },
        {
          "value": "よしおか かおり"
        }
      ]
    },
    {
      "characterId": 87,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 87,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 87,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 87,
      "tagId": 4,
      "value": "波特兰级"
    },
    {
      "characterId": 87,
      "tagId": 5,
      "value": "01:50:00"
    },
    {
      "characterId": 87,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 87,
      "tagId": 7,
      "value": "横田彩",
      "entries": [
        {
          "value": "横田彩"
        },
        {
          "value": "よこた あや"
        }
      ]
    },
    {
      "characterId": 88,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 88,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 88,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 88,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 88,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 88,
      "tagId": 6,
      "value": "2018-07-17"
    },
    {
      "characterId": 88,
      "tagId": 7,
      "value": "坂井芳江",
      "entries": [
        {
          "value": "坂井芳江"
        }
      ]
    },
    {
      "characterId": 89,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 89,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 89,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 89,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 89,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 89,
      "tagId": 6,
      "value": "2018-07-17"
    },
    {
      "characterId": 89,
      "tagId": 7,
      "value": "津田美波",
      "entries": [
        {
          "value": "津田美波"
        },
        {
          "value": "つだ みなみ"
        }
      ]
    },
    {
      "characterId": 90,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 90,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 90,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 90,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 90,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 90,
      "tagId": 6,
      "value": "2018-07-17"
    },
    {
      "characterId": 90,
      "tagId": 7,
      "value": "津田美波",
      "entries": [
        {
          "value": "津田美波"
        },
        {
          "value": "つだ みなみ"
        }
      ]
    },
    {
      "characterId": 91,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 91,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 91,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 91,
      "tagId": 4,
      "value": "威奇塔级"
    },
    {
      "characterId": 91,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 91,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 91,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 92,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 92,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 92,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 92,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 92,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 92,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 92,
      "tagId": 7,
      "value": "藤原夏海",
      "entries": [
        {
          "value": "藤原夏海"
        },
        {
          "value": "ふじわら なつみ"
        }
      ]
    },
    {
      "characterId": 93,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 93,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 93,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 93,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 93,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 93,
      "tagId": 6,
      "value": "2018-10-25 复刻：坠落之翼"
    },
    {
      "characterId": 93,
      "tagId": 7,
      "value": "嶋村侑",
      "entries": [
        {
          "value": "嶋村侑"
        }
      ]
    },
    {
      "characterId": 94,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 94,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 94,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 94,
      "tagId": 4,
      "value": "新奥尔良级"
    },
    {
      "characterId": 94,
      "tagId": 5,
      "value": "01:56:00"
    },
    {
      "characterId": 94,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 94,
      "tagId": 7,
      "value": "岭内知美",
      "entries": [
        {
          "value": "岭内知美"
        },
        {
          "value": "嶺内 ともみ"
        },
        {
          "value": "みねうち ともみ"
        }
      ]
    },
    {
      "characterId": 95,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 95,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 95,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 95,
      "tagId": 4,
      "value": "巴尔的摩级"
    },
    {
      "characterId": 95,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 95,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 95,
      "tagId": 7,
      "value": "高桥未奈美",
      "entries": [
        {
          "value": "高桥未奈美"
        }
      ]
    },
    {
      "characterId": 96,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 96,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 96,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 96,
      "tagId": 4,
      "value": "巴尔的摩级"
    },
    {
      "characterId": 96,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 96,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 96,
      "tagId": 7,
      "value": "巽悠衣子",
      "entries": [
        {
          "value": "巽悠衣子"
        }
      ]
    },
    {
      "characterId": 97,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 97,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 97,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 97,
      "tagId": 4,
      "value": "巴尔的摩级"
    },
    {
      "characterId": 97,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 97,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 97,
      "tagId": 7,
      "value": "高桥未奈美",
      "entries": [
        {
          "value": "高桥未奈美"
        }
      ]
    },
    {
      "characterId": 98,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 98,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 98,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 98,
      "tagId": 4,
      "value": "俄勒冈城级"
    },
    {
      "characterId": 98,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 98,
      "tagId": 6,
      "value": "2022-12-22 定向折叠"
    },
    {
      "characterId": 98,
      "tagId": 7,
      "value": "小泉乔生",
      "entries": [
        {
          "value": "小泉乔生"
        },
        {
          "value": "小泉喬生"
        }
      ]
    },
    {
      "characterId": 99,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 99,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 99,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 99,
      "tagId": 4,
      "value": "北安普敦级"
    },
    {
      "characterId": 99,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 99,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 99,
      "tagId": 7,
      "value": "佐土原香织",
      "entries": [
        {
          "value": "佐土原香织"
        },
        {
          "value": "佐土原 かおり"
        },
        {
          "value": "さどはら かおり"
        }
      ]
    },
    {
      "characterId": 100,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 100,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 100,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 100,
      "tagId": 4,
      "value": "巴尔的摩级"
    },
    {
      "characterId": 100,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 100,
      "tagId": 6,
      "value": "2024-08-15 铁翼擎风"
    },
    {
      "characterId": 100,
      "tagId": 7,
      "value": "齐藤佑圭",
      "entries": [
        {
          "value": "齐藤佑圭"
        },
        {
          "value": "さいとう ゆか"
        },
        {
          "value": "斉藤佑圭"
        }
      ]
    },
    {
      "characterId": 101,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 101,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 101,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 101,
      "tagId": 4,
      "value": "Anchorage"
    },
    {
      "characterId": 101,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 101,
      "tagId": 6,
      "value": "2025-04-24 扬起郁金之旗"
    },
    {
      "characterId": 101,
      "tagId": 7,
      "value": "日高里菜",
      "entries": [
        {
          "value": "日高里菜"
        },
        {
          "value": "ひだか りな"
        }
      ]
    },
    {
      "characterId": 102,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 102,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 102,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 102,
      "tagId": 4,
      "value": "列克星敦级"
    },
    {
      "characterId": 102,
      "tagId": 5,
      "value": "04:16:30"
    },
    {
      "characterId": 102,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 102,
      "tagId": 7,
      "value": "佐伯伊织",
      "entries": [
        {
          "value": "佐伯伊织"
        },
        {
          "value": "さえき いおり"
        },
        {
          "value": "佐伯伊織"
        }
      ]
    },
    {
      "characterId": 103,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 103,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 103,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 103,
      "tagId": 4,
      "value": "内华达级"
    },
    {
      "characterId": 103,
      "tagId": 5,
      "value": "04:00:00"
    },
    {
      "characterId": 103,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 103,
      "tagId": 7,
      "value": "内山夕实",
      "entries": [
        {
          "value": "内山夕实"
        },
        {
          "value": "うちやま ゆみ"
        },
        {
          "value": "内山夕実"
        }
      ]
    },
    {
      "characterId": 104,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 104,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 104,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 104,
      "tagId": 4,
      "value": "内华达级"
    },
    {
      "characterId": 104,
      "tagId": 5,
      "value": "04:00:00"
    },
    {
      "characterId": 104,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 104,
      "tagId": 7,
      "value": "内山夕实",
      "entries": [
        {
          "value": "内山夕实"
        },
        {
          "value": "うちやま ゆみ"
        },
        {
          "value": "内山夕実"
        }
      ]
    },
    {
      "characterId": 105,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 105,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 105,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 105,
      "tagId": 4,
      "value": "宾夕法尼亚级"
    },
    {
      "characterId": 105,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 105,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 105,
      "tagId": 7,
      "value": "山根希美",
      "entries": [
        {
          "value": "山根希美"
        },
        {
          "value": "やまね のぞみ"
        }
      ]
    },
    {
      "characterId": 106,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 106,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 106,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 106,
      "tagId": 4,
      "value": "宾夕法尼亚级"
    },
    {
      "characterId": 106,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 106,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 106,
      "tagId": 7,
      "value": "白壁爽子",
      "entries": [
        {
          "value": "白壁爽子"
        },
        {
          "value": "しらかべ さわこ"
        }
      ]
    },
    {
      "characterId": 107,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 107,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 107,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 107,
      "tagId": 4,
      "value": "田纳西级"
    },
    {
      "characterId": 107,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 107,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 107,
      "tagId": 7,
      "value": "佐藤利奈",
      "entries": [
        {
          "value": "佐藤利奈"
        }
      ]
    },
    {
      "characterId": 108,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 108,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 108,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 108,
      "tagId": 4,
      "value": "田纳西级"
    },
    {
      "characterId": 108,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 108,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 108,
      "tagId": 7,
      "value": "佐藤利奈",
      "entries": [
        {
          "value": "佐藤利奈"
        },
        {
          "value": "さとう りな"
        }
      ]
    },
    {
      "characterId": 109,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 109,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 109,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 109,
      "tagId": 4,
      "value": "科罗拉多级"
    },
    {
      "characterId": 109,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 109,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 109,
      "tagId": 7,
      "value": "末柄里恵",
      "entries": [
        {
          "value": "末柄里恵"
        }
      ]
    },
    {
      "characterId": 110,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 110,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 110,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 110,
      "tagId": 4,
      "value": "科罗拉多级"
    },
    {
      "characterId": 110,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 110,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 110,
      "tagId": 7,
      "value": "斋藤绫",
      "entries": [
        {
          "value": "斋藤绫"
        }
      ]
    },
    {
      "characterId": 111,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 111,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 111,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 111,
      "tagId": 4,
      "value": "科罗拉多级"
    },
    {
      "characterId": 111,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 111,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 111,
      "tagId": 7,
      "value": "森永千才",
      "entries": [
        {
          "value": "森永千才"
        }
      ]
    },
    {
      "characterId": 112,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 112,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 112,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 112,
      "tagId": 4,
      "value": "北卡罗来纳级"
    },
    {
      "characterId": 112,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 112,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 112,
      "tagId": 7,
      "value": "堀江由衣",
      "entries": [
        {
          "value": "堀江由衣"
        },
        {
          "value": "ほりえ よしこ"
        },
        {
          "value": "堀江由子"
        }
      ]
    },
    {
      "characterId": 113,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 113,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 113,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 113,
      "tagId": 4,
      "value": "北卡罗来纳级"
    },
    {
      "characterId": 113,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 113,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 113,
      "tagId": 7,
      "value": "阿部里果",
      "entries": [
        {
          "value": "阿部里果"
        },
        {
          "value": "あべ りか"
        }
      ]
    },
    {
      "characterId": 114,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 114,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 114,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 114,
      "tagId": 4,
      "value": "南达科他级"
    },
    {
      "characterId": 114,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 114,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 114,
      "tagId": 7,
      "value": "黑泽朋世",
      "entries": [
        {
          "value": "黑泽朋世"
        },
        {
          "value": "くろさわ ともよ"
        }
      ]
    },
    {
      "characterId": 115,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 115,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 115,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 115,
      "tagId": 4,
      "value": "南达科他级"
    },
    {
      "characterId": 115,
      "tagId": 5,
      "value": "05:00:00"
    },
    {
      "characterId": 115,
      "tagId": 6,
      "value": "2024-08-15 铁翼擎风"
    },
    {
      "characterId": 115,
      "tagId": 7,
      "value": "小市真琴",
      "entries": [
        {
          "value": "小市真琴"
        },
        {
          "value": "こいち まこと"
        },
        {
          "value": "小市眞琴"
        }
      ]
    },
    {
      "characterId": 116,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 116,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 116,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 116,
      "tagId": 4,
      "value": "衣阿华级"
    },
    {
      "characterId": 116,
      "tagId": 5,
      "value": "06:30:00"
    },
    {
      "characterId": 116,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 116,
      "tagId": 7,
      "value": "富田美忧",
      "entries": [
        {
          "value": "富田美忧"
        },
        {
          "value": "とみた みゆ"
        },
        {
          "value": "富田美憂"
        }
      ]
    },
    {
      "characterId": 117,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 117,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 117,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 117,
      "tagId": 4,
      "value": "南达科他级"
    },
    {
      "characterId": 117,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 117,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 117,
      "tagId": 7,
      "value": "高橋李依",
      "entries": [
        {
          "value": "高橋李依"
        }
      ]
    },
    {
      "characterId": 118,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 118,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 118,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 118,
      "tagId": 4,
      "value": "南达科他级"
    },
    {
      "characterId": 118,
      "tagId": 5,
      "value": "05:00:00"
    },
    {
      "characterId": 118,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 118,
      "tagId": 7,
      "value": "山村响",
      "entries": [
        {
          "value": "山村响"
        },
        {
          "value": "やまむら ひびく"
        },
        {
          "value": "山村響"
        }
      ]
    },
    {
      "characterId": 119,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 119,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 119,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 119,
      "tagId": 4,
      "value": "长岛级"
    },
    {
      "characterId": 119,
      "tagId": 5,
      "value": "02:15:00"
    },
    {
      "characterId": 119,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 119,
      "tagId": 7,
      "value": "吉田幸代",
      "entries": [
        {
          "value": "吉田幸代"
        }
      ]
    },
    {
      "characterId": 120,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 120,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 120,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 120,
      "tagId": 4,
      "value": "博格级"
    },
    {
      "characterId": 120,
      "tagId": 5,
      "value": "02:20:00"
    },
    {
      "characterId": 120,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 120,
      "tagId": 7,
      "value": "野方小春",
      "entries": [
        {
          "value": "野方小春"
        },
        {
          "value": "のがた こはる"
        }
      ]
    },
    {
      "characterId": 121,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 121,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 121,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 121,
      "tagId": 4,
      "value": "卡萨布兰卡级"
    },
    {
      "characterId": 121,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 121,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 121,
      "tagId": 7,
      "value": "长谷川育美",
      "entries": [
        {
          "value": "长谷川育美"
        },
        {
          "value": "はせがわ いくみ"
        },
        {
          "value": "長谷川育美"
        }
      ]
    },
    {
      "characterId": 122,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 122,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 122,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 122,
      "tagId": 4,
      "value": "Langley"
    },
    {
      "characterId": 122,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 122,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 122,
      "tagId": 7,
      "value": "佳村遥",
      "entries": [
        {
          "value": "佳村遥"
        },
        {
          "value": "佳村 はるか"
        },
        {
          "value": "よしむら はるか"
        }
      ]
    },
    {
      "characterId": 123,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 123,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 123,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 123,
      "tagId": 4,
      "value": "列克星敦级"
    },
    {
      "characterId": 123,
      "tagId": 5,
      "value": "03:40:00"
    },
    {
      "characterId": 123,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 123,
      "tagId": 7,
      "value": "篠田南",
      "entries": [
        {
          "value": "篠田南"
        },
        {
          "value": "しのだ みなみ"
        }
      ]
    },
    {
      "characterId": 124,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 124,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 124,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 124,
      "tagId": 4,
      "value": "列克星敦级"
    },
    {
      "characterId": 124,
      "tagId": 5,
      "value": "03:40:00"
    },
    {
      "characterId": 124,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 124,
      "tagId": 7,
      "value": "上坂堇",
      "entries": [
        {
          "value": "上坂堇"
        },
        {
          "value": "うえさか すみれ"
        },
        {
          "value": "备注曾经有"
        }
      ]
    },
    {
      "characterId": 125,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 125,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 125,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 125,
      "tagId": 4,
      "value": "突击者级"
    },
    {
      "characterId": 125,
      "tagId": 5,
      "value": "02:40:00"
    },
    {
      "characterId": 125,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 125,
      "tagId": 7,
      "value": "浅川悠",
      "entries": [
        {
          "value": "浅川悠"
        },
        {
          "value": "あさかわ ゆう"
        }
      ]
    },
    {
      "characterId": 126,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 126,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 126,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 126,
      "tagId": 4,
      "value": "约克城级"
    },
    {
      "characterId": 126,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 126,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 126,
      "tagId": 7,
      "value": "优木加奈",
      "entries": [
        {
          "value": "优木加奈"
        },
        {
          "value": "優木 かな"
        },
        {
          "value": "ゆうき かな"
        }
      ]
    },
    {
      "characterId": 127,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 127,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 127,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 127,
      "tagId": 4,
      "value": "约克城级"
    },
    {
      "characterId": 127,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 127,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 127,
      "tagId": 7,
      "value": "石川由依",
      "entries": [
        {
          "value": "石川由依"
        },
        {
          "value": "いしかわ ゆい"
        }
      ]
    },
    {
      "characterId": 128,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 128,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 128,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 128,
      "tagId": 4,
      "value": "约克城级"
    },
    {
      "characterId": 128,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 128,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 128,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 129,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 129,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 129,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 129,
      "tagId": 4,
      "value": "胡蜂级"
    },
    {
      "characterId": 129,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 129,
      "tagId": 6,
      "value": "2017-12-28 坠落之翼"
    },
    {
      "characterId": 129,
      "tagId": 7,
      "value": "高柳知叶",
      "entries": [
        {
          "value": "高柳知叶"
        },
        {
          "value": "たかやなぎ ともよ"
        }
      ]
    },
    {
      "characterId": 130,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 130,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 130,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 130,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 130,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 130,
      "tagId": 6,
      "value": "2018-09-14"
    },
    {
      "characterId": 130,
      "tagId": 7,
      "value": "水桥香织",
      "entries": [
        {
          "value": "水桥香织"
        },
        {
          "value": "みずはし かおり"
        }
      ]
    },
    {
      "characterId": 131,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 131,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 131,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 131,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 131,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 131,
      "tagId": 6,
      "value": "2022-12-22 定向折叠"
    },
    {
      "characterId": 131,
      "tagId": 7,
      "value": "优木加奈",
      "entries": [
        {
          "value": "优木加奈"
        },
        {
          "value": "優木 かな"
        },
        {
          "value": "ゆうき かな"
        }
      ]
    },
    {
      "characterId": 132,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 132,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 132,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 132,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 132,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 132,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 132,
      "tagId": 7,
      "value": "法伊鲁兹·爱",
      "entries": [
        {
          "value": "法伊鲁兹·爱"
        },
        {
          "value": "ファイルーズ あい"
        },
        {
          "value": "另一译名菲鲁兹·蓝"
        }
      ]
    },
    {
      "characterId": 133,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 133,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 133,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 133,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 133,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 133,
      "tagId": 6,
      "value": "2022-12-22 定向折叠"
    },
    {
      "characterId": 133,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 134,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 134,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 134,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 134,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 134,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 134,
      "tagId": 6,
      "value": "2025-03-27 深谷来信"
    },
    {
      "characterId": 134,
      "tagId": 7,
      "value": "永濑安娜",
      "entries": [
        {
          "value": "永濑安娜"
        },
        {
          "value": "永瀬 アンナ"
        },
        {
          "value": "ながせ あんな"
        }
      ]
    },
    {
      "characterId": 135,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 135,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 135,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 135,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 135,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 135,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 135,
      "tagId": 7,
      "value": "市之瀨加那",
      "entries": [
        {
          "value": "市之瀨加那"
        },
        {
          "value": "いちのせ かな"
        },
        {
          "value": "市瀬加那"
        }
      ]
    },
    {
      "characterId": 136,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 136,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 136,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 136,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 136,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 136,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 136,
      "tagId": 7,
      "value": "篠田南",
      "entries": [
        {
          "value": "篠田南"
        },
        {
          "value": "しのだ みなみ"
        }
      ]
    },
    {
      "characterId": 137,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 137,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 137,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 137,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 137,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 137,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 137,
      "tagId": 7,
      "value": "市之濑加那",
      "entries": [
        {
          "value": "市之濑加那"
        }
      ]
    },
    {
      "characterId": 138,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 138,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 138,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 138,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 138,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 138,
      "tagId": 6,
      "value": "2019-02-28"
    },
    {
      "characterId": 138,
      "tagId": 7,
      "value": "山崎遥",
      "entries": [
        {
          "value": "山崎遥"
        }
      ]
    },
    {
      "characterId": 139,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 139,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 139,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 139,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 139,
      "tagId": 5,
      "value": "02:06:40"
    },
    {
      "characterId": 139,
      "tagId": 6,
      "value": "2020-10-12"
    },
    {
      "characterId": 139,
      "tagId": 7,
      "value": "汐見雪菜",
      "entries": [
        {
          "value": "汐見雪菜"
        }
      ]
    },
    {
      "characterId": 140,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 140,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 140,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 140,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 140,
      "tagId": 5,
      "value": "02:06:40"
    },
    {
      "characterId": 140,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 140,
      "tagId": 7,
      "value": "深川芹亚",
      "entries": [
        {
          "value": "深川芹亚"
        },
        {
          "value": "ふかがわ せりあ"
        },
        {
          "value": "深川芹亜"
        }
      ]
    },
    {
      "characterId": 141,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 141,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 141,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 141,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 141,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 141,
      "tagId": 6,
      "value": "2022-12-22 定向折叠"
    },
    {
      "characterId": 141,
      "tagId": 7,
      "value": "佳村遥",
      "entries": [
        {
          "value": "佳村遥"
        },
        {
          "value": "佳村 はるか"
        },
        {
          "value": "よしむら はるか"
        }
      ]
    },
    {
      "characterId": 142,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 142,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 142,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 142,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 142,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 142,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 142,
      "tagId": 7,
      "value": "藤田茜",
      "entries": [
        {
          "value": "藤田茜"
        }
      ]
    },
    {
      "characterId": 143,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 143,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 143,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 143,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 143,
      "tagId": 5,
      "value": "02:06:40"
    },
    {
      "characterId": 143,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 143,
      "tagId": 7,
      "value": "依田菜津",
      "entries": [
        {
          "value": "依田菜津"
        },
        {
          "value": "よりた なつ"
        }
      ]
    },
    {
      "characterId": 144,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 144,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 144,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 144,
      "tagId": 4,
      "value": "埃塞克斯级"
    },
    {
      "characterId": 144,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 144,
      "tagId": 6,
      "value": "2019-02-28"
    },
    {
      "characterId": 144,
      "tagId": 7,
      "value": "藤田茜",
      "entries": [
        {
          "value": "藤田茜"
        }
      ]
    },
    {
      "characterId": 145,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 145,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 145,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 145,
      "tagId": 4,
      "value": "约克城级"
    },
    {
      "characterId": 145,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 145,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 145,
      "tagId": 7,
      "value": "石川由依",
      "entries": [
        {
          "value": "石川由依"
        },
        {
          "value": "いしかわ ゆい"
        },
        {
          "value": "年月日"
        }
      ]
    },
    {
      "characterId": 146,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 146,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 146,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 146,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 146,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 146,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 146,
      "tagId": 7,
      "value": "长谷川明子",
      "entries": [
        {
          "value": "长谷川明子"
        }
      ]
    },
    {
      "characterId": 147,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 147,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 147,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 147,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 147,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 147,
      "tagId": 6,
      "value": "2018-09-14"
    },
    {
      "characterId": 147,
      "tagId": 7,
      "value": "种崎敦美",
      "entries": [
        {
          "value": "种崎敦美"
        }
      ]
    },
    {
      "characterId": 148,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 148,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 148,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 148,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 148,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 148,
      "tagId": 6,
      "value": "2019-07-31 箱庭疗法"
    },
    {
      "characterId": 148,
      "tagId": 7,
      "value": "久保由利香",
      "entries": [
        {
          "value": "久保由利香"
        },
        {
          "value": "另一译名久保百合花"
        }
      ]
    },
    {
      "characterId": 149,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 149,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 149,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 149,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 149,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 149,
      "tagId": 6,
      "value": "2020-03-26 微层混合"
    },
    {
      "characterId": 149,
      "tagId": 7,
      "value": "首藤志奈",
      "entries": [
        {
          "value": "首藤志奈"
        }
      ]
    },
    {
      "characterId": 150,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 150,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 150,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 150,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 150,
      "tagId": 5,
      "value": "00:24:00"
    },
    {
      "characterId": 150,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 150,
      "tagId": 7,
      "value": "种崎敦美",
      "entries": [
        {
          "value": "种崎敦美"
        }
      ]
    },
    {
      "characterId": 151,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 151,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 151,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 151,
      "tagId": 4,
      "value": "巴劳鱵级"
    },
    {
      "characterId": 151,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 151,
      "tagId": 6,
      "value": "2021-05-27 镜位螺旋"
    },
    {
      "characterId": 151,
      "tagId": 7,
      "value": "赤尾光",
      "entries": [
        {
          "value": "赤尾光"
        },
        {
          "value": "赤尾 ひかる"
        }
      ]
    },
    {
      "characterId": 152,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 152,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 152,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 152,
      "tagId": 4,
      "value": "独角鲸级"
    },
    {
      "characterId": 152,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 152,
      "tagId": 6,
      "value": "2021-08-19 复刻：微层混合"
    },
    {
      "characterId": 152,
      "tagId": 7,
      "value": "凉本秋穗",
      "entries": [
        {
          "value": "凉本秋穗"
        },
        {
          "value": "涼本 あきほ"
        },
        {
          "value": "すずもと あきほ"
        }
      ]
    },
    {
      "characterId": 153,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 153,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 153,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 153,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 153,
      "tagId": 5,
      "value": "00:24:00"
    },
    {
      "characterId": 153,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 153,
      "tagId": 7,
      "value": "深川瑠华",
      "entries": [
        {
          "value": "深川瑠华"
        },
        {
          "value": "ふかがわ るか"
        },
        {
          "value": "深川瑠華"
        }
      ]
    },
    {
      "characterId": 154,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 154,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 154,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 154,
      "tagId": 4,
      "value": "猫鲨级"
    },
    {
      "characterId": 154,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 154,
      "tagId": 6,
      "value": "2024-08-15 铁翼擎风"
    },
    {
      "characterId": 154,
      "tagId": 7,
      "value": "桃河里香",
      "entries": [
        {
          "value": "桃河里香"
        },
        {
          "value": "桃河 りか"
        },
        {
          "value": "ももかわ りか"
        }
      ]
    },
    {
      "characterId": 155,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 155,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 155,
      "tagId": 3,
      "value": "维修"
    },
    {
      "characterId": 155,
      "tagId": 4,
      "value": "Vestal"
    },
    {
      "characterId": 155,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 155,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 155,
      "tagId": 7,
      "value": "香月遥",
      "entries": [
        {
          "value": "香月遥"
        },
        {
          "value": "香月 はるか"
        }
      ]
    },
    {
      "characterId": 156,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 156,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 156,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 156,
      "tagId": 4,
      "value": "阿拉斯加级"
    },
    {
      "characterId": 156,
      "tagId": 5,
      "value": "04:11:40"
    },
    {
      "characterId": 156,
      "tagId": 6,
      "value": "2023-12-21 星海逐光"
    },
    {
      "characterId": 156,
      "tagId": 7,
      "value": "各务华梨",
      "entries": [
        {
          "value": "各务华梨"
        },
        {
          "value": "かがみ かりん"
        },
        {
          "value": "各務華梨"
        }
      ]
    },
    {
      "characterId": 157,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 157,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 157,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 157,
      "tagId": 4,
      "value": "伍斯特级"
    },
    {
      "characterId": 157,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 157,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 157,
      "tagId": 7,
      "value": "楠木灯",
      "entries": [
        {
          "value": "楠木灯"
        }
      ]
    },
    {
      "characterId": 158,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 158,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 158,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 158,
      "tagId": 4,
      "value": "衣阿华级"
    },
    {
      "characterId": 158,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 158,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 158,
      "tagId": 7,
      "value": "下地紫野",
      "entries": [
        {
          "value": "下地紫野"
        }
      ]
    },
    {
      "characterId": 159,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 159,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 159,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 159,
      "tagId": 4,
      "value": "Anchorage"
    },
    {
      "characterId": 159,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 159,
      "tagId": 6,
      "value": "2021-07-08"
    },
    {
      "characterId": 159,
      "tagId": 7,
      "value": "日高里菜",
      "entries": [
        {
          "value": "日高里菜"
        },
        {
          "value": "ひだか りな"
        }
      ]
    },
    {
      "characterId": 160,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 160,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 160,
      "tagId": 3,
      "value": "航战"
    },
    {
      "characterId": 160,
      "tagId": 4,
      "value": "1型"
    },
    {
      "characterId": 160,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 160,
      "tagId": 6,
      "value": "2023-07-13"
    },
    {
      "characterId": 160,
      "tagId": 7,
      "value": "青山吉能",
      "entries": [
        {
          "value": "青山吉能"
        },
        {
          "value": "あおやま よしの"
        }
      ]
    },
    {
      "characterId": 161,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 161,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 161,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 161,
      "tagId": 4,
      "value": "弗莱彻级"
    },
    {
      "characterId": 161,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 161,
      "tagId": 6,
      "value": "2024-07-18 轻量化复刻：泠誓光庭"
    },
    {
      "characterId": 161,
      "tagId": 7,
      "value": "伊驹百合绘",
      "entries": [
        {
          "value": "伊驹百合绘"
        },
        {
          "value": "伊駒 ゆりえ"
        },
        {
          "value": "いごま ゆりえ"
        }
      ]
    },
    {
      "characterId": 162,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 162,
      "tagId": 2,
      "value": "白鹰"
    },
    {
      "characterId": 162,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 162,
      "tagId": 4,
      "value": "南达科他级"
    },
    {
      "characterId": 162,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 162,
      "tagId": 6,
      "value": "2025-07-10"
    },
    {
      "characterId": 162,
      "tagId": 7,
      "value": "松田利冴",
      "entries": [
        {
          "value": "松田利冴"
        },
        {
          "value": "まつだ りさえ"
        }
      ]
    },
    {
      "characterId": 163,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 163,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 163,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 163,
      "tagId": 4,
      "value": "A级"
    },
    {
      "characterId": 163,
      "tagId": 5,
      "value": "00:19:00"
    },
    {
      "characterId": 163,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 163,
      "tagId": 7,
      "value": "绫宫由希子",
      "entries": [
        {
          "value": "绫宫由希子"
        },
        {
          "value": "あやみや ゆきこ"
        }
      ]
    },
    {
      "characterId": 164,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 164,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 164,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 164,
      "tagId": 4,
      "value": "A and B"
    },
    {
      "characterId": 164,
      "tagId": 5,
      "value": "00:19:00"
    },
    {
      "characterId": 164,
      "tagId": 6,
      "value": "2017-10-26"
    },
    {
      "characterId": 164,
      "tagId": 7,
      "value": "奥野香耶",
      "entries": [
        {
          "value": "奥野香耶"
        },
        {
          "value": "おくの かや"
        }
      ]
    },
    {
      "characterId": 165,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 165,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 165,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 165,
      "tagId": 4,
      "value": "A and B"
    },
    {
      "characterId": 165,
      "tagId": 5,
      "value": "00:19:00"
    },
    {
      "characterId": 165,
      "tagId": 6,
      "value": "2017-10-26"
    },
    {
      "characterId": 165,
      "tagId": 7,
      "value": "上仓万实",
      "entries": [
        {
          "value": "上仓万实"
        },
        {
          "value": "かみくら まみ"
        }
      ]
    },
    {
      "characterId": 166,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 166,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 166,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 166,
      "tagId": 4,
      "value": "A and B"
    },
    {
      "characterId": 166,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 166,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 166,
      "tagId": 7,
      "value": "铃木绘理",
      "entries": [
        {
          "value": "铃木绘理"
        },
        {
          "value": "すずき えり"
        }
      ]
    },
    {
      "characterId": 167,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 167,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 167,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 167,
      "tagId": 4,
      "value": "A and B"
    },
    {
      "characterId": 167,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 167,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 167,
      "tagId": 7,
      "value": "铃木绘理",
      "entries": [
        {
          "value": "铃木绘理"
        },
        {
          "value": "すずき えり"
        }
      ]
    },
    {
      "characterId": 168,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 168,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 168,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 168,
      "tagId": 4,
      "value": "C级"
    },
    {
      "characterId": 168,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 168,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 168,
      "tagId": 7,
      "value": "铃木实里",
      "entries": [
        {
          "value": "铃木实里"
        },
        {
          "value": "みのり"
        }
      ]
    },
    {
      "characterId": 169,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 169,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 169,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 169,
      "tagId": 4,
      "value": "C级"
    },
    {
      "characterId": 169,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 169,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 169,
      "tagId": 7,
      "value": "铃木实里",
      "entries": [
        {
          "value": "铃木实里"
        },
        {
          "value": "みのり"
        }
      ]
    },
    {
      "characterId": 170,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 170,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 170,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 170,
      "tagId": 4,
      "value": "C级"
    },
    {
      "characterId": 170,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 170,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 170,
      "tagId": 7,
      "value": "種田梨沙",
      "entries": [
        {
          "value": "種田梨沙"
        },
        {
          "value": "たねだ りさ"
        },
        {
          "value": "年月日解禁并正式开通"
        }
      ]
    },
    {
      "characterId": 171,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 171,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 171,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 171,
      "tagId": 4,
      "value": "F级"
    },
    {
      "characterId": 171,
      "tagId": 5,
      "value": "00:24:00"
    },
    {
      "characterId": 171,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 171,
      "tagId": 7,
      "value": "山冈百合",
      "entries": [
        {
          "value": "山冈百合"
        },
        {
          "value": "山岡 ゆり"
        },
        {
          "value": "やまおか ゆり"
        }
      ]
    },
    {
      "characterId": 172,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 172,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 172,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 172,
      "tagId": 4,
      "value": "F级"
    },
    {
      "characterId": 172,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 172,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 172,
      "tagId": 7,
      "value": "后藤邑子",
      "entries": [
        {
          "value": "后藤邑子"
        },
        {
          "value": "ごとう ゆうこ"
        },
        {
          "value": "後藤邑子"
        }
      ]
    },
    {
      "characterId": 173,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 173,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 173,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 173,
      "tagId": 4,
      "value": "G级"
    },
    {
      "characterId": 173,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 173,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 173,
      "tagId": 7,
      "value": "木村珠莉",
      "entries": [
        {
          "value": "木村珠莉"
        },
        {
          "value": "きむら じゅり"
        }
      ]
    },
    {
      "characterId": 174,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 174,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 174,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 174,
      "tagId": 4,
      "value": "G级"
    },
    {
      "characterId": 174,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 174,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 174,
      "tagId": 7,
      "value": "五十岚裕美",
      "entries": [
        {
          "value": "五十岚裕美"
        },
        {
          "value": "いがらし ひろみ"
        }
      ]
    },
    {
      "characterId": 175,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 175,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 175,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 175,
      "tagId": 4,
      "value": "H级"
    },
    {
      "characterId": 175,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 175,
      "tagId": 6,
      "value": "2019-03-07"
    },
    {
      "characterId": 175,
      "tagId": 7,
      "value": "七濑彩夏",
      "entries": [
        {
          "value": "七濑彩夏"
        }
      ]
    },
    {
      "characterId": 176,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 176,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 176,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 176,
      "tagId": 4,
      "value": "H级"
    },
    {
      "characterId": 176,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 176,
      "tagId": 6,
      "value": "2019-03-07"
    },
    {
      "characterId": 176,
      "tagId": 7,
      "value": "七濑彩夏",
      "entries": [
        {
          "value": "七濑彩夏"
        }
      ]
    },
    {
      "characterId": 177,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 177,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 177,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 177,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 177,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 177,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 177,
      "tagId": 7,
      "value": "山根希美",
      "entries": [
        {
          "value": "山根希美"
        },
        {
          "value": "やまね のぞみ"
        }
      ]
    },
    {
      "characterId": 178,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 178,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 178,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 178,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 178,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 178,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 178,
      "tagId": 7,
      "value": "白壁爽子",
      "entries": [
        {
          "value": "白壁爽子"
        },
        {
          "value": "しらかべ さわこ"
        }
      ]
    },
    {
      "characterId": 179,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 179,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 179,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 179,
      "tagId": 4,
      "value": "旧V级"
    },
    {
      "characterId": 179,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 179,
      "tagId": 6,
      "value": "2017-06-08"
    },
    {
      "characterId": 179,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "钉宫 理惠 くぎみや りえ"
        }
      ]
    },
    {
      "characterId": 180,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 180,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 180,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 180,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 180,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 180,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 180,
      "tagId": 7,
      "value": "高柳知叶",
      "entries": [
        {
          "value": "高柳知叶"
        },
        {
          "value": "たかやなぎ ともよ"
        }
      ]
    },
    {
      "characterId": 181,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 181,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 181,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 181,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 181,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 181,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 181,
      "tagId": 7,
      "value": "嵩马美步",
      "entries": [
        {
          "value": "嵩马美步"
        }
      ]
    },
    {
      "characterId": 182,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 182,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 182,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 182,
      "tagId": 4,
      "value": "M级"
    },
    {
      "characterId": 182,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 182,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 182,
      "tagId": 7,
      "value": "花守由美里",
      "entries": [
        {
          "value": "花守由美里"
        }
      ]
    },
    {
      "characterId": 183,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 183,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 183,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 183,
      "tagId": 4,
      "value": "M级"
    },
    {
      "characterId": 183,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 183,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 183,
      "tagId": 7,
      "value": "花守由美里",
      "entries": [
        {
          "value": "花守由美里"
        }
      ]
    },
    {
      "characterId": 184,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 184,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 184,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 184,
      "tagId": 4,
      "value": "E级"
    },
    {
      "characterId": 184,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 184,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 184,
      "tagId": 7,
      "value": "结名美月",
      "entries": [
        {
          "value": "结名美月"
        }
      ]
    },
    {
      "characterId": 185,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 185,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 185,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 185,
      "tagId": 4,
      "value": "部族级"
    },
    {
      "characterId": 185,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 185,
      "tagId": 6,
      "value": "2020-06-03"
    },
    {
      "characterId": 185,
      "tagId": 7,
      "value": "高桥春香",
      "entries": [
        {
          "value": "高桥春香"
        }
      ]
    },
    {
      "characterId": 186,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 186,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 186,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 186,
      "tagId": 4,
      "value": "I级"
    },
    {
      "characterId": 186,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 186,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 186,
      "tagId": 7,
      "value": "高田忧希",
      "entries": [
        {
          "value": "高田忧希"
        }
      ]
    },
    {
      "characterId": 187,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 187,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 187,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 187,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 187,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 187,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 187,
      "tagId": 7,
      "value": "佐藤希",
      "entries": [
        {
          "value": "佐藤希"
        },
        {
          "value": "佐藤 みゆ"
        }
      ]
    },
    {
      "characterId": 188,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 188,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 188,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 188,
      "tagId": 4,
      "value": "J级"
    },
    {
      "characterId": 188,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 188,
      "tagId": 6,
      "value": "2022-10-27"
    },
    {
      "characterId": 188,
      "tagId": 7,
      "value": "木野日菜",
      "entries": [
        {
          "value": "木野日菜"
        }
      ]
    },
    {
      "characterId": 189,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 189,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 189,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 189,
      "tagId": 4,
      "value": "H级"
    },
    {
      "characterId": 189,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 189,
      "tagId": 6,
      "value": "2023-02-23 湮烬尘墟"
    },
    {
      "characterId": 189,
      "tagId": 7,
      "value": "进藤天音",
      "entries": [
        {
          "value": "进藤天音"
        },
        {
          "value": "進藤 あまね"
        },
        {
          "value": "しんどう あまね"
        }
      ]
    },
    {
      "characterId": 190,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 190,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 190,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 190,
      "tagId": 4,
      "value": "部族级"
    },
    {
      "characterId": 190,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 190,
      "tagId": 6,
      "value": "2024-03-28"
    },
    {
      "characterId": 190,
      "tagId": 7,
      "value": "岩井映美里",
      "entries": [
        {
          "value": "岩井映美里"
        },
        {
          "value": "いわい えみり"
        }
      ]
    },
    {
      "characterId": 191,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 191,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 191,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 191,
      "tagId": 4,
      "value": "战斗级"
    },
    {
      "characterId": 191,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 191,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 191,
      "tagId": 7,
      "value": "米泽圆",
      "entries": [
        {
          "value": "米泽圆"
        },
        {
          "value": "よねざわ まどか"
        },
        {
          "value": "米澤円"
        }
      ]
    },
    {
      "characterId": 192,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 192,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 192,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 192,
      "tagId": 4,
      "value": "G级"
    },
    {
      "characterId": 192,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 192,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 192,
      "tagId": 7,
      "value": "金泽舞",
      "entries": [
        {
          "value": "金泽舞"
        },
        {
          "value": "金澤 まい"
        },
        {
          "value": "かなざわ まい"
        }
      ]
    },
    {
      "characterId": 193,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 193,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 193,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 193,
      "tagId": 4,
      "value": "利安得级"
    },
    {
      "characterId": 193,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 193,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 193,
      "tagId": 7,
      "value": "木户衣吹",
      "entries": [
        {
          "value": "木户衣吹"
        }
      ]
    },
    {
      "characterId": 194,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 194,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 194,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 194,
      "tagId": 4,
      "value": "利安得级"
    },
    {
      "characterId": 194,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 194,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 194,
      "tagId": 7,
      "value": "山冈百合",
      "entries": [
        {
          "value": "山冈百合"
        },
        {
          "value": "山岡 ゆり"
        },
        {
          "value": "やまおか ゆり"
        }
      ]
    },
    {
      "characterId": 195,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 195,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 195,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 195,
      "tagId": 4,
      "value": "利安得级"
    },
    {
      "characterId": 195,
      "tagId": 5,
      "value": "01:15:00"
    },
    {
      "characterId": 195,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 195,
      "tagId": 7,
      "value": "中条智世",
      "entries": [
        {
          "value": "中条智世"
        }
      ]
    },
    {
      "characterId": 196,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 196,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 196,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 196,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 196,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 196,
      "tagId": 6,
      "value": "2020-01-21"
    },
    {
      "characterId": 196,
      "tagId": 7,
      "value": "青木琉璃子",
      "entries": [
        {
          "value": "青木琉璃子"
        }
      ]
    },
    {
      "characterId": 197,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 197,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 197,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 197,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 197,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 197,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 197,
      "tagId": 7,
      "value": "真野步",
      "entries": [
        {
          "value": "真野步"
        },
        {
          "value": "真野 あゆみ"
        }
      ]
    },
    {
      "characterId": 198,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 198,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 198,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 198,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 198,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 198,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 198,
      "tagId": 7,
      "value": "小原好美",
      "entries": [
        {
          "value": "小原好美"
        },
        {
          "value": "こはら このみ"
        }
      ]
    },
    {
      "characterId": 199,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 199,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 199,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 199,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 199,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 199,
      "tagId": 6,
      "value": "2022-10-27"
    },
    {
      "characterId": 199,
      "tagId": 7,
      "value": "田中那実",
      "entries": [
        {
          "value": "田中那実"
        }
      ]
    },
    {
      "characterId": 200,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 200,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 200,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 200,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 200,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 200,
      "tagId": 6,
      "value": "2020-01-21"
    },
    {
      "characterId": 200,
      "tagId": 7,
      "value": "上田丽奈",
      "entries": [
        {
          "value": "上田丽奈"
        },
        {
          "value": "うえだ れいな"
        }
      ]
    },
    {
      "characterId": 201,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 201,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 201,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 201,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 201,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 201,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 201,
      "tagId": 7,
      "value": "后藤邑子",
      "entries": [
        {
          "value": "后藤邑子"
        },
        {
          "value": "ごとう ゆうこ"
        },
        {
          "value": "後藤邑子"
        }
      ]
    },
    {
      "characterId": 202,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 202,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 202,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 202,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 202,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 202,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 202,
      "tagId": 7,
      "value": "堀江由衣",
      "entries": [
        {
          "value": "堀江由衣"
        },
        {
          "value": "ほりえ よしこ"
        },
        {
          "value": "堀江由子"
        }
      ]
    },
    {
      "characterId": 203,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 203,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 203,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 203,
      "tagId": 4,
      "value": "阿瑞托莎级"
    },
    {
      "characterId": 203,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 203,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 203,
      "tagId": 7,
      "value": "诹访彩花",
      "entries": [
        {
          "value": "诹访彩花"
        }
      ]
    },
    {
      "characterId": 204,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 204,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 204,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 204,
      "tagId": 4,
      "value": "阿瑞托莎级"
    },
    {
      "characterId": 204,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 204,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 204,
      "tagId": 7,
      "value": "诹访彩花",
      "entries": [
        {
          "value": "诹访彩花"
        }
      ]
    },
    {
      "characterId": 205,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 205,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 205,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 205,
      "tagId": 4,
      "value": "阿瑞托莎级"
    },
    {
      "characterId": 205,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 205,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 205,
      "tagId": 7,
      "value": "榊原由依",
      "entries": [
        {
          "value": "榊原由依"
        },
        {
          "value": "さかきばら ゆい"
        }
      ]
    },
    {
      "characterId": 206,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 206,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 206,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 206,
      "tagId": 4,
      "value": "斐济级"
    },
    {
      "characterId": 206,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 206,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 206,
      "tagId": 7,
      "value": "秦佐和子",
      "entries": [
        {
          "value": "秦佐和子"
        },
        {
          "value": "はた さわこ"
        }
      ]
    },
    {
      "characterId": 207,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 207,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 207,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 207,
      "tagId": 4,
      "value": "斐济级"
    },
    {
      "characterId": 207,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 207,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 207,
      "tagId": 7,
      "value": "三瓶由布子",
      "entries": [
        {
          "value": "三瓶由布子"
        },
        {
          "value": "さんぺい ゆうこ"
        }
      ]
    },
    {
      "characterId": 208,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 208,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 208,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 208,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 208,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 208,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 208,
      "tagId": 7,
      "value": "堀江由衣",
      "entries": [
        {
          "value": "堀江由衣"
        },
        {
          "value": "ほりえ よしこ"
        },
        {
          "value": "堀江由子"
        }
      ]
    },
    {
      "characterId": 209,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 209,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 209,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 209,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 209,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 209,
      "tagId": 6,
      "value": "2018-09-28"
    },
    {
      "characterId": 209,
      "tagId": 7,
      "value": "后藤沙绪里",
      "entries": [
        {
          "value": "后藤沙绪里"
        }
      ]
    },
    {
      "characterId": 210,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 210,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 210,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 210,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 210,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 210,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 210,
      "tagId": 7,
      "value": "青木琉璃子",
      "entries": [
        {
          "value": "青木琉璃子"
        }
      ]
    },
    {
      "characterId": 211,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 211,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 211,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 211,
      "tagId": 4,
      "value": "谷物女神级"
    },
    {
      "characterId": 211,
      "tagId": 5,
      "value": "01:07:00"
    },
    {
      "characterId": 211,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 211,
      "tagId": 7,
      "value": "藤沢玲香",
      "entries": [
        {
          "value": "藤沢玲香"
        },
        {
          "value": "藤沢 れい"
        },
        {
          "value": "藤沢香"
        }
      ]
    },
    {
      "characterId": 212,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 212,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 212,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 212,
      "tagId": 4,
      "value": "谷物女神级"
    },
    {
      "characterId": 212,
      "tagId": 5,
      "value": "01:07:00"
    },
    {
      "characterId": 212,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 212,
      "tagId": 7,
      "value": "国服登记名藤沢玲香",
      "entries": [
        {
          "value": "国服登记名藤沢玲香"
        },
        {
          "value": "れい"
        },
        {
          "value": "日服登记姓名藤沢香"
        }
      ]
    },
    {
      "characterId": 213,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 213,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 213,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 213,
      "tagId": 4,
      "value": "确捷级"
    },
    {
      "characterId": 213,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 213,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 213,
      "tagId": 7,
      "value": "大和田仁美",
      "entries": [
        {
          "value": "大和田仁美"
        },
        {
          "value": "おおわだ ひとみ"
        }
      ]
    },
    {
      "characterId": 214,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 214,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 214,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 214,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 214,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 214,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 214,
      "tagId": 7,
      "value": "金元寿子",
      "entries": [
        {
          "value": "金元寿子"
        },
        {
          "value": "かねもと ひさこ"
        }
      ]
    },
    {
      "characterId": 215,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 215,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 215,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 215,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 215,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 215,
      "tagId": 6,
      "value": "2019-10-31"
    },
    {
      "characterId": 215,
      "tagId": 7,
      "value": "小原好美",
      "entries": [
        {
          "value": "小原好美"
        },
        {
          "value": "こはら このみ"
        }
      ]
    },
    {
      "characterId": 216,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 216,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 216,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 216,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 216,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 216,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 216,
      "tagId": 7,
      "value": "楠木灯",
      "entries": [
        {
          "value": "楠木灯"
        }
      ]
    },
    {
      "characterId": 217,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 217,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 217,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 217,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 217,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 217,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 217,
      "tagId": 7,
      "value": "田口宏子",
      "entries": [
        {
          "value": "田口宏子"
        }
      ]
    },
    {
      "characterId": 218,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 218,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 218,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 218,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 218,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 218,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 218,
      "tagId": 7,
      "value": "青木琉璃子",
      "entries": [
        {
          "value": "青木琉璃子"
        }
      ]
    },
    {
      "characterId": 219,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 219,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 219,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 219,
      "tagId": 4,
      "value": "阿瑞托莎级"
    },
    {
      "characterId": 219,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 219,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 219,
      "tagId": 7,
      "value": "荒浪和沙",
      "entries": [
        {
          "value": "荒浪和沙"
        }
      ]
    },
    {
      "characterId": 220,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 220,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 220,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 220,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 220,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 220,
      "tagId": 6,
      "value": "2022-01-27"
    },
    {
      "characterId": 220,
      "tagId": 7,
      "value": "绫濑有",
      "entries": [
        {
          "value": "绫濑有"
        },
        {
          "value": "あやせ ゆう"
        },
        {
          "value": "綾瀬有"
        }
      ]
    },
    {
      "characterId": 221,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 221,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 221,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 221,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 221,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 221,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 221,
      "tagId": 7,
      "value": "东城日沙子",
      "entries": [
        {
          "value": "东城日沙子"
        },
        {
          "value": "とうじょう ひさこ"
        },
        {
          "value": "東城日沙子"
        }
      ]
    },
    {
      "characterId": 222,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 222,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 222,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 222,
      "tagId": 4,
      "value": "翡翠级"
    },
    {
      "characterId": 222,
      "tagId": 5,
      "value": "01:07:00"
    },
    {
      "characterId": 222,
      "tagId": 6,
      "value": "2022-06-30"
    },
    {
      "characterId": 222,
      "tagId": 7,
      "value": "藤井雪代",
      "entries": [
        {
          "value": "藤井雪代"
        },
        {
          "value": "藤井 ゆきよ"
        }
      ]
    },
    {
      "characterId": 223,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 223,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 223,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 223,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 223,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 223,
      "tagId": 6,
      "value": "2023-02-23 湮烬尘墟"
    },
    {
      "characterId": 223,
      "tagId": 7,
      "value": "高木美佑",
      "entries": [
        {
          "value": "高木美佑"
        },
        {
          "value": "たかぎ みゆ"
        }
      ]
    },
    {
      "characterId": 224,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 224,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 224,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 224,
      "tagId": 4,
      "value": "Town"
    },
    {
      "characterId": 224,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 224,
      "tagId": 6,
      "value": "2024-03-28"
    },
    {
      "characterId": 224,
      "tagId": 7,
      "value": "真野美月",
      "entries": [
        {
          "value": "真野美月"
        },
        {
          "value": "まの みづき"
        }
      ]
    },
    {
      "characterId": 225,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 225,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 225,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 225,
      "tagId": 4,
      "value": "黛朵级"
    },
    {
      "characterId": 225,
      "tagId": 5,
      "value": "00:55:00"
    },
    {
      "characterId": 225,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 225,
      "tagId": 7,
      "value": "薄井友里",
      "entries": [
        {
          "value": "薄井友里"
        },
        {
          "value": "うすい ゆり"
        }
      ]
    },
    {
      "characterId": 226,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 226,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 226,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 226,
      "tagId": 4,
      "value": "斐济级"
    },
    {
      "characterId": 226,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 226,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 226,
      "tagId": 7,
      "value": "樱木鸫",
      "entries": [
        {
          "value": "樱木鸫"
        },
        {
          "value": "桜木 つぐみ"
        },
        {
          "value": "樱木亚美"
        }
      ]
    },
    {
      "characterId": 227,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 227,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 227,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 227,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 227,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 227,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 227,
      "tagId": 7,
      "value": "向山直美",
      "entries": [
        {
          "value": "向山直美"
        },
        {
          "value": "むかいやま なおみ"
        }
      ]
    },
    {
      "characterId": 228,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 228,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 228,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 228,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 228,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 228,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 228,
      "tagId": 7,
      "value": "木户衣吹",
      "entries": [
        {
          "value": "木户衣吹"
        }
      ]
    },
    {
      "characterId": 229,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 229,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 229,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 229,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 229,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 229,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 229,
      "tagId": 7,
      "value": "金元寿子",
      "entries": [
        {
          "value": "金元寿子"
        },
        {
          "value": "かねもと ひさこ"
        }
      ]
    },
    {
      "characterId": 230,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 230,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 230,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 230,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 230,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 230,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 230,
      "tagId": 7,
      "value": "上原明里",
      "entries": [
        {
          "value": "上原明里"
        },
        {
          "value": "うえはら あかり"
        }
      ]
    },
    {
      "characterId": 231,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 231,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 231,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 231,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 231,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 231,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 231,
      "tagId": 7,
      "value": "佐久间比吕美",
      "entries": [
        {
          "value": "佐久间比吕美"
        },
        {
          "value": "さくま ひろみ"
        }
      ]
    },
    {
      "characterId": 232,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 232,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 232,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 232,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 232,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 232,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 232,
      "tagId": 7,
      "value": "沼仓爱美",
      "entries": [
        {
          "value": "沼仓爱美"
        }
      ]
    },
    {
      "characterId": 233,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 233,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 233,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 233,
      "tagId": 4,
      "value": "约克级"
    },
    {
      "characterId": 233,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 233,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 233,
      "tagId": 7,
      "value": "山根希美",
      "entries": [
        {
          "value": "山根希美"
        },
        {
          "value": "やまね のぞみ"
        }
      ]
    },
    {
      "characterId": 234,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 234,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 234,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 234,
      "tagId": 4,
      "value": "约克级"
    },
    {
      "characterId": 234,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 234,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 234,
      "tagId": 7,
      "value": "加隈亚衣",
      "entries": [
        {
          "value": "加隈亚衣"
        },
        {
          "value": "かくま あい"
        }
      ]
    },
    {
      "characterId": 235,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 235,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 235,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 235,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 235,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 235,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 235,
      "tagId": 7,
      "value": "苍乃辉",
      "entries": [
        {
          "value": "苍乃辉"
        }
      ]
    },
    {
      "characterId": 236,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 236,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 236,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 236,
      "tagId": 4,
      "value": "Cheshire"
    },
    {
      "characterId": 236,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 236,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 236,
      "tagId": 7,
      "value": "石上静香",
      "entries": [
        {
          "value": "石上静香"
        },
        {
          "value": "いしがみ しずか"
        }
      ]
    },
    {
      "characterId": 237,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 237,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 237,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 237,
      "tagId": 4,
      "value": "County"
    },
    {
      "characterId": 237,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 237,
      "tagId": 6,
      "value": "2024-03-28"
    },
    {
      "characterId": 237,
      "tagId": 7,
      "value": "佐仓薰",
      "entries": [
        {
          "value": "佐仓薰"
        },
        {
          "value": "さくら かおる"
        },
        {
          "value": "佐倉薫"
        }
      ]
    },
    {
      "characterId": 238,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 238,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 238,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 238,
      "tagId": 4,
      "value": "声望级"
    },
    {
      "characterId": 238,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 238,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 238,
      "tagId": 7,
      "value": "川澄绫子",
      "entries": [
        {
          "value": "川澄绫子"
        },
        {
          "value": "かわすみ あやこ"
        }
      ]
    },
    {
      "characterId": 239,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 239,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 239,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 239,
      "tagId": 4,
      "value": "声望级"
    },
    {
      "characterId": 239,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 239,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 239,
      "tagId": 7,
      "value": "野方小春",
      "entries": [
        {
          "value": "野方小春"
        },
        {
          "value": "のがた こはる"
        }
      ]
    },
    {
      "characterId": 240,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 240,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 240,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 240,
      "tagId": 4,
      "value": "海军上将级"
    },
    {
      "characterId": 240,
      "tagId": 5,
      "value": "05:50:00"
    },
    {
      "characterId": 240,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 240,
      "tagId": 7,
      "value": "田中敦子",
      "entries": [
        {
          "value": "田中敦子"
        },
        {
          "value": "たなか あつこ"
        }
      ]
    },
    {
      "characterId": 241,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 241,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 241,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 241,
      "tagId": 4,
      "value": "声望级"
    },
    {
      "characterId": 241,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 241,
      "tagId": 6,
      "value": "2020-04-23 复刻：苍红的回响"
    },
    {
      "characterId": 241,
      "tagId": 7,
      "value": "川澄绫子",
      "entries": [
        {
          "value": "川澄绫子"
        },
        {
          "value": "かわすみ あやこ"
        },
        {
          "value": "茅野爱衣"
        }
      ]
    },
    {
      "characterId": 242,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 242,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 242,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 242,
      "tagId": 4,
      "value": "伊丽莎白女王级"
    },
    {
      "characterId": 242,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 242,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 242,
      "tagId": 7,
      "value": "上坂堇",
      "entries": [
        {
          "value": "上坂堇"
        }
      ]
    },
    {
      "characterId": 243,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 243,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 243,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 243,
      "tagId": 4,
      "value": "伊丽莎白女王级"
    },
    {
      "characterId": 243,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 243,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 243,
      "tagId": 7,
      "value": "上坂堇",
      "entries": [
        {
          "value": "上坂堇"
        }
      ]
    },
    {
      "characterId": 244,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 244,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 244,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 244,
      "tagId": 4,
      "value": "纳尔逊级"
    },
    {
      "characterId": 244,
      "tagId": 5,
      "value": "04:40:00"
    },
    {
      "characterId": 244,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 244,
      "tagId": 7,
      "value": "桑原由气",
      "entries": [
        {
          "value": "桑原由气"
        },
        {
          "value": "桑原 由气 くわはら ゆうき"
        }
      ]
    },
    {
      "characterId": 245,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 245,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 245,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 245,
      "tagId": 4,
      "value": "纳尔逊级"
    },
    {
      "characterId": 245,
      "tagId": 5,
      "value": "04:40:00"
    },
    {
      "characterId": 245,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 245,
      "tagId": 7,
      "value": "大地叶",
      "entries": [
        {
          "value": "大地叶"
        },
        {
          "value": "たいち よう"
        }
      ]
    },
    {
      "characterId": 246,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 246,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 246,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 246,
      "tagId": 4,
      "value": "乔治五世级"
    },
    {
      "characterId": 246,
      "tagId": 5,
      "value": "04:50:00"
    },
    {
      "characterId": 246,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 246,
      "tagId": 7,
      "value": "川澄绫子",
      "entries": [
        {
          "value": "川澄绫子"
        },
        {
          "value": "かわすみ あやこ"
        }
      ]
    },
    {
      "characterId": 247,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 247,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 247,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 247,
      "tagId": 4,
      "value": "乔治五世级"
    },
    {
      "characterId": 247,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 247,
      "tagId": 6,
      "value": "2017-06-08"
    },
    {
      "characterId": 247,
      "tagId": 7,
      "value": "桥本千波",
      "entries": [
        {
          "value": "桥本千波"
        },
        {
          "value": "はしもと ちなみ"
        }
      ]
    },
    {
      "characterId": 248,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 248,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 248,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 248,
      "tagId": 4,
      "value": "乔治五世级"
    },
    {
      "characterId": 248,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 248,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 248,
      "tagId": 7,
      "value": "田中理惠",
      "entries": [
        {
          "value": "田中理惠"
        },
        {
          "value": "たなか りえ"
        }
      ]
    },
    {
      "characterId": 249,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 249,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 249,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 249,
      "tagId": 4,
      "value": "乔治五世级"
    },
    {
      "characterId": 249,
      "tagId": 5,
      "value": "04:50:00"
    },
    {
      "characterId": 249,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 249,
      "tagId": 7,
      "value": "市道真央",
      "entries": [
        {
          "value": "市道真央"
        }
      ]
    },
    {
      "characterId": 250,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 250,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 250,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 250,
      "tagId": 4,
      "value": "伊丽莎白女王级"
    },
    {
      "characterId": 250,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 250,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 250,
      "tagId": 7,
      "value": "西明日香",
      "entries": [
        {
          "value": "西明日香"
        }
      ]
    },
    {
      "characterId": 251,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 251,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 251,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 251,
      "tagId": 4,
      "value": "复仇级"
    },
    {
      "characterId": 251,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 251,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 251,
      "tagId": 7,
      "value": "早瀬莉花",
      "entries": [
        {
          "value": "早瀬莉花"
        }
      ]
    },
    {
      "characterId": 252,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 252,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 252,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 252,
      "tagId": 4,
      "value": "前卫级"
    },
    {
      "characterId": 252,
      "tagId": 5,
      "value": "05:20:00"
    },
    {
      "characterId": 252,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 252,
      "tagId": 7,
      "value": "中岛由贵",
      "entries": [
        {
          "value": "中岛由贵"
        },
        {
          "value": "なかしま ゆき"
        },
        {
          "value": "中島由貴"
        }
      ]
    },
    {
      "characterId": 253,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 253,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 253,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 253,
      "tagId": 4,
      "value": "复仇级"
    },
    {
      "characterId": 253,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 253,
      "tagId": 6,
      "value": "2023-02-23 湮烬尘墟"
    },
    {
      "characterId": 253,
      "tagId": 7,
      "value": "樱庭有纱",
      "entries": [
        {
          "value": "樱庭有纱"
        },
        {
          "value": "さくらば ありさ"
        },
        {
          "value": "櫻庭有紗"
        }
      ]
    },
    {
      "characterId": 254,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 254,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 254,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 254,
      "tagId": 4,
      "value": "狮级"
    },
    {
      "characterId": 254,
      "tagId": 5,
      "value": "06:20:00"
    },
    {
      "characterId": 254,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 254,
      "tagId": 7,
      "value": "大西沙织",
      "entries": [
        {
          "value": "大西沙织"
        },
        {
          "value": "おおにし さおり"
        },
        {
          "value": "大西沙織"
        }
      ]
    },
    {
      "characterId": 255,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 255,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 255,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 255,
      "tagId": 4,
      "value": "Hermes"
    },
    {
      "characterId": 255,
      "tagId": 5,
      "value": "02:10:00"
    },
    {
      "characterId": 255,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 255,
      "tagId": 7,
      "value": "稲村優奈",
      "entries": [
        {
          "value": "稲村優奈"
        },
        {
          "value": "汉字稻村优奈"
        }
      ]
    },
    {
      "characterId": 256,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 256,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 256,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 256,
      "tagId": 4,
      "value": "Argus"
    },
    {
      "characterId": 256,
      "tagId": 5,
      "value": "02:10:00"
    },
    {
      "characterId": 256,
      "tagId": 6,
      "value": "2023-02-23 湮烬尘墟"
    },
    {
      "characterId": 256,
      "tagId": 7,
      "value": "羊宫妃那",
      "entries": [
        {
          "value": "羊宫妃那"
        },
        {
          "value": "ようみや ひな"
        },
        {
          "value": "羊宮妃那"
        }
      ]
    },
    {
      "characterId": 257,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 257,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 257,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 257,
      "tagId": 4,
      "value": "Unicorn"
    },
    {
      "characterId": 257,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 257,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 257,
      "tagId": 7,
      "value": "加隈亚衣",
      "entries": [
        {
          "value": "加隈亚衣"
        },
        {
          "value": "かくま あい"
        }
      ]
    },
    {
      "characterId": 258,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 258,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 258,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 258,
      "tagId": 4,
      "value": "半人马级"
    },
    {
      "characterId": 258,
      "tagId": 5,
      "value": "03:00:00"
    },
    {
      "characterId": 258,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 258,
      "tagId": 7,
      "value": "内田彩",
      "entries": [
        {
          "value": "内田彩"
        }
      ]
    },
    {
      "characterId": 259,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 259,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 259,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 259,
      "tagId": 4,
      "value": "攻击者级"
    },
    {
      "characterId": 259,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 259,
      "tagId": 6,
      "value": "2019-01-24 复刻：凛冬王冠"
    },
    {
      "characterId": 259,
      "tagId": 7,
      "value": "田辺留依",
      "entries": [
        {
          "value": "田辺留依"
        }
      ]
    },
    {
      "characterId": 260,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 260,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 260,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 260,
      "tagId": 4,
      "value": "巨像级"
    },
    {
      "characterId": 260,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 260,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 260,
      "tagId": 7,
      "value": "大空直美",
      "entries": [
        {
          "value": "大空直美"
        }
      ]
    },
    {
      "characterId": 261,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 261,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 261,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 261,
      "tagId": 4,
      "value": "半人马级"
    },
    {
      "characterId": 261,
      "tagId": 5,
      "value": "03:00:00"
    },
    {
      "characterId": 261,
      "tagId": 6,
      "value": "2022-10-27"
    },
    {
      "characterId": 261,
      "tagId": 7,
      "value": "白城",
      "entries": [
        {
          "value": "白城"
        },
        {
          "value": "なお"
        }
      ]
    },
    {
      "characterId": 262,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 262,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 262,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 262,
      "tagId": 4,
      "value": "巨像级"
    },
    {
      "characterId": 262,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 262,
      "tagId": 6,
      "value": "2023-01-18"
    },
    {
      "characterId": 262,
      "tagId": 7,
      "value": "村上奈津实",
      "entries": [
        {
          "value": "村上奈津实"
        },
        {
          "value": "むらかみ なつみ"
        },
        {
          "value": "村上奈津実"
        }
      ]
    },
    {
      "characterId": 263,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 263,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 263,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 263,
      "tagId": 4,
      "value": "Eagle"
    },
    {
      "characterId": 263,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 263,
      "tagId": 6,
      "value": "2020-07-23 永夜幻光"
    },
    {
      "characterId": 263,
      "tagId": 7,
      "value": "水沢史绘",
      "entries": [
        {
          "value": "水沢史绘"
        }
      ]
    },
    {
      "characterId": 264,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 264,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 264,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 264,
      "tagId": 4,
      "value": "Ark Royal"
    },
    {
      "characterId": 264,
      "tagId": 5,
      "value": "04:00:00"
    },
    {
      "characterId": 264,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 264,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 265,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 265,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 265,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 265,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 265,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 265,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 265,
      "tagId": 7,
      "value": "雨宮天",
      "entries": [
        {
          "value": "雨宮天"
        },
        {
          "value": "あまみや そら"
        },
        {
          "value": "公式"
        }
      ]
    },
    {
      "characterId": 266,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 266,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 266,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 266,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 266,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 266,
      "tagId": 6,
      "value": "2018-02-26 凛冬王冠"
    },
    {
      "characterId": 266,
      "tagId": 7,
      "value": "中村绘里子",
      "entries": [
        {
          "value": "中村绘里子"
        },
        {
          "value": "なかむら えりこ"
        }
      ]
    },
    {
      "characterId": 267,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 267,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 267,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 267,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 267,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 267,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 267,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "くぎみや りえ"
        }
      ]
    },
    {
      "characterId": 268,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 268,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 268,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 268,
      "tagId": 4,
      "value": "勇敢级"
    },
    {
      "characterId": 268,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 268,
      "tagId": 6,
      "value": "2017-10-26"
    },
    {
      "characterId": 268,
      "tagId": 7,
      "value": "下屋则子",
      "entries": [
        {
          "value": "下屋则子"
        },
        {
          "value": "したや のりこ"
        }
      ]
    },
    {
      "characterId": 269,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 269,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 269,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 269,
      "tagId": 4,
      "value": "怨仇级"
    },
    {
      "characterId": 269,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 269,
      "tagId": 6,
      "value": "2023-02-23 湮烬尘墟"
    },
    {
      "characterId": 269,
      "tagId": 7,
      "value": "由加奈",
      "entries": [
        {
          "value": "由加奈"
        },
        {
          "value": "ゆかな"
        }
      ]
    },
    {
      "characterId": 270,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 270,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 270,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 270,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 270,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 270,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 270,
      "tagId": 7,
      "value": "雨宫天",
      "entries": [
        {
          "value": "雨宫天"
        }
      ]
    },
    {
      "characterId": 271,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 271,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 271,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 271,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 271,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 271,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 271,
      "tagId": 7,
      "value": "雨宫天",
      "entries": [
        {
          "value": "雨宫天"
        }
      ]
    },
    {
      "characterId": 272,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 272,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 272,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 272,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 272,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 272,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 272,
      "tagId": 7,
      "value": "伊藤美来",
      "entries": [
        {
          "value": "伊藤美来"
        },
        {
          "value": "いとう みく"
        }
      ]
    },
    {
      "characterId": 273,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 273,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 273,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 273,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 273,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 273,
      "tagId": 6,
      "value": "2023-04-27"
    },
    {
      "characterId": 273,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "くぎみや りえ"
        }
      ]
    },
    {
      "characterId": 274,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 274,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 274,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 274,
      "tagId": 4,
      "value": "光辉级"
    },
    {
      "characterId": 274,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 274,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 274,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "くぎみや りえ"
        }
      ]
    },
    {
      "characterId": 275,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 275,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 275,
      "tagId": 3,
      "value": "重炮"
    },
    {
      "characterId": 275,
      "tagId": 4,
      "value": "黑暗界级"
    },
    {
      "characterId": 275,
      "tagId": 5,
      "value": "01:00:00"
    },
    {
      "characterId": 275,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 275,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 276,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 276,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 276,
      "tagId": 3,
      "value": "重炮"
    },
    {
      "characterId": 276,
      "tagId": 4,
      "value": "黑暗界级"
    },
    {
      "characterId": 276,
      "tagId": 5,
      "value": "01:00:00"
    },
    {
      "characterId": 276,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 276,
      "tagId": 7,
      "value": "香月遥",
      "entries": [
        {
          "value": "香月遥"
        },
        {
          "value": "香月 はるか"
        }
      ]
    },
    {
      "characterId": 277,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 277,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 277,
      "tagId": 3,
      "value": "重炮"
    },
    {
      "characterId": 277,
      "tagId": 4,
      "value": "罗伯茨级"
    },
    {
      "characterId": 277,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 277,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 277,
      "tagId": 7,
      "value": "长妻树里",
      "entries": [
        {
          "value": "长妻树里"
        },
        {
          "value": "ながつま じゅり"
        }
      ]
    },
    {
      "characterId": 278,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 278,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 278,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 278,
      "tagId": 4,
      "value": "Neptune"
    },
    {
      "characterId": 278,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 278,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 278,
      "tagId": 7,
      "value": "井泽美香子",
      "entries": [
        {
          "value": "井泽美香子"
        },
        {
          "value": "いざわ みかこ"
        }
      ]
    },
    {
      "characterId": 279,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 279,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 279,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 279,
      "tagId": 4,
      "value": "乔治五世级"
    },
    {
      "characterId": 279,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 279,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 279,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 280,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 280,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 280,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 280,
      "tagId": 4,
      "value": "Cheshire"
    },
    {
      "characterId": 280,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 280,
      "tagId": 6,
      "value": "2020-07-09"
    },
    {
      "characterId": 280,
      "tagId": 7,
      "value": "石上静香",
      "entries": [
        {
          "value": "石上静香"
        },
        {
          "value": "いしがみ しずか"
        }
      ]
    },
    {
      "characterId": 281,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 281,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 281,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 281,
      "tagId": 4,
      "value": "丘吉尔型"
    },
    {
      "characterId": 281,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 281,
      "tagId": 6,
      "value": "2020-07-09"
    },
    {
      "characterId": 281,
      "tagId": 7,
      "value": "今井麻美",
      "entries": [
        {
          "value": "今井麻美"
        }
      ]
    },
    {
      "characterId": 282,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 282,
      "tagId": 2,
      "value": "皇家"
    },
    {
      "characterId": 282,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 282,
      "tagId": 4,
      "value": "爱丁堡级"
    },
    {
      "characterId": 282,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 282,
      "tagId": 6,
      "value": "2022-07-14 轻量化复刻：蝶海梦花"
    },
    {
      "characterId": 282,
      "tagId": 7,
      "value": "村上真夏",
      "entries": [
        {
          "value": "村上真夏"
        },
        {
          "value": "村上 まなつ"
        }
      ]
    },
    {
      "characterId": 283,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 283,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 283,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 283,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 283,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 283,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 283,
      "tagId": 7,
      "value": "市道真央",
      "entries": [
        {
          "value": "市道真央"
        }
      ]
    },
    {
      "characterId": 284,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 284,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 284,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 284,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 284,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 284,
      "tagId": 6,
      "value": "2021-06-24 复刻：浮樱影华"
    },
    {
      "characterId": 284,
      "tagId": 7,
      "value": "美波和嘉菜",
      "entries": [
        {
          "value": "美波和嘉菜"
        },
        {
          "value": "美波 わかな"
        },
        {
          "value": "简介"
        }
      ]
    },
    {
      "characterId": 285,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 285,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 285,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 285,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 285,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 285,
      "tagId": 6,
      "value": "2022-09-15 紫绛槿岚"
    },
    {
      "characterId": 285,
      "tagId": 7,
      "value": "和多田美咲",
      "entries": [
        {
          "value": "和多田美咲"
        },
        {
          "value": "わただ みさき"
        }
      ]
    },
    {
      "characterId": 286,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 286,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 286,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 286,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 286,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 286,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 286,
      "tagId": 7,
      "value": "大地叶",
      "entries": [
        {
          "value": "大地叶"
        },
        {
          "value": "たいち よう"
        }
      ]
    },
    {
      "characterId": 287,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 287,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 287,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 287,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 287,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 287,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 287,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 288,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 288,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 288,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 288,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 288,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 288,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 288,
      "tagId": 7,
      "value": "内田真礼",
      "entries": [
        {
          "value": "内田真礼"
        },
        {
          "value": "内田 真礼 うちだ まあや"
        }
      ]
    },
    {
      "characterId": 289,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 289,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 289,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 289,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 289,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 289,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 289,
      "tagId": 7,
      "value": "荒浪和沙",
      "entries": [
        {
          "value": "荒浪和沙"
        }
      ]
    },
    {
      "characterId": 290,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 290,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 290,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 290,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 290,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 290,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 290,
      "tagId": 7,
      "value": "加藤英美里",
      "entries": [
        {
          "value": "加藤英美里"
        }
      ]
    },
    {
      "characterId": 291,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 291,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 291,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 291,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 291,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 291,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 291,
      "tagId": 7,
      "value": "篠原成美",
      "entries": [
        {
          "value": "篠原成美"
        },
        {
          "value": "しのはら なるみ"
        }
      ]
    },
    {
      "characterId": 292,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 292,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 292,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 292,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 292,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 292,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 292,
      "tagId": 7,
      "value": "高森奈津美",
      "entries": [
        {
          "value": "高森奈津美"
        },
        {
          "value": "たかもり なつみ"
        }
      ]
    },
    {
      "characterId": 293,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 293,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 293,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 293,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 293,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 293,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 293,
      "tagId": 7,
      "value": "桑原由气",
      "entries": [
        {
          "value": "桑原由气"
        },
        {
          "value": "くわはら ゆうき"
        }
      ]
    },
    {
      "characterId": 294,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 294,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 294,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 294,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 294,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 294,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 294,
      "tagId": 7,
      "value": "优木加奈",
      "entries": [
        {
          "value": "优木加奈"
        },
        {
          "value": "優木 かな"
        },
        {
          "value": "ゆうき かな"
        }
      ]
    },
    {
      "characterId": 295,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 295,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 295,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 295,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 295,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 295,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 295,
      "tagId": 7,
      "value": "谷野悠里子",
      "entries": [
        {
          "value": "谷野悠里子"
        }
      ]
    },
    {
      "characterId": 296,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 296,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 296,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 296,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 296,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 296,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 296,
      "tagId": 7,
      "value": "筏井",
      "entries": [
        {
          "value": "筏井"
        },
        {
          "value": "かなえ"
        }
      ]
    },
    {
      "characterId": 297,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 297,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 297,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 297,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 297,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 297,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 297,
      "tagId": 7,
      "value": "加藤英美里",
      "entries": [
        {
          "value": "加藤英美里"
        }
      ]
    },
    {
      "characterId": 298,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 298,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 298,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 298,
      "tagId": 4,
      "value": "初春级"
    },
    {
      "characterId": 298,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 298,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 298,
      "tagId": 7,
      "value": "高野麻里佳",
      "entries": [
        {
          "value": "高野麻里佳"
        },
        {
          "value": "こうの まりか"
        }
      ]
    },
    {
      "characterId": 299,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 299,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 299,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 299,
      "tagId": 4,
      "value": "初春级"
    },
    {
      "characterId": 299,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 299,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 299,
      "tagId": 7,
      "value": "田中美海",
      "entries": [
        {
          "value": "田中美海"
        },
        {
          "value": "たなか みなみ"
        }
      ]
    },
    {
      "characterId": 300,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 300,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 300,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 300,
      "tagId": 4,
      "value": "初春级"
    },
    {
      "characterId": 300,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 300,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 300,
      "tagId": 7,
      "value": "岩佐夏芽",
      "entries": [
        {
          "value": "岩佐夏芽"
        }
      ]
    },
    {
      "characterId": 301,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 301,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 301,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 301,
      "tagId": 4,
      "value": "初春级"
    },
    {
      "characterId": 301,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 301,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 301,
      "tagId": 7,
      "value": "礒部花凛",
      "entries": [
        {
          "value": "礒部花凛"
        }
      ]
    },
    {
      "characterId": 302,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 302,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 302,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 302,
      "tagId": 4,
      "value": "初春级"
    },
    {
      "characterId": 302,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 302,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 302,
      "tagId": 7,
      "value": "朝日奈丸佳",
      "entries": [
        {
          "value": "朝日奈丸佳"
        },
        {
          "value": "あさひな まどか"
        }
      ]
    },
    {
      "characterId": 303,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 303,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 303,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 303,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 303,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 303,
      "tagId": 6,
      "value": "2017-12-01"
    },
    {
      "characterId": 303,
      "tagId": 7,
      "value": "大野柚布子",
      "entries": [
        {
          "value": "大野柚布子"
        },
        {
          "value": "おおの ゆうこ"
        }
      ]
    },
    {
      "characterId": 304,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 304,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 304,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 304,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 304,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 304,
      "tagId": 6,
      "value": "2017-12-01"
    },
    {
      "characterId": 304,
      "tagId": 7,
      "value": "大野柚布子",
      "entries": [
        {
          "value": "大野柚布子"
        },
        {
          "value": "おおの ゆうこ"
        }
      ]
    },
    {
      "characterId": 305,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 305,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 305,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 305,
      "tagId": 4,
      "value": "岛风级"
    },
    {
      "characterId": 305,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 305,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 305,
      "tagId": 7,
      "value": "早见沙织",
      "entries": [
        {
          "value": "早见沙织"
        },
        {
          "value": "はやみ さおり"
        },
        {
          "value": "早見沙織"
        }
      ]
    },
    {
      "characterId": 306,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 306,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 306,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 306,
      "tagId": 4,
      "value": "神风级"
    },
    {
      "characterId": 306,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 306,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 306,
      "tagId": 7,
      "value": "朝日奈丸佳",
      "entries": [
        {
          "value": "朝日奈丸佳"
        },
        {
          "value": "あさひな まどか"
        }
      ]
    },
    {
      "characterId": 307,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 307,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 307,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 307,
      "tagId": 4,
      "value": "神风级"
    },
    {
      "characterId": 307,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 307,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 307,
      "tagId": 7,
      "value": "朝日奈丸佳",
      "entries": [
        {
          "value": "朝日奈丸佳"
        },
        {
          "value": "あさひな まどか"
        }
      ]
    },
    {
      "characterId": 308,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 308,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 308,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 308,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 308,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 308,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 308,
      "tagId": 7,
      "value": "大久保瑠美",
      "entries": [
        {
          "value": "大久保瑠美"
        },
        {
          "value": "おおくぼ るみ"
        }
      ]
    },
    {
      "characterId": 309,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 309,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 309,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 309,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 309,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 309,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 309,
      "tagId": 7,
      "value": "大久保瑠美",
      "entries": [
        {
          "value": "大久保瑠美"
        }
      ]
    },
    {
      "characterId": 310,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 310,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 310,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 310,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 310,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 310,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 310,
      "tagId": 7,
      "value": "樱井真子",
      "entries": [
        {
          "value": "樱井真子"
        },
        {
          "value": "さくらい まこ"
        },
        {
          "value": "休止中"
        }
      ]
    },
    {
      "characterId": 311,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 311,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 311,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 311,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 311,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 311,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 311,
      "tagId": 7,
      "value": "樱井真子",
      "entries": [
        {
          "value": "樱井真子"
        },
        {
          "value": "さくらい まこ"
        },
        {
          "value": "休止中"
        }
      ]
    },
    {
      "characterId": 312,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 312,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 312,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 312,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 312,
      "tagId": 5,
      "value": "00:21:00"
    },
    {
      "characterId": 312,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 312,
      "tagId": 7,
      "value": "樱咲千依",
      "entries": [
        {
          "value": "樱咲千依"
        }
      ]
    },
    {
      "characterId": 313,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 313,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 313,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 313,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 313,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 313,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 313,
      "tagId": 7,
      "value": "樱咲千依",
      "entries": [
        {
          "value": "樱咲千依"
        }
      ]
    },
    {
      "characterId": 314,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 314,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 314,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 314,
      "tagId": 4,
      "value": "睦月级"
    },
    {
      "characterId": 314,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 314,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 314,
      "tagId": 7,
      "value": "樱井真子",
      "entries": [
        {
          "value": "樱井真子"
        },
        {
          "value": "さくらい まこ"
        },
        {
          "value": "休止中"
        }
      ]
    },
    {
      "characterId": 315,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 315,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 315,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 315,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 315,
      "tagId": 5,
      "value": "00:25:00"
    },
    {
      "characterId": 315,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 315,
      "tagId": 7,
      "value": "河井晴菜",
      "entries": [
        {
          "value": "河井晴菜"
        },
        {
          "value": "かわい はるな"
        }
      ]
    },
    {
      "characterId": 316,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 316,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 316,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 316,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 316,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 316,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 316,
      "tagId": 7,
      "value": "河井晴菜",
      "entries": [
        {
          "value": "河井晴菜"
        },
        {
          "value": "かわい はるな"
        }
      ]
    },
    {
      "characterId": 317,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 317,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 317,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 317,
      "tagId": 4,
      "value": "Shiratsuyu"
    },
    {
      "characterId": 317,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 317,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 317,
      "tagId": 7,
      "value": "井口裕香",
      "entries": [
        {
          "value": "井口裕香"
        },
        {
          "value": "いぐち ゆか"
        }
      ]
    },
    {
      "characterId": 318,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 318,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 318,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 318,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 318,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 318,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 318,
      "tagId": 7,
      "value": "岩仓梓",
      "entries": [
        {
          "value": "岩仓梓"
        },
        {
          "value": "岩倉 あずさ"
        }
      ]
    },
    {
      "characterId": 319,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 319,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 319,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 319,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 319,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 319,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 319,
      "tagId": 7,
      "value": "大久保瑠美",
      "entries": [
        {
          "value": "大久保瑠美"
        }
      ]
    },
    {
      "characterId": 320,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 320,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 320,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 320,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 320,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 320,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 320,
      "tagId": 7,
      "value": "持月玲依",
      "entries": [
        {
          "value": "持月玲依"
        }
      ]
    },
    {
      "characterId": 321,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 321,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 321,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 321,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 321,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 321,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 321,
      "tagId": 7,
      "value": "持月玲依",
      "entries": [
        {
          "value": "持月玲依"
        }
      ]
    },
    {
      "characterId": 322,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 322,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 322,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 322,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 322,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 322,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 322,
      "tagId": 7,
      "value": "田中美海",
      "entries": [
        {
          "value": "田中美海"
        },
        {
          "value": "たなか みなみ"
        }
      ]
    },
    {
      "characterId": 323,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 323,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 323,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 323,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 323,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 323,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 323,
      "tagId": 7,
      "value": "伊波杏树",
      "entries": [
        {
          "value": "伊波杏树"
        },
        {
          "value": "いなみ あんじゅ"
        },
        {
          "value": "伊波杏樹"
        }
      ]
    },
    {
      "characterId": 324,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 324,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 324,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 324,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 324,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 324,
      "tagId": 6,
      "value": "2017-12-01"
    },
    {
      "characterId": 324,
      "tagId": 7,
      "value": "日冈夏美",
      "entries": [
        {
          "value": "日冈夏美"
        },
        {
          "value": "ひおか なつみ"
        }
      ]
    },
    {
      "characterId": 325,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 325,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 325,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 325,
      "tagId": 4,
      "value": "阳炎级"
    },
    {
      "characterId": 325,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 325,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 325,
      "tagId": 7,
      "value": "日冈夏美",
      "entries": [
        {
          "value": "日冈夏美"
        },
        {
          "value": "ひおか なつみ"
        }
      ]
    },
    {
      "characterId": 326,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 326,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 326,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 326,
      "tagId": 4,
      "value": "朝潮级"
    },
    {
      "characterId": 326,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 326,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 326,
      "tagId": 7,
      "value": "巽悠衣子",
      "entries": [
        {
          "value": "巽悠衣子"
        }
      ]
    },
    {
      "characterId": 327,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 327,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 327,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 327,
      "tagId": 4,
      "value": "朝潮级"
    },
    {
      "characterId": 327,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 327,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 327,
      "tagId": 7,
      "value": "苍乃辉",
      "entries": [
        {
          "value": "苍乃辉"
        }
      ]
    },
    {
      "characterId": 328,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 328,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 328,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 328,
      "tagId": 4,
      "value": "朝潮级"
    },
    {
      "characterId": 328,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 328,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 328,
      "tagId": 7,
      "value": "阳向溜",
      "entries": [
        {
          "value": "阳向溜"
        }
      ]
    },
    {
      "characterId": 329,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 329,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 329,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 329,
      "tagId": 4,
      "value": "朝潮级"
    },
    {
      "characterId": 329,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 329,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 329,
      "tagId": 7,
      "value": "苍乃辉",
      "entries": [
        {
          "value": "苍乃辉"
        }
      ]
    },
    {
      "characterId": 330,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 330,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 330,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 330,
      "tagId": 4,
      "value": "Fubuki"
    },
    {
      "characterId": 330,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 330,
      "tagId": 6,
      "value": "2020-01-21"
    },
    {
      "characterId": 330,
      "tagId": 7,
      "value": "小松郁",
      "entries": [
        {
          "value": "小松郁"
        }
      ]
    },
    {
      "characterId": 331,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 331,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 331,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 331,
      "tagId": 4,
      "value": "神风级"
    },
    {
      "characterId": 331,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 331,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 331,
      "tagId": 7,
      "value": "朝日奈丸佳",
      "entries": [
        {
          "value": "朝日奈丸佳"
        },
        {
          "value": "あさひな まどか"
        }
      ]
    },
    {
      "characterId": 332,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 332,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 332,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 332,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 332,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 332,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 332,
      "tagId": 7,
      "value": "田辺留依",
      "entries": [
        {
          "value": "田辺留依"
        }
      ]
    },
    {
      "characterId": 333,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 333,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 333,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 333,
      "tagId": 4,
      "value": "朝潮级"
    },
    {
      "characterId": 333,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 333,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 333,
      "tagId": 7,
      "value": "武田真理子",
      "entries": [
        {
          "value": "武田真理子"
        },
        {
          "value": "たけだ まりこ"
        }
      ]
    },
    {
      "characterId": 334,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 334,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 334,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 334,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 334,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 334,
      "tagId": 6,
      "value": "2020-04-23 复刻：苍红的回响"
    },
    {
      "characterId": 334,
      "tagId": 7,
      "value": "黑木穗乃香",
      "entries": [
        {
          "value": "黑木穗乃香"
        }
      ]
    },
    {
      "characterId": 335,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 335,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 335,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 335,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 335,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 335,
      "tagId": 6,
      "value": "2020-04-23 复刻：苍红的回响"
    },
    {
      "characterId": 335,
      "tagId": 7,
      "value": "明日叶",
      "entries": [
        {
          "value": "明日叶"
        }
      ]
    },
    {
      "characterId": 336,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 336,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 336,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 336,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 336,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 336,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 336,
      "tagId": 7,
      "value": "小岩井小鸟",
      "entries": [
        {
          "value": "小岩井小鸟"
        }
      ]
    },
    {
      "characterId": 337,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 337,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 337,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 337,
      "tagId": 4,
      "value": "神风级"
    },
    {
      "characterId": 337,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 337,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 337,
      "tagId": 7,
      "value": "田中贵子",
      "entries": [
        {
          "value": "田中贵子"
        },
        {
          "value": "たなか たかこ"
        },
        {
          "value": "田中貴子"
        }
      ]
    },
    {
      "characterId": 338,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 338,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 338,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 338,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 338,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 338,
      "tagId": 6,
      "value": "2021-06-24 复刻：浮樱影华"
    },
    {
      "characterId": 338,
      "tagId": 7,
      "value": "伊藤彩沙",
      "entries": [
        {
          "value": "伊藤彩沙"
        },
        {
          "value": "いとう あやさ"
        }
      ]
    },
    {
      "characterId": 339,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 339,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 339,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 339,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 339,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 339,
      "tagId": 6,
      "value": "2022-09-15 紫绛槿岚"
    },
    {
      "characterId": 339,
      "tagId": 7,
      "value": "饭田光",
      "entries": [
        {
          "value": "饭田光"
        },
        {
          "value": "飯田 ヒカル"
        },
        {
          "value": "いいだ ヒカル"
        }
      ]
    },
    {
      "characterId": 340,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 340,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 340,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 340,
      "tagId": 4,
      "value": "秋月级"
    },
    {
      "characterId": 340,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 340,
      "tagId": 6,
      "value": "2023-09-14 须臾望月抄"
    },
    {
      "characterId": 340,
      "tagId": 7,
      "value": "高桥花林",
      "entries": [
        {
          "value": "高桥花林"
        },
        {
          "value": "たかはし かりん"
        },
        {
          "value": "高橋花林"
        }
      ]
    },
    {
      "characterId": 341,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 341,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 341,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 341,
      "tagId": 4,
      "value": "神风级"
    },
    {
      "characterId": 341,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 341,
      "tagId": 6,
      "value": "2023-09-14 须臾望月抄"
    },
    {
      "characterId": 341,
      "tagId": 7,
      "value": "野中深爱",
      "entries": [
        {
          "value": "野中深爱"
        },
        {
          "value": "のなか みお"
        },
        {
          "value": "野中深愛"
        }
      ]
    },
    {
      "characterId": 342,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 342,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 342,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 342,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 342,
      "tagId": 5,
      "value": "00:27:00"
    },
    {
      "characterId": 342,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 342,
      "tagId": 7,
      "value": "涩谷彩乃",
      "entries": [
        {
          "value": "涩谷彩乃"
        },
        {
          "value": "しぶや あやの"
        },
        {
          "value": "渋谷彩乃"
        }
      ]
    },
    {
      "characterId": 343,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 343,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 343,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 343,
      "tagId": 4,
      "value": "夕云级"
    },
    {
      "characterId": 343,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 343,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 343,
      "tagId": 7,
      "value": "新崎瑞季",
      "entries": [
        {
          "value": "新崎瑞季"
        },
        {
          "value": "にいざき みずき"
        }
      ]
    },
    {
      "characterId": 344,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 344,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 344,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 344,
      "tagId": 4,
      "value": "Yuubari"
    },
    {
      "characterId": 344,
      "tagId": 5,
      "value": "01:12:00"
    },
    {
      "characterId": 344,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 344,
      "tagId": 7,
      "value": "小仓唯",
      "entries": [
        {
          "value": "小仓唯"
        }
      ]
    },
    {
      "characterId": 345,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 345,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 345,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 345,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 345,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 345,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 345,
      "tagId": 7,
      "value": "鬼头明里",
      "entries": [
        {
          "value": "鬼头明里"
        },
        {
          "value": "きとう あかり"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 346,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 346,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 346,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 346,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 346,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 346,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 346,
      "tagId": 7,
      "value": "鬼头明里",
      "entries": [
        {
          "value": "鬼头明里"
        },
        {
          "value": "きとう あかり"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 347,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 347,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 347,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 347,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 347,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 347,
      "tagId": 6,
      "value": "2023-09-14 须臾望月抄"
    },
    {
      "characterId": 347,
      "tagId": 7,
      "value": "Machico",
      "entries": [
        {
          "value": "Machico"
        }
      ]
    },
    {
      "characterId": 348,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 348,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 348,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 348,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 348,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 348,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 348,
      "tagId": 7,
      "value": "野口琉璃子",
      "entries": [
        {
          "value": "野口琉璃子"
        },
        {
          "value": "のぐち るりこ"
        },
        {
          "value": "野口瑠璃子"
        }
      ]
    },
    {
      "characterId": 349,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 349,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 349,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 349,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 349,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 349,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 349,
      "tagId": 7,
      "value": "矢作沙友里",
      "entries": [
        {
          "value": "矢作沙友里"
        },
        {
          "value": "やはぎ さゆり"
        }
      ]
    },
    {
      "characterId": 350,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 350,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 350,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 350,
      "tagId": 4,
      "value": "长良级"
    },
    {
      "characterId": 350,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 350,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 350,
      "tagId": 7,
      "value": "鬼头明里",
      "entries": [
        {
          "value": "鬼头明里"
        },
        {
          "value": "きとう あかり"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 351,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 351,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 351,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 351,
      "tagId": 4,
      "value": "Mogami"
    },
    {
      "characterId": 351,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 351,
      "tagId": 6,
      "value": "2018-03-29 复刻：红染的参访者"
    },
    {
      "characterId": 351,
      "tagId": 7,
      "value": "伊藤静",
      "entries": [
        {
          "value": "伊藤静"
        }
      ]
    },
    {
      "characterId": 352,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 352,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 352,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 352,
      "tagId": 4,
      "value": "Mogami"
    },
    {
      "characterId": 352,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 352,
      "tagId": 6,
      "value": "2018-03-29 复刻：红染的参访者"
    },
    {
      "characterId": 352,
      "tagId": 7,
      "value": "八巻安奈",
      "entries": [
        {
          "value": "八巻安奈"
        }
      ]
    },
    {
      "characterId": 353,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 353,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 353,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 353,
      "tagId": 4,
      "value": "川内级"
    },
    {
      "characterId": 353,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 353,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 353,
      "tagId": 7,
      "value": "中条智世",
      "entries": [
        {
          "value": "中条智世"
        },
        {
          "value": "爱称 ともよん"
        },
        {
          "value": "注声优的昵称多数是根据其"
        }
      ]
    },
    {
      "characterId": 354,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 354,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 354,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 354,
      "tagId": 4,
      "value": "川内级"
    },
    {
      "characterId": 354,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 354,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 354,
      "tagId": 7,
      "value": "金元寿子",
      "entries": [
        {
          "value": "金元寿子"
        },
        {
          "value": "かねもと ひさこ"
        }
      ]
    },
    {
      "characterId": 355,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 355,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 355,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 355,
      "tagId": 4,
      "value": "川内级"
    },
    {
      "characterId": 355,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 355,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 355,
      "tagId": 7,
      "value": "藤村鼓乃美",
      "entries": [
        {
          "value": "藤村鼓乃美"
        }
      ]
    },
    {
      "characterId": 356,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 356,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 356,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 356,
      "tagId": 4,
      "value": "阿贺野级"
    },
    {
      "characterId": 356,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 356,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 356,
      "tagId": 7,
      "value": "白石晴香",
      "entries": [
        {
          "value": "白石晴香"
        },
        {
          "value": "しらいし はるか"
        }
      ]
    },
    {
      "characterId": 357,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 357,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 357,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 357,
      "tagId": 4,
      "value": "阿贺野级"
    },
    {
      "characterId": 357,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 357,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 357,
      "tagId": 7,
      "value": "伊波杏树",
      "entries": [
        {
          "value": "伊波杏树"
        },
        {
          "value": "いなみ あんじゅ"
        },
        {
          "value": "伊波杏樹"
        }
      ]
    },
    {
      "characterId": 358,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 358,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 358,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 358,
      "tagId": 4,
      "value": "阿贺野级"
    },
    {
      "characterId": 358,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 358,
      "tagId": 6,
      "value": "2022-09-15 紫绛槿岚"
    },
    {
      "characterId": 358,
      "tagId": 7,
      "value": "铃木爱奈",
      "entries": [
        {
          "value": "铃木爱奈"
        },
        {
          "value": "すずき あいな"
        },
        {
          "value": "鈴木愛奈"
        }
      ]
    },
    {
      "characterId": 359,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 359,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 359,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 359,
      "tagId": 4,
      "value": "阿贺野级"
    },
    {
      "characterId": 359,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 359,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 359,
      "tagId": 7,
      "value": "伊波杏树",
      "entries": [
        {
          "value": "伊波杏树"
        },
        {
          "value": "いなみ あんじゅ"
        },
        {
          "value": "伊波杏樹"
        }
      ]
    },
    {
      "characterId": 360,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 360,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 360,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 360,
      "tagId": 4,
      "value": "改阿贺野级"
    },
    {
      "characterId": 360,
      "tagId": 5,
      "value": "01:22:00"
    },
    {
      "characterId": 360,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 360,
      "tagId": 7,
      "value": "直田姬奈",
      "entries": [
        {
          "value": "直田姬奈"
        },
        {
          "value": "すぐた ひな"
        },
        {
          "value": "直田姫奈"
        }
      ]
    },
    {
      "characterId": 361,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 361,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 361,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 361,
      "tagId": 4,
      "value": "川内级"
    },
    {
      "characterId": 361,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 361,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 361,
      "tagId": 7,
      "value": "会泽纱弥",
      "entries": [
        {
          "value": "会泽纱弥"
        },
        {
          "value": "会沢紗弥"
        }
      ]
    },
    {
      "characterId": 362,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 362,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 362,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 362,
      "tagId": 4,
      "value": "川内级"
    },
    {
      "characterId": 362,
      "tagId": 5,
      "value": "01:22:00"
    },
    {
      "characterId": 362,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 362,
      "tagId": 7,
      "value": "后藤彩佐",
      "entries": [
        {
          "value": "后藤彩佐"
        },
        {
          "value": "ごとう あやさ"
        },
        {
          "value": "後藤彩佐"
        }
      ]
    },
    {
      "characterId": 363,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 363,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 363,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 363,
      "tagId": 4,
      "value": "古鹰级"
    },
    {
      "characterId": 363,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 363,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 363,
      "tagId": 7,
      "value": "影山灯",
      "entries": [
        {
          "value": "影山灯"
        }
      ]
    },
    {
      "characterId": 364,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 364,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 364,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 364,
      "tagId": 4,
      "value": "古鹰级"
    },
    {
      "characterId": 364,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 364,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 364,
      "tagId": 7,
      "value": "影山灯",
      "entries": [
        {
          "value": "影山灯"
        }
      ]
    },
    {
      "characterId": 365,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 365,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 365,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 365,
      "tagId": 4,
      "value": "青叶级"
    },
    {
      "characterId": 365,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 365,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 365,
      "tagId": 7,
      "value": "影山灯",
      "entries": [
        {
          "value": "影山灯"
        }
      ]
    },
    {
      "characterId": 366,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 366,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 366,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 366,
      "tagId": 4,
      "value": "青叶级"
    },
    {
      "characterId": 366,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 366,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 366,
      "tagId": 7,
      "value": "影山灯",
      "entries": [
        {
          "value": "影山灯"
        }
      ]
    },
    {
      "characterId": 367,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 367,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 367,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 367,
      "tagId": 4,
      "value": "利根级"
    },
    {
      "characterId": 367,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 367,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 367,
      "tagId": 7,
      "value": "芹泽优",
      "entries": [
        {
          "value": "芹泽优"
        },
        {
          "value": "せりざわ ゆう"
        },
        {
          "value": "芹澤優"
        }
      ]
    },
    {
      "characterId": 368,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 368,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 368,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 368,
      "tagId": 4,
      "value": "妙高级"
    },
    {
      "characterId": 368,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 368,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 368,
      "tagId": 7,
      "value": "铃木绘理",
      "entries": [
        {
          "value": "铃木绘理"
        },
        {
          "value": "すずき えり"
        }
      ]
    },
    {
      "characterId": 369,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 369,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 369,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 369,
      "tagId": 4,
      "value": "妙高级"
    },
    {
      "characterId": 369,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 369,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 369,
      "tagId": 7,
      "value": "铃木绘理",
      "entries": [
        {
          "value": "铃木绘理"
        },
        {
          "value": "すずき えり"
        }
      ]
    },
    {
      "characterId": 370,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 370,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 370,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 370,
      "tagId": 4,
      "value": "妙高级"
    },
    {
      "characterId": 370,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 370,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 370,
      "tagId": 7,
      "value": "斋藤千和",
      "entries": [
        {
          "value": "斋藤千和"
        },
        {
          "value": "さいとう ちわ"
        },
        {
          "value": "斎藤千和"
        }
      ]
    },
    {
      "characterId": 371,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 371,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 371,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 371,
      "tagId": 4,
      "value": "妙高级"
    },
    {
      "characterId": 371,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 371,
      "tagId": 6,
      "value": "2022-09-15 紫绛槿岚"
    },
    {
      "characterId": 371,
      "tagId": 7,
      "value": "菱川花菜",
      "entries": [
        {
          "value": "菱川花菜"
        },
        {
          "value": "ひしかわ はな"
        }
      ]
    },
    {
      "characterId": 372,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 372,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 372,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 372,
      "tagId": 4,
      "value": "高雄级"
    },
    {
      "characterId": 372,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 372,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 372,
      "tagId": 7,
      "value": "加隈亚衣",
      "entries": [
        {
          "value": "加隈亚衣"
        },
        {
          "value": "かくま あい"
        }
      ]
    },
    {
      "characterId": 373,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 373,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 373,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 373,
      "tagId": 4,
      "value": "高雄级"
    },
    {
      "characterId": 373,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 373,
      "tagId": 6,
      "value": "2017-06-08"
    },
    {
      "characterId": 373,
      "tagId": 7,
      "value": "大木咲绘子",
      "entries": [
        {
          "value": "大木咲绘子"
        },
        {
          "value": "おおき さえこ"
        },
        {
          "value": "大木咲絵子"
        }
      ]
    },
    {
      "characterId": 374,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 374,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 374,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 374,
      "tagId": 4,
      "value": "高雄级"
    },
    {
      "characterId": 374,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 374,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 374,
      "tagId": 7,
      "value": "大西沙织",
      "entries": [
        {
          "value": "大西沙织"
        },
        {
          "value": "おおにし さおり"
        },
        {
          "value": "大西沙織"
        }
      ]
    },
    {
      "characterId": 375,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 375,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 375,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 375,
      "tagId": 4,
      "value": "高雄级"
    },
    {
      "characterId": 375,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 375,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 375,
      "tagId": 7,
      "value": "大桥彩香",
      "entries": [
        {
          "value": "大桥彩香"
        }
      ]
    },
    {
      "characterId": 376,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 376,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 376,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 376,
      "tagId": 4,
      "value": "Mogami"
    },
    {
      "characterId": 376,
      "tagId": 5,
      "value": "01:48:00"
    },
    {
      "characterId": 376,
      "tagId": 6,
      "value": "2019-03-28 复刻：墨染的钢铁之花"
    },
    {
      "characterId": 376,
      "tagId": 7,
      "value": "和气杏未",
      "entries": [
        {
          "value": "和气杏未"
        }
      ]
    },
    {
      "characterId": 377,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 377,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 377,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 377,
      "tagId": 4,
      "value": "Mogami"
    },
    {
      "characterId": 377,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 377,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 377,
      "tagId": 7,
      "value": "和气杏未",
      "entries": [
        {
          "value": "和气杏未"
        }
      ]
    },
    {
      "characterId": 378,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 378,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 378,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 378,
      "tagId": 4,
      "value": "Unzen"
    },
    {
      "characterId": 378,
      "tagId": 5,
      "value": "02:11:00"
    },
    {
      "characterId": 378,
      "tagId": 6,
      "value": "2023-09-14 须臾望月抄"
    },
    {
      "characterId": 378,
      "tagId": 7,
      "value": "三森铃子",
      "entries": [
        {
          "value": "三森铃子"
        },
        {
          "value": "三森 すずこ"
        },
        {
          "value": "みもり すずこ"
        }
      ]
    },
    {
      "characterId": 379,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 379,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 379,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 379,
      "tagId": 4,
      "value": "伊吹级"
    },
    {
      "characterId": 379,
      "tagId": 5,
      "value": "02:10:00"
    },
    {
      "characterId": 379,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 379,
      "tagId": 7,
      "value": "高垣彩阳",
      "entries": [
        {
          "value": "高垣彩阳"
        },
        {
          "value": "たかがき あやひ"
        },
        {
          "value": "高垣彩陽"
        }
      ]
    },
    {
      "characterId": 380,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 380,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 380,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 380,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 380,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 380,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 380,
      "tagId": 7,
      "value": "斋藤千和",
      "entries": [
        {
          "value": "斋藤千和"
        },
        {
          "value": "さいとう ちわ"
        },
        {
          "value": "斎藤千和"
        }
      ]
    },
    {
      "characterId": 381,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 381,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 381,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 381,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 381,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 381,
      "tagId": 6,
      "value": "2017-12-01"
    },
    {
      "characterId": 381,
      "tagId": 7,
      "value": "喜多村英梨",
      "entries": [
        {
          "value": "喜多村英梨"
        },
        {
          "value": "きたむら えり"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 382,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 382,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 382,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 382,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 382,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 382,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 382,
      "tagId": 7,
      "value": "原田彩枫",
      "entries": [
        {
          "value": "原田彩枫"
        },
        {
          "value": "はらた さやか"
        },
        {
          "value": "原田彩楓"
        }
      ]
    },
    {
      "characterId": 383,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 383,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 383,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 383,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 383,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 383,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 383,
      "tagId": 7,
      "value": "松浦知惠",
      "entries": [
        {
          "value": "松浦知惠"
        }
      ]
    },
    {
      "characterId": 384,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 384,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 384,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 384,
      "tagId": 4,
      "value": "天城级"
    },
    {
      "characterId": 384,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 384,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 384,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 385,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 385,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 385,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 385,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 385,
      "tagId": 5,
      "value": "04:05:00"
    },
    {
      "characterId": 385,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 385,
      "tagId": 7,
      "value": "喜多村英梨",
      "entries": [
        {
          "value": "喜多村英梨"
        },
        {
          "value": "きたむら えり"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 386,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 386,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 386,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 386,
      "tagId": 4,
      "value": "天城级"
    },
    {
      "characterId": 386,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 386,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 386,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 387,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 387,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 387,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 387,
      "tagId": 4,
      "value": "金刚级"
    },
    {
      "characterId": 387,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 387,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 387,
      "tagId": 7,
      "value": "斋藤千和",
      "entries": [
        {
          "value": "斋藤千和"
        },
        {
          "value": "さいとう ちわ"
        },
        {
          "value": "斎藤千和"
        }
      ]
    },
    {
      "characterId": 388,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 388,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 388,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 388,
      "tagId": 4,
      "value": "扶桑级"
    },
    {
      "characterId": 388,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 388,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 388,
      "tagId": 7,
      "value": "小清水亚美",
      "entries": [
        {
          "value": "小清水亚美"
        }
      ]
    },
    {
      "characterId": 389,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 389,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 389,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 389,
      "tagId": 4,
      "value": "扶桑级"
    },
    {
      "characterId": 389,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 389,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 389,
      "tagId": 7,
      "value": "小清水亚美",
      "entries": [
        {
          "value": "小清水亚美"
        }
      ]
    },
    {
      "characterId": 390,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 390,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 390,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 390,
      "tagId": 4,
      "value": "伊势级"
    },
    {
      "characterId": 390,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 390,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 390,
      "tagId": 7,
      "value": "田村睦心",
      "entries": [
        {
          "value": "田村睦心"
        },
        {
          "value": "たむら むつみ"
        }
      ]
    },
    {
      "characterId": 391,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 391,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 391,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 391,
      "tagId": 4,
      "value": "伊势级"
    },
    {
      "characterId": 391,
      "tagId": 5,
      "value": "04:25:00"
    },
    {
      "characterId": 391,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 391,
      "tagId": 7,
      "value": "渡边明乃",
      "entries": [
        {
          "value": "渡边明乃"
        },
        {
          "value": "わたなべ あけの"
        }
      ]
    },
    {
      "characterId": 392,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 392,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 392,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 392,
      "tagId": 4,
      "value": "长门型"
    },
    {
      "characterId": 392,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 392,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 392,
      "tagId": 7,
      "value": "久野美咲",
      "entries": [
        {
          "value": "久野美咲"
        },
        {
          "value": "くの みさき"
        },
        {
          "value": "大泽"
        }
      ]
    },
    {
      "characterId": 393,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 393,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 393,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 393,
      "tagId": 4,
      "value": "长门型"
    },
    {
      "characterId": 393,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 393,
      "tagId": 6,
      "value": "2018-06-07 墨染的钢铁之花"
    },
    {
      "characterId": 393,
      "tagId": 7,
      "value": "黑泽朋世",
      "entries": [
        {
          "value": "黑泽朋世"
        },
        {
          "value": "くろさわ ともよ"
        }
      ]
    },
    {
      "characterId": 394,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 394,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 394,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 394,
      "tagId": 4,
      "value": "加贺级"
    },
    {
      "characterId": 394,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 394,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 394,
      "tagId": 7,
      "value": "井口裕香",
      "entries": [
        {
          "value": "井口裕香"
        },
        {
          "value": "いぐち ゆか"
        },
        {
          "value": "茅野爱衣"
        }
      ]
    },
    {
      "characterId": 395,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 395,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 395,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 395,
      "tagId": 4,
      "value": "加贺级"
    },
    {
      "characterId": 395,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 395,
      "tagId": 6,
      "value": "2020-04-23 复刻：苍红的回响"
    },
    {
      "characterId": 395,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 396,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 396,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 396,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 396,
      "tagId": 4,
      "value": "大和级"
    },
    {
      "characterId": 396,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 396,
      "tagId": 6,
      "value": "2022-09-15 紫绛槿岚"
    },
    {
      "characterId": 396,
      "tagId": 7,
      "value": "りん",
      "entries": [
        {
          "value": "りん"
        }
      ]
    },
    {
      "characterId": 397,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 397,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 397,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 397,
      "tagId": 4,
      "value": "敷岛级"
    },
    {
      "characterId": 397,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 397,
      "tagId": 6,
      "value": "2017-12-01"
    },
    {
      "characterId": 397,
      "tagId": 7,
      "value": "大原沙耶香",
      "entries": [
        {
          "value": "大原沙耶香"
        },
        {
          "value": "おおはら さやか"
        }
      ]
    },
    {
      "characterId": 398,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 398,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 398,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 398,
      "tagId": 4,
      "value": "纪伊级"
    },
    {
      "characterId": 398,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 398,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 398,
      "tagId": 7,
      "value": "金子彩花",
      "entries": [
        {
          "value": "金子彩花"
        }
      ]
    },
    {
      "characterId": 399,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 399,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 399,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 399,
      "tagId": 4,
      "value": "纪伊级"
    },
    {
      "characterId": 399,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 399,
      "tagId": 6,
      "value": "2023-09-14 须臾望月抄"
    },
    {
      "characterId": 399,
      "tagId": 7,
      "value": "若山诗音",
      "entries": [
        {
          "value": "若山诗音"
        },
        {
          "value": "わかやま しおん"
        },
        {
          "value": "若山詩音"
        }
      ]
    },
    {
      "characterId": 400,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 400,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 400,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 400,
      "tagId": 4,
      "value": "纪伊级"
    },
    {
      "characterId": 400,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 400,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 400,
      "tagId": 7,
      "value": "遠藤綾",
      "entries": [
        {
          "value": "遠藤綾"
        },
        {
          "value": "えんどう あや"
        }
      ]
    },
    {
      "characterId": 401,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 401,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 401,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 401,
      "tagId": 4,
      "value": "纪伊级"
    },
    {
      "characterId": 401,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 401,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 401,
      "tagId": 7,
      "value": "千菅春香",
      "entries": [
        {
          "value": "千菅春香"
        },
        {
          "value": "ちすが はるか"
        }
      ]
    },
    {
      "characterId": 402,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 402,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 402,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 402,
      "tagId": 4,
      "value": "飞鹰级"
    },
    {
      "characterId": 402,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 402,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 402,
      "tagId": 7,
      "value": "吉田圣子",
      "entries": [
        {
          "value": "吉田圣子"
        }
      ]
    },
    {
      "characterId": 403,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 403,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 403,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 403,
      "tagId": 4,
      "value": "飞鹰级"
    },
    {
      "characterId": 403,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 403,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 403,
      "tagId": 7,
      "value": "吉田圣子",
      "entries": [
        {
          "value": "吉田圣子"
        }
      ]
    },
    {
      "characterId": 404,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 404,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 404,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 404,
      "tagId": 4,
      "value": "Houshou"
    },
    {
      "characterId": 404,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 404,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 404,
      "tagId": 7,
      "value": "高桥智秋",
      "entries": [
        {
          "value": "高桥智秋"
        },
        {
          "value": "たかはし ちあき"
        }
      ]
    },
    {
      "characterId": 405,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 405,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 405,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 405,
      "tagId": 4,
      "value": "千岁级"
    },
    {
      "characterId": 405,
      "tagId": 5,
      "value": "02:22:00"
    },
    {
      "characterId": 405,
      "tagId": 6,
      "value": "2024-08-29 埋葬于彼岸之花"
    },
    {
      "characterId": 405,
      "tagId": 7,
      "value": "月城日花",
      "entries": [
        {
          "value": "月城日花"
        },
        {
          "value": "つきしろ ひか"
        }
      ]
    },
    {
      "characterId": 406,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 406,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 406,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 406,
      "tagId": 4,
      "value": "祥凤级"
    },
    {
      "characterId": 406,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 406,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 406,
      "tagId": 7,
      "value": "河野洋美",
      "entries": [
        {
          "value": "河野洋美"
        },
        {
          "value": "こうの ひろみ"
        }
      ]
    },
    {
      "characterId": 407,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 407,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 407,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 407,
      "tagId": 4,
      "value": "Ryuujou"
    },
    {
      "characterId": 407,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 407,
      "tagId": 6,
      "value": "2018-12-27 苍红的回响"
    },
    {
      "characterId": 407,
      "tagId": 7,
      "value": "洲崎绫",
      "entries": [
        {
          "value": "洲崎绫"
        }
      ]
    },
    {
      "characterId": 408,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 408,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 408,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 408,
      "tagId": 4,
      "value": "千岁级"
    },
    {
      "characterId": 408,
      "tagId": 5,
      "value": "02:22:00"
    },
    {
      "characterId": 408,
      "tagId": 6,
      "value": "2019-12-26 浮樱影华"
    },
    {
      "characterId": 408,
      "tagId": 7,
      "value": "长妻树里",
      "entries": [
        {
          "value": "长妻树里"
        },
        {
          "value": "ながつま じゅり"
        }
      ]
    },
    {
      "characterId": 409,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 409,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 409,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 409,
      "tagId": 4,
      "value": "千岁级"
    },
    {
      "characterId": 409,
      "tagId": 5,
      "value": "02:15:00"
    },
    {
      "characterId": 409,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 409,
      "tagId": 7,
      "value": "关根瞳",
      "entries": [
        {
          "value": "关根瞳"
        }
      ]
    },
    {
      "characterId": 410,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 410,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 410,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 410,
      "tagId": 4,
      "value": "千岁级"
    },
    {
      "characterId": 410,
      "tagId": 5,
      "value": "02:15:00"
    },
    {
      "characterId": 410,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 410,
      "tagId": 7,
      "value": "关根瞳",
      "entries": [
        {
          "value": "关根瞳"
        }
      ]
    },
    {
      "characterId": 411,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 411,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 411,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 411,
      "tagId": 4,
      "value": "Akagi"
    },
    {
      "characterId": 411,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 411,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 411,
      "tagId": 7,
      "value": "中原麻衣",
      "entries": [
        {
          "value": "中原麻衣"
        }
      ]
    },
    {
      "characterId": 412,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 412,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 412,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 412,
      "tagId": 4,
      "value": "Kaga"
    },
    {
      "characterId": 412,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 412,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 412,
      "tagId": 7,
      "value": "井口裕香",
      "entries": [
        {
          "value": "井口裕香"
        },
        {
          "value": "いぐち ゆか"
        },
        {
          "value": "茅野爱衣"
        }
      ]
    },
    {
      "characterId": 413,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 413,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 413,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 413,
      "tagId": 4,
      "value": "Souryuu"
    },
    {
      "characterId": 413,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 413,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 413,
      "tagId": 7,
      "value": "御手洗果林",
      "entries": [
        {
          "value": "御手洗果林"
        }
      ]
    },
    {
      "characterId": 414,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 414,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 414,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 414,
      "tagId": 4,
      "value": "Hiryuu"
    },
    {
      "characterId": 414,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 414,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 414,
      "tagId": 7,
      "value": "石上静香",
      "entries": [
        {
          "value": "石上静香"
        },
        {
          "value": "いしがみ しずか"
        }
      ]
    },
    {
      "characterId": 415,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 415,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 415,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 415,
      "tagId": 4,
      "value": "翔鹤级"
    },
    {
      "characterId": 415,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 415,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 415,
      "tagId": 7,
      "value": "種田梨沙",
      "entries": [
        {
          "value": "種田梨沙"
        },
        {
          "value": "たねだ りさ"
        },
        {
          "value": "年月日解禁并正式开通"
        }
      ]
    },
    {
      "characterId": 416,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 416,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 416,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 416,
      "tagId": 4,
      "value": "翔鹤级"
    },
    {
      "characterId": 416,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 416,
      "tagId": 6,
      "value": "2017-09-28 红染的参访者"
    },
    {
      "characterId": 416,
      "tagId": 7,
      "value": "種田梨沙",
      "entries": [
        {
          "value": "種田梨沙"
        },
        {
          "value": "たねだ りさ"
        }
      ]
    },
    {
      "characterId": 417,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 417,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 417,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 417,
      "tagId": 4,
      "value": "Taihou"
    },
    {
      "characterId": 417,
      "tagId": 5,
      "value": "04:45:00"
    },
    {
      "characterId": 417,
      "tagId": 6,
      "value": "2018-09-14"
    },
    {
      "characterId": 417,
      "tagId": 7,
      "value": "悠木碧",
      "entries": [
        {
          "value": "悠木碧"
        },
        {
          "value": "ゆうき あおい"
        },
        {
          "value": "八武"
        }
      ]
    },
    {
      "characterId": 418,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 418,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 418,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 418,
      "tagId": 4,
      "value": "大和级"
    },
    {
      "characterId": 418,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 418,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 418,
      "tagId": 7,
      "value": "能登麻美子",
      "entries": [
        {
          "value": "能登麻美子"
        },
        {
          "value": "のと まみこ"
        }
      ]
    },
    {
      "characterId": 419,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 419,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 419,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 419,
      "tagId": 4,
      "value": "Akagi"
    },
    {
      "characterId": 419,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 419,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 419,
      "tagId": 7,
      "value": "中原麻衣",
      "entries": [
        {
          "value": "中原麻衣"
        }
      ]
    },
    {
      "characterId": 420,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 420,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 420,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 420,
      "tagId": 4,
      "value": "Akagi"
    },
    {
      "characterId": 420,
      "tagId": 5,
      "value": "04:40:00"
    },
    {
      "characterId": 420,
      "tagId": 6,
      "value": "2019-10-31"
    },
    {
      "characterId": 420,
      "tagId": 7,
      "value": "中原麻衣",
      "entries": [
        {
          "value": "中原麻衣"
        }
      ]
    },
    {
      "characterId": 421,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 421,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 421,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 421,
      "tagId": 4,
      "value": "Taihou"
    },
    {
      "characterId": 421,
      "tagId": 5,
      "value": "04:45:00"
    },
    {
      "characterId": 421,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 421,
      "tagId": 7,
      "value": "悠木碧",
      "entries": [
        {
          "value": "悠木碧"
        },
        {
          "value": "ゆうき あおい"
        },
        {
          "value": "八武"
        }
      ]
    },
    {
      "characterId": 422,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 422,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 422,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 422,
      "tagId": 4,
      "value": "云龙级"
    },
    {
      "characterId": 422,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 422,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 422,
      "tagId": 7,
      "value": "户田惠",
      "entries": [
        {
          "value": "户田惠"
        },
        {
          "value": "戸田 めぐみ"
        },
        {
          "value": "とだ めぐみ"
        }
      ]
    },
    {
      "characterId": 423,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 423,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 423,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 423,
      "tagId": 4,
      "value": "Taihou"
    },
    {
      "characterId": 423,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 423,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 423,
      "tagId": 7,
      "value": "悠木碧",
      "entries": [
        {
          "value": "悠木碧"
        },
        {
          "value": "ゆうき あおい"
        },
        {
          "value": "八武"
        }
      ]
    },
    {
      "characterId": 424,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 424,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 424,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 424,
      "tagId": 4,
      "value": "大和级"
    },
    {
      "characterId": 424,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 424,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 424,
      "tagId": 7,
      "value": "能登麻美子",
      "entries": [
        {
          "value": "能登麻美子"
        },
        {
          "value": "のと まみこ"
        }
      ]
    },
    {
      "characterId": 425,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 425,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 425,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 425,
      "tagId": 4,
      "value": "天城级"
    },
    {
      "characterId": 425,
      "tagId": 5,
      "value": "04:40:00"
    },
    {
      "characterId": 425,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 425,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 426,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 426,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 426,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 426,
      "tagId": 4,
      "value": "Taihou"
    },
    {
      "characterId": 426,
      "tagId": 5,
      "value": "05:00:00"
    },
    {
      "characterId": 426,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 426,
      "tagId": 7,
      "value": "井泽诗织",
      "entries": [
        {
          "value": "井泽诗织"
        },
        {
          "value": "いざわ しおり"
        },
        {
          "value": "井澤詩織"
        }
      ]
    },
    {
      "characterId": 427,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 427,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 427,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 427,
      "tagId": 4,
      "value": "巡潜乙型"
    },
    {
      "characterId": 427,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 427,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 427,
      "tagId": 7,
      "value": "小仓唯",
      "entries": [
        {
          "value": "小仓唯"
        }
      ]
    },
    {
      "characterId": 428,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 428,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 428,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 428,
      "tagId": 4,
      "value": "巡潜乙型"
    },
    {
      "characterId": 428,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 428,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 428,
      "tagId": 7,
      "value": "石原夏织",
      "entries": [
        {
          "value": "石原夏织"
        }
      ]
    },
    {
      "characterId": 429,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 429,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 429,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 429,
      "tagId": 4,
      "value": "巡潜乙型"
    },
    {
      "characterId": 429,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 429,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 429,
      "tagId": 7,
      "value": "楠木灯",
      "entries": [
        {
          "value": "楠木灯"
        }
      ]
    },
    {
      "characterId": 430,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 430,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 430,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 430,
      "tagId": 4,
      "value": "巡潜乙型"
    },
    {
      "characterId": 430,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 430,
      "tagId": 6,
      "value": "2019-07-11"
    },
    {
      "characterId": 430,
      "tagId": 7,
      "value": "石原夏织",
      "entries": [
        {
          "value": "石原夏织"
        }
      ]
    },
    {
      "characterId": 431,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 431,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 431,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 431,
      "tagId": 4,
      "value": "巡潜乙型"
    },
    {
      "characterId": 431,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 431,
      "tagId": 6,
      "value": "2019-07-11"
    },
    {
      "characterId": 431,
      "tagId": 7,
      "value": "向山直美",
      "entries": [
        {
          "value": "向山直美"
        },
        {
          "value": "むかいやま なおみ"
        }
      ]
    },
    {
      "characterId": 432,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 432,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 432,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 432,
      "tagId": 4,
      "value": "型a型"
    },
    {
      "characterId": 432,
      "tagId": 5,
      "value": "00:30:00"
    },
    {
      "characterId": 432,
      "tagId": 6,
      "value": "2019-07-11"
    },
    {
      "characterId": 432,
      "tagId": 7,
      "value": "丹下樱",
      "entries": [
        {
          "value": "丹下樱"
        }
      ]
    },
    {
      "characterId": 433,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 433,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 433,
      "tagId": 3,
      "value": "维修"
    },
    {
      "characterId": 433,
      "tagId": 4,
      "value": "Akashi"
    },
    {
      "characterId": 433,
      "tagId": 5,
      "value": "01:35:00"
    },
    {
      "characterId": 433,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 433,
      "tagId": 7,
      "value": "上坂堇",
      "entries": [
        {
          "value": "上坂堇"
        }
      ]
    },
    {
      "characterId": 434,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 434,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 434,
      "tagId": 3,
      "value": "潜母"
    },
    {
      "characterId": 434,
      "tagId": 4,
      "value": "巡潜甲型"
    },
    {
      "characterId": 434,
      "tagId": 5,
      "value": "00:34:00"
    },
    {
      "characterId": 434,
      "tagId": 6,
      "value": "2019-03-28 复刻：墨染的钢铁之花"
    },
    {
      "characterId": 434,
      "tagId": 7,
      "value": "柳原可奈子",
      "entries": [
        {
          "value": "柳原可奈子"
        }
      ]
    },
    {
      "characterId": 435,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 435,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 435,
      "tagId": 3,
      "value": "潜母"
    },
    {
      "characterId": 435,
      "tagId": 4,
      "value": "潜特型"
    },
    {
      "characterId": 435,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 435,
      "tagId": 6,
      "value": "2025-09-12 起舞于天原之上"
    },
    {
      "characterId": 435,
      "tagId": 7,
      "value": "小泽实里",
      "entries": [
        {
          "value": "小泽实里"
        },
        {
          "value": "おざわ みのり"
        },
        {
          "value": "小澤"
        }
      ]
    },
    {
      "characterId": 436,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 436,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 436,
      "tagId": 3,
      "value": "运输"
    },
    {
      "characterId": 436,
      "tagId": 4,
      "value": "Kashino"
    },
    {
      "characterId": 436,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 436,
      "tagId": 6,
      "value": "2020-09-17 蝶海梦花"
    },
    {
      "characterId": 436,
      "tagId": 7,
      "value": "近藤玲奈",
      "entries": [
        {
          "value": "近藤玲奈"
        }
      ]
    },
    {
      "characterId": 437,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 437,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 437,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 437,
      "tagId": 4,
      "value": "伊吹级"
    },
    {
      "characterId": 437,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 437,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 437,
      "tagId": 7,
      "value": "福圆美里",
      "entries": [
        {
          "value": "福圆美里"
        },
        {
          "value": "ふくえん みさと"
        }
      ]
    },
    {
      "characterId": 438,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 438,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 438,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 438,
      "tagId": 4,
      "value": "大和级"
    },
    {
      "characterId": 438,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 438,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 438,
      "tagId": 7,
      "value": "上田丽奈",
      "entries": [
        {
          "value": "上田丽奈"
        },
        {
          "value": "うえだ れいな"
        }
      ]
    },
    {
      "characterId": 439,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 439,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 439,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 439,
      "tagId": 4,
      "value": "超秋月级"
    },
    {
      "characterId": 439,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 439,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 439,
      "tagId": 7,
      "value": "丹下樱",
      "entries": [
        {
          "value": "丹下樱"
        }
      ]
    },
    {
      "characterId": 440,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 440,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 440,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 440,
      "tagId": 4,
      "value": "B-65超甲型"
    },
    {
      "characterId": 440,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 440,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 440,
      "tagId": 7,
      "value": "安野希世乃",
      "entries": [
        {
          "value": "安野希世乃"
        },
        {
          "value": "やすの きよの"
        },
        {
          "value": "公式"
        }
      ]
    },
    {
      "characterId": 441,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 441,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 441,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 441,
      "tagId": 4,
      "value": "SG-15超级"
    },
    {
      "characterId": 441,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 441,
      "tagId": 6,
      "value": "2021-07-08"
    },
    {
      "characterId": 441,
      "tagId": 7,
      "value": "佐藤聪美",
      "entries": [
        {
          "value": "佐藤聪美"
        },
        {
          "value": "さとう さとみ"
        },
        {
          "value": "佐藤聡美"
        }
      ]
    },
    {
      "characterId": 442,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 442,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 442,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 442,
      "tagId": 4,
      "value": "150mm主炮防空型"
    },
    {
      "characterId": 442,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 442,
      "tagId": 6,
      "value": "2023-07-13"
    },
    {
      "characterId": 442,
      "tagId": 7,
      "value": "泽田姬",
      "entries": [
        {
          "value": "泽田姬"
        },
        {
          "value": "さわだ ひめ"
        },
        {
          "value": "澤田姫"
        }
      ]
    },
    {
      "characterId": 443,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 443,
      "tagId": 2,
      "value": "重樱"
    },
    {
      "characterId": 443,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 443,
      "tagId": 4,
      "value": "Daisen"
    },
    {
      "characterId": 443,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 443,
      "tagId": 6,
      "value": "2024-07-18 轻量化复刻：泠誓光庭"
    },
    {
      "characterId": 443,
      "tagId": 7,
      "value": "立花日菜",
      "entries": [
        {
          "value": "立花日菜"
        },
        {
          "value": "たちばな ひな"
        }
      ]
    },
    {
      "characterId": 444,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 444,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 444,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 444,
      "tagId": 4,
      "value": "1934型"
    },
    {
      "characterId": 444,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 444,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 444,
      "tagId": 7,
      "value": "高森奈津美",
      "entries": [
        {
          "value": "高森奈津美"
        },
        {
          "value": "たかもり なつみ"
        }
      ]
    },
    {
      "characterId": 445,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 445,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 445,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 445,
      "tagId": 4,
      "value": "1934型"
    },
    {
      "characterId": 445,
      "tagId": 5,
      "value": "00:29:00"
    },
    {
      "characterId": 445,
      "tagId": 6,
      "value": "2019-03-07"
    },
    {
      "characterId": 445,
      "tagId": 7,
      "value": "河濑茉希",
      "entries": [
        {
          "value": "河濑茉希"
        }
      ]
    },
    {
      "characterId": 446,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 446,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 446,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 446,
      "tagId": 4,
      "value": "1934A型"
    },
    {
      "characterId": 446,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 446,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 446,
      "tagId": 7,
      "value": "菅野真衣",
      "entries": [
        {
          "value": "菅野真衣"
        },
        {
          "value": "かんの まい"
        }
      ]
    },
    {
      "characterId": 447,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 447,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 447,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 447,
      "tagId": 4,
      "value": "1934A型"
    },
    {
      "characterId": 447,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 447,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 447,
      "tagId": 7,
      "value": "寺泽百花",
      "entries": [
        {
          "value": "寺泽百花"
        },
        {
          "value": "てらさわ ももか"
        },
        {
          "value": "寺澤百花"
        }
      ]
    },
    {
      "characterId": 448,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 448,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 448,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 448,
      "tagId": 4,
      "value": "1934A型"
    },
    {
      "characterId": 448,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 448,
      "tagId": 6,
      "value": "2025-06-26 迷彩都市的寻踪者"
    },
    {
      "characterId": 448,
      "tagId": 7,
      "value": "引坂理绘",
      "entries": [
        {
          "value": "引坂理绘"
        },
        {
          "value": "ひきさか りえ"
        },
        {
          "value": "引坂理絵"
        }
      ]
    },
    {
      "characterId": 449,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 449,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 449,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 449,
      "tagId": 4,
      "value": "1934A型"
    },
    {
      "characterId": 449,
      "tagId": 5,
      "value": "00:28:00"
    },
    {
      "characterId": 449,
      "tagId": 6,
      "value": "2022-08-18"
    },
    {
      "characterId": 449,
      "tagId": 7,
      "value": "相良茉优",
      "entries": [
        {
          "value": "相良茉优"
        },
        {
          "value": "さがら まゆ"
        },
        {
          "value": "相良茉優"
        }
      ]
    },
    {
      "characterId": 450,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 450,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 450,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 450,
      "tagId": 4,
      "value": "1936型"
    },
    {
      "characterId": 450,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 450,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 450,
      "tagId": 7,
      "value": "高田忧希",
      "entries": [
        {
          "value": "高田忧希"
        }
      ]
    },
    {
      "characterId": 451,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 451,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 451,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 451,
      "tagId": 4,
      "value": "1936型"
    },
    {
      "characterId": 451,
      "tagId": 5,
      "value": "00:31:00"
    },
    {
      "characterId": 451,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 451,
      "tagId": 7,
      "value": "日高里菜",
      "entries": [
        {
          "value": "日高里菜"
        },
        {
          "value": "ひだか りな"
        }
      ]
    },
    {
      "characterId": 452,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 452,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 452,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 452,
      "tagId": 4,
      "value": "1936型"
    },
    {
      "characterId": 452,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 452,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 452,
      "tagId": 7,
      "value": "日高里菜",
      "entries": [
        {
          "value": "日高里菜"
        },
        {
          "value": "ひだか りな"
        }
      ]
    },
    {
      "characterId": 453,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 453,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 453,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 453,
      "tagId": 4,
      "value": "1936型"
    },
    {
      "characterId": 453,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 453,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 453,
      "tagId": 7,
      "value": "日高里菜",
      "entries": [
        {
          "value": "日高里菜"
        },
        {
          "value": "ひだか りな"
        }
      ]
    },
    {
      "characterId": 454,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 454,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 454,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 454,
      "tagId": 4,
      "value": "1936A型"
    },
    {
      "characterId": 454,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 454,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 454,
      "tagId": 7,
      "value": "阿部里果",
      "entries": [
        {
          "value": "阿部里果"
        },
        {
          "value": "あべ りか"
        }
      ]
    },
    {
      "characterId": 455,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 455,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 455,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 455,
      "tagId": 4,
      "value": "1936A型"
    },
    {
      "characterId": 455,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 455,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 455,
      "tagId": 7,
      "value": "首藤志奈",
      "entries": [
        {
          "value": "首藤志奈"
        }
      ]
    },
    {
      "characterId": 456,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 456,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 456,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 456,
      "tagId": 4,
      "value": "1936A型"
    },
    {
      "characterId": 456,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 456,
      "tagId": 6,
      "value": "2018-06-28 复刻：异色格"
    },
    {
      "characterId": 456,
      "tagId": 7,
      "value": "阿部里果",
      "entries": [
        {
          "value": "阿部里果"
        },
        {
          "value": "あべ りか"
        }
      ]
    },
    {
      "characterId": 457,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 457,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 457,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 457,
      "tagId": 4,
      "value": "1936A型"
    },
    {
      "characterId": 457,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 457,
      "tagId": 6,
      "value": "2020-08-20 复刻：铁血、音符&誓言"
    },
    {
      "characterId": 457,
      "tagId": 7,
      "value": "天野聪美",
      "entries": [
        {
          "value": "天野聪美"
        }
      ]
    },
    {
      "characterId": 458,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 458,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 458,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 458,
      "tagId": 4,
      "value": "1936A型"
    },
    {
      "characterId": 458,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 458,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 458,
      "tagId": 7,
      "value": "木村千咲",
      "entries": [
        {
          "value": "木村千咲"
        }
      ]
    },
    {
      "characterId": 459,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 459,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 459,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 459,
      "tagId": 4,
      "value": "1936B型"
    },
    {
      "characterId": 459,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 459,
      "tagId": 6,
      "value": "2018-06-28 复刻：异色格"
    },
    {
      "characterId": 459,
      "tagId": 7,
      "value": "大桥彩香",
      "entries": [
        {
          "value": "大桥彩香"
        }
      ]
    },
    {
      "characterId": 460,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 460,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 460,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 460,
      "tagId": 4,
      "value": "1936B型"
    },
    {
      "characterId": 460,
      "tagId": 5,
      "value": "00:35:00"
    },
    {
      "characterId": 460,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 460,
      "tagId": 7,
      "value": "原紗友里",
      "entries": [
        {
          "value": "原紗友里"
        },
        {
          "value": "はら さゆり"
        },
        {
          "value": "目前在更新"
        }
      ]
    },
    {
      "characterId": 461,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 461,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 461,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 461,
      "tagId": 4,
      "value": "1936B型"
    },
    {
      "characterId": 461,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 461,
      "tagId": 6,
      "value": "2024-06-27 欢迎来到童心学院"
    },
    {
      "characterId": 461,
      "tagId": 7,
      "value": "筱原侑",
      "entries": [
        {
          "value": "筱原侑"
        },
        {
          "value": "ささは ゆう"
        },
        {
          "value": "篠原侑"
        }
      ]
    },
    {
      "characterId": 462,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 462,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 462,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 462,
      "tagId": 4,
      "value": "1936C型"
    },
    {
      "characterId": 462,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 462,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 462,
      "tagId": 7,
      "value": "茅原实里",
      "entries": [
        {
          "value": "茅原实里"
        }
      ]
    },
    {
      "characterId": 463,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 463,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 463,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 463,
      "tagId": 4,
      "value": "1936C型"
    },
    {
      "characterId": 463,
      "tagId": 5,
      "value": "00:39:00"
    },
    {
      "characterId": 463,
      "tagId": 6,
      "value": "2024-06-27 欢迎来到童心学院"
    },
    {
      "characterId": 463,
      "tagId": 7,
      "value": "西田望見",
      "entries": [
        {
          "value": "西田望見"
        },
        {
          "value": "にしだ のぞみ"
        },
        {
          "value": "西田望见"
        }
      ]
    },
    {
      "characterId": 464,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 464,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 464,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 464,
      "tagId": 4,
      "value": "1944型"
    },
    {
      "characterId": 464,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 464,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 464,
      "tagId": 7,
      "value": "新井里美",
      "entries": [
        {
          "value": "新井里美"
        },
        {
          "value": "あらい さとみ"
        }
      ]
    },
    {
      "characterId": 465,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 465,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 465,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 465,
      "tagId": 4,
      "value": "1937J型"
    },
    {
      "characterId": 465,
      "tagId": 5,
      "value": "00:40:00"
    },
    {
      "characterId": 465,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 465,
      "tagId": 7,
      "value": "春野杏",
      "entries": [
        {
          "value": "春野杏"
        },
        {
          "value": "はるの あんず"
        }
      ]
    },
    {
      "characterId": 466,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 466,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 466,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 466,
      "tagId": 4,
      "value": "柯尼斯堡级"
    },
    {
      "characterId": 466,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 466,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 466,
      "tagId": 7,
      "value": "小野凉子",
      "entries": [
        {
          "value": "小野凉子"
        },
        {
          "value": "おの りょうこ"
        }
      ]
    },
    {
      "characterId": 467,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 467,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 467,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 467,
      "tagId": 4,
      "value": "柯尼斯堡级"
    },
    {
      "characterId": 467,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 467,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 467,
      "tagId": 7,
      "value": "小野凉子",
      "entries": [
        {
          "value": "小野凉子"
        },
        {
          "value": "おの りょうこ"
        }
      ]
    },
    {
      "characterId": 468,
      "tagId": 1,
      "value": "Normal"
    },
    {
      "characterId": 468,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 468,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 468,
      "tagId": 4,
      "value": "柯尼斯堡级"
    },
    {
      "characterId": 468,
      "tagId": 5,
      "value": "01:10:00"
    },
    {
      "characterId": 468,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 468,
      "tagId": 7,
      "value": "小野凉子",
      "entries": [
        {
          "value": "小野凉子"
        },
        {
          "value": "おの りょうこ"
        }
      ]
    },
    {
      "characterId": 469,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 469,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 469,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 469,
      "tagId": 4,
      "value": "莱比锡级"
    },
    {
      "characterId": 469,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 469,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 469,
      "tagId": 7,
      "value": "小野凉子",
      "entries": [
        {
          "value": "小野凉子"
        },
        {
          "value": "おの りょうこ"
        }
      ]
    },
    {
      "characterId": 470,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 470,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 470,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 470,
      "tagId": 4,
      "value": "莱比锡级"
    },
    {
      "characterId": 470,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 470,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 470,
      "tagId": 7,
      "value": "远野光",
      "entries": [
        {
          "value": "远野光"
        },
        {
          "value": "遠野 ひかる"
        }
      ]
    },
    {
      "characterId": 471,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 471,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 471,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 471,
      "tagId": 4,
      "value": "M级"
    },
    {
      "characterId": 471,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 471,
      "tagId": 6,
      "value": "2021-12-29 逆转彩虹之塔"
    },
    {
      "characterId": 471,
      "tagId": 7,
      "value": "松田飒水",
      "entries": [
        {
          "value": "松田飒水"
        },
        {
          "value": "まつだ さつみ"
        },
        {
          "value": "松田颯水"
        }
      ]
    },
    {
      "characterId": 472,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 472,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 472,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 472,
      "tagId": 4,
      "value": "德累斯顿级"
    },
    {
      "characterId": 472,
      "tagId": 5,
      "value": "01:19:00"
    },
    {
      "characterId": 472,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 472,
      "tagId": 7,
      "value": "井上穗乃花",
      "entries": [
        {
          "value": "井上穗乃花"
        },
        {
          "value": "井上 ほの"
        },
        {
          "value": "井上花"
        }
      ]
    },
    {
      "characterId": 473,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 473,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 473,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 473,
      "tagId": 4,
      "value": "皮劳级"
    },
    {
      "characterId": 473,
      "tagId": 5,
      "value": "01:17:00"
    },
    {
      "characterId": 473,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 473,
      "tagId": 7,
      "value": "三上枝织",
      "entries": [
        {
          "value": "三上枝织"
        },
        {
          "value": "みかみ しおり"
        },
        {
          "value": "三上枝織"
        }
      ]
    },
    {
      "characterId": 474,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 474,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 474,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 474,
      "tagId": 4,
      "value": "M级"
    },
    {
      "characterId": 474,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 474,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 474,
      "tagId": 7,
      "value": "氷青",
      "entries": [
        {
          "value": "氷青"
        },
        {
          "value": "ひょうせい"
        }
      ]
    },
    {
      "characterId": 475,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 475,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 475,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 475,
      "tagId": 4,
      "value": "M级"
    },
    {
      "characterId": 475,
      "tagId": 5,
      "value": "01:20:00"
    },
    {
      "characterId": 475,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 475,
      "tagId": 7,
      "value": "大木咲绘子",
      "entries": [
        {
          "value": "大木咲绘子"
        },
        {
          "value": "おおき さえこ"
        },
        {
          "value": "大木咲絵子"
        }
      ]
    },
    {
      "characterId": 476,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 476,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 476,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 476,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 476,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 476,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 476,
      "tagId": 7,
      "value": "山冈百合",
      "entries": [
        {
          "value": "山冈百合"
        },
        {
          "value": "山岡 ゆり"
        },
        {
          "value": "やまおか ゆり"
        }
      ]
    },
    {
      "characterId": 477,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 477,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 477,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 477,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 477,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 477,
      "tagId": 6,
      "value": "2022-08-18"
    },
    {
      "characterId": 477,
      "tagId": 7,
      "value": "白石晴香",
      "entries": [
        {
          "value": "白石晴香"
        },
        {
          "value": "しらいし はるか"
        }
      ]
    },
    {
      "characterId": 478,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 478,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 478,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 478,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 478,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 478,
      "tagId": 6,
      "value": "2017-05-25"
    },
    {
      "characterId": 478,
      "tagId": 7,
      "value": "佐仓绫音",
      "entries": [
        {
          "value": "佐仓绫音"
        },
        {
          "value": "さくら あやね"
        },
        {
          "value": "佐倉綾音"
        }
      ]
    },
    {
      "characterId": 479,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 479,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 479,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 479,
      "tagId": 4,
      "value": "德意志级"
    },
    {
      "characterId": 479,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 479,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 479,
      "tagId": 7,
      "value": "上坂",
      "entries": [
        {
          "value": "上坂"
        },
        {
          "value": "すみれ"
        }
      ]
    },
    {
      "characterId": 480,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 480,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 480,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 480,
      "tagId": 4,
      "value": "德意志级"
    },
    {
      "characterId": 480,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 480,
      "tagId": 6,
      "value": "2018-01-19"
    },
    {
      "characterId": 480,
      "tagId": 7,
      "value": "渊上舞",
      "entries": [
        {
          "value": "渊上舞"
        },
        {
          "value": "汉语汉字写法"
        },
        {
          "value": "渕上舞"
        }
      ]
    },
    {
      "characterId": 481,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 481,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 481,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 481,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 481,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 481,
      "tagId": 6,
      "value": "2019-10-31"
    },
    {
      "characterId": 481,
      "tagId": 7,
      "value": "山冈百合",
      "entries": [
        {
          "value": "山冈百合"
        }
      ]
    },
    {
      "characterId": 482,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 482,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 482,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 482,
      "tagId": 4,
      "value": "Roon"
    },
    {
      "characterId": 482,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 482,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 482,
      "tagId": 7,
      "value": "佐藤聪美",
      "entries": [
        {
          "value": "佐藤聪美"
        }
      ]
    },
    {
      "characterId": 483,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 483,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 483,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 483,
      "tagId": 4,
      "value": "P级"
    },
    {
      "characterId": 483,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 483,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 483,
      "tagId": 7,
      "value": "新田",
      "entries": [
        {
          "value": "新田"
        },
        {
          "value": "ひより"
        }
      ]
    },
    {
      "characterId": 484,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 484,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 484,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 484,
      "tagId": 4,
      "value": "P级"
    },
    {
      "characterId": 484,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 484,
      "tagId": 6,
      "value": "2021-12-29 逆转彩虹之塔"
    },
    {
      "characterId": 484,
      "tagId": 7,
      "value": "原奈津子",
      "entries": [
        {
          "value": "原奈津子"
        },
        {
          "value": "はら なつこ"
        }
      ]
    },
    {
      "characterId": 485,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 485,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 485,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 485,
      "tagId": 4,
      "value": "罗恩级"
    },
    {
      "characterId": 485,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 485,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 485,
      "tagId": 7,
      "value": "关根明良",
      "entries": [
        {
          "value": "关根明良"
        },
        {
          "value": "せきね あきら"
        },
        {
          "value": "関根明良"
        }
      ]
    },
    {
      "characterId": 486,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 486,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 486,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 486,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 486,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 486,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 486,
      "tagId": 7,
      "value": "佐仓绫音",
      "entries": [
        {
          "value": "佐仓绫音"
        },
        {
          "value": "さくら あやね"
        },
        {
          "value": "佐倉綾音"
        }
      ]
    },
    {
      "characterId": 487,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 487,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 487,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 487,
      "tagId": 4,
      "value": "德意志级"
    },
    {
      "characterId": 487,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 487,
      "tagId": 6,
      "value": "2022-10-13"
    },
    {
      "characterId": 487,
      "tagId": 7,
      "value": "渕上舞",
      "entries": [
        {
          "value": "渕上舞"
        }
      ]
    },
    {
      "characterId": 488,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 488,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 488,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 488,
      "tagId": 4,
      "value": "P级"
    },
    {
      "characterId": 488,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 488,
      "tagId": 6,
      "value": "2024-03-28"
    },
    {
      "characterId": 488,
      "tagId": 7,
      "value": "安野希世乃",
      "entries": [
        {
          "value": "安野希世乃"
        },
        {
          "value": "やすの きよの"
        },
        {
          "value": "公式"
        }
      ]
    },
    {
      "characterId": 489,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 489,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 489,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 489,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 489,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 489,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 489,
      "tagId": 7,
      "value": "佐仓绫音",
      "entries": [
        {
          "value": "佐仓绫音"
        },
        {
          "value": "さくら あやね"
        },
        {
          "value": "佐倉綾音"
        }
      ]
    },
    {
      "characterId": 490,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 490,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 490,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 490,
      "tagId": 4,
      "value": "O级"
    },
    {
      "characterId": 490,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 490,
      "tagId": 6,
      "value": "2025-05-29"
    },
    {
      "characterId": 490,
      "tagId": 7,
      "value": "佐仓绫音",
      "entries": [
        {
          "value": "佐仓绫音"
        },
        {
          "value": "さくら あやね"
        },
        {
          "value": "佐倉綾音"
        }
      ]
    },
    {
      "characterId": 491,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 491,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 491,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 491,
      "tagId": 4,
      "value": "沙恩霍斯特级"
    },
    {
      "characterId": 491,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 491,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 491,
      "tagId": 7,
      "value": "福原绫香",
      "entries": [
        {
          "value": "福原绫香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 492,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 492,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 492,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 492,
      "tagId": 4,
      "value": "沙恩霍斯特级"
    },
    {
      "characterId": 492,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 492,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 492,
      "tagId": 7,
      "value": "篠田南",
      "entries": [
        {
          "value": "篠田南"
        },
        {
          "value": "しのだ みなみ"
        }
      ]
    },
    {
      "characterId": 493,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 493,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 493,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 493,
      "tagId": 4,
      "value": "Seydlitz"
    },
    {
      "characterId": 493,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 493,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 493,
      "tagId": 7,
      "value": "津田美波",
      "entries": [
        {
          "value": "津田美波"
        },
        {
          "value": "つだ みなみ"
        }
      ]
    },
    {
      "characterId": 494,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 494,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 494,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 494,
      "tagId": 4,
      "value": "德弗林格尔级"
    },
    {
      "characterId": 494,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 494,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 494,
      "tagId": 7,
      "value": "田中有纪",
      "entries": [
        {
          "value": "田中有纪"
        },
        {
          "value": "たなか ゆき"
        },
        {
          "value": "田中有紀"
        }
      ]
    },
    {
      "characterId": 495,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 495,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 495,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 495,
      "tagId": 4,
      "value": "O级"
    },
    {
      "characterId": 495,
      "tagId": 5,
      "value": "05:05:00"
    },
    {
      "characterId": 495,
      "tagId": 6,
      "value": "2022-08-18"
    },
    {
      "characterId": 495,
      "tagId": 7,
      "value": "愛美",
      "entries": [
        {
          "value": "愛美"
        },
        {
          "value": "あいみ"
        },
        {
          "value": "简介"
        }
      ]
    },
    {
      "characterId": 496,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 496,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 496,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 496,
      "tagId": 4,
      "value": "O级"
    },
    {
      "characterId": 496,
      "tagId": 5,
      "value": "05:05:00"
    },
    {
      "characterId": 496,
      "tagId": 6,
      "value": "2024-06-27 欢迎来到童心学院"
    },
    {
      "characterId": 496,
      "tagId": 7,
      "value": "鹫见友美",
      "entries": [
        {
          "value": "鹫见友美"
        },
        {
          "value": "すみ ともみ ジェナ"
        },
        {
          "value": "鷲見友美"
        }
      ]
    },
    {
      "characterId": 497,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 497,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 497,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 497,
      "tagId": 4,
      "value": "Admiral Zenker"
    },
    {
      "characterId": 497,
      "tagId": 5,
      "value": "04:55:00"
    },
    {
      "characterId": 497,
      "tagId": 6,
      "value": "2025-06-26 迷彩都市的寻踪者"
    },
    {
      "characterId": 497,
      "tagId": 7,
      "value": "广濑有纪",
      "entries": [
        {
          "value": "广濑有纪"
        },
        {
          "value": "広瀬 ゆうき"
        },
        {
          "value": "ひろせ ゆうき"
        }
      ]
    },
    {
      "characterId": 498,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 498,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 498,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 498,
      "tagId": 4,
      "value": "俾斯麦级"
    },
    {
      "characterId": 498,
      "tagId": 5,
      "value": "06:00:00"
    },
    {
      "characterId": 498,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 498,
      "tagId": 7,
      "value": "福原绫香",
      "entries": [
        {
          "value": "福原绫香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 499,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 499,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 499,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 499,
      "tagId": 4,
      "value": "俾斯麦级"
    },
    {
      "characterId": 499,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 499,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 499,
      "tagId": 7,
      "value": "田中敦子",
      "entries": [
        {
          "value": "田中敦子"
        },
        {
          "value": "たなか あつこ"
        }
      ]
    },
    {
      "characterId": 500,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 500,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 500,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 500,
      "tagId": 4,
      "value": "H-39型"
    },
    {
      "characterId": 500,
      "tagId": 5,
      "value": "06:00:00"
    },
    {
      "characterId": 500,
      "tagId": 6,
      "value": "2021-12-29 逆转彩虹之塔"
    },
    {
      "characterId": 500,
      "tagId": 7,
      "value": "山村响",
      "entries": [
        {
          "value": "山村响"
        },
        {
          "value": "やまむら ひびく"
        },
        {
          "value": "山村響"
        }
      ]
    },
    {
      "characterId": 501,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 501,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 501,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 501,
      "tagId": 4,
      "value": "赫尔戈兰级"
    },
    {
      "characterId": 501,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 501,
      "tagId": 6,
      "value": "2022-04-28 虹彩的终幕曲"
    },
    {
      "characterId": 501,
      "tagId": 7,
      "value": "杉山里穗",
      "entries": [
        {
          "value": "杉山里穗"
        },
        {
          "value": "すぎやま りほ"
        },
        {
          "value": "杉山里穂"
        }
      ]
    },
    {
      "characterId": 502,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 502,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 502,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 502,
      "tagId": 4,
      "value": "俾斯麦级"
    },
    {
      "characterId": 502,
      "tagId": 5,
      "value": "06:00:00"
    },
    {
      "characterId": 502,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 502,
      "tagId": 7,
      "value": "福原綾香",
      "entries": [
        {
          "value": "福原綾香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 503,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 503,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 503,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 503,
      "tagId": 4,
      "value": "H-39型"
    },
    {
      "characterId": 503,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 503,
      "tagId": 6,
      "value": "2024-05-30"
    },
    {
      "characterId": 503,
      "tagId": 7,
      "value": "生天目仁美",
      "entries": [
        {
          "value": "生天目仁美"
        },
        {
          "value": "なばため ひとみ"
        }
      ]
    },
    {
      "characterId": 504,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 504,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 504,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 504,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 504,
      "tagId": 5,
      "value": "02:22:00"
    },
    {
      "characterId": 504,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 504,
      "tagId": 7,
      "value": "西本",
      "entries": [
        {
          "value": "西本"
        },
        {
          "value": "りみ"
        }
      ]
    },
    {
      "characterId": 505,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 505,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 505,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 505,
      "tagId": 4,
      "value": "亚德级"
    },
    {
      "characterId": 505,
      "tagId": 5,
      "value": "02:20:00"
    },
    {
      "characterId": 505,
      "tagId": 6,
      "value": "2021-12-29 逆转彩虹之塔"
    },
    {
      "characterId": 505,
      "tagId": 7,
      "value": "稗田宁宁",
      "entries": [
        {
          "value": "稗田宁宁"
        },
        {
          "value": "ひえだ ねね"
        },
        {
          "value": "稗田寧"
        }
      ]
    },
    {
      "characterId": 506,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 506,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 506,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 506,
      "tagId": 4,
      "value": "亚德级"
    },
    {
      "characterId": 506,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 506,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 506,
      "tagId": 7,
      "value": "愛原",
      "entries": [
        {
          "value": "愛原"
        },
        {
          "value": "あいはら ありさ"
        }
      ]
    },
    {
      "characterId": 507,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 507,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 507,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 507,
      "tagId": 4,
      "value": "齐柏林伯爵级"
    },
    {
      "characterId": 507,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 507,
      "tagId": 6,
      "value": "2017-08-02 异色格"
    },
    {
      "characterId": 507,
      "tagId": 7,
      "value": "内山夕实",
      "entries": [
        {
          "value": "内山夕实"
        },
        {
          "value": "うちやま ゆみ"
        },
        {
          "value": "内山夕実"
        }
      ]
    },
    {
      "characterId": 508,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 508,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 508,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 508,
      "tagId": 4,
      "value": "齐柏林伯爵级"
    },
    {
      "characterId": 508,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 508,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 508,
      "tagId": 7,
      "value": "茅野爱衣",
      "entries": [
        {
          "value": "茅野爱衣"
        },
        {
          "value": "かやの あい"
        },
        {
          "value": "简介"
        }
      ]
    },
    {
      "characterId": 509,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 509,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 509,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 509,
      "tagId": 4,
      "value": "齐柏林伯爵级"
    },
    {
      "characterId": 509,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 509,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 509,
      "tagId": 7,
      "value": "原由实",
      "entries": [
        {
          "value": "原由实"
        },
        {
          "value": "はら ゆみ"
        },
        {
          "value": "原由実"
        }
      ]
    },
    {
      "characterId": 510,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 510,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 510,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 510,
      "tagId": 4,
      "value": "Fritz Rumey"
    },
    {
      "characterId": 510,
      "tagId": 5,
      "value": "04:40:20"
    },
    {
      "characterId": 510,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 510,
      "tagId": 7,
      "value": "恒松步",
      "entries": [
        {
          "value": "恒松步"
        },
        {
          "value": "恒松 あゆみ"
        },
        {
          "value": "つねまつ あゆみ"
        }
      ]
    },
    {
      "characterId": 511,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 511,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 511,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 511,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 511,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 511,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 511,
      "tagId": 7,
      "value": "山崎遥",
      "entries": [
        {
          "value": "山崎遥"
        }
      ]
    },
    {
      "characterId": 512,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 512,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 512,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 512,
      "tagId": 4,
      "value": "VIIB型"
    },
    {
      "characterId": 512,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 512,
      "tagId": 6,
      "value": "2018-06-28 复刻：异色格"
    },
    {
      "characterId": 512,
      "tagId": 7,
      "value": "浅仓杏美",
      "entries": [
        {
          "value": "浅仓杏美"
        }
      ]
    },
    {
      "characterId": 513,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 513,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 513,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 513,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 513,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 513,
      "tagId": 6,
      "value": "2018-06-28 复刻：异色格"
    },
    {
      "characterId": 513,
      "tagId": 7,
      "value": "浅仓杏美",
      "entries": [
        {
          "value": "浅仓杏美"
        }
      ]
    },
    {
      "characterId": 514,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 514,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 514,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 514,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 514,
      "tagId": 5,
      "value": "00:13:00"
    },
    {
      "characterId": 514,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 514,
      "tagId": 7,
      "value": "福原绫香",
      "entries": [
        {
          "value": "福原绫香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 515,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 515,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 515,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 515,
      "tagId": 4,
      "value": "VIIB型"
    },
    {
      "characterId": 515,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 515,
      "tagId": 6,
      "value": "2019-05-23 铁血、音符&誓言"
    },
    {
      "characterId": 515,
      "tagId": 7,
      "value": "长谷川里桃",
      "entries": [
        {
          "value": "长谷川里桃"
        }
      ]
    },
    {
      "characterId": 516,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 516,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 516,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 516,
      "tagId": 4,
      "value": "VIIB型"
    },
    {
      "characterId": 516,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 516,
      "tagId": 6,
      "value": "2019-07-11"
    },
    {
      "characterId": 516,
      "tagId": 7,
      "value": "铃代纱弓",
      "entries": [
        {
          "value": "铃代纱弓"
        },
        {
          "value": "すずしろ さゆみ"
        },
        {
          "value": "鈴代紗弓"
        }
      ]
    },
    {
      "characterId": 517,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 517,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 517,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 517,
      "tagId": 4,
      "value": "IXC型"
    },
    {
      "characterId": 517,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 517,
      "tagId": 6,
      "value": "2019-07-11"
    },
    {
      "characterId": 517,
      "tagId": 7,
      "value": "诹访彩花",
      "entries": [
        {
          "value": "诹访彩花"
        }
      ]
    },
    {
      "characterId": 518,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 518,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 518,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 518,
      "tagId": 4,
      "value": "IXB型"
    },
    {
      "characterId": 518,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 518,
      "tagId": 6,
      "value": "2019-10-17"
    },
    {
      "characterId": 518,
      "tagId": 7,
      "value": "石见舞菜香",
      "entries": [
        {
          "value": "石见舞菜香"
        },
        {
          "value": "いわみ まなか"
        }
      ]
    },
    {
      "characterId": 519,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 519,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 519,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 519,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 519,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 519,
      "tagId": 6,
      "value": "2020-08-20 复刻：铁血、音符&誓言"
    },
    {
      "characterId": 519,
      "tagId": 7,
      "value": "峰田茉优",
      "entries": [
        {
          "value": "峰田茉优"
        }
      ]
    },
    {
      "characterId": 520,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 520,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 520,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 520,
      "tagId": 4,
      "value": "IXA型"
    },
    {
      "characterId": 520,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 520,
      "tagId": 6,
      "value": "2020-12-29 负象限作战"
    },
    {
      "characterId": 520,
      "tagId": 7,
      "value": "七濑彩夏",
      "entries": [
        {
          "value": "七濑彩夏"
        }
      ]
    },
    {
      "characterId": 521,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 521,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 521,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 521,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 521,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 521,
      "tagId": 6,
      "value": "2021-02-04"
    },
    {
      "characterId": 521,
      "tagId": 7,
      "value": "藤本彩花",
      "entries": [
        {
          "value": "藤本彩花"
        }
      ]
    },
    {
      "characterId": 522,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 522,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 522,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 522,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 522,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 522,
      "tagId": 6,
      "value": "2021-12-29 逆转彩虹之塔"
    },
    {
      "characterId": 522,
      "tagId": 7,
      "value": "野村真悠华",
      "entries": [
        {
          "value": "野村真悠华"
        },
        {
          "value": "のむら まゆか"
        },
        {
          "value": "野村真悠華"
        }
      ]
    },
    {
      "characterId": 523,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 523,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 523,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 523,
      "tagId": 4,
      "value": "VIIA型"
    },
    {
      "characterId": 523,
      "tagId": 5,
      "value": "00:11:00"
    },
    {
      "characterId": 523,
      "tagId": 6,
      "value": "2024-06-27 欢迎来到童心学院"
    },
    {
      "characterId": 523,
      "tagId": 7,
      "value": "春野杏",
      "entries": [
        {
          "value": "春野杏"
        },
        {
          "value": "はるの あんず"
        }
      ]
    },
    {
      "characterId": 524,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 524,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 524,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 524,
      "tagId": 4,
      "value": "VIIC型"
    },
    {
      "characterId": 524,
      "tagId": 5,
      "value": "00:13:00"
    },
    {
      "characterId": 524,
      "tagId": 6,
      "value": "2025-06-26 迷彩都市的寻踪者"
    },
    {
      "characterId": 524,
      "tagId": 7,
      "value": "葵梓",
      "entries": [
        {
          "value": "葵梓"
        },
        {
          "value": "葵 あずさ"
        },
        {
          "value": "あおい あずさ"
        }
      ]
    },
    {
      "characterId": 525,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 525,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 525,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 525,
      "tagId": 4,
      "value": "Roon"
    },
    {
      "characterId": 525,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 525,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 525,
      "tagId": 7,
      "value": "佐藤聪美",
      "entries": [
        {
          "value": "佐藤聪美"
        },
        {
          "value": "さとう さとみ"
        }
      ]
    },
    {
      "characterId": 526,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 526,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 526,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 526,
      "tagId": 4,
      "value": "H-39型"
    },
    {
      "characterId": 526,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 526,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 526,
      "tagId": 7,
      "value": "生天目仁美",
      "entries": [
        {
          "value": "生天目仁美"
        },
        {
          "value": "なばため ひとみ"
        }
      ]
    },
    {
      "characterId": 527,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 527,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 527,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 527,
      "tagId": 4,
      "value": "Mainz"
    },
    {
      "characterId": 527,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 527,
      "tagId": 6,
      "value": "2020-07-09"
    },
    {
      "characterId": 527,
      "tagId": 7,
      "value": "甲斐田裕子",
      "entries": [
        {
          "value": "甲斐田裕子"
        }
      ]
    },
    {
      "characterId": 528,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 528,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 528,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 528,
      "tagId": 4,
      "value": "Odin"
    },
    {
      "characterId": 528,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 528,
      "tagId": 6,
      "value": "2020-07-09"
    },
    {
      "characterId": 528,
      "tagId": 7,
      "value": "松冈由贵",
      "entries": [
        {
          "value": "松冈由贵"
        }
      ]
    },
    {
      "characterId": 529,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 529,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 529,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 529,
      "tagId": 4,
      "value": "O级"
    },
    {
      "characterId": 529,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 529,
      "tagId": 6,
      "value": "2021-07-08"
    },
    {
      "characterId": 529,
      "tagId": 7,
      "value": "佐仓绫音",
      "entries": [
        {
          "value": "佐仓绫音"
        },
        {
          "value": "さくら あやね"
        },
        {
          "value": "佐倉綾音"
        }
      ]
    },
    {
      "characterId": 530,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 530,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 530,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 530,
      "tagId": 4,
      "value": "齐柏林伯爵级"
    },
    {
      "characterId": 530,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 530,
      "tagId": 6,
      "value": "2021-07-08"
    },
    {
      "characterId": 530,
      "tagId": 7,
      "value": "立花理香",
      "entries": [
        {
          "value": "立花理香"
        },
        {
          "value": "たちばな りか"
        }
      ]
    },
    {
      "characterId": 531,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 531,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 531,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 531,
      "tagId": 4,
      "value": "Prinz Rupprecht"
    },
    {
      "characterId": 531,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 531,
      "tagId": 6,
      "value": "2022-07-14 轻量化复刻：蝶海梦花"
    },
    {
      "characterId": 531,
      "tagId": 7,
      "value": "麻仓桃",
      "entries": [
        {
          "value": "麻仓桃"
        },
        {
          "value": "麻倉 もも"
        },
        {
          "value": "あさくら もも"
        }
      ]
    },
    {
      "characterId": 532,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 532,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 532,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 532,
      "tagId": 4,
      "value": "1938A型"
    },
    {
      "characterId": 532,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 532,
      "tagId": 6,
      "value": "2023-07-13"
    },
    {
      "characterId": 532,
      "tagId": 7,
      "value": "斉藤朱夏",
      "entries": [
        {
          "value": "斉藤朱夏"
        },
        {
          "value": "さいとう しゅか"
        }
      ]
    },
    {
      "characterId": 533,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 533,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 533,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 533,
      "tagId": 4,
      "value": "Hindenburg"
    },
    {
      "characterId": 533,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 533,
      "tagId": 6,
      "value": "2023-07-13"
    },
    {
      "characterId": 533,
      "tagId": 7,
      "value": "松井惠理子",
      "entries": [
        {
          "value": "松井惠理子"
        },
        {
          "value": "まつい えりこ"
        }
      ]
    },
    {
      "characterId": 534,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 534,
      "tagId": 2,
      "value": "铁血"
    },
    {
      "characterId": 534,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 534,
      "tagId": 4,
      "value": "H-39型"
    },
    {
      "characterId": 534,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 534,
      "tagId": 6,
      "value": "2025-07-10"
    },
    {
      "characterId": 534,
      "tagId": 7,
      "value": "伊濑茉莉也",
      "entries": [
        {
          "value": "伊濑茉莉也"
        },
        {
          "value": "いせ まりや"
        }
      ]
    },
    {
      "characterId": 535,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 535,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 535,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 535,
      "tagId": 4,
      "value": "鞍山级"
    },
    {
      "characterId": 535,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 535,
      "tagId": 6,
      "value": "2018-02-12"
    },
    {
      "characterId": 535,
      "tagId": 7,
      "value": "唐雅菁",
      "entries": [
        {
          "value": "唐雅菁"
        },
        {
          "value": "あすみ かな"
        },
        {
          "value": "阿澄佳奈"
        }
      ]
    },
    {
      "characterId": 536,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 536,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 536,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 536,
      "tagId": 4,
      "value": "鞍山级"
    },
    {
      "characterId": 536,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 536,
      "tagId": 6,
      "value": "2018-02-12"
    },
    {
      "characterId": 536,
      "tagId": 7,
      "value": "阿澄佳奈",
      "entries": [
        {
          "value": "阿澄佳奈"
        },
        {
          "value": "あすみ かな"
        }
      ]
    },
    {
      "characterId": 537,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 537,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 537,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 537,
      "tagId": 4,
      "value": "鞍山级"
    },
    {
      "characterId": 537,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 537,
      "tagId": 6,
      "value": "2018-02-12"
    },
    {
      "characterId": 537,
      "tagId": 7,
      "value": "花玲",
      "entries": [
        {
          "value": "花玲"
        },
        {
          "value": "みずはし かおり"
        },
        {
          "value": "水桥香织"
        }
      ]
    },
    {
      "characterId": 538,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 538,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 538,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 538,
      "tagId": 4,
      "value": "鞍山级"
    },
    {
      "characterId": 538,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 538,
      "tagId": 6,
      "value": "2018-02-12"
    },
    {
      "characterId": 538,
      "tagId": 7,
      "value": "王晓彤",
      "entries": [
        {
          "value": "王晓彤"
        },
        {
          "value": "みずはし かおり"
        },
        {
          "value": "水桥香织"
        }
      ]
    },
    {
      "characterId": 539,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 539,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 539,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 539,
      "tagId": 4,
      "value": "类V-25外贸型"
    },
    {
      "characterId": 539,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 539,
      "tagId": 6,
      "value": "2024-01-30"
    },
    {
      "characterId": 539,
      "tagId": 7,
      "value": "牧野天音",
      "entries": [
        {
          "value": "牧野天音"
        },
        {
          "value": "まきの あまね"
        },
        {
          "value": "皛四白"
        }
      ]
    },
    {
      "characterId": 540,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 540,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 540,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 540,
      "tagId": 4,
      "value": "类V-25外贸型"
    },
    {
      "characterId": 540,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 540,
      "tagId": 6,
      "value": "2024-01-30"
    },
    {
      "characterId": 540,
      "tagId": 7,
      "value": "牧野天音",
      "entries": [
        {
          "value": "牧野天音"
        },
        {
          "value": "まきの あまね"
        },
        {
          "value": "陈婷婷"
        }
      ]
    },
    {
      "characterId": 541,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 541,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 541,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 541,
      "tagId": 4,
      "value": "长风级"
    },
    {
      "characterId": 541,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 541,
      "tagId": 6,
      "value": "2024-01-30"
    },
    {
      "characterId": 541,
      "tagId": 7,
      "value": "羽月理惠",
      "entries": [
        {
          "value": "羽月理惠"
        },
        {
          "value": "はづき りえ"
        },
        {
          "value": "羽月理恵"
        }
      ]
    },
    {
      "characterId": 542,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 542,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 542,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 542,
      "tagId": 4,
      "value": "长风级"
    },
    {
      "characterId": 542,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 542,
      "tagId": 6,
      "value": "2025-01-09 轻量化复刻：定向折叠"
    },
    {
      "characterId": 542,
      "tagId": 7,
      "value": "羽月理惠",
      "entries": [
        {
          "value": "羽月理惠"
        },
        {
          "value": "はづき りえ"
        },
        {
          "value": "羽月理恵"
        }
      ]
    },
    {
      "characterId": 543,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 543,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 543,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 543,
      "tagId": 4,
      "value": "长风级"
    },
    {
      "characterId": 543,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 543,
      "tagId": 6,
      "value": "2025-01-09 轻量化复刻：定向折叠"
    },
    {
      "characterId": 543,
      "tagId": 7,
      "value": "羽月理惠",
      "entries": [
        {
          "value": "羽月理惠"
        },
        {
          "value": "はづき りえ"
        },
        {
          "value": "羽月理恵"
        }
      ]
    },
    {
      "characterId": 544,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 544,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 544,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 544,
      "tagId": 4,
      "value": "Yat Sen"
    },
    {
      "characterId": 544,
      "tagId": 5,
      "value": "00:40:00"
    },
    {
      "characterId": 544,
      "tagId": 6,
      "value": "2017-09-20 第九章-库拉湾海战"
    },
    {
      "characterId": 544,
      "tagId": 7,
      "value": "杜冥鸦",
      "entries": [
        {
          "value": "杜冥鸦"
        },
        {
          "value": "あさかわ ゆう"
        },
        {
          "value": "浅川悠"
        }
      ]
    },
    {
      "characterId": 545,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 545,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 545,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 545,
      "tagId": 4,
      "value": "宁海级"
    },
    {
      "characterId": 545,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 545,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 545,
      "tagId": 7,
      "value": "站日配三宅麻理恵",
      "entries": [
        {
          "value": "站日配三宅麻理恵"
        },
        {
          "value": "みやけ まりえ"
        }
      ]
    },
    {
      "characterId": 546,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 546,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 546,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 546,
      "tagId": 4,
      "value": "宁海级"
    },
    {
      "characterId": 546,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 546,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 546,
      "tagId": 7,
      "value": "站日配久野美咲",
      "entries": [
        {
          "value": "站日配久野美咲"
        },
        {
          "value": "くの みさき"
        },
        {
          "value": "大泽"
        }
      ]
    },
    {
      "characterId": 547,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 547,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 547,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 547,
      "tagId": 4,
      "value": "肇和级"
    },
    {
      "characterId": 547,
      "tagId": 5,
      "value": "00:38:00"
    },
    {
      "characterId": 547,
      "tagId": 6,
      "value": "2021-02-04"
    },
    {
      "characterId": 547,
      "tagId": 7,
      "value": "宴宁",
      "entries": [
        {
          "value": "宴宁"
        },
        {
          "value": "站日配森嶋優花"
        }
      ]
    },
    {
      "characterId": 548,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 548,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 548,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 548,
      "tagId": 4,
      "value": "肇和级"
    },
    {
      "characterId": 548,
      "tagId": 5,
      "value": "00:38:00"
    },
    {
      "characterId": 548,
      "tagId": 6,
      "value": "2021-02-04"
    },
    {
      "characterId": 548,
      "tagId": 7,
      "value": "多多",
      "entries": [
        {
          "value": "多多"
        },
        {
          "value": "站日配森嶋優花"
        }
      ]
    },
    {
      "characterId": 549,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 549,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 549,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 549,
      "tagId": 4,
      "value": "海天级"
    },
    {
      "characterId": 549,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 549,
      "tagId": 6,
      "value": "2022-01-27"
    },
    {
      "characterId": 549,
      "tagId": 7,
      "value": "菊花花",
      "entries": [
        {
          "value": "菊花花"
        },
        {
          "value": "だて ありさ"
        },
        {
          "value": "伊达朱里纱"
        }
      ]
    },
    {
      "characterId": 550,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 550,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 550,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 550,
      "tagId": 4,
      "value": "海天级"
    },
    {
      "characterId": 550,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 550,
      "tagId": 6,
      "value": "2022-01-27"
    },
    {
      "characterId": 550,
      "tagId": 7,
      "value": "陈阳日配伊达朱里纱",
      "entries": [
        {
          "value": "陈阳日配伊达朱里纱"
        },
        {
          "value": "だて ありさ"
        },
        {
          "value": "伊達朱里紗"
        }
      ]
    },
    {
      "characterId": 551,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 551,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 551,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 551,
      "tagId": 4,
      "value": "Chi An"
    },
    {
      "characterId": 551,
      "tagId": 5,
      "value": "00:38:00"
    },
    {
      "characterId": 551,
      "tagId": 6,
      "value": "2024-01-30"
    },
    {
      "characterId": 551,
      "tagId": 7,
      "value": "佐佐木未来",
      "entries": [
        {
          "value": "佐佐木未来"
        },
        {
          "value": "ささき みこい"
        },
        {
          "value": "陈雨"
        }
      ]
    },
    {
      "characterId": 552,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 552,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 552,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 552,
      "tagId": 4,
      "value": "海容级"
    },
    {
      "characterId": 552,
      "tagId": 5,
      "value": "00:40:00"
    },
    {
      "characterId": 552,
      "tagId": 6,
      "value": "2025-01-09 轻量化复刻：定向折叠"
    },
    {
      "characterId": 552,
      "tagId": 7,
      "value": "咲川雏乃",
      "entries": [
        {
          "value": "咲川雏乃"
        },
        {
          "value": "咲川 ひなの"
        },
        {
          "value": "阿妄站空间"
        }
      ]
    },
    {
      "characterId": 553,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 553,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 553,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 553,
      "tagId": 4,
      "value": "Chien Wu"
    },
    {
      "characterId": 553,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 553,
      "tagId": 6,
      "value": "2025-01-09 轻量化复刻：定向折叠"
    },
    {
      "characterId": 553,
      "tagId": 7,
      "value": "水野朔",
      "entries": [
        {
          "value": "水野朔"
        },
        {
          "value": "みずの さく"
        },
        {
          "value": "徐慧"
        }
      ]
    },
    {
      "characterId": 554,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 554,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 554,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 554,
      "tagId": 4,
      "value": "Huan Ch'ang"
    },
    {
      "characterId": 554,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 554,
      "tagId": 6,
      "value": "2024-01-30"
    },
    {
      "characterId": 554,
      "tagId": 7,
      "value": "又吉爱",
      "entries": [
        {
          "value": "又吉爱"
        },
        {
          "value": "またよし あい"
        },
        {
          "value": "又吉愛"
        }
      ]
    },
    {
      "characterId": 555,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 555,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 555,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 555,
      "tagId": 4,
      "value": "Chen Hai"
    },
    {
      "characterId": 555,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 555,
      "tagId": 6,
      "value": "2022-01-27"
    },
    {
      "characterId": 555,
      "tagId": 7,
      "value": "龟娘",
      "entries": [
        {
          "value": "龟娘"
        },
        {
          "value": "いわみ まなか"
        },
        {
          "value": "站日配石见舞菜香"
        }
      ]
    },
    {
      "characterId": 556,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 556,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 556,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 556,
      "tagId": 4,
      "value": "Hwah Jah"
    },
    {
      "characterId": 556,
      "tagId": 5,
      "value": "02:10:00"
    },
    {
      "characterId": 556,
      "tagId": 6,
      "value": "2023-01-18"
    },
    {
      "characterId": 556,
      "tagId": 7,
      "value": "贯井柚佳",
      "entries": [
        {
          "value": "贯井柚佳"
        },
        {
          "value": "ぬくい ゆか"
        },
        {
          "value": "貫井柚佳"
        }
      ]
    },
    {
      "characterId": 557,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 557,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 557,
      "tagId": 3,
      "value": "运输"
    },
    {
      "characterId": 557,
      "tagId": 4,
      "value": "定安级"
    },
    {
      "characterId": 557,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 557,
      "tagId": 6,
      "value": "2023-01-18"
    },
    {
      "characterId": 557,
      "tagId": 7,
      "value": "田中千惠美",
      "entries": [
        {
          "value": "田中千惠美"
        },
        {
          "value": "田中 ちえ"
        },
        {
          "value": "田中美"
        }
      ]
    },
    {
      "characterId": 558,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 558,
      "tagId": 2,
      "value": "东煌"
    },
    {
      "characterId": 558,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 558,
      "tagId": 4,
      "value": "Harbin"
    },
    {
      "characterId": 558,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 558,
      "tagId": 6,
      "value": "2022-07-14 轻量化复刻：蝶海梦花"
    },
    {
      "characterId": 558,
      "tagId": 7,
      "value": "张琦",
      "entries": [
        {
          "value": "张琦"
        },
        {
          "value": "ほうもと あきな"
        },
        {
          "value": "法元明菜"
        }
      ]
    },
    {
      "characterId": 559,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 559,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 559,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 559,
      "tagId": 4,
      "value": "索尔达蒂级"
    },
    {
      "characterId": 559,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 559,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 559,
      "tagId": 7,
      "value": "立花理香",
      "entries": [
        {
          "value": "立花理香"
        },
        {
          "value": "たちばな りか"
        }
      ]
    },
    {
      "characterId": 560,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 560,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 560,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 560,
      "tagId": 4,
      "value": "诗人级"
    },
    {
      "characterId": 560,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 560,
      "tagId": 6,
      "value": "2021-01-21 复刻：神圣的悲喜剧"
    },
    {
      "characterId": 560,
      "tagId": 7,
      "value": "吉岡美咲",
      "entries": [
        {
          "value": "吉岡美咲"
        },
        {
          "value": "よしおか みさき"
        }
      ]
    },
    {
      "characterId": 561,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 561,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 561,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 561,
      "tagId": 4,
      "value": "西北风级"
    },
    {
      "characterId": 561,
      "tagId": 5,
      "value": "00:30:40"
    },
    {
      "characterId": 561,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 561,
      "tagId": 7,
      "value": "永野爱理",
      "entries": [
        {
          "value": "永野爱理"
        },
        {
          "value": "えいの あいり"
        },
        {
          "value": "永野愛理"
        }
      ]
    },
    {
      "characterId": 562,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 562,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 562,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 562,
      "tagId": 4,
      "value": "西北风级"
    },
    {
      "characterId": 562,
      "tagId": 5,
      "value": "00:30:40"
    },
    {
      "characterId": 562,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 562,
      "tagId": 7,
      "value": "永野爱理",
      "entries": [
        {
          "value": "永野爱理"
        },
        {
          "value": "えいの あいり"
        },
        {
          "value": "永野愛理"
        }
      ]
    },
    {
      "characterId": 563,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 563,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 563,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 563,
      "tagId": 4,
      "value": "航海家级"
    },
    {
      "characterId": 563,
      "tagId": 5,
      "value": "00:29:40"
    },
    {
      "characterId": 563,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 563,
      "tagId": 7,
      "value": "古贺葵",
      "entries": [
        {
          "value": "古贺葵"
        },
        {
          "value": "こが あおい"
        },
        {
          "value": "古賀葵"
        }
      ]
    },
    {
      "characterId": 564,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 564,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 564,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 564,
      "tagId": 4,
      "value": "罗马统帅级"
    },
    {
      "characterId": 564,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 564,
      "tagId": 6,
      "value": "2022-03-24"
    },
    {
      "characterId": 564,
      "tagId": 7,
      "value": "会泽纱弥",
      "entries": [
        {
          "value": "会泽纱弥"
        },
        {
          "value": "会沢紗弥"
        }
      ]
    },
    {
      "characterId": 565,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 565,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 565,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 565,
      "tagId": 4,
      "value": "诗人级"
    },
    {
      "characterId": 565,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 565,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 565,
      "tagId": 7,
      "value": "夏吉优子",
      "entries": [
        {
          "value": "夏吉优子"
        },
        {
          "value": "夏吉 ゆうこ"
        },
        {
          "value": "なつよし ゆうこ"
        }
      ]
    },
    {
      "characterId": 566,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 566,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 566,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 566,
      "tagId": 4,
      "value": "航海家级"
    },
    {
      "characterId": 566,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 566,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 566,
      "tagId": 7,
      "value": "指出毬亜",
      "entries": [
        {
          "value": "指出毬亜"
        },
        {
          "value": "さしで まりあ"
        }
      ]
    },
    {
      "characterId": 567,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 567,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 567,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 567,
      "tagId": 4,
      "value": "罗马统帅级"
    },
    {
      "characterId": 567,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 567,
      "tagId": 6,
      "value": "2023-06-29"
    },
    {
      "characterId": 567,
      "tagId": 7,
      "value": "津田里穗",
      "entries": [
        {
          "value": "津田里穗"
        }
      ]
    },
    {
      "characterId": 568,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 568,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 568,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 568,
      "tagId": 4,
      "value": "诗人级"
    },
    {
      "characterId": 568,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 568,
      "tagId": 6,
      "value": "2025-02-27 樊笼内的神光"
    },
    {
      "characterId": 568,
      "tagId": 7,
      "value": "夏吉优子",
      "entries": [
        {
          "value": "夏吉优子"
        },
        {
          "value": "夏吉 ゆうこ"
        },
        {
          "value": "なつよし ゆうこ"
        }
      ]
    },
    {
      "characterId": 569,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 569,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 569,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 569,
      "tagId": 4,
      "value": "佣兵队长级"
    },
    {
      "characterId": 569,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 569,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 569,
      "tagId": 7,
      "value": "平田宏美",
      "entries": [
        {
          "value": "平田宏美"
        },
        {
          "value": "ひらた ひろみ"
        }
      ]
    },
    {
      "characterId": 570,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 570,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 570,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 570,
      "tagId": 4,
      "value": "佣兵队长级"
    },
    {
      "characterId": 570,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 570,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 570,
      "tagId": 7,
      "value": "户田惠",
      "entries": [
        {
          "value": "户田惠"
        },
        {
          "value": "戸田 めぐみ"
        },
        {
          "value": "とだ めぐみ"
        }
      ]
    },
    {
      "characterId": 571,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 571,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 571,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 571,
      "tagId": 4,
      "value": "佣兵队长级"
    },
    {
      "characterId": 571,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 571,
      "tagId": 6,
      "value": "2025-02-27 樊笼内的神光"
    },
    {
      "characterId": 571,
      "tagId": 7,
      "value": "藤本侑里",
      "entries": [
        {
          "value": "藤本侑里"
        },
        {
          "value": "ふじもと ゆり"
        }
      ]
    },
    {
      "characterId": 572,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 572,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 572,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 572,
      "tagId": 4,
      "value": "特伦托级"
    },
    {
      "characterId": 572,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 572,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 572,
      "tagId": 7,
      "value": "中村樱",
      "entries": [
        {
          "value": "中村樱"
        },
        {
          "value": "なかむら さくら"
        },
        {
          "value": "中村桜"
        }
      ]
    },
    {
      "characterId": 573,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 573,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 573,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 573,
      "tagId": 4,
      "value": "扎拉级"
    },
    {
      "characterId": 573,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 573,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 573,
      "tagId": 7,
      "value": "种崎敦美",
      "entries": [
        {
          "value": "种崎敦美"
        }
      ]
    },
    {
      "characterId": 574,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 574,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 574,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 574,
      "tagId": 4,
      "value": "扎拉级"
    },
    {
      "characterId": 574,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 574,
      "tagId": 6,
      "value": "2021-01-21 复刻：神圣的悲喜剧"
    },
    {
      "characterId": 574,
      "tagId": 7,
      "value": "种崎敦美",
      "entries": [
        {
          "value": "种崎敦美"
        }
      ]
    },
    {
      "characterId": 575,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 575,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 575,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 575,
      "tagId": 4,
      "value": "特伦托级"
    },
    {
      "characterId": 575,
      "tagId": 5,
      "value": "01:54:00"
    },
    {
      "characterId": 575,
      "tagId": 6,
      "value": "2022-03-24"
    },
    {
      "characterId": 575,
      "tagId": 7,
      "value": "中村樱",
      "entries": [
        {
          "value": "中村樱"
        },
        {
          "value": "なかむら さくら"
        },
        {
          "value": "中村桜"
        }
      ]
    },
    {
      "characterId": 576,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 576,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 576,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 576,
      "tagId": 4,
      "value": "博尔扎诺级"
    },
    {
      "characterId": 576,
      "tagId": 5,
      "value": "01:54:00"
    },
    {
      "characterId": 576,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 576,
      "tagId": 7,
      "value": "前川涼子",
      "entries": [
        {
          "value": "前川涼子"
        },
        {
          "value": "まえかわ りょうこ"
        }
      ]
    },
    {
      "characterId": 577,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 577,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 577,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 577,
      "tagId": 4,
      "value": "扎拉级"
    },
    {
      "characterId": 577,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 577,
      "tagId": 6,
      "value": "2023-06-29"
    },
    {
      "characterId": 577,
      "tagId": 7,
      "value": "蓝原琴美",
      "entries": [
        {
          "value": "蓝原琴美"
        },
        {
          "value": "藍原 ことみ"
        }
      ]
    },
    {
      "characterId": 578,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 578,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 578,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 578,
      "tagId": 4,
      "value": "维托里奥·维内托级"
    },
    {
      "characterId": 578,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 578,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 578,
      "tagId": 7,
      "value": "能登麻美子",
      "entries": [
        {
          "value": "能登麻美子"
        },
        {
          "value": "のと まみこ"
        }
      ]
    },
    {
      "characterId": 579,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 579,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 579,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 579,
      "tagId": 4,
      "value": "维托里奥·维内托级"
    },
    {
      "characterId": 579,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 579,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 579,
      "tagId": 7,
      "value": "伊藤静",
      "entries": [
        {
          "value": "伊藤静"
        }
      ]
    },
    {
      "characterId": 580,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 580,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 580,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 580,
      "tagId": 4,
      "value": "维托里奥·维内托级"
    },
    {
      "characterId": 580,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 580,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 580,
      "tagId": 7,
      "value": "近藤唯",
      "entries": [
        {
          "value": "近藤唯"
        },
        {
          "value": "こんどう ゆい"
        }
      ]
    },
    {
      "characterId": 581,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 581,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 581,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 581,
      "tagId": 4,
      "value": "加富尔伯爵级"
    },
    {
      "characterId": 581,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 581,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 581,
      "tagId": 7,
      "value": "清水彩香",
      "entries": [
        {
          "value": "清水彩香"
        }
      ]
    },
    {
      "characterId": 582,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 582,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 582,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 582,
      "tagId": 4,
      "value": "加富尔伯爵级"
    },
    {
      "characterId": 582,
      "tagId": 5,
      "value": "04:15:00"
    },
    {
      "characterId": 582,
      "tagId": 6,
      "value": "2019-09-11 神圣的悲喜剧"
    },
    {
      "characterId": 582,
      "tagId": 7,
      "value": "清水彩香",
      "entries": [
        {
          "value": "清水彩香"
        }
      ]
    },
    {
      "characterId": 583,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 583,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 583,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 583,
      "tagId": 4,
      "value": "安德烈亚·多利亚级"
    },
    {
      "characterId": 583,
      "tagId": 5,
      "value": "04:15:00"
    },
    {
      "characterId": 583,
      "tagId": 6,
      "value": "2023-06-29"
    },
    {
      "characterId": 583,
      "tagId": 7,
      "value": "富士原晴乃",
      "entries": [
        {
          "value": "富士原晴乃"
        },
        {
          "value": "ふじわら はるの"
        }
      ]
    },
    {
      "characterId": 584,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 584,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 584,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 584,
      "tagId": 4,
      "value": "Raffaello"
    },
    {
      "characterId": 584,
      "tagId": 5,
      "value": "05:40:10"
    },
    {
      "characterId": 584,
      "tagId": 6,
      "value": "2025-02-27 樊笼内的神光"
    },
    {
      "characterId": 584,
      "tagId": 7,
      "value": "朝井彩加",
      "entries": [
        {
          "value": "朝井彩加"
        },
        {
          "value": "あさい あやか"
        }
      ]
    },
    {
      "characterId": 585,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 585,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 585,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 585,
      "tagId": 4,
      "value": "Aquila"
    },
    {
      "characterId": 585,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 585,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 585,
      "tagId": 7,
      "value": "持月玲依",
      "entries": [
        {
          "value": "持月玲依"
        },
        {
          "value": "もちづき れい"
        }
      ]
    },
    {
      "characterId": 586,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 586,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 586,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 586,
      "tagId": 4,
      "value": "维托里奥·维内托级"
    },
    {
      "characterId": 586,
      "tagId": 5,
      "value": "05:15:00"
    },
    {
      "characterId": 586,
      "tagId": 6,
      "value": "2022-03-24"
    },
    {
      "characterId": 586,
      "tagId": 7,
      "value": "大森日雅",
      "entries": [
        {
          "value": "大森日雅"
        },
        {
          "value": "おおもり にちか"
        }
      ]
    },
    {
      "characterId": 587,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 587,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 587,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 587,
      "tagId": 4,
      "value": "布林级"
    },
    {
      "characterId": 587,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 587,
      "tagId": 6,
      "value": "2021-04-22 复兴的赞美诗"
    },
    {
      "characterId": 587,
      "tagId": 7,
      "value": "本渡枫",
      "entries": [
        {
          "value": "本渡枫"
        },
        {
          "value": "ほんど かえで"
        },
        {
          "value": "本渡楓"
        }
      ]
    },
    {
      "characterId": 588,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 588,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 588,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 588,
      "tagId": 4,
      "value": "马可尼级"
    },
    {
      "characterId": 588,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 588,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 588,
      "tagId": 7,
      "value": "丸冈和佳奈",
      "entries": [
        {
          "value": "丸冈和佳奈"
        },
        {
          "value": "まるおか わかな"
        },
        {
          "value": "丸岡和佳奈"
        }
      ]
    },
    {
      "characterId": 589,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 589,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 589,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 589,
      "tagId": 4,
      "value": "马可尼级"
    },
    {
      "characterId": 589,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 589,
      "tagId": 6,
      "value": "2025-02-27 樊笼内的神光"
    },
    {
      "characterId": 589,
      "tagId": 7,
      "value": "结川麻希",
      "entries": [
        {
          "value": "结川麻希"
        },
        {
          "value": "結川 あさき"
        }
      ]
    },
    {
      "characterId": 590,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 590,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 590,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 590,
      "tagId": 4,
      "value": "Marco Polo"
    },
    {
      "characterId": 590,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 590,
      "tagId": 6,
      "value": "2021-07-08"
    },
    {
      "characterId": 590,
      "tagId": 7,
      "value": "三泽纱千香",
      "entries": [
        {
          "value": "三泽纱千香"
        },
        {
          "value": "みさわ さちか"
        },
        {
          "value": "三澤紗千香"
        }
      ]
    },
    {
      "characterId": 591,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 591,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 591,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 591,
      "tagId": 4,
      "value": "Napoli"
    },
    {
      "characterId": 591,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 591,
      "tagId": 6,
      "value": "2024-07-18 轻量化复刻：泠誓光庭"
    },
    {
      "characterId": 591,
      "tagId": 7,
      "value": "铃代纱弓",
      "entries": [
        {
          "value": "铃代纱弓"
        },
        {
          "value": "すずしろ さゆみ"
        },
        {
          "value": "鈴代紗弓"
        }
      ]
    },
    {
      "characterId": 592,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 592,
      "tagId": 2,
      "value": "撒丁帝国"
    },
    {
      "characterId": 592,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 592,
      "tagId": 4,
      "value": "西北风级"
    },
    {
      "characterId": 592,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 592,
      "tagId": 6,
      "value": "2025-07-10"
    },
    {
      "characterId": 592,
      "tagId": 7,
      "value": "春咲暖",
      "entries": [
        {
          "value": "春咲暖"
        },
        {
          "value": "はるさき のん"
        }
      ]
    },
    {
      "characterId": 593,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 593,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 593,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 593,
      "tagId": 4,
      "value": "7型"
    },
    {
      "characterId": 593,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 593,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 593,
      "tagId": 7,
      "value": "都丸",
      "entries": [
        {
          "value": "都丸"
        },
        {
          "value": "ちよ"
        }
      ]
    },
    {
      "characterId": 594,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 594,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 594,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 594,
      "tagId": 4,
      "value": "38型"
    },
    {
      "characterId": 594,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 594,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 594,
      "tagId": 7,
      "value": "原優子",
      "entries": [
        {
          "value": "原優子"
        }
      ]
    },
    {
      "characterId": 595,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 595,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 595,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 595,
      "tagId": 4,
      "value": "20-I型"
    },
    {
      "characterId": 595,
      "tagId": 5,
      "value": "00:42:00"
    },
    {
      "characterId": 595,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 595,
      "tagId": 7,
      "value": "井泽诗织",
      "entries": [
        {
          "value": "井泽诗织"
        },
        {
          "value": "いざわ しおり"
        },
        {
          "value": "井澤詩織"
        }
      ]
    },
    {
      "characterId": 596,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 596,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 596,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 596,
      "tagId": 4,
      "value": "20-I型"
    },
    {
      "characterId": 596,
      "tagId": 5,
      "value": "00:42:00"
    },
    {
      "characterId": 596,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 596,
      "tagId": 7,
      "value": "井泽诗织",
      "entries": [
        {
          "value": "井泽诗织"
        },
        {
          "value": "いざわ しおり"
        },
        {
          "value": "井澤詩織"
        }
      ]
    },
    {
      "characterId": 597,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 597,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 597,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 597,
      "tagId": 4,
      "value": "7型"
    },
    {
      "characterId": 597,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 597,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 597,
      "tagId": 7,
      "value": "柿村桃希",
      "entries": [
        {
          "value": "柿村桃希"
        }
      ]
    },
    {
      "characterId": 598,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 598,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 598,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 598,
      "tagId": 4,
      "value": "7型"
    },
    {
      "characterId": 598,
      "tagId": 5,
      "value": "00:32:00"
    },
    {
      "characterId": 598,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 598,
      "tagId": 7,
      "value": "山田麻莉奈",
      "entries": [
        {
          "value": "山田麻莉奈"
        }
      ]
    },
    {
      "characterId": 599,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 599,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 599,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 599,
      "tagId": 4,
      "value": "7型"
    },
    {
      "characterId": 599,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 599,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 599,
      "tagId": 7,
      "value": "小坂井祐莉絵",
      "entries": [
        {
          "value": "小坂井祐莉絵"
        }
      ]
    },
    {
      "characterId": 600,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 600,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 600,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 600,
      "tagId": 4,
      "value": "7-U型"
    },
    {
      "characterId": 600,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 600,
      "tagId": 6,
      "value": "2022-02-24 深度回音"
    },
    {
      "characterId": 600,
      "tagId": 7,
      "value": "花井美春",
      "entries": [
        {
          "value": "花井美春"
        },
        {
          "value": "はない みはる"
        }
      ]
    },
    {
      "characterId": 601,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 601,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 601,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 601,
      "tagId": 4,
      "value": "48型"
    },
    {
      "characterId": 601,
      "tagId": 5,
      "value": "00:42:00"
    },
    {
      "characterId": 601,
      "tagId": 6,
      "value": "2022-02-24 深度回音"
    },
    {
      "characterId": 601,
      "tagId": 7,
      "value": "茜屋日海夏",
      "entries": [
        {
          "value": "茜屋日海夏"
        },
        {
          "value": "あかねや ひみか"
        }
      ]
    },
    {
      "characterId": 602,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 602,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 602,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 602,
      "tagId": 4,
      "value": "30-K型"
    },
    {
      "characterId": 602,
      "tagId": 5,
      "value": "00:41:00"
    },
    {
      "characterId": 602,
      "tagId": 6,
      "value": "2024-02-29 雪境迷踪"
    },
    {
      "characterId": 602,
      "tagId": 7,
      "value": "佳穗成美",
      "entries": [
        {
          "value": "佳穗成美"
        },
        {
          "value": "かほ なるみ"
        },
        {
          "value": "佳穂成美"
        }
      ]
    },
    {
      "characterId": 603,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 603,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 603,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 603,
      "tagId": 4,
      "value": "7-U型"
    },
    {
      "characterId": 603,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 603,
      "tagId": 6,
      "value": "2024-02-29 雪境迷踪"
    },
    {
      "characterId": 603,
      "tagId": 7,
      "value": "中谷茉莉花",
      "entries": [
        {
          "value": "中谷茉莉花"
        },
        {
          "value": "なかたに まりか"
        }
      ]
    },
    {
      "characterId": 604,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 604,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 604,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 604,
      "tagId": 4,
      "value": "帕拉达级"
    },
    {
      "characterId": 604,
      "tagId": 5,
      "value": "01:17:00"
    },
    {
      "characterId": 604,
      "tagId": 6,
      "value": "2017-05-25"
    },
    {
      "characterId": 604,
      "tagId": 7,
      "value": "三宅麻理恵",
      "entries": [
        {
          "value": "三宅麻理恵"
        },
        {
          "value": "みやけ まりえ"
        }
      ]
    },
    {
      "characterId": 605,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 605,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 605,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 605,
      "tagId": 4,
      "value": "博加特里级"
    },
    {
      "characterId": 605,
      "tagId": 5,
      "value": "01:17:00"
    },
    {
      "characterId": 605,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 605,
      "tagId": 7,
      "value": "吉岡麻耶",
      "entries": [
        {
          "value": "吉岡麻耶"
        }
      ]
    },
    {
      "characterId": 606,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 606,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 606,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 606,
      "tagId": 4,
      "value": "68-K型"
    },
    {
      "characterId": 606,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 606,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 606,
      "tagId": 7,
      "value": "田澤茉純",
      "entries": [
        {
          "value": "田澤茉純"
        }
      ]
    },
    {
      "characterId": 607,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 607,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 607,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 607,
      "tagId": 4,
      "value": "26型"
    },
    {
      "characterId": 607,
      "tagId": 5,
      "value": "01:32:00"
    },
    {
      "characterId": 607,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 607,
      "tagId": 7,
      "value": "上坂",
      "entries": [
        {
          "value": "上坂"
        },
        {
          "value": "すみれ"
        }
      ]
    },
    {
      "characterId": 608,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 608,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 608,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 608,
      "tagId": 4,
      "value": "68-K型"
    },
    {
      "characterId": 608,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 608,
      "tagId": 6,
      "value": "2023-01-18"
    },
    {
      "characterId": 608,
      "tagId": 7,
      "value": "土屋李央",
      "entries": [
        {
          "value": "土屋李央"
        },
        {
          "value": "つちや りお"
        }
      ]
    },
    {
      "characterId": 609,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 609,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 609,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 609,
      "tagId": 4,
      "value": "奥马哈级"
    },
    {
      "characterId": 609,
      "tagId": 5,
      "value": "01:05:00"
    },
    {
      "characterId": 609,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 609,
      "tagId": 7,
      "value": "小原好美",
      "entries": [
        {
          "value": "小原好美"
        },
        {
          "value": "こはら このみ"
        }
      ]
    },
    {
      "characterId": 610,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 610,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 610,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 610,
      "tagId": 4,
      "value": "26型"
    },
    {
      "characterId": 610,
      "tagId": 5,
      "value": "01:32:00"
    },
    {
      "characterId": 610,
      "tagId": 6,
      "value": "2023-03-23"
    },
    {
      "characterId": 610,
      "tagId": 7,
      "value": "春花",
      "entries": [
        {
          "value": "春花"
        },
        {
          "value": "らん"
        }
      ]
    },
    {
      "characterId": 611,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 611,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 611,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 611,
      "tagId": 4,
      "value": "博加特里级"
    },
    {
      "characterId": 611,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 611,
      "tagId": 6,
      "value": "2025-04-24 扬起郁金之旗"
    },
    {
      "characterId": 611,
      "tagId": 7,
      "value": "内田爱美",
      "entries": [
        {
          "value": "内田爱美"
        },
        {
          "value": "うちだ まみ"
        },
        {
          "value": "内田愛美"
        }
      ]
    },
    {
      "characterId": 612,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 612,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 612,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 612,
      "tagId": 4,
      "value": "希佩尔海军上将级"
    },
    {
      "characterId": 612,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 612,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 612,
      "tagId": 7,
      "value": "下屋则子",
      "entries": [
        {
          "value": "下屋则子"
        },
        {
          "value": "したや のりこ"
        }
      ]
    },
    {
      "characterId": 613,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 613,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 613,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 613,
      "tagId": 4,
      "value": "Kursk"
    },
    {
      "characterId": 613,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 613,
      "tagId": 6,
      "value": "2023-03-23"
    },
    {
      "characterId": 613,
      "tagId": 7,
      "value": "衣川里佳",
      "entries": [
        {
          "value": "衣川里佳"
        },
        {
          "value": "きぬがわ りか"
        }
      ]
    },
    {
      "characterId": 614,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 614,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 614,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 614,
      "tagId": 4,
      "value": "甘古特级"
    },
    {
      "characterId": 614,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 614,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 614,
      "tagId": 7,
      "value": "大浦冬华",
      "entries": [
        {
          "value": "大浦冬华"
        },
        {
          "value": "緒乃冬華"
        }
      ]
    },
    {
      "characterId": 615,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 615,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 615,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 615,
      "tagId": 4,
      "value": "23型"
    },
    {
      "characterId": 615,
      "tagId": 5,
      "value": "06:23:00"
    },
    {
      "characterId": 615,
      "tagId": 6,
      "value": "2024-02-29 雪境迷踪"
    },
    {
      "characterId": 615,
      "tagId": 7,
      "value": "户松遥",
      "entries": [
        {
          "value": "户松遥"
        },
        {
          "value": "とまつ はるか"
        },
        {
          "value": "戸松遥"
        }
      ]
    },
    {
      "characterId": 616,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 616,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 616,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 616,
      "tagId": 4,
      "value": "23型"
    },
    {
      "characterId": 616,
      "tagId": 5,
      "value": "06:23:00"
    },
    {
      "characterId": 616,
      "tagId": 6,
      "value": "2021-02-25 破晓冰华"
    },
    {
      "characterId": 616,
      "tagId": 7,
      "value": "瀬戸麻沙美",
      "entries": [
        {
          "value": "瀬戸麻沙美"
        },
        {
          "value": "せと あさみ"
        }
      ]
    },
    {
      "characterId": 617,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 617,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 617,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 617,
      "tagId": 4,
      "value": "23型"
    },
    {
      "characterId": 617,
      "tagId": 5,
      "value": "06:23:00"
    },
    {
      "characterId": 617,
      "tagId": 6,
      "value": "2020-02-27 北境序曲"
    },
    {
      "characterId": 617,
      "tagId": 7,
      "value": "沼倉愛美",
      "entries": [
        {
          "value": "沼倉愛美"
        }
      ]
    },
    {
      "characterId": 618,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 618,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 618,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 618,
      "tagId": 4,
      "value": "复仇级"
    },
    {
      "characterId": 618,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 618,
      "tagId": 6,
      "value": "2022-02-24 深度回音"
    },
    {
      "characterId": 618,
      "tagId": 7,
      "value": "久保田未梦",
      "entries": [
        {
          "value": "久保田未梦"
        },
        {
          "value": "くぼた みゆ"
        },
        {
          "value": "久保田未夢"
        }
      ]
    },
    {
      "characterId": 619,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 619,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 619,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 619,
      "tagId": 4,
      "value": "甘古特级"
    },
    {
      "characterId": 619,
      "tagId": 5,
      "value": "03:40:00"
    },
    {
      "characterId": 619,
      "tagId": 6,
      "value": "2023-03-23"
    },
    {
      "characterId": 619,
      "tagId": 7,
      "value": "久保田未夢",
      "entries": [
        {
          "value": "久保田未夢"
        },
        {
          "value": "くぼた みゆ"
        }
      ]
    },
    {
      "characterId": 620,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 620,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 620,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 620,
      "tagId": 4,
      "value": "甘古特级"
    },
    {
      "characterId": 620,
      "tagId": 5,
      "value": "03:40:00"
    },
    {
      "characterId": 620,
      "tagId": 6,
      "value": "2024-02-29 雪境迷踪"
    },
    {
      "characterId": 620,
      "tagId": 7,
      "value": "秦佐和子",
      "entries": [
        {
          "value": "秦佐和子"
        },
        {
          "value": "はた さわこ"
        }
      ]
    },
    {
      "characterId": 621,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 621,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 621,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 621,
      "tagId": 4,
      "value": "21型"
    },
    {
      "characterId": 621,
      "tagId": 5,
      "value": "05:50:00"
    },
    {
      "characterId": 621,
      "tagId": 6,
      "value": "2025-04-24 扬起郁金之旗"
    },
    {
      "characterId": 621,
      "tagId": 7,
      "value": "寺崎裕香",
      "entries": [
        {
          "value": "寺崎裕香"
        },
        {
          "value": "てらさき ゆか"
        }
      ]
    },
    {
      "characterId": 622,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 622,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 622,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 622,
      "tagId": 4,
      "value": "72型"
    },
    {
      "characterId": 622,
      "tagId": 5,
      "value": "04:47:53"
    },
    {
      "characterId": 622,
      "tagId": 6,
      "value": "2022-02-24 深度回音"
    },
    {
      "characterId": 622,
      "tagId": 7,
      "value": "芝崎典子",
      "entries": [
        {
          "value": "芝崎典子"
        },
        {
          "value": "しばさき のりこ"
        }
      ]
    },
    {
      "characterId": 623,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 623,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 623,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 623,
      "tagId": 4,
      "value": "69型"
    },
    {
      "characterId": 623,
      "tagId": 5,
      "value": "04:42:50"
    },
    {
      "characterId": 623,
      "tagId": 6,
      "value": "2022-02-24 深度回音"
    },
    {
      "characterId": 623,
      "tagId": 7,
      "value": "本渡枫",
      "entries": [
        {
          "value": "本渡枫"
        },
        {
          "value": "ほんど かえで"
        },
        {
          "value": "本渡楓"
        }
      ]
    },
    {
      "characterId": 624,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 624,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 624,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 624,
      "tagId": 4,
      "value": "71B型"
    },
    {
      "characterId": 624,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 624,
      "tagId": 6,
      "value": "2022-07-14 轻量化复刻：蝶海梦花"
    },
    {
      "characterId": 624,
      "tagId": 7,
      "value": "柚木凉香",
      "entries": [
        {
          "value": "柚木凉香"
        },
        {
          "value": "ゆずき りょうか"
        }
      ]
    },
    {
      "characterId": 625,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 625,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 625,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 625,
      "tagId": 4,
      "value": "23AV型"
    },
    {
      "characterId": 625,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 625,
      "tagId": 6,
      "value": "2024-07-18 轻量化复刻：泠誓光庭"
    },
    {
      "characterId": 625,
      "tagId": 7,
      "value": "安济知佳",
      "entries": [
        {
          "value": "安济知佳"
        },
        {
          "value": "あんざい ちか"
        },
        {
          "value": "安済知佳"
        }
      ]
    },
    {
      "characterId": 626,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 626,
      "tagId": 2,
      "value": "北方联合"
    },
    {
      "characterId": 626,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 626,
      "tagId": 4,
      "value": "65型"
    },
    {
      "characterId": 626,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 626,
      "tagId": 6,
      "value": "2025-07-10"
    },
    {
      "characterId": 626,
      "tagId": 7,
      "value": "根本京里",
      "entries": [
        {
          "value": "根本京里"
        },
        {
          "value": "ねもと みやり"
        }
      ]
    },
    {
      "characterId": 627,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 627,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 627,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 627,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 627,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 627,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 627,
      "tagId": 7,
      "value": "雨宫天",
      "entries": [
        {
          "value": "雨宫天"
        },
        {
          "value": "あまみや そら"
        }
      ]
    },
    {
      "characterId": 628,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 628,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 628,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 628,
      "tagId": 4,
      "value": "机敏级"
    },
    {
      "characterId": 628,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 628,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 628,
      "tagId": 7,
      "value": "长谷川明子",
      "entries": [
        {
          "value": "长谷川明子"
        }
      ]
    },
    {
      "characterId": 629,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 629,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 629,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 629,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 629,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 629,
      "tagId": 6,
      "value": "2018-09-14"
    },
    {
      "characterId": 629,
      "tagId": 7,
      "value": "后藤麻衣",
      "entries": [
        {
          "value": "后藤麻衣"
        },
        {
          "value": "ごとう まい"
        },
        {
          "value": "别称"
        }
      ]
    },
    {
      "characterId": 630,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 630,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 630,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 630,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 630,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 630,
      "tagId": 6,
      "value": "2019-06-27 复刻：光与影的鸢尾之华"
    },
    {
      "characterId": 630,
      "tagId": 7,
      "value": "后藤麻衣",
      "entries": [
        {
          "value": "后藤麻衣"
        },
        {
          "value": "ごとう まい"
        },
        {
          "value": "别称"
        }
      ]
    },
    {
      "characterId": 631,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 631,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 631,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 631,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 631,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 631,
      "tagId": 6,
      "value": "2025-08-14 奇渊下的秘密"
    },
    {
      "characterId": 631,
      "tagId": 7,
      "value": "会泽纱弥",
      "entries": [
        {
          "value": "会泽纱弥"
        },
        {
          "value": "会沢紗弥"
        }
      ]
    },
    {
      "characterId": 632,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 632,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 632,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 632,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 632,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 632,
      "tagId": 6,
      "value": "2021-10-21 第十四章-苏里高夜战"
    },
    {
      "characterId": 632,
      "tagId": 7,
      "value": "前田佳织里",
      "entries": [
        {
          "value": "前田佳织里"
        },
        {
          "value": "まえだ かおり"
        },
        {
          "value": "前田佳織里"
        }
      ]
    },
    {
      "characterId": 633,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 633,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 633,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 633,
      "tagId": 4,
      "value": "沃克兰级"
    },
    {
      "characterId": 633,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 633,
      "tagId": 6,
      "value": "2021-10-21 第十四章-苏里高夜战"
    },
    {
      "characterId": 633,
      "tagId": 7,
      "value": "藤井美波",
      "entries": [
        {
          "value": "藤井美波"
        },
        {
          "value": "ふじい みなみ"
        }
      ]
    },
    {
      "characterId": 634,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 634,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 634,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 634,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 634,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 634,
      "tagId": 6,
      "value": "2024-04-25 共鸣的PASSION"
    },
    {
      "characterId": 634,
      "tagId": 7,
      "value": "后藤麻衣",
      "entries": [
        {
          "value": "后藤麻衣"
        },
        {
          "value": "ごとう まい"
        },
        {
          "value": "别称"
        }
      ]
    },
    {
      "characterId": 635,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 635,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 635,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 635,
      "tagId": 4,
      "value": "Émile Bertin"
    },
    {
      "characterId": 635,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 635,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 635,
      "tagId": 7,
      "value": "上田丽奈",
      "entries": [
        {
          "value": "上田丽奈"
        },
        {
          "value": "うえだ れいな"
        }
      ]
    },
    {
      "characterId": 636,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 636,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 636,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 636,
      "tagId": 4,
      "value": "Jeanne d'Arc"
    },
    {
      "characterId": 636,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 636,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 636,
      "tagId": 7,
      "value": "种崎敦美",
      "entries": [
        {
          "value": "种崎敦美"
        }
      ]
    },
    {
      "characterId": 637,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 637,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 637,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 637,
      "tagId": 4,
      "value": "德·格拉斯级"
    },
    {
      "characterId": 637,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 637,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 637,
      "tagId": 7,
      "value": "山根绮",
      "entries": [
        {
          "value": "山根绮"
        },
        {
          "value": "やまねあや"
        },
        {
          "value": "山根綺"
        }
      ]
    },
    {
      "characterId": 638,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 638,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 638,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 638,
      "tagId": 4,
      "value": "迪盖·特鲁因级"
    },
    {
      "characterId": 638,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 638,
      "tagId": 6,
      "value": "2025-08-14 奇渊下的秘密"
    },
    {
      "characterId": 638,
      "tagId": 7,
      "value": "橘茉莉花",
      "entries": [
        {
          "value": "橘茉莉花"
        },
        {
          "value": "たちばな まりか"
        },
        {
          "value": "鈴木毬花"
        }
      ]
    },
    {
      "characterId": 639,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 639,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 639,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 639,
      "tagId": 4,
      "value": "絮弗伦级"
    },
    {
      "characterId": 639,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 639,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 639,
      "tagId": 7,
      "value": "和泉风花",
      "entries": [
        {
          "value": "和泉风花"
        },
        {
          "value": "いずみ ふか"
        },
        {
          "value": "和泉風花"
        }
      ]
    },
    {
      "characterId": 640,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 640,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 640,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 640,
      "tagId": 4,
      "value": "Brennus"
    },
    {
      "characterId": 640,
      "tagId": 5,
      "value": "01:50:00"
    },
    {
      "characterId": 640,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 640,
      "tagId": 7,
      "value": "菊池纱矢香",
      "entries": [
        {
          "value": "菊池纱矢香"
        },
        {
          "value": "きくち さやか"
        },
        {
          "value": "菊池紗矢香"
        }
      ]
    },
    {
      "characterId": 641,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 641,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 641,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 641,
      "tagId": 4,
      "value": "迪凯纳级"
    },
    {
      "characterId": 641,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 641,
      "tagId": 6,
      "value": "2025-08-14 奇渊下的秘密"
    },
    {
      "characterId": 641,
      "tagId": 7,
      "value": "河村梨惠",
      "entries": [
        {
          "value": "河村梨惠"
        },
        {
          "value": "かわむら りえ"
        },
        {
          "value": "河村梨恵"
        }
      ]
    },
    {
      "characterId": 642,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 642,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 642,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 642,
      "tagId": 4,
      "value": "Masséna"
    },
    {
      "characterId": 642,
      "tagId": 5,
      "value": "04:05:00"
    },
    {
      "characterId": 642,
      "tagId": 6,
      "value": "2025-08-14 奇渊下的秘密"
    },
    {
      "characterId": 642,
      "tagId": 7,
      "value": "林鼓子",
      "entries": [
        {
          "value": "林鼓子"
        },
        {
          "value": "はやし ここ"
        }
      ]
    },
    {
      "characterId": 643,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 643,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 643,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 643,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 643,
      "tagId": 5,
      "value": "05:50:00"
    },
    {
      "characterId": 643,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 643,
      "tagId": 7,
      "value": "井上麻里奈",
      "entries": [
        {
          "value": "井上麻里奈"
        },
        {
          "value": "いのうえ まりな"
        }
      ]
    },
    {
      "characterId": 644,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 644,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 644,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 644,
      "tagId": 4,
      "value": "里昂级"
    },
    {
      "characterId": 644,
      "tagId": 5,
      "value": "04:15:00"
    },
    {
      "characterId": 644,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 644,
      "tagId": 7,
      "value": "礒部花凛",
      "entries": [
        {
          "value": "礒部花凛"
        },
        {
          "value": "いそべ かりん"
        },
        {
          "value": "礒部花凜"
        }
      ]
    },
    {
      "characterId": 645,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 645,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 645,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 645,
      "tagId": 4,
      "value": "阿尔萨斯级"
    },
    {
      "characterId": 645,
      "tagId": 5,
      "value": "06:12:20"
    },
    {
      "characterId": 645,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 645,
      "tagId": 7,
      "value": "丰崎爱生",
      "entries": [
        {
          "value": "丰崎爱生"
        },
        {
          "value": "とよさき あき"
        },
        {
          "value": "豊崎愛生"
        }
      ]
    },
    {
      "characterId": 646,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 646,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 646,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 646,
      "tagId": 4,
      "value": "独立级"
    },
    {
      "characterId": 646,
      "tagId": 5,
      "value": "02:06:40"
    },
    {
      "characterId": 646,
      "tagId": 6,
      "value": "2025-08-14 奇渊下的秘密"
    },
    {
      "characterId": 646,
      "tagId": 7,
      "value": "和久井优",
      "entries": [
        {
          "value": "和久井优"
        },
        {
          "value": "わくい ゆう"
        },
        {
          "value": "和久井優"
        }
      ]
    },
    {
      "characterId": 647,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 647,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 647,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 647,
      "tagId": 4,
      "value": "诺曼底级"
    },
    {
      "characterId": 647,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 647,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 647,
      "tagId": 7,
      "value": "高野麻美",
      "entries": [
        {
          "value": "高野麻美"
        },
        {
          "value": "たかの あさみ"
        },
        {
          "value": "髙野麻美"
        }
      ]
    },
    {
      "characterId": 648,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 648,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 648,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 648,
      "tagId": 4,
      "value": "霞飞级"
    },
    {
      "characterId": 648,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 648,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 648,
      "tagId": 7,
      "value": "贯井柚佳",
      "entries": [
        {
          "value": "贯井柚佳"
        },
        {
          "value": "ぬくい ゆか"
        },
        {
          "value": "貫井柚佳"
        }
      ]
    },
    {
      "characterId": 649,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 649,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 649,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 649,
      "tagId": 4,
      "value": "Surcouf"
    },
    {
      "characterId": 649,
      "tagId": 5,
      "value": "00:35:00"
    },
    {
      "characterId": 649,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 649,
      "tagId": 7,
      "value": "沼仓爱美",
      "entries": [
        {
          "value": "沼仓爱美"
        }
      ]
    },
    {
      "characterId": 650,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 650,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 650,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 650,
      "tagId": 4,
      "value": "Saint Louis"
    },
    {
      "characterId": 650,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 650,
      "tagId": 6,
      "value": "2018-04-26 第十二章-马里亚纳风云•上"
    },
    {
      "characterId": 650,
      "tagId": 7,
      "value": "瀬戸麻沙美",
      "entries": [
        {
          "value": "瀬戸麻沙美"
        },
        {
          "value": "せと あさみ"
        }
      ]
    },
    {
      "characterId": 651,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 651,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 651,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 651,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 651,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 651,
      "tagId": 6,
      "value": "2020-07-09"
    },
    {
      "characterId": 651,
      "tagId": 7,
      "value": "りん",
      "entries": [
        {
          "value": "りん"
        }
      ]
    },
    {
      "characterId": 652,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 652,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 652,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 652,
      "tagId": 4,
      "value": "敦刻尔克级"
    },
    {
      "characterId": 652,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 652,
      "tagId": 6,
      "value": "2022-07-14 轻量化复刻：蝶海梦花"
    },
    {
      "characterId": 652,
      "tagId": 7,
      "value": "千本木彩花",
      "entries": [
        {
          "value": "千本木彩花"
        },
        {
          "value": "せんぼんぎ さやか"
        }
      ]
    },
    {
      "characterId": 653,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 653,
      "tagId": 2,
      "value": "自由鸢尾"
    },
    {
      "characterId": 653,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 653,
      "tagId": 4,
      "value": "Bayard"
    },
    {
      "characterId": 653,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 653,
      "tagId": 6,
      "value": "2024-07-18 轻量化复刻：泠誓光庭"
    },
    {
      "characterId": 653,
      "tagId": 7,
      "value": "潘惠美",
      "entries": [
        {
          "value": "潘惠美"
        },
        {
          "value": "潘 めぐみ"
        },
        {
          "value": "はん めぐみ"
        }
      ]
    },
    {
      "characterId": 654,
      "tagId": 1,
      "value": "Rare"
    },
    {
      "characterId": 654,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 654,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 654,
      "tagId": 4,
      "value": "机敏级"
    },
    {
      "characterId": 654,
      "tagId": 5,
      "value": "00:23:00"
    },
    {
      "characterId": 654,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 654,
      "tagId": 7,
      "value": "长谷川明子",
      "entries": [
        {
          "value": "长谷川明子"
        }
      ]
    },
    {
      "characterId": 655,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 655,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 655,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 655,
      "tagId": 4,
      "value": "沃克兰级"
    },
    {
      "characterId": 655,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 655,
      "tagId": 6,
      "value": "2020-05-07"
    },
    {
      "characterId": 655,
      "tagId": 7,
      "value": "幸村惠理",
      "entries": [
        {
          "value": "幸村惠理"
        }
      ]
    },
    {
      "characterId": 656,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 656,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 656,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 656,
      "tagId": 4,
      "value": "沃克兰级"
    },
    {
      "characterId": 656,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 656,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 656,
      "tagId": 7,
      "value": "幸村惠理",
      "entries": [
        {
          "value": "幸村惠理"
        }
      ]
    },
    {
      "characterId": 657,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 657,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 657,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 657,
      "tagId": 4,
      "value": "沃克兰级"
    },
    {
      "characterId": 657,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 657,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 657,
      "tagId": 7,
      "value": "岩桥由佳",
      "entries": [
        {
          "value": "岩桥由佳"
        },
        {
          "value": "いわはし ゆか"
        },
        {
          "value": "岩橋由佳"
        }
      ]
    },
    {
      "characterId": 658,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 658,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 658,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 658,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 658,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 658,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 658,
      "tagId": 7,
      "value": "高岸美里亜",
      "entries": [
        {
          "value": "高岸美里亜"
        },
        {
          "value": "たかぎし みりあ"
        }
      ]
    },
    {
      "characterId": 659,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 659,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 659,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 659,
      "tagId": 4,
      "value": "大胆级"
    },
    {
      "characterId": 659,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 659,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 659,
      "tagId": 7,
      "value": "栗坂南美",
      "entries": [
        {
          "value": "栗坂南美"
        },
        {
          "value": "くりさか みなみ"
        }
      ]
    },
    {
      "characterId": 660,
      "tagId": 1,
      "value": "Ultra Rare"
    },
    {
      "characterId": 660,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 660,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 660,
      "tagId": 4,
      "value": "莫加多尔级"
    },
    {
      "characterId": 660,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 660,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 660,
      "tagId": 7,
      "value": "日野麻里",
      "entries": [
        {
          "value": "日野麻里"
        },
        {
          "value": "日野 まり"
        },
        {
          "value": "ひの まり"
        }
      ]
    },
    {
      "characterId": 661,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 661,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 661,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 661,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 661,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 661,
      "tagId": 6,
      "value": "2019-06-27 复刻：光与影的鸢尾之华"
    },
    {
      "characterId": 661,
      "tagId": 7,
      "value": "白石晴香",
      "entries": [
        {
          "value": "白石晴香"
        }
      ]
    },
    {
      "characterId": 662,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 662,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 662,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 662,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 662,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 662,
      "tagId": 6,
      "value": "2020-10-29"
    },
    {
      "characterId": 662,
      "tagId": 7,
      "value": "白石晴香",
      "entries": [
        {
          "value": "白石晴香"
        }
      ]
    },
    {
      "characterId": 663,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 663,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 663,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 663,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 663,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 663,
      "tagId": 6,
      "value": "2022-06-30"
    },
    {
      "characterId": 663,
      "tagId": 7,
      "value": "辻步美",
      "entries": [
        {
          "value": "辻步美"
        },
        {
          "value": "辻 あゆみ"
        }
      ]
    },
    {
      "characterId": 664,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 664,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 664,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 664,
      "tagId": 4,
      "value": "空想级"
    },
    {
      "characterId": 664,
      "tagId": 5,
      "value": "00:33:00"
    },
    {
      "characterId": 664,
      "tagId": 6,
      "value": "2024-07-25 幻梦间奏曲"
    },
    {
      "characterId": 664,
      "tagId": 7,
      "value": "宫咲明里",
      "entries": [
        {
          "value": "宫咲明里"
        },
        {
          "value": "宮咲 あかり"
        },
        {
          "value": "みやざき あかり"
        }
      ]
    },
    {
      "characterId": 665,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 665,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 665,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 665,
      "tagId": 4,
      "value": "拉·加利索尼埃级"
    },
    {
      "characterId": 665,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 665,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 665,
      "tagId": 7,
      "value": "牧野由依",
      "entries": [
        {
          "value": "牧野由依"
        }
      ]
    },
    {
      "characterId": 666,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 666,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 666,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 666,
      "tagId": 4,
      "value": "拉·加利索尼埃级"
    },
    {
      "characterId": 666,
      "tagId": 5,
      "value": "01:26:00"
    },
    {
      "characterId": 666,
      "tagId": 6,
      "value": "2023-08-03"
    },
    {
      "characterId": 666,
      "tagId": 7,
      "value": "牧野由依",
      "entries": [
        {
          "value": "牧野由依"
        }
      ]
    },
    {
      "characterId": 667,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 667,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 667,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 667,
      "tagId": 4,
      "value": "絮弗伦级"
    },
    {
      "characterId": 667,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 667,
      "tagId": 6,
      "value": "2021-11-11"
    },
    {
      "characterId": 667,
      "tagId": 7,
      "value": "岛田爱野",
      "entries": [
        {
          "value": "岛田爱野"
        },
        {
          "value": "しまだ あいの"
        },
        {
          "value": "島田愛野"
        }
      ]
    },
    {
      "characterId": 668,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 668,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 668,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 668,
      "tagId": 4,
      "value": "Algérie"
    },
    {
      "characterId": 668,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 668,
      "tagId": 6,
      "value": "2020-05-21 穹顶下的圣咏曲"
    },
    {
      "characterId": 668,
      "tagId": 7,
      "value": "伊藤静",
      "entries": [
        {
          "value": "伊藤静"
        }
      ]
    },
    {
      "characterId": 669,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 669,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 669,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 669,
      "tagId": 4,
      "value": "絮弗伦级"
    },
    {
      "characterId": 669,
      "tagId": 5,
      "value": "01:45:00"
    },
    {
      "characterId": 669,
      "tagId": 6,
      "value": "2024-07-25 幻梦间奏曲"
    },
    {
      "characterId": 669,
      "tagId": 7,
      "value": "平山笑美",
      "entries": [
        {
          "value": "平山笑美"
        },
        {
          "value": "ひらやま えみ"
        }
      ]
    },
    {
      "characterId": 670,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 670,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 670,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 670,
      "tagId": 4,
      "value": "敦刻尔克级"
    },
    {
      "characterId": 670,
      "tagId": 5,
      "value": "04:05:00"
    },
    {
      "characterId": 670,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 670,
      "tagId": 7,
      "value": "原田彩枫",
      "entries": [
        {
          "value": "原田彩枫"
        },
        {
          "value": "はらた さやか"
        },
        {
          "value": "原田彩楓"
        }
      ]
    },
    {
      "characterId": 671,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 671,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 671,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 671,
      "tagId": 4,
      "value": "敦刻尔克级"
    },
    {
      "characterId": 671,
      "tagId": 5,
      "value": "04:05:00"
    },
    {
      "characterId": 671,
      "tagId": 6,
      "value": "2024-07-25 幻梦间奏曲"
    },
    {
      "characterId": 671,
      "tagId": 7,
      "value": "长谷川育美",
      "entries": [
        {
          "value": "长谷川育美"
        },
        {
          "value": "はせがわ いくみ"
        },
        {
          "value": "長谷川育美"
        }
      ]
    },
    {
      "characterId": 672,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 672,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 672,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 672,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 672,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 672,
      "tagId": 6,
      "value": "2018-07-26 光与影的鸢尾之华"
    },
    {
      "characterId": 672,
      "tagId": 7,
      "value": "井上麻里奈",
      "entries": [
        {
          "value": "井上麻里奈"
        }
      ]
    },
    {
      "characterId": 673,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 673,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 673,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 673,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 673,
      "tagId": 5,
      "value": "05:50:00"
    },
    {
      "characterId": 673,
      "tagId": 6,
      "value": "2023-08-17 愚者的天平"
    },
    {
      "characterId": 673,
      "tagId": 7,
      "value": "天海由梨奈",
      "entries": [
        {
          "value": "天海由梨奈"
        },
        {
          "value": "あまみ ゆりな"
        }
      ]
    },
    {
      "characterId": 674,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 674,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 674,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 674,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 674,
      "tagId": 5,
      "value": "05:50:00"
    },
    {
      "characterId": 674,
      "tagId": 6,
      "value": "2019-10-31"
    },
    {
      "characterId": 674,
      "tagId": 7,
      "value": "小松未可子",
      "entries": [
        {
          "value": "小松未可子"
        },
        {
          "value": "こまつ みかこ"
        }
      ]
    },
    {
      "characterId": 675,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 675,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 675,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 675,
      "tagId": 4,
      "value": "霞飞级"
    },
    {
      "characterId": 675,
      "tagId": 5,
      "value": "04:35:00"
    },
    {
      "characterId": 675,
      "tagId": 6,
      "value": "2022-06-30"
    },
    {
      "characterId": 675,
      "tagId": 7,
      "value": "真野步",
      "entries": [
        {
          "value": "真野步"
        },
        {
          "value": "真野 あゆみ"
        }
      ]
    },
    {
      "characterId": 676,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 676,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 676,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 676,
      "tagId": 4,
      "value": "黎塞留级"
    },
    {
      "characterId": 676,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 676,
      "tagId": 6,
      "value": "2019-04-18"
    },
    {
      "characterId": 676,
      "tagId": 7,
      "value": "小松未可子",
      "entries": [
        {
          "value": "小松未可子"
        },
        {
          "value": "こまつ みかこ"
        }
      ]
    },
    {
      "characterId": 677,
      "tagId": 1,
      "value": "Priority"
    },
    {
      "characterId": 677,
      "tagId": 2,
      "value": "维希教廷"
    },
    {
      "characterId": 677,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 677,
      "tagId": 4,
      "value": "阿尔萨斯级"
    },
    {
      "characterId": 677,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 677,
      "tagId": 6,
      "value": "2023-07-13"
    },
    {
      "characterId": 677,
      "tagId": 7,
      "value": "Kyouka Moriya",
      "entries": [
        {
          "value": "Kyouka Moriya"
        }
      ]
    },
    {
      "characterId": 678,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 678,
      "tagId": 2,
      "value": "郁金王国"
    },
    {
      "characterId": 678,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 678,
      "tagId": 4,
      "value": "海军上将级"
    },
    {
      "characterId": 678,
      "tagId": 5,
      "value": "00:26:00"
    },
    {
      "characterId": 678,
      "tagId": 6,
      "value": "2025-04-24 扬起郁金之旗"
    },
    {
      "characterId": 678,
      "tagId": 7,
      "value": "三川华月",
      "entries": [
        {
          "value": "三川华月"
        },
        {
          "value": "みかわ はるな"
        },
        {
          "value": "三川華月"
        }
      ]
    },
    {
      "characterId": 679,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 679,
      "tagId": 2,
      "value": "郁金王国"
    },
    {
      "characterId": 679,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 679,
      "tagId": 4,
      "value": "七省级"
    },
    {
      "characterId": 679,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 679,
      "tagId": 6,
      "value": "2025-04-24 扬起郁金之旗"
    },
    {
      "characterId": 679,
      "tagId": 7,
      "value": "花岩香奈",
      "entries": [
        {
          "value": "花岩香奈"
        },
        {
          "value": "ハナイワ カナ"
        }
      ]
    },
    {
      "characterId": 680,
      "tagId": 1,
      "value": "Decisive"
    },
    {
      "characterId": 680,
      "tagId": 2,
      "value": "郁金王国"
    },
    {
      "characterId": 680,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 680,
      "tagId": 4,
      "value": "Gouden Leeuw"
    },
    {
      "characterId": 680,
      "tagId": 5,
      "value": "科研"
    },
    {
      "characterId": 680,
      "tagId": 6,
      "value": "2025-07-10"
    },
    {
      "characterId": 680,
      "tagId": 7,
      "value": "井上喜久子",
      "entries": [
        {
          "value": "井上喜久子"
        },
        {
          "value": "いのうえ きくこ"
        }
      ]
    },
    {
      "characterId": 681,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 681,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 681,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 681,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 681,
      "tagId": 5,
      "value": "01:08:20"
    },
    {
      "characterId": 681,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 681,
      "tagId": 7,
      "value": "井上麻里奈",
      "entries": [
        {
          "value": "井上麻里奈"
        },
        {
          "value": "いのうえ まりな"
        }
      ]
    },
    {
      "characterId": 682,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 682,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 682,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 682,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 682,
      "tagId": 5,
      "value": "02:13:50"
    },
    {
      "characterId": 682,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 682,
      "tagId": 7,
      "value": "富樫美铃",
      "entries": [
        {
          "value": "富樫美铃"
        },
        {
          "value": "とがし みすず"
        },
        {
          "value": "富樫美鈴"
        }
      ]
    },
    {
      "characterId": 683,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 683,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 683,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 683,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 683,
      "tagId": 5,
      "value": "03:05:10"
    },
    {
      "characterId": 683,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 683,
      "tagId": 7,
      "value": "竹达彩奈",
      "entries": [
        {
          "value": "竹达彩奈"
        },
        {
          "value": "たけたつ あやな"
        },
        {
          "value": "竹達彩奈"
        }
      ]
    },
    {
      "characterId": 684,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 684,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 684,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 684,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 684,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 684,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 684,
      "tagId": 7,
      "value": "野水伊织",
      "entries": [
        {
          "value": "野水伊织"
        },
        {
          "value": "のみず いおり"
        },
        {
          "value": "野水伊織"
        }
      ]
    },
    {
      "characterId": 685,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 685,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 685,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 685,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 685,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 685,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 685,
      "tagId": 7,
      "value": "真田麻美",
      "entries": [
        {
          "value": "真田麻美"
        },
        {
          "value": "真田 アサミ"
        },
        {
          "value": "さなだ あさみ"
        }
      ]
    },
    {
      "characterId": 686,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 686,
      "tagId": 2,
      "value": "DateALiveV"
    },
    {
      "characterId": 686,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 686,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 686,
      "tagId": 5,
      "value": "02:05:40"
    },
    {
      "characterId": 686,
      "tagId": 6,
      "value": "2025-11-20 DATE A LANE"
    },
    {
      "characterId": 686,
      "tagId": 7,
      "value": "内田真礼",
      "entries": [
        {
          "value": "内田真礼"
        },
        {
          "value": "内田 真礼 うちだ まあや"
        },
        {
          "value": "布里德卡特·塞拉·惠美"
        }
      ]
    },
    {
      "characterId": 687,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 687,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 687,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 687,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 687,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 687,
      "tagId": 6,
      "value": "2022-10-27"
    },
    {
      "characterId": 687,
      "tagId": 7,
      "value": "田中",
      "entries": [
        {
          "value": "田中"
        },
        {
          "value": "あいみ"
        }
      ]
    },
    {
      "characterId": 688,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 688,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 688,
      "tagId": 3,
      "value": "风帆M"
    },
    {
      "characterId": 688,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 688,
      "tagId": 5,
      "value": "04:26:21"
    },
    {
      "characterId": 688,
      "tagId": 6,
      "value": "2023-10-26 飓风与青春之泉"
    },
    {
      "characterId": 688,
      "tagId": 7,
      "value": "仓持若菜",
      "entries": [
        {
          "value": "仓持若菜"
        },
        {
          "value": "くらもち わかな"
        },
        {
          "value": "倉持若菜"
        }
      ]
    },
    {
      "characterId": 689,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 689,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 689,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 689,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 689,
      "tagId": 5,
      "value": "01:26:18"
    },
    {
      "characterId": 689,
      "tagId": 6,
      "value": "2023-10-26 飓风与青春之泉"
    },
    {
      "characterId": 689,
      "tagId": 7,
      "value": "陽向葵",
      "entries": [
        {
          "value": "陽向葵"
        },
        {
          "value": "ひなた ゅか"
        }
      ]
    },
    {
      "characterId": 690,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 690,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 690,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 690,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 690,
      "tagId": 5,
      "value": "00:31:01"
    },
    {
      "characterId": 690,
      "tagId": 6,
      "value": "2023-10-26 飓风与青春之泉"
    },
    {
      "characterId": 690,
      "tagId": 7,
      "value": "佐藤日向",
      "entries": [
        {
          "value": "佐藤日向"
        },
        {
          "value": "さとう ひなた"
        }
      ]
    },
    {
      "characterId": 691,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 691,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 691,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 691,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 691,
      "tagId": 5,
      "value": "00:28:36"
    },
    {
      "characterId": 691,
      "tagId": 6,
      "value": "2023-10-26 飓风与青春之泉"
    },
    {
      "characterId": 691,
      "tagId": 7,
      "value": "川口莉奈",
      "entries": [
        {
          "value": "川口莉奈"
        },
        {
          "value": "かわぐち りな"
        }
      ]
    },
    {
      "characterId": 692,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 692,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 692,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 692,
      "tagId": 4,
      "value": "Adventure Galley"
    },
    {
      "characterId": 692,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 692,
      "tagId": 6,
      "value": "2023-10-26 飓风与青春之泉"
    },
    {
      "characterId": 692,
      "tagId": 7,
      "value": "叶山郁美",
      "entries": [
        {
          "value": "叶山郁美"
        },
        {
          "value": "葉山 いくみ"
        },
        {
          "value": "はやま いくみ"
        }
      ]
    },
    {
      "characterId": 693,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 693,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 693,
      "tagId": 3,
      "value": "风帆M"
    },
    {
      "characterId": 693,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 693,
      "tagId": 5,
      "value": "04:42:30"
    },
    {
      "characterId": 693,
      "tagId": 6,
      "value": "2024-10-24 飓风与沉眠之海"
    },
    {
      "characterId": 693,
      "tagId": 7,
      "value": "德井青空",
      "entries": [
        {
          "value": "德井青空"
        },
        {
          "value": "とくい そら"
        },
        {
          "value": "徳井青空"
        }
      ]
    },
    {
      "characterId": 694,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 694,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 694,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 694,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 694,
      "tagId": 5,
      "value": "01:39:21"
    },
    {
      "characterId": 694,
      "tagId": 6,
      "value": "2024-10-24 飓风与沉眠之海"
    },
    {
      "characterId": 694,
      "tagId": 7,
      "value": "柚木燕",
      "entries": [
        {
          "value": "柚木燕"
        },
        {
          "value": "柚木 つばめ"
        }
      ]
    },
    {
      "characterId": 695,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 695,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 695,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 695,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 695,
      "tagId": 5,
      "value": "00:28:13"
    },
    {
      "characterId": 695,
      "tagId": 6,
      "value": "2024-10-24 飓风与沉眠之海"
    },
    {
      "characterId": 695,
      "tagId": 7,
      "value": "稻垣好",
      "entries": [
        {
          "value": "稻垣好"
        },
        {
          "value": "いながき このみ"
        },
        {
          "value": "稲垣好"
        }
      ]
    },
    {
      "characterId": 696,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 696,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 696,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 696,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 696,
      "tagId": 5,
      "value": "00:28:14"
    },
    {
      "characterId": 696,
      "tagId": 6,
      "value": "2024-10-24 飓风与沉眠之海"
    },
    {
      "characterId": 696,
      "tagId": 7,
      "value": "十二稜子",
      "entries": [
        {
          "value": "十二稜子"
        },
        {
          "value": "じゅうに りょうこ"
        }
      ]
    },
    {
      "characterId": 697,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 697,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 697,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 697,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 697,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 697,
      "tagId": 6,
      "value": "2024-10-24 飓风与沉眠之海"
    },
    {
      "characterId": 697,
      "tagId": 7,
      "value": "汐入明日香",
      "entries": [
        {
          "value": "汐入明日香"
        },
        {
          "value": "汐入 あすか"
        },
        {
          "value": "しおいり あすか"
        }
      ]
    },
    {
      "characterId": 698,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 698,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 698,
      "tagId": 3,
      "value": "风帆M"
    },
    {
      "characterId": 698,
      "tagId": 4,
      "value": "Queen Anne's Revenge"
    },
    {
      "characterId": 698,
      "tagId": 5,
      "value": "04:46:10"
    },
    {
      "characterId": 698,
      "tagId": 6,
      "value": "2025-10-23 飓风与自由群岛"
    },
    {
      "characterId": 698,
      "tagId": 7,
      "value": "天知遥",
      "entries": [
        {
          "value": "天知遥"
        },
        {
          "value": "あまち はる"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 699,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 699,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 699,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 699,
      "tagId": 4,
      "value": "Lyme"
    },
    {
      "characterId": 699,
      "tagId": 5,
      "value": "00:28:14"
    },
    {
      "characterId": 699,
      "tagId": 6,
      "value": "2025-10-23 飓风与自由群岛"
    },
    {
      "characterId": 699,
      "tagId": 7,
      "value": "矢野优美华",
      "entries": [
        {
          "value": "矢野优美华"
        },
        {
          "value": "やの ゆみか"
        },
        {
          "value": "矢野優美華"
        }
      ]
    },
    {
      "characterId": 700,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 700,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 700,
      "tagId": 3,
      "value": "风帆M"
    },
    {
      "characterId": 700,
      "tagId": 4,
      "value": "Pearl"
    },
    {
      "characterId": 700,
      "tagId": 5,
      "value": "04:46:02"
    },
    {
      "characterId": 700,
      "tagId": 6,
      "value": "2025-10-23 飓风与自由群岛"
    },
    {
      "characterId": 700,
      "tagId": 7,
      "value": "逢坂成美",
      "entries": [
        {
          "value": "逢坂成美"
        },
        {
          "value": "あいさか なるみ"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 701,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 701,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 701,
      "tagId": 3,
      "value": "风帆V"
    },
    {
      "characterId": 701,
      "tagId": 4,
      "value": "Royal James"
    },
    {
      "characterId": 701,
      "tagId": 5,
      "value": "00:28:37"
    },
    {
      "characterId": 701,
      "tagId": 6,
      "value": "2025-10-23 飓风与自由群岛"
    },
    {
      "characterId": 701,
      "tagId": 7,
      "value": "小泽丽那",
      "entries": [
        {
          "value": "小泽丽那"
        },
        {
          "value": "おざわ れな"
        },
        {
          "value": "小澤麗那"
        }
      ]
    },
    {
      "characterId": 702,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 702,
      "tagId": 2,
      "value": "飓风"
    },
    {
      "characterId": 702,
      "tagId": 3,
      "value": "风帆S"
    },
    {
      "characterId": 702,
      "tagId": 4,
      "value": "Adventure"
    },
    {
      "characterId": 702,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 702,
      "tagId": 6,
      "value": "2025-10-23 飓风与自由群岛"
    },
    {
      "characterId": 702,
      "tagId": 7,
      "value": "山田美铃",
      "entries": [
        {
          "value": "山田美铃"
        },
        {
          "value": "やまだ みすず"
        },
        {
          "value": "山田美鈴"
        }
      ]
    },
    {
      "characterId": 703,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 703,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 703,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 703,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 703,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 703,
      "tagId": 6,
      "value": "2022-10-01"
    },
    {
      "characterId": 703,
      "tagId": 7,
      "value": "七濑彩夏",
      "entries": [
        {
          "value": "七濑彩夏"
        },
        {
          "value": "ななせ あやか"
        },
        {
          "value": "七瀬彩夏"
        }
      ]
    },
    {
      "characterId": 704,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 704,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 704,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 704,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 704,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 704,
      "tagId": 6,
      "value": "2022-12-01"
    },
    {
      "characterId": 704,
      "tagId": 7,
      "value": "后藤邑子",
      "entries": [
        {
          "value": "后藤邑子"
        },
        {
          "value": "ごとう ゆうこ"
        },
        {
          "value": "後藤邑子"
        }
      ]
    },
    {
      "characterId": 705,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 705,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 705,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 705,
      "tagId": 4,
      "value": "Smoldering Core"
    },
    {
      "characterId": 705,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 705,
      "tagId": 6,
      "value": "2023-08-01"
    },
    {
      "characterId": 705,
      "tagId": 7,
      "value": "朝日奈丸佳",
      "entries": [
        {
          "value": "朝日奈丸佳"
        },
        {
          "value": "あさひな まどか"
        }
      ]
    },
    {
      "characterId": 706,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 706,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 706,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 706,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 706,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 706,
      "tagId": 6,
      "value": "2024-02-01"
    },
    {
      "characterId": 706,
      "tagId": 7,
      "value": "诸星堇",
      "entries": [
        {
          "value": "诸星堇"
        },
        {
          "value": "諸星 すみれ"
        },
        {
          "value": "もろほし すみれ"
        }
      ]
    },
    {
      "characterId": 707,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 707,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 707,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 707,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 707,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 707,
      "tagId": 6,
      "value": "2024-04-01"
    },
    {
      "characterId": 707,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "钉宫 理惠 くぎみや りえ"
        }
      ]
    },
    {
      "characterId": 708,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 708,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 708,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 708,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 708,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 708,
      "tagId": 6,
      "value": "2024-07-25 幻梦间奏曲"
    },
    {
      "characterId": 708,
      "tagId": 7,
      "value": "武田真理子",
      "entries": [
        {
          "value": "武田真理子"
        },
        {
          "value": "たけだ まりこ"
        }
      ]
    },
    {
      "characterId": 709,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 709,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 709,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 709,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 709,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 709,
      "tagId": 6,
      "value": "2025-06-01"
    },
    {
      "characterId": 709,
      "tagId": 7,
      "value": "木村珠莉",
      "entries": [
        {
          "value": "木村珠莉"
        },
        {
          "value": "きむら じゅり"
        }
      ]
    },
    {
      "characterId": 710,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 710,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 710,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 710,
      "tagId": 4,
      "value": "Smoldering Core"
    },
    {
      "characterId": 710,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 710,
      "tagId": 6,
      "value": "2025-06-05"
    },
    {
      "characterId": 710,
      "tagId": 7,
      "value": "井口裕香",
      "entries": [
        {
          "value": "井口裕香"
        },
        {
          "value": "いぐち ゆか"
        }
      ]
    },
    {
      "characterId": 711,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 711,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 711,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 711,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 711,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 711,
      "tagId": 6,
      "value": "2025-09-04"
    },
    {
      "characterId": 711,
      "tagId": 7,
      "value": "高森奈津美",
      "entries": [
        {
          "value": "高森奈津美"
        },
        {
          "value": "たかもり なつみ"
        }
      ]
    },
    {
      "characterId": 712,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 712,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 712,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 712,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 712,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 712,
      "tagId": 6,
      "value": "2025-10-01"
    },
    {
      "characterId": 712,
      "tagId": 7,
      "value": "Miyuri Shimabukuro",
      "entries": [
        {
          "value": "Miyuri Shimabukuro"
        }
      ]
    },
    {
      "characterId": 713,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 713,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 713,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 713,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 713,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 713,
      "tagId": 6,
      "value": "2021-06-10"
    },
    {
      "characterId": 713,
      "tagId": 7,
      "value": "中条智世",
      "entries": [
        {
          "value": "中条智世"
        },
        {
          "value": "ちゅうじょう ともよ"
        }
      ]
    },
    {
      "characterId": 714,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 714,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 714,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 714,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 714,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 714,
      "tagId": 6,
      "value": "2022-05-26 泠誓光庭"
    },
    {
      "characterId": 714,
      "tagId": 7,
      "value": "椎名",
      "entries": [
        {
          "value": "椎名"
        },
        {
          "value": "公式"
        },
        {
          "value": "へきる"
        }
      ]
    },
    {
      "characterId": 715,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 715,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 715,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 715,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 715,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 715,
      "tagId": 6,
      "value": "2023-02-01"
    },
    {
      "characterId": 715,
      "tagId": 7,
      "value": "Konomi Kohara",
      "entries": [
        {
          "value": "Konomi Kohara"
        }
      ]
    },
    {
      "characterId": 716,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 716,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 716,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 716,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 716,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 716,
      "tagId": 6,
      "value": "2023-04-01"
    },
    {
      "characterId": 716,
      "tagId": 7,
      "value": "牧野由依",
      "entries": [
        {
          "value": "牧野由依"
        }
      ]
    },
    {
      "characterId": 717,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 717,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 717,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 717,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 717,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 717,
      "tagId": 6,
      "value": "2023-08-31"
    },
    {
      "characterId": 717,
      "tagId": 7,
      "value": "金元寿子",
      "entries": [
        {
          "value": "金元寿子"
        },
        {
          "value": "かねもと ひさこ"
        }
      ]
    },
    {
      "characterId": 718,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 718,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 718,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 718,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 718,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 718,
      "tagId": 6,
      "value": "2023-12-07"
    },
    {
      "characterId": 718,
      "tagId": 7,
      "value": "上坂",
      "entries": [
        {
          "value": "上坂"
        },
        {
          "value": "すみれ"
        }
      ]
    },
    {
      "characterId": 719,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 719,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 719,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 719,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 719,
      "tagId": 5,
      "value": "01:17:00"
    },
    {
      "characterId": 719,
      "tagId": 6,
      "value": "2024-02-29 雪境迷踪"
    },
    {
      "characterId": 719,
      "tagId": 7,
      "value": "吉岡麻耶",
      "entries": [
        {
          "value": "吉岡麻耶"
        }
      ]
    },
    {
      "characterId": 720,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 720,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 720,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 720,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 720,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 720,
      "tagId": 6,
      "value": "2025-12-01"
    },
    {
      "characterId": 720,
      "tagId": 7,
      "value": "筱原侑",
      "entries": [
        {
          "value": "筱原侑"
        },
        {
          "value": "ささは ゆう"
        },
        {
          "value": "篠原侑"
        }
      ]
    },
    {
      "characterId": 721,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 721,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 721,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 721,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 721,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 721,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 721,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 722,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 722,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 722,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 722,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 722,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 722,
      "tagId": 6,
      "value": "2022-07-28 雄鹰的叙事歌"
    },
    {
      "characterId": 722,
      "tagId": 7,
      "value": "中村樱",
      "entries": [
        {
          "value": "中村樱"
        },
        {
          "value": "なかむら さくら"
        },
        {
          "value": "中村桜"
        }
      ]
    },
    {
      "characterId": 723,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 723,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 723,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 723,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 723,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 723,
      "tagId": 6,
      "value": "2023-06-08"
    },
    {
      "characterId": 723,
      "tagId": 7,
      "value": "Shizuka Itou",
      "entries": [
        {
          "value": "Shizuka Itou"
        }
      ]
    },
    {
      "characterId": 724,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 724,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 724,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 724,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 724,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 724,
      "tagId": 6,
      "value": "2024-06-01"
    },
    {
      "characterId": 724,
      "tagId": 7,
      "value": "Aino Shimada",
      "entries": [
        {
          "value": "Aino Shimada"
        }
      ]
    },
    {
      "characterId": 725,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 725,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 725,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 725,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 725,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 725,
      "tagId": 6,
      "value": "2024-06-20 轻量化复刻：虹彩的终幕曲"
    },
    {
      "characterId": 725,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 726,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 726,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 726,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 726,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 726,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 726,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 726,
      "tagId": 7,
      "value": "山冈百合",
      "entries": [
        {
          "value": "山冈百合"
        },
        {
          "value": "山岡 ゆり"
        },
        {
          "value": "やまおか ゆり"
        }
      ]
    },
    {
      "characterId": 727,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 727,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 727,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 727,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 727,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 727,
      "tagId": 6,
      "value": "2025-02-06 轻量化复刻：远汇点作战"
    },
    {
      "characterId": 727,
      "tagId": 7,
      "value": "前川涼子",
      "entries": [
        {
          "value": "前川涼子"
        },
        {
          "value": "まえかわ りょうこ"
        }
      ]
    },
    {
      "characterId": 728,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 728,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 728,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 728,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 728,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 728,
      "tagId": 6,
      "value": "2021-12-09 大型作战"
    },
    {
      "characterId": 728,
      "tagId": 7,
      "value": "篠田南",
      "entries": [
        {
          "value": "篠田南"
        },
        {
          "value": "しのだ みなみ"
        }
      ]
    },
    {
      "characterId": 729,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 729,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 729,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 729,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 729,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 729,
      "tagId": 6,
      "value": "2022-03-10"
    },
    {
      "characterId": 729,
      "tagId": 7,
      "value": "福原绫香",
      "entries": [
        {
          "value": "福原绫香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 730,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 730,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 730,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 730,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 730,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 730,
      "tagId": 6,
      "value": "2022-06-09"
    },
    {
      "characterId": 730,
      "tagId": 7,
      "value": "野方小春",
      "entries": [
        {
          "value": "野方小春"
        },
        {
          "value": "のがた こはる"
        }
      ]
    },
    {
      "characterId": 731,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 731,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 731,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 731,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 731,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 731,
      "tagId": 6,
      "value": "2022-09-01"
    },
    {
      "characterId": 731,
      "tagId": 7,
      "value": "川澄绫子",
      "entries": [
        {
          "value": "川澄绫子"
        },
        {
          "value": "かわすみ あやこ"
        }
      ]
    },
    {
      "characterId": 732,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 732,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 732,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 732,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 732,
      "tagId": 5,
      "value": "04:10:00"
    },
    {
      "characterId": 732,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 732,
      "tagId": 7,
      "value": "喜多村英梨",
      "entries": [
        {
          "value": "喜多村英梨"
        },
        {
          "value": "きたむら えり"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 733,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 733,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 733,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 733,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 733,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 733,
      "tagId": 6,
      "value": "2025-08-01"
    },
    {
      "characterId": 733,
      "tagId": 7,
      "value": "原田彩枫",
      "entries": [
        {
          "value": "原田彩枫"
        },
        {
          "value": "はらた さやか"
        },
        {
          "value": "原田彩楓"
        }
      ]
    },
    {
      "characterId": 734,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 734,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 734,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 734,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 734,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 734,
      "tagId": 6,
      "value": "2021-10-01"
    },
    {
      "characterId": 734,
      "tagId": 7,
      "value": "小清水亚美",
      "entries": [
        {
          "value": "小清水亚美"
        },
        {
          "value": "こしみず あみ"
        },
        {
          "value": "小清水亜美"
        }
      ]
    },
    {
      "characterId": 735,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 735,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 735,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 735,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 735,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 735,
      "tagId": 6,
      "value": "2022-04-01"
    },
    {
      "characterId": 735,
      "tagId": 7,
      "value": "小清水亚美",
      "entries": [
        {
          "value": "小清水亚美"
        },
        {
          "value": "こしみず あみ"
        },
        {
          "value": "小清水亜美"
        }
      ]
    },
    {
      "characterId": 736,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 736,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 736,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 736,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 736,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 736,
      "tagId": 6,
      "value": "2022-12-08"
    },
    {
      "characterId": 736,
      "tagId": 7,
      "value": "白壁爽子",
      "entries": [
        {
          "value": "白壁爽子"
        },
        {
          "value": "しらかべ さわこ"
        }
      ]
    },
    {
      "characterId": 737,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 737,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 737,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 737,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 737,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 737,
      "tagId": 6,
      "value": "2023-03-09 轻量化复刻：复兴的赞美诗"
    },
    {
      "characterId": 737,
      "tagId": 7,
      "value": "上坂堇",
      "entries": [
        {
          "value": "上坂堇"
        }
      ]
    },
    {
      "characterId": 738,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 738,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 738,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 738,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 738,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 738,
      "tagId": 6,
      "value": "2024-03-14 轻量化复刻：虚像构筑之塔·序章"
    },
    {
      "characterId": 738,
      "tagId": 7,
      "value": "大地叶",
      "entries": [
        {
          "value": "大地叶"
        },
        {
          "value": "たいち よう"
        }
      ]
    },
    {
      "characterId": 739,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 739,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 739,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 739,
      "tagId": 4,
      "value": "Smoldering Core"
    },
    {
      "characterId": 739,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 739,
      "tagId": 6,
      "value": "2024-09-12 唤醒苍红之炎"
    },
    {
      "characterId": 739,
      "tagId": 7,
      "value": "久野美咲",
      "entries": [
        {
          "value": "久野美咲"
        },
        {
          "value": "くの みさき"
        },
        {
          "value": "大泽"
        }
      ]
    },
    {
      "characterId": 740,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 740,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 740,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 740,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 740,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 740,
      "tagId": 6,
      "value": "2024-12-01"
    },
    {
      "characterId": 740,
      "tagId": 7,
      "value": "清水彩香",
      "entries": [
        {
          "value": "清水彩香"
        }
      ]
    },
    {
      "characterId": 741,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 741,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 741,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 741,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 741,
      "tagId": 5,
      "value": "04:15:00"
    },
    {
      "characterId": 741,
      "tagId": 6,
      "value": "2025-02-27 樊笼内的神光"
    },
    {
      "characterId": 741,
      "tagId": 7,
      "value": "富士原晴乃",
      "entries": [
        {
          "value": "富士原晴乃"
        },
        {
          "value": "ふじわら はるの"
        }
      ]
    },
    {
      "characterId": 742,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 742,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 742,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 742,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 742,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 742,
      "tagId": 6,
      "value": "2025-03-27 深谷来信"
    },
    {
      "characterId": 742,
      "tagId": 7,
      "value": "内山夕实",
      "entries": [
        {
          "value": "内山夕实"
        },
        {
          "value": "うちやま ゆみ"
        },
        {
          "value": "内山夕実"
        }
      ]
    },
    {
      "characterId": 743,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 743,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 743,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 743,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 743,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 743,
      "tagId": 6,
      "value": "2021-12-01"
    },
    {
      "characterId": 743,
      "tagId": 7,
      "value": "吉田圣子",
      "entries": [
        {
          "value": "吉田圣子"
        },
        {
          "value": "よしだ せいこ"
        },
        {
          "value": "吉田聖子"
        }
      ]
    },
    {
      "characterId": 744,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 744,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 744,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 744,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 744,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 744,
      "tagId": 6,
      "value": "2022-02-01"
    },
    {
      "characterId": 744,
      "tagId": 7,
      "value": "吉田圣子",
      "entries": [
        {
          "value": "吉田圣子"
        },
        {
          "value": "よしだ せいこ"
        },
        {
          "value": "吉田聖子"
        }
      ]
    },
    {
      "characterId": 745,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 745,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 745,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 745,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 745,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 745,
      "tagId": 6,
      "value": "2023-10-01"
    },
    {
      "characterId": 745,
      "tagId": 7,
      "value": "汐見雪菜",
      "entries": [
        {
          "value": "汐見雪菜"
        }
      ]
    },
    {
      "characterId": 746,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 746,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 746,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 746,
      "tagId": 4,
      "value": "Smoldering Core"
    },
    {
      "characterId": 746,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 746,
      "tagId": 6,
      "value": "2024-10-01"
    },
    {
      "characterId": 746,
      "tagId": 7,
      "value": "Chiaki Takahashi",
      "entries": [
        {
          "value": "Chiaki Takahashi"
        }
      ]
    },
    {
      "characterId": 747,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 747,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 747,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 747,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 747,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 747,
      "tagId": 6,
      "value": "2020-12-22 大型作战"
    },
    {
      "characterId": 747,
      "tagId": 7,
      "value": "石上静香",
      "entries": [
        {
          "value": "石上静香"
        },
        {
          "value": "いしがみ しずか"
        }
      ]
    },
    {
      "characterId": 748,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 748,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 748,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 748,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 748,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 748,
      "tagId": 6,
      "value": "2021-03-25 复刻：箱庭疗法"
    },
    {
      "characterId": 748,
      "tagId": 7,
      "value": "伊藤明日香",
      "entries": [
        {
          "value": "伊藤明日香"
        },
        {
          "value": "伊藤 あすか"
        },
        {
          "value": "爱称"
        }
      ]
    },
    {
      "characterId": 749,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 749,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 749,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 749,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 749,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 749,
      "tagId": 6,
      "value": "2021-09-16 碧海光粼"
    },
    {
      "characterId": 749,
      "tagId": 7,
      "value": "御手洗果林",
      "entries": [
        {
          "value": "御手洗果林"
        },
        {
          "value": "御手洗 かりん"
        },
        {
          "value": "みたらい かりん"
        }
      ]
    },
    {
      "characterId": 750,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 750,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 750,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 750,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 750,
      "tagId": 5,
      "value": "02:00:00"
    },
    {
      "characterId": 750,
      "tagId": 6,
      "value": "2024-05-21 绽放于辉光之城"
    },
    {
      "characterId": 750,
      "tagId": 7,
      "value": "高野麻美",
      "entries": [
        {
          "value": "高野麻美"
        },
        {
          "value": "たかの あさみ"
        },
        {
          "value": "髙野麻美"
        }
      ]
    },
    {
      "characterId": 751,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 751,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 751,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 751,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 751,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 751,
      "tagId": 6,
      "value": "2024-12-19 星光下的余晖"
    },
    {
      "characterId": 751,
      "tagId": 7,
      "value": "悠木碧",
      "entries": [
        {
          "value": "悠木碧"
        },
        {
          "value": "ゆうき あおい"
        },
        {
          "value": "八武"
        }
      ]
    },
    {
      "characterId": 752,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 752,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 752,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 752,
      "tagId": 4,
      "value": "Ashen Might"
    },
    {
      "characterId": 752,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 752,
      "tagId": 6,
      "value": "2025-03-20 轻量化复刻：湮烬尘墟"
    },
    {
      "characterId": 752,
      "tagId": 7,
      "value": "山本希望",
      "entries": [
        {
          "value": "山本希望"
        },
        {
          "value": "やまもと のぞみ"
        }
      ]
    },
    {
      "characterId": 753,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 753,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 753,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 753,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 753,
      "tagId": 5,
      "value": "03:50:00"
    },
    {
      "characterId": 753,
      "tagId": 6,
      "value": "2025-05-20 高塔上的蔷薇"
    },
    {
      "characterId": 753,
      "tagId": 7,
      "value": "下屋则子",
      "entries": [
        {
          "value": "下屋则子"
        },
        {
          "value": "したや のりこ"
        }
      ]
    },
    {
      "characterId": 754,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 754,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 754,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 754,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 754,
      "tagId": 5,
      "value": "META 作战"
    },
    {
      "characterId": 754,
      "tagId": 6,
      "value": "2025-12-18 响彻于天穹之音"
    },
    {
      "characterId": 754,
      "tagId": 7,
      "value": "优木加奈",
      "entries": [
        {
          "value": "优木加奈"
        },
        {
          "value": "優木 かな"
        },
        {
          "value": "ゆうき かな"
        }
      ]
    },
    {
      "characterId": 755,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 755,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 755,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 755,
      "tagId": 4,
      "value": "Flickering Light"
    },
    {
      "characterId": 755,
      "tagId": 5,
      "value": "00:13:00"
    },
    {
      "characterId": 755,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 755,
      "tagId": 7,
      "value": "福原綾香",
      "entries": [
        {
          "value": "福原綾香"
        },
        {
          "value": "ふくはら あやか"
        }
      ]
    },
    {
      "characterId": 756,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 756,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 756,
      "tagId": 3,
      "value": "维修"
    },
    {
      "characterId": 756,
      "tagId": 4,
      "value": "Framework of Logic"
    },
    {
      "characterId": 756,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 756,
      "tagId": 6,
      "value": "2023-05-25 空相交汇点"
    },
    {
      "characterId": 756,
      "tagId": 7,
      "value": "香月遥",
      "entries": [
        {
          "value": "香月遥"
        },
        {
          "value": "香月 はるか"
        }
      ]
    },
    {
      "characterId": 757,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 757,
      "tagId": 2,
      "value": "META-???"
    },
    {
      "characterId": 757,
      "tagId": 3,
      "value": "重炮"
    },
    {
      "characterId": 757,
      "tagId": 4,
      "value": "Cinders of Hope"
    },
    {
      "characterId": 757,
      "tagId": 5,
      "value": "巡游"
    },
    {
      "characterId": 757,
      "tagId": 6,
      "value": "2023-12-01"
    },
    {
      "characterId": 757,
      "tagId": 7,
      "value": "堀笼沙耶",
      "entries": [
        {
          "value": "堀笼沙耶"
        },
        {
          "value": "ほりごめ さや"
        }
      ]
    },
    {
      "characterId": 758,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 758,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 758,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 758,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 758,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 758,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 758,
      "tagId": 7,
      "value": "田中理惠",
      "entries": [
        {
          "value": "田中理惠"
        },
        {
          "value": "たなか りえ"
        }
      ]
    },
    {
      "characterId": 759,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 759,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 759,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 759,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 759,
      "tagId": 5,
      "value": "02:38:00"
    },
    {
      "characterId": 759,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 759,
      "tagId": 7,
      "value": "今井麻美",
      "entries": [
        {
          "value": "今井麻美"
        }
      ]
    },
    {
      "characterId": 760,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 760,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 760,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 760,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 760,
      "tagId": 5,
      "value": "02:24:00"
    },
    {
      "characterId": 760,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 760,
      "tagId": 7,
      "value": "阿澄佳奈",
      "entries": [
        {
          "value": "阿澄佳奈"
        },
        {
          "value": "あすみ かな"
        }
      ]
    },
    {
      "characterId": 761,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 761,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 761,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 761,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 761,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 761,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 761,
      "tagId": 7,
      "value": "佐藤利奈",
      "entries": [
        {
          "value": "佐藤利奈"
        },
        {
          "value": "さとう りな"
        }
      ]
    },
    {
      "characterId": 762,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 762,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 762,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 762,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 762,
      "tagId": 5,
      "value": "02:44:00"
    },
    {
      "characterId": 762,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 762,
      "tagId": 7,
      "value": "田中理惠",
      "entries": [
        {
          "value": "田中理惠"
        },
        {
          "value": "たなか りえ"
        }
      ]
    },
    {
      "characterId": 763,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 763,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 763,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 763,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 763,
      "tagId": 5,
      "value": "02:40:00"
    },
    {
      "characterId": 763,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 763,
      "tagId": 7,
      "value": "今井麻美",
      "entries": [
        {
          "value": "今井麻美"
        }
      ]
    },
    {
      "characterId": 764,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 764,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 764,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 764,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 764,
      "tagId": 5,
      "value": "02:26:00"
    },
    {
      "characterId": 764,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 764,
      "tagId": 7,
      "value": "阿澄佳奈",
      "entries": [
        {
          "value": "阿澄佳奈"
        },
        {
          "value": "あすみ かな"
        }
      ]
    },
    {
      "characterId": 765,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 765,
      "tagId": 2,
      "value": "海王星"
    },
    {
      "characterId": 765,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 765,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 765,
      "tagId": 5,
      "value": "02:47:00"
    },
    {
      "characterId": 765,
      "tagId": 6,
      "value": "2018-02-06"
    },
    {
      "characterId": 765,
      "tagId": 7,
      "value": "佐藤利奈",
      "entries": [
        {
          "value": "佐藤利奈"
        },
        {
          "value": "さとう りな"
        }
      ]
    },
    {
      "characterId": 766,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 766,
      "tagId": 2,
      "value": "KizunaAI"
    },
    {
      "characterId": 766,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 766,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 766,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 766,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 766,
      "tagId": 7,
      "value": "Kizuna AI",
      "entries": [
        {
          "value": "Kizuna AI"
        }
      ]
    },
    {
      "characterId": 767,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 767,
      "tagId": 2,
      "value": "KizunaAI"
    },
    {
      "characterId": 767,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 767,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 767,
      "tagId": 5,
      "value": "01:55:00"
    },
    {
      "characterId": 767,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 767,
      "tagId": 7,
      "value": "Kizuna AI",
      "entries": [
        {
          "value": "Kizuna AI"
        }
      ]
    },
    {
      "characterId": 768,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 768,
      "tagId": 2,
      "value": "KizunaAI"
    },
    {
      "characterId": 768,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 768,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 768,
      "tagId": 5,
      "value": "04:30:00"
    },
    {
      "characterId": 768,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 768,
      "tagId": 7,
      "value": "Kizuna AI",
      "entries": [
        {
          "value": "Kizuna AI"
        }
      ]
    },
    {
      "characterId": 769,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 769,
      "tagId": 2,
      "value": "KizunaAI"
    },
    {
      "characterId": 769,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 769,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 769,
      "tagId": 5,
      "value": "04:50:00"
    },
    {
      "characterId": 769,
      "tagId": 6,
      "value": "2019-04-26"
    },
    {
      "characterId": 769,
      "tagId": 7,
      "value": "Kizuna AI",
      "entries": [
        {
          "value": "Kizuna AI"
        }
      ]
    },
    {
      "characterId": 770,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 770,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 770,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 770,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 770,
      "tagId": 5,
      "value": "00:17:30"
    },
    {
      "characterId": 770,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 770,
      "tagId": 7,
      "value": "白上吹雪",
      "entries": [
        {
          "value": "白上吹雪"
        },
        {
          "value": "フブキ"
        }
      ]
    },
    {
      "characterId": 771,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 771,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 771,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 771,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 771,
      "tagId": 5,
      "value": "01:25:00"
    },
    {
      "characterId": 771,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 771,
      "tagId": 7,
      "value": "时乃空",
      "entries": [
        {
          "value": "时乃空"
        },
        {
          "value": "ときのそら"
        }
      ]
    },
    {
      "characterId": 772,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 772,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 772,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 772,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 772,
      "tagId": 5,
      "value": "00:20:00"
    },
    {
      "characterId": 772,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 772,
      "tagId": 7,
      "value": "湊阿库娅",
      "entries": [
        {
          "value": "湊阿库娅"
        },
        {
          "value": "あくあ"
        }
      ]
    },
    {
      "characterId": 773,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 773,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 773,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 773,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 773,
      "tagId": 5,
      "value": "00:12:00"
    },
    {
      "characterId": 773,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 773,
      "tagId": 7,
      "value": "夏色祭",
      "entries": [
        {
          "value": "夏色祭"
        },
        {
          "value": "まつり"
        }
      ]
    },
    {
      "characterId": 774,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 774,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 774,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 774,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 774,
      "tagId": 5,
      "value": "03:22:00"
    },
    {
      "characterId": 774,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 774,
      "tagId": 7,
      "value": "百鬼绫目",
      "entries": [
        {
          "value": "百鬼绫目"
        },
        {
          "value": "あやめ"
        }
      ]
    },
    {
      "characterId": 775,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 775,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 775,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 775,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 775,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 775,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 775,
      "tagId": 7,
      "value": "紫咲诗音",
      "entries": [
        {
          "value": "紫咲诗音"
        },
        {
          "value": "シオン"
        }
      ]
    },
    {
      "characterId": 776,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 776,
      "tagId": 2,
      "value": "Hololive"
    },
    {
      "characterId": 776,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 776,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 776,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 776,
      "tagId": 6,
      "value": "2019-11-27"
    },
    {
      "characterId": 776,
      "tagId": 7,
      "value": "大神澪",
      "entries": [
        {
          "value": "大神澪"
        },
        {
          "value": "ミオ"
        }
      ]
    },
    {
      "characterId": 777,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 777,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 777,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 777,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 777,
      "tagId": 5,
      "value": "02:40:06"
    },
    {
      "characterId": 777,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 777,
      "tagId": 7,
      "value": "相沢舞",
      "entries": [
        {
          "value": "相沢舞"
        },
        {
          "value": "相沢 舞 あいざわ まい"
        },
        {
          "value": "部落格"
        }
      ]
    },
    {
      "characterId": 778,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 778,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 778,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 778,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 778,
      "tagId": 5,
      "value": "02:35:25"
    },
    {
      "characterId": 778,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 778,
      "tagId": 7,
      "value": "野中藍",
      "entries": [
        {
          "value": "野中藍"
        },
        {
          "value": "野中 藍 のなか あい"
        }
      ]
    },
    {
      "characterId": 779,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 779,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 779,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 779,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 779,
      "tagId": 5,
      "value": "02:33:43"
    },
    {
      "characterId": 779,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 779,
      "tagId": 7,
      "value": "桑島法子",
      "entries": [
        {
          "value": "桑島法子"
        },
        {
          "value": "くわしま ほうこ"
        },
        {
          "value": "朗読夜今年休"
        }
      ]
    },
    {
      "characterId": 780,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 780,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 780,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 780,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 780,
      "tagId": 5,
      "value": "02:41:47"
    },
    {
      "characterId": 780,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 780,
      "tagId": 7,
      "value": "津田美波",
      "entries": [
        {
          "value": "津田美波"
        },
        {
          "value": "つだ みなみ"
        },
        {
          "value": "相关"
        }
      ]
    },
    {
      "characterId": 781,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 781,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 781,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 781,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 781,
      "tagId": 5,
      "value": "02:38:25"
    },
    {
      "characterId": 781,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 781,
      "tagId": 7,
      "value": "内田真礼",
      "entries": [
        {
          "value": "内田真礼"
        },
        {
          "value": "内田 真礼 うちだ まあや"
        }
      ]
    },
    {
      "characterId": 782,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 782,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 782,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 782,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 782,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 782,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 782,
      "tagId": 7,
      "value": "佐藤朱",
      "entries": [
        {
          "value": "佐藤朱"
        },
        {
          "value": "昵称 あけち"
        },
        {
          "value": "青二"
        }
      ]
    },
    {
      "characterId": 783,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 783,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 783,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 783,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 783,
      "tagId": 5,
      "value": "02:31:40"
    },
    {
      "characterId": 783,
      "tagId": 6,
      "value": "2020-11-26"
    },
    {
      "characterId": 783,
      "tagId": 7,
      "value": "幸村恵理",
      "entries": [
        {
          "value": "幸村恵理"
        },
        {
          "value": "幸村 恵理 ゆきむら えり"
        }
      ]
    },
    {
      "characterId": 784,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 784,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 784,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 784,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 784,
      "tagId": 5,
      "value": "03:03:36"
    },
    {
      "characterId": 784,
      "tagId": 6,
      "value": "2023-04-27"
    },
    {
      "characterId": 784,
      "tagId": 7,
      "value": "三上枝织",
      "entries": [
        {
          "value": "三上枝织"
        }
      ]
    },
    {
      "characterId": 785,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 785,
      "tagId": 2,
      "value": "维纳斯假期"
    },
    {
      "characterId": 785,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 785,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 785,
      "tagId": 5,
      "value": "02:44:00"
    },
    {
      "characterId": 785,
      "tagId": 6,
      "value": "2023-04-27"
    },
    {
      "characterId": 785,
      "tagId": 7,
      "value": "大西沙织",
      "entries": [
        {
          "value": "大西沙织"
        },
        {
          "value": "おおにし さおり"
        },
        {
          "value": "大西沙織"
        }
      ]
    },
    {
      "characterId": 786,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 786,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 786,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 786,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 786,
      "tagId": 5,
      "value": "01:07:10"
    },
    {
      "characterId": 786,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 786,
      "tagId": 7,
      "value": "中村绘里子",
      "entries": [
        {
          "value": "中村绘里子"
        },
        {
          "value": "なかむら えりこ"
        },
        {
          "value": "中村繪里子"
        }
      ]
    },
    {
      "characterId": 787,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 787,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 787,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 787,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 787,
      "tagId": 5,
      "value": "06:15:00"
    },
    {
      "characterId": 787,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 787,
      "tagId": 7,
      "value": "今井麻美",
      "entries": [
        {
          "value": "今井麻美"
        },
        {
          "value": "いまい あさみ"
        }
      ]
    },
    {
      "characterId": 788,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 788,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 788,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 788,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 788,
      "tagId": 5,
      "value": "01:24:10"
    },
    {
      "characterId": 788,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 788,
      "tagId": 7,
      "value": "钉宫理惠",
      "entries": [
        {
          "value": "钉宫理惠"
        },
        {
          "value": "くぎみや りえ"
        },
        {
          "value": "釘宮理恵"
        }
      ]
    },
    {
      "characterId": 789,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 789,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 789,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 789,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 789,
      "tagId": 5,
      "value": "01:59:50"
    },
    {
      "characterId": 789,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 789,
      "tagId": 7,
      "value": "高桥智秋",
      "entries": [
        {
          "value": "高桥智秋"
        },
        {
          "value": "たかはし ちあき"
        }
      ]
    },
    {
      "characterId": 790,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 790,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 790,
      "tagId": 3,
      "value": "运输"
    },
    {
      "characterId": 790,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 790,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 790,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 790,
      "tagId": 7,
      "value": "若林直美",
      "entries": [
        {
          "value": "若林直美"
        },
        {
          "value": "わかばやし なおみ"
        }
      ]
    },
    {
      "characterId": 791,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 791,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 791,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 791,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 791,
      "tagId": 5,
      "value": "00:08:42"
    },
    {
      "characterId": 791,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 791,
      "tagId": 7,
      "value": "下田麻美",
      "entries": [
        {
          "value": "下田麻美"
        },
        {
          "value": "しもだ あさみ"
        }
      ]
    },
    {
      "characterId": 792,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 792,
      "tagId": 2,
      "value": "偶像大师"
    },
    {
      "characterId": 792,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 792,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 792,
      "tagId": 5,
      "value": "00:08:42"
    },
    {
      "characterId": 792,
      "tagId": 6,
      "value": "2021-07-22"
    },
    {
      "characterId": 792,
      "tagId": 7,
      "value": "下田麻美",
      "entries": [
        {
          "value": "下田麻美"
        },
        {
          "value": "しもだ あさみ"
        }
      ]
    },
    {
      "characterId": 793,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 793,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 793,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 793,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 793,
      "tagId": 5,
      "value": "00:35:30"
    },
    {
      "characterId": 793,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 793,
      "tagId": 7,
      "value": "宮本侑芽",
      "entries": [
        {
          "value": "宮本侑芽"
        }
      ]
    },
    {
      "characterId": 794,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 794,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 794,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 794,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 794,
      "tagId": 5,
      "value": "01:25:02"
    },
    {
      "characterId": 794,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 794,
      "tagId": 7,
      "value": "上田丽奈",
      "entries": [
        {
          "value": "上田丽奈"
        },
        {
          "value": "うえだ れいな"
        },
        {
          "value": "上田麗奈"
        }
      ]
    },
    {
      "characterId": 795,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 795,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 795,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 795,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 795,
      "tagId": 5,
      "value": "00:38:45"
    },
    {
      "characterId": 795,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 795,
      "tagId": 7,
      "value": "鬼头明里",
      "entries": [
        {
          "value": "鬼头明里"
        },
        {
          "value": "きとう あかり"
        },
        {
          "value": "鬼頭明里"
        }
      ]
    },
    {
      "characterId": 796,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 796,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 796,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 796,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 796,
      "tagId": 5,
      "value": "01:01:49"
    },
    {
      "characterId": 796,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 796,
      "tagId": 7,
      "value": "三森铃子",
      "entries": [
        {
          "value": "三森铃子"
        },
        {
          "value": "三森 みもり"
        },
        {
          "value": "すずこ みもり"
        }
      ]
    },
    {
      "characterId": 797,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 797,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 797,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 797,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 797,
      "tagId": 5,
      "value": "01:04:11"
    },
    {
      "characterId": 797,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 797,
      "tagId": 7,
      "value": "若山诗音",
      "entries": [
        {
          "value": "若山诗音"
        },
        {
          "value": "わかやま しおん"
        },
        {
          "value": "若山詩音"
        }
      ]
    },
    {
      "characterId": 798,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 798,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 798,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 798,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 798,
      "tagId": 5,
      "value": "01:37:42"
    },
    {
      "characterId": 798,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 798,
      "tagId": 7,
      "value": "安济知佳",
      "entries": [
        {
          "value": "安济知佳"
        },
        {
          "value": "あんざい ちか"
        },
        {
          "value": "安済知佳"
        }
      ]
    },
    {
      "characterId": 799,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 799,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 799,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 799,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 799,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 799,
      "tagId": 6,
      "value": "2021-11-25"
    },
    {
      "characterId": 799,
      "tagId": 7,
      "value": "诹访彩花",
      "entries": [
        {
          "value": "诹访彩花"
        },
        {
          "value": "すわ あやか"
        },
        {
          "value": "諏訪彩花"
        }
      ]
    },
    {
      "characterId": 800,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 800,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 800,
      "tagId": 3,
      "value": "航战"
    },
    {
      "characterId": 800,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 800,
      "tagId": 5,
      "value": "06:15:09"
    },
    {
      "characterId": 800,
      "tagId": 6,
      "value": "2023-07-20"
    },
    {
      "characterId": 800,
      "tagId": 7,
      "value": "高桥花林",
      "entries": [
        {
          "value": "高桥花林"
        },
        {
          "value": "たかはし かりん"
        },
        {
          "value": "高橋花林"
        }
      ]
    },
    {
      "characterId": 801,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 801,
      "tagId": 2,
      "value": "SSSS"
    },
    {
      "characterId": 801,
      "tagId": 3,
      "value": "运输"
    },
    {
      "characterId": 801,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 801,
      "tagId": 5,
      "value": "01:31:40"
    },
    {
      "characterId": 801,
      "tagId": 6,
      "value": "2023-07-20"
    },
    {
      "characterId": 801,
      "tagId": 7,
      "value": "内田真礼",
      "entries": [
        {
          "value": "内田真礼"
        },
        {
          "value": "内田 真礼 うちだ まあや"
        }
      ]
    },
    {
      "characterId": 802,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 802,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 802,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 802,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 802,
      "tagId": 5,
      "value": "01:16:00"
    },
    {
      "characterId": 802,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 802,
      "tagId": 7,
      "value": "のぐち ゆり",
      "entries": [
        {
          "value": "のぐち ゆり"
        }
      ]
    },
    {
      "characterId": 803,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 803,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 803,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 803,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 803,
      "tagId": 5,
      "value": "02:23:00"
    },
    {
      "characterId": 803,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 803,
      "tagId": 7,
      "value": "大和田仁美",
      "entries": [
        {
          "value": "大和田仁美"
        },
        {
          "value": "おおわだ ひとみ"
        }
      ]
    },
    {
      "characterId": 804,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 804,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 804,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 804,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 804,
      "tagId": 5,
      "value": "06:15:00"
    },
    {
      "characterId": 804,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 804,
      "tagId": 7,
      "value": "大空直美",
      "entries": [
        {
          "value": "大空直美"
        }
      ]
    },
    {
      "characterId": 805,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 805,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 805,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 805,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 805,
      "tagId": 5,
      "value": "01:30:00"
    },
    {
      "characterId": 805,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 805,
      "tagId": 7,
      "value": "照井春佳",
      "entries": [
        {
          "value": "照井春佳"
        }
      ]
    },
    {
      "characterId": 806,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 806,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 806,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 806,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 806,
      "tagId": 5,
      "value": "04:20:00"
    },
    {
      "characterId": 806,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 806,
      "tagId": 7,
      "value": "藤井",
      "entries": [
        {
          "value": "藤井"
        },
        {
          "value": "ゆきよ"
        }
      ]
    },
    {
      "characterId": 807,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 807,
      "tagId": 2,
      "value": "Atelier Ryza"
    },
    {
      "characterId": 807,
      "tagId": 3,
      "value": "超巡"
    },
    {
      "characterId": 807,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 807,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 807,
      "tagId": 6,
      "value": "2022-11-24"
    },
    {
      "characterId": 807,
      "tagId": 7,
      "value": "羊宫妃那",
      "entries": [
        {
          "value": "羊宫妃那"
        },
        {
          "value": "ようみや ひな"
        },
        {
          "value": "羊宮妃那"
        }
      ]
    },
    {
      "characterId": 808,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 808,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 808,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 808,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 808,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 808,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 808,
      "tagId": 7,
      "value": "原田瞳",
      "entries": [
        {
          "value": "原田瞳"
        },
        {
          "value": "原田 ひとみ"
        }
      ]
    },
    {
      "characterId": 809,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 809,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 809,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 809,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 809,
      "tagId": 5,
      "value": "02:35:00"
    },
    {
      "characterId": 809,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 809,
      "tagId": 7,
      "value": "今井麻美",
      "entries": [
        {
          "value": "今井麻美"
        },
        {
          "value": "いまい あさみ"
        }
      ]
    },
    {
      "characterId": 810,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 810,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 810,
      "tagId": 3,
      "value": "潜艇"
    },
    {
      "characterId": 810,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 810,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 810,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 810,
      "tagId": 7,
      "value": "喜多村英梨",
      "entries": [
        {
          "value": "喜多村英梨"
        },
        {
          "value": "きたむら えり"
        },
        {
          "value": "网站"
        }
      ]
    },
    {
      "characterId": 811,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 811,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 811,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 811,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 811,
      "tagId": 5,
      "value": "02:33:20"
    },
    {
      "characterId": 811,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 811,
      "tagId": 7,
      "value": "原由实",
      "entries": [
        {
          "value": "原由实"
        },
        {
          "value": "はら ゆみ"
        },
        {
          "value": "原由実"
        }
      ]
    },
    {
      "characterId": 812,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 812,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 812,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 812,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 812,
      "tagId": 5,
      "value": "02:38:20"
    },
    {
      "characterId": 812,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 812,
      "tagId": 7,
      "value": "阿澄佳奈",
      "entries": [
        {
          "value": "阿澄佳奈"
        },
        {
          "value": "あすみ かな"
        }
      ]
    },
    {
      "characterId": 813,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 813,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 813,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 813,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 813,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 813,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 813,
      "tagId": 7,
      "value": "矢作沙友里",
      "entries": [
        {
          "value": "矢作沙友里"
        },
        {
          "value": "やはぎ さゆり"
        }
      ]
    },
    {
      "characterId": 814,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 814,
      "tagId": 2,
      "value": "闪乱神乐NL"
    },
    {
      "characterId": 814,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 814,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 814,
      "tagId": 5,
      "value": "02:30:00"
    },
    {
      "characterId": 814,
      "tagId": 6,
      "value": "2023-11-23 苍闪忍法帖"
    },
    {
      "characterId": 814,
      "tagId": 7,
      "value": "立花理香",
      "entries": [
        {
          "value": "立花理香"
        },
        {
          "value": "たちばな りか"
        }
      ]
    },
    {
      "characterId": 815,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 815,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 815,
      "tagId": 3,
      "value": "重巡"
    },
    {
      "characterId": 815,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 815,
      "tagId": 5,
      "value": "02:28:00"
    },
    {
      "characterId": 815,
      "tagId": 6,
      "value": "2024-11-21 危险发明迫近中！"
    },
    {
      "characterId": 815,
      "tagId": 7,
      "value": "户松遥",
      "entries": [
        {
          "value": "户松遥"
        },
        {
          "value": "とまつ はるか"
        },
        {
          "value": "戸松遥"
        }
      ]
    },
    {
      "characterId": 816,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 816,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 816,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 816,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 816,
      "tagId": 5,
      "value": "01:53:20"
    },
    {
      "characterId": 816,
      "tagId": 6,
      "value": "2024-11-21 危险发明迫近中！"
    },
    {
      "characterId": 816,
      "tagId": 7,
      "value": "伊藤加奈惠",
      "entries": [
        {
          "value": "伊藤加奈惠"
        },
        {
          "value": "伊藤 かな"
        },
        {
          "value": "伊藤恵"
        }
      ]
    },
    {
      "characterId": 817,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 817,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 817,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 817,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 817,
      "tagId": 5,
      "value": "02:10:02"
    },
    {
      "characterId": 817,
      "tagId": 6,
      "value": "无活动"
    },
    {
      "characterId": 817,
      "tagId": 7,
      "value": "丰崎爱生",
      "entries": [
        {
          "value": "丰崎爱生"
        },
        {
          "value": "とよさき あき"
        },
        {
          "value": "豊崎愛生"
        }
      ]
    },
    {
      "characterId": 818,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 818,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 818,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 818,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 818,
      "tagId": 5,
      "value": "02:05:00"
    },
    {
      "characterId": 818,
      "tagId": 6,
      "value": "2024-11-21 危险发明迫近中！"
    },
    {
      "characterId": 818,
      "tagId": 7,
      "value": "福圆美里",
      "entries": [
        {
          "value": "福圆美里"
        },
        {
          "value": "ふくえん みさと"
        },
        {
          "value": "福圓美里"
        }
      ]
    },
    {
      "characterId": 819,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 819,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 819,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 819,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 819,
      "tagId": 5,
      "value": "02:11:40"
    },
    {
      "characterId": 819,
      "tagId": 6,
      "value": "2024-11-21 危险发明迫近中！"
    },
    {
      "characterId": 819,
      "tagId": 7,
      "value": "矢作沙友里",
      "entries": [
        {
          "value": "矢作沙友里"
        },
        {
          "value": "やはぎ さゆり"
        }
      ]
    },
    {
      "characterId": 820,
      "tagId": 1,
      "value": "Elite"
    },
    {
      "characterId": 820,
      "tagId": 2,
      "value": "To LOVE-Ru"
    },
    {
      "characterId": 820,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 820,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 820,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 820,
      "tagId": 6,
      "value": "2024-11-21 危险发明迫近中！"
    },
    {
      "characterId": 820,
      "tagId": 7,
      "value": "名冢佳织",
      "entries": [
        {
          "value": "名冢佳织"
        },
        {
          "value": "なづか かおり"
        },
        {
          "value": "名塚佳織"
        }
      ]
    },
    {
      "characterId": 821,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 821,
      "tagId": 2,
      "value": "BLACK★ROCK SHOOTER"
    },
    {
      "characterId": 821,
      "tagId": 3,
      "value": "战巡"
    },
    {
      "characterId": 821,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 821,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 821,
      "tagId": 6,
      "value": "2025-06-05"
    },
    {
      "characterId": 821,
      "tagId": 7,
      "value": "花泽香菜",
      "entries": [
        {
          "value": "花泽香菜"
        },
        {
          "value": "はなざわ かな"
        },
        {
          "value": "花澤香菜"
        }
      ]
    },
    {
      "characterId": 822,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 822,
      "tagId": 2,
      "value": "BLACK★ROCK SHOOTER"
    },
    {
      "characterId": 822,
      "tagId": 3,
      "value": "航母"
    },
    {
      "characterId": 822,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 822,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 822,
      "tagId": 6,
      "value": "2025-06-05"
    },
    {
      "characterId": 822,
      "tagId": 7,
      "value": "泽城美雪",
      "entries": [
        {
          "value": "泽城美雪"
        },
        {
          "value": "沢城 みゆき"
        },
        {
          "value": "さわしろ みゆき"
        }
      ]
    },
    {
      "characterId": 823,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 823,
      "tagId": 2,
      "value": "Atelier Yumia"
    },
    {
      "characterId": 823,
      "tagId": 3,
      "value": "轻航"
    },
    {
      "characterId": 823,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 823,
      "tagId": 5,
      "value": "02:23:00"
    },
    {
      "characterId": 823,
      "tagId": 6,
      "value": "2025-07-24 炼金术士与天际交汇之塔"
    },
    {
      "characterId": 823,
      "tagId": 7,
      "value": "仓持若菜",
      "entries": [
        {
          "value": "仓持若菜"
        },
        {
          "value": "くらもち わかな"
        },
        {
          "value": "倉持若菜"
        }
      ]
    },
    {
      "characterId": 824,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 824,
      "tagId": 2,
      "value": "Atelier Yumia"
    },
    {
      "characterId": 824,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 824,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 824,
      "tagId": 5,
      "value": "01:16:00"
    },
    {
      "characterId": 824,
      "tagId": 6,
      "value": "2025-07-24 炼金术士与天际交汇之塔"
    },
    {
      "characterId": 824,
      "tagId": 7,
      "value": "前田佳织里",
      "entries": [
        {
          "value": "前田佳织里"
        },
        {
          "value": "まえだ かおり"
        },
        {
          "value": "前田佳織里"
        }
      ]
    },
    {
      "characterId": 825,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 825,
      "tagId": 2,
      "value": "Atelier Yumia"
    },
    {
      "characterId": 825,
      "tagId": 3,
      "value": "战列"
    },
    {
      "characterId": 825,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 825,
      "tagId": 5,
      "value": "06:15:00"
    },
    {
      "characterId": 825,
      "tagId": 6,
      "value": "2025-07-24 炼金术士与天际交汇之塔"
    },
    {
      "characterId": 825,
      "tagId": 7,
      "value": "小松未可子",
      "entries": [
        {
          "value": "小松未可子"
        },
        {
          "value": "こまつ みかこ"
        }
      ]
    },
    {
      "characterId": 826,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 826,
      "tagId": 2,
      "value": "Atelier Yumia"
    },
    {
      "characterId": 826,
      "tagId": 3,
      "value": "驱逐"
    },
    {
      "characterId": 826,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 826,
      "tagId": 5,
      "value": "00:25:50"
    },
    {
      "characterId": 826,
      "tagId": 6,
      "value": "2025-07-24 炼金术士与天际交汇之塔"
    },
    {
      "characterId": 826,
      "tagId": 7,
      "value": "青山吉能",
      "entries": [
        {
          "value": "青山吉能"
        },
        {
          "value": "あおやま よしの"
        }
      ]
    },
    {
      "characterId": 827,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 827,
      "tagId": 2,
      "value": "DanMachiV"
    },
    {
      "characterId": 827,
      "tagId": 3,
      "value": "维修"
    },
    {
      "characterId": 827,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 827,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 827,
      "tagId": 6,
      "value": "2025-10-16 轻量化复刻：愚者的天平"
    },
    {
      "characterId": 827,
      "tagId": 7,
      "value": "水濑祈",
      "entries": [
        {
          "value": "水濑祈"
        },
        {
          "value": "水瀬 いのり"
        },
        {
          "value": "みなせ いのり"
        }
      ]
    },
    {
      "characterId": 828,
      "tagId": 1,
      "value": "Super Rare"
    },
    {
      "characterId": 828,
      "tagId": 2,
      "value": "DanMachiV"
    },
    {
      "characterId": 828,
      "tagId": 3,
      "value": "轻巡"
    },
    {
      "characterId": 828,
      "tagId": 4,
      "value": "无舰级"
    },
    {
      "characterId": 828,
      "tagId": 5,
      "value": "无法建造"
    },
    {
      "characterId": 828,
      "tagId": 6,
      "value": "2025-10-16 轻量化复刻：愚者的天平"
    },
    {
      "characterId": 828,
      "tagId": 7,
      "value": "早见沙织",
      "entries": [
        {
          "value": "早见沙织"
        },
        {
          "value": "はやみ さおり"
        },
        {
          "value": "早見沙織"
        }
      ]
    }
  ]
};

export const bundledOfficialCatalogs: ReadonlyArray<BundledOfficialCatalog> = [
  {
    name: "航一把题库",
    path: "db/航一把题库.csv",
    sha256: "ea824da1ca618a076f4fde3d3dfb9ef7264b8ab8568f8ad50bf59f00eafb6a55",
    gitCommitSha: "79889c2add66da2783388f42922c03d3b9126962",
    gitCommitDate: "2026-09-14",
    catalog: bundledCatalog0,
  },
];
