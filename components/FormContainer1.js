import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer1 = memo(() => {
  return (
    <View style={styles.page13Inner}>
      <View style={[styles.groupWrapper, styles.groupPosition]}>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={styles.takeAPicture}>Take a Picture</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  groupChild: {
    height: "99.65%",
    bottom: "0.35%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gold_100,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  takeAPicture: {
    height: "77.85%",
    width: "66.96%",
    top: "22.15%",
    left: "22.08%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  groupWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  page13Inner: {
    height: "5.35%",
    width: "61.54%",
    top: "51.66%",
    right: "16.67%",
    bottom: "42.99%",
    left: "21.79%",
    position: "absolute",
  },
});

export default FormContainer1;
