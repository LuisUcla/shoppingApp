import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    standalone: true,
    imports: [RouterOutlet]
})

export class FullLayoutComponent  {
    constructor() { }
}