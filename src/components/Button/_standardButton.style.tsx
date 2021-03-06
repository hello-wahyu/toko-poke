/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  DefaultThemeColors, 
} from 'components/theme'
import {
  ButtonBaseProps, 
  cssButtonBase,
  cssButtonBaseNormal,
  cssButtonBaseHover,
  cssButtonBaseActive,
  cssButtonBaseDisabled,
} from './_base.style'

export type StandardButtonBaseProps = ButtonBaseProps & {}


const cssStandardButtonNormal = (props: StandardButtonBaseProps) => css`
  ${cssButtonBaseNormal(props)}

  border-radius: 4px;
`

const cssStandardButtonHover = (props: StandardButtonBaseProps) => css`
  background: linear-gradient(
      145deg, 
      ${DefaultThemeColors(props.themeStyle).HIGHLIGHT_COLOR_TO}, 
      ${DefaultThemeColors(props.themeStyle).HIGHLIGHT_COLOR_FROM}
    );

  ${cssButtonBaseHover(props)}
`

const cssStandardButtonActive = (props: StandardButtonBaseProps) => css`
  ${cssButtonBaseActive(props)}
`

const cssStandardButtonDisabled = (props: StandardButtonBaseProps) => css`
  ${cssButtonBaseDisabled(props)}
`


export const cssStandardButtonBase = (props: StandardButtonBaseProps) => css`

  ${cssButtonBase(props)}
  
  ${cssStandardButtonNormal(props)}

  &:disabled {
    ${cssStandardButtonDisabled(props)}
  }

  ${
    (props.isLoading || props.isDisabled) 
    && css`
      color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR}
    `
  }

  ${(!props.isLoading && !props.isDisabled) && css`
      cursor: pointer;
      
      &:focus, &:hover, &:active {
        border: none;
      }

      &:hover {
        ${cssStandardButtonHover(props)}
      }
      
      &:active {
        ${cssStandardButtonActive(props)}
      }
    `
  }
`