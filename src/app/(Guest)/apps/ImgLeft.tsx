"use client"
import Image from "next/image";
import style from "./Apps.module.css";

export default function ImgLeft({title, desc, src}: {title: string, desc: string, src:string}){
    return(
        <div className={style["prod-wrap"]} style={{flexWrap: 'wrap-reverse'}}>
            <div className={style["imag"]} style={{position: 'relative'}}>
                <Image fill alt="Fitur" src={src} />
            </div>
            <div className={style['imgdesc']}>
                <h3>{title}</h3>
                <div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}