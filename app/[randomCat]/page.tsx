"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";
import { Cat } from "@/app/interfaces/cat";

export default function RandomCat(){

    // const params = useParams();

    // gets the cat route
    const {data, error} = useSWR<Cat[]>("/api/cat", (url: string) => fetch(url).then((res) => res.json()));

    // handles error messages
    // if the image can't load
    if(error) return <div>Failed to Meow</div>

    // if there is no data yet
    if(!data) return <div>Loading Cats...</div>

    //first item in Cats interface JSON is id
    const cat_id = data[0];

    return(
        <>
            <h1>Your random cat...</h1>

            <img src = {cat_id.url} alt = "a random cat"/>

        </>
    )
}