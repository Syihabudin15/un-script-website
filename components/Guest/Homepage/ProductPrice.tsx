import { Button, Divider } from "antd";
import style from "../../../src/app/(Guest)/Home.module.css";
import Link from "next/link";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function ProductPrice(){
    return(
        <section title={`Daftar Produk ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['card-product']}>
            {items.map((e,i) => (
                <section title={`Pembuatan ${e.name}`} key={i} className={style['product-item']} data-aos="fade-up" data-aos-duration="1000">
                    <div className={style['product-title']}>
                        <h3>{e.name.toUpperCase()}</h3>
                    </div>
                    <div>
                        {e.pricelist.map((p,ind) => (
                            <div key={ind} className={style['price']}>
                                <p>{p.name}</p>
                                <p className={style['price-startat']}>Start at</p>
                                <p>Rp. {p.price}</p>
                            </div>
                        ))}
                    </div>
                    <Divider/>
                    <div className={style['benefits']}>
                        {e.benefits.map((b,ib) => (
                            <div key={ib}><CheckCircleOutlined style={{color: 'green', marginRight: 5}}/> {b}</div>
                        ))}
                    </div>
                    <div>
                        <Link href={e.url}>
                            <Button type="primary" block>ORDER</Button>
                        </Link>
                    </div>
                </section>
            ))}
        </section>
    )
}

const items = [
    {
        name: "Tugas Akhir",
        pricelist: [
            {name: "Proposal", price: "300.000"},
            {name: "Full", price: "2.500.000"},
        ],
        benefits: ["Full Revisi", <>Meet dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Literasi terbaru", "Min 25 kutipan"],
        url: "/ta"
    },
    {
        name: "Undangan",
        pricelist: [
            {name: "Tema", price: "50.000"},
            {name: "Custom", price: "200.00"},
        ],
        benefits: ["Full Revisi", <>Meet dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Literasi terbaru", "Min 25 kutipan"],
        url: "/undangan"
    },
    {
        name: "Web App",
        pricelist: [
            {name: "Frontend", price: "300.000"},
            {name: "Backend", price: "1.000.000"},
        ],
        benefits: ["Full Revisi", <>Meet dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Literasi terbaru", "Min 25 kutipan"],
        url: "/apps"
    },
    {
        name: "Mobile App",
        pricelist: [
            {name: "Frontend", price: "500.000"},
            {name: "Backend", price: "1.500.000"},
        ],
        benefits: ["Full Revisi", <>Meet dengan tim <span className={style['text-muted']}>(Offline/Online)</span></>, "Literasi terbaru", "Min 25 kutipan"],
        url: "/apps"
    },
]