import React from "react";
import './homepage.styles.scss';
import directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";

const HomePage = () => {
    return(
        <div className = "homepage">
            <div className = "directory-menu">
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item"> 
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;