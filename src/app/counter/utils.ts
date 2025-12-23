import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { interval, map } from "rxjs";

export const startEvenCounter = () => {
    interval(500)
        .pipe(takeUntilDestroyed())
        .pipe(map((value) => value * 2))
        .subscribe((value) => {
            console.log('Even Counter: ', value);
        });
}