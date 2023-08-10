import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer1 from "../components/FormContainer1";
import FormContainer3 from "../components/FormContainer3";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DilshaPremium = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dilshaPremium, styles.dilshaLayout]}>
      <View style={[styles.dilshaPremium1, styles.iconPosition1]}>
        <Image
          style={styles.logo2Icon}
          contentFit="cover"
          source={require("../assets/logo-21.png")}
        />
        <Text
          style={[styles.itsTimeTo, styles.itsTimeToFlexBox]}
        >{`It’s time to identify
your mango variety`}</Text>
        <View style={[styles.sproutWrapper, styles.sproutLayout]}>
          <Image
            style={[styles.sproutIcon, styles.sproutLayout]}
            contentFit="cover"
            source={require("../assets/sprout.png")}
          />
        </View>
        <Image
          style={[styles.dilshaPremiumChild, styles.dilshaPremiumChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-611.png")}
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
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={styles.dilshaPremiumItem}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
        <Image
          style={[styles.dilshaPremiumInner, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-25.png")}
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
            style={[
              styles.mangog03watermarked2Icon,
              styles.rectangleGroupLayout,
            ]}
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
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <FormContainer3
          dimensionCode={require("../assets/download-2-22.png")}
          productCode={require("../assets/download-3-12.png")}
          propColor="#fff"
        />
        <Image
          style={[styles.coronavirusIcon, styles.arrowBackLayout]}
          contentFit="cover"
          source={require("../assets/coronavirus.png")}
        />
        <Text style={[styles.needHelp, styles.seeAllTypo]}>Need Help?</Text>
        <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
        <View style={styles.snapTipsWrapper}>
          <Text style={[styles.snapTips, styles.needHelpFlexBox]}>
            Snap Tips
          </Text>
        </View>
        <View style={styles.snapTipsWrapper}>
          <Text style={[styles.snapTips, styles.needHelpFlexBox]}>
            Snap Tips
          </Text>
        </View>
        <View style={styles.groupView}>
          <View style={[styles.rectangleView, styles.rectangleViewBg]} />
          <Text style={[styles.premium, styles.premiumClr]}>Premium</Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-64.png")}
          />
        </View>
      </View>
      <View style={[styles.dilshaPremiumChild1, styles.rectangleViewBg]} />
      <Pressable
        style={[styles.arrowBack, styles.arrowBackLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.dilshaPremiumChildLayout]}
        onPress={() => navigation.navigate("DilshaPremiumPay")}
      />
      <Image
        style={[styles.dilshaPremiumChild2, styles.dilshaChildLayout]}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Image
        style={[styles.dilshaPremiumChild3, styles.dilshaChildLayout]}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Image
        style={[styles.dilshaPremiumChild4, styles.dilshaChildLayout]}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Image
        style={[styles.dilshaPremiumChild5, styles.dilshaChildLayout]}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Text
        style={[styles.getFullAccess, styles.premiumClr]}
      >{`Get full access to 
MangoWise `}</Text>
      <Text style={[styles.getFreshMarket, styles.getTypo]}>
        Get fresh market analysis
      </Text>
      <Text style={[styles.getFertilizerName, styles.gainAccessToTypo]}>
        Get fertilizer name
      </Text>
      <Text style={[styles.getFreshMarket1, styles.getTypo]}>{`Get Fresh Market 
Income Plan`}</Text>
      <Text style={[styles.subscribe, styles.itsTimeToFlexBox]}>Subscribe</Text>
      <Text style={[styles.gainAccessTo, styles.gainAccessToTypo]}>
        Gain access to market analysis
      </Text>
      <Text style={[styles.discoverTheBeauty, styles.premiumClr]}>
        Discover the beauty of plant
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dilshaLayout: {
    height: 844,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  iconPosition1: {
    left: 0,
    top: 0,
  },
  itsTimeToFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  sproutLayout: {
    height: 24,
    width: 20,
    position: "absolute",
  },
  dilshaPremiumChildLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  iconPosition: {
    top: 252,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  seeVarietyTypo: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "center",
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
  arrowBackLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  needHelpFlexBox: {
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.darkolivegreen,
    position: "absolute",
  },
  premiumClr: {
    color: Color.gold_100,
    position: "absolute",
  },
  dilshaChildLayout: {
    height: 35,
    width: 33,
    left: 65,
    position: "absolute",
  },
  getTypo: {
    width: 231,
    color: Color.systemBackgroundsSBLPrimary,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    textAlign: "left",
    position: "absolute",
  },
  gainAccessToTypo: {
    left: 121,
    width: 231,
    color: Color.systemBackgroundsSBLPrimary,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    textAlign: "left",
    position: "absolute",
  },
  logo2Icon: {
    top: 54,
    left: 138,
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
  },
  sproutIcon: {
    left: 0,
    top: 0,
    borderRadius: Border.br_21xl,
    width: 20,
  },
  sproutWrapper: {
    top: 170,
    left: 268,
  },
  dilshaPremiumChild: {
    top: 231,
    left: 17,
    width: 370,
    height: 177,
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
  },
  vectorIcon1: {
    top: "31.46%",
    right: "29.28%",
    bottom: "64.69%",
    left: "66.54%",
    width: "4.18%",
    height: "3.85%",
    maxWidth: "100%",
  },
  dilshaPremiumItem: {
    top: 260,
    left: 34,
    width: 53,
    height: 53,
    position: "absolute",
  },
  dilshaPremiumInner: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
  },
  takeAPicture: {
    top: "40.88%",
    left: "8.21%",
    textAlign: "center",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
  },
  seeVariety: {
    top: "39.93%",
    left: "41.54%",
    textAlign: "center",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
  },
  getRecommendation: {
    height: "5.45%",
    width: "34.36%",
    top: "39.45%",
    left: "61.79%",
    textAlign: "center",
  },
  previousPictures: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    left: "0%",
    top: "0%",
    height: "100%",
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
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
    overflow: "hidden",
  },
  needHelp: {
    top: "58.53%",
    left: "3.85%",
    fontSize: FontSize.size_2xl,
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    width: "46.92%",
    height: "2.37%",
  },
  seeAll: {
    width: "16.92%",
    left: "80.77%",
    top: "67.3%",
    height: "2.37%",
    position: "absolute",
    letterSpacing: -0.3,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
  },
  snapTips: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.workSansItalic,
    left: "0%",
    top: "0%",
    letterSpacing: -0.4,
    height: "100%",
    width: "100%",
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
    width: 128,
    height: 26,
    left: 0,
    top: 0,
  },
  premium: {
    width: "66.9%",
    top: "11.54%",
    left: "33.1%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    height: "76.92%",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    textAlign: "left",
  },
  groupIcon: {
    width: "13.79%",
    top: "7.69%",
    right: "75.86%",
    bottom: "15.38%",
    left: "10.34%",
    height: "76.92%",
  },
  groupView: {
    top: 24,
    left: 205,
    width: 145,
    height: 26,
    position: "absolute",
  },
  dilshaPremium1: {
    width: 390,
    opacity: 0.3,
    position: "absolute",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderRadius: Border.br_21xl,
    top: 0,
  },
  dilshaPremiumChild1: {
    top: 129,
    borderRadius: 35,
    width: 346,
    height: 507,
    left: 19,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBack: {
    left: 28,
    top: 21,
  },
  rectanglePressable: {
    top: 555,
    left: 94,
    backgroundColor: Color.gold_100,
    width: 186,
    height: 43,
  },
  dilshaPremiumChild2: {
    top: 302,
  },
  dilshaPremiumChild3: {
    top: 356,
  },
  dilshaPremiumChild4: {
    top: 411,
  },
  dilshaPremiumChild5: {
    top: 469,
  },
  getFullAccess: {
    top: 158,
    left: 55,
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.6,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  getFreshMarket: {
    left: 117,
    top: 356,
  },
  getFertilizerName: {
    top: 415,
  },
  getFreshMarket1: {
    top: 464,
    left: 118,
  },
  subscribe: {
    top: 562,
    left: 127,
    fontSize: FontSize.size_6xl,
    letterSpacing: -0.5,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: Color.darkolivegreen,
    width: 129,
  },
  gainAccessTo: {
    top: 294,
  },
  discoverTheBeauty: {
    top: 233,
    left: 83,
    fontSize: 35,
    letterSpacing: -0.7,
    fontFamily: FontFamily.waterfallRegular,
    textAlign: "center",
  },
  dilshaPremium: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 844,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default DilshaPremium;
