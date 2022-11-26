import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  data:any

  constructor() { }



  ngOnInit(): void {
  this.data = JSON.parse (localStorage.getItem("data")||'')
   console.log(this.data);
    

  }

}
