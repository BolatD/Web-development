import { Component } from '@angular/core';
export interface Todo{
  id:number
  title:string
  completed:boolean
  date?:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Angular todo application'
  public todos: Todo[]=[
{id:1, title:'buy mac', completed:false, date:new Date()},
{id:2, title:'buy iphon', completed:false, date:new Date()},
{id:3, title:'buy ipad', completed:false, date:new Date()},
  ]
  


  
}
