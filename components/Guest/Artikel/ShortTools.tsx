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
                <article className={style["hidden-search"]} style={{display: !search ? "none" : ""}}>
                    <article>
                        <p><Link href={'/'} title={`Lorem Ipsum`} target="_blank">Lorem, ipsum.</Link></p>
                    </article>
                    <Link href={'/'}>Lorem, ipsum.</Link>
                    <Link href={'/'}>Lorem, ipsum.</Link>
                </article>
            </section>
            <Divider style={{fontSize: 12, margin: '50px 0 10px 0'}} orientation="left">Trending Kategori</Divider>
            <section title="Relevan kategori" className={style['short-divider']}>
                <article>
                    <p><Link href={'/'} title={`Kategori Programming`} target="_blank">Programming</Link></p>
                </article>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <p className={style['more']}>
                    <Link href={'/'} target="_blank">..more</Link>
                </p>
            </section>
            <Divider style={{fontSize: 12, margin: '20px 0 10px 0'}} orientation="left">Banyak Dicari</Divider>
            <section title="Banyak dicari" className={style['short-divider']}>
                <article>
                    <p><Link href={'/'} title={`Artikel Programming`} target="_blank">Programming</Link></p>
                </article>
                <Link href={'/'}>Programming</Link>
                <Link href={'/'}>Programming</Link>
                <p className={style['more']}>
                    <Link href={'/'} target="_blank">..more</Link>
                </p>
            </section>
            <Divider />
            <section title="klan Produk Kami" style={{width: '100%'}}>
                <Adds size={200} btnSize="small"/>
            </section>
            <Divider style={{fontSize: 12, margin: '20px 0 10px 0'}} orientation="left">Layanan Un Script</Divider>
            <section title="Banyak dicari" className={style['short-divider']}>
                <article>
                    <p><Link href={'/ta'} title="Pembuatan Skripsi" target="_blank">Pembuatan Skrpisi</Link></p>
                </article>
                <article>
                    <p><Link href={'/ta'} title="Pembuatan Tesis" target="_blank">Pembuatan Tesis</Link></p>
                </article>
                <article>
                    <p><Link href={'/ta'} title="Pembuatan Tugas Sekolah" target="_blank">Pembuatan Tugas Sekolah</Link></p>
                </article>
                <article>
                    <p><Link href={'/apps'} title="Pembuatan Website" target="_blank">Pembuatan Website</Link></p>
                </article>
                <article>
                    <p><Link href={'/apps'} title="Pembuatan Aplikasi Mobile" target="_blank">Pembuatan Aplikasi Mobile</Link></p>
                </article>
                <article>
                    <p><Link href={'/undangan'} title="Pembuatan Undangan Digital" target="_blank">Pembuatan Undangan Digital</Link></p>
                </article>
            </section>
        </section>
    )
}