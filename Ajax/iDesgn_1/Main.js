<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h2> Book Details</h2>
<label for="category">Filter by Category</label>
<select id="category">
    
    <option value="Drama">Drama</option>
    <option value="Science fiction">Science fiction</option>


</select>
<button id="display" onclick="loadDoc()">Filter </button>
<div id="result">
    <table id="demo"></table>
    
</div>
<script>
    function loadDoc(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                myfunction(this);


            }
        };
        xhttp.open("GET","bookDetails.xml",true);
        xhttp.send();

    }

    function myfunction(xml){
        var i;
        var xmlDoc=xml.responseXML;
        var table="<tr><td>Name</td><td>Author</td><td>Price</td><td>Publication</td></tr>";
        var x=document.getElementById("category").value;
        var xhttp=xmlDoc.getElementsByTagName("book");
        for(i=0;i<xhttp.length;i++){
            if(xhttp[i].getAttribute("category")==x){
                table+="<tr><td>"+xhttp[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"</td>";
                table+="<td>"+xhttp[i].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</td>";
                table+="<td>"+xhttp[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"</td>";
                table+="<td>"+xhttp[i].getElementsByTagName("publication")[0].childNodes[0].nodeValue+"</td></tr>";
            }
        }
        document.getElementById("demo").innerHTML=table;
    }
</script>
