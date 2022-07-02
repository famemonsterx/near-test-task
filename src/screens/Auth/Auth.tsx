import './Auth.scss'
import { useAuth } from "./utils/useAuth";

export const Auth = () => {
  const { auth } = useAuth()
  return (
    <div className={'auth'}>
      <h1>Sign In</h1>
      <button onClick={auth}>
        Sign in
      </button>
    </div>
  )
}