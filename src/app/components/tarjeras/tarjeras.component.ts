import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjeras",
  templateUrl: "./tarjeras.component.html",
  styles: []
})
export class TarjerasComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  verArtista(item: any) {
    console.log(item);
    let artistaId;

    if (item.type === "artist") {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(["/artist", artistaId]);
  }
}
