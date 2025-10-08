import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Root;