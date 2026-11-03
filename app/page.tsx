// for the app directory (home page)

"use client"

import {useState} from "react";
import Link from "next/link";

export default function Home(){

    const [cat, setCat] = useState("");

    return (
        <>
            <h1>Welcome to the cat site</h1>
            <h2>Enter a breed name to get a list of images from cats of that breed</h2>
            <input type = "text" value = {cat} placeholder = {"Enter Cat Breed"} onChange = {(e) => setCat(e.target.value)}/>
            <Link href = {`${cat}`}>Get Cat</Link>
        </>
    );
}