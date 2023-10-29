import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { components } from '../components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    MarkdownModule.forChild(),
  ],
  exports: [components],
})
export class MarkdownReaderModule {}
