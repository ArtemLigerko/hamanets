export const currencyFormat = (number: number) => {
  return new Intl.NumberFormat("ua-UA", {
    style: "currency",
    currency: "UAH",
  }).format(number);
};

export const currencyFormatForTable = (number: number) => {
  return new Intl.NumberFormat("ua-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};
