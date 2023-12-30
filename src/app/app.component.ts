import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dashlist:any
  ngOnInit(): void {
    this.getdash()
  }
  constructor(private http:TicketService){}
  getdash(){
     this.http.getdashboard().subscribe((res:any)=>{
        this.dashlist=res.data
     })
  }
}
