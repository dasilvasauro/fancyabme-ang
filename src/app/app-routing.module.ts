import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharaRefComponent } from './components/chara-ref/chara-ref.component';
import { ReachmeComponent } from './components/reachme/reachme.component';
import { KnowmeComponent } from './components/knowme/knowme.component';
import { TestPageComponent } from './components/test-page/test-page.component';

const routes: Routes = [
  { path: '', component: TestPageComponent, children:[
  { path: 'know', component: KnowmeComponent},
  { path: 'chara', component: CharaRefComponent},
  { path: 'reachme', component: ReachmeComponent}  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
