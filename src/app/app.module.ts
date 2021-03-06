import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { HttpClientModule} from "@angular/common/http";
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { DetailProductsComponent } from './pages/client/detail-products/detail-products.component';
import { AboutPageComponent } from './pages/client/about-page/about-page.component';
import { BannerComponent } from './pages/client/banner/banner.component';
import { ListProductComponent } from './pages/client/list-product/list-product.component';
import { ContactFormComponent } from './pages/client/contact-form/contact-form.component';
import { AuthComponent } from './pages/client/auth/auth.component';
import { SignInComponent } from './pages/client/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/client/auth/sign-up/sign-up.component';
import { Error404Component } from './pages/error404/error404.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductFormComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    ShowValidateComponent,
    HomePageComponent,
    DetailProductsComponent,
    AboutPageComponent,
    BannerComponent,
    ListProductComponent,
    ContactFormComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    Error404Component,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
