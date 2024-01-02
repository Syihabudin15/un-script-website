"use client"
import { Avatar, Card } from "antd";
import style from "../../../src/app/(Guest)/artikel/Artikel.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const Adds = dynamic(() => import("../../Adds"), {loading: () => <>Loading..</>});

export default function CardParams(){
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Adds size={400} btnSize="large" />
            <div className={style['add-hide']}>
                <Adds size={400} btnSize="large" />
            </div>
        </div>
        <article title="Card" className={style["card-params-wrap"]}>
            <Link href={'/artikel/params'} className={style["card-params"]} target="_blank" title={`Artikel judul`}>
                <Card>
                    <article style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                        <div>
                            <Avatar src={'/baseImg.jpg'} size={100} shape="square" />
                        </div>
                        <div>
                            <h2 className={style["card-params-title"]}>Judul Artikel</h2>
                            <div className={style["card-params-date"]}>11 Agustus 2001</div>
                            <p className={style["card-params-desc"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis numquam ex placeat, nulla molestias dolor hic dignissimos incidunt magnam!</p>
                        </div>
                    </article>
                </Card>
            </Link>
            <Link href={'/artikel/params'} className={style["card-params"]} target="_blank">
                <Card>
                    <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                        <div>
                            <Avatar src={'/baseImg.jpg'} size={100} shape="square" />
                        </div>
                        <div>
                            <div className={style["card-params-title"]}>Judul Artikel</div>
                            <div className={style["card-params-date"]}>11 Agustus 2001</div>
                            <div className={style["card-params-desc"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis numquam ex placeat, nulla molestias dolor hic dignissimos incidunt magnam!</div>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link href={'/artikel/params'} className={style["card-params"]} target="_blank">
                <Card>
                    <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                        <div>
                            <Avatar src={'/baseImg.jpg'} size={100} shape="square" />
                        </div>
                        <div>
                            <div className={style["card-params-title"]}>Judul Artikel</div>
                            <div className={style["card-params-date"]}>11 Agustus 2001</div>
                            <div className={style["card-params-desc"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis numquam ex placeat, nulla molestias dolor hic dignissimos incidunt magnam!</div>
                        </div>
                    </div>
                </Card>
            </Link>
        </article>
        </>
    )
}