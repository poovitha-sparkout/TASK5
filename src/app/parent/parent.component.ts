import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  


  constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    const element = this.renderer.selectRootElement('.my-element');
    this.renderer.addClass(element, 'my-class');
  }
  



  numbers: number[] = [];
  
     pushNumber(number: number) {
      this.numbers.push(number);
    }


     mean!: string;
     receiveMessage($event: string) {
      this.mean= $event;
    }
  
     userData!: Array<any> ;
    ngOnInit(): void {
      this.userData= [
        { name:'priya'},
        { name:'anu'},
        { name:'dhiviya'},
        {name:'abi'},
        {name: 'sowmiya'},

      ] ;
    }
  }

