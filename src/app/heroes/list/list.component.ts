import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Spideman','Ironman','Hulk','Thor'];
  public deletedHero?: string;

  public deleteLastHero(): void{
    this.deletedHero = this.heroeNames.pop();
  }




}
