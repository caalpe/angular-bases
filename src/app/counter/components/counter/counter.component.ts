import { Component  } from "@angular/core";





@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false
})
export class CounterComponent{
  public counter = 0;

  increaseCounter(): void {
    this.counter+=1;
  }

  decreaseCounter(): void {
    this.counter-=1;
  }

  resetCounter(): void{
    this.counter=10;
  }

}


