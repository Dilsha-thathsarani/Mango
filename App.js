const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import DilshaPremiumScreen from "./screens/DilshaPremiumScreen";
import Yasantha14Tips from "./screens/Yasantha14Tips";
import DilshaPremium from "./screens/DilshaPremium";
import DilshaPremiumPay from "./screens/DilshaPremiumPay";
import DilshaMarketAnalysis4 from "./screens/DilshaMarketAnalysis4";
import DilshaPremiumScreen1 from "./screens/DilshaPremiumScreen1";
import DilshaMarketAnalysis3 from "./screens/DilshaMarketAnalysis3";
import DilshaMarketAnalysis2 from "./screens/DilshaMarketAnalysis2";
import DilshaMarketAnalysis1 from "./screens/DilshaMarketAnalysis1";
import DilshaMarketAnalysis from "./screens/DilshaMarketAnalysis";
import Menu from "./screens/Menu";
import SanjulaDiseaseHomeContain from "./screens/SanjulaDiseaseHomeContain";
import FertilizationHome from "./screens/FertilizationHome";
import PreviousNutritionsRecords from "./screens/PreviousNutritionsRecords";
import MonitorNutritions from "./screens/MonitorNutritions";
import GetSuggestions from "./screens/GetSuggestions";
import CheckFertilizer from "./screens/CheckFertilizer";
import FertilizerTips from "./screens/FertilizerTips";
import SanjulaScanLeave from "./screens/SanjulaScanLeave";
import SanjulaCompare from "./screens/SanjulaCompare";
import SanjulaPreviousPicture from "./screens/SanjulaPreviousPicture";
import SanjulaDiseaseIdentify from "./screens/SanjulaDiseaseIdentify";
import SanjulaGetRemedies from "./screens/SanjulaGetRemedies";
import DilshaMangoVariety from "./screens/DilshaMangoVariety";
import DilshaTips from "./screens/DilshaTips";
import Yasantha14Veriety from "./screens/Yasantha14Veriety";
import Yasantha14Bud from "./screens/Yasantha14Bud";
import Yasantha14Cam from "./screens/Yasantha14Cam";
import Yasantha14Cam2 from "./screens/Yasantha14Cam2";
import Yasantha14Cam3 from "./screens/Yasantha14Cam3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Rosario-LightItalic": require("./assets/fonts/Rosario-LightItalic.ttf"),
    "WorkSans-Light": require("./assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-LightItalic": require("./assets/fonts/WorkSans-LightItalic.ttf"),
    "WorkSans-SemiBoldItalic": require("./assets/fonts/WorkSans-SemiBoldItalic.ttf"),
    "Waterfall-Regular": require("./assets/fonts/Waterfall-Regular.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="DilshaPremiumScreen1"
              component={DilshaPremiumScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Tips"
              component={Yasantha14Tips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaPremium"
              component={DilshaPremium}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaPremiumPay"
              component={DilshaPremiumPay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMarketAnalysis"
              component={DilshaMarketAnalysis4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaPremiumScreen"
              component={DilshaPremiumScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMarketAnalysis1"
              component={DilshaMarketAnalysis3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMarketAnalysis2"
              component={DilshaMarketAnalysis2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMarketAnalysis3"
              component={DilshaMarketAnalysis1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMarketAnalysis4"
              component={DilshaMarketAnalysis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaDiseaseHomeContainer"
              component={SanjulaDiseaseHomeContain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FertilizationHome"
              component={FertilizationHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PreviousNutritionsRecords"
              component={PreviousNutritionsRecords}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MonitorNutritions"
              component={MonitorNutritions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GetSuggestions"
              component={GetSuggestions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckFertilizer"
              component={CheckFertilizer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FertilizerTips"
              component={FertilizerTips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaScanLeave"
              component={SanjulaScanLeave}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaCompare"
              component={SanjulaCompare}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaPreviousPicture"
              component={SanjulaPreviousPicture}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaDiseaseIdentify"
              component={SanjulaDiseaseIdentify}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SanjulaGetRemedies"
              component={SanjulaGetRemedies}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaMangoVariety"
              component={DilshaMangoVariety}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DilshaTips"
              component={DilshaTips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Veriety"
              component={Yasantha14Veriety}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Bud"
              component={Yasantha14Bud}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Cam"
              component={Yasantha14Cam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Cam2"
              component={Yasantha14Cam2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Yasantha14Cam3"
              component={Yasantha14Cam3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
