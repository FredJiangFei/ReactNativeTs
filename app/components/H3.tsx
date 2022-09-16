import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H3 = ({ children, style = {} }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default H3;
