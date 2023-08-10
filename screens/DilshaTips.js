import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer1 from "../components/FormContainer1";
import FocusCard from "../components/FocusCard";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DilshaTips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaTips}>
      <Image
        style={styles.errorOutlineIcon}
        contentFit="cover"
        source={require("../assets/error-outline2.png")}
      />
      <View style={[styles.dilshaTipsInner, styles.page13Layout]}>
        <View style={[styles.page13Parent, styles.iconPosition1]}>
          <View style={[styles.page13, styles.iconPosition1]}>
            <Image
              style={styles.logo2Icon}
              contentFit="cover"
              source={require("../assets/logo-2.png")}
            />
            <Text style={styles.itsTimeTo}>{`It’s time to identify
your mango variety`}</Text>
            <View style={[styles.sproutWrapper, styles.sproutIconLayout]}>
              <Image
                style={[styles.sproutIcon, styles.sproutIconLayout]}
                contentFit="cover"
                source={require("../assets/sprout.png")}
              />
            </View>
            <Image
              style={styles.page13Child}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
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
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
            <Image
              style={styles.page13Item}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
            <Image
              style={[styles.page13Inner, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/group-25.png")}
            />
            <Text style={[styles.takeAPicture, styles.seeVarietyTypo]}>{`Take a 
picture`}</Text>
            <Text style={[styles.seeVariety, styles.seeVarietyTypo]}>{`See
Variety`}</Text>
            <Text
              style={[styles.getRecommendation, styles.seeVarietyTypo]}
            >{`Get
recommendation`}</Text>
            <View
              style={[styles.previousPicturesWrapper, styles.vectorIcon2Layout]}
            >
              <Text style={styles.previousPictures}>Previous Pictures</Text>
            </View>
            <View
              style={[styles.rectangleParent, styles.rectangleParentLayout]}
            >
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
            <View style={[styles.rectangleView, styles.groupShadowBox]} />
            <Image
              style={styles.greenMangog03watermarked1}
              contentFit="cover"
              source={require("../assets/green-mangog03watermarked-11.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.arrowBackIcon, styles.sproutIconLayout]}
              contentFit="cover"
              source={require("../assets/arrow-back.png")}
            />
          </View>
          <FocusCard />
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        <View style={styles.bottomPosition} />
        <Image
          style={[styles.vectorIcon3, styles.vectorPosition]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Image
          style={[styles.download1Icon, styles.download22Layout]}
          contentFit="cover"
          source={require("../assets/download-11.png")}
        />
        <Image
          style={[styles.download22, styles.download22Layout]}
          contentFit="cover"
          source={require("../assets/download-2-23.png")}
        />
        <Image
          style={[styles.download31, styles.downloadPosition]}
          contentFit="cover"
          source={require("../assets/download-3-13.png")}
        />
        <View style={[styles.download11, styles.downloadPosition]} />
        <Text style={styles.budding}>Budding</Text>
        <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
        <Text style={[styles.fertilizer, styles.homeTypo]}>Fertilizer</Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <View style={styles.bottomNavigation}>
        <View style={styles.bottomPosition} />
        <Pressable
          style={styles.vectorPosition}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
        </Pressable>
        <Image
          style={[styles.download1Icon, styles.download22Layout]}
          contentFit="cover"
          source={require("../assets/download-11.png")}
        />
        <Image
          style={[styles.download22, styles.download22Layout]}
          contentFit="cover"
          source={require("../assets/download-2-23.png")}
        />
        <Image
          style={[styles.download31, styles.downloadPosition]}
          contentFit="cover"
          source={require("../assets/download-3-13.png")}
        />
        <View style={[styles.download11, styles.downloadPosition]} />
        <Text style={styles.budding}>Budding</Text>
        <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
        <Text style={[styles.fertilizer, styles.homeTypo]}>Fertilizer</Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page13Layout: {
    width: 390,
    position: "absolute",
    height: 844,
  },
  iconPosition1: {
    top: 0,
    left: 0,
  },
  sproutIconLayout: {
    height: 24,
    position: "absolute",
  },
  iconPosition: {
    top: 252,
    position: "absolute",
  },
  vectorIconLayout: {
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
  vectorIcon2Layout: {
    height: "2.37%",
    position: "absolute",
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
  vectorPosition: {
    left: "46.58%",
    bottom: "52.23%",
    right: "47.72%",
    top: "25%",
    width: "5.7%",
    height: "22.77%",
    position: "absolute",
  },
  download22Layout: {
    width: 31,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    position: "absolute",
  },
  downloadPosition: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    position: "absolute",
  },
  homeTypo: {
    top: 49,
    height: 14,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  errorOutlineIcon: {
    top: 708,
    left: 316,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  logo2Icon: {
    top: 21,
    left: 138,
    width: 114,
    height: 95,
    position: "absolute",
  },
  itsTimeTo: {
    height: "7.35%",
    width: "75.9%",
    top: "15.28%",
    left: "4.87%",
    fontSize: FontSize.size_11xl,
    fontStyle: "italic",
    fontFamily: FontFamily.rosarioItalic,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  sproutIcon: {
    width: 20,
    height: 24,
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
  },
  sproutWrapper: {
    top: 170,
    left: 268,
    width: 20,
    height: 24,
  },
  page13Child: {
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
    maxHeight: "100%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  page13Item: {
    top: 260,
    left: 34,
    width: 53,
    height: 53,
    position: "absolute",
  },
  page13Inner: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
    position: "absolute",
  },
  takeAPicture: {
    top: "40.88%",
    left: "8.21%",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
  },
  seeVariety: {
    top: "39.93%",
    left: "41.54%",
    width: "16.91%",
    height: "5.43%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
  },
  getRecommendation: {
    height: "5.45%",
    width: "34.36%",
    top: "39.45%",
    left: "61.79%",
  },
  previousPictures: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    height: "100%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    width: "100%",
  },
  previousPicturesWrapper: {
    width: "46.92%",
    top: "72.27%",
    right: "47.44%",
    bottom: "25.36%",
    left: "5.64%",
  },
  groupChild: {
    top: 13,
    left: 3,
  },
  mangog03watermarked1Icon: {
    top: 0,
    left: 0,
  },
  rectangleParent: {
    left: 19,
    top: 630,
  },
  groupItem: {
    top: 11,
    left: 13,
  },
  mangog03watermarked2Icon: {
    height: 114,
    top: 0,
    left: 0,
  },
  rectangleGroup: {
    left: 255,
    height: 123,
    top: 630,
  },
  rectangleView: {
    top: 641,
    left: 142,
  },
  greenMangog03watermarked1: {
    top: 636,
    left: 124,
    width: 124,
    height: 115,
    position: "absolute",
  },
  vectorIcon2: {
    width: "5.13%",
    top: "60.9%",
    right: "87.69%",
    bottom: "36.73%",
    left: "7.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  arrowBackIcon: {
    top: 42,
    left: 22,
    width: 24,
    overflow: "hidden",
  },
  page13: {
    opacity: 0.5,
    width: 390,
    position: "absolute",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    top: 0,
    borderRadius: Border.br_21xl,
  },
  page13Parent: {
    width: 390,
    position: "absolute",
    height: 844,
  },
  dilshaTipsInner: {
    top: -20,
    left: 0,
    width: 390,
  },
  bottomPosition: {
    backgroundColor: Color.black,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    height: 81,
    width: 391,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    left: 0,
    position: "absolute",
  },
  vectorIcon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  download1Icon: {
    left: 318,
    height: 23,
    top: 19,
  },
  download22: {
    top: 20,
    height: 21,
    left: 238,
  },
  download31: {
    left: 41,
    width: 27,
    height: 30,
    top: 19,
  },
  download11: {
    top: 17,
    left: 113,
    width: 28,
    height: 29,
  },
  budding: {
    top: 46,
    left: 32,
    color: Color.gray_300,
    width: 47,
    height: 14,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  diagnose: {
    left: 101,
    color: Color.gray_400,
    width: 51,
  },
  home: {
    left: 175,
    color: Color.gray_500,
    width: 34,
  },
  variety: {
    color: Color.systemBackgroundsSBLPrimary,
    left: 238,
    width: 40,
  },
  fertilizer: {
    left: 312,
    color: Color.gray_600,
    width: 68,
  },
  vectorIcon4: {
    height: "23.81%",
    width: "5.06%",
    top: "28.57%",
    right: "65.07%",
    bottom: "47.62%",
    left: "29.87%",
    position: "absolute",
  },
  bottomNavigation: {
    top: 765,
    left: -1,
    height: 81,
    width: 391,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  dilshaTips: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderRadius: Border.br_21xl,
  },
});

export default DilshaTips;
