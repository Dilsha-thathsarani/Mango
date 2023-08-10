import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PremiumContainer from "../components/PremiumContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GetSuggestions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getSuggestions}>
      <View style={styles.getSuggestions1}>
        <View style={styles.getSuggestions1}>
          <View style={styles.getSuggestions1}>
            <View style={styles.getSuggestions1}>
              <View style={styles.iphone8Plus2}>
                <View style={styles.suggestedFertilizerWrapper}>
                  <Text style={[styles.suggestedFertilizer, styles.seeFlexBox]}>
                    Suggested Fertilizer
                  </Text>
                </View>
                <View
                  style={[
                    styles.generalAdviceWrapper,
                    styles.iphone8Plus2InnerPosition,
                  ]}
                >
                  <Text style={[styles.suggestedFertilizer, styles.seeFlexBox]}>
                    General Advice :
                  </Text>
                </View>
                <View style={styles.seeSuggestedFertilizerWrapper}>
                  <Text
                    style={[styles.seeSuggestedFertilizer, styles.seeFlexBox]}
                  >{`See Suggested
Fertilizer
`}</Text>
                </View>
                <Pressable
                  style={[
                    styles.iphone8Plus2Inner,
                    styles.iphone8Plus2InnerPosition,
                  ]}
                  onPress={() =>
                    navigation.navigate("PreviousNutritionsRecords")
                  }
                >
                  <View
                    style={[styles.groupWrapper, styles.groupWrapperShadowBox]}
                  >
                    <View
                      style={[styles.rectangleParent, styles.groupPosition]}
                    >
                      <View style={[styles.groupChild, styles.childLayout]} />
                      <Text
                        style={[styles.seePreviousRecords, styles.seeFlexBox]}
                      >
                        See Previous Records
                      </Text>
                    </View>
                  </View>
                </Pressable>
                <Image
                  style={styles.fertilizer1Icon}
                  contentFit="cover"
                  source={require("../assets/fertilizer-1.png")}
                />
                <View style={styles.wrapper}>
                  <Text style={styles.text}>42</Text>
                </View>
                <View style={[styles.bottomNavigation, styles.bottomLayout]}>
                  <View
                    style={[
                      styles.bottomNavigationChild,
                      styles.downloadPosition1,
                    ]}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/vector17.png")}
                  />
                  <Pressable
                    style={[styles.download1, styles.downloadPosition]}
                    onPress={() => navigation.navigate("FertilizationHome")}
                  >
                    <Image
                      style={[styles.icon, styles.downloadPosition1]}
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
                  <Text style={[styles.diagnose, styles.homeTypo]}>
                    Diagnose
                  </Text>
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
                  <Text style={[styles.fertilizer, styles.homeTypo]}>
                    Fertilizer
                  </Text>
                  <Pressable
                    style={styles.vector}
                    onPress={() =>
                      navigation.navigate("SanjulaDiseaseHomeContainer")
                    }
                  >
                    <Image
                      style={[styles.icon1, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector18.png")}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.iphone8Plus2Child, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-68.png")}
                />
              </View>
            </View>
            <Image
              style={[styles.checkFertilizerChild, styles.checkLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-91.png")}
            />
            <Image
              style={[styles.checkFertilizerItem, styles.checkLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-131.png")}
            />
            <Text
              style={[styles.addFertilizerNear, styles.addTypo]}
            >{`Add fertilizer near the root area of the tree

MOP is important to growth and quality of the 
fruits.`}</Text>
            <Text
              style={[styles.addMuriateOf, styles.addTypo]}
            >{`Add Muriate of Potash 
(MOP)
 
210g per tree`}</Text>
          </View>
        </View>
      </View>
      <PremiumContainer
        dimensionCode={require("../assets/group-642.png")}
        onArrowBackPress={() => navigation.navigate("CheckFertilizer")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seeFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iphone8Plus2InnerPosition: {
    right: "18.72%",
    position: "absolute",
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
  groupPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  childLayout: {
    borderRadius: Border.br_6xl,
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
  checkLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.4,
    position: "absolute",
  },
  suggestedFertilizer: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: -0.4,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  suggestedFertilizerWrapper: {
    width: "83.09%",
    top: "31.73%",
    right: "4%",
    bottom: "65.55%",
    left: "12.91%",
    height: "2.72%",
    position: "absolute",
  },
  generalAdviceWrapper: {
    width: "65.21%",
    top: "53.72%",
    bottom: "43.57%",
    left: "16.08%",
    height: "2.72%",
  },
  seeSuggestedFertilizer: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  seeSuggestedFertilizerWrapper: {
    height: "8.29%",
    width: "46.38%",
    top: "17.65%",
    right: "8.75%",
    bottom: "74.06%",
    left: "44.87%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gold_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  seePreviousRecords: {
    height: "46.15%",
    width: "89.58%",
    top: "26.92%",
    left: "10.42%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    letterSpacing: -0.4,
    color: Color.black,
  },
  rectangleParent: {
    position: "absolute",
  },
  groupWrapper: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  iphone8Plus2Inner: {
    height: "7.07%",
    width: "62.56%",
    top: "79.98%",
    bottom: "12.96%",
    left: "18.72%",
  },
  fertilizer1Icon: {
    top: 130,
    left: 54,
    borderRadius: Border.br_31xl,
    width: 105,
    height: 102,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  wrapper: {
    height: "3.13%",
    width: "10.63%",
    top: "72.83%",
    right: "75.6%",
    bottom: "24.05%",
    left: "13.77%",
    position: "absolute",
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
    borderBottomRightRadius: Border.br_21xl,
  },
  vectorIcon: {
    height: "22.77%",
    width: "5.7%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    left: "46.58%",
    position: "absolute",
  },
  icon: {
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
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
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
  iphone8Plus2Child: {
    top: 115,
    left: 15,
    width: 360,
    height: 641,
  },
  iphone8Plus2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    overflow: "hidden",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  getSuggestions1: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  checkFertilizerChild: {
    top: 480,
    left: 43,
    width: 287,
    height: 165,
  },
  checkFertilizerItem: {
    top: 287,
    left: 39,
    width: 288,
    height: 148,
  },
  addFertilizerNear: {
    height: "17.45%",
    width: "56.71%",
    top: "60.25%",
    left: "17.29%",
  },
  addMuriateOf: {
    height: "12.93%",
    width: "61.91%",
    top: "38.39%",
    left: "16.04%",
  },
  getSuggestions: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default GetSuggestions;
