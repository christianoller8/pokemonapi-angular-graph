import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsPageComponent } from "./components/details-page/details-page.component";

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [CommonModule, DetailsRoutingModule],
  exports: [DetailsPageComponent],
})
export class DetailsModule {}
