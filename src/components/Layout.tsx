import React from "react";
import { Outlet } from "react-router-dom";
import image from "../assets/image.png"
import footer from "../assets/footer.png"


const Layout: React.FC = () => {
    return (<div>
        <img src={image}/>
        {/* <div className="flex w-screen bg-[#230839] py-7 px-20">
            <img src="https://clarissa-ams-bucket.s3.ap-southeast-2.amazonaws.com/funlogos/monster_logo_white-svg-Ukraine.png"
                width={200} height={80} />
        </div> */}
        {<Outlet />}
        <img src={footer}/>
    </div>);
}

export default Layout;
