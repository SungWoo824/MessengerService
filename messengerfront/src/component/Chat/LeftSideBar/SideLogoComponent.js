import React from "react";

function SideLogoComponent() {
    return (
        <div className="sidebar-brand d-flex" >
            <div className="logowrap">
                <div className="sidebar-brand-icon logo-back">
                    <img className="logo-icon" src="/images/logo.png" alt="logo" />
                </div>
                <div className="sidebar-brand-text">
                    Circle
                </div>
            </div>
        </div>
    );
}

export default SideLogoComponent;