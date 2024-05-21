import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/implementations/auth.service";

export const pokedexGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentRole = authService.currentRol();

  if (
    authService.isLoggedIn() &&
    (currentRole === "Administrator" || currentRole === "Tester")
  ) {
    return true;
  }

  return router.parseUrl("/login");
};
