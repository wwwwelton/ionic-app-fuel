import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"
  public precoAlcool: Number
  public precoGasolina: Number

  calcular() {
    
    //Validar se os campos foram preenchidos
    if( this.precoAlcool && this.precoGasolina ){

      var pAlcool = this.precoAlcool
      var pGasolina = this.precoGasolina

      var res = pAlcool / pGasolina
      if( res >= 0.7 ){
        
        this.resultado = "Melhor utilizar Gasolina"

      }else{

        this.resultado = "Melhor utilizar Álcool"

      }      

    }else{

      this.resultado = "Preencha corretamente os campos!"

    }

  }

  constructor() {}

}
