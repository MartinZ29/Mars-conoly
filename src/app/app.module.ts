import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'encounters', component: EncountersComponent},
  {path: 'report', component: ReportComponent},
  {path: '**', component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
