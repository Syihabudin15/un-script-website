"use client"
import { Button, Carousel } from "antd";
import style from "../../../src/app/(Guest)/Home.module.css";

export default function ProductSlider(){
    return(
        <div>
            <Carousel autoplay className={style["product-slider"]}>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Skripsi</p>
                    <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Tesis</p>
                    <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Undangan Digital</p>
                    <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Website</p>
                    <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Aplikasi Mobile</p>
                    <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                </div>
            </Carousel>
        </div>
    )
}