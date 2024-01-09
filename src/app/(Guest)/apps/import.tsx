import dynamic from "next/dynamic";

export const ImgLeft = dynamic(() => import("./ImgLeft"), {loading: () => <>Loading ..</>})
export const ImgRight = dynamic(() => import("./ImgRight"), {loading: () => <>Loading ..</>})
export const Header = dynamic(() => import("./Header"), {loading: () => <>Loading ..</>})
export const ExampleProject = dynamic(() => import("./ExampleProjects"), {loading: () => <>Loading ..</>})