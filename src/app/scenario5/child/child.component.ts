import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public msgGC = "235";
  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter();
  SentToGrant(msg){
    this.childEvent.emit(msg);
  }

}
