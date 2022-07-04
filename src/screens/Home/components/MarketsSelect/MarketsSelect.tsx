import { Market } from "../../../../models";
import { Select } from "../../../../components";

type ComponentProps = {
  markets: Market[] | null
  onChange: (id?: number | string) => void
}

export const MarketsSelect = ({
  markets, onChange
}: ComponentProps) => {
  const options = markets?.map(item => ({ value: item.id, label: `${item.base.ticker} / ${item.quote.ticker}` }))
  return (
    <Select options={options} onChange={onChange} />
  )
}