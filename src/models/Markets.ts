type Ticker = {
  ticker: string
  decimal: number
  address: string
}

export type Market = {
  id: number
  fee: number
  base: Ticker
  quote: Ticker
}