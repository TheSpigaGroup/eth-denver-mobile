import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title,
         Button, Body, Content,Text,
         Card, CardItem, H1, H2, List, ListItem, Left, Right, Icon } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';
/* import * as actions from './actions.js';*/

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentWillReceiveProps(nextProps) {
  }

  _handleRead = (result) => {
    
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Container>
          <BarCodeScanner
            onBarCodeRead={this._handleRead}
            style={StyleSheet.absoluteFill}
          />
        </Container>
        );
      }
  }
}
