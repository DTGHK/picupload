import { 
    MatButtonModule,
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatNativeDateModule, 
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule
    
} from '@angular/material';



import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatInputModule,
        MatProgressSpinnerModule,
        MatDatepickerModule, 
        MatNativeDateModule,
        MatToolbarModule, 
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatRadioModule,
        MatTableModule,
        MatDialogModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [ 
        MatButtonModule, 
        MatCheckboxModule, 
        MatDatepickerModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatNativeDateModule,
        MatToolbarModule, 
        MatIconModule,
        MatCardModule,
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
