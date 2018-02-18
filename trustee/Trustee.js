// vim: ft=javascript.jsx
import React, { Component } from 'react';
import { Dimensions, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, List, ListItem, H1 } from "native-base";
import { BarCodeScanner, Permissions } from 'expo';


export default class Trustee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'begin',
      whitelist: [],
    };

  }
  _handleBarCodeRead = result => {
    // TODO: check if address is in network(json)
    if (result.data !== this.state.lastScannedUrl) {
      // TODO: Make call to startCustody(tokenId = result.data)
      this.setState({ lastScannedUrl: result.data });
    }
  };
  render() {
    let view = (<Body>
      <H1 style={{ marginTop: 50 }}>
        Start a new CustodyChain
      </H1>
      <Button full rounded primary
        style={{ marginTop: 100, height: 100 }}
        onPress={() => {
          this.setState({view: 'scan'});
        }}
      >
        <Text>
          Begin
        </Text>
      </Button>
    </Body>);

    if (this.state.view === 'scan') {
      view = (<Body>
        <H1 style={{ marginTop: 50 }}>
          Start a new CustodyChain
        </H1>

        <Button full rounded dark
          style={{ marginTop: 100, height: 100 }}
          onPress={() => {
            // Make call to get whitelist and set it
            const whitelist = ['0x1dalsjdflk', '0x1dawwwwflk', '0x1dalsjyyyk'];
            this.setState({view: 'approve', whitelist});
          }}
        >
          <Text>
            ScanStub because of simulator
          </Text>
        </Button>
        {/* <BarCodeScanner onBarCodeRead={this._handleBarCodeRead}
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}
        /> */}
      </Body>);
    }
    if (this.state.view === 'approve') {
      view = (<Body>
        <H1 style={{ marginTop: 50 }}>
          Start a new CustodyChain
        </H1>
        <List>
          {this.state.whitelist.map(a =>
            <ListItem key={`${a}`}>
              <Text>{a}</Text>
            </ListItem>
          )}
        </List>
        <Button full rounded success
          style={{ marginTop: 100 }}
          onPress={() => {
            this.setState({view: 'track'});
          }}
        >
          <Text>
            Accept
          </Text>
        </Button>
        <Button full rounded danger
          onPress={() => {
            this.setState({view: 'track'});
          }}
        >
          <Text>
            Reject
          </Text>
        </Button>
      </Body>);
    }
    return (
      <Container>
        <Content padder>
          {view}
        </Content>
      </Container>
    );
  }
}
