import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "../components/FormContainer1";
import FormContainer2 from "../components/FormContainer2";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DilshaMangoVariety = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaMangoVariety}>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-21.png")}
      />
      <Text
        style={[styles.itsTimeTo, styles.snapTipsTypo]}
      >{`It’s time to identify
your mango variety`}</Text>
      <View style={[styles.sproutWrapper, styles.sproutLayout]}>
        <Image
          style={[styles.sproutIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/sprout.png")}
        />
      </View>
      <Image
        style={styles.dilshaMangoVarietyChild}
        contentFit="cover"
        source={require("../assets/rectangle-63.png")}
      />
      <Image
        style={styles.image2RemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/image-2removebgpreview-11.png")}
      />
      <Image
        style={[styles.webCapture215202382221WwIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/web-capture-2152023-82221-wwwfreepik-11.png")}
      />
      <Image
        style={[styles.r2RemovebgPreview1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/r--2-removebgpreview-11.png")}
      />
      <FormContainer1 />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.dilshaMangoVarietyItem}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.dilshaMangoVarietyInner, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-251.png")}
      />
      <Text style={[styles.takeAPicture, styles.seeVarietyTypo]}>{`Take a 
picture`}</Text>
      <Text style={[styles.seeVariety, styles.seeVarietyTypo]}>{`See
Variety`}</Text>
      <Text style={[styles.getRecommendation, styles.seeVarietyTypo]}>{`Get
recommendation`}</Text>
      <View style={[styles.previousPicturesWrapper, styles.seeAllPosition]}>
        <Text style={[styles.previousPictures, styles.seeAllTypo]}>
          Previous Pictures
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Image
          style={[
            styles.mangog03watermarked1Icon,
            styles.rectangleParentLayout,
          ]}
          contentFit="cover"
          source={require("../assets/mangog03watermarked-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Image
          style={[styles.mangog03watermarked2Icon, styles.rectangleGroupLayout]}
          contentFit="cover"
          source={require("../assets/mangog03watermarked-21.png")}
        />
      </View>
      <View
        style={[styles.rectangleContainer, styles.rectangleContainerLayout]}
      >
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Image
          style={[
            styles.greenMangog03watermarked1,
            styles.rectangleContainerLayout,
          ]}
          contentFit="cover"
          source={require("../assets/green-mangog03watermarked-11.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <FormContainer2
        dimensions={require("../assets/download-2-22.png")}
        onVectorPress={() => navigation.navigate("Menu")}
      />
      <Image
        style={[styles.coronavirusIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/coronavirus.png")}
      />
      <Image
        style={[styles.arrowBackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-back.png")}
      />
      <Pressable
        style={styles.needHelp}
        onPress={() => navigation.navigate("DilshaTips")}
      >
        <Text style={[styles.needHelp1, styles.seeAllTypo]}>Need Help?</Text>
      </Pressable>
      <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
      <View style={styles.snapTipsWrapper}>
        <Text style={[styles.snapTips, styles.snapTipsClr]}>Snap Tips</Text>
      </View>
      <View style={styles.snapTipsWrapper}>
        <Text style={[styles.snapTips, styles.snapTipsClr]}>Snap Tips</Text>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("DilshaPremium")}
      >
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.premium, styles.premiumLayout]}>Premium</Text>
        <Image
          style={[styles.groupIcon, styles.premiumLayout]}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  snapTipsTypo: {
    textAlign: "left",
    fontStyle: "italic",
  },
  sproutLayout: {
    height: 24,
    width: 20,
    position: "absolute",
  },
  iconPosition1: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    top: 252,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  seeVarietyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
    position: "absolute",
  },
  seeAllPosition: {
    top: "67.3%",
    height: "2.37%",
    position: "absolute",
  },
  seeAllTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  rectangleParentLayout: {
    height: 127,
    width: 112,
    position: "absolute",
  },
  groupShadowBox: {
    height: 112,
    width: 106,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.palegoldenrod,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  rectangleGroupLayout: {
    width: 140,
    position: "absolute",
  },
  rectangleContainerLayout: {
    width: 124,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  snapTipsClr: {
    letterSpacing: -0.4,
    color: Color.black,
  },
  rectangleViewLayout: {
    height: 26,
    position: "absolute",
  },
  premiumLayout: {
    height: "76.92%",
    position: "absolute",
  },
  logo2Icon: {
    top: 54,
    left: 123,
    width: 90,
    height: 62,
    position: "absolute",
  },
  itsTimeTo: {
    height: "7.35%",
    width: "75.9%",
    top: "15.28%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.rosarioItalic,
    color: Color.black,
    textAlign: "left",
    fontStyle: "italic",
    left: "4.87%",
    position: "absolute",
  },
  sproutIcon: {
    height: 24,
    width: 20,
    position: "absolute",
    borderRadius: Border.br_21xl,
    top: 0,
  },
  sproutWrapper: {
    top: 170,
    left: 268,
  },
  dilshaMangoVarietyChild: {
    top: 231,
    left: 17,
    width: 370,
    height: 177,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  image2RemovebgPreview1Icon: {
    top: 268,
    left: 39,
    width: 44,
    height: 32,
    position: "absolute",
  },
  webCapture215202382221WwIcon: {
    left: 176,
    borderRadius: Border.br_3xs,
    width: 41,
    height: 63,
  },
  r2RemovebgPreview1Icon: {
    left: 295,
    width: 57,
    height: 71,
  },
  vectorIcon: {
    top: "32.05%",
    right: "64.92%",
    bottom: "64.1%",
    left: "30.9%",
    width: "4.18%",
    height: "3.85%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "31.46%",
    right: "29.28%",
    bottom: "64.69%",
    left: "66.54%",
    width: "4.18%",
    height: "3.85%",
    maxWidth: "100%",
    position: "absolute",
  },
  dilshaMangoVarietyItem: {
    top: 260,
    left: 34,
    width: 53,
    height: 53,
    position: "absolute",
  },
  dilshaMangoVarietyInner: {
    height: "3.91%",
    width: "7.61%",
    top: "4.03%",
    right: "3.16%",
    bottom: "92.06%",
    left: "89.23%",
    position: "absolute",
  },
  takeAPicture: {
    top: "40.88%",
    left: "8.21%",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
  },
  seeVariety: {
    top: "39.93%",
    left: "41.54%",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
  },
  getRecommendation: {
    height: "5.45%",
    width: "34.36%",
    top: "39.45%",
    left: "61.79%",
  },
  previousPictures: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  previousPicturesWrapper: {
    right: "48.21%",
    bottom: "30.33%",
    width: "46.92%",
    top: "67.3%",
    left: "4.87%",
  },
  groupChild: {
    top: 13,
    left: 3,
  },
  mangog03watermarked1Icon: {
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 600,
    left: 19,
  },
  groupItem: {
    top: 11,
    left: 13,
  },
  mangog03watermarked2Icon: {
    height: 114,
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    top: 598,
    left: 255,
    height: 123,
  },
  groupInner: {
    top: 5,
    left: 18,
  },
  greenMangog03watermarked1: {
    height: 115,
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    top: 606,
    left: 128,
    height: 117,
  },
  vectorIcon2: {
    width: "5.13%",
    top: "61.61%",
    right: "88.72%",
    bottom: "36.02%",
    left: "6.15%",
    height: "2.37%",
    position: "absolute",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
  },
  arrowBackIcon: {
    top: 40,
    left: 22,
  },
  needHelp1: {
    fontSize: FontSize.size_2xl,
    letterSpacing: -0.4,
    color: Color.black,
    width: "46.92%",
    height: "2.37%",
  },
  needHelp: {
    left: "3.85%",
    top: "58.53%",
    position: "absolute",
  },
  seeAll: {
    width: "16.92%",
    left: "80.77%",
    top: "67.3%",
    height: "2.37%",
    position: "absolute",
    letterSpacing: -0.3,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
  },
  snapTips: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.workSansItalic,
    left: "0%",
    top: "0%",
    height: "100%",
    letterSpacing: -0.4,
    position: "absolute",
    width: "100%",
    textAlign: "left",
    fontStyle: "italic",
  },
  snapTipsWrapper: {
    width: "65.9%",
    top: "61.85%",
    right: "21.03%",
    bottom: "35.78%",
    left: "13.08%",
    height: "2.37%",
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 128,
    left: 0,
    top: 0,
  },
  premium: {
    width: "66.9%",
    top: "11.54%",
    left: "33.1%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    color: Color.gold_100,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: -0.3,
  },
  groupIcon: {
    width: "13.79%",
    top: "7.69%",
    right: "75.86%",
    bottom: "15.38%",
    left: "10.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPressable: {
    top: 41,
    left: 205,
    width: 145,
  },
  dilshaMangoVariety: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_21xl,
  },
});

export default DilshaMangoVariety;
