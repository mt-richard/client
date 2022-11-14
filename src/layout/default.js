import { Outlet } from "react-router-dom";
import Nav from "../components/navbar";
import Home from "../pages/home";
import Footer from '../components/footer';

const Default = () => {
    return (  
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}
 
export default Default;