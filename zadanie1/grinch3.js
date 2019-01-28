function Grinch3(width, sections, offTheTop) {
    
    init();
    //wstępne ustawienie niepodanych argumentów
    function init(){
        width = width||5;
        sections = sections||1;
        offTheTop=offTheTop||0;
        
        if(filter()) {
            section(sections);
            trunk();
        }
    }

    
    function filter(){
        switch(false) {
            case Number.isInteger(width) && width>0:
                console.log("Pierwszy parametr funkcji nie jest liczbą naturalną większą od 0");
                return false;
            case Number.isInteger(sections) && sections>0:
                console.log("Drugi parametr funkcji nie jest liczbą naturalną większą od 0");
                return false;
            case Number.isInteger(offTheTop) && offTheTop>=0:
                console.log("Trzeci parametr funkcji nie jest liczbą naturalną");
                return false;
                
            default:
                width = width+Math.pow(0,width%2);
                return true;
        }
    }
    //wydruk sekcji drzewa
    function section(n,emptySpace) {
        if (n>0) {
            emptySpace = emptySpace || width-1;
            while(emptySpace>0) {
                console.log(printLine(width,emptySpace));
                emptySpace-=2;
            }
            emptySpace = width-1-offTheTop*2;
            section(n-1,emptySpace);
        }
        return true;
    }
    
    //wydruk pnia i podstawy
    function trunk() {
        var trunkWidth = Math.min(1+offTheTop*2,width);
        var baseWidth = Math.min(trunkWidth*2+1,width);
        for(var i=0;i<3;i++) {
            if (i==2) {trunkWidth=baseWidth;}
            console.log(printLine(width,width-trunkWidth));
        }
    }
    
    
    //wydruk linii obrazu
    function printLine(width, emptySpace){
        var emptySpaceArr = new Array(emptySpace/2).fill(" ").join("");
        var stars = new Array(width-emptySpace).fill("*").join("");
        return emptySpaceArr+stars;
    }
}

Grinch3(22,-6.54,1);