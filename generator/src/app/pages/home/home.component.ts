import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.calculateProbability();
  }
  names = [
    'Aiden',
    'Olivia',
    'Liam',
    'Emma',
    'Noah',
    'Ava',
    'Elijah',
    'Isabella',
    'James',
    'Sophia',
    'William',
    'Charlotte',
    'Benjamin',
    'Amelia',
    'Lucas',
    'Mia',
    'Henry',
    'Harper',
    'Alexander',
    'Evelyn',
    'Jackson',
    'Abigail',
    'Sebastian',
    'Ella',
    'Owen',
    'Elizabeth',
    'Jack',
    'Sofia',
    'Theodore',
    'Emily',
    'Gabriel',
    'Avery',
    'Matthew',
    'Mila',
    'Ryan',
    'Scarlett',
    'Levi',
    'Grace',
    'Isaac',
    'Chloe',
    'Ethan',
    'Camila',
    'David',
    'Luna',
    'Joseph',
    'Aria',
    'Mason',
    'Zoe',
    'Carter',
    'Nora',
    'Julian',
    'Riley',
    'Luke',
    'Zoey',
    'Mateo',
    'Hannah',
    'Jack',
    'Eleanor',
    'Eli',
    'Ellie',
    'Benjamin',
    'Lila',
    'Wyatt',
    'Layla',
    'John',
    'Aurora',
    'Eli',
    'Lucy',
    'Hudson',
    'Peyton',
    'Adam',
    'Stella',
    'Aiden',
    'Harrison',
    'Eli',
    'Riley',
    'Asher',
    'Ivy',
    'Jacob',
    'Madison',
    'Leo',
    'Aubrey',
    'Sebastian',
    'Maya',
    'Grayson',
    'Piper',
    'Jordan',
    'Charlotte',
    'Maddox',
    'Cora',
    'Evan',
    'Penelope',
    'Mila',
    'Graham',
    'Ruby',
    'Jason',
    'Violet',
    'Nolan',
    'Lydia',
    'Ezra',
    'Ariana',
    'Zachary',
    'Sadie',
    'Maya',
    'Landon',
    'Samantha',
    'Kinsley',
    'Nora',
    'Cameron',
    'Alice',
    'Jaxon',
    'Riley',
    'Cameron',
    'Emilia',
    'Mason',
    'Aiden',
    'Sophie',
    'Elena',
    'Mila',
    'Samantha',
    'Jackson',
    'Cora',
    'Henry',
    'Kylie',
    'Madison',
    'Elliot',
    'Parker',
    'Luna',
    'Blake',
    'Brielle',
    'Ryan',
    'Eva',
    'Charlotte',
    'Hudson',
    'Penelope',
    'Liam',
    'Maya',
    'Gavin',
    'Addison',
    'Colton',
    'Delilah',
    'Boys',
    'Victoria',
    'Scarlett',
    'Eli',
    'Hannah',
    'Mia',
    'Grace',
    'Evelyn',
    'Olivia',
    'Michael',
    'Harper',
    'Mia',
    'Isabella',
    'Harper',
    'Eli',
    'Layla',
    'Evelyn',
    'Cora',
    'Ella',
    'Emily',
    'Sofia',
    'Nora',
    'Chloe',
    'Lily',
    'Madison',
    'Harper',
    'Aiden',
    'Isaac',
    'Daniel',
    'Scarlett',
    'Ivy',
    'Aria',
    'Mila',
    'Riley',
    'Sophie',
    'Hannah',
    'Stella',
    'Kinsley',
    'Alice',
    'Levi',
    'Maya',
    'Maddox',
    'Ivy',
    'Wyatt',
    'Lily',
    'Riley',
    'Evelyn',
    'Eli',
    'Grayson',
    'Julian',
    'Violet',
    'Luna',
    'Jackson',
    'Isabella',
    'Avery',
    'Leo',
    'Zoe',
    'Mia',
    'Elena',
    'Ezra',
    'Peyton',
    'Aiden',
    'Camila',
    'Sophie',
    'Riley',
    'Emma',
    'Eleanor',
    'Hannah',
    'Owen',
    'Mason',
    'Chloe',
    'Elliot',
    'Carter',
    'Liam',
    'Harper',
    'Ella',
    'Aria',
    'Addison',
    'Zachary',
    'Sofia',
    'Evelyn',
    'Liam',
    'Lila',
    'Cora',
    'Levi',
    'Eli',
    'Eleanor',
    'Jackson',
    'Maddox',
    'Lily',
    'Mila',
    'Jack',
    'Benjamin',
    'Nora',
    'Maya',
    'Owen',
    'Grace',
    'Leo',
    'Parker',
    'Julian',
    'Hudson',
    'Layla',
    'Sadie',
    'Landon',
    'Alice',
    'Matthew',
    'Emilia',
    'Jacob',
    'Peyton',
    'Gavin',
    'Madeline',
    'Riley',
    'Elena',
    'Stella',
    'Mia',
    'Eli',
    'Harper',
    'Isaac',
    'Nora',
    'Sophie',
    'Ryan',
    'Eva',
    'Hudson',
    'Aiden',
    'Victoria',
    'Boys',
    'Addison',
    'Lucy',
    'Leo',
    'Maya',
    'Penelope',
    'Graham',
    'Mia',
    'Peyton',
    'Zoe',
    'Maddox',
    'Lila',
    'Jack',
    'Parker',
    'Ariana',
    'Samantha',
    'Nolan',
    'Maddox',
    'Riley',
    'Violet',
    'Hudson',
    'Mila',
    'Aria',
    'Layla',
    'Liam',
    'Ezra',
    'Isabella',
    'Evelyn',
    'Levi',
    'Riley',
    'Lila',
    'Lily',
    'Cora',
    'Victoria',
    'Evelyn',
    'Sophie',
    'Madison',
    'Kinsley',
    'Harper',
    'Ella',
    'Stella',
    'Mia',
    'Eleanor',
    'Carter',
    'Ivy',
    'Hudson',
    'Landon',
    'Graham',
    'Avery',
    'Aiden',
    'Harper',
    'Sofia',
    'Parker',
    'Sadie',
    'Riley',
    'Benjamin',
    'Nora',
    'Jack',
    'Olivia',
    'Riley',
    'Mia',
    'Emma',
    'Madeline',
    'Ella',
    'Jackson',
    'Hannah',
    'Levi',
    'Mason',
    'Mila',
    'Charlotte',
    'Addison',
    'Olivia',
    'Madison',
    'Riley',
    'Gavin',
    'Chloe',
    'Sophie',
    'Aiden',
    'Peyton',
    'Zoe',
    'Boys',
    'Ella',
    'Victoria',
    'Riley',
    'Hudson',
    'Ivy',
    'Sadie',
    'Camila',
    'Violet',
    'Sofia',
    'Addison',
    'Maddox',
    'Emilia',
    'Zachary',
    'Aria',
    'Lily',
    'Harper',
    'Liam',
    'Luna',
    'Riley',
    'Carter',
    'Eva',
    'Stella',
    'Mila',
    'Sophie',
    'Jack',
    'Owen',
    'Layla',
    'Mia',
    'Nora',
    'Parker',
    'Madison',
    'Emily',
    'Sophie',
  ];
  calculateProbability() {
    let characters: any = [];
    for (let name of this.names) {
      for (let i = 0; i < name.length; i++) {
        if (
          characters.some(
            (obj: any) =>
              obj.letter1 == name.charAt(i) && obj.letter2 == name.charAt(i + 1)
          )
        ) {
          characters = characters.map((m: any) =>
            m.letter1 === name.charAt(i) && m.letter2 === name.charAt(i + 1)
              ? { ...m, count: m.count + 1 }
              : m
          );
        } else {
          let mapping: any = {
            letter1: name.charAt(i),
            letter2: name.charAt(i + 1),
            count: 1,
          };
          characters.push(mapping);
        }
      }
    }
    console.log(characters);
  }
}
