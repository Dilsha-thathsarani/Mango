import React, { memo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PremiumContainer = memo(({ dimensionCode, onArrowBackPress }) => {
  return (
    <View style={styles.top}>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-21.png")}
      />
      <Image
        style={[styles.profilePicIcon, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/profile-pic1.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.arrowBackPosition]} />
        <Text style={[styles.premium, styles.premiumLayout]}>Premium</Text>
        <Image
          style={[styles.groupItem, styles.premiumLayout]}
          contentFit="cover"
          source={dimensionCode}
        />
      </View>
      <Pressable
        style={[styles.arrowBack, styles.arrowBackPosition]}
        onPress={onArrowBackPress}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  arrowBackPosition: {
    left: 0,
    position: "absolute",
  },
  premiumLayout: {
    height: "76.92%",
    position: "absolute",
  },
  logo2Icon: {
    top: 19,
    left: 133,
    width: 90,
    height: 62,
    position: "absolute",
  },
  profilePicIcon: {
    height: "41.98%",
    width: "9.25%",
    top: "0%",
    right: "0%",
    bottom: "58.02%",
    left: "90.75%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 113,
    height: 26,
  },
  premium: {
    width: "67.71%",
    top: "11.54%",
    left: "32.29%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.gold_100,
    textAlign: "left",
  },
  groupItem: {
    width: "14.16%",
    top: "7.69%",
    right: "76.69%",
    bottom: "15.38%",
    left: "9.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 5,
    left: 202,
    width: 126,
    height: 26,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  arrowBack: {
    top: 6,
    width: 24,
    height: 24,
  },
  top: {
    top: 32,
    left: 17,
    width: 354,
    height: 81,
    position: "absolute",
  },
});

export default PremiumContainer;
