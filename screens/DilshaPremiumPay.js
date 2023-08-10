import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CreditCardFormContainer from "../components/CreditCardFormContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DilshaPremiumPay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dilshaPremiumPay}>
      <Image
        style={styles.arrowBackIcon}
        contentFit="cover"
        source={require("../assets/arrow-back.png")}
      />
      <Image
        style={styles.dilshaPremiumPayChild}
        contentFit="cover"
        source={require("../assets/group-251.png")}
      />
      <Image
        style={styles.internationalIcon}
        contentFit="cover"
        source={require("../assets/international.png")}
      />
      <CreditCardFormContainer />
      <Text style={[styles.addNewCard, styles.purchaseTypo]}>Add New Card</Text>
      <View style={styles.cardholderNameParent}>
        <Text style={[styles.cardholderName, styles.expiryDateTypo]}>
          Cardholder Name
        </Text>
        <View style={[styles.groupChild, styles.groupBorder]} />
      </View>
      <View style={[styles.expiryDateParent, styles.parentLayout]}>
        <Text style={[styles.expiryDate, styles.parentLayout]}>
          Expiry Date
        </Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
      </View>
      <View style={[styles.cvvParent, styles.parentLayout]}>
        <Text style={[styles.expiryDate, styles.parentLayout]}>CVV</Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
      </View>
      <View style={styles.cardNumberParent}>
        <Text style={[styles.cardholderName, styles.expiryDateTypo]}>
          Card Number
        </Text>
        <View style={[styles.lineView, styles.groupBorder]} />
      </View>
      <Pressable
        style={styles.dilshaPremiumPayItem}
        onPress={() => navigation.navigate("DilshaPremiumScreen1")}
      />
      <Text style={[styles.purchase, styles.purchaseTypo]}>Purchase</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  purchaseTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.6,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  expiryDateTypo: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  groupBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6c757d",
    position: "absolute",
    borderStyle: "solid",
  },
  parentLayout: {
    width: 131,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 32,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  dilshaPremiumPayChild: {
    height: "3.91%",
    width: "7.61%",
    top: "3.2%",
    right: "6.49%",
    bottom: "92.89%",
    left: "85.9%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  internationalIcon: {
    top: 503,
    left: 296,
    width: 42,
    height: 32,
    position: "absolute",
  },
  addNewCard: {
    top: 56,
    left: 82,
    width: 222,
  },
  cardholderName: {
    width: 221,
    position: "absolute",
  },
  groupChild: {
    width: 309,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6c757d",
    left: 22,
    top: 65,
  },
  cardholderNameParent: {
    top: 383,
    left: 16,
    width: 330,
    height: 65,
    position: "absolute",
  },
  expiryDate: {
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
  },
  groupItem: {
    left: 13,
    width: 95,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6c757d",
    top: 65,
  },
  expiryDateParent: {
    top: 594,
    width: 131,
    height: 65,
    left: 22,
  },
  cvvParent: {
    left: 216,
    top: 594,
    width: 131,
    height: 65,
  },
  lineView: {
    top: 77,
    left: 43,
    width: 309,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#6c757d",
  },
  cardNumberParent: {
    top: 474,
    left: -5,
    width: 351,
    height: 77,
    position: "absolute",
  },
  dilshaPremiumPayItem: {
    top: 715,
    left: 65,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gold_100,
    width: 244,
    height: 52,
    position: "absolute",
  },
  purchase: {
    top: 722,
    left: 102,
    width: 163,
  },
  dilshaPremiumPay: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderStyle: "solid",
  },
});

export default DilshaPremiumPay;
