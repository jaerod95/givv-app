import { StackNavigator } from "react-navigation";

import HomeView from "../views/HomeView/HomeView";
// import SelectionView from "../views/SelectionView/SelectionView";
// import RootViewAdmin from "../views/RootViewAdmin/RootViewAdmin";
// import RootViewBusiness from "../views/RootViewBusiness/RootViewBusiness";
// import RootViewEmployee from "../views/RootViewEmployee/RootViewEmployee";

export const SimpleApp = StackNavigator({
  Home: { screen: HomeView } // login screen
  // Selection: { screen: SelectionView },
  // RootViewAdmin: { screen: RootViewAdmin },
  // RootViewBusiness: { screen: RootViewBusiness },
  // RootViewEmployee: { screen: RootViewEmployee }
});

import route from "./route";
