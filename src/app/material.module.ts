import { 
    MatButtonModule,
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule
    
} from '@angular/material';



import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatInputModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatToolbarModule, 
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [ 
        MatButtonModule, 
        MatCheckboxModule, 
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule, 
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatRadioModule,
        MatPaginatorModule,
        MatExpansionModule
    ]

})

export class MaterialModule {}
