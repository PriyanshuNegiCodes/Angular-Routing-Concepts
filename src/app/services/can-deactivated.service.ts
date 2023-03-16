import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EnquiryComponent } from '../enquiry/enquiry.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedTeam implements CanDeactivate<EnquiryComponent> {

  canDeactivate(
    component: EnquiryComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canExit(); 
  }
}  

