import { concat, fromEvent, of } from "rxjs";
import { buffer, delay, filter, map, scan, switchMap, takeUntil } from "rxjs/operators";

const display = document.body.appendChild(document.createElement("div"));

const arrowMap = {
    ArrowUp: "&#8593",
    ArrowRight: "&#8594",
    ArrowDown: "&#8595",
    ArrowLeft: "&#8592",
};

function ofKey(...keys: string[]) {

    return filter<KeyboardEvent>(value => keys.includes(value.key));
}

function getIcon(key: string) {
    return arrowMap[key as keyof typeof arrowMap];
}

const keydown$ = fromEvent<KeyboardEvent>(window, "keydown");

const arrows$ = keydown$.pipe(
    ofKey(...Object.keys(arrowMap)),
    map(value => value.key),
    map(getIcon),
);

arrows$.pipe(
    buffer(keydown$.pipe(ofKey("Enter"))),
    switchMap(keys => concat(
        ...keys.map(
            value => of(value).pipe(
                delay(200),
            ),
        ),
    ).pipe(
        takeUntil(arrows$),
        scan((acc, value) => acc + value),
    )),
).subscribe(function (value) {
    display.innerHTML = value;
});

arrows$.subscribe(value => display.innerHTML = value);