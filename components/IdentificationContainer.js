import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IdentificationContainer = memo(
  ({ instructionText, propTop, propLeft }) => {
    const groupViewStyle = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    return (
      <View
        style={[
          styles.image2RemovebgPreview1Parent,
          styles.parentLayout,
          groupViewStyle,
        ]}
      >
        <View style={styles.image2RemovebgPreview1} />
        <View style={[styles.groupParent, styles.parentLayout]}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={styles.makeSureTo}>{instructionText}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  parentLayout: {
    height: 58,
    width: 292,
    left: 0,
    position: "absolute",
  },
  image2RemovebgPreview1: {
    top: 9,
    left: 4,
    width: 44,
    height: 32,
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: -1,
    width: 53,
    height: 53,
    position: "absolute",
  },
  makeSureTo: {
    height: "100%",
    width: "68.49%",
    top: "0%",
    left: "31.51%",
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.workSansRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 0,
  },
  image2RemovebgPreview1Parent: {
    top: 161,
  },
});

export default IdentificationContainer;
