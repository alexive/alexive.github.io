import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalizeFileNamePipe } from './normalize-file-name.pipe';

@NgModule({
  declarations: [NormalizeFileNamePipe],
  exports: [NormalizeFileNamePipe],
  imports: [
    CommonModule
  ]
})
export class CommonAppModule { }
