import {AbstractControl} from '@angular/forms'
export class idcheckin{
public static checkId(id:AbstractControl)
{
    var data:string =id.value
    if(data && data.length!=4)
    return{"LenError":true}
    else
    return null;
}
}