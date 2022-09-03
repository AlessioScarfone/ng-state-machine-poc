import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end',
  template: `
    <p>
      end works!
    </p>
  `,
  styles: [
    'p { background-color:red; padding: 1rem; border: 1px solid black; }'
  ]
})
export class EndComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
