

// function selectCurrency(baseCurrency, rates) {
//   return {
//     type: "SWITCH_CURRENCY",
//     baseCurrency,
//     rates
//   };
// }
//
//
// const addFruit = fruit => ({
//   type: "ADD_FRUIT",
//   fruit
// });

const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency,
  rates
});

// window.selectCurrency = selectCurrency;

export default selectCurrency;
