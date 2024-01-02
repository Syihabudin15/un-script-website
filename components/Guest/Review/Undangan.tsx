"use client"

import { Avatar, Card, Divider, Pagination } from "antd"
import style from "../../../src/app/(Guest)/review/Review.module.css";

export default function Undangan(){
    return(
        <div>
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
            </div>
            <div style={{textAlign: 'right', margin: 30}}>
                <Pagination/>
            </div>
        </div>
    )
}