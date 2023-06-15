import {CanActivateFn, Router} from "@angular/router";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "./auth-service";

export const authGuard:  CanActivateFn =  (route, state) : Observable<boolean> | Promise<boolean> | boolean => {
   const authService = inject(AuthService);
   const router = inject(Router);
   if(authService.isAuth) {
     return true;
   }else{
     router.navigate(['/auth']);
     return false;
   }
}


