import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndComponent } from './end/end.component';
import { OrchestratorComponent } from './orchestrator/orchestrator.component';

const routes: Routes = [
  { path: '', component: OrchestratorComponent },
  { path: 'end', component: EndComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
