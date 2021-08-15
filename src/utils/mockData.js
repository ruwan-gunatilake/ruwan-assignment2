export const MATRIX_VALUES = {
    INVERT: "Inv",
    DEFAULT: "USD"
}
export const SUPPORTED_CURRENCY_LIST = ['AUD', 'CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK', 'NZD', 'USD']

export const DIRECT_RATE_LIST = [
    {'pair': 'AUDUSD', 'value': 0.8371}, {'pair': 'CADUSD', 'value': 0.8711}, {'pair': 'USDCNY', 'value': 6.1715},
    {'pair': 'EURUSD', 'value': 1.2315}, {'pair': 'GBPUSD', 'value': 1.5683}, {'pair': 'NZDUSD', 'value': 0.7750},
    {'pair': 'USDJPY', 'value': 119.95}, {'pair': 'EURCZK', 'value': 27.6028}, {'pair': 'EURDKK', 'value': 7.4405},
    {'pair': 'EURNOK', 'value': 8.6651}
]

//Note Cross via USD is considered default. So Cross via USD entries are not the following array
export const CROSS_VIA_MATRIX = [
    {'pair': 'CNYUSD', 'value': MATRIX_VALUES.INVERT},//Given table data is incorrect. 'D' has been corrected to 'Inv'
    {'pair': 'USDAUD', 'value': MATRIX_VALUES.INVERT}, {'pair': 'CZKDKK', 'value': 'EUR'},
    {'pair': 'CZKEUR', 'value': MATRIX_VALUES.INVERT}, {'pair': 'CZKNOK', 'value': 'EUR'},
    {'pair': 'CZKUSD','value': 'EUR'},

    {'pair': 'DKKCZK', 'value': 'EUR'}, {'pair': 'DKKEUR', 'value': MATRIX_VALUES.INVERT},
    {'pair': 'DKKNOK', 'value': 'EUR'}, {'pair': 'DKKUSD', 'value': 'EUR'},

    {'pair': 'JPYUSD', 'value': MATRIX_VALUES.INVERT},

    {'pair': 'NOKCZK', 'value': 'EUR'}, {'pair': 'NOKDKK', 'value': 'EUR'},
    {'pair': 'NOKEUR', 'value': MATRIX_VALUES.INVERT}, {'pair': 'NOKUSD', 'value': 'EUR'},

    {'pair': 'USDCAD', 'value': MATRIX_VALUES.INVERT}, {'pair': 'USDCNY', 'value': MATRIX_VALUES.INVERT},
    {'pair': 'USDCZK', 'value': 'EUR'}, {'pair': 'USDDKK', 'value': 'EUR'},
    {'pair': 'USDEUR', 'value': MATRIX_VALUES.INVERT}, {'pair': 'USDGBP', 'value': MATRIX_VALUES.INVERT},
    {'pair': 'USDNOK', 'value': 'EUR'}, {'pair': 'USDNZD', 'value': MATRIX_VALUES.INVERT}
]





