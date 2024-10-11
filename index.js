class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if(this.tipo === 'mago') ataque = 'magia';
        else if(this.tipo === 'guerreiro') ataque = 'espada';
        else if(this.tipo === 'monge') ataque = 'artes marciais';
        else if(this.tipo === 'ninja') ataque = 'shuriken';
        else ataque = 'a mão'

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const spiderMan = new Heroi("Homem Aranha", 25, "guerreiro");
const jack = new Heroi("Samurai Jack", 40, "ninja");

spiderMan.atacar();
jack.atacar();