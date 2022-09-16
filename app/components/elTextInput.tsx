import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function ElTextInput({ width = '100%', ...rest }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={colors.medium}
        style={defaultStyles.text}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
