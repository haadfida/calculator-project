import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

const Counter = (props) => {
  const [timesPressed, setTimesPressed] = useState(0);

  const configureNegativeCounter = (current) => {
    if (timesPressed > 0) {
      setTimesPressed((current) => current - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          // <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
          <Image
            style={styles.icon}
            source={require("../assets/add-icon.png")}
          />
        )}
      </Pressable>
      <View style={styles.logBox}>
        <TextInput
          style={{ ...styles.text, ...styles.textColor }}
          testID="pressable_press_console"
        >
          {props.configureCounter(timesPressed)}
        </TextInput>
        <Text style={styles.textColor}>Sheets</Text>
      </View>
      <Pressable
        onPress={configureNegativeCounter}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          // <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
          <Image
            style={styles.icon}
            source={require("../assets/minus-icon.png")}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperCustom: {
    borderRadius: 20,
    padding: 6,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    keyboardType: "number-pad",
    autoCapitalize: "none",
    maxLength: 2
  },
  textColor: {
    color: "white",
  },
  logBox: {
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#5fb2db",
    backgroundColor: "#5fb2db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: -16,
    marginBottom: -16,
    
  },
});

export default Counter;
