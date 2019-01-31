'use strict';

function Grinch4(width, sections, offTheTop, fill, color) {
    
    init();
    //wstępne ustawienie niepodanych argumentów
    function init() {
        width = width || 5;
        sections = sections || 1;
        offTheTop=offTheTop || 0;
        fill = fill || "*";
        if (typeof Window==='undefined' || typeof color === 'udefined') colorPrint=console.log;
        
        section(sections);
        trunk();
    }
  
    //wydruk sekcji drzewa
    function section (repeats) {
        var linesCount = (width+1)/2;
        for(var i=(sections-repeats) && offTheTop;i<linesCount;i++) {
            colorPrint(lineString(linesCount-i," ")+lineString(i*2,(linesCount-i-1)?fill:"*"));
        }
        repeats>1 && section(repeats-1);
    }
    
    //wydruk pnia i podstawy
    function trunk() {
        var trunkWidth = Math.min(offTheTop*2+1,width);
        var baseWidth = Math.min(trunkWidth*2+1,width);
        for(var i=0;i<4;i++) {
            if (i==3) {trunkWidth=baseWidth;}
            colorPrint(lineString((width-trunkWidth)/2+1," ")+lineString(trunkWidth-1,fill));
        }
    }
    
    
    //wydruk linii obrazu
    function lineString(length, filler) {
        return (length)? new Array(length-1).fill(filler).join("")+'*':'';
    }
    
    function colorPrint(text){
        console.log('%c '+text,'color:'+color)
    }
}

Grinch4(7,2,1,"*","#00aa33");