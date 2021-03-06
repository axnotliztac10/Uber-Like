import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NotFoundComponent } from './not-found.component';

import { HomeComponent } from './home/home.component';

@NgModule({
    /**
     * Must import children routes first
     */
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        HomeComponent
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
