import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";


const CardCategories = dynamic(() => import("./CardCategories"), {loading: () => <LoadingOutlined/>})

export {CardCategories};