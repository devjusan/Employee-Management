const Formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BRL",
});

export default Formatter.format;
