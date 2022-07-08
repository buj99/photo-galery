import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ImageDisplayComponent } from './pages/main-page/components/image-display/image-display.component';
import { ImageSliderComponent } from './pages/main-page/components/image-slider/image-slider.component';
import { DirectionalButtonComponent } from './pages/main-page/components/directional-button/directional-button.component';
import { ImageComponent } from './pages/main-page/components/image/image.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, ImageDisplayComponent, ImageSliderComponent, DirectionalButtonComponent, ImageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
