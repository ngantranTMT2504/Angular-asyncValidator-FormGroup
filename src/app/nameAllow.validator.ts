import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of, retry } from "rxjs";


export function nameAllow(control: AbstractControl): Observable<ValidationErrors|null> {
    if(control.dirty){
        return of(null);
    }return of({'nameAllow':true});
}