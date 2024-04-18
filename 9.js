valArray1 = [121, 324, 42, 31];
valArray2 = [232, 131, 443];
myJson = {objArray1: {}, objArray2: {}};
for (var k = 1; k < valArray1.length; k++) {
    var objName = 'obj' + k;
    var objValue = valArray1[k];
    myJson.objArray1[objName] = objValue;
}
for (var k = 1; k < valArray2.length; k++) {
    var objName = 'obj' + k;
    var objValue = valArray2[k];
    myJson.objArray2[objName] = objValue;
}
console.log(JSON.stringify(myJson));



