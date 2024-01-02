import { Button, Carousel } from "antd";
import style from "./Components.module.css";
import { SizeType } from "antd/es/config-provider/SizeContext";
import Link from "next/link";

export default function Adds({size, btnSize}: {size: number, btnSize: SizeType}){
    return(
        <div>
            <Carousel style={{width: size}} autoplay className={style['adds-wrap']} dots={false}>
                <div>
                    <p>Pembuatan Skripsi</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">
                            <Link href={`/ta`} target="_blank" title="Order Pembuatan Skripsi">ORDER</Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Tesis</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">
                            <Link href={`/ta`} target="_blank" title="Order Pembuatan Tesis">ORDER</Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Website</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">
                            <Link href={`/apps`} target="_blank" title="Order Pembuatan Website">ORDER</Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Mobile App</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">
                            <Link href={`/apps`} target="_blank" title="Order Pembuatan Aplikasi Mobile">ORDER</Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Undangan</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">
                            <Link href={`/undangan`} target="_blank" title="Order Pembuatan Undangan Digital">ORDER</Link>
                        </Button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}