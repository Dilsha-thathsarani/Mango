import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Yasantha14Cam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Cam}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.yasantha14CamChild} />
      <Image
        style={[styles.flipCameraIos, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/flip-camera-ios.png")}
      />
      <Image
        style={[styles.imageGalleryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-gallery.png")}
      />
      <Text style={[styles.gallery, styles.galleryTypo]}>Gallery</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Yasantha14Cam2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-41.png")}
        />
      </Pressable>
      <Text style={[styles.snapTips, styles.galleryTypo]}>Snap Tips</Text>
      <Image
        style={[styles.errorOutlineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/error-outline2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "92.65%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 40,
    width: 40,
    top: 708,
    position: "absolute",
  },
  galleryTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    height: "2.37%",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.61%",
    width: "5.64%",
    top: "4.74%",
    right: "82.31%",
    left: "12.05%",
  },
  yasantha14CamChild: {
    top: 128,
    left: 0,
    backgroundColor: Color.black,
    width: 390,
    height: 521,
    position: "absolute",
  },
  flipCameraIos: {
    height: "3.55%",
    width: "7.69%",
    top: "3.79%",
    right: "9.49%",
    left: "82.82%",
  },
  imageGalleryIcon: {
    left: 48,
  },
  gallery: {
    width: "20%",
    top: "89.93%",
    left: "7.44%",
  },
  icon: {
    height: "100%",
    opacity: 0.75,
    width: "100%",
  },
  wrapper: {
    left: 153,
    top: 685,
    width: 85,
    height: 86,
    position: "absolute",
  },
  snapTips: {
    width: "26.67%",
    top: "91.35%",
    left: "72.82%",
  },
  errorOutlineIcon: {
    left: 316,
    overflow: "hidden",
  },
  yasantha14Cam: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yasantha14Cam;
