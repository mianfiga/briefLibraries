import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [
    {id: 1, text: 'Buy food'},
    {id: 2, text: 'Clean the car'},
    {id: 3, text: 'Another thing'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
