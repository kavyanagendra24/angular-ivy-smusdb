import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
itemsList=[]
newEntry:any;
  
addTask(){
  this.itemsList.push(this.newEntry)
 //console.log(this.itemsList)
}
deleteTask(i){
  this.itemsList.splice(i,1)
 
}


}
