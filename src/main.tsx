import { ThemeProvider } from '@emotion/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './theme'
import { JotaiProvider } from './providers/jotai-provider'
import ColorModeProvider from './providers/color-mode-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}>
            <JotaiProvider>
                <App />
            </JotaiProvider>
        </ThemeProvider> */}
        <ColorModeProvider>
            <JotaiProvider>
                <App />
            </JotaiProvider>
        </ColorModeProvider>
    </React.StrictMode>
)
