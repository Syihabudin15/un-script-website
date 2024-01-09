"use client"
import Image from "next/image";
import style from "./Apps.module.css";
import { useState } from "react";
import { Modal } from "antd";

export default function Header(){
    const [show, setShow] = useState(false);
    return(
        <>
            <div>
                <h1>Unscript Technology</h1>
                <h2>Website, Mobile App & Bot Development</h2>
            </div>
            <div className={style["head-img"]} >
                <Image fill alt="Coding" src={'/code.jpg'}  />
            </div>
            <section title="Buat pesanan web & aplikasi mobile" className={style['make-order']} onClick={() => setShow(true)}>
            </section>
            <Modal open={show} onCancel={() => setShow(!show)}></Modal>
        </>
    )
}