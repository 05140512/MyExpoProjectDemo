import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Ninth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Tenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7a',
    title: 'Eleventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7b',
    title: 'Twelfth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7c',
    title: 'Thirteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'Fourteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    title: 'Fifteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7f',
    title: 'Sixteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Seventeenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Eighteenth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Nineteenth Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  list: {
    flex: 1,
    paddingTop: 10,
  },
  listContent: {
    paddingTop: 0, // 这里设置顶部内边距为20
    paddingBottom: 100,
    // backgroundColor: '#f5f5',
  },
  item: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 8,
    marginHorizontal: 6,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default DetailScreen
