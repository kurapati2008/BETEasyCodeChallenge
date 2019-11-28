import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material';
import {MatTableModule } from '@angular/material';
import {MatButtonModule } from '@angular/material';


const modules: any[] = [

  LayoutModule,

  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatNativeDateModule,
  MatTableModule,
  MatButtonModule
];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class AngularMaterialModule {}
