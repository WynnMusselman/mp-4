// for the app directory (home page)

"use client"

import Link from "next/link";
import styled from 'styled-components';
import GlobalStyles from "@/app/components/GlobalStyles";

const Wrapper = styled.div`
    background-color: #F06C9B;
    text-align: center;
    margin: auto;
`

const MainStyle = styled.main`
    min-height: 100vh;
`

const HeadingStyle = styled.h1`
    font: bold calc(2px + 5vw) "Comic Sans MS", Papyrus, cursive;
    padding: 3%;
    color: #96C9DC;
`

const ImgStyle = styled.img`
    max-width: 30vw;
    border: 6px dashed #96C9DC; 
    border-radius: 50%;
`

const LinkStyle = styled(Link)`
    font: bold calc(2px + 3vw) "Comic Sans MS", Papyrus, cursive;
    padding: 3%;
    color: #bf3969;
    display: block;
    text-decoration: none;
    border: 6px dashed #96C9DC;
    text-align: center;
    margin: 2% auto;
    background-color: #F5D491;

    width: 50%;

    &:hover {
        font-style: italic;
        border-style: dotted;
        border-color: #61A0AF;
        background-color: #f3ca79;
    }
`



export default function Home(){

    return (
        <Wrapper>
            <GlobalStyles/>
            <MainStyle>
                <HeadingStyle>Welcome to my Cat Site</HeadingStyle>
                <LinkStyle href = "/cats">Get Random Cat</LinkStyle>
                <ImgStyle src = "https://media1.tenor.com/m/aGj-frNYMFEAAAAC/cat-cat-dance.gif" alt = "kitten dancing on the beach"/>
            </MainStyle>
        </Wrapper>
    );
}