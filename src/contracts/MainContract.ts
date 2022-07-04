import { Contract } from "near-api-js";
import { Market, ViewMarket } from "../models";

export interface MainContract extends Contract {
  markets: ({}) => Promise<Market[]>
  view_market: ({ market_id }: { market_id: number }) => Promise<ViewMarket>
}