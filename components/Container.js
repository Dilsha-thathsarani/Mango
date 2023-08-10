import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Container = memo(
  ({
    date,
    imageId,
    propTop,
    propLeft,
    propTop1,
    propLeft1,
    onButtonPress,
  }) => {
    const groupView3Style = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propTop, propLeft]);

    const pic32Style = useMemo(() => {
      return {
        ...getStyleValue("top", propTop1),
        ...getStyleValue("left", propLeft1),
      };
    }, [propTop1, propLeft1]);

    return (
      <View style={[styles.vectorParent, groupView3Style]}>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-64.png")}
        />
        <Text style={styles.sootyMold}>Sooty Mold</Text>
        <Text style={[styles.text, styles.textTypo]}>{date}</Text>
        <Image
          style={[styles.pic32, styles.childLayout, pic32Style]}
          contentFit="cover"
          source={imageId}
        />
        <Pressable style={styles.button} onPress={onButtonPress}>
          <View style={[styles.buttonChild, styles.childLayout]} />
          <Text style={[styles.recheck, styles.textTypo]}>Recheck</Text>
        </Pressable>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/arrow-2.png")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.uI16Medium_size,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: -2,
    width: 344,
    height: 117,
  },
  sootyMold: {
    top: 13,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    left: 125,
    position: "absolute",
  },
  text: {
    top: 39,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.uI16Medium_size,
    left: 125,
  },
  pic32: {
    top: 6,
    left: 4,
    width: 97,
    height: 96,
  },
  buttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gold_100,
  },
  recheck: {
    height: "60%",
    width: "75.82%",
    top: "20%",
    left: "12.09%",
    letterSpacing: -0.3,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.uI16Medium_size,
  },
  button: {
    height: "27.52%",
    width: "27.08%",
    top: "61.47%",
    right: "35.71%",
    bottom: "11.01%",
    left: "37.2%",
    position: "absolute",
  },
  groupItem: {
    top: 78,
    left: 304,
    width: 17,
    height: 19,
    position: "absolute",
  },
  vectorParent: {
    top: 152,
    left: 0,
    width: 336,
    height: 109,
    position: "absolute",
  },
});

export default Container;
