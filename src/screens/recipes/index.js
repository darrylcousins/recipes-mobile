import React from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Text,
} from 'native-base'

const styles = {
    container: {
          backgroundColor: "#FFF"
        },
    mb10: {
          marginBottom: 10
        }
}

export default class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Text>
              Recipes
            </Text>
          </Body>
          <Right />
        </Header>
      <Content padder>
        <Text>Home!</Text>
      </Content>
    </Container>
    )
  }
}

