

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters: Character[]=[
      {
        id: uuid(),
        name: 'Krilin',
        power: 500
      },
      {
        id: uuid(),
        name: 'Goku',
        power: 5000
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 4000
      }
    ];


    onNewCharacter(item: Character):void{

      const newCharacter: Character = {
        id: uuid(),
        ...item
      }
      this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string):void {
      this.characters = this.characters.filter(i => i.id !== id);
      console.log(this.characters);
    }

    createNewID (): string{
      return uuid();
    }

}
