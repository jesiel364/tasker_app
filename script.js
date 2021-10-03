// Variaveis globais
var res = document.querySelector('div#res')
var c = 1
var b = 3
var nav = document.querySelector('nav#nav')
var remove_bt = document.querySelector('button#remove-bt')

// Ao iniciar irá mostrar "Sem tarefas"
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


// Adiciona uma tarefa
function add_task () {
	var tarefa = document.querySelector('input#tarefatxt').value
	if (b > 6){ 		//Se ultrapassar 3 tarefas ativa o scroll vertical
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{
			res.removeAttribute('style', 'overflow-y: scroll;')
		}

	b = 7

	// Div tarefa
	var task = document.createElement('div')
	task.setAttribute('id', `tarefa_${c}`)
	task.setAttribute('class', `tarefa_area`)

	// marcador
	var mark = document.createElement('button')
	mark.setAttribute('id', 'check_circle')
	mark.innerHTML = '<span class="material-icons md-24"/>check_circle</span>'

	// Nome da tarefa
	var task_name = document.createElement('p')
	task_name.setAttribute('id', `${c}`)
	task_name.innerText = tarefa
	task_name.appendChild(mark)

	//	Descrição da tarefa

	// butão da tarefa
	// var task_bt = document.createElement('button')
	// task_bt.setAttribute('class', 'task_bt')
	// task_bt.setAttribute('onclick', 'auto_delete()')
	// task_bt.setAttribute('id', `tarefa_${c}`)
	// task_bt.innerHTML = "<span class='material-icons md-24'>delete</span>"
	//task.appendChild(task_bt)
	
	task.appendChild(task_name)
	res.appendChild(task)
	task.innerHTML += '<button id="menu"><span id="menu-bt" class="material-icons md-24">delete</span></button>'


	//	Se exceder o número de caracteres
	var tamanho_da_tarefa = tarefa.length
	// alert(tamanho_da_tarefa)
	if (tamanho_da_tarefa > 23){
		task.setAttribute('style', "text-indent = '3ch'")
	}
	
	
	c++													//	Itera o contador

// Se o numero de tarefas for diferente de zero remove a mensagem "Sem tarefas" e mostra o botão "Remover Tarefa"
	if(c != 0){
		p1 = document.querySelector('p#p1')
		res.removeChild(p1)}
		nav.appendChild(remove_bt)
}

// Remove a ultima tarefa
function rem_task () {;
	var task = document.getElementById(`tarefa_${c-1}`)
	if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{res.removeAttribute('style', 'overflow-y: scroll;')}
	res.removeChild(task)		//	Remove a ultima tarefa "p"
	c--						//	Diminui o contador
	
	while(c == 1){			//	Enquanto não tiver nenhuma tarefa mostra a mensagem "Sem tarefas" e remover o de "Remover Tarefa"		
	res.innerHTML = `<p id="p${c}">Sem tarefas</p>`		
	nav.removeChild(remove_bt)
	break;
}
}

function auto_delete (argument) {
	
	// console.log(c)
	bt = document.querySelector('button#')
	var self_task = document.getElementById(task_name)
	res.removeChild(self_task)
	c--
}