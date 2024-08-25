import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  names = ["Grayson", "Jennifer", "Haley", "Ben", "Brady", "Jake", "Quinn", "Zoe", "Xavier"]
  calculateProbability(){
    let characters:any = []
    for(let name of this.names){
      for(let i = 0; i < name.length; i++){
          if(characters.includes(name.charAt(i))){
            
          }
      }
    }
  }
}
