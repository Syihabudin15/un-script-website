import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Messages",
    description: 'Admin messages list'
}

export default function Msg(){
    return(
        <>
            <h1>Messages Page</h1>
        </>
    )
}