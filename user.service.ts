import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   Userservice = [
    {name:"alaa",
      city:"alex",
      id:1,
  
    },
    {name:"alaa",
    city:"alex",
    id:2,
  
  },
  {name:"alaa",
  city:"alex",
  id:3,
  
  },
  ]
  constructor(private UserService :UserService){ }
}
