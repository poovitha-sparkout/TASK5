import { Component, EventEmitter, Input, Output, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() sendNumber = new  EventEmitter<any>();
  parentData = 'Hello from Parent';

  sendNumberToParent() {
    const randomNumber = Math.floor(Math.random() * 10) ;
    this.sendNumber.emit(randomNumber);
  }
  @Output() type = new EventEmitter<string>();
  message = 'Hello';

  senditem() {
    this.type.emit(this.message);
  }
  @Input() data !: Array<any>;
  @Input() userData !: Array<any>;




  @HostListener('click')
  onClick() {
    console.log('Host element clicked!');
  }
  @HostBinding('style.backgroundColor')
backgroundColor = 'red';

}



