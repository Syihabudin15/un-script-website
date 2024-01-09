"use client"
import { Button, Form, Input, Select } from "antd";
import { useSearchParams } from "next/navigation"
import style from "../Ta.module.css";

export default function TaOrder(){
    const type = useSearchParams();
    const handleSubmit = (e:any) => {
        console.log(e)
    }
    return(
        <section title="Buat Pesanan" className={style["form-wrap"]}>
            <h1 style={{marginBottom: 20}}>Form Pemesanan</h1>
            <section title="Formulir Input Pesanan">
                <Form onFinish={handleSubmit} labelCol={{span: 5}}>
                    <Form.Item label="Nama" name={'name'} required>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name={'email'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="No Telepon/WA" name={'phone'} required>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Universitas" name={'univ'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tipe" name={'type'} initialValue={type.get("type")} required>
                        <Select style={{width: 150}} options={[
                            {label: "Skripsi", value: "skripsi"},
                            {label: "Tesis", value: "tesis"},
                            {label: "Skripsi per bab", value: "skripsi_bab"},
                            {label: "Tesis per bab", value: "tesis_bab"},
                            {label: "Jurnal", value: "jurnal"},
                            {label: "Power Point", value: "ppt"},
                            {label: "Revisian", value: "revisian"},
                        ]} onSelect={(e) => console.log(e)} defaultValue={type.get('type')} />
                    </Form.Item>
                    <Form.Item label="Judul" name={'title'}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Tema" name={'theme'} required>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Abstrak" name={'abstract'}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <div className={style['div-btn']}>
                            <Button htmlType="submit" style={{width: '100%'}} block type="primary">SUBMIT</Button>
                        </div>
                    </Form.Item>
                </Form>
            </section>
        </section>
    )
}