import { TAppTheme as ThemeStyle } from 'core/rootStateTypes'


export type DefaultThemeColorsProps = {
  BACKGROUND_COLOR:  string,

  TEXT_COLOR_PRIMARY: string,
  TEXT_COLOR_ALT: string,
  TEXT_COLOR_DISABLED: string,

  HIGHLIGHT_COLOR_FROM: string,
  HIGHLIGHT_COLOR_TO: string,

  NEU_SHADOW_PDARK:  string,
  NEU_SHADOW_PLIGHT: string,
}

export const DefaultThemeColorsLight: DefaultThemeColorsProps = {
  BACKGROUND_COLOR: "#e9edf0",
  
  TEXT_COLOR_PRIMARY: "black",
  TEXT_COLOR_ALT: "black",
  TEXT_COLOR_DISABLED: "#00000033",

  HIGHLIGHT_COLOR_FROM: "#d2d5d8",
  HIGHLIGHT_COLOR_TO: "#f9feff",

  NEU_SHADOW_PDARK:  "#d3dbe6",
  NEU_SHADOW_PLIGHT: "#ffffff",
}

export const DefaultThemeColorsDark: DefaultThemeColorsProps = {
  BACKGROUND_COLOR: "#2a2d32",
  
  TEXT_COLOR_PRIMARY: "white",
  TEXT_COLOR_ALT: "white",
  TEXT_COLOR_DISABLED: "#ffffff11",
  
  HIGHLIGHT_COLOR_FROM: "#26292d",
  HIGHLIGHT_COLOR_TO: "#2d3036",

  NEU_SHADOW_PDARK: "#24262b",
  NEU_SHADOW_PLIGHT: "#30343a",
}

export const DefaultThemeColors = (type: ThemeStyle): DefaultThemeColorsProps => (
  type === "light" ? {...DefaultThemeColorsLight} : {...DefaultThemeColorsDark}
)

export type { ThemeStyle };