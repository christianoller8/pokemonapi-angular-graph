import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    console.log(username, password);

    return this.http.post(environment.JWT_URL, {
      username: username,
      password: password,
    });
  }

  isLoggedIn() {
    return sessionStorage.getItem("token");
  }

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  currentRol() : string{
    const token = sessionStorage.getItem("token");

    let decoded;
    if(token){
      decoded = jwt_decode(token) as any;
      return decoded.role;
    }

    return "";
  }
}
