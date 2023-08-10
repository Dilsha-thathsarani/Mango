import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IdentificationContainer from "./IdentificationContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Container1 = memo(() => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupWrapper}>
        <View style={styles.groupWrapper}>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={[styles.focusThePlant, styles.useAClearTypo]}>
            Focus the plant trunk in the center of the frame
          </Text>
        </View>
      </View>
      <View
        style={[styles.image2RemovebgPreview1Parent, styles.groupViewPosition]}
      >
        <Image
          style={styles.image2RemovebgPreview1Icon}
          contentFit="cover"
          source={require("../assets/image-2removebgpreview-1.png")}
        />
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/group-12.png")}
          />
          <Text
            style={[styles.useAClear, styles.useAClearTypo]}
          >{`Use a clear background to increase accuracy `}</Text>
        </View>
      </View>
      <IdentificationContainer instructionText="Make sure to only one plant at a time" />
    </View>
  );
});

const styles = StyleSheet.create({
  groupPosition: {
    height: 53,
    left: -1,
    top: -1,
    position: "absolute",
  },
  useAClearTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  groupViewPosition: {
    width: 279,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    width: 53,
  },
  focusThePlant: {
    height: "99.84%",
    width: "69.02%",
    top: "0%",
    left: "30.98%",
  },
  groupWrapper: {
    height: 51,
    left: 0,
    top: 0,
    width: 297,
    position: "absolute",
  },
  image2RemovebgPreview1Icon: {
    left: 4,
    width: 44,
    height: 32,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    width: 57,
  },
  useAClear: {
    height: "78.31%",
    width: "64.2%",
    top: "3.92%",
    left: "35.8%",
  },
  groupView: {
    top: 71,
    height: 51,
  },
  image2RemovebgPreview1Parent: {
    top: 11,
    height: 122,
  },
  groupParent: {
    top: 271,
    left: 47,
    height: 219,
    width: 297,
    position: "absolute",
  },
});

export default Container1;
