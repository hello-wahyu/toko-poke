import { useReducer, createContext, Dispatch } from 'react'
import { appReducer } from './reducer'
import { TAppAction } from './actions'
import {
  TMyProfile,
  TAppState,
  initialState
} from './state'


export const AppState    = createContext<TAppState | undefined>(undefined)
export const AppDispatch = createContext<Dispatch<TAppAction> | undefined>(undefined)


export const AppStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        { children }
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}