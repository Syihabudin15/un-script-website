"use client"
import { Button, Modal } from "antd";
import style from "./Apps.module.css";
import { useState } from "react";

type Sampel = {
    name:string | null,
    desc: string | null
}
export default function ExampleProject(){
    const [curr, setCurr] = useState<Sampel>();
    return(
        <>
            <section title="Sampel sistem" className={style['sampel-wrap']}>
                <h3 style={{textAlign: 'center', padding: 20, marginBottom: 10}}>Sampel Projek</h3>
                <div className={style['sampel-list']}>
                    {items.map((e,i) => (
                        <div className={style["sampel-item"]} key={i}>
                            <div>
                                <h4>{e.name}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolore.</p>
                            </div>
                            <div>
                                <Button onClick={() => setCurr(e)} type="primary" block>Detail</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Modal open={curr? true : false} onCancel={() => setCurr(undefined)} title={curr?.name}></Modal>
        </>
    )
}

const items = [
    {name: "Web Sistem Inventory", desc: ""},
    {name: "Web K-Means Clustering", desc: ""},
    {name: "Web Analitycal Hierarchy Process", desc: ""},
    {name: "Bot Dadu", desc: ""},
    {name: "Bot Roulete", desc: ""},
    {name: "Bot Kuis", desc: ""},
    {name: "Aplikasi Holadok", desc: ""},
    {name: "Aplikasi Puzzle Game", desc: ""},
    {name: "Aplikasi Marketplace", desc: ""},
]