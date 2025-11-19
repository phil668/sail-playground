import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const colorPalette = {
  red: {
    1: "#6D0019",
    2: "#7F001D",
    3: "#920022",
    4: "#9D0024",
    5: "#C53355",
    6: "#D3667F",
    7: "#F0CCD4",
    8: "#F9F0F2",
  },
  grape: {
    1: "#40213E",
    2: "#5F325D",
    3: "#7F427C",
    4: "#9F539B",
    5: "#B275AF",
    6: "#C598C3",
    7: "#ECDDEB",
    8: "#F5EEF5",
  },
  gray: {
    1: "#333333",
    2: "#5C5C5C",
    3: "#858585",
    4: "#ADADAD",
    5: "#C2C2C2",
    6: "#D6D6D6",
    7: "#EBEBEB",
    8: "#F8F8F8",
  },
  cyan: {
    1: "#F8F8F8",
    2: "#007176",
    3: "#00979D",
    4: "#00BDC4",
    5: "#33CAD0",
    6: "#66D7DC",
    7: "#CCF2F3",
    8: "#E6F8F9",
  },
  gold: {
    1: "#634F28",
    2: "#8A6E38",
    3: "#9E7E40",
    4: "#C59D50",
    5: "#D1B173",
    6: "#DCC496",
    7: "#EEE2CB",
    8: "#F9F5EE",
  },
  orange: {
    1: "#753101",
    2: "#8C3A01",
    3: "#BB4E01",
    4: "#EA6101",
    5: "#EE8134",
    6: "#F2A067",
    7: "#F7C099",
    8: "#FFF0DD",
  },
  white: "#FFFFFF",
};
export default defineConfig({
  theme: {
    colors: {
      boc: {
        ...colorPalette,
        "brand-red": colorPalette.red["4"],
        primary: colorPalette.red["5"],
        secondary: colorPalette.grape["3"],
        background: {
          white: colorPalette.white,
          "surface-1": colorPalette.gray["8"],
          "surface-2": colorPalette.gray["7"],
        },
        text: {
          primary: colorPalette.gray["1"],
          secondary: colorPalette.gray["2"],
        },
        icon: {
          general: colorPalette.gray["1"],
          disabled: colorPalette.gray["4"],
          selected: colorPalette.red["4"],
          error: colorPalette.red["3"],
        },
      },
    },
  },
  rules: [
    // ['bg-wave', { 'background': 'url(\'~/assets/images/travel_home_bg.png\') no-repeat', 'background-size': 'cover' }],
  ],
  shortcuts: [
    ["line", "flex flex-row"],
    ["list", "flex flex-col"],
    ["xbk-skeleton", "rounded-sm from-boc-gray-6 bg-gradient-to-r shadow-sm"],
    [
      "display-box",
      "flex-none flex flex-wrap gap-1 p-1 border-dashed border-1.2 p-1 border-boc-primary m-0.3",
    ],
    [
      "h-status-bar",
      "h-[var(--boc-status-bar-height,0px)] min-h-[var(--boc-status-bar-height,0px)]",
    ],
    [
      "h-content-page",
      "h-[calc(100vh-var(--boc-status-bar-height,0px))] min-h-[calc(100vh-var(--boc-status-bar-height,0px))]",
    ],
    [
      "scroll-page",
      "h-full w-screen overflow-y-auto overflow-x-hidden overscroll-none max-w-screen min-w-screen max-h-screen",
    ],
    [
      "full-page",
      "h-screen w-screen overflow-y-auto overflow-x-hidden overscroll-none max-w-screen min-w-screen min-h-screen max-h-screen",
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  variants: [
    function lang(matcher) {
      if (
        matcher.startsWith("lang-EN:") ||
        matcher.startsWith("lang-CN:") ||
        matcher.startsWith("lang-TW:")
      ) {
        const lang = matcher.substring(5, 7);
        return {
          matcher: matcher.slice(8),
          selector: (s) => `[langType=${lang}] ${s}`,
        };
      } else {
        return matcher;
      }
    },
    function fontScale(matcher) {
      if (
        matcher.startsWith("app-sm:") ||
        matcher.startsWith("app-md:") ||
        matcher.startsWith("app-lg:")
      ) {
        const scale = matcher.substring(4, 6);
        return {
          matcher: matcher.slice(7),
          selector: (s) => `[fontScale=${scale}] ${s}`,
        };
      } else {
        return matcher;
      }
    },
    function platform(matcher) {
      if (matcher.startsWith("aos:") || matcher.startsWith("ios:")) {
        const os = matcher.substring(0, 3);
        return {
          matcher: matcher.slice(4),
          selector: (s) => `[platform=${os}] ${s}`,
        };
      } else {
        return matcher;
      }
    },
  ],
  safelist: "prose prose-sm m-auto text-left".split(" "),
});
