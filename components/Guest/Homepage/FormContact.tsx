import { Button, Form, Input } from "antd";
import style from "../../../src/app/(Guest)/Home.module.css";
import { IconFont } from "../../IconFont";
import Link from "next/link";

export default function FormContact(){
    return(
        <section title={`Kontak ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['form-wrap']}>
            <section title="Kirim Pesan Langsung" className={style['form']}>
                <Form labelCol={{span: 8}}>
                    <Form.Item label="Nama" name={'name'}>
                        <Input placeholder="John Edge" />
                    </Form.Item>
                    <Form.Item label="Email" name={'email'}>
                        <Input placeholder="johnedge@gmail.com" />
                    </Form.Item>
                    <Form.Item label="No Telepon" name={'phone'}>
                        <Input placeholder="08xxxxxx" />
                    </Form.Item>
                    <Form.Item label="Pesan" name={'message'}>
                        <Input.TextArea placeholder="Input any you want send to us" style={{height: 100}} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block style={{marginTop: 20}}>Kirim</Button>
                    </Form.Item>
                </Form>
            </section>
            <div>
                <section title="Sosial Media" className={style['sosmed-wrap']}>
                    <div className={style['sosmed-item']}>
                        <IconFont type="icon-whatsapp"/>
                        <span><Link href={'https://wa.me/+62881022157439'} title={`WhatsApp ${process.env.NEXT_PUBLIC_BASE_NAME}`} target="_blank">0881022157439</Link></span>
                    </div>
                    <div className={style['sosmed-item']}>
                        <IconFont type="icon-instagram1"/>
                        <span><Link href={'https://wa.me/+62881022157439'} target="_blank" title={`Instagram ${process.env.NEXT_PUBLIC_BASE_NAME}`}>@unscript_official</Link></span>
                    </div>
                    <div className={style['sosmed-item']}>
                        <IconFont type="icon-facebook"/>
                        <span><Link href={'https://wa.me/+62881022157439'} target="_blank" title={`Facebook ${process.env.NEXT_PUBLIC_BASE_NAME}`}>Unscript Official</Link></span>
                    </div>
                    <div className={style['sosmed-item']}>
                        <IconFont type="icon-Gmail"/>
                        <span><Link href={'https://wa.me/+62881022157439'} target="_blank" title={`Email ${process.env.NEXT_PUBLIC_BASE_NAME}`}>unscript@gmail.com</Link></span>
                    </div>
                </section>
                <section title="Lokasi Perusahaan" className={style["company-loc"]}>
                    !
                </section>
            </div>
        </section>
    )
}