import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/implementations/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("user", [Validators.required]),
      password: new FormControl("123456", [Validators.required]),
    });
  }

  loginSubmit(){
    return this.authService.login(
      this.loginForm.get("username")?.value,
      this.loginForm.get("password")?.value
    );
  }

  signIn() {
    this.authService
      .login(
        this.loginForm.get("username")?.value,
        this.loginForm.get("password")?.value
      )
      .subscribe({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next: (res: any) => {
          sessionStorage.setItem("token", res);
          this.router.navigate(["/"]);
        },
      });

    console.log(this.authService.currentRol());
  }
}
