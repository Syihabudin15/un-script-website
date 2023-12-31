import { Carousel } from "antd";
import style from "../../../src/app/(Guest)/Home.module.css";
import Image from "next/image";

export default function AboutUs(){
    return(
        <section title={`Tentang ${process.env.NEXT_PUBLIC_BASE_NAME}`} className={style['about-us-wrap']}>
            <section title="Description" className={style['about-desc']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere excepturi, sint fugiat id facilis. Vel deserunt maiores sapiente deleniti iste, eius molestias neque explicabo nihil fugiat libero dolorem, voluptate eos facere? Eos est vero reprehenderit saepe tenetur sit temporibus voluptas suscipit consequatur, corporis dolorem, aliquam illo itaque laborum! Enim magnam libero harum ullam fuga nobis, totam quidem assumenda aut quasi sint dolor similique porro maiores quibusdam doloremque dolore id unde quisquam ipsum non repellendus reprehenderit blanditiis excepturi? Consectetur suscipit quam molestiae hic distinctio sapiente odio laboriosam reprehenderit blanditiis! Officiis dolorem autem magni numquam vitae temporibus, perferendis recusandae ipsa velit necessitatibus, veniam nulla corrupti quidem earum inventore placeat sint culpa corporis est aspernatur reprehenderit eius dolor ut tenetur? Quidem magnam dolor, natus veniam delectus minima aspernatur atque a optio placeat id ipsum ipsam deserunt magni facere reprehenderit incidunt numquam adipisci qui officiis, architecto doloribus! Perspiciatis illo voluptate, modi expedita libero quisquam hic! Unde, sint dignissimos eum dolor iusto velit autem libero possimus exercitationem eos earum est ad odio nisi recusandae, nesciunt perspiciatis culpa pariatur numquam aperiam, aspernatur molestias! Non eligendi velit esse quae consequuntur eos, enim reiciendis molestias officiis eius modi, perferendis voluptatem iusto, adipisci aut quos tempore accusamus eum.
            </section>
            <section title="Image Company" className={style['about-img']}>
                <Carousel autoplay style={{maxWidth: '300px', maxHeight: '300px', margin: '0 auto'}}>
                    <Image src={'/baseImg.jpg'} width={250} height={300} alt="Foto Perusahaan" />
                    <Image src={'/baseImg.jpg'} width={250} height={300} alt="Foto Perusahaan" />
                    <Image src={'/baseImg.jpg'} width={250} height={300} alt="Foto Perusahaan" />
                </Carousel>
            </section>
        </section>
    )
}