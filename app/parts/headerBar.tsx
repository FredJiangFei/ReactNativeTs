import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Search, Notification, Message, Menu } from '../svgs';
import defaultStyles from '../config/styles';

export default function HeaderBar() {
  return (
    <View style={styles.menuBar}>
      <Search style={defaultStyles.mr16} />
      <Notification style={defaultStyles.mr16} />
      <Message style={defaultStyles.mr16} />
      <Menu style={defaultStyles.mr8}/>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
