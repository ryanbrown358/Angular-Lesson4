import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillLevelPipe } from './skill-level.pipe';
import { SkillServiceService } from './skill-service.service';
import { GreetingComponent } from './greeting/greeting.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillLevelPipe,
    GreetingComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [SkillServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
