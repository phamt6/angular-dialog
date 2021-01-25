import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less']
})
export class DynamicComponent implements OnInit {
  
  someProp = 'hello';
  constructor() { }

  ngOnInit(): void {
  }

}
