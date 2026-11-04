// for the app directory (home page)

"use client"

import {useState} from "react";
import Link from "next/link";

export default function Home(){

    const [cat, setCat] = useState("");

    return (
        <>
            <h1>Welcome to the cat site</h1>
            <Link href = "\cats">Get Random Cat</Link>
        </>
    );
}