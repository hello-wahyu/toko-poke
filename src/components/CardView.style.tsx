/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultTheme, ThemeStyle } from './theme'

const cssCardViewHover = (type: ThemeStyle) => css`
  &:hover {
    box-shadow:  10px  10px 20px ${DefaultTheme(type).NEU_SHADOW_PDARK},
                -10px -10px 20px ${DefaultTheme(type).NEU_SHADOW_PLIGHT};
  }
`

const cssCardViewActive = (type: ThemeStyle) => css`
  &:active:not(:focus-within) {
    box-shadow: inset  7px  7px 14px ${DefaultTheme(type).NEU_SHADOW_PDARK},
                inset -7px -7px 14px ${DefaultTheme(type).NEU_SHADOW_PLIGHT};
  }
`

const cssCardViewDisabled = (type: ThemeStyle) => css`  
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
  box-shadow:  6px  6px 11px ${DefaultTheme(type).NEU_SHADOW_PDARK + "55"},
              -6px -6px 11px ${DefaultTheme(type).NEU_SHADOW_PLIGHT + "55"};
`

export type CssCardViewProps = {
  isClickable: boolean,
  isDisabled: boolean,
  ThemeStyle: ThemeStyle,
}

export const cssCardView = (props: CssCardViewProps) => css`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 15px;
  background: ${DefaultTheme(props.ThemeStyle).BACKGROUND_COLOR};
  box-shadow:  6px  6px 11px ${DefaultTheme(props.ThemeStyle).NEU_SHADOW_PDARK},
              -6px -6px 11px ${DefaultTheme(props.ThemeStyle).NEU_SHADOW_PLIGHT};
              
  transition: box-shadow 150ms;

  ${props.isDisabled && cssCardViewDisabled(props.ThemeStyle)}
  
  ${(!props.isDisabled && props.isClickable) && css`
    cursor: pointer;
    
    ${cssCardViewHover(props.ThemeStyle)};

    ${cssCardViewActive(props.ThemeStyle)};
  `}
`

export type {
  ThemeStyle
}