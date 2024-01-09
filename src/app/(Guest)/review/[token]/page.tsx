"use client"
import { Button, Form, Input, Select, notification } from "antd";
import style from "./Creates.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page({params}: {params: {token: string} }){
    const [load, setLoad] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e:any) => {
        setLoad(true);
        const date = new Date();
        const isValidToken = `${date.getDate()}U${date.getMonth()}N${date.getFullYear()}S`;

        if(isValidToken !== params.token) {
            notification.error({message: "Mohon maaf token tidak valid"});
            setTimeout(() => {
                setLoad(false);
                return router.push("/review");
            }, 2000);
        }
        setLoad(false);
    };
    return(
        <section title="Buat Ulasan" className={style["form-wrap"]}>
            <h1 style={{marginBottom: 30}}>Buat Ulasan</h1>
            <Form labelCol={{span: 5}} onFinish={handleSubmit}>
                <Form.Item name={"name"} label="Nama lengkap" rules={[{required: true, message: "Mohon isi nama anda minimal 5 katakter", whitespace: false, min: 5}]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"univ"} label="Universitas" rules={[{required: true, message: "Mohon isi nama universitas minimal 5 katakter", whitespace: false, min: 5}]}>
                    <Input />
                </Form.Item>
                <Form.Item name={"type"} label="Pembelian" rules={[{required: true, message: "Mohon pilih salah satu pemesanan produk yang telah anda beli"}]}>
                    <Select options={[
                        {value: "TA", label: "Tugas Akhir"},
                        {value: "APPS", label: "Web / Mobile App"},
                        {value: "UNDG", label: "Undangan Digital"},
                        {value: "OTHER", label: "Lainnya"},
                    ]}>
                    </Select>
                </Form.Item>
                <Form.Item name={"body"} label="Ulasan" rules={[{required: true, message: "Mohon isi ulasan anda mengenai kami dengan bijak", whitespace: false, min: 10}]}>
                    <Input.TextArea style={{minHeight: 150}} />
                </Form.Item>
                <Form.Item >
                    <div className={style["btn-wrap"]}>
                        <Button loading={load} htmlType="submit" type="primary">Kirim</Button>
                    </div>
                </Form.Item>
            </Form>
        </section>
    )
}