import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
//string, number, boolean, date, object, array, null, undefined
firstName : string = "Angular Tutorial";
angularVersion = "Version 18";
isActive : boolean = false;
currentDate : Date = new Date();
inputType_R : string = "radio";
inputType_b : string = "button";
inputType_T : string = "checkbox";
selectState : string= "";


showWelcomeMessage (){
  alert("Welcome angular 18!")
}


showMessage (message : string){
alert(message)
}







}



