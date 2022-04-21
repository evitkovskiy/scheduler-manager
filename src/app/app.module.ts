import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SchedulerManagerModule } from './components/scheduler-manager/scheduler-manager.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchedulerManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
