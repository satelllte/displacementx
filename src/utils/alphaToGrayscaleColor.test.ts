import {describe, expect, it} from 'vitest';
import {alphaToGrayscaleColor} from './alphaToGrayscaleColor';

describe('alphaToGrayscaleColor', () => {
  it('should work as expected', () => {
    const results: Array<{
      alpha: number;
      hex: string;
    }> = [];

    for (let i = 0; i < 256; i++) {
      results.push({
        alpha: i,
        hex: alphaToGrayscaleColor(i),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "alpha": 0,
          "hex": "#000000",
        },
        {
          "alpha": 1,
          "hex": "#010101",
        },
        {
          "alpha": 2,
          "hex": "#020202",
        },
        {
          "alpha": 3,
          "hex": "#030303",
        },
        {
          "alpha": 4,
          "hex": "#040404",
        },
        {
          "alpha": 5,
          "hex": "#050505",
        },
        {
          "alpha": 6,
          "hex": "#060606",
        },
        {
          "alpha": 7,
          "hex": "#070707",
        },
        {
          "alpha": 8,
          "hex": "#080808",
        },
        {
          "alpha": 9,
          "hex": "#090909",
        },
        {
          "alpha": 10,
          "hex": "#0a0a0a",
        },
        {
          "alpha": 11,
          "hex": "#0b0b0b",
        },
        {
          "alpha": 12,
          "hex": "#0c0c0c",
        },
        {
          "alpha": 13,
          "hex": "#0d0d0d",
        },
        {
          "alpha": 14,
          "hex": "#0e0e0e",
        },
        {
          "alpha": 15,
          "hex": "#0f0f0f",
        },
        {
          "alpha": 16,
          "hex": "#101010",
        },
        {
          "alpha": 17,
          "hex": "#111111",
        },
        {
          "alpha": 18,
          "hex": "#121212",
        },
        {
          "alpha": 19,
          "hex": "#131313",
        },
        {
          "alpha": 20,
          "hex": "#141414",
        },
        {
          "alpha": 21,
          "hex": "#151515",
        },
        {
          "alpha": 22,
          "hex": "#161616",
        },
        {
          "alpha": 23,
          "hex": "#171717",
        },
        {
          "alpha": 24,
          "hex": "#181818",
        },
        {
          "alpha": 25,
          "hex": "#191919",
        },
        {
          "alpha": 26,
          "hex": "#1a1a1a",
        },
        {
          "alpha": 27,
          "hex": "#1b1b1b",
        },
        {
          "alpha": 28,
          "hex": "#1c1c1c",
        },
        {
          "alpha": 29,
          "hex": "#1d1d1d",
        },
        {
          "alpha": 30,
          "hex": "#1e1e1e",
        },
        {
          "alpha": 31,
          "hex": "#1f1f1f",
        },
        {
          "alpha": 32,
          "hex": "#202020",
        },
        {
          "alpha": 33,
          "hex": "#212121",
        },
        {
          "alpha": 34,
          "hex": "#222222",
        },
        {
          "alpha": 35,
          "hex": "#232323",
        },
        {
          "alpha": 36,
          "hex": "#242424",
        },
        {
          "alpha": 37,
          "hex": "#252525",
        },
        {
          "alpha": 38,
          "hex": "#262626",
        },
        {
          "alpha": 39,
          "hex": "#272727",
        },
        {
          "alpha": 40,
          "hex": "#282828",
        },
        {
          "alpha": 41,
          "hex": "#292929",
        },
        {
          "alpha": 42,
          "hex": "#2a2a2a",
        },
        {
          "alpha": 43,
          "hex": "#2b2b2b",
        },
        {
          "alpha": 44,
          "hex": "#2c2c2c",
        },
        {
          "alpha": 45,
          "hex": "#2d2d2d",
        },
        {
          "alpha": 46,
          "hex": "#2e2e2e",
        },
        {
          "alpha": 47,
          "hex": "#2f2f2f",
        },
        {
          "alpha": 48,
          "hex": "#303030",
        },
        {
          "alpha": 49,
          "hex": "#313131",
        },
        {
          "alpha": 50,
          "hex": "#323232",
        },
        {
          "alpha": 51,
          "hex": "#333333",
        },
        {
          "alpha": 52,
          "hex": "#343434",
        },
        {
          "alpha": 53,
          "hex": "#353535",
        },
        {
          "alpha": 54,
          "hex": "#363636",
        },
        {
          "alpha": 55,
          "hex": "#373737",
        },
        {
          "alpha": 56,
          "hex": "#383838",
        },
        {
          "alpha": 57,
          "hex": "#393939",
        },
        {
          "alpha": 58,
          "hex": "#3a3a3a",
        },
        {
          "alpha": 59,
          "hex": "#3b3b3b",
        },
        {
          "alpha": 60,
          "hex": "#3c3c3c",
        },
        {
          "alpha": 61,
          "hex": "#3d3d3d",
        },
        {
          "alpha": 62,
          "hex": "#3e3e3e",
        },
        {
          "alpha": 63,
          "hex": "#3f3f3f",
        },
        {
          "alpha": 64,
          "hex": "#404040",
        },
        {
          "alpha": 65,
          "hex": "#414141",
        },
        {
          "alpha": 66,
          "hex": "#424242",
        },
        {
          "alpha": 67,
          "hex": "#434343",
        },
        {
          "alpha": 68,
          "hex": "#444444",
        },
        {
          "alpha": 69,
          "hex": "#454545",
        },
        {
          "alpha": 70,
          "hex": "#464646",
        },
        {
          "alpha": 71,
          "hex": "#474747",
        },
        {
          "alpha": 72,
          "hex": "#484848",
        },
        {
          "alpha": 73,
          "hex": "#494949",
        },
        {
          "alpha": 74,
          "hex": "#4a4a4a",
        },
        {
          "alpha": 75,
          "hex": "#4b4b4b",
        },
        {
          "alpha": 76,
          "hex": "#4c4c4c",
        },
        {
          "alpha": 77,
          "hex": "#4d4d4d",
        },
        {
          "alpha": 78,
          "hex": "#4e4e4e",
        },
        {
          "alpha": 79,
          "hex": "#4f4f4f",
        },
        {
          "alpha": 80,
          "hex": "#505050",
        },
        {
          "alpha": 81,
          "hex": "#515151",
        },
        {
          "alpha": 82,
          "hex": "#525252",
        },
        {
          "alpha": 83,
          "hex": "#535353",
        },
        {
          "alpha": 84,
          "hex": "#545454",
        },
        {
          "alpha": 85,
          "hex": "#555555",
        },
        {
          "alpha": 86,
          "hex": "#565656",
        },
        {
          "alpha": 87,
          "hex": "#575757",
        },
        {
          "alpha": 88,
          "hex": "#585858",
        },
        {
          "alpha": 89,
          "hex": "#595959",
        },
        {
          "alpha": 90,
          "hex": "#5a5a5a",
        },
        {
          "alpha": 91,
          "hex": "#5b5b5b",
        },
        {
          "alpha": 92,
          "hex": "#5c5c5c",
        },
        {
          "alpha": 93,
          "hex": "#5d5d5d",
        },
        {
          "alpha": 94,
          "hex": "#5e5e5e",
        },
        {
          "alpha": 95,
          "hex": "#5f5f5f",
        },
        {
          "alpha": 96,
          "hex": "#606060",
        },
        {
          "alpha": 97,
          "hex": "#616161",
        },
        {
          "alpha": 98,
          "hex": "#626262",
        },
        {
          "alpha": 99,
          "hex": "#636363",
        },
        {
          "alpha": 100,
          "hex": "#646464",
        },
        {
          "alpha": 101,
          "hex": "#656565",
        },
        {
          "alpha": 102,
          "hex": "#666666",
        },
        {
          "alpha": 103,
          "hex": "#676767",
        },
        {
          "alpha": 104,
          "hex": "#686868",
        },
        {
          "alpha": 105,
          "hex": "#696969",
        },
        {
          "alpha": 106,
          "hex": "#6a6a6a",
        },
        {
          "alpha": 107,
          "hex": "#6b6b6b",
        },
        {
          "alpha": 108,
          "hex": "#6c6c6c",
        },
        {
          "alpha": 109,
          "hex": "#6d6d6d",
        },
        {
          "alpha": 110,
          "hex": "#6e6e6e",
        },
        {
          "alpha": 111,
          "hex": "#6f6f6f",
        },
        {
          "alpha": 112,
          "hex": "#707070",
        },
        {
          "alpha": 113,
          "hex": "#717171",
        },
        {
          "alpha": 114,
          "hex": "#727272",
        },
        {
          "alpha": 115,
          "hex": "#737373",
        },
        {
          "alpha": 116,
          "hex": "#747474",
        },
        {
          "alpha": 117,
          "hex": "#757575",
        },
        {
          "alpha": 118,
          "hex": "#767676",
        },
        {
          "alpha": 119,
          "hex": "#777777",
        },
        {
          "alpha": 120,
          "hex": "#787878",
        },
        {
          "alpha": 121,
          "hex": "#797979",
        },
        {
          "alpha": 122,
          "hex": "#7a7a7a",
        },
        {
          "alpha": 123,
          "hex": "#7b7b7b",
        },
        {
          "alpha": 124,
          "hex": "#7c7c7c",
        },
        {
          "alpha": 125,
          "hex": "#7d7d7d",
        },
        {
          "alpha": 126,
          "hex": "#7e7e7e",
        },
        {
          "alpha": 127,
          "hex": "#7f7f7f",
        },
        {
          "alpha": 128,
          "hex": "#808080",
        },
        {
          "alpha": 129,
          "hex": "#818181",
        },
        {
          "alpha": 130,
          "hex": "#828282",
        },
        {
          "alpha": 131,
          "hex": "#838383",
        },
        {
          "alpha": 132,
          "hex": "#848484",
        },
        {
          "alpha": 133,
          "hex": "#858585",
        },
        {
          "alpha": 134,
          "hex": "#868686",
        },
        {
          "alpha": 135,
          "hex": "#878787",
        },
        {
          "alpha": 136,
          "hex": "#888888",
        },
        {
          "alpha": 137,
          "hex": "#898989",
        },
        {
          "alpha": 138,
          "hex": "#8a8a8a",
        },
        {
          "alpha": 139,
          "hex": "#8b8b8b",
        },
        {
          "alpha": 140,
          "hex": "#8c8c8c",
        },
        {
          "alpha": 141,
          "hex": "#8d8d8d",
        },
        {
          "alpha": 142,
          "hex": "#8e8e8e",
        },
        {
          "alpha": 143,
          "hex": "#8f8f8f",
        },
        {
          "alpha": 144,
          "hex": "#909090",
        },
        {
          "alpha": 145,
          "hex": "#919191",
        },
        {
          "alpha": 146,
          "hex": "#929292",
        },
        {
          "alpha": 147,
          "hex": "#939393",
        },
        {
          "alpha": 148,
          "hex": "#949494",
        },
        {
          "alpha": 149,
          "hex": "#959595",
        },
        {
          "alpha": 150,
          "hex": "#969696",
        },
        {
          "alpha": 151,
          "hex": "#979797",
        },
        {
          "alpha": 152,
          "hex": "#989898",
        },
        {
          "alpha": 153,
          "hex": "#999999",
        },
        {
          "alpha": 154,
          "hex": "#9a9a9a",
        },
        {
          "alpha": 155,
          "hex": "#9b9b9b",
        },
        {
          "alpha": 156,
          "hex": "#9c9c9c",
        },
        {
          "alpha": 157,
          "hex": "#9d9d9d",
        },
        {
          "alpha": 158,
          "hex": "#9e9e9e",
        },
        {
          "alpha": 159,
          "hex": "#9f9f9f",
        },
        {
          "alpha": 160,
          "hex": "#a0a0a0",
        },
        {
          "alpha": 161,
          "hex": "#a1a1a1",
        },
        {
          "alpha": 162,
          "hex": "#a2a2a2",
        },
        {
          "alpha": 163,
          "hex": "#a3a3a3",
        },
        {
          "alpha": 164,
          "hex": "#a4a4a4",
        },
        {
          "alpha": 165,
          "hex": "#a5a5a5",
        },
        {
          "alpha": 166,
          "hex": "#a6a6a6",
        },
        {
          "alpha": 167,
          "hex": "#a7a7a7",
        },
        {
          "alpha": 168,
          "hex": "#a8a8a8",
        },
        {
          "alpha": 169,
          "hex": "#a9a9a9",
        },
        {
          "alpha": 170,
          "hex": "#aaaaaa",
        },
        {
          "alpha": 171,
          "hex": "#ababab",
        },
        {
          "alpha": 172,
          "hex": "#acacac",
        },
        {
          "alpha": 173,
          "hex": "#adadad",
        },
        {
          "alpha": 174,
          "hex": "#aeaeae",
        },
        {
          "alpha": 175,
          "hex": "#afafaf",
        },
        {
          "alpha": 176,
          "hex": "#b0b0b0",
        },
        {
          "alpha": 177,
          "hex": "#b1b1b1",
        },
        {
          "alpha": 178,
          "hex": "#b2b2b2",
        },
        {
          "alpha": 179,
          "hex": "#b3b3b3",
        },
        {
          "alpha": 180,
          "hex": "#b4b4b4",
        },
        {
          "alpha": 181,
          "hex": "#b5b5b5",
        },
        {
          "alpha": 182,
          "hex": "#b6b6b6",
        },
        {
          "alpha": 183,
          "hex": "#b7b7b7",
        },
        {
          "alpha": 184,
          "hex": "#b8b8b8",
        },
        {
          "alpha": 185,
          "hex": "#b9b9b9",
        },
        {
          "alpha": 186,
          "hex": "#bababa",
        },
        {
          "alpha": 187,
          "hex": "#bbbbbb",
        },
        {
          "alpha": 188,
          "hex": "#bcbcbc",
        },
        {
          "alpha": 189,
          "hex": "#bdbdbd",
        },
        {
          "alpha": 190,
          "hex": "#bebebe",
        },
        {
          "alpha": 191,
          "hex": "#bfbfbf",
        },
        {
          "alpha": 192,
          "hex": "#c0c0c0",
        },
        {
          "alpha": 193,
          "hex": "#c1c1c1",
        },
        {
          "alpha": 194,
          "hex": "#c2c2c2",
        },
        {
          "alpha": 195,
          "hex": "#c3c3c3",
        },
        {
          "alpha": 196,
          "hex": "#c4c4c4",
        },
        {
          "alpha": 197,
          "hex": "#c5c5c5",
        },
        {
          "alpha": 198,
          "hex": "#c6c6c6",
        },
        {
          "alpha": 199,
          "hex": "#c7c7c7",
        },
        {
          "alpha": 200,
          "hex": "#c8c8c8",
        },
        {
          "alpha": 201,
          "hex": "#c9c9c9",
        },
        {
          "alpha": 202,
          "hex": "#cacaca",
        },
        {
          "alpha": 203,
          "hex": "#cbcbcb",
        },
        {
          "alpha": 204,
          "hex": "#cccccc",
        },
        {
          "alpha": 205,
          "hex": "#cdcdcd",
        },
        {
          "alpha": 206,
          "hex": "#cecece",
        },
        {
          "alpha": 207,
          "hex": "#cfcfcf",
        },
        {
          "alpha": 208,
          "hex": "#d0d0d0",
        },
        {
          "alpha": 209,
          "hex": "#d1d1d1",
        },
        {
          "alpha": 210,
          "hex": "#d2d2d2",
        },
        {
          "alpha": 211,
          "hex": "#d3d3d3",
        },
        {
          "alpha": 212,
          "hex": "#d4d4d4",
        },
        {
          "alpha": 213,
          "hex": "#d5d5d5",
        },
        {
          "alpha": 214,
          "hex": "#d6d6d6",
        },
        {
          "alpha": 215,
          "hex": "#d7d7d7",
        },
        {
          "alpha": 216,
          "hex": "#d8d8d8",
        },
        {
          "alpha": 217,
          "hex": "#d9d9d9",
        },
        {
          "alpha": 218,
          "hex": "#dadada",
        },
        {
          "alpha": 219,
          "hex": "#dbdbdb",
        },
        {
          "alpha": 220,
          "hex": "#dcdcdc",
        },
        {
          "alpha": 221,
          "hex": "#dddddd",
        },
        {
          "alpha": 222,
          "hex": "#dedede",
        },
        {
          "alpha": 223,
          "hex": "#dfdfdf",
        },
        {
          "alpha": 224,
          "hex": "#e0e0e0",
        },
        {
          "alpha": 225,
          "hex": "#e1e1e1",
        },
        {
          "alpha": 226,
          "hex": "#e2e2e2",
        },
        {
          "alpha": 227,
          "hex": "#e3e3e3",
        },
        {
          "alpha": 228,
          "hex": "#e4e4e4",
        },
        {
          "alpha": 229,
          "hex": "#e5e5e5",
        },
        {
          "alpha": 230,
          "hex": "#e6e6e6",
        },
        {
          "alpha": 231,
          "hex": "#e7e7e7",
        },
        {
          "alpha": 232,
          "hex": "#e8e8e8",
        },
        {
          "alpha": 233,
          "hex": "#e9e9e9",
        },
        {
          "alpha": 234,
          "hex": "#eaeaea",
        },
        {
          "alpha": 235,
          "hex": "#ebebeb",
        },
        {
          "alpha": 236,
          "hex": "#ececec",
        },
        {
          "alpha": 237,
          "hex": "#ededed",
        },
        {
          "alpha": 238,
          "hex": "#eeeeee",
        },
        {
          "alpha": 239,
          "hex": "#efefef",
        },
        {
          "alpha": 240,
          "hex": "#f0f0f0",
        },
        {
          "alpha": 241,
          "hex": "#f1f1f1",
        },
        {
          "alpha": 242,
          "hex": "#f2f2f2",
        },
        {
          "alpha": 243,
          "hex": "#f3f3f3",
        },
        {
          "alpha": 244,
          "hex": "#f4f4f4",
        },
        {
          "alpha": 245,
          "hex": "#f5f5f5",
        },
        {
          "alpha": 246,
          "hex": "#f6f6f6",
        },
        {
          "alpha": 247,
          "hex": "#f7f7f7",
        },
        {
          "alpha": 248,
          "hex": "#f8f8f8",
        },
        {
          "alpha": 249,
          "hex": "#f9f9f9",
        },
        {
          "alpha": 250,
          "hex": "#fafafa",
        },
        {
          "alpha": 251,
          "hex": "#fbfbfb",
        },
        {
          "alpha": 252,
          "hex": "#fcfcfc",
        },
        {
          "alpha": 253,
          "hex": "#fdfdfd",
        },
        {
          "alpha": 254,
          "hex": "#fefefe",
        },
        {
          "alpha": 255,
          "hex": "#ffffff",
        },
      ]
    `);
  });
});
