import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'TemplateConfigScss';
  isActive: boolean = false;

  constructor(private rederer2: Renderer2){
    
  }
  ngAfterViewInit(): void {
    this.rederer2.addClass(document.body, 't-dark');
  }


  submit(){
    this.isActive = !this.isActive;
  }

  themeLight(){
    this.rederer2.removeClass(document.body, 't-dark');
    this.rederer2.addClass(document.body, 't-light');
  }
  themeDark(){
    this.rederer2.removeClass(document.body, 't-light');
    this.rederer2.addClass(document.body, 't-dark');
  }
}
