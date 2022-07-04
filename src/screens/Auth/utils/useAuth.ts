export const useAuth = () => {
  const auth = async () => {
    // @ts-ignore
    await window.wallet.requestSignIn()
  }

  return { auth }
}