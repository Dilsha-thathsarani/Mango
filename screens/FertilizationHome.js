import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer6 from "../components/FormContainer6";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FertilizationHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fertilizationHome}>
      <View style={[styles.fertilizationHomePage, styles.iphone8Plus2Position]}>
        <View style={[styles.checkFertilizerHome, styles.homeLayout]}>
          <View style={[styles.checkFertilizerHome, styles.homeLayout]}>
            <View style={[styles.iphone8Plus2, styles.iphone8Plus2Position]}>
              <View style={[styles.needHelpWrapper, styles.vectorIconPosition]}>
                <Text style={styles.needHelp}>Need Help?</Text>
              </View>
              <Pressable
                style={styles.getStepByStepGuidanceToSWrapper}
                onPress={() => navigation.navigate("FertilizerTips")}
              >
                <Text
                  style={[styles.getStepBy, styles.getStepByPosition]}
                >{`Get step by step guidance
to setup the sensor`}</Text>
              </Pressable>
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
              <Pressable
                style={[styles.iphone8Plus2Inner, styles.iphone8Position]}
                onPress={() => navigation.navigate("CheckFertilizer")}
              >
                <View style={styles.groupShadowBox}>
                  <View
                    style={[styles.rectangleParent, styles.groupItemPosition]}
                  >
                    <View style={[styles.groupChild, styles.groupPosition]} />
                    <Text
                      style={[
                        styles.connectWithSensor,
                        styles.connectWithSensorTypo,
                      ]}
                    >
                      Connect With Sensor
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                style={[styles.iphone8Plus2Child, styles.iphone8Position]}
                onPress={() => navigation.navigate("PreviousNutritionsRecords")}
              >
                <View style={styles.groupShadowBox}>
                  <View
                    style={[styles.rectangleParent, styles.groupItemPosition]}
                  >
                    <View style={[styles.groupItem, styles.groupPosition]} />
                    <Text
                      style={[
                        styles.monitorNutrientsLevel,
                        styles.connectWithSensorTypo,
                      ]}
                    >{`        Monitor 
  Nutrients Level`}</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                style={styles.monitorNutrients1}
                onPress={() => navigation.navigate("PreviousNutritionsRecords")}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/monitor-nutrients-1.png")}
                />
              </Pressable>
              <View style={styles.pleaseNoteYouNeedToConneWrapper}>
                <Text style={styles.pleaseNoteYou}>{`Please Note:
You need to connect your mobile phone with the sensor using Bluetooth`}</Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
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
            <Text style={[styles.empowerYourPlants, styles.getStepByPosition]}>
              Empower your plants with essential nutrients
            </Text>
          </View>
          <Image
            style={styles.checkFertilizerHomeChild}
            contentFit="cover"
            source={require("../assets/rectangle-610.png")}
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
          <Text style={[styles.getFertilizerSuggestions, styles.nutrientsTypo]}>
            Get fertilizer suggestions
          </Text>
          <Pressable
            style={[
              styles.monitorNutrientsLevelContainer,
              styles.nutrientsPosition,
            ]}
            onPress={() => navigation.navigate("PreviousNutritionsRecords")}
          >
            <Text
              style={[styles.monitorNutrientsLevel1, styles.nutrientsTypo]}
            >{`Monitor 
nutrients level`}</Text>
          </Pressable>
        </View>
      </View>
      <FormContainer6 />
      <View style={styles.screenTop}>
        <Image
          style={[styles.profilePicIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-pic2.png")}
        />
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.premium, styles.premiumLayout]}>Premium</Text>
          <Image
            style={[styles.groupIcon, styles.premiumLayout]}
            contentFit="cover"
            source={require("../assets/group-644.png")}
          />
        </View>
        <Image
          style={[styles.arrowBackIcon, styles.iphone8Plus2Position]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone8Plus2Position: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    width: 390,
    top: 0,
    height: 844,
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
  iphone8Position: {
    left: "18.72%",
    right: "23.31%",
    width: "57.97%",
    position: "absolute",
  },
  groupItemPosition: {
    bottom: "0%",
    height: "100%",
  },
  groupPosition: {
    backgroundColor: Color.gold_100,
    borderRadius: Border.br_6xl,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  connectWithSensorTypo: {
    fontFamily: FontFamily.workSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.4,
    position: "absolute",
  },
  iconLayout: {
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
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
  },
  nutrientsPosition: {
    top: "33.29%",
    position: "absolute",
  },
  groupInnerLayout: {
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
    top: "0%",
    letterSpacing: -0.4,
    left: "0%",
    height: "100%",
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
    height: "95.74%",
    bottom: "4.26%",
  },
  connectWithSensor: {
    height: "74.47%",
    width: "90%",
    top: "25.53%",
    left: "7.5%",
  },
  rectangleParent: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iphone8Plus2Inner: {
    height: "6.75%",
    top: "53.44%",
    bottom: "39.81%",
  },
  groupItem: {
    bottom: "0%",
    height: "100%",
  },
  monitorNutrientsLevel: {
    height: "87.72%",
    width: "70.83%",
    top: "10.53%",
    left: "14.17%",
  },
  iphone8Plus2Child: {
    height: "7.74%",
    top: "64.22%",
    bottom: "28.04%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  monitorNutrients1: {
    left: 273,
    top: 201,
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
  checkFertilizerHome: {
    left: 0,
    position: "absolute",
  },
  empowerYourPlants: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.rosarioItalic,
  },
  empowerYourPlantsWithEssenWrapper: {
    height: "8.86%",
    width: "57.76%",
    top: "14.36%",
    right: "35.9%",
    bottom: "76.78%",
    left: "6.34%",
    position: "absolute",
  },
  checkFertilizerHomeChild: {
    top: 176,
    left: 14,
    width: 367,
    height: 181,
    borderRadius: Border.br_6xl,
    position: "absolute",
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
    top: "33.29%",
    position: "absolute",
    width: "28.46%",
    textAlign: "center",
  },
  getFertilizerSuggestions: {
    height: "6.57%",
    left: "33.33%",
    top: "33.29%",
    position: "absolute",
    width: "28.46%",
    textAlign: "center",
  },
  monitorNutrientsLevel1: {
    height: "6.56%",
    width: "30.26%",
  },
  monitorNutrientsLevelContainer: {
    left: "64.62%",
  },
  fertilizationHomePage: {
    width: 390,
    top: 0,
    height: 844,
  },
  profilePicIcon: {
    width: "9.25%",
    left: "90.75%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 113,
    left: 0,
    top: 0,
    height: 26,
  },
  premium: {
    width: "67.73%",
    top: "11.54%",
    left: "32.27%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    color: Color.gold_100,
    letterSpacing: -0.3,
    height: "76.92%",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  groupIcon: {
    width: "14.16%",
    top: "7.69%",
    right: "76.7%",
    bottom: "15.38%",
    left: "9.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 5,
    left: 202,
    width: 126,
  },
  arrowBackIcon: {
    top: 6,
    width: 24,
    height: 24,
  },
  screenTop: {
    height: "4.03%",
    width: "91.5%",
    top: "3.79%",
    right: "3.33%",
    bottom: "92.18%",
    left: "5.16%",
    position: "absolute",
  },
  fertilizationHome: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default FertilizationHome;
