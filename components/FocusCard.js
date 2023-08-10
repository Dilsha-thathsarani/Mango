import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IdentificationContainer from "./IdentificationContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FocusCard = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.vectorParent}
      onPress={() => navigation.navigate("DilshaMangoVariety")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/rectangle-85.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
            <Text style={[styles.focusTheFruit, styles.snapTipsFlexBox]}>
              Focus the fruit in the center of the frame, avoid dark or blurry
              images
            </Text>
          </View>
          <Image
            style={styles.mangog03watermarked2Icon}
            contentFit="cover"
            source={require("../assets/mangog03watermarked-22.png")}
          />
        </View>
        <View
          style={[styles.image2RemovebgPreview1Parent, styles.parentLayout]}
        >
          <Image
            style={[
              styles.image2RemovebgPreview1Icon,
              styles.groupViewPosition,
            ]}
            contentFit="cover"
            source={require("../assets/image-2removebgpreview-11.png")}
          />
          <View style={[styles.groupParent1, styles.parentLayout]}>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
            <Text style={[styles.makeSureTo, styles.snapTipsFlexBox]}>
              Make sure to only one species at a time
            </Text>
          </View>
        </View>
        <IdentificationContainer
          instructionText="By placing just the one object,you will achieve better identification"
          propTop={225}
          propLeft={4}
        />
        <Text
          style={[styles.snapTips, styles.snapTipsFlexBox]}
        >{`Snap Tips `}</Text>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-39.png")}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  groupLayout: {
    width: 301,
    position: "absolute",
  },
  groupViewPosition: {
    top: 0,
    left: 4,
    position: "absolute",
  },
  snapTipsFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  parentLayout: {
    width: 257,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.16%",
    width: "4.72%",
    top: "6.23%",
    right: "10.32%",
    bottom: "89.61%",
    left: "84.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: -2,
    borderRadius: Border.br_11xl,
    width: 347,
    height: 385,
    position: "absolute",
  },
  groupItem: {
    top: -1,
    left: -1,
    width: 53,
    height: 53,
    position: "absolute",
  },
  focusTheFruit: {
    height: "99.84%",
    width: "69.02%",
    left: "30.98%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
    top: "0%",
  },
  groupView: {
    width: 297,
    height: 51,
    left: 4,
  },
  mangog03watermarked2Icon: {
    top: 65,
    width: 60,
    height: 66,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 64,
    height: 131,
    left: 0,
  },
  image2RemovebgPreview1Icon: {
    width: 44,
    height: 32,
    left: 4,
  },
  makeSureTo: {
    height: "78.31%",
    width: "64.2%",
    top: "3.92%",
    left: "35.8%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
  },
  groupParent1: {
    top: 71,
    height: 51,
    left: 0,
  },
  image2RemovebgPreview1Parent: {
    top: 75,
    height: 122,
    left: 4,
  },
  snapTips: {
    height: "7.07%",
    width: "60.8%",
    left: "4.32%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    top: "0%",
  },
  groupParent: {
    top: 24,
    height: 283,
    left: 17,
  },
  groupIcon: {
    top: 245,
    width: 59,
    height: 58,
    left: 17,
    position: "absolute",
  },
  vectorParent: {
    height: "45.62%",
    width: "86.92%",
    top: "26.07%",
    right: "5.9%",
    bottom: "28.32%",
    left: "7.18%",
    position: "absolute",
  },
});

export default FocusCard;
