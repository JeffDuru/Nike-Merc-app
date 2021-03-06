import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  subject= new Subject()
  
  sendMsg(product: any){
    console.log(product)
    this.subject.next(product)
  }
  
  getMsg(){
    return this.subject.asObservable()
  }
  
    
  
  
}
