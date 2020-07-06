import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Authentication } from "./authentication.service";

export class AppGuard implements CanActivate,CanActivateChild{
    constructor(private authen:Authentication, private router:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.canActivate(childRoute,state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.authen.doLoging().then((islog:boolean)=>{
            if (islog){
                return true;
            }
            else {
                this.router.navigate(['']);
                return false;
            }
        })
    }

}