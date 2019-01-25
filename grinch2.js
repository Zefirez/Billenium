//funkcja generująca pojedynczą sekcję choinki

function branch(width,offTheTop) {
    var offTheTop = offTheTop?offTheTop:0;
    var empty = width-1-offTheTop*2;
    
    while (empty>=0) {
        console.log(generateLine(width,empty));
        empty-=2;           
    }
}

//funckcja generująca linię do wydruku.
//width to totalna szerokość obrazka i maksymalna choinki
//empty to łączna szerokość pustych pól w danej linii

function generateLine(width, empty) {
    var emptyArr = new Array(empty/2).fill(" ").join("");
    var stars = new Array(width-empty).fill("*").join("");
    return emptyArr+stars+emptyArr;
}

//ta funkcja generuje pełne drzewo wraz z pniem i podstawą
//
function tree (width,nrOfSections,offTheTop) {
    var topTrim=0;
    while(nrOfSections>0) {
        branch(width,topTrim);
        topTrim=offTheTop;
        nrOfSections--;
    }
    
    var trunkWidth = 1+offTheTop*2
    for(var i=0;i<3;i++) {
        if (i==2) {trunkWidth=trunkWidth*2+1;}
        console.log(generateLine(width,width-trunkWidth));
    }
}

tree(17,3,1);