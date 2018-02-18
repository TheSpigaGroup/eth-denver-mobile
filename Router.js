import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import Init from './Init.js';
import Trustee from './trustee/Trustee.js';
import Custodian from './custodian/Custodian.js';
import Transfer from './Transfer.js';

const Routes = {
  Home: { screen: Init },
  Trustee: { screen: Trustee },
  Custodian: { screen: Custodian },
  Transfer: { screen: Transfer }
};

const AppRouter = StackNavigator(Routes);

const navReducer = (state, action) => {
  const newState = AppRouter.router.getStateForAction(action, state);
  return newState || state;
};

@connect(state => ({
  nav: state.nav,
}))
class Router extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export default Router;
