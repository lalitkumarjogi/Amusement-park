import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httP:HttpClient) { }

  getnewticket(obj:any){
     return this.httP.post('https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket',obj)
  }
  getallticket(){
     return this.httP.get('https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets')
  }
  gettodayticket(){
     return this.httP.get('https://freeapi.miniprojectideas.com/api/youtube/GetTodaysTickets')
  }
  getdashboard(){
     return this.httP.get('https://freeapi.miniprojectideas.com/api/youtube/GetTicketsDashboard')
  }
}
