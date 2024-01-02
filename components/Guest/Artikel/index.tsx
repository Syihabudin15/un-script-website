import dynamic from "next/dynamic";
import { LoadingOutlined } from "@ant-design/icons";

const CardsArticle = dynamic(() =>  import("./CardsArticle"), {loading: () => <LoadingOutlined/>});
const ShortTools = dynamic(() =>  import("./ShortTools"), {loading: () => <LoadingOutlined/>});
const BodyArticle = dynamic(() =>  import("./BodyArticle"), {loading: () => <LoadingOutlined/>});
const CardParams = dynamic(() =>  import("./CardParams"), {loading: () => <LoadingOutlined/>});
const Comments = dynamic(() =>  import("./Comments"), {loading: () => <LoadingOutlined/>});

export { CardsArticle, ShortTools, BodyArticle, CardParams, Comments };