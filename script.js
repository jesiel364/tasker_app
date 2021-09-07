var res = document.querySelector('div#res')
var c = 1
var b = 3

var nav = document.querySelector('nav#nav')
var remove_bt = document.querySelector('button#remove-bt')


function ao_carregar () {
	
	// while(c <= b){
	// 	res.innerHTML += `<p id="${c}">&#9989;${c} passo concluido!</p>`
		
	// 	if (b > 6){
	// 		res.setAttribute('style', 'overflow-y: scroll;')
	// 	}
	// 	c++

	// }
	while(c == 1){
		res.innerHTML = `<p id="p${c}">Sem tarefas</p>`
		nav.removeChild(remove_bt)
		break;
} 
}



function add_task () {
	var tarefa = document.querySelector('input#tarefatxt').value
	if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{
			res.removeAttribute('style', 'overflow-y: scroll;')
		}
	b = 7
	res.innerHTML += `<p id="${c}">&#9989;${tarefa}</p>`
	c++

	if(c != 0){
		p1 = document.querySelector('p#p1')
		res.removeChild(p1)}
		nav.appendChild(remove_bt)


}

function rem_task () {;
	var p = document.getElementById(c-1)
	if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{res.removeAttribute('style', 'overflow-y: scroll;')}
	res.removeChild(p)
	c--
	while(c == 1){
	
	res.innerHTML = `<p id="p${c}">Sem tarefas</p>`
	nav.removeChild(remove_bt)

	break;
}
}
