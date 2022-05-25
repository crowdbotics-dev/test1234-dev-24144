import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 25,
      top: 16,
      position: "absolute",
      width: 133,
      height: 119,
      backgroundColor: "#2d1717",
      borderRadius: "50%",
      borderColor: "#781a1a",
      opacity: 0.83
    }}></View><Text style={{
      left: 24,
      top: 184,
      position: "absolute",
      width: 132,
      height: 32,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#3424db",
      opacity: 0.78
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;