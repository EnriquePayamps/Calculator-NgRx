import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment.prod';
import { AppComponent } from '../app.component';
import { CalculatorStoreModule } from '../calculator/store/store.module';
export interface AppStoreState{}
@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({}),
        CalculatorStoreModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    bootstrap: [AppComponent]
})
export class AppStoreModule {}