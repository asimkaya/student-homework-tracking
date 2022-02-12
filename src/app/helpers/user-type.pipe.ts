import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {

  transform(userType: number): unknown {
    switch (userType) {
      case 0:
        return "Öğretmen";
        break;
      case 1:
        return "Öğrenci";
        break;
      default:
        return "Unknown"
        break;
    }
  }

}
