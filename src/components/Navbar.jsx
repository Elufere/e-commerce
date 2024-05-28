import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ heigth: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; 
  ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 position: relative;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const CartIcon = styled(IoCartOutline)`
  margin-right: 5px;
  font-size: 22px;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 10px;
`;

export default function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <IoSearchOutline style={{color: "gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KARO.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <CartIcon/>
            <CartBadge>{quantity}</CartBadge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
