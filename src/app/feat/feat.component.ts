import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.css']
})
export class FeatComponent implements OnInit {
  any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.any = this.route.snapshot.params['any'];
    this.route.params.subscribe(
      (params) => {
        this.any = params['any'];
      }
    );
  }

}
