import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder ,Validators} from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-formfill',
  templateUrl: './formfill.component.html',
  styleUrls: ['./formfill.component.css']
})
export class FormfillComponent implements OnInit {
array =[]

fillForm = this.formbuider.group({
  name1:['',Validators.required],
  address:['',Validators.required],
  dob:['',Validators.required],
  role:['',Validators.required],
  phone:['',Validators.required],
  gender:['',Validators.required]
})


  constructor(private formbuider:FormBuilder,private service:TaskService) { }

  ngOnInit(): void {
  }
  
filled(){
  if(this.fillForm.valid){
   localStorage.setItem('data',JSON.stringify(this.fillForm.value ))
   alert("data submitted")
  }else{
    alert("invalid form")
  }
}


}
