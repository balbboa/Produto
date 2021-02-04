import styled from "styled-components";
import background from "../../assets/tropical.jpg"

export const Container = styled.div`
margin: -80px 0 -80px 0;
position: relative;
z-index: -1;
background-position: center;
background-size: cover;
background-attachment: fixed;
background-image: url(${background});
`;

export const Wrapper = styled.div`
  padding: 100px;
`;
