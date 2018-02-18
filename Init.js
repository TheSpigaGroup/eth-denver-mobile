import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button,
         Body, Content,Text, Card, CardItem, H1 } from "native-base";
import web3Wrapper from './lib3.js';


export default class Init extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Body>
            <H1 style={{ marginTop: 50 }}>
              Welcome to Custody
            </H1>
          </Body>
          <Button full rounded dark
            style={{ marginTop: 100 }}
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
        </Content>
      </Container>
    );
  }
}