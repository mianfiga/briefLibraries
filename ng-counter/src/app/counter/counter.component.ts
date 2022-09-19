import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor(public counter_: CounterService) { 
  }

  ngOnInit(): void {
  }

  increase = () => this.counter++;

  decrease = () => this.counter--;

}



