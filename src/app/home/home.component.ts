import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuMobile: boolean=false;

  constructor() { }

  ngOnInit(): void {
    //testing git
  }
  menuDrop(event:any) {
    (<HTMLInputElement>document.getElementById("myDropdown")).classList.toggle("show");
       if (!event.target.matches('.dropbtn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
           }
         }
       }
     }

  bukaMenuMobile(){
    this.menuMobile=! this.menuMobile
  }   
  images = [
    {
      label: "First",
      path: "assets/img/adword.jpg"
    },
    {
      label: "Second",
      path: "assets/img/Larave.jpg"
    },
    {
      label: "Third",
      path: "assets/img/node.jpeg"
    },
    {
      label: "Fourth",
      path: "assets/img/react.jpg"
    }
  ]
}
