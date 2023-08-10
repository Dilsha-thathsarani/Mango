import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FertilizerForm from "../components/FertilizerForm";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SanjulaDiseaseHomeContain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sanjulaDiseaseHomeContain}>
      <Image
        style={styles.ellipseContainerIcon}
        contentFit="cover"
        source={require("../assets/group-252.png")}
      />
      <Pressable
        style={styles.previousPicturesHeadingCont}
        onPress={() => navigation.navigate("SanjulaPreviousPicture")}
      >
        <Text style={[styles.previousPicturesHeading, styles.buttonLabelTypo]}>
          Previous Pictures
        </Text>
        <Text style={styles.viewAllLabel}>View All</Text>
      </Pressable>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo-22.png")}
      />
      <View style={styles.previousPicturesContainer}>
        <View
          style={[
            styles.previousPicture3Container,
            styles.previousContainerLayout,
          ]}
        >
          <View
            style={[styles.previousPicture3Rectangle, styles.previousShadowBox]}
          />
          <Image
            style={[
              styles.previousPicture3Image,
              styles.contentRectangleIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/previous-picture-3-image.png")}
          />
        </View>
        <View
          style={[
            styles.previousPicture2Container,
            styles.previousContainerLayout,
          ]}
        >
          <View
            style={[styles.previousPicture2Rectangle, styles.previousShadowBox]}
          />
          <Image
            style={[
              styles.previousPicture3Image,
              styles.contentRectangleIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/previous-picture-2-image.png")}
          />
        </View>
        <View style={styles.previousPicture1Container}>
          <View
            style={[styles.previousPicture1Rectangle, styles.previousShadowBox]}
          />
          <Image
            style={[
              styles.previousPicture3Image,
              styles.contentRectangleIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/previous-picture-1-image.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("SanjulaScanLeave")}
      >
        <View
          style={[styles.buttonSubContainer, styles.buttonContainerPosition]}
        >
          <View style={styles.buttonContainerPosition}>
            <View style={styles.buttonRectangle} />
            <Text style={[styles.buttonLabel, styles.buttonLabelTypo]}>
              Take a Picture
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.contentContainer}>
        <View style={styles.contentLabelsContainer}>
          <Text style={[styles.takeAPicture, styles.labelTypo]}>{`Take a 
picture`}</Text>
          <Text style={[styles.seeDiagnosisLabel, styles.labelTypo]}>{`See
Diagnosis`}</Text>
          <Text style={[styles.getRemediesLabel, styles.labelTypo]}>{`Get
Remedies`}</Text>
        </View>
        <Image
          style={styles.contentIconsContainer}
          contentFit="cover"
          source={require("../assets/content-icons-container.png")}
        />
        <Image
          style={[
            styles.contentRectangleIcon,
            styles.contentRectangleIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/content-rectangle.png")}
        />
      </View>
      <View style={styles.headingIconContainer}>
        <Text style={styles.heading}>{`It’s time to identify
mango diseases`}</Text>
        <Image
          style={styles.virusIcon}
          contentFit="cover"
          source={require("../assets/virus-icon.png")}
        />
      </View>
      <FertilizerForm />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLabelTypo: {
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  previousContainerLayout: {
    width: 106,
    top: 0,
    height: 112,
    position: "absolute",
  },
  previousShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  contentRectangleIconLayout: {
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  buttonContainerPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    height: "100%",
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    color: Color.black,
    top: "0%",
    position: "absolute",
  },
  ellipseContainerIcon: {
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
  previousPicturesHeading: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    left: "0%",
    top: "0%",
    width: "51.99%",
    height: "86.96%",
    color: Color.black,
    letterSpacing: -0.4,
    fontSize: FontSize.size_xl,
  },
  viewAllLabel: {
    top: "13.04%",
    left: "48.01%",
    fontWeight: "700",
    fontFamily: FontFamily.workSansBold,
    color: Color.gold_100,
    textAlign: "right",
    letterSpacing: -0.3,
    fontSize: FontSize.uI16Medium_size,
    width: "51.99%",
    height: "86.96%",
    position: "absolute",
  },
  previousPicturesHeadingCont: {
    height: "3.12%",
    width: "85.02%",
    top: "66.47%",
    right: "9.59%",
    bottom: "30.41%",
    left: "5.38%",
    position: "absolute",
  },
  logoIcon: {
    top: 26,
    left: 162,
    width: 68,
    height: 53,
    position: "absolute",
  },
  previousPicture3Rectangle: {
    backgroundColor: Color.palegoldenrod,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: 0,
    width: 106,
    top: 0,
    height: 112,
    position: "absolute",
  },
  previousPicture3Image: {
    top: 5,
    left: 6,
    width: 94,
    height: 102,
  },
  previousPicture3Container: {
    left: 268,
  },
  previousPicture2Rectangle: {
    backgroundColor: Color.palegoldenrod,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: 0,
    width: 106,
    top: 0,
    height: 112,
    position: "absolute",
  },
  previousPicture2Container: {
    left: 138,
  },
  previousPicture1Rectangle: {
    backgroundColor: Color.palegoldenrod,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: 0,
    width: 106,
    top: 0,
    height: 112,
    position: "absolute",
  },
  previousPicture1Container: {
    left: 0,
    width: 106,
    top: 0,
    height: 112,
    position: "absolute",
  },
  previousPicturesContainer: {
    top: 612,
    left: 3,
    width: 374,
    height: 112,
    position: "absolute",
  },
  buttonRectangle: {
    height: "99.65%",
    bottom: "0.35%",
    backgroundColor: Color.gold_100,
    right: "0%",
    borderRadius: Border.br_6xl,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonLabel: {
    height: "77.85%",
    width: "66.96%",
    top: "22.15%",
    left: "22.08%",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  buttonSubContainer: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  buttonContainer: {
    height: "6.14%",
    width: "57.97%",
    top: "53.67%",
    right: "21%",
    bottom: "40.19%",
    left: "21.03%",
    position: "absolute",
  },
  takeAPicture: {
    width: "19.94%",
    left: "0%",
  },
  seeDiagnosisLabel: {
    width: "22.79%",
    left: "36.47%",
  },
  getRemediesLabel: {
    width: "37.89%",
    left: "62.11%",
  },
  contentLabelsContainer: {
    height: "25.77%",
    width: "93.94%",
    top: "62.36%",
    right: "1.8%",
    bottom: "11.87%",
    left: "4.26%",
    position: "absolute",
  },
  contentIconsContainer: {
    top: 15,
    left: 20,
    width: 303,
    height: 68,
    position: "absolute",
  },
  contentRectangleIcon: {
    top: -2,
    left: -2,
    width: 360,
    height: 186,
  },
  contentContainer: {
    height: "21.09%",
    width: "90.26%",
    top: "27.73%",
    right: "6.15%",
    bottom: "51.18%",
    left: "3.59%",
    position: "absolute",
  },
  heading: {
    fontSize: FontSize.size_3xl,
    fontStyle: "italic",
    fontFamily: FontFamily.rosarioItalic,
    height: "100%",
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  virusIcon: {
    top: 31,
    left: 158,
    width: 20,
    height: 21,
    position: "absolute",
  },
  headingIconContainer: {
    height: "7.34%",
    width: "53.38%",
    top: "14.57%",
    right: "38.41%",
    bottom: "78.09%",
    left: "8.21%",
    position: "absolute",
  },
  sanjulaDiseaseHomeContain: {
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

export default SanjulaDiseaseHomeContain;
