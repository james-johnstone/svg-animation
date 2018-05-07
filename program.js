'use strict';

class ecologicalObject {


}

class animatable {

    constructor(svg, primaryColour, secondaryColour){
        this.svg = svg;
        this.isAlive = false;
        this.rotation = 0;
        this.pulse = null;
        this.primaryColour = primaryColour;
        this.secondaryColour = secondaryColour;
        this.activationLevel = 0;
    }

    getAnimatableGroupElements(){
        return [];
    }
}