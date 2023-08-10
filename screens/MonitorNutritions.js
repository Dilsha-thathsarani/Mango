import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PremiumContainer from "../components/PremiumContainer";
import FormContainer from "../components/FormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MonitorNutritions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.monitorNutritions}>
      <View style={[styles.monitorNutrients, styles.monitorPosition]}>
        <View style={styles.monitorPosition}>
          <View style={styles.monitorPosition}>
            <View style={styles.monitorPosition}>
              <View style={[styles.iphone8Plus2, styles.monitorPosition]}>
                <View style={styles.previousNutrientsStatusWrapper}>
                  <Text
                    style={[
                      styles.previousNutrientsStatus,
                      styles.phosphorusPTypo,
                    ]}
                  >
                    Previous Nutrients Status
                  </Text>
                </View>
                <View
                  style={[
                    styles.currentNutrientsStatusWrapper,
                    styles.wrapperPosition,
                  ]}
                >
                  <Text
                    style={[
                      styles.previousNutrientsStatus,
                      styles.phosphorusPTypo,
                    ]}
                  >
                    Current Nutrients Status
                  </Text>
                </View>
                <View style={[styles.nitrogenNWrapper, styles.wrapperPosition]}>
                  <Text
                    style={[
                      styles.previousNutrientsStatus,
                      styles.phosphorusPTypo,
                    ]}
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
                        styles.previousNutrientsStatus,
                        styles.phosphorusPTypo,
                      ]}
                    >
                      Potassium (K) :
                    </Text>
                  </View>
                </View>
                <View style={styles.monitorTheNutrientLevelWrapper}>
                  <Text
                    style={[styles.monitorTheNutrient, styles.okTypo]}
                  >{`Monitor the
Nutrient Level`}</Text>
                </View>
                <Text
                  style={[styles.currentNutrientLevel, styles.textTypo]}
                >{`Current nutrient level is sufficient to
have proper growth of the tree and fruits

`}</Text>
                <Text style={styles.pleaseCheckNutrientContainer}>
                  <Text style={styles.text}>{`* `}</Text>
                  <Text style={styles.pleaseCheckNutrient}>
                    Please check nutrient status after one month again.
                  </Text>
                </Text>
                <Image
                  style={[styles.iphone8Plus2Child, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-69.png")}
                />
              </View>
              <Image
                style={styles.check1Icon}
                contentFit="cover"
                source={require("../assets/check-1.png")}
              />
            </View>
            <Image
              style={styles.checkFertilizerChild}
              contentFit="cover"
              source={require("../assets/rectangle-71.png")}
            />
            <Image
              style={styles.checkFertilizerItem}
              contentFit="cover"
              source={require("../assets/rectangle-101.png")}
            />
            <Image
              style={[styles.checkFertilizerInner, styles.rectangleIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-11.png")}
            />
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-12.png")}
            />
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>51</Text>
            </View>
            <View style={[styles.ppmParent, styles.wrapperLayout]}>
              <Text style={[styles.ppm, styles.ppmTypo]}>ppm</Text>
              <Text style={[styles.ppm1, styles.ppmTypo]}>ppm</Text>
              <Text style={[styles.ppm2, styles.ppmTypo]}>ppm</Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text2, styles.text2Layout]}>89</Text>
              <Text
                style={[styles.date22042023, styles.textTypo]}
              >{`Date : 22/04/2023    Time : 2.34 P.M

Nitrogen         34 ppm
Phosphorus    66 ppm
Potassium     139 ppm

Yaramila (1:1:1)  160g Added`}</Text>
              <View style={[styles.container, styles.text2Layout]}>
                <Text style={[styles.text1, styles.textTypo]}>166</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.monitor2Icon}
            contentFit="cover"
            source={require("../assets/monitor-2.png")}
          />
        </View>
      </View>
      <PremiumContainer
        dimensionCode={require("../assets/group-643.png")}
        onArrowBackPress={() =>
          navigation.navigate("PreviousNutritionsRecords")
        }
      />
      <Pressable
        style={styles.monitorNutritionsInner}
        onPress={() => navigation.navigate("PreviousNutritionsRecords")}
      >
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.rectangleParent, styles.groupWrapperPosition]}>
            <View style={[styles.groupChild, styles.childLayout]} />
            <Text style={[styles.ok, styles.okTypo]}> OK</Text>
          </View>
        </View>
      </Pressable>
      <FormContainer
        dimensions={require("../assets/download-2-26.png")}
        onVectorPress={() => navigation.navigate("Menu")}
        onDownload1Press={() => navigation.navigate("FertilizationHome")}
        onVectorPress1={() =>
          navigation.navigate("SanjulaDiseaseHomeContainer")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  monitorPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  phosphorusPTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_lgi,
    color: Color.black,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  wrapperPosition: {
    left: "12.51%",
    height: "2.72%",
    position: "absolute",
  },
  phosphorusPLayout: {
    height: "34.11%",
    position: "absolute",
  },
  groupWrapperPosition: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  okTypo: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    textAlign: "left",
  },
  childLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  rectangleIconLayout: {
    left: 221,
    height: 41,
    width: 73,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  wrapperLayout: {
    width: "9.94%",
    position: "absolute",
  },
  ppmTypo: {
    height: "21.9%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  text2Layout: {
    width: "14.25%",
    height: "8.94%",
    position: "absolute",
  },
  previousNutrientsStatus: {
    height: "100%",
    position: "absolute",
  },
  previousNutrientsStatusWrapper: {
    top: "26.53%",
    right: "4.52%",
    bottom: "70.75%",
    left: "12.39%",
    width: "83.09%",
    height: "2.72%",
    position: "absolute",
  },
  currentNutrientsStatusWrapper: {
    top: "51.02%",
    right: "4.4%",
    bottom: "46.26%",
    width: "83.09%",
  },
  nitrogenNWrapper: {
    width: "45.69%",
    top: "56.37%",
    right: "41.79%",
    bottom: "40.92%",
  },
  phosphorusP: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_lgi,
    color: Color.black,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  potassiumKWrapper: {
    top: "65.89%",
    bottom: "0%",
    height: "34.11%",
    position: "absolute",
  },
  phosphorusPParent: {
    height: "7.97%",
    width: "40.82%",
    top: "61.41%",
    right: "46.41%",
    bottom: "30.62%",
    left: "12.77%",
    position: "absolute",
  },
  monitorTheNutrient: {
    color: Color.black,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  monitorTheNutrientLevelWrapper: {
    height: "8.29%",
    width: "46.38%",
    top: "16.35%",
    right: "11.57%",
    bottom: "75.36%",
    left: "42.05%",
    position: "absolute",
  },
  currentNutrientLevel: {
    height: "5.57%",
    top: "74.94%",
    left: "16.8%",
    color: "#08aa05",
    width: "83.09%",
    position: "absolute",
  },
  text: {
    color: "#ff1616",
  },
  pleaseCheckNutrient: {
    color: Color.black,
  },
  pleaseCheckNutrientContainer: {
    top: 607,
    fontSize: FontSize.size_xs,
    letterSpacing: -0.2,
    fontStyle: "italic",
    fontFamily: FontFamily.workSansItalic,
    width: 311,
    left: 38,
    textAlign: "left",
    position: "absolute",
  },
  iphone8Plus2Child: {
    top: 114,
    left: 6,
    width: 382,
    height: 638,
  },
  iphone8Plus2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    overflow: "hidden",
  },
  check1Icon: {
    top: 631,
    left: 19,
    width: 43,
    height: 43,
    position: "absolute",
  },
  checkFertilizerChild: {
    top: 258,
    width: 321,
    height: 158,
    borderRadius: Border.br_3xs,
    left: 38,
    position: "absolute",
  },
  checkFertilizerItem: {
    top: 469,
    left: 222,
    height: 41,
    width: 73,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  checkFertilizerInner: {
    top: 514,
  },
  rectangleIcon: {
    top: 556,
  },
  text1: {
    color: Color.black,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  wrapper: {
    height: "3.58%",
    top: "56.68%",
    right: "27.48%",
    bottom: "39.74%",
    left: "62.58%",
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
    height: "14.29%",
    top: "55.73%",
    right: "13.7%",
    bottom: "29.98%",
    left: "76.36%",
  },
  text2: {
    top: "78.38%",
    left: "69.63%",
    fontFamily: FontFamily.workSansRegular,
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    textAlign: "left",
    color: Color.black,
  },
  date22042023: {
    height: "53.77%",
    color: Color.black,
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  container: {
    top: "91.06%",
    right: "18.68%",
    left: "67.07%",
    bottom: "0%",
  },
  parent: {
    height: "40.1%",
    width: "69.76%",
    top: "30.45%",
    right: "16.74%",
    bottom: "29.45%",
    left: "13.49%",
    position: "absolute",
  },
  monitor2Icon: {
    top: 125,
    left: 58,
    borderRadius: Border.br_31xl,
    width: 87,
    height: 83,
    position: "absolute",
  },
  monitorNutrients: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChild: {
    backgroundColor: Color.gold_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  ok: {
    height: "46.15%",
    width: "89.58%",
    top: "26.92%",
    left: "10.42%",
    color: Color.systemBackgroundsSBLPrimary,
  },
  rectangleParent: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupWrapper: {
    bottom: "0%",
    top: "0%",
    height: "100%",
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
  monitorNutritionsInner: {
    height: "6.24%",
    width: "23.33%",
    top: "80.81%",
    right: "39.49%",
    bottom: "12.96%",
    left: "37.18%",
    position: "absolute",
  },
  monitorNutritions: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default MonitorNutritions;
