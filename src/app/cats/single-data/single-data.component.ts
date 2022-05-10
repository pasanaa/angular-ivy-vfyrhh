import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-single-data",
  templateUrl: "./single-data.component.html",
  styleUrls: ["./single-data.component.css"]
})
export class SingleDataComponent implements OnInit {
  id: string; // You can pass this id to the Service call
  routeSub: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  ngOnInit() {
    // Add your code here
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
