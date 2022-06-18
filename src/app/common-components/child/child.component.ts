import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title: string = '';
  flag: boolean = true;
  @Input()
  username: string = '';
  @Output()
  votingResult = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.title = 'In Child Component';
  }

  onAgreed() {
    this.onVote(true);
  }

  onDisagreed() {
    this.onVote(false)
  }

  onVote(vote: boolean) {
    this.votingResult.emit(vote);
  }

  getTitle() {
    return 'New title';
  }

}
