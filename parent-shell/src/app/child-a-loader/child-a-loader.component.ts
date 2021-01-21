import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a-loader',
  templateUrl: './child-a-loader.component.html',
  styleUrls: ['./child-a-loader.component.css']
})
export class ChildALoaderComponent implements OnInit {

  elementUrl = 'http://localhost:3001/main.js';

  constructor() { }

  ngOnInit(): void {
  }

}
