import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.calculateProbability()
  }
  names = ["Grayson", "Jennifer", "Haley", "Ben", "Brady", "Jake", "Quinn", "Zoe", "Xavier", "Greyson"]
  calculateProbability(){
    let characters:any = []
    for(let name of this.names){
      for(let i = 0; i < name.length; i++){
          if(characters.some((obj: any) => obj.letter1 == name.charAt(i) && obj.letter2 == name.charAt(i + 1))){
            characters = characters.map((m: any) =>
              m.letter1 === name.charAt(i) && m.letter2 === name.charAt(i + 1) ? { ...m, count: m.count + 1 } : m
            );
          }else{
            let mapping:any = {
              letter1: name.charAt(i),
              letter2: name.charAt(i+1),
              count: 1
            }
            characters.push(mapping)
          }
      }
    }
    console.log(characters)
  }
}
