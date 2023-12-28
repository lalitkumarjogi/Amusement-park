import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  {path:'',redirectTo:'newticket',pathMatch:'full'},
  {path:'newticket',component:NewTicketComponent},
  {path:'ticketlist',component:TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
