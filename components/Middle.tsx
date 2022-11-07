import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

import Card from "./Card";
import CORE_COLORS from "../constants/CORE_COLORS";
import PaperSizes from "../constants/paperSize";

const Middle = (props: { selectedPaperType: any; selectedPaperSize: any; handleOnSelectedPaperType: any; handleOnSelectionPaperSize: any; }) => {
  const {
    selectedPaperType,
    selectedPaperSize,
    handleOnSelectedPaperType,
    handleOnSelectionPaperSize,
  } = props;
  const Item = (title:any) => (
    <View style={styles.item}>
      <Text
        onPress={() => handleOnSelectionPaperSize(title)}
        style={{
          color: selectedPaperSize == title ? "#95d4e7" : CORE_COLORS.black,
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
  const renderItem = (item:any) => <Item title={item} />;

  return (
    <View>
      <Card style={styles.middleContainer}>
        <View style={styles.container}>
          {buttons.map((button) => {
            return (
              <Pressable
                onPress={() => handleOnSelectedPaperType(button)}
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      selectedPaperType == button.name
                        ? CORE_COLORS.middleButtonClick
                        : CORE_COLORS.white,
                  },
                  styles.border,
                ]}
              >
                <Text
                  style={{
                    color:
                      selectedPaperType == button.name
                        ? CORE_COLORS.white
                        : CORE_COLORS.black,
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
          data={Object.keys(PaperSizes[selectedPaperType.replace(/\s/g, "")])}
          renderItem={renderItem}
          keyExtractor={(item:any) => item.id}
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
    backgroundColor: CORE_COLORS.middleContainer,
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
    backgroundColor: CORE_COLORS.middleCardContainer,
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
    Color: CORE_COLORS.white,
  },
});

export default Middle;
