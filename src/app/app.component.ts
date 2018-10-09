import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flyingBird';
  //sections;
constructor(){

}
  //navbarOpen = true;

  toggleNavbar() {
      $('#basicExampleNav').addClass('hide');
      $('#basicExampleNav').removeClass('show');
  }
  onElementScroll($event){
      $('.nav li').removeClass('active');
    

  }
  // ngOnInit(){
  //   $('.scrollspy-example').scrollspy({ target: '#basicExampleNav' })
  // }
}

