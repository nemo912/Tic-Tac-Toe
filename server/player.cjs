class Player {
    constructor(ws, name, character) {
        this.connection = ws;
        this.username = name;
        this.character = character;
    }
}



module.exports = Player;
