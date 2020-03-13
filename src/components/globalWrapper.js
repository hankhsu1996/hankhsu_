import React from "react";
import styled from "styled-components";

class GlobalWrapper extends React.Component {
    render() {
        return <Wrapper>{childern}</Wrapper>;
    }
}

const Wrapper = styled.div`
    width: 100%;
    background-color: "#123456";
    min-height: 100vh;
`;
