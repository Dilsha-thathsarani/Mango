import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const AnthracnoseFormContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.vectorParent, styles.pic21Position]}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/rectangle-64.png")}
      />
      <Text style={styles.anthracnose}>Anthracnose</Text>
      <Text style={[styles.text, styles.textTypo]}>20/05/2023</Text>
      <View style={[styles.previousPic4, styles.picLayout]}>
        <Image
          style={[styles.pic21, styles.picLayout]}
          contentFit="cover"
          source={require("../assets/pic-2-1.png")}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SanjulaScanLeave")}
      >
        <View style={styles.buttonChild} />
        <Text style={[styles.recheck, styles.textTypo]}>Recheck</Text>
      </Pressable>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/arrow-2.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  pic21Position: {
    left: 0,
    top: 0,
  },
  textTypo: {
    fontSize: FontSize.uI16Medium_size,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  picLayout: {
    height: 96,
    width: 97,
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: -2,
    width: 344,
    height: 117,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  anthracnose: {
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
  pic21: {
    borderRadius: Border.br_6xl,
    left: 0,
    top: 0,
  },
  previousPic4: {
    top: 6,
    left: 4,
  },
  buttonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gold_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
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
    width: 336,
    height: 109,
    position: "absolute",
  },
});

export default AnthracnoseFormContainer;
