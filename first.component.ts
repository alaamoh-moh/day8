import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 ngOnInit(){ this.getUserservice }
  User =[]; 
    getUserservice(){
      this.User= this.Userservice ;
    }
    adduser(par:any){
      this.users.push({
        name:par,
      city:"alex",
      id:2,
      })
    }
    
    delet(index:number){
      this.users.splice(index,1);
    
    
    }
    
    usertrans (pat:User){
      this.Usertrans.emit(pat);
    }
    
    };



