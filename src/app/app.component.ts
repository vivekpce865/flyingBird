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

      if (document.documentElement.scrollTop > 20) {
        $('.nav li').removeClass('active');
        $('.nav li:first a').removeClass('active')
        document.getElementById("toTop").style.display = "block";
    }else if(document.documentElement.scrollTop === 0){
      $('.nav li:first a').addClass('active');
      document.getElementById("toTop").style.display = "none";
    }
  
  }
  onWindowScroll(){
    if (document.documentElement.scrollTop > 20) {
      $('.nav li').removeClass('active');
      document.getElementById("toTop").style.display = "block";
  }else{
    $('.nav li:first a').addClass('active');
    document.getElementById("toTop").style.display = "none";
  }
  }
  bottomToTop(){
      $('.nav li:first a').addClass('active')
      document.documentElement.scrollTop = 10;
  
  }
  ngOnInit(){
    document.body.scrollTop = 0;
    document.getElementById("toTop").style.display = "none";
  }
}

