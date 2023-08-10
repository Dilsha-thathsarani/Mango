import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import FormContainer3 from "../components/FormContainer3";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DilshaMarketAnalysis1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaMarketAnalysis}>
      <FormContainer3
        dimensionCode={require("../assets/download-2-2.png")}
        productCode={require("../assets/download-3-12.png")}
        propColor="rgba(255, 255, 255, 0.74)"
      />
      <Image
        style={[styles.coronavirusIcon, styles.arrowBackLayout]}
        contentFit="cover"
        source={require("../assets/coronavirus.png")}
      />
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-21.png")}
      />
      <Image
        style={[styles.dilshaMarketAnalysisChild, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Pressable
        style={[styles.arrowBack, styles.arrowBackLayout]}
        onPress={() => navigation.navigate("DilshaMarketAnalysis1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.premium, styles.premiumLayout]}>Premium</Text>
        <Image
          style={[styles.groupItem, styles.premiumLayout]}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </View>
      <View style={[styles.dilshaMarketAnalysisItem, styles.marketPosition]} />
      <Pressable
        style={[styles.sriLankaMap1, styles.groupChildPosition]}
        onPress={() => navigation.navigate("DilshaMarketAnalysis4")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/srilankamap-1.png")}
        />
      </Pressable>
      <Text style={[styles.mangoMarketVisualization, styles.marketPosition]}>
        Mango Market Visualization
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowBackLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  premiumLayout: {
    height: "76.92%",
    position: "absolute",
  },
  marketPosition: {
    left: 21,
    position: "absolute",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
    overflow: "hidden",
  },
  logo2Icon: {
    top: 31,
    left: 130,
    width: 90,
    height: 62,
    position: "absolute",
  },
  dilshaMarketAnalysisChild: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  arrowBack: {
    left: 28,
    top: 21,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 128,
    height: 26,
  },
  premium: {
    width: "66.9%",
    top: "11.54%",
    left: "33.1%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.gold_100,
    textAlign: "left",
  },
  groupItem: {
    width: "13.79%",
    top: "7.69%",
    right: "75.86%",
    bottom: "15.38%",
    left: "10.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 28,
    left: 220,
    width: 145,
    height: 26,
    position: "absolute",
  },
  dilshaMarketAnalysisItem: {
    top: 172,
    backgroundColor: "rgba(217, 217, 217, 0.56)",
    width: 344,
    height: 563,
  },
  sriLankaMap1: {
    top: 185,
    width: 427,
    height: 536,
  },
  mangoMarketVisualization: {
    top: 118,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  dilshaMarketAnalysis: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DilshaMarketAnalysis1;
