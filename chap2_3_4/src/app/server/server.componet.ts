import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    template: `<b> This is server component</b> <br/>
    <p *ngIf='created'>{{serverStatus}}</p>
    <button class="btn btn-primary" [disabled]="buttonDisable" (click)="onServerCreated()">Server on</button>
    <app-server2 *ngFor='let server of listServers'></app-server2>
    `
})
export class ServerComponet {
    buttonDisable: boolean = true;
    serverStatus = 'No server created!';
    created = false;
    count = 2;
    listServers = ['Server1', 'Server2'];

    onServerCreated() {
        this.serverStatus = 'A server has created!';
        this.created = true;
        this.listServers.push(`Server${++this.count}`)
    }
    constructor() {
        setTimeout(() => {
            this.buttonDisable = false;
        }, 1000);
    }

}