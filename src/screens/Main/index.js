import React from 'react';
import { Text, StatusBar } from 'react-native';
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

const Main = () => {
  Icon.loadFont();

  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon  name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 188.888,98</Description>
            </CardContent>

            <CardFooter>
              <Annotation>Transferência de R$ 20,00 recebida de Daniel</Annotation>
            </CardFooter>
        </Card>
      </Content>

      <Tabs />
      <StatusBar  barStyle="light-content" backgroundColor="#8B10AE"/>
    </Container>
  );
}

export default Main;