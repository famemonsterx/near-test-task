import { Redirect, Route, RouteProps } from "react-router-dom";
import { APP_NAME, FrontUrls, STORAGE_TOKEN } from "../constants";

type ComponentProps = {
  restricted?: boolean
} & RouteProps

export const PublicRoute = ({
  restricted, ...routeProps
}: ComponentProps) => {
  const isAuth = !!localStorage.getItem(STORAGE_TOKEN)
  if (restricted && isAuth) {
    return (
      <Redirect to={FrontUrls.index} />
    )
  }
  return <Route {...routeProps} />
}