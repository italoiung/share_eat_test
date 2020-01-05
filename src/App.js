import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { StoreProvider } from './store'
import reducers from "./reducers"
import initialState from "./store/initialState"

import Places from './components/organisms/Places'

import css from './index.css'

const GlobalStyle = createGlobalStyle`
    ${css}
`

const App = () => {
    return (
            <StoreProvider initialState={initialState} reducer={reducers}>
                <GlobalStyle />
                <Places />
            </StoreProvider>
    )
}

export default App