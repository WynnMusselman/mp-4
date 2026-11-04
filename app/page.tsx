// for the app directory (home page)

"use client"

import Link from "next/link";
import styled from 'styled-components';
import GlobalStyles from "@/app/components/GlobalStyles";

const Wrapper = styled.div`
    background-color: #F9B9B7;
    text-align: center;
    margin: auto;
`

const MainStyle = styled.main`
    min-height: 100vh;
`

const CatButton = styled(Link)`
    background-color: #61A0AF;
    color: #F06C9B;
    text-align: center;
    margin: 5%;
    padding: 3%;
`



export default function Home(){

    return (
        <Wrapper>
            <GlobalStyles/>
            <MainStyle>
                <h1>Welcome to the cat site</h1>
                <CatButton href = "/cats">Get Random Cat</CatButton>
            </MainStyle>
        </Wrapper>
    );
}