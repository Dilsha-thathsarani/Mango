import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer2 from "../components/FormContainer2";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DilshaMarketAnalysis2 = () => {
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
        onPress={() => navigation.navigate("DilshaMarketAnalysis1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.premium}>Premium</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </View>
      <View
        style={[styles.dilshaMarketAnalysisInner, styles.rectangleGroupLayout]}
      >
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Image
        style={[styles.oip61, styles.r71Layout]}
        contentFit="cover"
        source={require("../assets/oip-6-1.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={styles.groupInnerLayout} />
        <Image
          style={[styles.r71, styles.r71Layout]}
          contentFit="cover"
          source={require("../assets/r-7-1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.r81Position]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Image
        style={[styles.r81, styles.r81Position]}
        contentFit="cover"
        source={require("../assets/r-8-1.png")}
      />
      <Text style={[styles.mangoJuice, styles.mangoTypo]}>Mango Juice</Text>
      <Text style={[styles.currentPrice100, styles.districtTypo]}>
        Current Price :100
      </Text>
      <Text style={[styles.currentPrice300, styles.currentPrice300Typo]}>
        Current Price :300
      </Text>
      <Text style={[styles.currentPrice500, styles.districtTypo]}>
        Current Price :500
      </Text>
      <Text style={[styles.districtMatara, styles.districtTypo]}>
        District : Matara
      </Text>
      <Text style={[styles.districtMatara1, styles.currentPrice300Typo]}>
        District : Matara
      </Text>
      <Text style={[styles.districtMatara2, styles.districtTypo]}>
        District : Matara
      </Text>
      <Text style={[styles.mangoJam, styles.mangoTypo]}>Mango Jam</Text>
      <Text style={[styles.mangoPickle, styles.mangoTypo]}>Mango Pickle</Text>
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
  rectangleGroupLayout: {
    height: 179,
    position: "absolute",
  },
  groupInnerLayout: {
    backgroundColor: Color.gainsboro_100,
    height: 179,
    width: 361,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  r71Layout: {
    width: 135,
    height: 179,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupPosition: {
    left: 14,
    width: 361,
  },
  r81Position: {
    top: 539,
    height: 179,
    position: "absolute",
  },
  mangoTypo: {
    color: Color.black,
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  districtTypo: {
    fontFamily: FontFamily.workSansRegular,
    color: Color.black,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  currentPrice300Typo: {
    left: 170,
    fontFamily: FontFamily.workSansRegular,
    color: Color.black,
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
    backgroundColor: Color.darkolivegreen,
    width: 128,
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
  groupInner: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  dilshaMarketAnalysisInner: {
    width: 361,
    height: 179,
    left: 19,
    top: 109,
  },
  oip61: {
    left: 19,
    top: 109,
    width: 135,
  },
  r71: {
    left: 5,
    width: 135,
    top: 0,
  },
  rectangleGroup: {
    top: 324,
    height: 179,
    position: "absolute",
  },
  groupView: {
    left: 14,
    width: 361,
  },
  r81: {
    left: 18,
    width: 136,
    borderRadius: Border.br_xl,
  },
  mangoJuice: {
    top: 137,
    left: 200,
  },
  currentPrice100: {
    top: 184,
    left: 167,
    fontFamily: FontFamily.workSansRegular,
  },
  currentPrice300: {
    top: 391,
  },
  currentPrice500: {
    top: 600,
    left: 162,
  },
  districtMatara: {
    top: 221,
    left: 167,
    fontFamily: FontFamily.workSansRegular,
  },
  districtMatara1: {
    top: 429,
  },
  districtMatara2: {
    top: 637,
    left: 163,
  },
  mangoJam: {
    top: 353,
    left: 195,
  },
  mangoPickle: {
    top: 556,
    left: 197,
  },
  dilshaMarketAnalysis: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
});

export default DilshaMarketAnalysis2;
