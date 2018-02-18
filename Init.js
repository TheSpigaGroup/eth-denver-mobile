import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button,
         Body, Content,Text, Card, CardItem, H1 } from "native-base";
import { Image } from 'react-native';
import web3Wrapper from './lib3.js';

export default class Init extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Body>
            <Image
              style={{ width: 100, height: 100, marginTop: 25 }}
              source={require('./assets/img/custodychain_square.png')}
            />
            <H1 style={{ marginTop: 25, marginBottom: 20 }}>
              Welcome to CustodyChain
            </H1>
          </Body>
          <Button full rounded dark
            style={{ marginTop: 50 }}
            onPress={() => this.props.navigation.navigate("Trustee")}
          >
            <Text>
              Begin Custody Transfer
            </Text>
          </Button>
          <Text
            style={{ textAlign: 'center', marginTop: 10 }}
          >
            OR
          </Text>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Custodian")}>
            <Text>
              Custodian a Transfer
            </Text>
          </Button>
          <Text
            style={{ textAlign: 'center', marginTop: 10 }}
          >
            OR
          </Text>
          <Button full rounded danger
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Custodian", {bad: true})}>
            <Text>
              Be a Bad Actor
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
