import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  return (
    <RootSiblingParent>
      <Stack initialRouteName="home">
        <Stack.Screen name="home" />
      </Stack>
    </RootSiblingParent>
  );
};

export default Layout;
