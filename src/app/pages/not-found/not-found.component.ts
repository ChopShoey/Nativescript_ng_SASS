import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/ui/page/page";

@Component({
  selector: "ns-not-found",
  templateUrl: "./not-found.component.html",
  moduleId: module.id
})
export class NotFoundComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    //
  }

  onTap(eventData: EventData) {
    this.routerExtensions.back();
  }
}
