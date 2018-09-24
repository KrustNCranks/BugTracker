import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000'
  /**
   * Used to make an instance of the HttpClient
   * @param http
   */
  constructor(private http: HttpClient) { }
}
