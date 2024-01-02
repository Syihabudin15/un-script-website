import { Button, Carousel } from "antd";
import style from "../../../src/app/(Guest)/Home.module.css";
import Link from "next/link";

export default function ProductSlider(){
    return(
        <div>
            <Carousel autoplay className={style["product-slider"]}>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Skripsi</p>
                    <Link href={'/ta'} target="_blank" title="Order Pembuatan Skripsi">
                        <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                    </Link>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Tesis</p>
                    <Link href={'/ta'} target="_blank" title="Order Pembuatan Tesis">
                        <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                    </Link>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Undangan Digital</p>
                    <Link href={'/undangan'} target="_blank" title="Order Pembuatan Undangan Digital">
                        <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                    </Link>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Website</p>
                    <Link href={'/apps'} target="_blank" title="Order Pembuatan Website">
                        <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                    </Link>
                </div>
                <div>
                    <p className={style['product-slider-title']}>Pembuatan Aplikasi Mobile</p>
                    <Link href={'/apps'} target="_blank" title="Order Pembuatan Aplikasi Mobile">
                        <Button type="primary" style={{fontWeight: 'bold'}}>ORDER NOW</Button>
                    </Link>
                </div>
            </Carousel>
        </div>
    )
}