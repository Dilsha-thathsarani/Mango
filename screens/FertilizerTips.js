import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FertilizerTips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fertilizerTips}>
      <View style={[styles.fertilizerTips1, styles.iphone8Plus2Layout]}>
        <View style={[styles.fertilizerTips1, styles.iphone8Plus2Layout]}>
          <View
            style={[styles.fertilizationHomePage, styles.iphone8Plus2Position]}
          >
            <View style={[styles.fertilizerTips1, styles.iphone8Plus2Layout]}>
              <View style={[styles.fertilizerTips1, styles.iphone8Plus2Layout]}>
                <View
                  style={[styles.iphone8Plus2, styles.iphone8Plus2Position]}
                >
                  <View
                    style={[styles.needHelpWrapper, styles.vectorIconPosition]}
                  >
                    <Text style={styles.needHelp}>Need Help?</Text>
                  </View>
                  <View style={styles.getStepByStepGuidanceToSWrapper}>
                    <Text
                      style={[styles.getStepBy, styles.getStepByPosition]}
                    >{`Get step by step guidance
to setup the sensor`}</Text>
                  </View>
                  <Image
                    style={styles.npkSensorIcon}
                    contentFit="cover"
                    source={require("../assets/npksensor.png")}
                  />
                  <Image
                    style={styles.report1Icon}
                    contentFit="cover"
                    source={require("../assets/report-1.png")}
                  />
                  <View style={styles.iphone8Plus2Inner}>
                    <View
                      style={[styles.groupWrapper, styles.groupWrapperPosition]}
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
                            styles.monitorNutrientsLevel,
                            styles.howToConnectTypo,
                          ]}
                        >{`        Monitor 
  Nutrients Level`}</Text>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.monitorNutrients1}
                    contentFit="cover"
                    source={require("../assets/monitor-nutrients-1.png")}
                  />
                  <View style={styles.pleaseNoteYouNeedToConneWrapper}>
                    <Text style={styles.pleaseNoteYou}>{`Please Note:
You need to connect your mobile phone with the sensor using Bluetooth`}</Text>
                  </View>
                  <Image
                    style={[styles.vectorIcon, styles.vectorIconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector15.png")}
                  />
                  <Image
                    style={styles.logo2Icon}
                    contentFit="cover"
                    source={require("../assets/logo-21.png")}
                  />
                </View>
              </View>
              <View style={styles.empowerYourPlantsWithEssenWrapper}>
                <Text
                  style={[styles.empowerYourPlants, styles.getStepByPosition]}
                >
                  Empower your plants with essential nutrients
                </Text>
              </View>
              <Image
                style={[styles.checkFertilizerHomeChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-66.png")}
              />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
              <Text
                style={[styles.testSoilNutrients, styles.nutrientsTypo]}
              >{`Test soil
Nutrients `}</Text>
              <Text
                style={[styles.getFertilizerSuggestions, styles.nutrientsTypo]}
              >
                Get fertilizer suggestions
              </Text>
              <Text
                style={[styles.monitorNutrientsLevel1, styles.nutrientsTypo]}
              >{`Monitor 
nutrients level`}</Text>
            </View>
          </View>
          <View style={[styles.bottomNavigation, styles.bottomLayout]}>
            <View
              style={[styles.bottomNavigationChild, styles.downloadPosition]}
            />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
            <Image
              style={[styles.download1Icon, styles.download31Position]}
              contentFit="cover"
              source={require("../assets/download-12.png")}
            />
            <Image
              style={[styles.download22, styles.varietyPosition]}
              contentFit="cover"
              source={require("../assets/download-2-25.png")}
            />
            <Image
              style={[styles.download31, styles.download31Position]}
              contentFit="cover"
              source={require("../assets/download-3-14.png")}
            />
            <View style={[styles.download11, styles.downloadPosition]} />
            <Text style={[styles.budding, styles.buddingLayout]}>Budding</Text>
            <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
            <Text style={[styles.fertilizer, styles.okClr]}>Fertilizer</Text>
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector18.png")}
            />
          </View>
          <View style={styles.screenTop}>
            <Image
              style={[styles.profilePicIcon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/profile-pic.png")}
            />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text style={[styles.premium, styles.premiumLayout]}>
                Premium
              </Text>
              <Image
                style={[styles.groupInner, styles.premiumLayout]}
                contentFit="cover"
                source={require("../assets/group-641.png")}
              />
            </View>
            <Image
              style={[styles.arrowBackIcon, styles.iphone8Plus2Position]}
              contentFit="cover"
              source={require("../assets/arrow-back.png")}
            />
          </View>
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector19.png")}
          />
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-86.png")}
          />
          <View style={styles.groupParent}>
            <View style={styles.image2RemovebgPreview1Parent}>
              <View
                style={[styles.image2RemovebgPreview1, styles.buddingLayout]}
              />
              <View
                style={[
                  styles.supplyPowerToTheSensorUsiWrapper,
                  styles.groupWrapperPosition,
                ]}
              >
                <Text
                  style={styles.pleaseNoteYou}
                >{`Supply power to the sensor using the 
provided 9V battery.

Turn on mobile’s Bluetooth connection

Search for available devices

Pair with the device name ‘HC-06’

Insert PIN 1234 to connect `}</Text>
              </View>
            </View>
            <Text style={[styles.howToConnect, styles.howToConnectTypo]}>
              How to connect with the sensor
            </Text>
          </View>
          <Pressable
            style={styles.groupContainer}
            onPress={() => navigation.navigate("FertilizationHome")}
          >
            <View style={[styles.groupFrame, styles.groupWrapperPosition]}>
              <View
                style={[styles.rectangleParent, styles.groupWrapperPosition]}
              >
                <View style={[styles.groupChild, styles.childLayout]} />
                <Text style={[styles.ok, styles.okClr]}> OK</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone8Plus2Layout: {
    width: 390,
    top: 0,
    height: 844,
  },
  iphone8Plus2Position: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "4.36%",
    position: "absolute",
  },
  getStepByPosition: {
    fontStyle: "italic",
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupWrapperPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  childLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  howToConnectTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.4,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "4.01%",
    height: "4.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  nutrientsTypo: {
    textAlign: "center",
    top: "33.29%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
    position: "absolute",
  },
  bottomLayout: {
    height: 84,
    width: 390,
    left: 0,
    position: "absolute",
  },
  downloadPosition: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  download31Position: {
    top: 20,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    position: "absolute",
  },
  varietyPosition: {
    left: 237,
    position: "absolute",
  },
  buddingLayout: {
    width: 46,
    position: "absolute",
  },
  homeTypo: {
    top: 51,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  okClr: {
    color: Color.systemBackgroundsSBLPrimary,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 26,
    position: "absolute",
  },
  premiumLayout: {
    height: "76.92%",
    position: "absolute",
  },
  needHelp: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    height: "100%",
    letterSpacing: -0.4,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  needHelpWrapper: {
    width: "44.2%",
    top: "76.54%",
    right: "51.44%",
    bottom: "20.74%",
    height: "2.72%",
  },
  getStepBy: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.workSansItalic,
    letterSpacing: -0.4,
    fontStyle: "italic",
  },
  getStepByStepGuidanceToSWrapper: {
    width: "62.08%",
    top: "80.57%",
    right: "22.03%",
    bottom: "16.71%",
    left: "15.9%",
    height: "2.72%",
    position: "absolute",
  },
  npkSensorIcon: {
    top: 197,
    left: 27,
    width: 83,
    height: 72,
    position: "absolute",
  },
  report1Icon: {
    top: 196,
    left: 140,
    width: 85,
    height: 73,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gold_100,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  monitorNutrientsLevel: {
    height: "87.72%",
    width: "70.83%",
    top: "10.53%",
    left: "14.17%",
  },
  rectangleParent: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  groupWrapper: {
    left: "0%",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  iphone8Plus2Inner: {
    height: "7.74%",
    width: "57.97%",
    top: "64.22%",
    right: "23.31%",
    bottom: "28.04%",
    left: "18.72%",
    position: "absolute",
  },
  monitorNutrients1: {
    top: 201,
    left: 273,
    width: 64,
    height: 64,
    position: "absolute",
  },
  pleaseNoteYou: {
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pleaseNoteYouNeedToConneWrapper: {
    height: "8.97%",
    width: "78.5%",
    top: "43.6%",
    right: "13.81%",
    bottom: "47.43%",
    left: "7.69%",
    position: "absolute",
  },
  vectorIcon: {
    height: "3.49%",
    width: "8.72%",
    top: "81.52%",
    right: "86.92%",
    bottom: "14.99%",
    left: "4.36%",
    position: "absolute",
  },
  logo2Icon: {
    top: 57,
    left: 147,
    width: 90,
    height: 62,
    position: "absolute",
  },
  iphone8Plus2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    width: 390,
    top: 0,
    height: 844,
  },
  fertilizerTips1: {
    left: 0,
    position: "absolute",
  },
  empowerYourPlants: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.rosarioItalic,
  },
  empowerYourPlantsWithEssenWrapper: {
    height: "8.89%",
    width: "79.74%",
    top: "14.34%",
    right: "13.85%",
    bottom: "76.78%",
    left: "6.41%",
    position: "absolute",
  },
  checkFertilizerHomeChild: {
    top: 180,
    left: 12,
    width: 367,
    height: 181,
  },
  vectorIcon1: {
    top: "32.76%",
    right: "67.14%",
    bottom: "62.71%",
    left: "28.85%",
  },
  vectorIcon2: {
    top: "32.64%",
    right: "34.83%",
    bottom: "62.83%",
    left: "61.15%",
  },
  testSoilNutrients: {
    height: "6.52%",
    left: "1.79%",
    width: "28.46%",
    top: "33.29%",
  },
  getFertilizerSuggestions: {
    height: "6.57%",
    left: "33.33%",
    width: "28.46%",
    top: "33.29%",
  },
  monitorNutrientsLevel1: {
    height: "6.56%",
    width: "30.26%",
    left: "64.62%",
  },
  fertilizationHomePage: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 390,
    top: 0,
    height: 844,
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
  vectorIcon3: {
    height: "22.77%",
    width: "5.7%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    left: "46.58%",
    position: "absolute",
  },
  download1Icon: {
    left: 317,
    width: 30,
    height: 25,
  },
  download22: {
    width: 31,
    height: 22,
    top: 21,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  download31: {
    left: 40,
    width: 27,
    height: 31,
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
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    width: 46,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  diagnose: {
    left: 101,
    color: Color.gray_400,
    width: 57,
    textAlign: "left",
    position: "absolute",
  },
  home: {
    left: 175,
    color: Color.gray_500,
    width: 34,
    textAlign: "left",
    position: "absolute",
  },
  variety: {
    color: Color.silver_100,
    width: 39,
    left: 237,
    position: "absolute",
    textAlign: "left",
  },
  fertilizer: {
    left: 311,
    width: 58,
    top: 51,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
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
    top: 760,
  },
  profilePicIcon: {
    width: "9.24%",
    left: "90.76%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
  },
  groupInner: {
    width: "13.98%",
    top: "7.69%",
    right: "75.77%",
    bottom: "15.38%",
    left: "10.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 5,
    left: 202,
    width: 128,
  },
  arrowBackIcon: {
    top: 6,
    width: 24,
    height: 24,
  },
  screenTop: {
    height: "4.03%",
    width: "91.54%",
    top: "3.79%",
    right: "3.33%",
    bottom: "92.18%",
    left: "5.13%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "3.7%",
    width: "4.69%",
    top: "5.77%",
    right: "11.01%",
    bottom: "90.53%",
    left: "84.31%",
    position: "absolute",
  },
  rectangleIcon: {
    top: -2,
    left: -2,
    borderRadius: Border.br_11xl,
    width: 347,
    height: 433,
    position: "absolute",
  },
  image2RemovebgPreview1: {
    top: 13,
    height: 32,
    left: 0,
  },
  supplyPowerToTheSensorUsiWrapper: {
    width: "98.42%",
    left: "1.58%",
    position: "absolute",
  },
  image2RemovebgPreview1Parent: {
    top: 45,
    left: 4,
    width: 295,
    height: 249,
    position: "absolute",
  },
  howToConnect: {
    height: "6.8%",
    left: "0%",
    width: "100%",
    top: "0%",
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  groupParent: {
    left: 14,
    width: 323,
    height: 294,
    top: 21,
    position: "absolute",
  },
  ok: {
    height: "46.15%",
    width: "89.58%",
    top: "26.92%",
    left: "10.42%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
  },
  groupFrame: {
    left: "0%",
    width: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupContainer: {
    height: "12.15%",
    width: "26.66%",
    top: "72.75%",
    right: "44.99%",
    bottom: "15.1%",
    left: "28.36%",
    position: "absolute",
  },
  vectorParent: {
    height: "51.3%",
    width: "86.92%",
    top: "27.01%",
    right: "6.41%",
    bottom: "21.68%",
    left: "6.67%",
    position: "absolute",
  },
  fertilizerTips: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default FertilizerTips;
