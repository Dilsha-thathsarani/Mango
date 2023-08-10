import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import FormContainer3 from "../components/FormContainer3";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DilshaMarketAnalysis4 = () => {
  return (
    <View style={styles.dilshaMarketAnalysis}>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-21.png")}
      />
      <Image
        style={[styles.dilshaMarketAnalysisChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <FormContainer3
        dimensionCode={require("../assets/download-2-2.png")}
        productCode={require("../assets/download-3-12.png")}
        propColor="rgba(255, 255, 255, 0.74)"
      />
      <Image
        style={[styles.coronavirusIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/coronavirus.png")}
      />
      <Image
        style={[styles.arrowBackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-back.png")}
      />
      <View style={styles.marketAnalysisPlanWrapper}>
        <Text style={[styles.marketAnalysisPlan, styles.goFlexBox]}>
          Market Analysis Plan
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.premium}>Premium</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </View>
      <View style={[styles.dilshaMarketAnalysisItem, styles.dilshaPosition]} />
      <View
        style={[styles.dilshaMarketAnalysisInner, styles.groupWrapperShadowBox]}
      />
      <View style={[styles.varietyWrapper, styles.wrapperPosition]}>
        <Text style={[styles.marketAnalysisPlan, styles.goFlexBox]}>
          Variety
        </Text>
      </View>
      <View style={[styles.monthWrapper, styles.wrapperPosition]}>
        <Text style={[styles.marketAnalysisPlan, styles.goFlexBox]}>Month</Text>
      </View>
      <View style={[styles.quantityWrapper, styles.wrapperPosition]}>
        <Text style={[styles.marketAnalysisPlan, styles.goFlexBox]}>
          Quantity
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.dilshaChildLayout]} />
      <View style={[styles.selectVarietyWrapper, styles.enterQuantityLayout]}>
        <Text style={[styles.selectVariety, styles.selectTypo]}>
          Select variety
        </Text>
      </View>
      <View
        style={[styles.dilshaMarketAnalysisChild1, styles.dilshaChildLayout]}
      />
      <Text style={[styles.selectDate, styles.selectTypo]}>Select date</Text>
      <View
        style={[styles.dilshaMarketAnalysisChild2, styles.dilshaChildLayout]}
      />
      <Text style={[styles.enterQuantity, styles.selectTypo]}>
        Enter quantity
      </Text>
      <View style={styles.groupView}>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Text style={[styles.go, styles.goFlexBox]}>Go</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-89.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector26.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  goFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    position: "absolute",
  },
  dilshaPosition: {
    width: 364,
    left: 13,
    position: "absolute",
  },
  groupWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  wrapperPosition: {
    left: "8.21%",
    right: "64.62%",
    width: "27.18%",
    height: "3.2%",
    position: "absolute",
  },
  dilshaChildLayout: {
    height: 47,
    width: 321,
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_mini,
    left: 32,
    position: "absolute",
  },
  enterQuantityLayout: {
    left: "15.9%",
    width: "52.82%",
    height: "3.2%",
  },
  selectTypo: {
    fontFamily: FontFamily.workSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_mid,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  logo2Icon: {
    top: 41,
    left: 138,
    width: 90,
    height: 62,
    position: "absolute",
  },
  dilshaMarketAnalysisChild: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
  },
  arrowBackIcon: {
    top: 21,
    left: 28,
  },
  marketAnalysisPlan: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  marketAnalysisPlanWrapper: {
    height: "2.37%",
    width: "66.15%",
    top: "13.86%",
    right: "16.92%",
    bottom: "83.77%",
    left: "16.92%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkolivegreen,
    width: 128,
  },
  premium: {
    width: "66.9%",
    top: "11.54%",
    left: "33.1%",
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    color: Color.gold_100,
    letterSpacing: -0.3,
    height: "76.92%",
    textAlign: "left",
    fontFamily: FontFamily.workSansMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupItem: {
    width: "13.79%",
    top: "7.69%",
    right: "75.86%",
    bottom: "15.38%",
    left: "10.34%",
    height: "76.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 28,
    left: 220,
    width: 145,
  },
  dilshaMarketAnalysisItem: {
    top: 175,
    height: 494,
  },
  dilshaMarketAnalysisInner: {
    top: 163,
    height: 532,
    width: 364,
    left: 13,
    position: "absolute",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  varietyWrapper: {
    top: "21.92%",
    bottom: "74.88%",
  },
  monthWrapper: {
    top: "35.66%",
    bottom: "61.14%",
  },
  quantityWrapper: {
    top: "51.9%",
    bottom: "44.91%",
  },
  rectangleView: {
    top: 226,
  },
  selectVariety: {
    left: "0%",
    top: "0%",
    height: "100%",
    fontWeight: "300",
    fontSize: FontSize.size_mid,
    width: "100%",
  },
  selectVarietyWrapper: {
    top: "28.32%",
    right: "31.28%",
    bottom: "68.48%",
    position: "absolute",
  },
  dilshaMarketAnalysisChild1: {
    top: 355,
  },
  selectDate: {
    top: "43.72%",
    left: "23.85%",
    width: "52.82%",
    fontWeight: "300",
    fontSize: FontSize.size_mid,
    height: "3.2%",
  },
  dilshaMarketAnalysisChild2: {
    top: 499,
  },
  enterQuantity: {
    top: "60.43%",
    left: "15.9%",
    width: "52.82%",
    height: "3.2%",
  },
  groupInner: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.gold_100,
  },
  go: {
    height: "77.78%",
    width: "38.95%",
    top: "11.11%",
    left: "33.72%",
    fontSize: FontSize.size_13xl,
    letterSpacing: -0.6,
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
  },
  groupWrapper: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupView: {
    height: "5.33%",
    width: "44.1%",
    top: "68.96%",
    right: "8.72%",
    bottom: "25.71%",
    left: "47.18%",
    position: "absolute",
  },
  groupIcon: {
    height: "2.61%",
    width: "5.13%",
    top: "43.48%",
    right: "80.51%",
    bottom: "53.91%",
    left: "14.36%",
  },
  vectorIcon: {
    height: "0.95%",
    width: "3.59%",
    top: "29.38%",
    right: "17.44%",
    bottom: "69.67%",
    left: "78.97%",
  },
  dilshaMarketAnalysis: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
});

export default DilshaMarketAnalysis4;
