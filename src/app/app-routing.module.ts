import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent as HomePage} from './home/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage /*HOME HERE*/
  }/*,
  {
    path: '*',
    component: null
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
