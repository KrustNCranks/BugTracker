import { Component, OnInit } from '@angular/core';
import { IssueService } from "../../issue.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  /**
   * Adding an Instance of the IssueService
   * @param issueService
   */
  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
