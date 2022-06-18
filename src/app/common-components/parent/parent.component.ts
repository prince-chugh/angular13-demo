import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('button') inputValue: string = '';
  @ViewChildren('button') buttons!: QueryList<any>
  @ViewChild(ChildComponent) childComponent!: ChildComponent
  enteredUser: string = '';
  users: any[] = [];
  agreedCount: number = 0;
  disagreedCount: number = 0;
  flag = true;
  title = 'This is new title';
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.users = [{name: "Kapil", address: "delhi"}, {name: "Virender", address: "delhi"}, {name: "Shekhar", address: "delhi"}, {name: "Vinay", address: "delhi"}];
    this.commonService.getInfo();
  }

  onVoting(voteResult: boolean) {
    if (voteResult) {
      this.agreedCount++;
    } else {
      this.disagreedCount++;
    }
  }

  showInput(inputValue: string) {
    alert(inputValue);
    this.childComponent.onAgreed()
  }

}
