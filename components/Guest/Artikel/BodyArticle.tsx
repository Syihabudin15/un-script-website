"use client"
import Image from "next/image";
import style from "../../../src/app/(Guest)/artikel/Artikel.module.css";
import { Avatar, Divider, Tag } from "antd";
import { EyeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

type Article = {
    title: string
    image?: string
}

export default function BodyArticle({article}:{article: Article}){
    return(
        <article title={article.title}>
            <div className={style["navigate"]}>
                <div><Link href={'/artikel'} target="_blank" title="Artikel">Artikel</Link></div>
                <div><ArrowRightOutlined style={{fontSize: 12, color: 'blue'}}/></div>
                <div><Link href={`/artikel/kategori/programming`} target="_blank" title="Kategori programming">Programming</Link></div>
                <div><ArrowRightOutlined style={{fontSize: 12, color: 'blue'}}/></div>
                <div><Link href={`/artikel/params`} target="_blank" title="Artikel Programming">Pengertian System Development Lifecycle</Link></div>
            </div>
            <div className={style['art-base-img']}>
                <Image src={'/baseImg.jpg'} alt="Artikel Image" fill/>
            </div>
            <h1 className={style["title-art"]}>{article.title}</h1>
            <article className={style["author-view"]}>
                <div className={style["author"]}>
                    <Avatar size={'large'}>S</Avatar>
                    <div>
                        <div style={{fontWeight: 'bold', fontStyle: 'italic'}}>Syihabudin Tsani</div>
                        <div style={{fontStyle: 'italic', fontSize: 12, opacity: .8}}>Created At: 11 Agustus 2023</div>
                    </div>
                </div>
                <div style={{color: 'blue'}}>
                    <EyeOutlined /> <span style={{fontStyle: 'italic'}}>2000</span>
                </div>
            </article>
            <Divider/>
            <article className={style["body-art"]}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quis tempora excepturi aut labore non quasi voluptate, quisquam natus soluta, debitis ad, cupiditate totam id eius perferendis nesciunt dolore libero quod! Asperiores illo magnam, rerum autem natus nemo quisquam at, doloremque fuga ab animi, placeat maiores facere? Nisi sed repudiandae voluptate iste eveniet dolores ratione distinctio mollitia quas fugiat aspernatur alias, animi optio sequi, iure aperiam, id consequuntur nemo praesentium cumque tempora? Odit omnis dolorum dolores. Molestiae illum rem tempora inventore temporibus, saepe nulla possimus cum necessitatibus molestias non facere minima repudiandae, harum voluptate qui architecto quos ex ea aspernatur! Facere asperiores esse repudiandae illum quisquam modi iure sit. Necessitatibus praesentium aspernatur quasi modi maxime iure qui error labore alias! Ipsum, voluptatum asperiores impedit perspiciatis pariatur tenetur iste dolores labore, temporibus minus necessitatibus magni recusandae veritatis sint a repellendus dolore eveniet culpa enim eaque itaque aliquam! Dolorum tenetur debitis ducimus vero neque, animi temporibus corrupti maxime architecto minima deleniti eligendi reiciendis sint dolor quam molestiae repudiandae earum ratione consequuntur! Nostrum qui aliquid aspernatur excepturi quia, molestiae adipisci corporis reprehenderit a officia quod, dolorem ducimus voluptatem sunt non fugiat deleniti. Perferendis labore illum sapiente. Earum dolor cumque, quisquam at dolorem expedita vero harum aspernatur quia, officiis, iure nostrum! Itaque facilis officiis veniam, at eum architecto dolores corrupti ipsa odit dolor dolorum necessitatibus amet fugiat! Dignissimos cumque ab veniam aliquid labore libero earum architecto consectetur neque eligendi, id explicabo quibusdam repellendus voluptatum in numquam minima harum cum. Itaque facilis voluptatem dolore quo neque, dolorem maxime quia exercitationem quod suscipit dignissimos eveniet laudantium corrupti eum repudiandae qui recusandae ipsum cum dolor unde necessitatibus odio in? Quis eligendi ea corporis veniam quo soluta hic similique exercitationem distinctio doloribus accusantium esse eaque, perferendis accusamus modi dolore, explicabo sequi iusto dolorem enim doloremque vel. Molestias, dolorum.</p>
            </article>
            <section title="Tags" style={{display: 'flex', gap: 20, margin: 20}}>
                <div style={{fontStyle: 'italic'}}># </div>
                <div style={{display: 'flex', gap: 5, flexWrap: 'wrap'}}>
                    <Tag color="blue">Programming</Tag>
                    <Tag color="blue">Programming</Tag>
                    <Tag color="blue">Programming</Tag>
                </div>
            </section>
        </article>
    )
}