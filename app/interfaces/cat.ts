
export type Cat = {
    "id": string, //just unique part of url
    "url": string, //full url
    "width": number,
    "height": number,
    "created_at": string, //day and time cat photo was posted
    "breeds": string[],
    "categories": string[],
    "colours": string[],
    "tags": string[]
}