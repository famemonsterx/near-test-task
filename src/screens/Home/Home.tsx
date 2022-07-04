import { useHome } from "./hooks/useHome";
import './style.scss'
import { MarketsSelect } from "./components";
import { ViewMarketTable } from "./components/ViewMarketTable/ViewMarketTable";

export const Home = () => {
  const { name, balance, markets, handleChange, viewMarkets, signOut } = useHome()
  return (
    <div className={'home'}>
      <div className={'home__user'}>
        <h3>User: {name}</h3>
        <button onClick={signOut}>Sign out</button>
      </div>
      <h4>Balance: </h4>
      <ul>
        {Boolean(balance) && Object.entries(balance)?.map(item => (
          <li key={item[0]}>{item[0]}: {item[1]}</li>
        ))}
      </ul>
      <div className={'home__select'}>
        <MarketsSelect markets={markets} onChange={handleChange} />
      </div>
      <div className={'home__table'}>
        <ViewMarketTable data={viewMarkets?.ask_orders} title={'Ask orders'} />
        <ViewMarketTable data={viewMarkets?.bid_orders} title={'Bid orders'} />
      </div>
    </div>
  )
}