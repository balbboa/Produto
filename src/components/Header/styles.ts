import styled from "styled-components";

import { FaInstagram } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Links = styled.div`
  margin-right: auto;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    margin: 40px;
  }
`;

export const Instagram = styled(FaInstagram)`
  width: 28px;
  height: 28px;
  color: #fff;
  margin-left: 16px;
  cursor: pointer;
`;

export const Logo = styled.div`
  background-color: #254300;
  border-radius: 0px 0px 50px 0px;
  height: 150px;
  width: 115px;

  > img {
    height: 50%;
    border-radius: 50px;
    margin: 55px 20px 20px 20px;
  }
`;