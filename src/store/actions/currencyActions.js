import {
  FETCH_CURRENCY,
  HANDEL_ERROR,
  FROM_CHANGE_INPUT,
  TO_CHANGE_INPUT,
  FROM_CURRENCY_CHANGE,
  TO_CURRENCY_CHANGE
} from "./contants";
import {getRateData} from "../../utils/currencyUtils";

/**
 * @description Action responsible for error handling
 * @param payload
 * @returns {{type: string, payload: *}}
 */
const handleError = payload => ({
  type: HANDEL_ERROR,
  payload
});


/**
 *
 * @param fromCurrency
 * @param toCurrency
 * @returns {Promise}
 */
export function getRateRequest(fromCurrency, toCurrency) {
  return new Promise((resolve, reject) => {
    resolve(getRateData(fromCurrency,toCurrency))
  });
}


/**
 *
 * @param fromCurrency
 * @param toCurrency
 * @returns {Function}
 */
export const getRate = (fromCurrency, toCurrency) => async dispatch => {
  try {
    const { rate } = await getRateRequest(fromCurrency, toCurrency);
    dispatch({
      type: FETCH_CURRENCY,
      payload: rate
    });
  } catch (error) {
    dispatch(handleError(error));
  }
};

export const fromChangeInput = payload => {
  return {
    type: FROM_CHANGE_INPUT,
    payload
  };
};

export const toChangeInput = payload => {
  return {
    type: TO_CHANGE_INPUT,
    payload
  };
};

/**
 *
 * @param payload
 * @returns {Function}
 */
export const fromCurrencyChange = payload => (dispatch, getState) => {
  getRateRequest(payload, getState().currency.convertTo)
    .then(res => {
      dispatch({
        type: FETCH_CURRENCY,
        payload: res.rate
      });

      dispatch({
        type: FROM_CURRENCY_CHANGE,
        payload: payload
      });

      dispatch({
        type: FROM_CHANGE_INPUT,
        payload: getState().currency.from
      });
    })
    .catch(error => {
      dispatch(handleError(error));
    });
};

/**
 *
 * @param payload
 * @returns {Function}
 */
export const toCurrencyChange = payload => (dispatch, getState) => {
  getRateRequest(getState().currency.convertFrom, payload)
    .then(res => {
      dispatch({
        type: FETCH_CURRENCY,
        payload: res.rate
      });

      dispatch({
        type: TO_CURRENCY_CHANGE,
        payload: payload
      });

      dispatch({
        type: FROM_CHANGE_INPUT,
        payload: getState().currency.from
      });
    })
    .catch(error => {
      dispatch(handleError(error));
    });
};
