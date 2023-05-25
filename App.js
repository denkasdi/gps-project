import HomeScreen from "./screens/HomeScreen";
import Main1 from "./screens/Main1";
import QR from "./screens/QR";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title:"Welcome to Attendancerr"}}
        />
        <Stack.Screen 
        name="Login"
        component={Main1}
        options={{title:"Login"}}
        />
        <Stack.Screen 
        name="QR"
        component={QR}
        options={{title:"Login"}}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}