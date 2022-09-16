import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H5 = ({ children, style = {} }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

export default H5;
