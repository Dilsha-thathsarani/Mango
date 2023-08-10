import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer3 from "../components/FormContainer3";
import { useNavigation } from "@react-navigation/native";
import Container1 from "../components/Container1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Yasantha14Tips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Tips}>
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
        style={[styles.yasantha14TipsChild, styles.vectorIcon2Layout]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <FormContainer3
        dimensionCode={require("../assets/download-2-2.png")}
        productCode={require("../assets/download-3-1.png")}
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
        style={styles.yasantha14TipsItem}
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
      <View style={[styles.previousPicturesWrapper, styles.wrapperLayout]}>
        <Text style={[styles.previousPictures, styles.snapTipsFlexBox]}>
          Previous Pictures
        </Text>
      </View>
      <View style={[styles.yasantha14TipsInner, styles.yasantha14InnerLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-8.png")}
        />
      </View>
      <View style={[styles.groupView, styles.yasantha14InnerLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-81.png")}
        />
      </View>
      <View style={[styles.yasantha14TipsInner1, styles.yasantha14InnerLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-82.png")}
        />
      </View>
      <View style={styles.yasantha14TipsInner2}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={styles.groupWrapperPosition}>
            <View style={styles.rectangleView} />
            <Text style={[styles.takeAPicture1, styles.snapTipsFlexBox]}>
              Take a Picture
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon2, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.snapTipsWrapper, styles.wrapperLayout]}>
        <Text style={[styles.snapTips, styles.snapTipsFlexBox]}>Snap Tips</Text>
      </View>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Yasantha14Bud")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={styles.mangog03watermarked2Icon}
        contentFit="cover"
        source={require("../assets/mangog03watermarked-2.png")}
      />
      <Image
        style={styles.greenMangog03watermarked1}
        contentFit="cover"
        source={require("../assets/green-mangog03watermarked-1.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={styles.yasantha14TipsChild1}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Container1 />
    </View>
  );
};

const styles = StyleSheet.create({
  sproutLayout: {
    height: 24,
    width: 20,
    position: "absolute",
  },
  vectorIcon2Layout: {
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
  wrapperLayout: {
    height: "2.37%",
    position: "absolute",
  },
  snapTipsFlexBox: {
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
    left: "4.87%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.rosarioItalic,
    textAlign: "left",
    color: Color.black,
    fontStyle: "italic",
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
  yasantha14TipsChild: {
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
    width: 24,
  },
  yasantha14TipsItem: {
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
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  previousPicturesWrapper: {
    width: "46.92%",
    top: "67.06%",
    right: "48.97%",
    bottom: "30.57%",
    left: "4.1%",
  },
  groupChild: {
    top: -2,
    left: -2,
    height: 120,
    borderRadius: Border.br_6xl,
    width: 114,
    position: "absolute",
  },
  yasantha14TipsInner: {
    left: 9,
  },
  groupView: {
    left: 141,
  },
  yasantha14TipsInner1: {
    left: 273,
  },
  rectangleView: {
    height: "99.65%",
    bottom: "0.35%",
    backgroundColor: Color.gold_100,
    right: "0%",
    borderRadius: Border.br_6xl,
    left: "0%",
    top: "0%",
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
    letterSpacing: -0.4,
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
  yasantha14TipsInner2: {
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
  snapTips: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.workSansItalic,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    letterSpacing: -0.4,
    fontStyle: "italic",
  },
  snapTipsWrapper: {
    width: "65.9%",
    top: "62.56%",
    right: "20%",
    bottom: "35.07%",
    left: "14.1%",
  },
  rectangleIcon: {
    top: 214,
    left: 23,
    borderRadius: Border.br_11xl,
    width: 347,
    height: 385,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "83.33%",
    top: "27.73%",
    right: "11.03%",
    bottom: "69.67%",
    width: "5.64%",
    height: "2.61%",
    position: "absolute",
  },
  mangog03watermarked2Icon: {
    top: 356,
    left: 63,
    width: 26,
    height: 44,
    position: "absolute",
  },
  greenMangog03watermarked1: {
    top: 436,
    left: 56,
    width: 35,
    height: 45,
    position: "absolute",
  },
  lineIcon: {
    top: 439,
    left: 55,
    width: 38,
    height: 34,
    position: "absolute",
  },
  yasantha14TipsChild1: {
    top: 438,
    left: 57,
    width: 36,
    height: 36,
    position: "absolute",
  },
  yasantha14Tips: {
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_21xl,
  },
});

export default Yasantha14Tips;
