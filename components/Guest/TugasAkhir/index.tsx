import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons"

export const Top = dynamic(() => import("./Top"), {loading: () => <LoadingOutlined/>});
export const Products = dynamic(() => import("./Products"), {loading: () => <LoadingOutlined/>});