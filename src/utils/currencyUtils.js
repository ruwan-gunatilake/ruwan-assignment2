import {CROSS_VIA_MATRIX, DIRECT_RATE_LIST, MATRIX_VALUES, SUPPORTED_CURRENCY_LIST} from "./mockData";

/**
 * @param fromCurrency
 * @param toCurrency
 * @returns {{}|{rate: number}|{rate: (number|*)}}
 */
export const getRateData = (fromCurrency, toCurrency) => {
  if (!isSupported(fromCurrency, toCurrency)) {
    return {}
  }
  //only supported currencies handled below
  const currencyPair = fromCurrency + toCurrency
  //when the selected currency types are equal
  if (fromCurrency == toCurrency) {
    return {"rate": 1}
  }

  const rate = getDirectRate(currencyPair)
  if (rate) {
    return {"rate": rate.value}
  }

  const matrixValue = getCrossMatrixValue(currencyPair)
  if (matrixValue == MATRIX_VALUES.INVERT) {// get the rate by inverting the direct rates
    const oppositeRate = getDirectRate(toCurrency + fromCurrency)// see how how currency codes are concatenated
    if (oppositeRate) {
      return {"rate": (1 / oppositeRate.value)}
    }
  } else {//convert the rate through different currency provide by the matrix
    //convert from currency to intermediate currency suggested by the matrix
    const fromCurrencyToThirdCurrencyRate = getRateData(fromCurrency, matrixValue)
    //convert from intermediate currency suggested by the matrix to to currency
    const thirdCurrencyTotoCurrencyRate = getRateData(matrixValue, toCurrency)
    return {"rate": (fromCurrencyToThirdCurrencyRate.rate * thirdCurrencyTotoCurrencyRate.rate)}
  }
  return {}
}

const isSupported = (fromCurrency, toCurrency) => {
  if (!SUPPORTED_CURRENCY_LIST.includes(fromCurrency) || !SUPPORTED_CURRENCY_LIST.includes(toCurrency)) {
    return false
  }
  return true
}

const getDirectRate = (curencyPair) => {
  const rates = DIRECT_RATE_LIST.filter(rate => rate.pair == curencyPair)//expected 1 or zero items
  return rates.length == 1 ? rates[0] : null
}

const getCrossMatrixValue = (curencyPair) => {
  const matrixValue = CROSS_VIA_MATRIX.filter(item => item.pair == curencyPair)//expected 1 or zero items
  return matrixValue.length == 1 ? matrixValue[0].value : MATRIX_VALUES.DEFAULT
}

/**
 *
 * @param currencyList
 * @param currencyId
 * @param number
 * @returns {string}
 */
export function displayCurrency({
  currencyList = [],
  currencyId = "AUD",
  number = 0
}) {
  const displayedCurrency = currencyName({ currencyList, currencyId });
  const formatting = new Intl.NumberFormat().format(number);

  return `${formatting} ${displayedCurrency}`;
}

/**
 *
 * @param currencyList
 * @param currencyId
 * @returns {*}
 */
export function currencyName({ currencyList = [], currencyId = "EUR" }) {
  return currencyList.find(currency => currency.id === currencyId).currencyName;
}

/**
 *
 * @param amount
 * @param data
 * @param mode
 * @returns {number}
 */
export const convert =({ amount = 1, state = {}, mode ='from' }) => {
  const rate = state.data;
  let result;

  if (mode === "from") {
    result = amount * rate;
  }

  if (mode === "to") {
    result = amount * (1 / rate);
  }
  if(state.convertTo== "JPY") {
    return Math.round(result)
  }
  return roundToTwoDecimals(result); //rounding to 2 nearest decimal places
}

export const roundToTwoDecimals=(value)=> {
  return Math.round(value * 100) / 100
}
