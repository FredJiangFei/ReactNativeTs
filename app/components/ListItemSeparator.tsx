import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

export default function ListItemSeparator({ highlighted }) {
  return <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.primary,
  },
});
