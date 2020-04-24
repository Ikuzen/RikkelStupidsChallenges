import { concat, fromEvent, of } from "rxjs";
import { buffer, delay, filter, map, switchMap, scan,tap } from "rxjs/operators";

const display = document.body.appendChild(document.createElement("div"));

const arrowKeyMap = {
    ArrowUp: "&#8593",
    ArrowRight: "&#8594",
    ArrowDown: "&#8595",
    ArrowLeft: "&#8592",
};

function ofKey(...keys: string[]) {

    return filter<KeyboardEvent>(value => keys.includes(value.key));
}

function getIcon(key: string) {

    return arrowKeyMap[key as keyof typeof arrowKeyMap];
}

const keydown$ = fromEvent<KeyboardEvent>(window, "keydown");

const keyEnter$ = keydown$.pipe(ofKey("Enter"));

const arrows$ = keydown$.pipe(
    ofKey(...Object.keys(arrowKeyMap)),
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
        scan((acc, value) => acc + value),
    )),
).subscribe(function (value) {
    display.innerHTML = value;
});

arrows$.subscribe(value => display.innerHTML = value);