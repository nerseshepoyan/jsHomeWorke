
function checkString(string1,string2 )
{
  var checkString = true;

    if(string1.length == string2.length){
        for(var i = 0;  i < string1.length; ++i){
            if(string1[i] != string2[i]){
                checkString =  false;
            }
        }

 }else{
     checkString = false;
 }
return checkString;
}


var check = checkString('aaaa', 'aaab');

console.log(check);
function unknown(arr1, ...arrn) {
    




}
