import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Tugas Akhir | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
    openGraph: {
        title: `Tugas Akhir | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
        url: '/ta'
    }
}

export default function Ta(){
    return(
        <>
            <h1>Tugas Akhir Page</h1>
        </>
    )
}