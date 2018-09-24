import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MatToolbarModule, MatCardModule, MatTableModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatDividerModule, MatIconModule, MatButtonModule } from "@angular/material";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { IssueService } from './issue.service';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent  },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
