import { useName } from "./hooks/useName";

export const Home = () => {
  const { name } = useName()
  return (
    <div>
      {name}
    </div>
  )
}