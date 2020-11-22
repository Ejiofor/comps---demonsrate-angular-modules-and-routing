import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name:'sara', city:'Hamburg', job: 'singer'},
    {name:'Obi', city:'Munich', job: 'Footballer'},
    {name:'Emea', city:'Bremen', job: 'Engineer'}
  ];

  headers = [
    {key:'name', label:'name'},
    {key:'city', label:'city'},
    {key:'job', label:'job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
