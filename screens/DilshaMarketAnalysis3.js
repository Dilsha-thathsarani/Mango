import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormContainer8 from "../components/FormContainer8";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DilshaMarketAnalysis3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaMarketAnalysis}>
      <FormContainer8 />
      <Image
        style={[styles.coronavirusIcon, styles.iconLayout]}
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
      <Image
        style={[styles.arrowBackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-back.png")}
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("DilshaPremiumScreen")}
      >
        <View style={styles.groupChild} />
        <Text style={styles.premium}>Premium</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </Pressable>
      <Text style={styles.marketAnalysisPlan}>Market Analysis Plan</Text>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
          onPress={() => navigation.navigate("DilshaMarketAnalysis3")}
        >
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Image
            style={[
              styles.unsplashdyc95dkugp4Icon,
              styles.rectangleGroupPosition,
            ]}
            contentFit="cover"
            source={require("../assets/unsplashdyc95dkugp4.png")}
          />
        </Pressable>
        <View style={[styles.rectangleView, styles.groupChild2Position]} />
        <Text style={[styles.freshMangoMarket, styles.mangoTypo]}>
          Fresh Mango Market
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <Pressable
          style={[styles.rectangleContainer, styles.rectangleContainerPosition]}
          onPress={() => navigation.navigate("DilshaMarketAnalysis2")}
        >
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[
              styles.unsplashpphn8hfzkdeIcon,
              styles.rectangleContainerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/unsplashpphn8hfzkde.png")}
          />
        </Pressable>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.processedMangoMarket, styles.mangoTypo]}>
          Processed Mango Market
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroupPosition: {
    height: 202,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 179,
    backgroundColor: Color.gainsboro_100,
    width: 361,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  groupChild2Position: {
    height: 60,
    backgroundColor: Color.darkolivegreen,
    left: 0,
    position: "absolute",
  },
  mangoTypo: {
    color: Color.systemBackgroundsSBLPrimary,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleContainerPosition: {
    height: 184,
    top: 0,
    position: "absolute",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
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
  arrowBackIcon: {
    top: 21,
    left: 28,
  },
  groupChild: {
    width: 128,
    backgroundColor: Color.darkolivegreen,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 26,
    position: "absolute",
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
    height: 26,
    position: "absolute",
  },
  marketAnalysisPlan: {
    height: "4.15%",
    width: "94.1%",
    top: "67.18%",
    left: "14.1%",
    color: Color.black,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    top: 0,
    height: 179,
    backgroundColor: Color.gainsboro_100,
  },
  unsplashdyc95dkugp4Icon: {
    width: 357,
    borderRadius: Border.br_xl,
  },
  rectangleGroup: {
    width: 361,
  },
  rectangleView: {
    top: 179,
    width: 357,
  },
  freshMangoMarket: {
    height: "14.64%",
    width: "68.42%",
    top: "80.33%",
    left: "16.62%",
  },
  groupParent: {
    top: 147,
    left: 17,
    height: 239,
    width: 361,
    position: "absolute",
  },
  groupChild1: {
    top: 3,
  },
  unsplashpphn8hfzkdeIcon: {
    left: 4,
    width: 355,
    borderRadius: Border.br_xl,
  },
  rectangleContainer: {
    width: 361,
    left: 0,
    height: 184,
  },
  groupChild2: {
    top: 154,
    width: 361,
  },
  processedMangoMarket: {
    height: "16.36%",
    width: "80.89%",
    top: "78.04%",
    left: "11.08%",
  },
  groupContainer: {
    top: 440,
    left: 14,
    height: 214,
    width: 361,
    position: "absolute",
  },
  dilshaMarketAnalysis: {
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

export default DilshaMarketAnalysis3;
