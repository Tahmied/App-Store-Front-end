import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loading";

const Root = () => {
    const navigation = useNavigation()
    return (
        <>
            <Header></Header>
            {
                navigation.state === 'loading'? <Loader></Loader> :<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </>
    );
};

export default Root;