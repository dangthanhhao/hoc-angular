import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivated{
    onDeactivated:()=>Observable<boolean>|Promise<boolean>|boolean
}
export class AppDeactivatedGuard implements CanDeactivate<CanComponentDeactivated>{
    canDeactivate(component: CanComponentDeactivated, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return component.onDeactivated();
    }

}