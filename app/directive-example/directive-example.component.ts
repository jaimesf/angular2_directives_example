import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'directive-example',
  templateUrl: 'app/directive-example/directive-example.component.html',
  styleUrls: ['app/directive-example/directive-example.component.css']
})

export class DirectiveExampleComponent implements OnInit{
  paragraph = 'Child component';

  show: boolean;
  colors: string[];
  style: string

  ngOnInit(){
      this.show = true;
      this.colors = ['red', 'blue', 'orange', 'green', 'red'];
      this.style = 'italic';
  }
}
