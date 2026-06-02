import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import {Contacts} from './contacts/contacts';
import { AboutUs } from './about-us/about-us';  
import { Hero } from './hero/hero';
import {Menu} from './menu/menu';


export const routes: Routes = [
    { path: '', component: Hero },
    { path: 'contacts', component: Contacts },
    { path: 'about-us', component: AboutUs },
    { path: 'menu', component: Menu },


  ];


