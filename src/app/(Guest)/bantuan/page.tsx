import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"
import style from "./Bantuan.module.css";
import dynamic from "next/dynamic";
const Faq = dynamic(() => import("./faq"), {loading: () => <>Loading..</>})

export const metadata: Metadata = {
    title: `Bantuan`,
    description: "Kami ingin membantu anda dengan lebih baik.",
    openGraph: {
        title: `Bantuan`,
        description: "Kami ingin membantu anda dengan lebih baik.",
        url: '/bantuan'
    }
}

export default function Bantuan(){
    return(
        <>
            <section title="Bantuan" className={style['bantuan-wrap']}>
                <Faq />
                <div className={style['right']}>
                    RIGHT
                </div>
            </section>
            <LiveChat/>
        </>
    )
}