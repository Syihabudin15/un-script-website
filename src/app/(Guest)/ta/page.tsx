import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"
import { Top } from "../../../../components/Guest/TugasAkhir"

export const metadata: Metadata = {
    title: `Tugas Akhir`,
    description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
    openGraph: {
        title: `Tugas Akhir`,
        description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
        url: '/ta'
    }
}

export default function Ta(){
    return(
        <>
            <section title="Tugas Akhir">
                <Top />
            </section>
            <LiveChat/>
        </>
    )
}