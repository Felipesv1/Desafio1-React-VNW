
import React,{ Component } from "react";
import maca from "./images/imagem.jpg";
import App from "./App.css";

class app extends Component{
  state = {
    nome:"felipe",
    idade:18,
    comidaFavorita:"Escondidinho de carne",
    musicas:["É de coração","Samurai","Punto de partida"]
  }
  
    render(){
    return(
      <main >
        <h1>Nome: {this.state.nome}</h1>
        <h2>Idade: {this.state.idade}</h2>
        <h3>Comida Favorita: {this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={maca}/>
      </main>
    )
    }
  
  
  }

  export default app;
