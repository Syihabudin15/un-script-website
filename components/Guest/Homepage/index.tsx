import { LoadingOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";

const ProductSlider = dynamic(() => import("./ProductSlider"), {loading: () => <LoadingOutlined/>})
const WhyUsDiagram = dynamic(() => import("./WhyUsDiagram"), {loading: () => <LoadingOutlined/>})
const AboutUs = dynamic(() => import("./AboutUs"), {loading: () => <LoadingOutlined/>})
const ProductPrice = dynamic(() => import("./ProductPrice"), {loading: () => <LoadingOutlined/>})
const FormContact = dynamic(() => import("./FormContact"), {loading: () => <LoadingOutlined/>})
const WorkRoadmap = dynamic(() => import("./WorkRoadmap"), {loading: () => <LoadingOutlined/>})
const ListSoftwares = dynamic(() => import("./ListSoftwares"), {loading: () => <LoadingOutlined/>})

export { ProductSlider, WhyUsDiagram, AboutUs, ProductPrice, FormContact, ListSoftwares, WorkRoadmap };