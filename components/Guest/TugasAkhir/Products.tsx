import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { Button, Divider } from "antd";
import style from "../../../src/app/(Guest)/ta/Ta.module.css";
import Link from "next/link";

export default function Products(){
    return(
        <section title="Daftar layanan" className={style['list-layanan']}>
            <div className={style['pengantar']}>
                <p>
                    Tugas akhir seringkali membuat mahasiswa/mahasiswi kesulitan untuk menyelesaikannya. Hal itu dapat dikarenakan beberapa penyebab, bisa karena sibuk dengan pekerjaan, kurangnya pemahaman akan materi-materi yang telah disampaikan, kebingungan memilih topik penelitian, atau penyebab lainnya.
                </p>
                <p>
                    {process.env.NEXT_PUBLIC_BASE_NAME} menjadi pilihan yang tepat bagi anda untuk mendapatkan solusi terbaik dari permasalahan yang sedang dihadapi. Kami menyediakan layanan jasa berpengalaman untuk pembuatan Skripsi, Tesis, Jurnal, PPT, pengerjaan tugas ujian, pengerjaan revisian dan lainnya. Layanan kami tidak hanya melakukan pengerjaan tetapi juga membimbing pelanggan untuk dapat memahami apa yang sedang diteliti serta proses dan tahapan di dalamnya.
                </p>
                <p>Berikut daftar harga untuk setiap layanan yang kami tawarkan.</p>
            </div>
            <Divider/>
            <div className={style["list"]}>
                {items.map((e,i) => (
                    <div key={i} className={style["list-item"]} id="scale-out" data-aos="zoom-in">
                        <h2>{e.name}</h2>
                        <div>
                            {e.pricelist.map((p,pi) => (
                                <div key={pi} className={style['list-price']}>
                                    <p>{p.name}</p>
                                    <p>Start at</p>
                                    <p>RP. {p.price}</p>
                                </div>
                            ))}
                        </div>
                        <Divider/>
                        <div className={style['benefits']}>
                            {e.benefits && e.benefits.map((b, bi) => (
                                <div key={bi}><CheckCircleOutlined style={{marginRight: 10, color: 'green'}}/> {b}</div>
                            ))}
                        </div>
                        <Divider/>
                        <div className={style['benefits']}>
                            <div>
                                <MinusCircleOutlined style={{marginRight: 10, color: 'red'}}/>
                                Data penelitian <span className={style['text-muted']}>(Dari Client)</span>
                            </div>
                        </div>
                        <div style={{marginTop: 20}}>
                            <Link href={e.url} title={`Order ${e.name}`}>
                                <Button block type="primary">ORDER</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const items = [
    {
        name: "SKRIPSI",
        pricelist: [
            {name: "Proposal", price: "300.000"},
            {name: "Full", price: "2.000.000"},
        ],
        benefits: ["Full Revisi", <>Bimbingan dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Pengolahan data", "Literasi terbaru", "Minimal 20 kutipan", "Menggunakan Mendeley", "Cek Turnitin", "Jaminan Lulus"],
        url: "/ta/order?type=skripsi"
    },
    {
        name: "TESIS",
        pricelist: [
            {name: "Proposal", price: "500.000"},
            {name: "Full", price: "3.000.000"},
        ],
        benefits: ["Full Revisi", <>Bimbingan dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Pengolahan data", "Literasi terbaru", "Minimal 25 kutipan", "Menggunakan Mendeley", "Cek Turnitin", "Jaminan Lulus"],
        url: "/ta/order?type=tesis"
    },
    {
        name: "SKRIPSI PERBAB",
        pricelist: [
            {name: "BAB 1", price: "200.000"},
            {name: "BAB 2", price: "200.000"},
            {name: "BAB 3", price: "300.000"},
            {name: "BAB 4", price: "500.000"},
            {name: "BAB 5", price: "500.000"},
            {name: "BAB 6", price: "400.000"},
        ],
        benefits: ["Full Revisi", "Bimbingan 2x"],
        url: "/ta/order?type=skripsi_bab"
    },
    {
        name: "TESIS PERBAB",
        pricelist: [
            {name: "BAB 1", price: "400.000"},
            {name: "BAB 2", price: "400.000"},
            {name: "BAB 3", price: "500.000"},
            {name: "BAB 4", price: "700.000"},
            {name: "BAB 5", price: "700.000"},
            {name: "BAB 6", price: "500.000"},
        ],
        benefits: ["Full Revisi", "Bimbingan 2x"],
        url: "/ta/order?type=tesis_bab"
    },
    {
        name: "JURNAL",
        pricelist: [
            {name: "Full", price: "300.000"},
        ],
        benefits: ["Full Revisi", <>Bimbingan dengan tim <span className={style['text-muted']}>(Online)</span></>, "Literasi terbaru"],
        url: "/ta/order?type=jurnal"
    },
    {
        name: "POWER POINT",
        pricelist: [
            {name: "Full", price: "100.000"},
        ],
        benefits: ["Full Revisi", "Bahasan Menarik", "Request Minimal Slide"],
        url: "/ta/order?type=ppt"
    },
    {
        name: "REVISIAN",
        pricelist: [
            {name: "Full", price: "100.000"},
        ],
        benefits: ["Full Revisi", <>Bimbingan dengan tim <span className={style['text-muted']}>(Online)</span></>, "Cek Turnitin"],
        url: "/ta/order?type=revisian"
    },
]