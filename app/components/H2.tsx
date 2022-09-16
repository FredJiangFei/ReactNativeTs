import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H2 = ({ children, style = {} }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default H2;
