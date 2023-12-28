import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit{
  constructor(private http:TicketService){}
  ngOnInit(): void {
    
  }

 otherRef: string = '';
 isOtherSelected: boolean = false;

 onchangeicon(){
  if(this.ticketuser.reference=="Other"){
       this.isOtherSelected=true
  }else{
     this.isOtherSelected=false
  }
 }
  ticketuser=
  {
    "ticketId": 0,
    "customerName": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "state": "",
    "pincode": "",
    "reference": "",
    "adultCount": null,
    "childCount": null,
    "adultRate": null,
    "childRate": null,
    "totalAmount": 0,
    "discountInPercent": null,
    "finalAmount": 0,
    "ticketDate": new Date(),
    "ticketNo": ""
  }
  calculatrrate(){
    const totalAmt = (Number(this.ticketuser.adultRate)  * Number(this.ticketuser.adultCount)) + ( Number(this.ticketuser.childRate) *  Number(this.ticketuser.childCount));
    this.ticketuser.totalAmount = totalAmt;

    const discountAmount = totalAmt *  Number(this.ticketuser.discountInPercent) / 100;

   
    this.ticketuser.finalAmount = this.ticketuser.totalAmount - discountAmount ;

       
    }
  getnewtickeruser(){
    if(this.ticketuser.reference){
       this.ticketuser.reference=this.otherRef
    }
      this.http.getnewticket(this.ticketuser).subscribe((res:any)=>{
          if(res.result){
             alert("Ticket Creation Success" )
          }else{
             alert(res.message)
          }
      })
  }
}
