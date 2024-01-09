"use client"

import items from "./items"
import style from "./Bantuan.module.css";
import { useState } from "react";

export default function Faq(){
    const [hide, setHide] = useState(items);

    const handleClick = (id:number) => {
        const tmp = hide.map((e) => {
            if(e.id === id){
                e.value = !e.value;
            }
            return e;
        });
        setHide(tmp);
    }
    
    return(
        <>
            <section title="FAQ" className={style['left']}>
                {hide.map((e,i) => (
                    <div key={i} className={style['head-wrap']}>
                        <div className={style['head']} onClick={() => handleClick(e.id)}>
                            <h2>{e.label}</h2>
                            <span style={{fontSize: 12, opacity: .5, textDecoration: 'underline'}}>{e.value? "Collapse" : "Read"}</span>
                        </div>
                        <div style={{display: e.value ? "block" : "none"}} className={style["description"]}>{e.desc}</div>
                    </div>
                ))}
            </section>
        </>
    )
}