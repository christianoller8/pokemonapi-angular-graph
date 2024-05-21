import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./features/landing/components/landing-page/landing-page.component";
import { LoginComponent } from "./features/login/login/login.component";
// import { homeGuard } from "./core/guards/home.guard";
// import { pokedexGuard } from "./core/guards/pokedex.guard";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
    // canActivate: [homeGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "pokedex",
    // canActivate: [pokedexGuard],
    loadChildren: () =>
      import("./features/pokedex/pokedex.module").then((m) => m.PokedexModule),
    
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
