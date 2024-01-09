"use client"
import { Button, Form, Input } from "antd";
import style from "./Rvw.module.css";

export default function Rvw(){
    return(
        <section title="Input ulasan">
            <div className={style["wrapper"]}>
                <Form labelCol={{span: 3}}>
                    <Form.Item name={'name'} label="Nama">
                        <Input />
                    </Form.Item>
                    <Form.Item name={'univ'} label="Universitas">
                        <Input />
                    </Form.Item>
                    <Form.Item name={'body'} label="Ulasan">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item style={{display: 'flex', justifyContent: 'center'}}>
                        <Button type="primary" style={{width: 100}}>Kirim</Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}