import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() numberEmitter = new EventEmitter<number>();
  private intervalRef: any;

  onStart() {
    let number = 0;
    this.intervalRef = setInterval(() => {
      number++;
      this.numberEmitter.emit(number);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalRef);
  }
}
