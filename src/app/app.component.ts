import { Component,  Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
constructor(private renderer: Renderer2, private ele: ElementRef) {}

addClassToElement() {
  const element = this.ele.nativeElement;
  this.renderer.addClass(element, 'my-class');
  this.renderer.setStyle(this.ele.nativeElement, 'color', 'red');
}

@HostListener('click')
onClick() {
  console.log('this.======')
}

@HostBinding('class.active')
isActive = false;


 
//  Property binding
  values:string='';
  // two-way binding
  typevalue: string='';
  value(){
    this.values ='this will shown the button click action'
  }
    
  // eventbinding

  buttonclick(e:any){
    console.log('e');
   }
   // string interpolation
  name: string = 'ANGULAR12';


  // two-way binding
  ngOnInit(): void {
    this.typevalue = "zsdsr "
this.directname();
}

directname(){
  console.log('directname', this.typevalue)
}
clickbutton(e:any): void{
  console.log('e',this.typevalue);
 }
  title:string="";
 inputValue: string = '';
  onInputChange() { }

  //merthod1
  method1:boolean=false;
  method2:boolean=true;
  
  //toggle 
  showData:boolean=false
  spoke:boolean=false
    //method3 else statementP
  type:boolean=false;    
  showElement:boolean= false;
  elseBlock:boolean=false;

  public show() {
    this.type=!this.type;
    this.showElement=!this.showElement;
    this.elseBlock=!this.elseBlock;
  }
  //METHOD 4  
  count:boolean=false
  onecondition:boolean=false
  twocondition:boolean=false
 

  public  method(){
     this.count=!this.count;
     this.onecondition=!this.onecondition;
     this.twocondition=false;
  }
  Data() {
     this.showData =!this.showData;
  }

  // single click time la true
  // toggleData(): void {
  //   this.showData = !true;
  // }
  written:boolean=false
  //toggle method 
  shell:boolean=true
  write(){
    this.written=!this.written
  }
  speak(){
    this.spoke=!this.spoke
  }
  //merthod1
  public methods() {
    this.method1 = !this.method1;
    this.method2 = false;
  }
  dropped:boolean=true
  drop(){
      this.dropped=!this.dropped
  }
  shelled(){
    this.shell=!this.shell;
  }

   // class binding
   strclass ="active para string"
   objclass={
     active:false,
    ' para-2':false
   };
   arrclass=['active','para-2']



  //  <!-- 
  //  input output data sharing -->
   

   oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberEmitted(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
  
}