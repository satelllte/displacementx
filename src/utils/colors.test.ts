import {describe, expect, it} from 'vitest';
import {grayscale} from './colors';

describe('colors', () => {
  describe('grayscale', () => {
    it('handles "brightnessAlpha" correctly', () => {
      const results: Array<{
        brightnessAlpha: number;
        result: string;
      }> = [];

      for (let brightnessAlpha = 0; brightnessAlpha <= 255; brightnessAlpha++) {
        results.push({
          brightnessAlpha,
          result: grayscale({brightnessAlpha}),
        });
      }

      expect(results).toMatchInlineSnapshot(`
        [
          {
            "brightnessAlpha": 0,
            "result": "#000000ff",
          },
          {
            "brightnessAlpha": 1,
            "result": "#010101ff",
          },
          {
            "brightnessAlpha": 2,
            "result": "#020202ff",
          },
          {
            "brightnessAlpha": 3,
            "result": "#030303ff",
          },
          {
            "brightnessAlpha": 4,
            "result": "#040404ff",
          },
          {
            "brightnessAlpha": 5,
            "result": "#050505ff",
          },
          {
            "brightnessAlpha": 6,
            "result": "#060606ff",
          },
          {
            "brightnessAlpha": 7,
            "result": "#070707ff",
          },
          {
            "brightnessAlpha": 8,
            "result": "#080808ff",
          },
          {
            "brightnessAlpha": 9,
            "result": "#090909ff",
          },
          {
            "brightnessAlpha": 10,
            "result": "#0a0a0aff",
          },
          {
            "brightnessAlpha": 11,
            "result": "#0b0b0bff",
          },
          {
            "brightnessAlpha": 12,
            "result": "#0c0c0cff",
          },
          {
            "brightnessAlpha": 13,
            "result": "#0d0d0dff",
          },
          {
            "brightnessAlpha": 14,
            "result": "#0e0e0eff",
          },
          {
            "brightnessAlpha": 15,
            "result": "#0f0f0fff",
          },
          {
            "brightnessAlpha": 16,
            "result": "#101010ff",
          },
          {
            "brightnessAlpha": 17,
            "result": "#111111ff",
          },
          {
            "brightnessAlpha": 18,
            "result": "#121212ff",
          },
          {
            "brightnessAlpha": 19,
            "result": "#131313ff",
          },
          {
            "brightnessAlpha": 20,
            "result": "#141414ff",
          },
          {
            "brightnessAlpha": 21,
            "result": "#151515ff",
          },
          {
            "brightnessAlpha": 22,
            "result": "#161616ff",
          },
          {
            "brightnessAlpha": 23,
            "result": "#171717ff",
          },
          {
            "brightnessAlpha": 24,
            "result": "#181818ff",
          },
          {
            "brightnessAlpha": 25,
            "result": "#191919ff",
          },
          {
            "brightnessAlpha": 26,
            "result": "#1a1a1aff",
          },
          {
            "brightnessAlpha": 27,
            "result": "#1b1b1bff",
          },
          {
            "brightnessAlpha": 28,
            "result": "#1c1c1cff",
          },
          {
            "brightnessAlpha": 29,
            "result": "#1d1d1dff",
          },
          {
            "brightnessAlpha": 30,
            "result": "#1e1e1eff",
          },
          {
            "brightnessAlpha": 31,
            "result": "#1f1f1fff",
          },
          {
            "brightnessAlpha": 32,
            "result": "#202020ff",
          },
          {
            "brightnessAlpha": 33,
            "result": "#212121ff",
          },
          {
            "brightnessAlpha": 34,
            "result": "#222222ff",
          },
          {
            "brightnessAlpha": 35,
            "result": "#232323ff",
          },
          {
            "brightnessAlpha": 36,
            "result": "#242424ff",
          },
          {
            "brightnessAlpha": 37,
            "result": "#252525ff",
          },
          {
            "brightnessAlpha": 38,
            "result": "#262626ff",
          },
          {
            "brightnessAlpha": 39,
            "result": "#272727ff",
          },
          {
            "brightnessAlpha": 40,
            "result": "#282828ff",
          },
          {
            "brightnessAlpha": 41,
            "result": "#292929ff",
          },
          {
            "brightnessAlpha": 42,
            "result": "#2a2a2aff",
          },
          {
            "brightnessAlpha": 43,
            "result": "#2b2b2bff",
          },
          {
            "brightnessAlpha": 44,
            "result": "#2c2c2cff",
          },
          {
            "brightnessAlpha": 45,
            "result": "#2d2d2dff",
          },
          {
            "brightnessAlpha": 46,
            "result": "#2e2e2eff",
          },
          {
            "brightnessAlpha": 47,
            "result": "#2f2f2fff",
          },
          {
            "brightnessAlpha": 48,
            "result": "#303030ff",
          },
          {
            "brightnessAlpha": 49,
            "result": "#313131ff",
          },
          {
            "brightnessAlpha": 50,
            "result": "#323232ff",
          },
          {
            "brightnessAlpha": 51,
            "result": "#333333ff",
          },
          {
            "brightnessAlpha": 52,
            "result": "#343434ff",
          },
          {
            "brightnessAlpha": 53,
            "result": "#353535ff",
          },
          {
            "brightnessAlpha": 54,
            "result": "#363636ff",
          },
          {
            "brightnessAlpha": 55,
            "result": "#373737ff",
          },
          {
            "brightnessAlpha": 56,
            "result": "#383838ff",
          },
          {
            "brightnessAlpha": 57,
            "result": "#393939ff",
          },
          {
            "brightnessAlpha": 58,
            "result": "#3a3a3aff",
          },
          {
            "brightnessAlpha": 59,
            "result": "#3b3b3bff",
          },
          {
            "brightnessAlpha": 60,
            "result": "#3c3c3cff",
          },
          {
            "brightnessAlpha": 61,
            "result": "#3d3d3dff",
          },
          {
            "brightnessAlpha": 62,
            "result": "#3e3e3eff",
          },
          {
            "brightnessAlpha": 63,
            "result": "#3f3f3fff",
          },
          {
            "brightnessAlpha": 64,
            "result": "#404040ff",
          },
          {
            "brightnessAlpha": 65,
            "result": "#414141ff",
          },
          {
            "brightnessAlpha": 66,
            "result": "#424242ff",
          },
          {
            "brightnessAlpha": 67,
            "result": "#434343ff",
          },
          {
            "brightnessAlpha": 68,
            "result": "#444444ff",
          },
          {
            "brightnessAlpha": 69,
            "result": "#454545ff",
          },
          {
            "brightnessAlpha": 70,
            "result": "#464646ff",
          },
          {
            "brightnessAlpha": 71,
            "result": "#474747ff",
          },
          {
            "brightnessAlpha": 72,
            "result": "#484848ff",
          },
          {
            "brightnessAlpha": 73,
            "result": "#494949ff",
          },
          {
            "brightnessAlpha": 74,
            "result": "#4a4a4aff",
          },
          {
            "brightnessAlpha": 75,
            "result": "#4b4b4bff",
          },
          {
            "brightnessAlpha": 76,
            "result": "#4c4c4cff",
          },
          {
            "brightnessAlpha": 77,
            "result": "#4d4d4dff",
          },
          {
            "brightnessAlpha": 78,
            "result": "#4e4e4eff",
          },
          {
            "brightnessAlpha": 79,
            "result": "#4f4f4fff",
          },
          {
            "brightnessAlpha": 80,
            "result": "#505050ff",
          },
          {
            "brightnessAlpha": 81,
            "result": "#515151ff",
          },
          {
            "brightnessAlpha": 82,
            "result": "#525252ff",
          },
          {
            "brightnessAlpha": 83,
            "result": "#535353ff",
          },
          {
            "brightnessAlpha": 84,
            "result": "#545454ff",
          },
          {
            "brightnessAlpha": 85,
            "result": "#555555ff",
          },
          {
            "brightnessAlpha": 86,
            "result": "#565656ff",
          },
          {
            "brightnessAlpha": 87,
            "result": "#575757ff",
          },
          {
            "brightnessAlpha": 88,
            "result": "#585858ff",
          },
          {
            "brightnessAlpha": 89,
            "result": "#595959ff",
          },
          {
            "brightnessAlpha": 90,
            "result": "#5a5a5aff",
          },
          {
            "brightnessAlpha": 91,
            "result": "#5b5b5bff",
          },
          {
            "brightnessAlpha": 92,
            "result": "#5c5c5cff",
          },
          {
            "brightnessAlpha": 93,
            "result": "#5d5d5dff",
          },
          {
            "brightnessAlpha": 94,
            "result": "#5e5e5eff",
          },
          {
            "brightnessAlpha": 95,
            "result": "#5f5f5fff",
          },
          {
            "brightnessAlpha": 96,
            "result": "#606060ff",
          },
          {
            "brightnessAlpha": 97,
            "result": "#616161ff",
          },
          {
            "brightnessAlpha": 98,
            "result": "#626262ff",
          },
          {
            "brightnessAlpha": 99,
            "result": "#636363ff",
          },
          {
            "brightnessAlpha": 100,
            "result": "#646464ff",
          },
          {
            "brightnessAlpha": 101,
            "result": "#656565ff",
          },
          {
            "brightnessAlpha": 102,
            "result": "#666666ff",
          },
          {
            "brightnessAlpha": 103,
            "result": "#676767ff",
          },
          {
            "brightnessAlpha": 104,
            "result": "#686868ff",
          },
          {
            "brightnessAlpha": 105,
            "result": "#696969ff",
          },
          {
            "brightnessAlpha": 106,
            "result": "#6a6a6aff",
          },
          {
            "brightnessAlpha": 107,
            "result": "#6b6b6bff",
          },
          {
            "brightnessAlpha": 108,
            "result": "#6c6c6cff",
          },
          {
            "brightnessAlpha": 109,
            "result": "#6d6d6dff",
          },
          {
            "brightnessAlpha": 110,
            "result": "#6e6e6eff",
          },
          {
            "brightnessAlpha": 111,
            "result": "#6f6f6fff",
          },
          {
            "brightnessAlpha": 112,
            "result": "#707070ff",
          },
          {
            "brightnessAlpha": 113,
            "result": "#717171ff",
          },
          {
            "brightnessAlpha": 114,
            "result": "#727272ff",
          },
          {
            "brightnessAlpha": 115,
            "result": "#737373ff",
          },
          {
            "brightnessAlpha": 116,
            "result": "#747474ff",
          },
          {
            "brightnessAlpha": 117,
            "result": "#757575ff",
          },
          {
            "brightnessAlpha": 118,
            "result": "#767676ff",
          },
          {
            "brightnessAlpha": 119,
            "result": "#777777ff",
          },
          {
            "brightnessAlpha": 120,
            "result": "#787878ff",
          },
          {
            "brightnessAlpha": 121,
            "result": "#797979ff",
          },
          {
            "brightnessAlpha": 122,
            "result": "#7a7a7aff",
          },
          {
            "brightnessAlpha": 123,
            "result": "#7b7b7bff",
          },
          {
            "brightnessAlpha": 124,
            "result": "#7c7c7cff",
          },
          {
            "brightnessAlpha": 125,
            "result": "#7d7d7dff",
          },
          {
            "brightnessAlpha": 126,
            "result": "#7e7e7eff",
          },
          {
            "brightnessAlpha": 127,
            "result": "#7f7f7fff",
          },
          {
            "brightnessAlpha": 128,
            "result": "#808080ff",
          },
          {
            "brightnessAlpha": 129,
            "result": "#818181ff",
          },
          {
            "brightnessAlpha": 130,
            "result": "#828282ff",
          },
          {
            "brightnessAlpha": 131,
            "result": "#838383ff",
          },
          {
            "brightnessAlpha": 132,
            "result": "#848484ff",
          },
          {
            "brightnessAlpha": 133,
            "result": "#858585ff",
          },
          {
            "brightnessAlpha": 134,
            "result": "#868686ff",
          },
          {
            "brightnessAlpha": 135,
            "result": "#878787ff",
          },
          {
            "brightnessAlpha": 136,
            "result": "#888888ff",
          },
          {
            "brightnessAlpha": 137,
            "result": "#898989ff",
          },
          {
            "brightnessAlpha": 138,
            "result": "#8a8a8aff",
          },
          {
            "brightnessAlpha": 139,
            "result": "#8b8b8bff",
          },
          {
            "brightnessAlpha": 140,
            "result": "#8c8c8cff",
          },
          {
            "brightnessAlpha": 141,
            "result": "#8d8d8dff",
          },
          {
            "brightnessAlpha": 142,
            "result": "#8e8e8eff",
          },
          {
            "brightnessAlpha": 143,
            "result": "#8f8f8fff",
          },
          {
            "brightnessAlpha": 144,
            "result": "#909090ff",
          },
          {
            "brightnessAlpha": 145,
            "result": "#919191ff",
          },
          {
            "brightnessAlpha": 146,
            "result": "#929292ff",
          },
          {
            "brightnessAlpha": 147,
            "result": "#939393ff",
          },
          {
            "brightnessAlpha": 148,
            "result": "#949494ff",
          },
          {
            "brightnessAlpha": 149,
            "result": "#959595ff",
          },
          {
            "brightnessAlpha": 150,
            "result": "#969696ff",
          },
          {
            "brightnessAlpha": 151,
            "result": "#979797ff",
          },
          {
            "brightnessAlpha": 152,
            "result": "#989898ff",
          },
          {
            "brightnessAlpha": 153,
            "result": "#999999ff",
          },
          {
            "brightnessAlpha": 154,
            "result": "#9a9a9aff",
          },
          {
            "brightnessAlpha": 155,
            "result": "#9b9b9bff",
          },
          {
            "brightnessAlpha": 156,
            "result": "#9c9c9cff",
          },
          {
            "brightnessAlpha": 157,
            "result": "#9d9d9dff",
          },
          {
            "brightnessAlpha": 158,
            "result": "#9e9e9eff",
          },
          {
            "brightnessAlpha": 159,
            "result": "#9f9f9fff",
          },
          {
            "brightnessAlpha": 160,
            "result": "#a0a0a0ff",
          },
          {
            "brightnessAlpha": 161,
            "result": "#a1a1a1ff",
          },
          {
            "brightnessAlpha": 162,
            "result": "#a2a2a2ff",
          },
          {
            "brightnessAlpha": 163,
            "result": "#a3a3a3ff",
          },
          {
            "brightnessAlpha": 164,
            "result": "#a4a4a4ff",
          },
          {
            "brightnessAlpha": 165,
            "result": "#a5a5a5ff",
          },
          {
            "brightnessAlpha": 166,
            "result": "#a6a6a6ff",
          },
          {
            "brightnessAlpha": 167,
            "result": "#a7a7a7ff",
          },
          {
            "brightnessAlpha": 168,
            "result": "#a8a8a8ff",
          },
          {
            "brightnessAlpha": 169,
            "result": "#a9a9a9ff",
          },
          {
            "brightnessAlpha": 170,
            "result": "#aaaaaaff",
          },
          {
            "brightnessAlpha": 171,
            "result": "#abababff",
          },
          {
            "brightnessAlpha": 172,
            "result": "#acacacff",
          },
          {
            "brightnessAlpha": 173,
            "result": "#adadadff",
          },
          {
            "brightnessAlpha": 174,
            "result": "#aeaeaeff",
          },
          {
            "brightnessAlpha": 175,
            "result": "#afafafff",
          },
          {
            "brightnessAlpha": 176,
            "result": "#b0b0b0ff",
          },
          {
            "brightnessAlpha": 177,
            "result": "#b1b1b1ff",
          },
          {
            "brightnessAlpha": 178,
            "result": "#b2b2b2ff",
          },
          {
            "brightnessAlpha": 179,
            "result": "#b3b3b3ff",
          },
          {
            "brightnessAlpha": 180,
            "result": "#b4b4b4ff",
          },
          {
            "brightnessAlpha": 181,
            "result": "#b5b5b5ff",
          },
          {
            "brightnessAlpha": 182,
            "result": "#b6b6b6ff",
          },
          {
            "brightnessAlpha": 183,
            "result": "#b7b7b7ff",
          },
          {
            "brightnessAlpha": 184,
            "result": "#b8b8b8ff",
          },
          {
            "brightnessAlpha": 185,
            "result": "#b9b9b9ff",
          },
          {
            "brightnessAlpha": 186,
            "result": "#bababaff",
          },
          {
            "brightnessAlpha": 187,
            "result": "#bbbbbbff",
          },
          {
            "brightnessAlpha": 188,
            "result": "#bcbcbcff",
          },
          {
            "brightnessAlpha": 189,
            "result": "#bdbdbdff",
          },
          {
            "brightnessAlpha": 190,
            "result": "#bebebeff",
          },
          {
            "brightnessAlpha": 191,
            "result": "#bfbfbfff",
          },
          {
            "brightnessAlpha": 192,
            "result": "#c0c0c0ff",
          },
          {
            "brightnessAlpha": 193,
            "result": "#c1c1c1ff",
          },
          {
            "brightnessAlpha": 194,
            "result": "#c2c2c2ff",
          },
          {
            "brightnessAlpha": 195,
            "result": "#c3c3c3ff",
          },
          {
            "brightnessAlpha": 196,
            "result": "#c4c4c4ff",
          },
          {
            "brightnessAlpha": 197,
            "result": "#c5c5c5ff",
          },
          {
            "brightnessAlpha": 198,
            "result": "#c6c6c6ff",
          },
          {
            "brightnessAlpha": 199,
            "result": "#c7c7c7ff",
          },
          {
            "brightnessAlpha": 200,
            "result": "#c8c8c8ff",
          },
          {
            "brightnessAlpha": 201,
            "result": "#c9c9c9ff",
          },
          {
            "brightnessAlpha": 202,
            "result": "#cacacaff",
          },
          {
            "brightnessAlpha": 203,
            "result": "#cbcbcbff",
          },
          {
            "brightnessAlpha": 204,
            "result": "#ccccccff",
          },
          {
            "brightnessAlpha": 205,
            "result": "#cdcdcdff",
          },
          {
            "brightnessAlpha": 206,
            "result": "#cececeff",
          },
          {
            "brightnessAlpha": 207,
            "result": "#cfcfcfff",
          },
          {
            "brightnessAlpha": 208,
            "result": "#d0d0d0ff",
          },
          {
            "brightnessAlpha": 209,
            "result": "#d1d1d1ff",
          },
          {
            "brightnessAlpha": 210,
            "result": "#d2d2d2ff",
          },
          {
            "brightnessAlpha": 211,
            "result": "#d3d3d3ff",
          },
          {
            "brightnessAlpha": 212,
            "result": "#d4d4d4ff",
          },
          {
            "brightnessAlpha": 213,
            "result": "#d5d5d5ff",
          },
          {
            "brightnessAlpha": 214,
            "result": "#d6d6d6ff",
          },
          {
            "brightnessAlpha": 215,
            "result": "#d7d7d7ff",
          },
          {
            "brightnessAlpha": 216,
            "result": "#d8d8d8ff",
          },
          {
            "brightnessAlpha": 217,
            "result": "#d9d9d9ff",
          },
          {
            "brightnessAlpha": 218,
            "result": "#dadadaff",
          },
          {
            "brightnessAlpha": 219,
            "result": "#dbdbdbff",
          },
          {
            "brightnessAlpha": 220,
            "result": "#dcdcdcff",
          },
          {
            "brightnessAlpha": 221,
            "result": "#ddddddff",
          },
          {
            "brightnessAlpha": 222,
            "result": "#dededeff",
          },
          {
            "brightnessAlpha": 223,
            "result": "#dfdfdfff",
          },
          {
            "brightnessAlpha": 224,
            "result": "#e0e0e0ff",
          },
          {
            "brightnessAlpha": 225,
            "result": "#e1e1e1ff",
          },
          {
            "brightnessAlpha": 226,
            "result": "#e2e2e2ff",
          },
          {
            "brightnessAlpha": 227,
            "result": "#e3e3e3ff",
          },
          {
            "brightnessAlpha": 228,
            "result": "#e4e4e4ff",
          },
          {
            "brightnessAlpha": 229,
            "result": "#e5e5e5ff",
          },
          {
            "brightnessAlpha": 230,
            "result": "#e6e6e6ff",
          },
          {
            "brightnessAlpha": 231,
            "result": "#e7e7e7ff",
          },
          {
            "brightnessAlpha": 232,
            "result": "#e8e8e8ff",
          },
          {
            "brightnessAlpha": 233,
            "result": "#e9e9e9ff",
          },
          {
            "brightnessAlpha": 234,
            "result": "#eaeaeaff",
          },
          {
            "brightnessAlpha": 235,
            "result": "#ebebebff",
          },
          {
            "brightnessAlpha": 236,
            "result": "#ecececff",
          },
          {
            "brightnessAlpha": 237,
            "result": "#edededff",
          },
          {
            "brightnessAlpha": 238,
            "result": "#eeeeeeff",
          },
          {
            "brightnessAlpha": 239,
            "result": "#efefefff",
          },
          {
            "brightnessAlpha": 240,
            "result": "#f0f0f0ff",
          },
          {
            "brightnessAlpha": 241,
            "result": "#f1f1f1ff",
          },
          {
            "brightnessAlpha": 242,
            "result": "#f2f2f2ff",
          },
          {
            "brightnessAlpha": 243,
            "result": "#f3f3f3ff",
          },
          {
            "brightnessAlpha": 244,
            "result": "#f4f4f4ff",
          },
          {
            "brightnessAlpha": 245,
            "result": "#f5f5f5ff",
          },
          {
            "brightnessAlpha": 246,
            "result": "#f6f6f6ff",
          },
          {
            "brightnessAlpha": 247,
            "result": "#f7f7f7ff",
          },
          {
            "brightnessAlpha": 248,
            "result": "#f8f8f8ff",
          },
          {
            "brightnessAlpha": 249,
            "result": "#f9f9f9ff",
          },
          {
            "brightnessAlpha": 250,
            "result": "#fafafaff",
          },
          {
            "brightnessAlpha": 251,
            "result": "#fbfbfbff",
          },
          {
            "brightnessAlpha": 252,
            "result": "#fcfcfcff",
          },
          {
            "brightnessAlpha": 253,
            "result": "#fdfdfdff",
          },
          {
            "brightnessAlpha": 254,
            "result": "#fefefeff",
          },
          {
            "brightnessAlpha": 255,
            "result": "#ffffffff",
          },
        ]
      `);
    });

    it('handles "opacity" correctly', () => {
      const brightnessAlpha = 128;

      const results: Array<{
        brightnessAlpha: number;
        opacity: number;
        result: string;
      }> = [];

      for (let opacity = 0; opacity <= 100; opacity++) {
        results.push({
          brightnessAlpha,
          opacity,
          result: grayscale({brightnessAlpha, opacity}),
        });
      }

      expect(results).toMatchInlineSnapshot(`
        [
          {
            "brightnessAlpha": 128,
            "opacity": 0,
            "result": "#80808000",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 1,
            "result": "#80808003",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 2,
            "result": "#80808005",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 3,
            "result": "#80808008",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 4,
            "result": "#8080800a",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 5,
            "result": "#8080800d",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 6,
            "result": "#8080800f",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 7,
            "result": "#80808012",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 8,
            "result": "#80808014",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 9,
            "result": "#80808017",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 10,
            "result": "#8080801a",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 11,
            "result": "#8080801c",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 12,
            "result": "#8080801f",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 13,
            "result": "#80808021",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 14,
            "result": "#80808024",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 15,
            "result": "#80808026",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 16,
            "result": "#80808029",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 17,
            "result": "#8080802b",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 18,
            "result": "#8080802e",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 19,
            "result": "#80808030",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 20,
            "result": "#80808033",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 21,
            "result": "#80808036",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 22,
            "result": "#80808038",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 23,
            "result": "#8080803b",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 24,
            "result": "#8080803d",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 25,
            "result": "#80808040",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 26,
            "result": "#80808042",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 27,
            "result": "#80808045",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 28,
            "result": "#80808047",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 29,
            "result": "#8080804a",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 30,
            "result": "#8080804d",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 31,
            "result": "#8080804f",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 32,
            "result": "#80808052",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 33,
            "result": "#80808054",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 34,
            "result": "#80808057",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 35,
            "result": "#80808059",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 36,
            "result": "#8080805c",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 37,
            "result": "#8080805e",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 38,
            "result": "#80808061",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 39,
            "result": "#80808063",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 40,
            "result": "#80808066",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 41,
            "result": "#80808069",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 42,
            "result": "#8080806b",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 43,
            "result": "#8080806e",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 44,
            "result": "#80808070",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 45,
            "result": "#80808073",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 46,
            "result": "#80808075",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 47,
            "result": "#80808078",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 48,
            "result": "#8080807a",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 49,
            "result": "#8080807d",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 50,
            "result": "#80808080",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 51,
            "result": "#80808082",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 52,
            "result": "#80808085",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 53,
            "result": "#80808087",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 54,
            "result": "#8080808a",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 55,
            "result": "#8080808c",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 56,
            "result": "#8080808f",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 57,
            "result": "#80808091",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 58,
            "result": "#80808094",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 59,
            "result": "#80808096",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 60,
            "result": "#80808099",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 61,
            "result": "#8080809c",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 62,
            "result": "#8080809e",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 63,
            "result": "#808080a1",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 64,
            "result": "#808080a3",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 65,
            "result": "#808080a6",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 66,
            "result": "#808080a8",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 67,
            "result": "#808080ab",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 68,
            "result": "#808080ad",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 69,
            "result": "#808080b0",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 70,
            "result": "#808080b3",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 71,
            "result": "#808080b5",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 72,
            "result": "#808080b8",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 73,
            "result": "#808080ba",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 74,
            "result": "#808080bd",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 75,
            "result": "#808080bf",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 76,
            "result": "#808080c2",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 77,
            "result": "#808080c4",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 78,
            "result": "#808080c7",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 79,
            "result": "#808080c9",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 80,
            "result": "#808080cc",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 81,
            "result": "#808080cf",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 82,
            "result": "#808080d1",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 83,
            "result": "#808080d4",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 84,
            "result": "#808080d6",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 85,
            "result": "#808080d9",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 86,
            "result": "#808080db",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 87,
            "result": "#808080de",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 88,
            "result": "#808080e0",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 89,
            "result": "#808080e3",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 90,
            "result": "#808080e6",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 91,
            "result": "#808080e8",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 92,
            "result": "#808080eb",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 93,
            "result": "#808080ed",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 94,
            "result": "#808080f0",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 95,
            "result": "#808080f2",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 96,
            "result": "#808080f5",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 97,
            "result": "#808080f7",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 98,
            "result": "#808080fa",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 99,
            "result": "#808080fc",
          },
          {
            "brightnessAlpha": 128,
            "opacity": 100,
            "result": "#808080ff",
          },
        ]
      `);
    });
  });
});
