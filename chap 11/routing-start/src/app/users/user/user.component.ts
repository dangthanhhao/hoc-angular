import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  private paramsSubcription: Subscription;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.user={id:this.activeRoute.snapshot.params['id'], name:this.activeRoute.snapshot.params['name']};

    this.paramsSubcription= this.activeRoute.params.subscribe((params:Params)=>{
      this.user={id:params['id'],name:params['name']};
    });
  }
  ngOnDestroy(){
    this.paramsSubcription.unsubscribe();
    
  }
}
