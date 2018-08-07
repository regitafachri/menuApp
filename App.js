import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Products from "./src/components/Products";

// Class component or statefull component
export default class App extends Component {
  render() {
    return (
      <View>
        <Header title="Ikea Shop" />
        <Products />
      </View>
    );
  }
}
