import React from "react";

class IndexHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__logo">This is a logo</div>
                    <div className="header__title">
                        <h1 className="header__h1">hankhsu1996</h1>
                        <p className="header__p">Hank Hsu's Website</p>
                    </div>
                </div>
                <a className="header__arrow" href="#main">
                    #click to main
                </a>
            </div>
        );
    }
}

export default IndexHeader;
