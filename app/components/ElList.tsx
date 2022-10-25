import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItemSeparator from '../components/ListItemSeparator';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function ElList() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index, separators }) => {
    const backgroundColor = item.id === selectedId ? 'red' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      ItemSeparatorComponent={ListItemSeparator}
      ListEmptyComponent={<Text>empty</Text>}
      ListHeaderComponent={<Text>header</Text>}
      ListFooterComponent={<Text>footer</Text>}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={{ borderBottomWidth: 1 }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
