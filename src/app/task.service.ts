import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  savedata(data:any){
     
   
      localStorage.setItem('datas',JSON.stringify(data))

  }

}
