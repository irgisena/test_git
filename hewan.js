class Hewan {
    constructor (nama, spesies) {
        this.nama = nama;
        this.spesies = spesies;
    }

    identitas() {
        console.log(`Hewan ${this.nama} adalah spesies ${this.spesies}`);
    }
}

class Singa extends Hewan {
    constructor(nama, spesies) {
        super(nama, spesies);
    }

    bersuara() {
        console.log(`${this.nama} bersuara RAWWWR`);
    }
}

class Gajah extends Hewan {
    constructor(nama, spesies) {
        super(nama, spesies);
    }

    bersuara() {
        console.log(`${this.nama} bersuara MEEEE`);
    }
}

class Monyet extends Hewan {
    constructor(nama, spesies) {
        super(nama, spesies);
    }

    bersuara() {
        console.log(`${this.nama} bersuara UU AA`);
    }
}

const singa = new Singa ('Singa', 'Mamalia');
const gajah = new Gajah ('Gajah', 'Mamalia');
const monyet = new Monyet ('Monyet', 'Primata');

singa.identitas();
singa.bersuara();

gajah.identitas();
gajah.bersuara();

monyet.identitas();
monyet.bersuara();