import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  constructor(private http:TicketService){}
  arraylist:any[]=[]
  isTileView: boolean = true;
  isAllData: boolean = true;

  ngOnInit(): void {
    this.getallticketuser()
  }
  onToggle(){
    this.isAllData = !this.isAllData;
    if( this.isAllData) {
      this.getallticketuser();
    } else {
        this.getTodaysTickets();
    }

  }
  getTodaysTickets(){
    this.http.gettodayticket().subscribe((res:any)=>{
      this.arraylist=res.data

})
  }
  getallticketuser(){
      this.http.getallticket().subscribe((res:any)=>{
            this.arraylist=res.data

      })
  }
}
