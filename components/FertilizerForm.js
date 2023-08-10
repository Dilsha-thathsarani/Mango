import React, { memo } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FertilizerForm = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomNavigationContainer, styles.bottomLayout]}>
      <View style={[styles.bottomNavigationRectangle, styles.bottomLayout]} />
      <Pressable
        style={styles.buddingIcon}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Image
        style={[styles.diagnoseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download-1.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download-2-24.png")}
      />
      <Image
        style={styles.varietyIcon}
        contentFit="cover"
        source={require("../assets/download-3-12.png")}
      />
      <View style={styles.fertilizerIcon} />
      <Text style={[styles.buddingLabel, styles.labelTypo]}>Budding</Text>
      <Text style={[styles.diagnoseLabel, styles.labelPosition]}>Diagnose</Text>
      <Text style={[styles.homeLabel, styles.labelPosition]}>Home</Text>
      <Text style={[styles.varietyLabel, styles.labelPosition]}>Variety</Text>
      <Pressable
        style={[styles.fertilizerLabel, styles.labelPosition]}
        onPress={() => navigation.navigate("FertilizationHome")}
      >
        <Text style={[styles.fertilizer, styles.labelTypo]}>Fertilizer</Text>
      </Pressable>
      <Image
        style={[styles.bottomNavigationVector, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  bottomLayout: {
    height: 84,
    width: 395,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout: {
    width: 31,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  labelPosition: {
    top: 51,
    position: "absolute",
  },
  bottomNavigationRectangle: {
    top: 0,
    left: 0,
    backgroundColor: Color.black,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 5,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  buddingIcon: {
    left: "46.58%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    width: "5.7%",
    height: "22.77%",
    position: "absolute",
  },
  diagnoseIcon: {
    left: 321,
    height: 24,
    top: 20,
  },
  homeIcon: {
    top: 21,
    height: 22,
    left: 240,
  },
  varietyIcon: {
    left: 41,
    width: 27,
    height: 31,
    top: 20,
    position: "absolute",
  },
  fertilizerIcon: {
    top: 18,
    left: 114,
    width: 28,
    height: 30,
    position: "absolute",
  },
  buddingLabel: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    position: "absolute",
  },
  diagnoseLabel: {
    left: 102,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  homeLabel: {
    left: 177,
    color: Color.gray_500,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
  },
  varietyLabel: {
    color: Color.silver_100,
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    left: 240,
  },
  fertilizer: {
    color: Color.gray_600,
  },
  fertilizerLabel: {
    left: 315,
  },
  bottomNavigationVector: {
    height: "23.81%",
    width: "5.06%",
    top: "28.57%",
    right: "65.07%",
    bottom: "47.62%",
    left: "29.87%",
    position: "absolute",
  },
  bottomNavigationContainer: {
    top: 760,
    left: -4,
  },
});

export default FertilizerForm;
