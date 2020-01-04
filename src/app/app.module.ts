import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from'@angular/forms'
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {Route,RouterModule} from '@angular/router'
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
const material=[
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { HomepageComponent } from './homepage/homepage.component';
import {GisbuyService} from './Service/Gisbuy.service';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateordeleteComponent } from './updateordelete/updateordelete.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { TypeComponent } from './type/type.component';
import { SortComponent } from './sort/sort.component';
import { YourorderComponent } from './yourorder/yourorder.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { AuthGuard } from './helpers/auth.guard';




const myRoutes:Route[]=[{path:'homepage',component:HomepageComponent},
{path:'addproduct',component:AddproductComponent},{path:'update/:pmid',component:UpdateComponent},
{path:'type',component:TypeComponent},{path:'sort',component:SortComponent},
{path:'newproduct',component:NewproductComponent},
{path:'updateordelete',component:UpdateordeleteComponent,
children:[{path:'update/:pmid',component:UpdateComponent}]},
{path:'update',component:UpdateComponent},{
  path:'search',component:SearchComponent
},{path:'sort',component:SortComponent,children:[{path:'type/:ptype',component:TypeComponent},{path:'yourorder',component:YourorderComponent}]}]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddproductComponent,
    UpdateordeleteComponent,
    UpdateComponent,
    SearchComponent,
    TypeComponent,
    SortComponent,
    YourorderComponent,
    NewproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
 providers: [
//    {
//     provide: HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true
//   },
// {
//   provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true
// },
GisbuyService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
