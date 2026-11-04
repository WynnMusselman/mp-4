// returns the data from the API

import {NextRequest, NextResponse} from "next/server";

// export const dynamic = "force-dynamic";

// the API key from TheCatAPI
const CAT_API_KEY = process.env.CAT_API_KEY;

// GET - requests and retrieves data from a web server
export async function GET(request: Request): Promise<NextResponse>{

    // API call to get random image of a cat
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?&api_key=${CAT_API_KEY}`);

    // if the API call fails then return an error
    if(res.status !== 200){
        return NextResponse.json({error: "Failed to get your cat :("}, {status: 500});
    }

    // parse the JSON data
    const data = await res.json();

    return NextResponse.json(data);
}


