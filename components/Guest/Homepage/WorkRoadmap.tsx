import { Steps } from "antd";
import { CommentOutlined, FileDoneOutlined , CoffeeOutlined, LoadingOutlined, TeamOutlined, SmileOutlined } from "@ant-design/icons";
export default function WorkRoadmap(){
    return(
        <section style={{padding: 30}}>
            <Steps 
                items={[
                    {
                        title: 'Hubungi Kami',
                        status: 'finish',
                        icon: <CommentOutlined/>,
                        description: "Pelanggan dapat menghubungi kami terlebih dahulu melalui form pemesanan yang telah disediakan ataupun melalui sosial media kami"
                    },
                    {
                        title: 'Diskusikan Masalah',
                        status: 'finish',
                        icon: <CoffeeOutlined/>,
                        description: "Pelanggan mendiskusikan masalah yang sedang dihadapi kepada kami, agar dapat mempertimbangkan solusi dan harga terbaik"},
                    {
                        title: 'Memberikan Solusi',
                        status: 'finish',
                        icon: <FileDoneOutlined />,
                        description: "Kami memberikan beberapa solusi yang mungkin akan menjadi pilihan terbaik bagi pelanggan"
                    },
                    {
                        title: 'Menentukan Pilihan',
                        status: 'finish',
                        icon: <LoadingOutlined />,
                        description: "Pelanggan penentukan pilihan, apakah solusi yang kami tawarkan dapat menyelesaikan masalah yang sedang dihadapi"
                    },
                    {
                        title: 'Pengerjaan',
                        status: 'finish',
                        icon: <TeamOutlined />,
                        description: "Kami memulai pengerjaan dan selalu berkomunikasi dengan pelanggan agar apa yang kami kerjakan sesuai dengan yang diharapkan"
                    },
                    {
                        title: 'Selesai',
                        status: 'finish', 
                        icon: <SmileOutlined />,
                        description: "Setelah pengerjaan selesai, pelanggan wajib mengisi review melalui form yang nanti akan kami kirimkan"
                    },
                ]}
            />
        </section>
    )
}