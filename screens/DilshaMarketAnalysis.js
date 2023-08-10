import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer2 from "../components/FormContainer2";
import PricePerKgSection from "../components/PricePerKgSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DilshaMarketAnalysis = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dilshaMarketAnalysis, styles.iconLayout]}>
      <FormContainer2
        dimensions={require("../assets/download-2-2.png")}
        propColor="rgba(255, 255, 255, 0.74)"
        onVectorPress={() => navigation.navigate("Menu")}
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
        style={styles.dilshaMarketAnalysisChild}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Pressable
        style={[styles.arrowBack, styles.arrowBackLayout]}
        onPress={() => navigation.navigate("DilshaMarketAnalysis3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.premium}>Premium</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </View>
      <PricePerKgSection />
      <PricePerKgSection propTop={343} propTop1={59} propLeft={16} />
      <PricePerKgSection propTop={552} propTop1={59} propLeft={16} />
      <Text style={[styles.planA, styles.planTypo]}>Plan A</Text>
      <Text style={[styles.planB, styles.planTypo]}>Plan B</Text>
      <Text style={[styles.planC, styles.planTypo]}>Plan C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  arrowBackLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    position: "absolute",
  },
  planTypo: {
    color: Color.black,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowBack: {
    left: 28,
    top: 21,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 128,
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
    height: "76.92%",
    position: "absolute",
  },
  groupItem: {
    width: "13.79%",
    top: "7.69%",
    right: "75.86%",
    bottom: "15.38%",
    left: "10.34%",
    height: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 28,
    left: 220,
    width: 145,
  },
  planA: {
    top: 153,
    left: 31,
  },
  planB: {
    top: 355,
    left: 40,
  },
  planC: {
    top: 562,
    left: 41,
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
  },
});

export default DilshaMarketAnalysis;
