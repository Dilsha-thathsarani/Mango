import React, { memo } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const FormContainer6 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomNavigation, styles.bottomLayout]}>
      <View style={[styles.bottomNavigationChild, styles.downloadPosition]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
      </Pressable>
      <Image
        style={[styles.download1Icon, styles.download31Position]}
        contentFit="cover"
        source={require("../assets/download-12.png")}
      />
      <Image
        style={[styles.download22, styles.downloadPosition]}
        contentFit="cover"
        source={require("../assets/download-2-25.png")}
      />
      <Image
        style={[styles.download31, styles.download31Position]}
        contentFit="cover"
        source={require("../assets/download-3-14.png")}
      />
      <View style={[styles.download11, styles.downloadPosition]} />
      <Text style={styles.budding}>Budding</Text>
      <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
      <Text style={[styles.fertilizer, styles.homeTypo]}>Fertilizer</Text>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector22.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  bottomLayout: {
    height: 84,
    width: 390,
    left: 0,
  },
  downloadPosition: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    position: "absolute",
  },
  download31Position: {
    top: 20,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    position: "absolute",
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
    width: 390,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vector: {
    left: "46.26%",
    top: "25%",
    right: "48.09%",
    bottom: "52.23%",
    width: "5.66%",
    height: "22.77%",
    position: "absolute",
  },
  download1Icon: {
    left: 317,
    width: 30,
    height: 25,
  },
  download22: {
    top: 21,
    width: 31,
    height: 22,
    left: 237,
  },
  download31: {
    left: 40,
    width: 27,
    height: 31,
  },
  download11: {
    top: 18,
    left: 113,
    width: 28,
    height: 30,
  },
  budding: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    width: 46,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  diagnose: {
    left: 101,
    color: Color.gray_400,
    width: 57,
  },
  home: {
    left: 175,
    color: Color.gray_500,
    width: 34,
  },
  variety: {
    color: Color.silver_100,
    width: 39,
    left: 237,
  },
  fertilizer: {
    left: 311,
    color: Color.systemBackgroundsSBLPrimary,
    width: 58,
  },
  vector1: {
    left: "29.66%",
    top: "28.57%",
    right: "65.31%",
    bottom: "47.62%",
    width: "5.03%",
    height: "23.81%",
    position: "absolute",
  },
  bottomNavigation: {
    top: 760,
    position: "absolute",
  },
});

export default FormContainer6;
