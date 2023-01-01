import React, { Component } from "react";
import Button from "./components/Button";
import "./estilo.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraseAleatoria: "",
    };
    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.fraseAleatoria = `" ${this.frases[numeroAleatorio]} "`;
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/biscoito.png")} classMame="image" />
        <Button nome="Abrir Biscoito" acaoBtn={this.quebrarBiscoito} />
        <h3 className="textoFrase">{this.state.fraseAleatoria}</h3>
      </div>
    );
  }
}

export default App;
