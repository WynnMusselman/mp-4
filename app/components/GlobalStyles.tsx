import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }
`

export default function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
        </>
    )
}