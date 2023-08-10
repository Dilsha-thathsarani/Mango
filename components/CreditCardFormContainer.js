import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const CreditCardFormContainer = memo(() => {
  return (
    <View style={[styles.card1, styles.cardLayout]}>
      <LinearGradient
        style={[styles.card, styles.cardPosition]}
        locations={[0, 1]}
        colors={["#6c009a", "#2d004d"]}
      />
      <Image
        style={[styles.meliukLiukIcon, styles.cardPosition]}
        contentFit="cover"
        source={require("../assets/meliukliuk.png")}
      />
      <Image
        style={styles.image10Icon}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-38.png")}
        />
        <Text style={styles.mastercard}>Mastercard</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>2021 0213 2025 2591</Text>
      <Text style={[styles.danishSuryoW, styles.expTypo]}>Danish Suryo W.</Text>
      <Text style={[styles.text1, styles.expTypo]}>12/12</Text>
      <Text style={[styles.exp, styles.expTypo]}>exp</Text>
      <Text style={[styles.creditCard, styles.textTypo]}>Credit Card</Text>
      <View style={styles.card1Child} />
    </View>
  );
});

const styles = StyleSheet.create({
  cardLayout: {
    height: 225,
    width: 354,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: -10,
      height: 10,
    },
  },
  cardPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.uI14Regular_size,
    textAlign: "left",
    color: Color.systemBackgroundsSBLPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    left: 30,
    position: "absolute",
  },
  expTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.systemBackgroundsSBLPrimary,
    position: "absolute",
  },
  card: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 30,
    elevation: 30,
    backgroundColor: "transparent",
    height: 225,
    width: 354,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    left: 0,
  },
  meliukLiukIcon: {
    width: 597,
    height: 451,
    opacity: 0.3,
  },
  image10Icon: {
    top: 80,
    width: 52,
    height: 38,
    left: 30,
    position: "absolute",
  },
  frameChild: {
    left: 7,
    width: 41,
    height: 25,
    top: 0,
    position: "absolute",
  },
  mastercard: {
    top: 27,
    left: 6,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.systemBackgroundsSBLPrimary,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  frameParent: {
    top: 20,
    left: 269,
    width: 55,
    height: 39,
    position: "absolute",
  },
  text: {
    top: 150,
  },
  danishSuryoW: {
    top: 188,
    fontWeight: "300",
    fontSize: FontSize.uI14Regular_size,
    left: 30,
  },
  text1: {
    left: 289,
    top: 188,
    fontWeight: "300",
    fontSize: FontSize.uI14Regular_size,
  },
  exp: {
    top: 189,
    left: 264,
    fontSize: FontSize.size_xs,
    opacity: 0.5,
  },
  creditCard: {
    top: 31,
  },
  card1Child: {
    top: -197,
    left: -15,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowRadius: 4,
    elevation: 4,
    width: 387,
    height: 179,
    shadowOpacity: 1,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  card1: {
    top: 115,
    left: 22,
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 354,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
});

export default CreditCardFormContainer;
