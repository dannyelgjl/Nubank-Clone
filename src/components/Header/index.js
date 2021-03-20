import React from "react";

import { Container, Logo, Title, Top } from "./styles";

import logo from "../../assets/Nubank_Logo.png";

import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  Icon.loadFont();
  return (
    <Container>
      <Top>
        <Logo source={logo}/>
        <Title>Daniel</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  )
}

export default Header;