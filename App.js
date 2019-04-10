/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform } from "react-native";
import {
  StyleProvider,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text,
  Title
} from 'native-base';
import getTheme from './native-base-theme/components';
import variables from "./native-base-theme/variables/commonColor";

const platform = Platform.OS;

export default class Home extends React.Component {

  render() {
    return (
      <StyleProvider style={ getTheme(variables) }>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>
                Recipes
              </Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Text>Home!</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

