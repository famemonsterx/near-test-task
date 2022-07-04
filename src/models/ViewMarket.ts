export type Order = {
  price: number,
  quantity: number
}
export type ViewMarket = {
  ask_orders: Order[]
  bid_orders: Order[]
}