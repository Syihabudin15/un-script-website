"use client"
import { Input, Pagination, Image, Card } from "antd";
import Link from "next/link";
import style from "../../../../src/app/(Guest)/artikel/kategori/Kategori.module.css";

export default function CardCategories(){
    return(
        <div>
            <section title="Cari Kategori" className={style['input-search']}>
                <Input.Search placeholder="cari kategori" />
            </section>
            <section title="List Kategori" className={style['card-category']}>
                <article className={style['card-item']}>
                        <article title="Title Article" style={{width: '100%', height: '100%', padding: 10}}>
                            <Image src="/baseImg.jpg" alt="props" width={'100%'} height={'100%'} style={{ borderRadius: 10}}/>
                        </article>
                        <div className={style['text-wrapper']}>
                            <Link href={'/kategori/id'} title="props" target="_blank">
                                <h2>PROGRAMMING</h2>
                            </Link>
                        </div>
                </article>
                <article className={style['card-item']}>
                        <article title="Title Article" style={{width: '100%', height: '100%', padding: 10}}>
                            <Image src="/baseImg.jpg" alt="props" width={'100%'} height={'100%'} style={{ borderRadius: 10}}/>
                        </article>
                        <div className={style['text-wrapper']}>
                            <Link href={'/kategori/id'} title="props" target="_blank">
                                <h2>PROGRAMMING</h2>
                            </Link>
                        </div>
                </article>
                <article className={style['card-item']}>
                        <article title="Title Article" style={{width: '100%', height: '100%', padding: 10}}>
                            <Image src="/baseImg.jpg" alt="props" width={'100%'} height={'100%'} style={{ borderRadius: 10}}/>
                        </article>
                        <div className={style['text-wrapper']}>
                            <Link href={'/kategori/id'} title="props" target="_blank">
                                <h2>PROGRAMMING</h2>
                            </Link>
                        </div>
                </article>
                <article className={style['card-item']}>
                        <article title="Title Article" style={{width: '100%', height: '100%', padding: 10}}>
                            <Image src="/baseImg.jpg" alt="props" width={'100%'} height={'100%'} style={{ borderRadius: 10}}/>
                        </article>
                        <div className={style['text-wrapper']}>
                            <Link href={'/kategori/id'} title="props" target="_blank">
                                <h2>PROGRAMMING</h2>
                            </Link>
                        </div>
                </article>
            </section>
            <div style={{textAlign: 'center'}}>
                <Pagination/>
            </div>
        </div>
    )
}