import style from "../../../src/app/(Guest)/Home.module.css";
import { IconFont } from "../../IconFont";

export default function WhyUsDiagram(){
    return(
        <section title={`kenapa memilih ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['why-us-wrap']}>
            <div className={style['why-us-point']}>
                <div className={style["why-us-item"]} data-aos="zoom-in-up">
                    <div className={style["why-us-item-img"]}><IconFont type="icon-professional-fill" className={style['icon-why-us']}/></div>
                    <span>Professional</span>
                </div>
                <div className={style["why-us-item"]} data-aos="zoom-in-up">
                    <div className={style["why-us-item-img"]}><IconFont type="icon-jiaoseguanli" className={style['icon-why-us']}/></div>
                    <span>Great Team</span>
                </div>
                <div className={style["why-us-item"]} data-aos="zoom-in-up">
                    <div className={style["why-us-item-img"]}><IconFont type="icon-library" className={style['icon-why-us']}/></div>
                    <span>Libraries</span>
                </div>
                <div className={style["why-us-item"]} data-aos="zoom-in-up">
                    <div className={style["why-us-item-img"]}><IconFont type="icon-class1" className={style['icon-why-us']}/></div>
                    <span>Classes</span>
                </div>
            </div>
            <div className={style['jaminan-lulus']} data-aos="zoom-in-up">
                <div className={style['jaminan-lulus-img']}><IconFont type="icon-student" className={style['jaminan-lulus-icon']}/></div>
                <span>JAMINAN LULUS</span>
            </div>
        </section>
    )
}