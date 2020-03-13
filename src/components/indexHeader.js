import React from "react";
import { Link as ScrollLink } from "react-scroll";

class IndexHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <img
                    id="mountain"
                    src="mountain.svg"
                    alt="Mountain"
                    draggable="false"
                />
                <div className="header__container">
                    <div className="header__title">
                        <h1 className="header__h1">Hank Hsu's Website</h1>
                        <p className="header__p">
                            {/*Hardware Engineering Student*/}
                        </p>
                    </div>
                </div>
                <ScrollLink
                    className="header__arrow"
                    to="about"
                    smooth={true}
                    duration={750}
                    offset={1}
                >
                    <span></span>
                </ScrollLink>
            </div>
        );
    }
}

export default IndexHeader;
