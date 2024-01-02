import { Button, Carousel } from "antd";
import style from "./Components.module.css";
import { SizeType } from "antd/es/config-provider/SizeContext";

export default function Adds({size, btnSize}: {size: number, btnSize: SizeType}){
    return(
        <div>
            <Carousel style={{width: size}} autoplay className={style['adds-wrap']} dots={false}>
                <div>
                    <p>Pembuatan Skripsi</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">ORDER</Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Tesis</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">ORDER</Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Website</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">ORDER</Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Mobile App</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">ORDER</Button>
                    </div>
                </div>
                <div>
                    <p>Pembuatan Undangan</p>
                    <div>
                        <Button size={btnSize} style={{fontSize: btnSize === "small"? 12: 'normal', fontWeight: 'bold', margin: 10}} type="primary">ORDER</Button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}