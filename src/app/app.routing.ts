import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UsersComponent} from './users/users.component';
export const routes:Routes=[
    {
        path:'',
        redirectTo:"/users",
        pathMatch:'full'
    },
      {
        path:'users',
        component:UsersComponent
        // children:[
        //     {
        //     path:'',
        //    component:userListComponent,
        //     },
        //      {
        //     path:'create',
        //    component:userCreateComponent,
        //     },
        //     {
        //     path:':id',
        //    component:userSingleComponent,
        //     }
        //      {
        //     path:':id/edit',
        //    component:userEditComponent,
        //     }
        // ]
        },
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
