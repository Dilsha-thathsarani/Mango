import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer7 from "../components/FormContainer7";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-23.png")}
      />
      <View style={styles.menuChild} />
      <View style={[styles.menuInner, styles.menuInnerLayout]}>
        <View style={[styles.groupChild, styles.oip53Position]} />
      </View>
      <View style={styles.featureMenuParent}>
        <Text style={styles.featureMenu}>Feature Menu</Text>
        <Text
          style={[styles.buddingTimer, styles.identificationTypo]}
        >{`Budding 
Timer`}</Text>
        <Text
          style={[styles.varietyIdentification, styles.identificationTypo]}
        >{`Variety 
Identification`}</Text>
        <Text
          style={[styles.varietySelector, styles.marketAnalysisTypo]}
        >{`Variety 
Selector`}</Text>
        <Text
          style={[styles.fertilizerRecommendation, styles.identificationTypo]}
        >{`Fertilizer
Recommendation`}</Text>
        <Text
          style={[styles.marketAnalysis, styles.marketAnalysisTypo]}
        >{`Market
Analysis`}</Text>
        <Text
          style={[styles.diseaseIdentification, styles.identificationTypo]}
        >{`Disease
Identification`}</Text>
        <View style={[styles.groupItem, styles.groupItemShadowBox]} />
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <View style={[styles.rectangleView, styles.groupItemShadowBox]} />
        <Pressable
          style={styles.mangog03watermarked2}
          onPress={() => navigation.navigate("DilshaMangoVariety")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mangog03watermarked-1.png")}
          />
        </Pressable>
        <View style={[styles.groupChild1, styles.groupShadowBox]} />
        <Pressable
          style={[styles.r42, styles.r42Layout]}
          onPress={() => navigation.navigate("DilshaPremium")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/r-4-2.png")}
          />
        </Pressable>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Pressable
          style={styles.oip52}
          onPress={() => navigation.navigate("Yasantha14Bud")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/oip-5-2.png")}
          />
        </Pressable>
        <Image
          style={[styles.oip53, styles.oip53Position]}
          contentFit="cover"
          source={require("../assets/oip-5-3.png")}
        />
        <Pressable
          style={styles.r52}
          onPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/r-5-2.png")}
          />
        </Pressable>
        <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
        <Pressable
          style={styles.r33}
          onPress={() => navigation.navigate("DilshaPremium")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/r-3-3.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector23.png")}
        />
      </View>
      <Pressable
        style={[styles.cgaxisModels1054600Removeb, styles.r42Layout]}
        onPress={() => navigation.navigate("Yasantha14Veriety")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/cgaxis-models-105-4600removebgpreview-2.png")}
        />
      </Pressable>
      <FormContainer7 />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.menuItem, styles.menuItemLayout]}
        contentFit="cover"
        source={require("../assets/group-64.png")}
      />
      <Image
        style={[styles.groupIcon, styles.menuItemLayout]}
        contentFit="cover"
        source={require("../assets/group-64.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuInnerLayout: {
    height: 473,
    width: 394,
  },
  oip53Position: {
    top: 0,
    position: "absolute",
  },
  identificationTypo: {
    textAlign: "center",
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  marketAnalysisTypo: {
    top: "92.54%",
    textAlign: "center",
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupItemShadowBox: {
    height: 112,
    width: 106,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    position: "absolute",
  },
  groupShadowBox: {
    top: 487,
    height: 112,
    width: 106,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    position: "absolute",
  },
  r42Layout: {
    width: 114,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildShadowBox: {
    left: 285,
    height: 112,
    width: 106,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuItemLayout: {
    bottom: "25.12%",
    top: "72.51%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logo2Icon: {
    top: 28,
    left: 134,
    width: 110,
    height: 75,
    position: "absolute",
  },
  menuChild: {
    top: 117,
    left: 25,
    width: 341,
    height: 215,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  groupChild: {
    left: 0,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    height: 473,
    width: 394,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  menuInner: {
    top: 371,
    left: -4,
    position: "absolute",
  },
  featureMenu: {
    height: "4.41%",
    width: "50%",
    top: "41.7%",
    left: "5.69%",
    fontSize: FontSize.size_6xl,
    letterSpacing: -0.5,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  buddingTimer: {
    height: "8.37%",
    width: "20.79%",
    top: "65.75%",
    left: "10.15%",
  },
  varietyIdentification: {
    height: "5.94%",
    width: "29.46%",
    top: "65.6%",
    left: "37.87%",
  },
  varietySelector: {
    height: "6.54%",
    width: "37.38%",
    left: "0%",
  },
  fertilizerRecommendation: {
    height: "7.91%",
    width: "39.85%",
    top: "92.09%",
    left: "31.68%",
  },
  marketAnalysis: {
    height: "6.7%",
    width: "22.77%",
    left: "72.28%",
  },
  diseaseIdentification: {
    height: "7.46%",
    width: "34.65%",
    top: "65.91%",
    left: "65.35%",
  },
  groupItem: {
    top: 309,
    left: 24,
  },
  groupInner: {
    left: 19,
  },
  rectangleView: {
    top: 313,
    left: 149,
  },
  mangog03watermarked2: {
    left: 145,
    top: 307,
    width: 112,
    height: 127,
    position: "absolute",
  },
  groupChild1: {
    left: 156,
  },
  icon1: {
    borderRadius: Border.br_6xl,
  },
  r42: {
    left: 153,
    top: 488,
    height: 111,
  },
  groupChild2: {
    top: 311,
  },
  oip52: {
    width: 107,
    height: 110,
    top: 311,
    left: 24,
    position: "absolute",
  },
  oip53: {
    left: 36,
    width: 344,
    borderRadius: Border.br_6xl,
    height: 215,
  },
  r52: {
    left: 274,
    width: 119,
    height: 116,
    top: 311,
    position: "absolute",
  },
  groupChild3: {
    top: 484,
  },
  r33: {
    left: 290,
    top: 514,
    width: 97,
    height: 78,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.95%",
    width: "4.03%",
    top: "15.91%",
    right: "76.78%",
    bottom: "79.14%",
    left: "19.18%",
  },
  featureMenuParent: {
    height: "77.84%",
    width: "103.59%",
    top: "13.86%",
    right: "-0.77%",
    bottom: "8.29%",
    left: "-2.82%",
    position: "absolute",
  },
  cgaxisModels1054600Removeb: {
    left: 3,
    top: 607,
    height: 109,
  },
  vectorIcon1: {
    height: "3.85%",
    width: "4.18%",
    top: "26.24%",
    right: "17.49%",
    bottom: "69.9%",
    left: "78.33%",
  },
  menuItem: {
    right: "37.95%",
    left: "56.92%",
  },
  groupIcon: {
    right: "5.9%",
    left: "88.97%",
  },
  menu: {
    backgroundColor: Color.gold_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_21xl,
  },
});

export default Menu;
