import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer4 from "../components/FormContainer4";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Yasantha14Bud = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Bud}>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-2.png")}
      />
      <Text style={styles.timeYourBud}>{`Time your bud
perfectly`}</Text>
      <View style={[styles.sproutWrapper, styles.sproutLayout]}>
        <Image
          style={[styles.sproutIcon, styles.sproutLayout]}
          contentFit="cover"
          source={require("../assets/sprout.png")}
        />
      </View>
      <Image
        style={[styles.yasantha14BudChild, styles.vectorIcon2Layout1]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <FormContainer4
        dimensionCode={require("../assets/download-2-21.png")}
        dimensionCodeImageUrl={require("../assets/download-3-11.png")}
        onVectorPress={() => navigation.navigate("Menu")}
        onDownload1Press={() => navigation.navigate("FertilizationHome")}
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
      <Image
        style={[styles.yasantha14BudItem, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.yasantha14BudInner}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.takeAPicture, styles.takeAPictureTypo]}>{`Take a 
picture`}</Text>
      <Text style={[styles.checkSuitability, styles.takeAPictureTypo]}>
        CheckSuitability
      </Text>
      <Text style={[styles.proceedBudding, styles.takeAPictureTypo]}>
        ProceedBudding
      </Text>
      <Image
        style={styles.image2RemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/image-2removebgpreview-1.png")}
      />
      <Image
        style={styles.webCapture215202382221WwIcon}
        contentFit="cover"
        source={require("../assets/web-capture-2152023-82221-wwwfreepik-1.png")}
      />
      <Image
        style={styles.r2RemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/r--2-removebgpreview-1.png")}
      />
      <View style={[styles.previousPicturesWrapper, styles.needHelpLayout]}>
        <Text style={[styles.previousPictures, styles.needHelpTypo]}>
          Previous Pictures
        </Text>
      </View>
      <View style={[styles.groupView, styles.yasantha14InnerLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-83.png")}
        />
      </View>
      <View style={[styles.yasantha14BudInner1, styles.yasantha14InnerLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-84.png")}
        />
      </View>
      <View style={[styles.yasantha14BudInner2, styles.yasantha14InnerLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-82.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Yasantha14Cam")}
      >
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={styles.groupWrapperPosition}>
            <View style={styles.rectangleView} />
            <Text style={[styles.takeAPicture1, styles.snapTipsFlexBox]}>
              Take a Picture
            </Text>
          </View>
        </View>
      </Pressable>
      <Image
        style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.needHelp, styles.needHelpTypo]}>Need Help?</Text>
      <Pressable
        style={[styles.snapTipsWrapper, styles.vectorIcon2Layout]}
        onPress={() => navigation.navigate("Yasantha14Tips")}
      >
        <Text style={[styles.snapTips, styles.snapTipsFlexBox]}>Snap Tips</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sproutLayout: {
    height: 24,
    width: 20,
    position: "absolute",
  },
  vectorIcon2Layout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "4.18%",
    height: "3.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  takeAPictureTypo: {
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    height: "5.43%",
    color: Color.black,
    position: "absolute",
  },
  needHelpLayout: {
    width: "46.92%",
    height: "2.37%",
  },
  needHelpTypo: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  yasantha14InnerLayout: {
    height: 112,
    width: 106,
    top: 618,
    position: "absolute",
  },
  groupWrapperPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  snapTipsFlexBox: {
    letterSpacing: -0.4,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  vectorIcon2Layout: {
    height: "2.37%",
    position: "absolute",
  },
  logo2Icon: {
    left: 138,
    height: 95,
    width: 114,
    top: 21,
    position: "absolute",
  },
  timeYourBud: {
    height: "7.35%",
    width: "75.9%",
    top: "15.28%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.rosarioItalic,
    textAlign: "left",
    color: Color.black,
    fontStyle: "italic",
    left: "4.87%",
    position: "absolute",
  },
  sproutIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
    width: 20,
  },
  sproutWrapper: {
    top: 170,
    left: 268,
  },
  yasantha14BudChild: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
    position: "absolute",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
  },
  arrowBackIcon: {
    left: 28,
    top: 21,
  },
  yasantha14BudItem: {
    top: 226,
    left: 14,
    width: 372,
    height: 176,
  },
  yasantha14BudInner: {
    top: 255,
    left: 36,
    width: 53,
    height: 53,
    position: "absolute",
  },
  vectorIcon: {
    top: "35.36%",
    right: "64.17%",
    bottom: "60.79%",
    left: "31.65%",
  },
  vectorIcon1: {
    top: "34.68%",
    right: "35.42%",
    bottom: "61.47%",
    left: "60.4%",
  },
  takeAPicture: {
    width: "16.91%",
    left: "7.9%",
    top: "40.95%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    height: "5.43%",
  },
  checkSuitability: {
    width: "20.29%",
    top: "41.07%",
    left: "37.61%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    height: "5.43%",
  },
  proceedBudding: {
    width: "32.13%",
    left: "60.55%",
    top: "40.95%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    height: "5.43%",
  },
  image2RemovebgPreview1Icon: {
    top: 267,
    left: 41,
    width: 44,
    height: 32,
    position: "absolute",
  },
  webCapture215202382221WwIcon: {
    top: 250,
    left: 150,
    borderRadius: Border.br_3xs,
    width: 71,
    height: 71,
    position: "absolute",
  },
  r2RemovebgPreview1Icon: {
    top: 245,
    left: 272,
    width: 68,
    height: 79,
    position: "absolute",
  },
  previousPictures: {
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  previousPicturesWrapper: {
    top: "67.06%",
    right: "48.97%",
    bottom: "30.57%",
    left: "4.1%",
    position: "absolute",
  },
  groupChild: {
    top: -2,
    left: -2,
    height: 120,
    width: 114,
  },
  groupView: {
    left: 9,
  },
  yasantha14BudInner1: {
    left: 141,
  },
  yasantha14BudInner2: {
    left: 273,
  },
  rectangleView: {
    height: "99.65%",
    bottom: "0.35%",
    backgroundColor: Color.gold_100,
    right: "0%",
    left: "0%",
    top: "0%",
    borderRadius: Border.br_6xl,
    position: "absolute",
    width: "100%",
  },
  takeAPicture1: {
    height: "77.85%",
    width: "66.96%",
    top: "22.15%",
    left: "22.08%",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    fontSize: FontSize.size_xl,
  },
  groupWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  groupPressable: {
    height: "5.35%",
    width: "61.54%",
    top: "50.47%",
    right: "18.21%",
    bottom: "44.18%",
    left: "20.26%",
    position: "absolute",
  },
  vectorIcon2: {
    width: "5.13%",
    top: "62.32%",
    right: "87.69%",
    bottom: "35.31%",
    left: "7.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  needHelp: {
    top: "59.24%",
    fontSize: FontSize.size_2xl,
    width: "46.92%",
    height: "2.37%",
    left: "4.87%",
    fontWeight: "500",
  },
  snapTips: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.workSansItalic,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    fontStyle: "italic",
    letterSpacing: -0.4,
  },
  snapTipsWrapper: {
    width: "65.9%",
    top: "62.56%",
    right: "20%",
    bottom: "35.07%",
    left: "14.1%",
  },
  yasantha14Bud: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_21xl,
  },
});

export default Yasantha14Bud;
