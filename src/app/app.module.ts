import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './component/title/title.component';
import { GetProductService } from './services/get-product.service';
import { ProductCardComponent } from './component/product-card/product-card.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, TitleComponent, ProductCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GetProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
