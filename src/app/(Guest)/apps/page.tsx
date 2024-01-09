import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"
import style from "./Apps.module.css";
import { ImgLeft, ImgRight, Header, ExampleProject } from "./import";

export const metadata: Metadata = {
    title: `Aplikasi`,
    description: ``,
    openGraph: {
        title: `Aplikasi`,
        description: ``,
        url: '/apps',
        images: "",
        type: "website",
        locale: "en_US"
    },
    alternates: {canonical: '/apps'},
    robots: {index: true, follow: true},
    keywords: [""],
}

export default function Apps(){
    return(
        <>
            <section className={style["wrapper"]}>
                <section title="Unscript Header" className={style['header-wrap']}>
                    <Header />
                </section>

                <section title="Fitur">
                    <ImgLeft title={'Relational Database'} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus error ipsum quasi, sunt amet cumque beatae at eligendi perspiciatis doloribus?"} src="/code.jpg"/>
                    <ImgRight desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus error ipsum quasi, sunt amet cumque beatae at eligendi perspiciatis doloribus?'} title={"No Relational Database"} src="/code.jpg"/>
                </section>
                <ExampleProject/>
            </section>
            <LiveChat/>
        </>
    )
}