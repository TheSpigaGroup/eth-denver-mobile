// vim: ft=javascript.jsx
import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, H1 } from "native-base";

export default class Custodian extends Component {
  render() {
    const {bad} = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <Body>
            <H1 style={{ marginTop: 50 }}>
              Welcome Custy Turd
            </H1>
            <Text>
              {bad ? 'BAD':'YAY'}
            </Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
