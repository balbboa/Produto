import React from "react";
import strawImage from "../../assets/straw.jpg";
import ProductAction from "../ProductAction";

import {
  Container,
  Panel,
  Column,
  Gallery,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      
      <Panel>
        <Column>
          <Gallery>
            <img alt="Straw" src={strawImage} />
          </Gallery>

        </Column>

        <Column>
          <ProductAction />
        </Column>
      </Panel>
    </Container>
  );
};

export default Product;
