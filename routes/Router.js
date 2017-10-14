import { StackNavigator } from "react-navigation";

import HomeView from "../views/HomeView/HomeView";
import SelectionView from "../views/SelectionView/SelectionView";

import CharityHome from "../views/Charity/CharityHome";
import CharityRegisterOne from "../views/Charity/CharityRegisterOne";
import CharityRegisterTwo from "../views/Charity/CharityRegisterTwo";

import BusinessHome from "../views/Business/BusinessHome";

import EmployeeHome from "../views/Employee/EmployeeHome";

var charity = StackNavigator(
  {
    Home: { screen: CharityHome, navigationOptions: { title: "Dashboard" } },
    RegisterOne: { screen: CharityRegisterOne },
    RegisterTwo: { screen: CharityRegisterTwo }
  },
  { headerMode: "none" }
);

var business = StackNavigator(
  {
    Home: { screen: BusinessHome, navigationOptions: { title: "Dashboard" } },
    RegisterOne: { screen: CharityRegisterOne },
    RegisterTwo: { screen: CharityRegisterTwo }
  },
  { headerMode: "none" }
);

var employee = StackNavigator(
  {
    Home: { screen: EmployeeHome, navigationOptions: { title: "Dashboard" } },
    RegisterOne: { screen: CharityRegisterOne },
    RegisterTwo: { screen: CharityRegisterTwo }
  },
  { headerMode: "none" }
);

var routes = StackNavigator(
  {
    Home: { screen: HomeView }, // login screen
    Selection: { screen: SelectionView },
    Charity: { screen: charity },
    Business: { screen: business },
    Employee: { screen: employee }
  },
  { headerMode: "none" }
);

export default routes;
