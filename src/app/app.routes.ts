import { Routes } from '@angular/router';

import { SignalsBasics } from './signals-basics/signals-basics';
import { LinkedSignals } from './linked-signals/linked-signals';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signals-basics',
        pathMatch: 'full'
    },
    {
        path: 'signals-basics',
        component: SignalsBasics
    },
    {
        path: 'linked-signals',
        component: LinkedSignals
    }
];
