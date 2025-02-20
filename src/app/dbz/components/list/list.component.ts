import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power:10
    }
  ];

  @Output()
  onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    console.log(this.characterList[index].id);

    this.onDelete.emit(this.characterList[index].id);
  }

}
