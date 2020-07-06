const formatValue = (value: number): string =>
Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(value);
  //Intl.NumberFormat().format(value); // TODO

export default formatValue;
