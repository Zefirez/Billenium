/*
1. prostokąt, składający się ze spacji i gwiazdek.
2. każda górna część jest powtarzalna, pętla + modulo
3. pień jest stały
4. podstawa też
5. a poza tym to nienawidzę świąt i UE.
*/

function topTree(branches, height) {
    //upewnienie się że liczba podanych gałęzi jest liczbą oraz jej zaokrąglenie jeżeli jest dziesiętna.
    var branches = (!isNaN(branches))&&branches>0?Math.round(branches):1;
    var height = (!isNaN(height))&&height>0?Math.ceil(branches):1;
    var indent = 0;

    for (var i = 0; i<Math.ceil(height/2);i++) {
        var line = "";
        indent = (height - i*2-1);
        for (var z =0;z<height;z++) {
            if((z<(indent/2)) || ((z+1)>(height-indent/2))) {
                line += " ";
            } else {
                line +=("*");
            }
        }
        console.log(line);
    }
    
    for (var i=0;i<2;i++){
        var line ="";
        
        for(var z=0;z<height;z++){
            if (z==Math.floor(height/2)) {
                line+="*";
            } else {
                line+=" ";
            }
        }
        
        console.log(line);
    }
}

topTree(77,5);