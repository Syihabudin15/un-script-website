'use client'
import { useEffect } from "react";
import { AboutUs, FormContact, ListSoftwares, ProductPrice, ProductSlider, WhyUsDiagram, WorkRoadmap } from "../../../components/Guest/Homepage"
import style from "./Home.module.css";
import { Divider } from "antd";

export default function HomePage(){
    useEffect(() => {
        const text = ["U", "N", " ", "S", "C", "R", "I", "P", "T"];
        let i = 0;
        const inter = setInterval(() => {
            document.getElementById('text-brand')?.append(text[i]);
            i++;
            if(i >= text.length){
                clearInterval(inter);
            }
        }, 300);
    }, []);
    return(
        <>
        <section title={`Brand ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['header-home']}>
            <section title={`Produk Un Script`} className={style['product-slider-wrap']} data-aos="fade-up" data-aos-delay="800">
                <ProductSlider/>
            </section>
            <section title={`Short description ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['short-desc']} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <h1 id="text-brand" className={style['text-brand']}></h1>
                <p>
                    {process.env.NEXT_PUBLIC_BASE_NAME} menyediakan layanan jasa untuk pembuatan Skrpisi, Tesis, Website, Aplikasi Mobile dan Undangan digital.<br />
                    Dengan testimoni pelanggan yang asli, anda dapat memilih penyedia jasa yang lebih baik
                </p>
            </section>
        </section>
        <div>
            <WhyUsDiagram/>
        </div>
        <div className={style["section"]}>
            <h3>Tentang Kami</h3>
            <Divider className={style['section-divider']}/>
            <AboutUs/>
        </div>
        <div className={style["section"]}>
            <h3>Harga Produk</h3>
            <Divider className={style['section-divider']}/>
            <ProductPrice/>
        </div>
        <div className={style["section"]}>
            <h3>Roadmap Pengerjaan</h3>
            <Divider className={style['section-divider']}/>
            <WorkRoadmap/>
        </div>
        <div className={style["section"]}>
            <ListSoftwares/>
        </div>
        <div className={style["section"]}>
            <FormContact/>
        </div>
        </>
    )
}