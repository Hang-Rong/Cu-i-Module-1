class Storage { 
    constructor(name) {
        this.name = name;
        this.listSavingsBook = [];
    }

    addSavingBook(newSavingsBook) {
        for (let i = 0; i < this.listSavingsBook.length; i++) {
            if (this.listSavingsBook[i].code === newSavingsBook.code) {
                alert("Passbook code already exists. Please enter a new code.");
                return;
            }
        }
        this.listSavingsBook.push(newSavingsBook);
    }

    removeSavingBook(code) {
        for (let i = 0; i < this.listSavingsBook.length; i++) {
            if (this.listSavingsBook[i].code === code) {
                return i;
            }
        }
        return -1;
    }

    update(index, newSavingsBook) {
        this.listSavingsBook[index] = newSavingsBook;
    }
}