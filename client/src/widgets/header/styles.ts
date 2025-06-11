import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Head = styled.header`
    height: 100px;
    border-bottom: 2px solid rgb(145, 169, 255);
`; 

export const Nav = styled.nav`
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Login = styled(Link)`
    display: flex;
    width: 100px;
    height: 40px;
    border: 2px solid #315cfd;
    border-radius: 45px;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    transition: 0.3s;

    &:hover {
        background: #315cfd;
        color: #fff;
        font-size: 1.1em;
    }
`;