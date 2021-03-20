import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from './styles';
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";


const Main = () => {
  return (
    <Container>
      <Header />
      <Tabs />
      <StatusBar  barStyle="light-content" backgroundColor="#8B10AE"/>
    </Container>
  );
}

export default Main;