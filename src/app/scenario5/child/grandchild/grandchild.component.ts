import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  @Output() public grandchildEvent = new EventEmitter();
  sentToChild(inp){
    this.grandchildEvent.emit(inp);
  }

}
