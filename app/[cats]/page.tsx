"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import { Cat } from "@/app/interfaces/cat";
import styled from "styled-components";
import GlobalStyles from "@/app/components/GlobalStyles";

const Wrapper = styled.div`
    text-align: center;
    margin: auto;
    background-color: #96C9DC;
`

const MainStyled = styled.main`
    //width: 80%;
    min-height: 100vh;
`

const CatImg = styled.img`
    max-width: 30vw;
    border: 7px dotted #F06C9B;
`

const HeadingStyled = styled.h1`
    font: calc(2px + 4vw) "Comic Sans MS", Papyrus, cursive;
    padding: 3%;
`

export default function RandomCat(){

    // const params = useParams();

    // gets the cat route
    const {data, error} = useSWR<Cat[]>("/api/cat", (url: string) => fetch(url).then((res) => res.json()));

    // handles error messages
    // if the image can't load
    if(error) return <div>Failed to Meow</div>

    // if there is no data yet
    if(!data) return <div>Loading Cat...</div>

    //first item in Cats interface JSON is id
    const cat_id = data[0];

    return(
        <Wrapper>
            <GlobalStyles/>

            <MainStyled>
                <HeadingStyled>Your random cat...</HeadingStyled>
                <CatImg src = {cat_id.url} alt = "a random cat"/>
            </MainStyled>
        </Wrapper>
    )
}