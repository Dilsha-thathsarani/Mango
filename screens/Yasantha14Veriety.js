import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer4 from "../components/FormContainer4";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Yasantha14Veriety = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yasantha14Veriety}>
      <Image
        style={[styles.logo2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logo-2.png")}
      />
      <Text style={styles.selectYourVariety}>{`Select your
Variety`}</Text>
      <View style={[styles.sproutWrapper, styles.sproutLayout]}>
        <Image
          style={[styles.sproutIcon, styles.sproutLayout]}
          contentFit="cover"
          source={require("../assets/sprout.png")}
        />
      </View>
      <Image
        style={[styles.yasantha14VerietyChild, styles.bgIconLayout]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <FormContainer4
        dimensionCode={require("../assets/download-2-22.png")}
        dimensionCodeImageUrl={require("../assets/download-3-12.png")}
        onVectorPress={() => navigation.navigate("Menu")}
        onDownload1Press={() => navigation.navigate("FertilizationHome")}
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
      <Image
        style={styles.yasantha14VerietyItem}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Text style={[styles.purposeOfCrop, styles.cropTypo]}>
        Purpose of crop
      </Text>
      <View style={styles.inputtext}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.email, styles.emailPosition]}>City</Text>
        <Text style={styles.show}>Show</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
          <Text style={[styles.harvest, styles.harvestTypo]}>Harvest</Text>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
          <Text style={[styles.uniqueTaste, styles.harvestTypo]}>
            Unique Taste
          </Text>
        </View>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
          <Text style={[styles.uniqueTaste, styles.harvestTypo]}>
            Size of fruit
          </Text>
        </View>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
          <Text style={[styles.uniqueTaste, styles.harvestTypo]}>
            Disease resistance
          </Text>
        </View>
      </View>
      <View style={[styles.segmentedcontrols, styles.segmentedcontrolsFlexBox]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={styles.segmentShadowBox}>
            <View style={styles.tabpatternhugContentLine}>
              <View style={styles.surface}>
                <View style={styles.content1}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={styles.tab}>Personal</Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke.png")}
            />
          </View>
          <View style={styles.segment1}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab1, styles.tabFlexBox]}>
                      Commercial
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lineSpaceBlock}>
            <Image
              style={styles.line10Stroke1}
              contentFit="cover"
              source={require("../assets/line-10-stroke1.png")}
            />
          </View>
          <View style={styles.segment1}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab1, styles.tabFlexBox]}>Export</Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 4
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 5
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 6
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 7
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame}>
        <Text style={[styles.pleaseProvideThe, styles.email1Clr]}>
          Please provide the characteristics you desire in your mango plant, and
          we will analyze your requirements to recommend the most suitable
          variety.
        </Text>
      </View>
      <View
        style={[styles.segmentedcontrols1, styles.segmentedcontrolsFlexBox]}
      >
        <View style={styles.contentFlexBox}>
          <View style={styles.segmentShadowBox}>
            <View style={styles.tabpatternhugContentLine}>
              <View style={styles.surface}>
                <View style={styles.content1}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={styles.tab}>Personal</Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke.png")}
            />
          </View>
          <View style={styles.segment1}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab1, styles.tabFlexBox]}>
                      Commercial
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lineSpaceBlock}>
            <Image
              style={styles.line10Stroke7}
              contentFit="cover"
              source={require("../assets/line-10-stroke1.png")}
            />
          </View>
          <View style={styles.segment1}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab1, styles.tabFlexBox]}>Export</Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 4
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 5
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 6
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, styles.lineSpaceBlock]}>
            <Image
              style={styles.line10Stroke}
              contentFit="cover"
              source={require("../assets/line-10-stroke2.png")}
            />
          </View>
          <View style={styles.segment3}>
            <View style={styles.tabpatternhugContentLine1}>
              <View style={styles.surface1}>
                <View style={styles.content3}>
                  <View style={[styles.lineTop, styles.lineSpaceBlock1]}>
                    <View style={styles.customHeightFix} />
                  </View>
                  <View style={[styles.elements1, styles.elementsSpaceBlock]}>
                    <View style={styles.iconplaceholder}>
                      <View style={[styles.content2, styles.iconLayout]} />
                    </View>
                    <Text style={[styles.tab3, styles.tabFlexBox]}>
                      Label 7
                    </Text>
                  </View>
                  <View style={[styles.lineBottom, styles.elementsSpaceBlock]}>
                    <View style={styles.customHeightFix} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.inputtext1, styles.inputtext1Position]}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={[styles.email1, styles.email1Clr]}>City</Text>
        <Text style={styles.show}>Show</Text>
      </View>
      <Text style={[styles.requiredFeatures, styles.cropTypo]}>
        Required features
      </Text>
      <Text style={[styles.cropLocation, styles.cropTypo]}>Crop location</Text>
      <Image
        style={[styles.image11Icon, styles.inputtext1Position]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 21,
    position: "absolute",
  },
  sproutLayout: {
    height: 24,
    width: 20,
    position: "absolute",
  },
  bgIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cropTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    left: 21,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  emailPosition: {
    left: 16,
    top: "50%",
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  frameFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  harvestTypo: {
    marginLeft: 10,
    textAlign: "center",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
  },
  segmentedcontrolsFlexBox: {
    height: 32,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  contentFlexBox: {
    padding: Padding.p_11xs,
    backgroundColor: Color.fillColorsLightTertiary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    flex: 1,
  },
  lineSpaceBlock1: {
    opacity: 0,
    paddingHorizontal: 0,
    backgroundColor: Color.black,
    flexDirection: "row",
    display: "none",
  },
  elementsSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  lineSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    width: 1,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tabFlexBox: {
    height: 16,
    display: "flex",
    fontWeight: "600",
    marginTop: 8,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "stretch",
    color: Color.black,
  },
  email1Clr: {
    color: Color.gray04,
    textAlign: "left",
  },
  inputtext1Position: {
    top: 435,
    height: 46,
    position: "absolute",
  },
  logo2Icon: {
    left: 138,
    width: 114,
    height: 95,
  },
  selectYourVariety: {
    height: "7.35%",
    width: "75.9%",
    top: "15.28%",
    left: "4.87%",
    fontSize: FontSize.size_11xl,
    fontStyle: "italic",
    fontFamily: FontFamily.rosarioItalic,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  sproutIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
  },
  sproutWrapper: {
    top: 170,
    left: 268,
  },
  yasantha14VerietyChild: {
    height: "3.91%",
    width: "7.61%",
    top: "2.49%",
    right: "2.56%",
    bottom: "93.6%",
    left: "89.82%",
    maxHeight: "100%",
  },
  coronavirusIcon: {
    top: 772,
    left: 43,
    position: "absolute",
  },
  arrowBackIcon: {
    left: 28,
    top: 21,
    position: "absolute",
  },
  yasantha14VerietyItem: {
    top: 288,
    left: 5,
    borderRadius: Border.br_6xl,
    width: 381,
    height: 168,
    display: "none",
    position: "absolute",
  },
  purposeOfCrop: {
    top: 324,
  },
  bgIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxHeight: "100%",
    width: "100%",
  },
  email: {
    color: "rgba(189, 189, 189, 0.1)",
    textAlign: "left",
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    top: "50%",
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    display: "none",
    position: "absolute",
  },
  inputtext: {
    top: 492,
    right: 112,
    left: 19,
    height: 46,
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderWidth: 2,
    height: 20,
    borderRadius: Border.br_7xs,
    width: 20,
  },
  harvest: {
    color: "#54595e",
  },
  frameGroup: {
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  uniqueTaste: {
    color: Color.slategray,
  },
  frameContainer: {
    alignItems: "center",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  frameView: {
    alignItems: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  frameParent: {
    top: 523,
    left: 15,
    width: 356,
    position: "absolute",
  },
  customHeightFix: {
    height: 0,
    width: 20,
    overflow: "hidden",
  },
  lineTop: {
    paddingVertical: Padding.p_11xs_5,
    alignSelf: "stretch",
  },
  content2: {
    backgroundColor: Color.labelColorsLCLTertiary,
  },
  iconplaceholder: {
    display: "none",
    overflow: "hidden",
  },
  tab: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    marginTop: 8,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultSizeSubheadlineStrong_size,
    textAlign: "center",
    alignSelf: "stretch",
    color: Color.black,
  },
  elements: {
    justifyContent: "center",
    flex: 1,
  },
  lineBottom: {
    height: 2,
    paddingVertical: Padding.p_12xs,
    opacity: 0,
    paddingHorizontal: 0,
    backgroundColor: Color.black,
    flexDirection: "row",
    display: "none",
  },
  content1: {
    padding: Padding.p_9xs,
    justifyContent: "center",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  surface: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  tabpatternhugContentLine: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  segmentShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  line10Stroke: {
    width: 15,
    alignSelf: "stretch",
    maxHeight: "100%",
  },
  line: {
    display: "none",
  },
  tab1: {
    fontFamily: FontFamily.interSemiBold,
  },
  elements1: {
    justifyContent: "center",
  },
  content3: {
    padding: Padding.p_8xs,
    justifyContent: "center",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  surface1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  tabpatternhugContentLine1: {
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  segment1: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  line10Stroke1: {
    width: 12,
    alignSelf: "stretch",
    maxHeight: "100%",
  },
  tab3: {
    fontFamily: FontFamily.defaultSizeSubheadlineStrong,
  },
  segment3: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    flex: 1,
  },
  content: {
    display: "none",
  },
  segmentedcontrols: {
    top: 415,
    left: 10,
    justifyContent: "center",
  },
  pleaseProvideThe: {
    fontSize: FontSize.uI14Regular_size,
    fontFamily: FontFamily.uI14Regular,
    alignSelf: "stretch",
  },
  frame: {
    top: 227,
    left: 20,
    width: 343,
    position: "absolute",
    overflow: "hidden",
  },
  line10Stroke7: {
    width: 1,
    alignSelf: "stretch",
    maxHeight: "100%",
  },
  segmentedcontrols1: {
    top: 358,
    left: 12,
    justifyContent: "center",
  },
  email1: {
    left: 16,
    top: "50%",
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    position: "absolute",
  },
  inputtext1: {
    right: 110,
    left: 21,
    top: 435,
  },
  requiredFeatures: {
    top: 493,
  },
  cropLocation: {
    top: 411,
  },
  image11Icon: {
    left: 311,
    width: 46,
  },
  yasantha14Veriety: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    borderRadius: Border.br_21xl,
  },
});

export default Yasantha14Veriety;
