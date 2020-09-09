import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  // components, directives pipes
  declarations: [
    AppComponent,
    SearchComponent,
    ImageGalleryComponent
  ],
  // add reference
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
