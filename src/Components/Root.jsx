import { Suspense } from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loading";

const Root = () => {
    return (
        <>
            <Header></Header>
            <Suspense fallback={<Loader></Loader>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </>
    );
};

export default Root;