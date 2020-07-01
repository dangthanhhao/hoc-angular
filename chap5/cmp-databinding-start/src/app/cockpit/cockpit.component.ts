import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';
@Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
@Output('bpCreated') bluePrintCreated= new EventEmitter<{serverName:string,serverContent:string}>();

@ViewChild('inputServerContent') inputContent:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(inputServerName:HTMLInputElement) {
    
 this.serverCreated.emit({serverName:inputServerName.value,serverContent:this.inputContent.nativeElement.value})
  }

  onAddBlueprint(inputServerName:HTMLInputElement) {
    this.bluePrintCreated.emit({serverName:inputServerName.value,serverContent:this.inputContent.nativeElement.value})
  }
}
