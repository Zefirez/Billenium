'use strict';

function Grinch3(width, sections, offTheTop, outline,color) {
    
    //zmienne do dodania (lub nie - w zależności od konsoli) opcji koloryzacji choinki
    var colorFlag='%c ';
    color='color:'+color;
    
    init();
    //wstępne ustawienie niepodanych argumentów
    function init() {
        width = width || 5;
        sections = sections || 1;
        offTheTop=offTheTop || 0;
        (typeof Window === 'undefined') && (color=colorFlag='');
        
        if(filter()) {
            section(sections);
            trunk();
        }
    }
  
    function filter(){
        switch(false) {
            case Number.isInteger(width) && width>0:
                console.log('%c Pierwszy parametr funkcji nie jest liczbą naturalną większą od 0','color:#ff0000');
                return false;
            case Number.isInteger(sections) && sections>0:
                console.log("%c Drugi parametr funkcji nie jest liczbą naturalną większą od 0",'color:#ff0000');
                return false;
            case Number.isInteger(offTheTop) && offTheTop>=0:
                console.log("%c Trzeci parametr funkcji nie jest liczbą naturalną",'color:#ff0000');
                return false;
                
            default:
                width = width+Math.pow(0,width%2);                
                return true;
        }
    }
    //wydruk sekcji drzewa
    function section(n,emptySpace) {
        emptySpace = emptySpace || width-1;
        while(emptySpace>0) {
            printLine(emptySpace,outline&&(emptySpace-2));
            emptySpace-=2;
        }
        emptySpace = width-1-offTheTop*2;
        n>1 && section(n-1,emptySpace);
    }
    
    //wydruk pnia i podstawy
    function trunk() {
        var trunkWidth = Math.min(1+offTheTop*2,width);
        var baseWidth = Math.min(trunkWidth*2+1,width);
        for(var i=0;i<3;i++) {
            if (i==2) {trunkWidth=baseWidth;}
            printLine(width-trunkWidth);
        }
    }
    
    
    //wydruk linii obrazu
    function printLine(emptySpace,hollow){
        var fillCharacter = hollow?" ":"*";
        var emptySpaceString = new Array(emptySpace/2).fill(" ").join("");
        var stars = new Array(width-emptySpace).fill(fillCharacter);
        stars[0]=stars[stars.length-1]="*";
        stars = stars.join("");
        
        console.log(colorFlag+emptySpaceString+stars,color);
    }
}

Grinch3(18,2,3,true,"#990033");