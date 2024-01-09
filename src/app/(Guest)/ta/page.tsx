import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"
import { Products, Top } from "../../../../components/Guest/TugasAkhir"

export const metadata: Metadata = {
    title: `Tugas Akhir`,
    description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
    openGraph: {
        title: `Tugas Akhir`,
        description: "Un Script jasa pembuatan tugas akhir Skripsi dan Tesis",
        url: '/ta'
    },
    alternates: {canonical: '/ta'},
    robots: {index: true, follow: true},
    keywords: ["tugas", "tugas akhir"]
}

export default function Ta(){
    return(
        <>
            <section title="Tugas Akhir">
                <Top />
                <Products/>
            </section>
            <div style={{display: 'flex', gap: 15, padding: 20, textAlign: 'justify', fontSize: 14}}>
                <p style={{fontWeight: 'bold', textWrap: 'nowrap'}}>NOTE :</p>
                <p>Jika layanan yang tertera tidak sesuai dengan kebutuhan anda, mohon hubungi kami melalui WhatApps atau Email untuk melakukan order dengan lebih spesifik</p>
            </div>
            <LiveChat/>
        </>
    )
}