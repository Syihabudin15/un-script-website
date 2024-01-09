import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat";
import Root from "./root";

export const metadata: Metadata = {
    title: `Reviews`,
    description: "Reviews Un untuk pembuatan Skripsi, Tesis, Aplikasi dan Undangan",
    openGraph: {
        title: `Reviews`,
        type: 'website',
        description: "Reviews untuk pembuatan Skripsi, Tesis, Aplikasi dan Undangan",
        url: '/review'
    },
    robots: {index: true, follow: true},
    alternates: {canonical: '/'},
    keywords: ''
}

export default function Review(){
    return(
        <>
            <h1 style={{display: 'none'}}>Reviews Page</h1>
            <Root />
            <LiveChat/>
        </>
    )
}