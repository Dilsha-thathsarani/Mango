import React, { memo } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FormContainer7 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomNavigation, styles.bottomLayout]}>
      <View style={[styles.bottomNavigationChild, styles.iconPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.download1Icon, styles.download22Layout]}
        contentFit="cover"
        source={require("../assets/download-13.png")}
      />
      <Pressable
        style={[styles.download22, styles.download22Layout]}
        onPress={() => navigation.navigate("DilshaMangoVariety")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/download-2-27.png")}
        />
      </Pressable>
      <Image
        style={[styles.download31, styles.download31Position]}
        contentFit="cover"
        source={require("../assets/download-3-12.png")}
      />
      <View style={[styles.download11, styles.iconPosition]} />
      <Text style={styles.budding}>Budding</Text>
      <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
      <Text style={[styles.fertilizer, styles.homeTypo]}>Fertilizer</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  bottomLayout: {
    height: 84,
    width: 395,
    position: "absolute",
  },
  iconPosition: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  download22Layout: {
    width: 31,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  download31Position: {
    top: 20,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  homeTypo: {
    top: 51,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bottomNavigationChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.black,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 5,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 84,
    width: 395,
    position: "absolute",
  },
  vectorIcon: {
    height: "22.77%",
    width: "5.7%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    left: "46.58%",
    position: "absolute",
  },
  download1Icon: {
    left: 321,
    height: 24,
    top: 20,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  icon: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  download22: {
    top: 21,
    height: 22,
    left: 240,
  },
  download31: {
    left: 41,
    width: 27,
    height: 31,
    position: "absolute",
  },
  download11: {
    top: 18,
    left: 114,
    width: 28,
    height: 30,
    position: "absolute",
  },
  budding: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  diagnose: {
    left: 102,
    color: Color.gray_400,
  },
  home: {
    left: 177,
    color: Color.systemBackgroundsSBLPrimary,
  },
  variety: {
    color: Color.gray_200,
    left: 240,
  },
  fertilizer: {
    left: 315,
    color: Color.gray_600,
  },
  icon1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vector: {
    left: "29.87%",
    top: "28.57%",
    right: "65.07%",
    bottom: "47.62%",
    width: "5.06%",
    height: "23.81%",
    position: "absolute",
  },
  bottomNavigation: {
    top: 769,
    left: -4,
  },
});

export default FormContainer7;
