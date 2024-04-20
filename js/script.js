// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// tampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

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
	methods: {
		addToList: function () {
			if(this.newItemText != null){
				const newTodo = {
					done: false,
					text: this.newItemText,
				};
				this.todos.push(newTodo);
				this.newItemText = null;
			}
		},
	},
}).mount(".container-js");
