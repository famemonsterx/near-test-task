import './style.scss'
import { Order } from "../../../../models/ViewMarket";
import { utils } from "near-api-js";

type ComponentProps = {
  data?: Order[] | null
  title: string
}

export const ViewMarketTable = ({
  data, title
}: ComponentProps) => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>
          {title}
        </th>
      </tr>
      <tr>
        <th>
          Price
        </th>
        <th>
          Quantity
        </th>
      </tr>
      </thead>
      <tbody>
      {data?.map(item => (
        <tr>
          <th>{utils.format.parseNearAmount(`${item.price}`)}</th>
          <th>{utils.format.parseNearAmount(`${item.quantity}`)}</th>
        </tr>
      ))}
      </tbody>
    </table>
  )
}