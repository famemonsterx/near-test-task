import { Switch } from "react-router-dom"
import { PublicRoute } from "./PublicRoute";
import { FrontUrls } from "../constants";
import { Auth, Home } from "../screens";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Switch>
      <PublicRoute path={FrontUrls.auth} restricted={true} component={Auth} />
      <PrivateRoute path={FrontUrls.index} component={Home} exact />
    </Switch>
  )
}