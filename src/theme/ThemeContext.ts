import { createContext, ReactNode } from 'react'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

export interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
