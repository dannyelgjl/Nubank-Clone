import React from 'react';
import { Text, StatusBar, Animated } from 'react-native';
import { PanGestureHandler, State } from "react-native-gesture-handler"
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from "../../components/Menu";
import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

Icon.loadFont();


const Main = () => {
  let offSet = 0;
  const translateY = new Animated.Value(0);

  const animetedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );
  
  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offSet += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offSet = opened ? 380 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      }); 
    }
  };

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
          onGestureEvent={animetedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{ 
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
           }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs  translateY={translateY} />
      <StatusBar  barStyle="light-content" backgroundColor="#8B10AE"/>
    </Container>
  );
}

export default Main;