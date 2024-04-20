// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// tampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//BONUS 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista (cercate nella documentazione l'evento che vi serve per questo bonus)
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
			if (this.newItemText != null) {
				const newTodo = {
					done: false,
					text: this.newItemText,
				};
				this.todos.push(newTodo);
				this.newItemText = null;
			}
		},
		enterClicked: function(){
			if(this.newItemText != null){
				const newTodo = {
					done: false,
					text: this.newItemText
				}
				this.todos.push(newTodo);
				this.newItemText = null
			}
		}
	},
}).mount(".container-js");
