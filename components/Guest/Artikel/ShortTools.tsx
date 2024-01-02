"use client"
import { Divider, Input } from "antd";
import style from "../../../src/app/(Guest)/artikel/Artikel.module.css";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
const Adds = dynamic(() => import("../../Adds"), {loading: () => <>Loading..</>})

export default function ShortTools(){
    const [search, setSearch] = useState("");
    return(
        <section title="Short Tools" className={style['short']}>
            <section title="Cari Artikel">
                <Input.Search placeholder="Cari Artikel" onChange={(e) => setSearch(e.target.value)} />
                <div className={style["hidden-search"]} style={{display: !search ? "none" : ""}}>
                    <Link href={'/'}>Lorem, ipsum.</Link>
                    <Link href={'/'}>Lorem, ipsum.</Link>
                    <Link href={'/'}>Lorem, ipsum.</Link>
                </div>
            </section>
            <Divider style={{fontSize: 12, margin: '50px 0 10px 0'}} orientation="left">Trending Kategori</Divider>
            <section title="Relevan kategori" className={style['short-divider']}>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <p className={style['more']}>
                    <Link href={'/'}>..more</Link>
                </p>
            </section>
            <Divider style={{fontSize: 12, margin: '20px 0 10px 0'}} orientation="left">Banyak Dicari</Divider>
            <section title="Banyak dicari" className={style['short-divider']}>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <p className={style['more']}>
                    <Link href={'/'}>..more</Link>
                </p>
            </section>
            <Divider />
            <section title="klan Produk Kami" style={{width: '100%'}}>
                <Adds size={200} btnSize="small"/>
            </section>
            <Divider style={{fontSize: 12, margin: '20px 0 10px 0'}} orientation="left">Layanan Un Script</Divider>
            <section title="Banyak dicari" className={style['short-divider']}>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <p className={style['more']}>
                    <Link href={'/'}>..more</Link>
                </p>
            </section>
        </section>
    )
}