import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CheckFertilizer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkFertilizer}>
      <View style={styles.iphone8Plus2Position}>
        <View style={styles.iphone8Plus2Position}>
          <View style={styles.iphone8Plus2Position}>
            <View style={[styles.iphone8Plus2, styles.iphone8Plus2Position]}>
              <View
                style={[
                  styles.enterEstimatedAgeOfTheTreWrapper,
                  styles.theWrapperLayout,
                ]}
              >
                <Text
                  style={[styles.enterEstimatedAge, styles.phosphorusPFlexBox]}
                >
                  Enter estimated age of the tree
                </Text>
              </View>
              <View
                style={[
                  styles.selectTheCurrentGrowthStagWrapper,
                  styles.theWrapperLayout,
                ]}
              >
                <Text
                  style={[styles.enterEstimatedAge, styles.phosphorusPFlexBox]}
                >
                  Select the current growth stage
                </Text>
              </View>
              <View style={styles.nitrogenNWrapper}>
                <Text
                  style={[styles.enterEstimatedAge, styles.phosphorusPFlexBox]}
                >
                  Nitrogen (N) :
                </Text>
              </View>
              <View style={styles.phosphorusPParent}>
                <Text style={[styles.phosphorusP, styles.phosphorusPLayout]}>
                  Phosphorus (P) :
                </Text>
                <View
                  style={[
                    styles.potassiumKWrapper,
                    styles.groupWrapperPosition,
                  ]}
                >
                  <Text
                    style={[
                      styles.enterEstimatedAge,
                      styles.phosphorusPFlexBox,
                    ]}
                  >
                    Potassium (K) :
                  </Text>
                </View>
              </View>
              <View style={styles.checkSuitableFertilizerWrapper}>
                <Text
                  style={[
                    styles.checkSuitableFertilizer,
                    styles.phosphorusPFlexBox,
                  ]}
                >{`Check Suitable
Fertilizer
`}</Text>
              </View>
              <Image
                style={styles.npkSensorIcon}
                contentFit="cover"
                source={require("../assets/npksensor1.png")}
              />
              <View style={styles.iphone8Plus2Inner}>
                <View
                  style={[styles.groupWrapper, styles.groupWrapperShadowBox]}
                >
                  <View
                    style={[
                      styles.rectangleParent,
                      styles.groupWrapperPosition,
                    ]}
                  >
                    <View style={[styles.groupChild, styles.childLayout]} />
                    <Text
                      style={[
                        styles.generateRecommendations,
                        styles.phosphorusPFlexBox,
                      ]}
                    >
                      Generate Recommendations
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.years, styles.yearsTypo]}>Years</Text>
              <Text style={[styles.months, styles.yearsTypo]}>Months</Text>
              <Image
                style={[styles.iphone8Plus2Child, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-67.png")}
              />
              <View style={[styles.bottomNavigation, styles.bottomLayout]}>
                <View
                  style={[
                    styles.bottomNavigationChild,
                    styles.downloadPosition1,
                  ]}
                />
                <Pressable
                  style={styles.vector}
                  onPress={() => navigation.navigate("Menu")}
                >
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector17.png")}
                  />
                </Pressable>
                <Pressable
                  style={[styles.download1, styles.downloadPosition]}
                  onPress={() => navigation.navigate("FertilizationHome")}
                >
                  <Image
                    style={[styles.icon1, styles.downloadPosition1]}
                    contentFit="cover"
                    source={require("../assets/download-12.png")}
                  />
                </Pressable>
                <Image
                  style={[styles.download22, styles.downloadPosition1]}
                  contentFit="cover"
                  source={require("../assets/download-2-25.png")}
                />
                <Image
                  style={[styles.download31, styles.downloadPosition]}
                  contentFit="cover"
                  source={require("../assets/download-3-14.png")}
                />
                <View style={[styles.download11, styles.downloadPosition1]} />
                <Text style={styles.budding}>Budding</Text>
                <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
                <Text style={[styles.fertilizer, styles.homeTypo]}>
                  Fertilizer
                </Text>
                <Pressable
                  style={styles.vector1}
                  onPress={() =>
                    navigation.navigate("SanjulaDiseaseHomeContainer")
                  }
                >
                  <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector18.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.top}>
                <Image
                  style={styles.logo2Icon}
                  contentFit="cover"
                  source={require("../assets/logo-21.png")}
                />
                <Image
                  style={[styles.profilePicIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/profile-pic.png")}
                />
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupItem, styles.groupLayout]} />
                  <Text style={styles.premium}>Premium</Text>
                  <Image
                    style={styles.groupInner}
                    contentFit="cover"
                    source={require("../assets/group-641.png")}
                  />
                </View>
                <Pressable
                  style={styles.arrowBack}
                  onPress={() => navigation.navigate("FertilizationHome")}
                >
                  <Image
                    style={[styles.icon3, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/arrow-back.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <Image
            style={[styles.checkFertilizerChild, styles.checkChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
          <Image
            style={[styles.checkFertilizerItem, styles.checkLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={[styles.checkFertilizerInner, styles.checkLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.checkLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={styles.checkFertilizerChild1}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Text style={[styles.beforeHarvest, styles.yearsTypo]}>
            Before Harvest
          </Text>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textTypo]}>10</Text>
          </View>
          <View style={[styles.ppmParent, styles.wrapperLayout]}>
            <Text style={[styles.ppm, styles.ppmTypo]}>ppm</Text>
            <Text style={[styles.ppm1, styles.ppmTypo]}>ppm</Text>
            <Text style={[styles.ppm2, styles.ppmTypo]}>ppm</Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text1, styles.text1Layout]}>58</Text>
            <Text style={styles.text2}>2</Text>
            <View style={[styles.container, styles.text1Layout]}>
              <Text style={[styles.text, styles.textTypo]}>193</Text>
            </View>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector20.png")}
          />
          <Image
            style={[styles.checkFertilizerChild2, styles.checkChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-87.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone8Plus2Position: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  theWrapperLayout: {
    width: "83.09%",
    height: "2.72%",
    position: "absolute",
  },
  phosphorusPFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  phosphorusPLayout: {
    height: "31.75%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapperPosition: {
    bottom: "0%",
    right: "0%",
  },
  groupWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  childLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  yearsTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    position: "absolute",
  },
  bottomLayout: {
    height: 84,
    width: 390,
    left: 0,
    position: "absolute",
  },
  downloadPosition1: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  downloadPosition: {
    top: 20,
    position: "absolute",
  },
  homeTypo: {
    top: 51,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupLayout: {
    height: 26,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  checkChildLayout: {
    height: 49,
    width: 87,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  checkLayout: {
    height: 41,
    width: 73,
    left: 235,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  wrapperLayout: {
    width: "9.94%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
  },
  ppmTypo: {
    height: "21.9%",
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text1Layout: {
    width: "18.08%",
    height: "9.44%",
    position: "absolute",
  },
  enterEstimatedAge: {
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
    color: Color.black,
    letterSpacing: -0.4,
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  enterEstimatedAgeOfTheTreWrapper: {
    top: "27.82%",
    right: "5.8%",
    bottom: "69.46%",
    left: "11.11%",
  },
  selectTheCurrentGrowthStagWrapper: {
    top: "40.82%",
    right: "6.04%",
    bottom: "56.46%",
    left: "10.87%",
  },
  nitrogenNWrapper: {
    width: "45.9%",
    top: "55.69%",
    right: "43.85%",
    bottom: "41.6%",
    left: "10.26%",
    height: "2.72%",
    position: "absolute",
  },
  phosphorusP: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
    letterSpacing: -0.4,
    top: "0%",
  },
  potassiumKWrapper: {
    top: "68.25%",
    height: "31.75%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  phosphorusPParent: {
    height: "8.56%",
    width: "46.98%",
    top: "61.26%",
    right: "42.26%",
    bottom: "30.18%",
    left: "10.77%",
    position: "absolute",
  },
  checkSuitableFertilizer: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  checkSuitableFertilizerWrapper: {
    height: "8.29%",
    width: "51.28%",
    top: "15.64%",
    right: "6.15%",
    bottom: "76.07%",
    left: "42.56%",
    position: "absolute",
  },
  npkSensorIcon: {
    top: 126,
    left: 37,
    width: 93,
    height: 78,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gold_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
  },
  generateRecommendations: {
    height: "46.15%",
    width: "91.64%",
    top: "28.85%",
    left: "7.1%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    letterSpacing: -0.4,
    color: Color.black,
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  groupWrapper: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  iphone8Plus2Inner: {
    height: "7.07%",
    width: "81.79%",
    top: "73.82%",
    right: "10%",
    bottom: "19.12%",
    left: "8.21%",
    position: "absolute",
  },
  years: {
    height: "3.2%",
    width: "16.67%",
    top: "33.65%",
    left: "33.59%",
  },
  months: {
    height: "3.26%",
    width: "19.32%",
    top: "33.6%",
    left: "74.49%",
  },
  iphone8Plus2Child: {
    top: 119,
    left: 6,
    width: 382,
    height: 633,
  },
  bottomNavigationChild: {
    backgroundColor: Color.black,
    height: 84,
    width: 390,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "46.58%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    width: "5.7%",
    height: "22.77%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  download1: {
    left: 317,
    width: 30,
    height: 25,
  },
  download22: {
    top: 21,
    width: 31,
    height: 22,
    left: 237,
    position: "absolute",
  },
  download31: {
    left: 40,
    width: 27,
    height: 31,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  download11: {
    top: 18,
    left: 113,
    width: 28,
    height: 30,
    position: "absolute",
  },
  budding: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    width: 46,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  diagnose: {
    left: 101,
    color: Color.gray_400,
    width: 57,
  },
  home: {
    left: 175,
    color: Color.gray_500,
    width: 34,
  },
  variety: {
    color: Color.silver_100,
    width: 39,
    left: 237,
  },
  fertilizer: {
    left: 311,
    color: Color.systemBackgroundsSBLPrimary,
    width: 58,
  },
  vector1: {
    left: "29.87%",
    top: "28.57%",
    right: "65.07%",
    bottom: "47.62%",
    width: "5.06%",
    height: "23.81%",
    position: "absolute",
  },
  bottomNavigation: {
    top: 760,
  },
  logo2Icon: {
    top: 19,
    left: 133,
    width: 90,
    height: 62,
    position: "absolute",
  },
  profilePicIcon: {
    height: "41.98%",
    width: "9.24%",
    bottom: "58.02%",
    left: "90.76%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 113,
    left: 0,
    top: 0,
  },
  premium: {
    width: "66.9%",
    top: "11.54%",
    left: "33.1%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    color: Color.gold_100,
    letterSpacing: -0.3,
    height: "76.92%",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupInner: {
    width: "13.98%",
    top: "7.69%",
    right: "75.77%",
    bottom: "15.38%",
    left: "10.25%",
    height: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleGroup: {
    top: 5,
    left: 202,
    width: 128,
  },
  icon3: {
    overflow: "hidden",
  },
  arrowBack: {
    top: 6,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  top: {
    top: 32,
    left: 17,
    width: 357,
    height: 81,
    position: "absolute",
  },
  iphone8Plus2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    overflow: "hidden",
  },
  checkFertilizerChild: {
    top: 274,
    left: 39,
  },
  checkFertilizerItem: {
    top: 462,
  },
  checkFertilizerInner: {
    top: 520,
  },
  rectangleIcon: {
    top: 568,
  },
  checkFertilizerChild1: {
    top: 381,
    left: 43,
    width: 289,
    height: 50,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  beforeHarvest: {
    height: "3.74%",
    width: "49.71%",
    top: "46.09%",
    left: "18.84%",
  },
  text: {
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  wrapper: {
    top: "56.04%",
    right: "25.9%",
    bottom: "40.37%",
    left: "64.16%",
    height: "3.58%",
  },
  ppm: {
    top: "0%",
  },
  ppm1: {
    top: "39.05%",
  },
  ppm2: {
    top: "78.1%",
  },
  ppmParent: {
    height: "16.36%",
    top: "55.57%",
    right: "9.6%",
    bottom: "28.07%",
    left: "80.46%",
  },
  text1: {
    top: "74.32%",
    left: "80.99%",
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
  },
  text2: {
    width: "11.51%",
    height: "9.44%",
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  container: {
    top: "90.56%",
    left: "81.92%",
    bottom: "0%",
    right: "0%",
  },
  parent: {
    height: "37.95%",
    width: "54.98%",
    top: "34%",
    right: "26.4%",
    bottom: "28.05%",
    left: "18.61%",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.14%",
    width: "5.85%",
    top: "46.39%",
    right: "25.53%",
    bottom: "51.47%",
    left: "68.61%",
    position: "absolute",
  },
  checkFertilizerChild2: {
    top: 273,
    left: 200,
  },
  text4: {
    width: "4.29%",
    top: "33.88%",
    left: "59.71%",
    height: "3.58%",
    position: "absolute",
  },
  checkFertilizer: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default CheckFertilizer;
