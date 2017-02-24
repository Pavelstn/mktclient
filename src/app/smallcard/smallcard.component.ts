/**
 * Created by pavel on 22.02.17.
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'smallcard',

    template: require('./smallcard.component.html'),

})

export class SmallCardComponent{
    @Input() data = {};

    constructor(){}

}
