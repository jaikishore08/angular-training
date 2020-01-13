import { CanActivate, CanDeactivate, CanLoad } from "@angular/router";
import { LoginComponent } from '../login/login.component';

export class RouteGuard implements CanLoad {
    canLoad() {
        return false;
    }
}

export class RouteGuard2 implements CanDeactivate<LoginComponent> {
    canDeactivate(target: LoginComponent) {
        if(target.hasChanges()){
            confirm("Are you sure?");
        }
        return true;
    }
}