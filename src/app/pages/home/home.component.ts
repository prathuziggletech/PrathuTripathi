import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  work=[
    {
      id:'1',
      title:'Web Development',
      image:'assets/icons/icon-design.svg',
      content:'As a developer, I specialize in crafting customized, high-performing responsive websites for small, medium, and large-scale businesses and individuals.'
    },
    {
      id:'2',
      title:'Video Editing',
      image:'assets/icons/icon-photo.svg',
      content:'I specialize in creating high-quality video editing solutions to the specific needs of businesses or individuals.'
    },
    {
      id:'3',
      title:'Ecommerce Development',
      image:'assets/icons/icon-app.svg',
      content:'I offer tailored ecommerce solutions that are ready to launch for your business, a user-friendly interface with a visually-appealing design.'
    },
    {
      id:'4',
      title:'Application Development',
      image:'assets/icons/icon-dev.svg',
      content:'I offer comprehensive mobile app development for your business needs, including expert development for PWA platforms, providing a best solution for all your needs.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
