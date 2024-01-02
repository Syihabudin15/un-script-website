import { Divider } from "antd"
import { Metadata } from "next"
import style from "./Review.module.css";
import { Aplikasi, TugasAkhir, Undangan } from "../../../../components/Guest/Review";

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
            <section title="Review Kami" className={style['review-wrap']}>
                <section title="Review Tugas Akhir">
                    <h2>Ulasan Tugas Akhir</h2>
                    <TugasAkhir/>
                </section>
                <Divider/>
                <section title="Review Aplikasi">
                    <h2>Ulasan Web App & Mobile App</h2>
                    <Aplikasi/>
                </section>
                <Divider/>
                <section title="Review Tugas Akhir">
                    <h2>Ulasan Undangan Digital</h2>
                    <Undangan/>
                </section>
            </section>
        </>
    )
}