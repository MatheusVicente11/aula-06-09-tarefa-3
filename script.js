var valorProduto = parseFloat(prompt("Digite o valor de seu produto:"));
if (valorProduto >= 300){
    console.log("O produto virá com frete gratis!");
}else if(valorProduto < 300){
    console.log("O frete de sua compra será de 50 reais!");
}