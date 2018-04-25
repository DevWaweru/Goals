import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number{
    let today:Date = new Date();//get current Date and Time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(value-todayWithNoTime);//returns value in Milliseconds
    const secondsInDay = 86400;//60 seconds *60 mins an hour*24 hours

    var dateDifferenceSeconds = dateDifference*0.001;//Converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInDay;
    // console.log(value);

    if(dateCounter >=1){
      return dateCounter;
    } else{
      return 0;
    }
  }
  // transform(value: any, args?: any): any {
  //   return null;
  // }

}
