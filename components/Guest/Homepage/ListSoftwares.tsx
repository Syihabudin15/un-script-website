import { Carousel } from "antd";
import { IconFont } from "../../IconFont";
import style from "../../../src/app/(Guest)/Home.module.css";


export default function ListSoftwares(){
    return(
        <section title="Daftar Software yang kami gunakan" className={style["software-wrap"]}>
            <Carousel autoplay dots={false} className={style["software-item"]}>
                <div><IconFont type="icon-javascript" /></div>
                <div><IconFont type="icon-react" /></div>
                <div><IconFont type="icon-vue" /></div>
                <div><IconFont type="icon-Nodejs" /></div>
            </Carousel>
            <Carousel autoplay dots={false} className={style["software-item"]}>
                <div><IconFont type="icon-php" /></div>
                <div><IconFont type="icon-laravel" /></div>
                <div><IconFont type="icon-codeigniter" /></div>
                <div><IconFont type="icon-dot-net" /></div>
            </Carousel>
            <Carousel autoplay dots={false} className={style["software-item"]}>
                <div><IconFont type="icon-bootstrap-solid" /></div>
                <div><IconFont type="icon-ant-design-01" /></div>
            </Carousel>
            <Carousel autoplay dots={false} className={style["software-item"]}>
                <div><IconFont type="icon-Mysql" /></div>
                <div><IconFont type="icon-mongo-db" /></div>
                <div><IconFont type="icon-sqlserver" /></div>
            </Carousel>
        </section>
    )
}