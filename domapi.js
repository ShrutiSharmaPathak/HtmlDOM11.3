var string1="";
var i=0;
function showAttri()
{
    /*var attris = document.getElementById("google").attributes;
    Array.prototype.slice.call(attris).forEach(function(item) {
    string1=item.name+' : '+item.value+ '<br>'+string1;
    });*/
    for (let attr of google.attributes)     /// return the name-value properties of collection of objects represented by div with id 'google'    
                                            // google.attributes returns the collection of objects 
    {                                       //that belong to a built-in Attr class, with name and value properties
                                            //Attr object represents Html arrtibutes.
       // alert( `${attr.name} = ${attr.value}` );
       string1=attr.name+' : '+attr.value+ '<br>'+string1;
    }
    document.getElementById("attrs").innerHTML=string1; //showing the results in <div>
}
function removeAttri()
{
    document.getElementById("attrs").innerHTML="";// removing the result shown in div
}