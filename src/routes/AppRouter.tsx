import { Switch } from "react-router-dom"
import { PublicRoute } from "./PublicRoute";
import { FrontUrls } from "../constants";
import { Auth, Home } from "../screens";
import { PrivateRoute } from "./PrivateRoute";
import { useWalletConnect } from "../utils";

export const AppRouter = () => {
  //const wallet = useWalletConnect()
  return (
    <Switch>
      <PublicRoute path={FrontUrls.auth} restricted={true} component={Auth} />
      <PrivateRoute path={FrontUrls.index} component={Home} exact />
    </Switch>
  )
}