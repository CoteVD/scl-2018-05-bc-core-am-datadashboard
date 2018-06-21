
window.onload = () => {

	//llamando al JSON con fetch
	const cohortsJSON = 'data/cohorts.json';
	fetch(cohortsJSON) 
	.then(response => response.json())
	.then(data => { 
		
		cohortsFull(data);
	})
	
	const cohortsFull = data => {
		let cohortsID = [];
		data.forEach(elem => {
			//comparar id para sacar solo los de lima con  if 	
			if (elem.sede === "lima"){
				//mostrar id de esos cohort	
				cohortsID.push(elem.id);
				console.log(cohortsID.reverse()); 
			} 
		});
		//transforme a texto los ids 
		let cohortsIdText = JSON.stringify(cohortsID);
		//console.log(cohortsIdText);
		
		//mostrar id de esos cohort y listarlos con innerHTML  
		/*document.getElementById("showCohortList").innerHTML = cohortsIdText; */

		//print de los cohorts de lima en tarjetas individuales
		/*
		const lima = document.getElementById('btnLima');lima.addEventListener('click', () => {
			document.getElementById('cohorts').style.display = 'block';

			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
				newNameCohort += `<p>${cohortsID[i]}</p>`
				console.log(newNameCohort);

			const datos = document.getElementById('nameCohort');
			datos.innerHTML = newNameCohort;
			}
		});
		*/

		//boton lima
		const lima = document.getElementById('btnLima');
		const tabla = document.getElementById('tableBody')
		lima.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
			//recorre el arreglo de cohorts 	
			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
			//	newNameCohort += tableSede;
				newNameCohort += `<tr><a href="#"> 
				${cohortsID[i]}</a></tr>`
				console.log(newNameCohort);
			
			tabla.innerHTML = newNameCohort;
			}		
		});


		//boton CDMX
		const cdmx = document.getElementById('btnCDMX');cdmx.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';			
		});

		//boton santiago
		const santiago = document.getElementById('btnSantiago');santiago.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});

		//boton sao paulo
		const saoPaulo = document.getElementById('btnSaoPaulo');saoPaulo.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});
	}
	
}



//llamar con fetch a los nombres de las alumnas
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
fetch(usersJSON) 
.then(response => response.json())
.then(data => {   
	usersFull(data);
})	
const usersFull = data => {
	let usersName = [];
data.forEach(elem => {
	
//mostrar nombre de almunas
usersName.push(elem.name);
//transforme a texto los nombres
let userNameText = JSON.stringify(usersName);

//mostrar nombres y listarlos con innerHTML  
document.getElementById("showNames").innerHTML = userNameText; 
});


//area de busqueda
const btnSearch = document.getElementById('btnSearch').addEventListener('click', () => {
	const searchA = document.getElementById('searchAlumnas').value;
	//aqui deberia ir la funcion que permite imprimir el nombre de las alumnas
	document.getElementById('cohorts').style.display = 'block';
	document.getElementById('loader').style.display = 'block';
	console.log(searchA);
	document.getElementById('loader').innerText = cohortsIdText;
	console.log(cohortsIdText);
		
})

}




