import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";
export interface Server{
    name:string,
    id: number,
    status:string
}

@Injectable()
export class ServerResolve implements Resolve<Server>{
    constructor (private serverService:ServersService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | import("rxjs").Observable<Server> | Promise<Server> {
        return this.serverService.getServer(+route.params['id']);
    }

}