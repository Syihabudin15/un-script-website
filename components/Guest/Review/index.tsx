import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";

const TugasAkhir = dynamic(() => import("./TugasAkhir"), {loading: () => <LoadingOutlined/>});
const Aplikasi = dynamic(() => import("./Aplikasi"), {loading: () => <LoadingOutlined/>});
const Undangan = dynamic(() => import("./Undangan"), {loading: () => <LoadingOutlined/>});

export { TugasAkhir, Aplikasi, Undangan };