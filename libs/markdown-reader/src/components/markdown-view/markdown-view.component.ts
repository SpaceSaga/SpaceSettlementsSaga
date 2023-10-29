import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'space-settlements-saga-markdown-view',
  template: `
    md-start
    <div class="markdown-container" *ngIf="filepath !== undefined">
      <markdown katex mermaid  [src]="filepath"> </markdown>
    </div>
  `,
  styleUrls: ['./markdown-view.component.css'],
})
export class MarkdownViewComponent implements OnInit{
  @Input() filepath = '';
  markdownContent = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.filepath) {
      this.http.get(this.filepath, { responseType: 'text' }).subscribe(
        (data) => {
          this.markdownContent = data;
        }
      );
    }
  }
}
