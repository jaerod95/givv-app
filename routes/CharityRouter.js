import { StackNavigator } from "react-navigation";

import CharityDashboard from "../views/Charity/CharityDashboard";

var routes = StackNavigator({
  Home: { screen: CharityDashboard, navigationOptions: { title: "DASHBOARD" } } // login screen
});

export default routes;
