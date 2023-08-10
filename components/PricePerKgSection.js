import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PricePerKgSection = memo(({ propTop, propTop1, propLeft }) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop1, propLeft]);

  return (
    <View style={[styles.groupParent, groupView1Style]}>
      <View style={[styles.rectangleWrapper, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.pricePerKgRsParent, groupView2Style]}>
        <Text style={[styles.pricePerKg, styles.pricePerKgTypo]}>{`Price Per 
(Kg) Rs`}</Text>
        <Text style={[styles.incomeKgRs, styles.pricePerKgTypo]}>{`Income
(Kg) Rs`}</Text>
        <Text style={[styles.quantityKg, styles.pricePerKgTypo]}>{`Quantity
(Kg)`}</Text>
        <Text style={[styles.text, styles.textTypo]}>1000</Text>
        <Text style={[styles.rs100, styles.textTypo]}>Rs 100</Text>
        <Text style={[styles.rs1001, styles.textTypo]}>Rs.100</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 0,
    left: 0,
    height: 179,
    width: 361,
    position: "absolute",
  },
  pricePerKgTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 73,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gainsboro_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 0,
  },
  rectangleWrapper: {
    left: 0,
  },
  pricePerKg: {
    left: 119,
  },
  incomeKgRs: {
    left: 239,
  },
  quantityKg: {
    left: 2,
  },
  text: {
    left: 0,
  },
  rs100: {
    left: 114,
  },
  rs1001: {
    left: 233,
  },
  pricePerKgRsParent: {
    top: 55,
    left: 14,
    width: 323,
    height: 101,
    position: "absolute",
  },
  groupParent: {
    top: 136,
    left: 17,
    height: 179,
    width: 361,
    position: "absolute",
  },
});

export default PricePerKgSection;
