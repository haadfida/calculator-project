import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  ListRenderItem,
} from "react-native";

import Card from "./Card";
import CORE_COLORS from "../constants/CORE_COLORS";
import PaperSizes from "../constants/paperSize";
import CORE_THEME from "../constants/CORE_THEME";

interface MiddleProps {
  selectedPaperType: string;
  selectedPaperSize: string;
  handleOnSelectedPaperType: any;
  handleOnSelectionPaperSize: any;
  isCustom: boolean;
}

const Middle: React.FC<MiddleProps> = (props: MiddleProps) => {
  const {
    selectedPaperType,
    selectedPaperSize,
    handleOnSelectedPaperType,
    handleOnSelectionPaperSize,
    isCustom,
  } = props;

  interface Item {
    title: string;
  }
  const Item = ({ title }: Item) => (
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
    {
      id: "7",
      name: "CUSTOM",
    },
  ];
  interface ItemInterface {
    id:string;
    item: string;
  }
  const renderItem = (item: ListRenderItem<ItemInterface>) => <Item title={item.item} />;
  return (
    <View>
      <Card style={styles.middleContainer}>
        <View style={styles.container}>
          {buttons.map((button) => {
            return (
              <Pressable
                onPress={() => handleOnSelectedPaperType(button.name)}
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      isCustom && button.name == "CUSTOM"
                        ? CORE_COLORS.middleButtonClick
                        : selectedPaperType == button.name
                        ? CORE_COLORS.middleButtonClick
                        : CORE_COLORS.white,
                  },
                  styles.border,
                ]}
              >
                <Text
                  style={{
                    color:
                      isCustom && button.name == "CUSTOM"
                        ? CORE_COLORS.white
                        : selectedPaperType == button.name
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
          keyExtractor={(item: any) => item.id}
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
    marginTop: CORE_THEME.MiddleMarginTop,
    height: CORE_THEME.MiddleMarginHeight,
    paddingVertical: CORE_THEME.zero,
    backgroundColor: CORE_COLORS.middleContainer,
    borderTopLeftRadius: CORE_THEME.borderRadius,
    borderTopRightRadius: CORE_THEME.borderRadius,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: CORE_THEME.MiddleContainerWidth,
    height: CORE_THEME.MiddleContainerHeight,
    paddingVertical: CORE_THEME.MiddleContainerPaddingVertical,
    borderBottomLeftRadius: CORE_THEME.borderRadius,
    borderBottomRightRadius: CORE_THEME.borderRadius,
    backgroundColor: CORE_COLORS.middleCardContainer,
  },
  container: {
    flex: CORE_THEME.flex,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flatListContainer: {
    flex: CORE_THEME.flex,
    padding: CORE_THEME.padding,
  },
  border: {
    borderRadius: CORE_THEME.MiddleContainerBorderRadius,
    justifyContent: "center",
    alignItems: "center",
    margin: CORE_THEME.MiddleMargin,
    padding: CORE_THEME.MiddlePadding,
  },
  item: {
    margin: CORE_THEME.MiddleMargin,
    fontFamily: "Montserrat_400Regular",
  },
  itemButton: {
    width: "100%",
    Color: CORE_COLORS.white,
  },
});

export default Middle;
