// @flow
import { DrawerNavigator } from "react-navigation";

import ProfileView from "../views/RootViewEmployee/ProfileView/ProfileView";

const routes = DrawerNavigator({
  Profile: { screen: ProfileView }
});

export default routes;
