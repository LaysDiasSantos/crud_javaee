/**
 * confirmação de exclusão de contato
 * @author Lays Dias
 * @param idcon
 */
function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão desse contato?")
	if(resposta){
		//window location href no js é usado para fazer um redirecionamento,
		// faz com que o usuario saia desse documento e seja encaminhado para outro lugar
		 window.location.href = "delete?idcon=" + idcon;
	}
}
