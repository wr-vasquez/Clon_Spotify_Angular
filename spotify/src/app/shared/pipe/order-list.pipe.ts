import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  // transform(value: TrackModel[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
  //   // console.log('valor', args)
  //   //  return value.replace('One Love', 'b');
  //   //  return `${value} Oferta`
  //   // return value
  //   try {
  //     if(args == null){
  //       return value;
  //     } else{

  //     }
  //   } catch (e) {
  //     console.log("Algo pasa");
  //     return value
      
  //   }
  // }

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): TrackModel[] {
    if (args === null) {
      return value
    } else {
      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1
        }
        else if (a[args] === b[args]) {
          return 0;
        }
        else if (a[args] > b[args]) {
          return 1;
        }
        return 1
      });

      return (sort === 'asc') ? tmpList : tmpList.reverse()
    }
  }

}
