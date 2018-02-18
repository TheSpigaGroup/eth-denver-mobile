import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title,
         Button, Body, Content,Text,
         Card, CardItem, H1, H2, List, ListItem, Left, Right, Icon } from 'native-base';
import * as actions from './actions.js';

const mapStateToProps = (state) => ({
  whiteList: state.trustee.whiteList,
  address: state.trustee.address,
});

const mapDispatchToProps = (dispatch) => ({
  setWallet: () => {
    dispatch(actions.setWallet())
  },
  getWhiteList: (params) => {
    dispatch(actions.getWhiteList(params));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Trustee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteList: ['test'],
      address: null,
    }
    this.props.setWallet();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.address !== this.state.address) {
      if (nextProps.address) {
        this.props.getWhiteList(nextProps.address);
      }
      this.setState({
        address: nextProps.address,
      });
    } 

    if (nextProps.whiteList !== this.state.whiteList) {
      this.setState({
        whiteList: nextProps.whiteList,
      });
    } 
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Body>
            <H1 style={{ marginTop: 50 }}>
              Trustee
            </H1>
            <Text center>
              { this.state.address }
            </Text>
            <H2 center style={{ marginTop: 50 }}>
              Verified Custodians
            </H2>
          </Body>
          <List style={{ marginTop: 50 }}>
            {this.state.whiteList.map(a =>
              <ListItem icon key={`${a}`}>
                <Left>
                  <Text>{a}</Text>
                </Left>
                <Right>
                  <Icon name='ios-checkmark' style={{ color: 'green', fontSize: 30 }} />
                </Right>
              </ListItem>
            )}
          </List>
          <Button full rounded primary
            style={{ marginTop: 30 }}
            onPress={() => this.props.navigation.navigate("Transfer")}>
            <Text>
              Transfer Custody
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
