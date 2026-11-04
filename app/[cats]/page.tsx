"use client";

import {useParams} from "next/navigation";
import useSWR from "swr";

export default function Cats(){

    const params = useParams();

    // fetch cat api data with SWR
    const {data, error} = useSWR(`https://api.thecatapi.com/v1/images/search?&api_key=${params.id}`,
        (url) =>
            fetch(url).then((res) => res.json())
    );

    // handles error messages
    // if the image can't load
    if(error) return <div>Failed to Meow</div>

    // if there is no data yet
    if(!data) return <div>Loading Cats...</div>

    // if there is data
    // const cats = cats?.id || [];

    return(
        <>

        </>
    )
}