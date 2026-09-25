let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar =document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

btnAjuda.addEventlistener("click", abreModal);
btnFechar.addEventlistener("click", fechaModal);