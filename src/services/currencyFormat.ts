export const currencyFormat = (number: number) => {
  return new Intl.NumberFormat("ua-UA", {
    style: "currency",
    currency: "UAH",
  }).format(number);
};
