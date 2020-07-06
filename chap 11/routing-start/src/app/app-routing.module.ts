import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AppGuard } from "./app-guard.service";
import { AppDeactivatedGuard } from "./servers/edit-server/can-deactivated-service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolve } from "./servers/server/server-resolve.service";

const appRoutes:Routes=[
    {path:'users',component:UsersComponent, children:[
      {path:':id/:name',component:UserComponent}
    ]},
    {path:'',component:HomeComponent},
    {path:'servers',component:ServersComponent,
    // canActivate:[AppGuard],
    canActivateChild:[AppGuard],
    children:[
      {path:':id',component:ServerComponent, resolve:{server: ServerResolve}},
      {path:':id/edit', canDeactivate:[AppDeactivatedGuard],component:EditServerComponent}
    ]},
    // {path:'not-found',component:PageNotFoundComponent},
    {path:'not-found',component:ErrorPageComponent,data:{errorMessage:'Page not found'}},
    {path:'**',redirectTo:'not-found'},
  
  ]
  @NgModule({
      imports:[
          RouterModule.forRoot(appRoutes,{useHash:true})
      ],
      exports:[
          RouterModule
      ]
  })
export class AppRoutingModule{

}