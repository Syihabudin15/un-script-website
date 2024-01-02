"use client"
import { Avatar, Button, Divider, Form, Input } from "antd"
import style from "../../../src/app/(Guest)/artikel/Artikel.module.css";

export default function Comments(){
    return(
        <section title="Comments" className={style["comments-wrap"]}>
            <h2>Komentar</h2>
            <div className={style['flexing-coment']}>
                <div className={style["list-coment"]}>
                    <div>
                        <Divider/>
                        <div className={style["user-coment"]}>
                            <div>
                                <Avatar size={'large'} >S</Avatar>
                            </div>
                            <div>
                                <div className={style["card-params-title"]}>Name</div>
                                <div className={style["card-params-date"]}>11 Agustus 2001</div>
                                <div className={style["card-params-desc"]}>Lorem ipsum dolor sit amet.</div>
                            </div>
                        </div>
                        <Divider/>
                    </div>
                </div>
                <div>
                    <Form labelCol={{span: 7}}>
                        <Form.Item label="Nama">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Komentar">
                            <Input.TextArea style={{height: 100}} />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{marginTop: 20}} type="primary" block>Kirim</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </section>
    )
}