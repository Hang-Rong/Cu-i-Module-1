class Storage { 
    constructor(name) {
        this.name = name;
        this.listSavingsBook = [];
    }

    addSavingBook(newSavingsBook) {
        this.listSavingsBook.push(newSavingsBook);
    }

    removeSavingBook(index) {
        this.listSavingsBook.splice(index, 1);
    }

    update(index, newSavingsBook) {
        this.listSavingsBook[index] = newSavingsBook;
    }
}