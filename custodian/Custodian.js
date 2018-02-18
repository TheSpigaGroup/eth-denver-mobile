// vim: ft=javascript.jsx
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, H1 } from "native-base";
import qrcode from 'qrcode-js';

export default class Custodian extends Component {
  render() {
    const {bad} = this.props.navigation.state.params;
    const url = 'http://www.sunzhongkui.me';
    const base64 = qrcode.toDataURL(url, 4);
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
            <Image width={50} height={50} source={{uri: base64}} />
          </Body>
        </Content>
      </Container>
    );
  }
}
