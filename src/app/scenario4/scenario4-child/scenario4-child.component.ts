import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {
  public msgC = "";
  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter;
  SendToParent(inp){
    this.msgC = inp;
    this.childEvent.emit(this.msgC);
  }
}
