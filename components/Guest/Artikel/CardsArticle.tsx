'use client'

import { Card, Input, Pagination } from "antd";
import style from "../../../src/app/(Guest)/artikel/Artikel.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CardsArticel(){
    return(
        <>
        <section title="Cari Artikel" className={style['search-list-wrap']}>
            <Input.Search placeholder="Cari Artikel" size="large" />
        </section>
        <section className={style['list-items-art']}>
            {[1,2,3,4,5].map((e,i) => (
                <Link href={'/artikel'} title="title artikel" key={i}>
                    <Card>
                        <article title={`${e}`} className={style["art-card"]}>
                            <div className={style['art-card-img']}>
                                <Image src={"/baseImg.jpg"} alt="Images" width={120} height={120} style={{borderRadius: 10}} />
                            </div>
                            <div className={style['body-card-art']}>
                                <h2>Title of Article</h2>
                                <article className={style['card-createdAt']}>
                                    <time dateTime="11-08-2001">11 - Agustus - 2001</time>
                                </article>
                                <article>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, rem?</p>
                                </article>
                            </div>
                        </article>
                    </Card>
                </Link>
            ))}
        </section>
        <section title="Artikel Pagination" className={style['paginate']}>
            <Pagination total={20} onChange={(e) => console.log(e)}/>
        </section>
        </>
    )
}