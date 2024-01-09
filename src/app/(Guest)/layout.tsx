'use client'
import { Button, Drawer, Menu } from 'antd';
import { QuestionCircleOutlined, HomeOutlined, CopyrightCircleOutlined, MenuOutlined } from "@ant-design/icons";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconFont } from '../../../components/IconFont';
import '../globals.css';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const nav = useRouter();
    const items = [
        {label: "Home", key: '/', title: "Home", icon: <HomeOutlined/>},
        {label: "Artikel", key: '#artikel', title: "Artikel", icon: <IconFont type="icon-wenzhang" />,
            children: [
                {label: "List Artikel", key: '/artikel', title: "Daftar Artikel", icon: <IconFont type="icon-articles1" />},
                {label: "Kategori", key: '/artikel/kategori', title: "Daftar Kategori", icon: <IconFont type="icon-bxs-category-alt"/>}
            ]
        },
        {label: "Tugas Akhir", key: '/ta', icon: <IconFont type='icon-student' style={{opacity: .7}}/>, title: "Pembuatan Tugas Akhir"},
        {label: "Apps", key: '/apps', icon: <IconFont type="icon-coding"/>, title: "Pembuatan Web dan Aplikasi"},
        {label: "Undangan", key: '/undangan', icon: <IconFont type="icon-wedding-rings" />, title: "Pembuatan Undangan Digital"},
        {label: "Review", key: '/review', icon: <IconFont type="icon-rate-review"/>, title: "Ulasan Kami"},
        {label: "Bantuan", key: '/bantuan', icon: <QuestionCircleOutlined/>, title: "Bantuan"}
    ]
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 20){
                setScrolling(true);
            }else{
                setScrolling(false);
            }
        });
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
        });
    });
    return (
    <>
    {/* Menu */}
    <nav className='menu-wrapper-guest' style={{opacity: scrolling? .7 : 1}} title='Menu Navigation Un Script'>
        <div>
            <Link title='Home' href={'/'}>UNS</Link>
        </div>
        <div className='menu-windows'>
            <Menu items={items} theme='dark' mode='horizontal' style={{width: 750}} onClick={(e) => nav.push(e.key)} />
        </div>
        <div className='menu-mobile'>
            <Button style={{backgroundColor: '#001529', color: 'white'}} onClick={() => setOpen(true)}>
                <MenuOutlined/>
            </Button>
            <Drawer open={open} onClose={() => setOpen(!setOpen)} style={{backgroundColor: '#001529'}} 
                closeIcon={<Button style={{backgroundColor: '#001529', color: 'white'}}>X</Button>}
            >
                <Menu items={items} theme='dark' mode='inline' onClick={(e) => nav.push(e.key)}/>
            </Drawer>
        </div>
    </nav>
    {/* End Menu */}
    
    <div className='bodySection'>
        {children}
    </div>

    {/* Footer */}
    <footer className='footer-wrapper'>
        <div className='foot-head'>
            <div className='foot-left'>
                <div className='foot-right-item'>
                    <p>Alamat Perusahaan</p>
                    <div style={{lineHeight: 1.5, fontStyle: 'italic'}}>
                        Kp. Karapiak RT 04 / RW 05, Jalan Raya Bandung Garut, <br/>Desa Nanjung Mekar, Kecamatan Rancaekek, <br/>Kabupaten Bandung, Provinsi Jawabarat, Negara Indonesia
                    </div>
                </div>
            </div>
            <div className='foot-right'>
                <div className='foot-right-item'>
                    <p>Layanan</p>
                    <div>
                        <Link href={'/ta'} title='Pembuatan Skripsi'>Pembuatan Skripsi</Link>
                        <Link href={'/ta'} title='Pembuatan Tesis'>Pembuatan Tesis</Link>
                        <Link href={'/apps'} title='Pembuatan Website'>Pembuatan Website</Link>
                        <Link href={'/apps'} title='Pembuatan Aplikasi Mobile'>Pembuatan Aplikasi Mobile</Link>
                        <Link href={'/undangan'} title='Pembuatan Undangan Digital'>Pembuatan Undangan Digital</Link>
                    </div>
                </div>
                <div className='foot-right-item'>
                    <p>Fitur</p>
                    <div>
                        <Link href={'/artikel'} title='Artikel'>Artikel</Link>
                        <Link href={'/review'} title='Ulasan'>Ulasan</Link>
                        <Link href={'/bantuan'} title='Bantuan'>Bantuan</Link>
                        <Link href={'/artikel/kategori/dapus'} title='Kategori Dapus'>Daftar Pustaka</Link>
                    </div>
                </div>
                <div className='foot-right-item'>
                    <p>Kontak</p>
                    <div>
                        <Link href={'/'} title='Email'>Email</Link>
                        <Link href={'/'} title='Facebook'>Facebook</Link>
                        <Link href={'/'} title='WhatApps'>Whataspp</Link>
                        <Link href={'/'} title='Instaggram'>Instagram</Link>
                        <Link href={'/'} title='Nomor Telepon'>No Telepon</Link>
                    </div>
                </div>
            </div>
        </div>
        <footer className='footer'>
            <p>Copyright <CopyrightCircleOutlined/> 2022 {process.env.NEXT_PUBLIC_BASE_NAME}.</p>
            <p>All Right Reserved</p>
        </footer>
    </footer>
    {/* End Footer */}
    </>
    )
}