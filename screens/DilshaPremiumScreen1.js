import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DilshaPremiumScreen1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.dilshaPremiumScreen}
      onPress={() => navigation.navigate("Menu")}
    >
      <Text style={styles.gainAccessTo}>Gain access to market analysis</Text>
      <Image
        style={styles.unsplashnux8gyfil4mIcon}
        contentFit="cover"
        source={require("../assets/unsplashnux8gyfil4m1.png")}
      />
      <Pressable
        style={[styles.dilshaPremiumScreenChild, styles.dilshaLayout]}
        onPress={() => navigation.navigate("DilshaMarketAnalysis")}
      />
      <Pressable
        style={[styles.dilshaPremiumScreenItem, styles.dilshaLayout]}
        onPress={() => navigation.navigate("FertilizationHome")}
      />
      <Text style={[styles.marketAnalysis, styles.marketAnalysisTypo]}>
        Market Analysis
      </Text>
      <Text
        style={[styles.fertilizerRecommendation, styles.marketAnalysisTypo]}
      >{`Fertilizer 
Recommendation`}</Text>
      <Image
        style={styles.r6RemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/r--6-removebgpreview-1.png")}
      />
      <Image
        style={styles.npkSensorRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/npksensorremovebgpreview-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dilshaLayout: {
    width: 310,
    backgroundColor: Color.gold_200,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  marketAnalysisTypo: {
    textAlign: "center",
    color: Color.darkolivegreen,
    letterSpacing: -0.6,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  gainAccessTo: {
    top: 294,
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.4,
    color: Color.systemBackgroundsSBLPrimary,
    textAlign: "left",
    width: 231,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    left: 121,
    position: "absolute",
  },
  unsplashnux8gyfil4mIcon: {
    top: 0,
    left: 0,
    width: 1280,
    height: 1920,
    position: "absolute",
  },
  dilshaPremiumScreenChild: {
    top: 183,
    left: 42,
    height: 137,
  },
  dilshaPremiumScreenItem: {
    left: 40,
    height: 168,
    top: 392,
  },
  marketAnalysis: {
    top: 198,
    left: 78,
  },
  fertilizerRecommendation: {
    left: 62,
    top: 392,
  },
  r6RemovebgPreview1Icon: {
    top: 229,
    width: 137,
    height: 90,
    left: 121,
    position: "absolute",
  },
  npkSensorRemovebgPreview1Icon: {
    top: 460,
    left: 139,
    width: 113,
    height: 100,
    position: "absolute",
  },
  dilshaPremiumScreen: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default DilshaPremiumScreen1;
