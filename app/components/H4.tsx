import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H4 = ({ children, style = {} }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default H4;
