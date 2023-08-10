import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Yasantha14Cam3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Cam3}>
      <Image
        style={[styles.imageGalleryIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-gallery.png")}
      />
      <Text style={[styles.gallery, styles.galleryTypo]}>Gallery</Text>
      <Image
        style={styles.yasantha14Cam3Child}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <Image
        style={[styles.errorOutlineIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/error-outline.png")}
      />
      <Text style={[styles.snapTips, styles.galleryTypo]}>Snap Tips</Text>
      <Image
        style={[styles.r31, styles.r31Position]}
        contentFit="cover"
        source={require("../assets/r-3-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.groupIcon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.yasantha14Cam3Item, styles.r31Position]} />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.text}>
        <Text style={styles.plantIsSuitableContainer}>
          <Text style={styles.plantIs}>{`Plant is `}</Text>
          <Text style={styles.suitable}>Suitable</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.buttonprimary, styles.buttonprimarySpaceBlock]}
        onPress={() => navigation.navigate("Yasantha14Veriety")}
      >
        <Text style={[styles.send, styles.sendTypo]}>
          Find matching variety
        </Text>
      </Pressable>
      <View style={[styles.buttonprimary1, styles.buttonprimarySpaceBlock]}>
        <Text style={[styles.send1, styles.sendTypo]}>Retake Photo</Text>
      </View>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 40,
    width: 40,
    top: 708,
    position: "absolute",
  },
  galleryTypo: {
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    height: "2.37%",
    color: Color.black,
    position: "absolute",
  },
  r31Position: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    right: "7.44%",
    position: "absolute",
  },
  buttonprimarySpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  imageGalleryIcon: {
    left: 48,
  },
  gallery: {
    width: "20%",
    top: "89.93%",
    left: "7.44%",
  },
  yasantha14Cam3Child: {
    left: 153,
    width: 85,
    height: 86,
    opacity: 0.75,
    top: 708,
    position: "absolute",
  },
  errorOutlineIcon: {
    left: 316,
    overflow: "hidden",
  },
  snapTips: {
    width: "26.67%",
    top: "91.35%",
    left: "72.82%",
  },
  r31: {
    width: 464,
    height: 693,
    top: 0,
    left: 0,
  },
  vectorIcon: {
    right: "82.31%",
    bottom: "92.65%",
    left: "12.05%",
    top: "4.74%",
    maxWidth: "100%",
    width: "5.64%",
    height: "2.61%",
    position: "absolute",
  },
  groupIcon: {
    height: "2.67%",
    width: "6.41%",
    bottom: "92.59%",
    left: "86.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "4.74%",
  },
  yasantha14Cam3Item: {
    top: 382,
    borderRadius: Border.br_23xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    height: 467,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  image1Icon: {
    top: 414,
    left: 125,
    width: 134,
    height: 141,
    position: "absolute",
  },
  plantIs: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
  },
  suitable: {
    fontSize: 36,
    color: "#235b4d",
  },
  plantIsSuitableContainer: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    height: 63,
    width: 270,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 566,
    left: 57,
    height: 63,
    width: 270,
    position: "absolute",
  },
  send: {
    color: Color.systemBackgroundsSBLPrimary,
  },
  buttonprimary: {
    right: 43,
    bottom: 121,
    left: 45,
    backgroundColor: "#3ab54a",
    height: 62,
  },
  send1: {
    color: Color.black,
  },
  buttonprimary1: {
    right: 99,
    bottom: 54,
    left: 93,
    backgroundColor: "rgba(187, 198, 188, 0.35)",
    height: 56,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "86.92%",
    top: "47.75%",
    bottom: "49.64%",
    width: "5.64%",
    height: "2.61%",
  },
  yasantha14Cam3: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default Yasantha14Cam3;
