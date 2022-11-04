import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

import Card from "./Card";
import Colors from "../constants/colors";

const Middle = (props) => {
  const [selected, setSelected] = useState(false);
  const [selectedSecondary, setSelectedSecondary] = useState(false);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "A2",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "A3",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
      title: "A4",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f43",
      title: "A5",
    },
    {
      id: "3ac68afa-c605-48d3-a4f8-fbd91aa97f43",
      title: "A6",
    },
    {
      id: "58694a0f-3da2-471f-bd96-145571e29d72",
      title: "DIN LANG",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text
        onPress={() => setSelectedSecondary(title)}
        style={{
          color: selectedSecondary == title ? "#95d4e7" : Colors.black,
        }}
      >
        {title}
      </Text>
    </View>
  );

  const buttons = [
    {
      id: "1",
      name: "DIN A",
    },
    {
      id: "2",
      name: "DIN B",
    },
    {
      id: "3",
      name: "DIN C",
    },
    {
      id: "4",
      name: "DIN D",
    },
    {
      id: "5",
      name: "US Formate",
    },
    {
      id: "6",
      name: "JIS B",
    },
  ];
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View>
      <Card style={styles.middleContainer}>
        <View style={styles.container}>
          {buttons.map((button) => {
            return (
              <Pressable
                onPress={() => setSelected(button.name)}
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      selected == button.name
                        ? Colors.middleButtonClick
                        : Colors.white,
                  },
                  styles.border,
                ]}
              >
                <Text
                  style={{
                    color:
                      selected == button.name ? Colors.white : Colors.black,
                    fontFamily: "Montserrat_400Regular",
                    fontWeight: "bold",
                  }}
                >
                  {button.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Card>
      <Card style={styles.cardContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  middleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    height: "40%",
    paddingVertical: 10,
    backgroundColor: Colors.middleContainer,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContainer: {
    margintop: -16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 400,
    height: "15%",
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.middleCardContainer,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flatListContainer: {
    flex: 1,
    padding: 10,
  },
  border: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 15,
  },
  item: {
    margin: 5,
    fontFamily: "Montserrat_400Regular",
  },
  itemButton: {
    width: "100%",
    Color: Colors.white,
  },
});

export default Middle;
