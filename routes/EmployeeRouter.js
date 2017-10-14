import { StackNavigator } from "react-navigation";

import HomeView from "../views/HomeView/HomeView";

const routes = StackNavigator({
  Home: { screen: HomeView } // login screen
});

export default routes;
