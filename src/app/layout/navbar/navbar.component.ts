import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  scrolling:boolean=false

  ngOnInit(): void {
    this.activeMenu()
    window.addEventListener("scroll",this.activeMenu)
  }
  @HostListener("document:scroll") 
  onWindowScroll() {
   if(document.body.scrollTop>=50 || document.documentElement.scrollTop>=50)
   {
    this.scrolling=true
   }
   else {
    this.scrolling=false

   }
  }

  activeMenu(){
    const a=document.querySelectorAll(".links")
    const sec=document.querySelectorAll("section")

      let len=sec.length
      while(--len&& window.scrollY+ 1100 < sec[len].offsetTop){}
      
      a.forEach(itx => {itx.classList.remove("active")});
      a[len].classList.add("active")
  }

}
