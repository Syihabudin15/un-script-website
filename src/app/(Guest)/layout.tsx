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
        {label: "Home", key: '/', icon: <HomeOutlined/>},
        {label: "Artikel", key: '#artikel', icon: <IconFont type="icon-wenzhang" />,
            children: [
                {label: "List Artikel", key: '/artikel', icon: <IconFont type="icon-articles1" />},
                {label: "Kategori", key: '/artikel/kategori', icon: <IconFont type="icon-bxs-category-alt"/>}
            ]
        },
        {label: "Tugas Akhir", key: '/ta', icon: <IconFont type='icon-student' style={{opacity: .7}}/>},
        {label: "Apps", key: '/apps', icon: <IconFont type="icon-coding"/>},
        {label: "Undangan", key: '/undangan', icon: <IconFont type="icon-wedding-rings" />},
        {label: "Review", key: '/review', icon: <IconFont type="icon-rate-review"/>},
        {label: "Bantuan", key: '/bantuan', icon: <QuestionCircleOutlined/>}
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
            <Link href={'/'}>UNS</Link>
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
    <footer className='footer'>
        <p>Copyright <CopyrightCircleOutlined/> 2022 {process.env.NEXT_PUBLIC_BASE_NAME}.</p>
        <p>All Right Reserved</p>
    </footer>
    {/* End Footer */}
    </>
    )
}