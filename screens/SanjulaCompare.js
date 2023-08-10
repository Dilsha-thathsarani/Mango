import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SanjulaCompare = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaCompare}>
      <Image
        style={[styles.sanjulaCompareChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-252.png")}
      />
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-22.png")}
      />
      <View style={[styles.bottomNavigation, styles.bottomLayout]}>
        <View style={[styles.bottomNavigationChild, styles.childPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Pressable
          style={styles.download1}
          onPress={() => navigation.navigate("FertilizationHome")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/download-1.png")}
          />
        </Pressable>
        <Image
          style={styles.download22}
          contentFit="cover"
          source={require("../assets/download-2-24.png")}
        />
        <Image
          style={styles.download31}
          contentFit="cover"
          source={require("../assets/download-3-12.png")}
        />
        <View style={styles.download11} />
        <Text style={styles.budding}>Budding</Text>
        <Text style={[styles.diagnose, styles.homeTypo]}>Diagnose</Text>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.variety, styles.homeTypo]}>Variety</Text>
        <Text style={[styles.fertilizer, styles.homeTypo]}>Fertilizer</Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.img202303201002561Icon, styles.download12Position]}
        contentFit="cover"
        source={require("../assets/img-20230320-100256-11.png")}
      />
      <Image
        style={[styles.download12, styles.download12Position]}
        contentFit="cover"
        source={require("../assets/download-1-2.png")}
      />
      <Text style={[styles.previous, styles.nowTypo]}>Previous</Text>
      <Text style={[styles.now, styles.nowTypo]}>Now</Text>
      <Text style={[styles.text, styles.textTypo]}>80%</Text>
      <Text style={[styles.text1, styles.textTypo]}>50%</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.text2, styles.text2Layout]}>
          <Text style={[styles.plantIs30Container, styles.text2Layout]}>
            <Text>
              <Text style={styles.plantIs30}>{`Plant is 30% `}</Text>
              <Text style={styles.riskFree}>Risk Free</Text>
            </Text>
          </Text>
        </View>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("SanjulaPreviousPicture")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/arrow-13.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bottomLayout: {
    height: 84,
    width: 395,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  homeTypo: {
    top: 51,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  download12Position: {
    height: 333,
    top: 170,
    position: "absolute",
  },
  nowTypo: {
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    top: 134,
    textAlign: "left",
    height: 31,
    position: "absolute",
  },
  textTypo: {
    width: 130,
    top: 527,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    height: 30,
    position: "absolute",
  },
  groupChildLayout: {
    height: 242,
    width: 402,
    position: "absolute",
  },
  text2Layout: {
    height: 79,
    width: 328,
    position: "absolute",
  },
  sanjulaCompareChild: {
    height: "4.03%",
    width: "7.95%",
    top: "5.33%",
    right: "3.86%",
    bottom: "90.64%",
    left: "88.19%",
    position: "absolute",
  },
  logo2Icon: {
    top: 26,
    left: 162,
    width: 68,
    height: 53,
    position: "absolute",
  },
  bottomNavigationChild: {
    backgroundColor: Color.black,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 5,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    height: 84,
    width: 395,
    position: "absolute",
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
  download1: {
    left: 321,
    height: 24,
    width: 31,
    top: 20,
    position: "absolute",
  },
  download22: {
    top: 21,
    height: 22,
    left: 240,
    width: 31,
    position: "absolute",
  },
  download31: {
    left: 41,
    width: 27,
    height: 31,
    top: 20,
    position: "absolute",
  },
  download11: {
    top: 18,
    left: 114,
    height: 30,
    width: 28,
    position: "absolute",
  },
  budding: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  diagnose: {
    left: 102,
    color: Color.gray_400,
  },
  home: {
    left: 177,
    color: Color.gray_500,
  },
  variety: {
    color: Color.silver_100,
    left: 240,
    top: 51,
  },
  fertilizer: {
    left: 315,
    color: Color.gray_600,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: 767,
    left: -6,
  },
  img202303201002561Icon: {
    left: 188,
    width: 202,
  },
  download12: {
    width: 188,
    left: 0,
  },
  previous: {
    left: 27,
    width: 145,
    color: Color.black,
  },
  now: {
    left: 248,
    color: "#e79e2b",
    width: 127,
  },
  text: {
    left: 43,
    color: "#f40000",
  },
  text1: {
    left: 234,
    color: Color.gold_100,
  },
  groupChild: {
    borderRadius: Border.br_23xl,
    left: 0,
    top: 0,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    width: 402,
  },
  plantIs30: {
    color: Color.black,
  },
  riskFree: {
    color: Color.darkolivegreen,
  },
  plantIs30Container: {
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  text2: {
    top: 138,
    left: 45,
  },
  image1Icon: {
    top: 10,
    left: 144,
    width: 98,
    height: 92,
    position: "absolute",
  },
  rectangleParent: {
    top: 517,
    left: -12,
  },
  wrapper: {
    left: 13,
    top: 50,
    width: 28,
    height: 22,
    position: "absolute",
  },
  sanjulaCompare: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default SanjulaCompare;
