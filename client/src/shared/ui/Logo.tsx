import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Logotag = styled(Link)`
    font-family: "Logo";
    font-size: 40px;
    color: #315cfd;
`;

export default function Logo() {
  return (
    <Logotag to={"/"}>D-gall</Logotag>
  );
}