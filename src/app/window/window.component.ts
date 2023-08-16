import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  items: string[] = [];
  shownitems: string[] = [];
  here: number= 8;
  scrollTimeout: any;
  lastScrollPosition: any;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.items.push(` ${i + 1}`);
    }
    
    console.log(this.items);
    for (let i = 0; i < 8; i++) {
      this.shownitems[i] += this.items[i];
      console.log(this.items[i]);
    }
  }


  scroll(){
    const scrollContainer = document.querySelector('.cutewindow .list');

    if (scrollContainer) {
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        console.log("Scrolling Down");
        this.scrollDown();
        // Burada scroll down işlemlerini yapabilirsiniz
      } else if (scrollContainer.scrollTop === 0) {
        console.log("Scrolling Up");
        this.scrollUp();
        // Burada scroll up işlemlerini yapabilirsiniz
      }
    }
  }
  
  scrollUp() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.loadItems(1);
    }, 500); // 300 milisaniye bekleyecek, istediğiniz süreyi ayarlayabilirsiniz
  }

  scrollDown() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.loadItems(0);
    }, 500); // 300 milisaniye bekleyecek, istediğiniz süreyi ayarlayabilirsiniz
  }
  loadItems(control:number) {
    

    this.shownitems = [];

    if(control == 1){
      for (let i = 0; i < 8; i++) {
          this.shownitems.push(this.items[this.here + i]);
        }
        this.here+=8;
    }

    if(control == 0){
      console.log(this.here);
      for (let i = 0; i < 8; i++) {
        if (this.here < this.items.length) {
          this.shownitems.push(this.items[this.here + i]);
        }
      }
      if( this.here <=8 )
        this.here-=8;
    }

  }
  

}
  
