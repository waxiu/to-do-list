import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule
];

@NgModule({
  imports: [ MATERIAL_MODULES ],
  exports: [ MATERIAL_MODULES ],
})
export class MaterialModule { }
