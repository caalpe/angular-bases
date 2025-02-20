import {  Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-add-character',
  styleUrl: './add-character.component.css',
  templateUrl: './add-character.component.html',
  standalone: false
})

export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  constructor( public dbzService: DbzService) {}

  emitCharacter(): void{
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.character.id = this.dbzService.createNewID();
    console.log('characterAdded',this.character);
    this.onNewCharacter.emit(this.character);
    //this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;

  }

 }
