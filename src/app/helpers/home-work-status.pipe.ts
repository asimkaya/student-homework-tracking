import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeWorkStatus'
})
export class HomeWorkStatusPipe implements PipeTransform {

  transform(homeWorkStatus: number): unknown {
    switch (homeWorkStatus) {
      case 0:
        return "Aktif Ödev";
        break;
      case 1:
        return "Süresi Geçen Ödev";
        break;
      default:
        return "Unknown";
        break;
    }
  }

}
