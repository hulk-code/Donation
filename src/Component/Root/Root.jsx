import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Banner from "../Banner/Banner";


const Root = () => {
    return (
        <div>
            <Header></Header>
            
         <Outlet></Outlet>
        </div>
    );
};

export default Root;