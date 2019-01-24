import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tarjeras",
  templateUrl: "./tarjeras.component.html",
  styles: []
})
export class TarjerasComponent {
  @Input() items: any[] = [];

  constructor() {}
}
