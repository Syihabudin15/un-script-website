"use client"

import { Avatar, Card, Divider, Pagination, Select } from "antd"
import style from "./Review.module.css";

export default function Root(){
    return(
        <>
            <section title="Review Kami" className={style['review-wrap']}>
                <div style={{textAlign: 'right', margin: "40px 20px"}}>
                    <h1 style={{textAlign: 'center', margin: 20}}>Ulasan Tentang Kami</h1>
                    <Select defaultValue={"TA"} onChange={(e) => console.log(e)} options={[
                        {label: "Tugas Akhir", value: "TA"},
                        {label: "Web & Mobile", value: "APPS"},
                        {label: "Undangan Digital", value: "UNDG"},
                        {label: "Lainnya", value: "OTHER"},
                    ]} />
                </div>
                <div className={style['list-review']}>
                    <Card className={style['ulsan-item']}>
                        <div className={style['ulasan-client']}>
                            <Avatar shape="square" size={'large'}>S</Avatar>
                            <div>
                                <h3>Nama Pelanggan</h3>
                                <div className={style['univ']}><span>Universitas:</span> Gadjah Mada</div>
                                <div className={style['univ']}><span>Oreder ID:</span> SKRP1237</div>
                            </div>
                        </div>
                        <Divider style={{padding: 0, margin: 0}}/>
                        <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat vel consequuntur aliquid id laborum veniam ut, sunt fugit!</p>
                    </Card>
                    <Card className={style['ulsan-item']}>
                        <div className={style['ulasan-client']}>
                            <Avatar shape="square" size={'large'}>S</Avatar>
                            <div>
                                <h3>Nama Pelanggan</h3>
                                <div className={style['univ']}><span>Universitas:</span> Gadjah Mada</div>
                                <div className={style['univ']}><span>Oreder ID:</span> SKRP1237</div>
                            </div>
                        </div>
                        <Divider style={{padding: 0, margin: 0}}/>
                        <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus quaerat vel consequuntur aliquid id laborum veniam ut, sunt fugit!</p>
                    </Card>
                </div>
            </section>
        <Pagination  style={{textAlign: 'center', padding: 50}} total={50} pageSize={5} onChange={(e) => console.log(e)}/>
        </>
    )
}