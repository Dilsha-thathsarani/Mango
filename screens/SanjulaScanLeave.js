import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SanjulaScanLeave = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaScanLeave}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/1684830329617-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </Pressable>
      <View style={[styles.imageGalleryParent, styles.wrapperLayout]}>
        <Image
          style={styles.imageGalleryIcon}
          contentFit="cover"
          source={require("../assets/image-gallery1.png")}
        />
        <Text style={[styles.gallery, styles.galleryTypo]}>Gallery</Text>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("SanjulaDiseaseIdentify")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-411.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Text style={[styles.snapTips, styles.galleryTypo]}>Snap Tips</Text>
      </View>
      <Image
        style={styles.sanjulaScanLeaveChild}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Pressable
        style={styles.sanjulaScanLeaveItem}
        onPress={() => navigation.navigate("SanjulaCompare")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorLayout: {
    height: "2.61%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    height: 86,
    position: "absolute",
  },
  galleryTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    height: "26.67%",
    position: "absolute",
  },
  icon: {
    left: 0,
    width: 390,
    height: 658,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    width: "6.41%",
    top: "2.45%",
    right: "9.05%",
    bottom: "94.95%",
    left: "84.54%",
    height: "2.61%",
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.94%",
    top: "2.58%",
    right: "85.42%",
    bottom: "94.81%",
    width: "5.64%",
  },
  imageGalleryIcon: {
    top: 8,
    left: 17,
    width: 40,
    height: 40,
    position: "absolute",
  },
  gallery: {
    width: "20.94%",
    top: "63.95%",
    left: "0%",
  },
  wrapper: {
    left: 134,
    width: 85,
    top: 0,
  },
  vectorIcon: {
    height: "40.7%",
    width: "9.97%",
    top: "11.63%",
    right: "11.96%",
    bottom: "47.67%",
    left: "78.07%",
    position: "absolute",
  },
  snapTips: {
    width: "27.91%",
    top: "66.28%",
    left: "72.09%",
  },
  imageGalleryParent: {
    top: 685,
    left: 28,
    width: 351,
  },
  sanjulaScanLeaveChild: {
    top: 171,
    left: 56,
    width: 278,
    height: 316,
    position: "absolute",
  },
  sanjulaScanLeaveItem: {
    top: 789,
    left: 155,
    backgroundColor: Color.gainsboro_200,
    width: 126,
    height: 39,
    position: "absolute",
  },
  sanjulaScanLeave: {
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

export default SanjulaScanLeave;
