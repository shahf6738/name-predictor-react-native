import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LengthScreen from "../screens/LengthScreen";
import ColumnSelectionScreen from "../screens/ColumnSelectionScreen";
import RowSelectionScreen from "../screens/RowSelectionScreen";
import ResultScreen from "../screens/ResultScreen";

import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        <Stack.Screen
          name="Length"
          component={LengthScreen}
          options={{ headerBackVisible: false }}
        />

        <Stack.Screen
          name="Columns"
          component={ColumnSelectionScreen}
          options={{ headerBackVisible: false }}
        />

        <Stack.Screen
          name="Rows"
          component={RowSelectionScreen}
          options={{ headerBackVisible: false }}
        />

        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
