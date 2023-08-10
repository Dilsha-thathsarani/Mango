import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer5 from "../components/FormContainer5";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SanjulaDiseaseIdentify = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaDiseaseIdentify}>
      <Image
        style={[styles.sanjulaDiseaseIdentifyChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-45.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.sootyMold, styles.sootyMoldFlexBox]}>
          Sooty Mold
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/arrow-3.png")}
        />
        <Text
          style={[styles.blackOrDark, styles.sootyMoldFlexBox]}
        >{`Black or dark brown powdery on leaves, stems, and fruits.
Stunted growth and reduced vigor.
Interferes with photosynthesis and plant health.

It is a black mold that grows on mango trees and plants infested by insects. It forms on the sticky honeydew secreted by insects to attract other bugs. Severe infestations can cause leaves to wither and fall off, impacting the plant's growth and survival.`}</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SanjulaGetRemedies")}
        >
          <View style={styles.buttonChild} />
          <Text style={[styles.getRemedies, styles.sootyMoldFlexBox]}>
            Get remedies
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.sanjulaDiseaseIdentifyItem}
        onPress={() => navigation.goBack()}
      />
      <FormContainer5
        onVectorPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
      />
      <Pressable
        style={styles.sanjulaDiseaseIdentifyInner}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    top: 0,
    left: 0,
  },
  groupChildLayout: {
    height: 467,
    width: 414,
    position: "absolute",
  },
  sootyMoldFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  sanjulaDiseaseIdentifyChild: {
    width: 527,
    height: 572,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_23xl,
    backgroundColor: "#dcdcdc",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  sootyMold: {
    top: 35,
    left: 57,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
  },
  groupItem: {
    top: 36,
    left: 23,
    width: 21,
    height: 22,
    position: "absolute",
  },
  blackOrDark: {
    top: 74,
    left: 24,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.workSansRegular,
    width: 368,
    height: 367,
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gold_100,
    position: "absolute",
    width: "100%",
  },
  getRemedies: {
    height: "82.86%",
    width: "87.5%",
    top: "17.14%",
    left: "12.5%",
    fontSize: FontSize.uI16Medium_size,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  button: {
    height: "8.59%",
    width: "30.95%",
    top: "85.87%",
    right: "35.96%",
    bottom: "5.54%",
    left: "33.09%",
    position: "absolute",
  },
  rectangleParent: {
    top: 301,
    left: -12,
  },
  sanjulaDiseaseIdentifyItem: {
    top: 412,
    left: 9,
    backgroundColor: Color.gainsboro_100,
    width: 25,
    height: 23,
    opacity: 0,
    position: "absolute",
  },
  sanjulaDiseaseIdentifyInner: {
    top: 331,
    backgroundColor: Color.gainsboro_200,
    width: 41,
    height: 28,
    left: 0,
    position: "absolute",
  },
  sanjulaDiseaseIdentify: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SanjulaDiseaseIdentify;
