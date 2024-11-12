import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlanoEdificioComponent } from './plano-edificio/plano-edificio.component';
import { CreditosComponent } from './creditos/creditos.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';



export const routes: Routes = [ 
    { path: '', component: InicioComponent },
    { path: 'Inicio', component: InicioComponent },
    { path: 'Busqueda', component: PlanoEdificioComponent },
    { path: 'Creditos', component: CreditosComponent },
    { path: 'Evaluacion', component: EvaluacionComponent }
];

