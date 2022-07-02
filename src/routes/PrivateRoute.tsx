import { Redirect, Route, RouteProps } from "react-router-dom";
import { FrontUrls, STORAGE_TOKEN } from "../constants";

export const PrivateRoute = (props: RouteProps) => {
  const isNotAuth = !localStorage.getItem(STORAGE_TOKEN)
  if (isNotAuth) {
    return (
      <Redirect to={FrontUrls.auth} />
    )
  }
  return (
    <Route {...props} />
  )
}