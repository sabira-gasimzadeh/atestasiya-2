class Messenger{
    constructor(author,text){
    }
    show_history(){
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    send(author,text){
        console.log(`${this.show_history()} ${this.author=author} : ${this.text=text}`)
    }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()