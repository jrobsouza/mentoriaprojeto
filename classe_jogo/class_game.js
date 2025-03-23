
// Classe genérica que representa um herói de uma aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar que exibe uma mensagem específica com base no tipo do herói
  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
const monge = new Heroi('Shaolin', 30, 'monge');
const ninja = new Heroi('Naruto', 17, 'ninja');

mago.atacar();       // Saída: O mago atacou usando magia
guerreiro.atacar();  // Saída: O guerreiro atacou usando espada
monge.atacar();      // Saída: O monge atacou usando artes marciais
ninja.atacar();      // Saída: O ninja atacou usando shuriken


