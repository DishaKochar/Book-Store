import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthguardGuard } from "./auth/authguard.guard";

const routes: Routes= [
    {path: '',redirectTo:'login',pathMatch:'prefix'},
    {path:'books',component: BooksComponent},
    //{path:'cart',component: CartComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthguardGuard],
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
