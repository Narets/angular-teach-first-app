import { Component } from '@angular/core';
import { Card } from './card';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cards: Card[] =[]; //Creat array for save fistname lastname

  get sorted(): Card[]{
    console.log("assess");
    return this.cards.sort( 
      (a,b)=>b.votes - a.votes 
      ); //sort( (a,b)=> ); ฟั่งชั้นในฟังชั่น

  }

  onclick(firstname:HTMLInputElement,lastname:HTMLInputElement){
    console.log(firstname.value+"  "+lastname.value);
    const card = new Card(firstname.value,lastname.value,0);
    this.cards.push(card); //save string last row of array
    console.log(this.cards);

    firstname.value="";
    lastname.value="";
  }


}
