import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SanjulaGetRemedies = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaGetRemedies}>
      <Image
        style={[styles.sanjulaGetRemediesChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-252.png")}
      />
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-22.png")}
      />
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View
          style={[styles.chemicalControlParent, styles.insecticideIconPosition]}
        >
          <Text style={styles.chemicalControl}>Chemical Control</Text>
          <Image
            style={[styles.insecticideIcon, styles.download31Layout]}
            contentFit="cover"
            source={require("../assets/insecticide.png")}
          />
        </View>
        <Text style={[styles.useFormulationsOf, styles.useTypo]}>
          Use formulations of neem oil, which is an organic broad spectrum
          compound, to ward off white flies, aphids, scales, ants, and mealy
          bugs. Neem oil also reduces the growth of the fungus itself.
          Insecticidal soap or dish soap (e.g. one tablespoon per 5 liters of
          water) can be sprayed on affected plants. After letting the soap
          solution settle on the plants, it can be rinsed off, thereby
          removing the mold.
        </Text>
      </View>
      <View style={[styles.bottomNavigation, styles.bottomLayout]}>
        <View style={[styles.bottomNavigationChild, styles.bottomLayout]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.download1, styles.downloadLayout]}
          onPress={() => navigation.navigate("FertilizationHome")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/download-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.download22, styles.downloadLayout]}
          contentFit="cover"
          source={require("../assets/download-2-24.png")}
        />
        <Image
          style={[styles.download31, styles.download31Layout]}
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
          style={styles.vector1}
          onPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.img202303201002561Icon}
        contentFit="cover"
        source={require("../assets/img-20230320-100256-1.png")}
      />
      <Text style={[styles.sootyMold, styles.fungusTypo]}>Sooty Mold</Text>
      <Text style={[styles.fungus, styles.fungusTypo]}>Fungus</Text>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <View
          style={[styles.chemicalControlParent, styles.insecticideIconPosition]}
        >
          <Image
            style={[styles.insecticideIcon, styles.download31Layout]}
            contentFit="cover"
            source={require("../assets/natural-food.png")}
          />
          <Text style={styles.chemicalControl}>Organic Control</Text>
        </View>
        <Text style={[styles.useFormulationsOf1, styles.useTypo]}>
          Use formulations of neem oil, which is an organic broad spectrum
          compound, to ward off white flies, aphids, scales, ants, and mealy
          bugs. Neem oil also reduces the growth of the fungus itself.
          Insecticidal soap or dish soap (e.g. one tablespoon per 5 liters of
          water) can be sprayed on affected plants. After letting the soap
          solution settle on the plants, it can be rinsed off, thereby
          removing the mold.
        </Text>
      </View>
      <Image
        style={styles.sanjulaGetRemediesItem}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Pressable
        style={styles.sanjulaGetRemediesInner}
        onPress={() => navigation.goBack()}
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
  groupPosition: {
    left: 7,
    position: "absolute",
  },
  insecticideIconPosition: {
    height: 18,
    left: 0,
    top: 0,
  },
  download31Layout: {
    width: 27,
    position: "absolute",
  },
  useTypo: {
    height: 167,
    width: 322,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.3,
    fontSize: FontSize.uI14Regular_size,
    position: "absolute",
  },
  bottomLayout: {
    height: 84,
    width: 395,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  downloadLayout: {
    width: 31,
    position: "absolute",
  },
  homeTypo: {
    top: 51,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  fungusTypo: {
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  sanjulaGetRemediesChild: {
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
  chemicalControl: {
    top: 3,
    left: 31,
    width: 133,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    fontSize: FontSize.uI14Regular_size,
    color: Color.black,
    letterSpacing: -0.3,
    position: "absolute",
  },
  insecticideIcon: {
    height: 18,
    left: 0,
    top: 0,
  },
  chemicalControlParent: {
    width: 164,
    position: "absolute",
  },
  useFormulationsOf: {
    top: 28,
    left: 29,
  },
  groupParent: {
    top: 723,
    width: 351,
    height: 195,
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
    top: 0,
    height: 84,
    width: 395,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "46.58%",
    top: "25%",
    right: "47.72%",
    bottom: "52.23%",
    width: "5.7%",
    height: "22.77%",
    position: "absolute",
  },
  download1: {
    left: 321,
    height: 24,
    top: 20,
  },
  download22: {
    top: 21,
    height: 22,
    left: 240,
  },
  download31: {
    left: 41,
    height: 31,
    top: 20,
  },
  download11: {
    top: 18,
    left: 114,
    width: 28,
    height: 30,
    position: "absolute",
  },
  budding: {
    top: 48,
    left: 32,
    color: Color.gray_300,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
  },
  fertilizer: {
    left: 315,
    color: Color.gray_600,
  },
  vector1: {
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
    top: 138,
    width: 389,
    height: 284,
    left: 0,
    position: "absolute",
  },
  sootyMold: {
    top: 456,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    width: 280,
    height: 31,
    color: Color.black,
    left: 20,
  },
  fungus: {
    top: 487,
    fontSize: FontSize.uI16Medium_size,
    color: Color.gold_100,
    width: 140,
    height: 22,
    left: 20,
    letterSpacing: -0.3,
  },
  useFormulationsOf1: {
    top: 37,
    left: 30,
  },
  groupContainer: {
    top: 524,
    width: 352,
    height: 204,
  },
  sanjulaGetRemediesItem: {
    top: 52,
    left: 13,
    width: 24,
    height: 22,
    position: "absolute",
  },
  sanjulaGetRemediesInner: {
    top: 45,
    backgroundColor: Color.gainsboro_200,
    width: 48,
    height: 34,
    left: 0,
    position: "absolute",
  },
  sanjulaGetRemedies: {
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

export default SanjulaGetRemedies;
