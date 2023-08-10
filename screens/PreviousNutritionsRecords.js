import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PreviousNutritionsRecords = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.previousNutritionsRecords}>
      <View style={[styles.monitorNutrients, styles.monitorPosition]}>
        <View style={styles.monitorPosition}>
          <View style={styles.monitorPosition}>
            <View style={styles.monitorPosition}>
              <View style={styles.iphone8Plus2}>
                <View style={styles.previousNutritionRecordsWrapper}>
                  <Text style={styles.previousNutritionRecords}>
                    Previous Nutrition Records
                  </Text>
                </View>
                <Image
                  style={[styles.iphone8Plus2Child, styles.searchIconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-121.png")}
                />
                <Image
                  style={styles.iphone8Plus2Item}
                  contentFit="cover"
                  source={require("../assets/rectangle-51.png")}
                />
              </View>
            </View>
            <Image
              style={styles.checkFertilizerChild}
              contentFit="cover"
              source={require("../assets/rectangle-72.png")}
            />
            <View
              style={[
                styles.recordId0003Date3004Wrapper,
                styles.recordWrapperLayout,
              ]}
            >
              <Text style={styles.recordIdContainer}>
                <Text style={styles.recordId}>{`Record ID : 0003
Date : 30/04/2023  Time : 10.00 A.M
`}</Text>
                <Text style={styles.blankLine}> </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-21.png")}
      />
      <Image
        style={styles.profilePicIcon}
        contentFit="cover"
        source={require("../assets/profile-pic1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.premium}>Premium</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-642.png")}
        />
      </View>
      <Pressable
        style={styles.arrowBack}
        onPress={() => navigation.navigate("GetSuggestions")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </Pressable>
      <FormContainer
        dimensions={require("../assets/download-2-25.png")}
        onVectorPress={() => navigation.navigate("Menu")}
        onDownload1Press={() => navigation.navigate("FertilizationHome")}
        onVectorPress1={() =>
          navigation.navigate("SanjulaDiseaseHomeContainer")
        }
      />
      <Text style={[styles.view, styles.viewTypo]}>View</Text>
      <Image
        style={[styles.previousNutritionsRecordsChild, styles.previousLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-73.png")}
      />
      <View style={styles.recordId0001Date2204Wrapper}>
        <Text style={styles.recordIdContainer}>
          <Text style={styles.recordId}>{`Record ID : 0001
Date : 22/04/2023   Time : 2.34 P.M
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
      </View>
      <Pressable
        style={styles.view1}
        onPress={() => navigation.navigate("MonitorNutritions")}
      >
        <Text style={[styles.view2, styles.viewTypo]}>View</Text>
      </Pressable>
      <Image
        style={[styles.previousNutritionsRecordsItem, styles.previousLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-73.png")}
      />
      <View
        style={[styles.recordId0002Date2804Wrapper, styles.recordWrapperLayout]}
      >
        <Text style={styles.recordIdContainer}>
          <Text style={styles.recordId}>{`Record ID : 0002
Date : 28/04/2023   Time : 4.00 P.M
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
      </View>
      <View style={styles.searchHereWrapper}>
        <Text style={styles.searchHere}>Search Here</Text>
      </View>
      <Text style={[styles.view3, styles.viewTypo]}>View</Text>
      <Image
        style={[styles.searchIcon, styles.searchIconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
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
  searchIconLayout: {
    height: 48,
    position: "absolute",
  },
  recordWrapperLayout: {
    height: "9.83%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    position: "absolute",
  },
  viewTypo: {
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textDecoration: "underline",
    fontSize: FontSize.size_lg,
    width: "19.23%",
    height: "2.73%",
    letterSpacing: -0.4,
    color: Color.gold_100,
    textAlign: "left",
  },
  previousLayout: {
    width: 365,
    height: 132,
    left: 15,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  previousNutritionRecords: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  previousNutritionRecordsWrapper: {
    height: "4.5%",
    top: "15.52%",
    right: "1.28%",
    bottom: "79.98%",
    left: "12.05%",
    width: "86.67%",
    position: "absolute",
  },
  iphone8Plus2Child: {
    top: 180,
    left: 38,
    width: 285,
    borderRadius: Border.br_3xs,
    height: 48,
  },
  iphone8Plus2Item: {
    top: 119,
    left: 5,
    borderRadius: Border.br_6xl,
    width: 382,
    height: 638,
    position: "absolute",
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
  checkFertilizerChild: {
    top: 578,
    width: 362,
    height: 132,
    left: 15,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  recordId: {
    fontSize: FontSize.size_xl,
  },
  blankLine: {
    fontSize: FontSize.uI16Medium_size,
  },
  recordIdContainer: {
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  recordId0003Date3004Wrapper: {
    width: "86.06%",
    top: "70.38%",
    right: "6.3%",
    bottom: "19.79%",
    left: "7.64%",
  },
  monitorNutrients: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  logo2Icon: {
    top: 51,
    left: 150,
    width: 90,
    height: 62,
    position: "absolute",
  },
  profilePicIcon: {
    height: "4.03%",
    width: "8.46%",
    top: "3.79%",
    bottom: "92.18%",
    left: "87.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "4.1%",
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 113,
    left: 0,
    top: 0,
    height: 26,
  },
  premium: {
    width: "67.71%",
    top: "11.54%",
    left: "32.29%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.gold_100,
    height: "76.92%",
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    width: "14.16%",
    top: "7.69%",
    right: "76.69%",
    bottom: "15.38%",
    left: "9.15%",
    height: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 37,
    left: 219,
    width: 126,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBack: {
    left: 17,
    top: 38,
    width: 24,
    height: 24,
    position: "absolute",
  },
  view: {
    top: "77.61%",
    left: "8.46%",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textDecoration: "underline",
    fontSize: FontSize.size_lg,
    width: "19.23%",
    height: "2.73%",
    position: "absolute",
  },
  previousNutritionsRecordsChild: {
    top: 275,
  },
  recordId0001Date2204Wrapper: {
    top: "34.24%",
    bottom: "55.92%",
    left: "9.23%",
    right: "4.1%",
    height: "9.83%",
    width: "86.67%",
    position: "absolute",
  },
  view2: {
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textDecoration: "underline",
    fontSize: FontSize.size_lg,
    width: "19.23%",
    height: "2.73%",
  },
  view1: {
    left: "10.51%",
    top: "42.18%",
    position: "absolute",
  },
  previousNutritionsRecordsItem: {
    top: 430,
  },
  recordId0002Date2804Wrapper: {
    top: "52.84%",
    right: "5.9%",
    bottom: "37.32%",
    left: "7.44%",
    width: "86.67%",
  },
  searchHere: {
    color: "rgba(0, 0, 0, 0.25)",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  searchHereWrapper: {
    height: "2.96%",
    width: "31.28%",
    top: "22.39%",
    right: "39.74%",
    bottom: "74.64%",
    left: "28.97%",
    position: "absolute",
  },
  view3: {
    top: "60.78%",
    left: "8.46%",
    fontFamily: FontFamily.workSansSemiBoldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textDecoration: "underline",
    fontSize: FontSize.size_lg,
    width: "19.23%",
    height: "2.73%",
    position: "absolute",
  },
  searchIcon: {
    top: 179,
    left: 53,
    width: 40,
  },
  previousNutritionsRecords: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default PreviousNutritionsRecords;
