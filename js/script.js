// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// tampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//BONUS 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista (cercate nella documentazione l'evento che vi serve per questo bonus)
//  cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente ed eventuale icona (se done era uguale a false, impostare true e viceversa)
Vue.createApp({
	data() {
		return {
			todos: [
				{
					done: false,
					text: "Recruiting blog post",
				},
				{
					done: true,
					text: "Mobile app luaunch",
				},
				{
					done: false,
					text: "Interview John H.",
				},
				{
					done: true,
					text: "Summit update to mobile",
				},
				{
					done: false,
					text: "Summit update to mobil storefronts ",
				},
				{
					done: false,
					text: "ciao sono pippo",
				},
			],
			newItemText: null,
		};
	},
	created() {
		const localTodos = localStorage.getItem("todos");
		console.log(localTodos);
		this.todos = localTodos !== null ? JSON.parse(localTodos) : this.todos;
	},
	methods: {
		addToList: function () {
			if (this.newItemText != null) {
				const newTodo = {
					done: false,
					text: this.newItemText,
				};
				this.todos.push(newTodo);
				localStorage.setItem("todos", JSON.stringify(this.todos))
				this.newItemText = null;
			}
		},
		changeDone: function (todo) {
			if (todo.done) {
				//entra  nel ramo (brach) vero solo se todo.done è vero.
				todo.done = false;
			} else {
				todo.done = true;
			}
			localStorage.setItem("todos", JSON.stringify(this.todos))
		},
		removeTodo: function (index) {
			this.todos.splice(index, 1);
			localStorage.setItem("todos", JSON.stringify(this.todos))
		},
		
	},
}).mount(".container-js");
