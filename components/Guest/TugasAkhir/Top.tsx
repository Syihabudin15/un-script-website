"use client"
import { Carousel } from "antd";
import style from "../../../src/app/(Guest)/ta/Ta.module.css";
import { LoadingOutlined, SnippetsOutlined, BgColorsOutlined, RadarChartOutlined, DropboxOutlined, CodeOutlined, CoffeeOutlined, FireOutlined } from "@ant-design/icons"

export default function Top(){
    return(
        <section title="Top Header" className={style['top-wrap']}>
            <div className={style['top-brand-text']}>
                <h1>Bingung Mengerjakan</h1>
                <Carousel  autoplay autoplaySpeed={3000} dots={false} style={{width: 120, fontFamily: 'Times New Roman', color: 'blue'}} waitForAnimate>
                    <p>SKRIPSI ?</p>
                    <p>TESIS ?</p>
                    <p>JURNAL ?</p>
                </Carousel>
            </div>
            <div className={style['text-solution']}>
                <div className={style["hiasan"]}>
                    <div className={style['hiasan1']}></div>
                    <LoadingOutlined style={{color: 'blue'}} />
                    <SnippetsOutlined/>
                    <BgColorsOutlined style={{color: 'blue', fontSize: 40}}/>
                </div>
                <div className={style['soltext']}>
                    <p style={{color: "yellow"}}>Tenang !</p>
                    <p>Kami memiliki layanan untuk memecahkan masalah yang sedang anda hadapi</p>
                </div>
                <div className={style["hiasan"]}>
                    <RadarChartOutlined id="rotate-deg" style={{color: 'blue', fontSize: 50}} />
                    <DropboxOutlined />
                </div>
                <div className={style["hiasan"]}>
                    <CodeOutlined />
                    <FireOutlined style={{color: 'red', fontSize: 40}} />
                    <CoffeeOutlined style={{color: 'blue', fontSize: 60}} />
                </div>
            </div>
        </section>
    )
}