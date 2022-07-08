module.exports = (template, product) => {
  let output = template;

  output = output.replaceAll("{%PRODUCTNAME%}", product.productName);
  output = output.replaceAll("{%IMAGE%}", product.image);
  output = output.replaceAll("{%QUANTITY%}", product.quantity);
  output = output.replaceAll("{%PRICE%}", product.price);
  output = output.replaceAll("{%FROM%}", product.from);
  output = output.replaceAll("{%NUTRIENTS%}", product.nutrients);
  output = output.replaceAll("{%DESCRIPTION%}", product.description);
  output = output.replaceAll("{%ID%}", product.id);

  if (!product.organic) output = output.replaceAll("{%NOT_ORGANIC%}", "not-organic");

  return output;
};
