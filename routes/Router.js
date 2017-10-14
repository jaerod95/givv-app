import { StackNavigator } from "react-navigation";

import HomeView from "../views/HomeView/HomeView";
import SelectionView from "../views/SelectionView/SelectionView";
import RootViewAdmin from "../views/RootViewAdmin/RootViewAdmin";
import RootViewBusiness from "../views/RootViewBusiness/RootViewBusiness";
import RootViewEmployee from "../views/RootViewEmployee/RootViewEmployee";

import CharityHome from "../views/Charity/CharityHome";

var charity = StackNavigator({
  Home: { screen: CharityHome }
});

var routes = StackNavigator(
  {
    Home: { screen: HomeView }, // login screen
    Selection: { screen: SelectionView }
    Charity: { screen: charity }
    RootViewAdmin: { screen: RootViewAdmin },
    RootViewBusiness: { screen: RootViewBusiness },
    RootViewEmployee: { screen: RootViewEmployee }
  },
  { headerMode: "none" }
);

export default routes;
