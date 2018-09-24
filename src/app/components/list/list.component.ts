import { Component, OnInit } from '@angular/core';
import { IssueService } from "../../issue.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * Adding an Instance of the IssueService
   * @param issueService
   */
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues)=>{
      console.log(issues);
    })
  }

}
