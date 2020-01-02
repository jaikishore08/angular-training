import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "reverse"})
export class CustomPipe implements PipeTransform {
   transform(value:any) {
       let reversedString= "";
        for(let i = value.length-1; i >=0 ; i--) {
            reversedString += value.charAt(i);
        }
        return reversedString;

        const set = (obj, path, val) => { 
            const keys = path.split('.');
            const lastKey = keys.pop();
            const lastObj = keys.reduce((obj, key) => 
                obj[key] = obj[key] || {}, 
                obj); 
            lastObj[lastKey] = val;
            };
   }
}