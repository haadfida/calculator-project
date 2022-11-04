import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

import Card from "./Card";
import Colors from "../constants/colors";
import Size from "../constants/size";
import { Values } from "./Top";

const Middle = (props) => {

  const [selected, setSelected] = useState("DIN A");
  const [selectedSecondary, setSelectedSecondary] = useState(false);

  const handleOnSelectionSecondary = (title) => {
    setSelectedSecondary(title);
  };
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text
        onPress={() => handleOnSelectionSecondary(title)}
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
  const renderItem = ({ item }) => <Item title={item} />;
  const handleOnSelection = (button) => {
    setSelected(button.name);
  };
  return (
    <View>
      <Card style={styles.middleContainer}>
        <View style={styles.container}>
          {buttons.map((button) => {
            return (
              <Pressable
                onPress={() => handleOnSelection(button)}
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
          data={Object.keys(Size[selected.replace(/\s/g, "")])}
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
    height: 125,
    paddingVertical: 0,
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
    height: 50,
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
