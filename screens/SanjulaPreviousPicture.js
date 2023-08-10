import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnthracnoseFormContainer from "../components/AnthracnoseFormContainer";
import Container from "../components/Container";
import AnthracnoseFormContainer1 from "../components/AnthracnoseFormContainer1";
import FormContainer5 from "../components/FormContainer5";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SanjulaPreviousPicture = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaPreviousPicture}>
      <Image
        style={styles.sanjulaPreviousPictureChild}
        contentFit="cover"
        source={require("../assets/group-252.png")}
      />
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-22.png")}
      />
      <View style={styles.groupParent}>
        <AnthracnoseFormContainer />
        <Container
          date="20/05/2023"
          imageId={require("../assets/pic-3-2.png")}
          onButtonPress={() => navigation.navigate("SanjulaScanLeave")}
        />
        <Container
          date="18/05/2023"
          imageId={require("../assets/1684830329617-2.png")}
          propTop={305}
          propLeft={4}
          propTop1={7}
          propLeft1={6}
          onButtonPress={() => navigation.navigate("SanjulaScanLeave")}
        />
        <AnthracnoseFormContainer1 />
      </View>
      <Pressable
        style={styles.previousPicturesWrapper}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.previousPictures}>Previous Pictures</Text>
      </Pressable>
      <FormContainer5
        fertilizerTop={767}
        fertilizerLeft={-6}
        onVectorPress={() => navigation.navigate("SanjulaDiseaseHomeContainer")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sanjulaPreviousPictureChild: {
    height: "4.03%",
    width: "7.95%",
    top: "5.33%",
    right: "3.86%",
    bottom: "90.64%",
    left: "88.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logo2Icon: {
    top: 26,
    left: 162,
    width: 68,
    height: 53,
    position: "absolute",
  },
  groupParent: {
    top: 178,
    left: 20,
    width: 342,
    height: 567,
    position: "absolute",
  },
  previousPictures: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  previousPicturesWrapper: {
    height: "2.37%",
    width: "46.92%",
    top: "16.11%",
    right: "45.38%",
    bottom: "81.52%",
    left: "7.69%",
    position: "absolute",
  },
  sanjulaPreviousPicture: {
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

export default SanjulaPreviousPicture;
