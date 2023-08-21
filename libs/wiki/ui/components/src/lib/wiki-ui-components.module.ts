import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarfieldContainerComponent } from './containers/starfield-container/starfield-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarfieldContainerComponent],
  exports: [
    StarfieldContainerComponent
  ]
})
export class WikiUiComponentsModule {}
