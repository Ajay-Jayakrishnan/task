import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormfillComponent } from './formfill/formfill.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
  {path:'',component:FormfillComponent},
  {path:'show',component:ShowdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
