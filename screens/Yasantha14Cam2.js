import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Yasantha14Cam2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Cam2}>
      <Image
        style={[styles.imageGalleryIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-gallery.png")}
      />
      <Text style={[styles.gallery, styles.galleryTypo]}>Gallery</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Yasantha14Cam3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-41.png")}
        />
      </Pressable>
      <Image
        style={[styles.errorOutlineIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/error-outline1.png")}
      />
      <Text style={[styles.snapTips, styles.galleryTypo]}>Snap Tips</Text>
      <Image
        style={styles.r31}
        contentFit="cover"
        source={require("../assets/r-3-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.yasantha14Cam2Child}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
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
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    height: "2.37%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "4.74%",
    position: "absolute",
    overflow: "hidden",
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
    width: 85,
    height: 86,
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
    top: 0,
    left: 0,
    width: 464,
    height: 693,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.61%",
    width: "5.64%",
    right: "82.31%",
    bottom: "92.65%",
    left: "12.05%",
  },
  groupIcon: {
    height: "2.67%",
    width: "6.41%",
    right: "7.44%",
    bottom: "92.59%",
    left: "86.15%",
  },
  yasantha14Cam2Child: {
    top: 164,
    left: 60,
    width: 278,
    height: 316,
    position: "absolute",
  },
  yasantha14Cam2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Yasantha14Cam2;
