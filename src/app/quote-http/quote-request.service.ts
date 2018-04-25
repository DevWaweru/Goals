import { Injectable } from '@angular/core';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { resolve, reject } from 'q';
import { environment } from '../../environments/environment';

@Injectable()
export class QuoteRequestService {
  quote:Quote;

  constructor(private http:HttpClient) {
    this.quote=new Quote("","");
   }
  quoteRequests(){
    interface ApiResponse{
      quote:string;
      author:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(respond=>{
        this.quote.quote=respond.quote;
        this.quote.author=respond.author;
        resolve()
      },error=>{
        this.quote.quote="Never, Never, Never give up";
        this.quote.author="Winston Churchill";
        reject(error);
      })
    })
    return promise;
  }
}
