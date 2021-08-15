import React from "react";

import { SelectCurrency } from "./styles";

export const Dropdown = ({ value, onChange, currencyList = [] }) => (
  <SelectCurrency value={value} onChange={onChange} name="currencyList">
    {currencyList.map(currency => (
      <option key={currency.id} value={currency.id}>
        {currency.currencyName}
      </option>
    ))}
  </SelectCurrency>
);
