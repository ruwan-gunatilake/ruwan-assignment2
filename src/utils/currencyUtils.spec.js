import {displayCurrency, convert, currencyName, getRateData, roundToTwoDecimals} from "./currencyUtils";


const currencyExchangeList = {
  AUD: {
    currencyName: "AUD",
    currencySymbol: "$",
    id: "AUD"
  },
  USD: {
    currencyName: "United States Dollar",
    currencySymbol: "$",
    id: "USD"
  }
};

describe("Display Currency", () => {
  const currencyList = Object.values(currencyExchangeList);

  it("should display the amount and the currency name", () => {
    expect(displayCurrency({currencyList, currencyId:"AUD", number: 10})).toBe(`10 ${currencyList[0].currencyName}`);
  });

  it("should return the Currency Name United States Dollar", () => {
    expect(currencyName({currencyList, currencyId:"USD"})).toEqual(currencyList[1].currencyName);
  });
});

describe("Convert between AUD and USD", () => {
  const state ={ data: 0.8371 };

  it("should convert from AUD to USD", () => {
    const convertFrom = convert({amount:100, state:{ data: 0.8371 }, mode:"from"});
    expect(convertFrom).toBe(83.71);
  });

  it("should convert from USD to AUD", () => {
    const convertTo = convert({amount:100, state:{ data: 0.8371  }, mode:"to"});
    expect(convertTo).toBe(119.46);
  });
});


describe("Get rates", () => {

  it("should convert from AUD to USD", () => {
    const data = getRateData("AUD","USD");
    expect(roundToTwoDecimals(data.rate)).toBe(0.84);
  });

  it("should convert from USD to AUD", () => {
    const data = getRateData("USD","AUD");
    expect(roundToTwoDecimals(data.rate)).toBe(1.19);
  });

  it("should convert from USD to AUD", () => {
    const data = getRateData("USD","AUD");
    expect(roundToTwoDecimals(data.rate)).toBe(1.19);
  });

  it("should convert from AUD to JPY", () => {
    const data = getRateData("AUD","JPY");
    expect(Math.round(data.rate)).toBe(100);
  });

  //testing one using Inv
  it("should convert from CZK to EUR", () => {
    const data = getRateData("CZK","EUR");
    expect(roundToTwoDecimals(data.rate)).toBe(0.04);
  });

  //testing one via other currency(in this case EUR)
  it("should convert from DKK to NOK", () => {
    const data = getRateData("DKK","NOK");
    expect(roundToTwoDecimals(data.rate)).toBe(1.16);
  });

  //testing one via other currency(in this case USD which is default in this code)
  it("should convert from CAD to AUD", () => {
    const data = getRateData("CAD","AUD");
    expect(roundToTwoDecimals(data.rate)).toBe(1.04);
  });

  //more tests to be added in production code
  //I usually use enzyme library for testing but need more time to configure

});
