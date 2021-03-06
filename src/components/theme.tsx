/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AppThemeStyle as ThemeStyle } from 'core/types/GeneralTypes'
export type { ThemeStyle };


export type DefaultThemeColorsProps = {
  BACKGROUND_COLOR:  string,

  BACKGROUND_OVERLAY_COLOR: string

  TEXT_COLOR_PRIMARY: string,
  TEXT_COLOR_ALT: string,
  TEXT_COLOR_DISABLED: string,

  HIGHLIGHT_COLOR_FROM: string,
  HIGHLIGHT_COLOR_TO: string,

  NEU_SHADOW_PDARK:  string,
  NEU_SHADOW_PLIGHT: string,

  STATUSCOLOR_BLANK: string,
  STATUSCOLOR_SUCCESS: string,
  STATUSCOLOR_INFO: string,
  STATUSCOLOR_WARN: string,
  STATUSCOLOR_DANGER: string,
}

export const DefaultThemeColorsLight: DefaultThemeColorsProps = {
  // BACKGROUND_COLOR: "#e9edf0",
  BACKGROUND_COLOR: "#e0e5ec",

  BACKGROUND_OVERLAY_COLOR: "rgba(220, 225, 230, 0.9)",
  
  TEXT_COLOR_PRIMARY: "black",
  TEXT_COLOR_ALT: "#00000099",
  TEXT_COLOR_DISABLED: "#00000033",

  HIGHLIGHT_COLOR_FROM: "#d2d5d8",
  HIGHLIGHT_COLOR_TO: "#f9feff",

  // NEU_SHADOW_PDARK:  "#d3dbe6",
  NEU_SHADOW_PDARK:  "rgba(163,177,198,0.7)",
  NEU_SHADOW_PLIGHT: "rgba(255,255,255, 0.8)",

  STATUSCOLOR_BLANK: "#ffffffaa",
  STATUSCOLOR_SUCCESS: "#30624D",
  STATUSCOLOR_WARN: "#F0AF41",
  STATUSCOLOR_INFO: "#1E58AD",
  STATUSCOLOR_DANGER: "#9C2D31",
}

export const DefaultThemeColorsDark: DefaultThemeColorsProps = {
  BACKGROUND_COLOR: "rgb(42, 45, 50)",

  BACKGROUND_OVERLAY_COLOR: "rgba(42, 45, 50, 0.95)",
  
  TEXT_COLOR_PRIMARY: "white",
  TEXT_COLOR_ALT: "#ffffff77",
  TEXT_COLOR_DISABLED: "#ffffff11",
  
  HIGHLIGHT_COLOR_FROM: "#26292d",
  HIGHLIGHT_COLOR_TO: "#2d3036",

  NEU_SHADOW_PDARK: "#24262b",
  NEU_SHADOW_PLIGHT: "#30343a",

  STATUSCOLOR_BLANK: "#000000aa",
  STATUSCOLOR_SUCCESS: "rgb(48, 98, 77)",
  STATUSCOLOR_WARN: "rgb(240, 175, 65)",
  STATUSCOLOR_INFO: "rgb(30, 88, 173)",
  STATUSCOLOR_DANGER: "rgb(226, 55, 60)",
}

export const DefaultThemeColors = (type: ThemeStyle): DefaultThemeColorsProps => (
  type === "light" ? {...DefaultThemeColorsLight} : {...DefaultThemeColorsDark}
)



const bkgColorDefault = (type: ThemeStyle) => css`
  background-color: ${DefaultThemeColors(type).BACKGROUND_COLOR};
`

const actnBoxShadow1 = {
  normal: (type: ThemeStyle) => css`
    box-shadow:  3px  3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -3px -3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  hover: (type: ThemeStyle) => css`
    box-shadow:  7px 7px 14px  ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -7px -7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  active: (type: ThemeStyle) => css`
    box-shadow: inset  5px  5px 10px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                inset -5px -5px 10px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  disabled: (type: ThemeStyle) => css`
    box-shadow:  3px  3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK  + "77"},
                -3px -3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT + "77"};
  `,
}

const actnBoxShadow0 = {
  normal: (type: ThemeStyle) => css`
    box-shadow:  4px  4px 10px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -4px -4px 10px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  hover: (type: ThemeStyle) => css`
    box-shadow:  9px  9px 16px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -9px -9px 16px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  active: (type: ThemeStyle) => css`
    box-shadow: inset  7px  7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                inset -7px -7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  disabled: (type: ThemeStyle) => css`
    box-shadow:  6px  6px 11px ${DefaultThemeColors(type).NEU_SHADOW_PDARK + "55"},
                -6px -6px 11px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT + "55"};
  `,
}

const boxShadow = {
  small: (type: ThemeStyle) => css`
    box-shadow:  3px  3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -3px -3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
}

const boxShadowInset = {
  small: (type: ThemeStyle) => css`
    box-shadow: inset  5px  5px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                inset -5px -5px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `,
  medium: (type: ThemeStyle) => css`
    box-shadow: inset  7px  7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                inset -7px -7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  `
}

const mqSizes = {
  mobileS: "360px",
  mobileM: "480px",
  mobileL: "600px",
  desktopS: "768px",
  desktopM: "900px",
  desktopL: "1024px",
  dekstopXL: "1200px",
}

export type ThemeAwareLayout = {
  themeStyle: ThemeStyle
}


export const DefaultThemeProperties = {
  bkgColorDefault,
  actnBoxShadow0,
  actnBoxShadow1,
  boxShadow,
  boxShadowInset,
}

export {
  mqSizes
  // buildMediaQuery
}