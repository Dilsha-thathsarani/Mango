import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DilshaPremiumScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaPremiumScreen}>
      <Text style={styles.gainAccessTo}>Gain access to market analysis</Text>
      <Image
        style={[
          styles.unsplashnux8gyfil4mIcon,
          styles.unsplashnux8gyfil4mIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/unsplashnux8gyfil4m.png")}
      />
      <Pressable
        style={[
          styles.dilshaPremiumScreenChild,
          styles.unsplashnux8gyfil4mIconPosition,
        ]}
        onPress={() => navigation.navigate("DilshaPremiumScreen")}
      />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.paymentSuccessfully}>{`Payment 
Successfully `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unsplashnux8gyfil4mIconPosition: {
    left: 0,
    position: "absolute",
  },
  gainAccessTo: {
    top: 294,
    left: 121,
    fontSize: FontSize.size_3xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.systemBackgroundsSBLPrimary,
    textAlign: "left",
    width: 231,
    position: "absolute",
  },
  unsplashnux8gyfil4mIcon: {
    top: 0,
    width: 1280,
    height: 1920,
  },
  dilshaPremiumScreenChild: {
    top: 170,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    width: 390,
    height: 442,
  },
  image1Icon: {
    top: 200,
    left: 128,
    width: 134,
    height: 141,
    position: "absolute",
  },
  paymentSuccessfully: {
    top: 383,
    left: 94,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  dilshaPremiumScreen: {
    borderRadius: Border.br_21xl,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default DilshaPremiumScreen;
