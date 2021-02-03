import React from "react";
import leafImage from "../../assets/leaf.jpg";

import { Container, Links, Logo, Instagram } from "./styles";

const Header: React.FC = () => {
  return <Container>
          <Logo>
            <img alt="Logo" src={leafImage} />
          </Logo>
          <Links>
            <a href="#">Início</a>
            <a href="#">Produto</a>
            <a href="#">Contato</a>
          </Links>
          <Links>
            <Instagram>
              <a href="#"></a>
            </Instagram>
          </Links>
        </Container>;
};

export default Header;
