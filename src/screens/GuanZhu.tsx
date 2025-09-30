import React from "react";
import { View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    id: '1',
    title: 'Item 1',
    height: 100,
  },
  {
    id: '2',
    title: 'Item 2',
    height: 150,
  },
  {
    id: '3',
    title: 'Item 3',
    height: 200,
  },
  {
    id: '4',
    title: 'Item 4',
    height: 120,
  },
  {
    id: '5',
    title: 'Item 5',
    height: 180,
  },
  {
    id: '6',
    title: 'Item 6',
    height: 220,
  },
  {
    id: '7',
    title: 'Item 7',
    height: 160,
  },
  {
    id: '8',
    title: 'Item 8',
    height: 240,
  },
  {
    id: '9',
    title: 'Item 9',
    height: 200,
  },
  {
    id: '10',
    title: 'Item 10',
    height: 140,
  },
  {
    id: '11',
    title: 'Item 11',
    height: 260,
  },
  {
    id: '12',
    title: 'Item 12',
    height: 180,
  },
  // ... more items
];
// 用于不同高度图片展示 瀑布流
export default function MyMasonryList() {
  return (
    <FlashList
      data={DATA}
      masonry
      numColumns={3}
      renderItem={({ item }) => (
        <View style={{ margin: 4, backgroundColor: 'lightblue',height:item.height, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text>{item.title}</Text>
        </View>
      )}
      onEndReached={() => {
        // 加载更多数据
        console.log('加载更多数据');
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => (
        <View style={{ height: 20 }} />
      )}
      onRefresh={() => {
        // 刷新数据
        console.log('刷新数据');
      }}
    />
  );
};