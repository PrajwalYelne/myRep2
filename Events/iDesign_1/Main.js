<!DOCTYPE html>
<html>
<head>
    <style>
        #div1 {
            border: 1px solid black;
            width: 200px;
            height: 100px;
            background-color: none;
            text-align: center;
        }
        
        #div2 {
            border: 1px solid black;
            width: 200px;
            height: 100px;
            background-color: none;
            text-align: center;
        }
        
        #div3 {
            border: 1px solid black;
            width: 200px;
            height: 100px;
            background-color: none;
            text-align: left;
        }
        
        #div4 {
            border: 1px solid black;
            width: 200px;
            height: 100px;
            background-color: none;
            text-align: left;
        }
        
        .class1 {
            font-size: 30px;
            background-color: #20c5b5;
            color: white;
            text-align: center;
        }
        
        .class2 {
            font-size: 30px;
            background-color: #fa8072;
            color: white;
            text-align: center;
        }
        
        .class3 {
            font-size: 30px;
            background-color: #7d8c9b;
            color: white;
            text-align: center;
        }
        
        .class4 {
            font-size: 30px;
            background-color: #7ba428;
            color: white;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Pink Frag Event Organization</h1>
    <button id="add" onclick="addClass()">Add</button>
    <button id="remove" onclick="removeClass()">Remove</button>
    <button id="toggle" onclick="toggleClass()">Toggle</button>
    <div id="div1" >Wedding Event </div>
    <div id="div2" >Conferences</div>
    <div id="div3" >Birthday Party</div>
    <div id="div4" >Trade Fairs</div>

</body>
<script>
    function addClass() {
        var a = document.getElementById("div1");
        var b = document.getElementById("div2");
        var c = document.getElementById("div3");
        var d = document.getElementById("div4");
        a.classList.add("class1");
        b.classList.add("class2");
        c.classList.add("class3");
        d.classList.add("class4");
    }

    function removeClass() {
        var a = document.getElementById("div1");
        var b = document.getElementById("div2");
        var c = document.getElementById("div3");
        var d = document.getElementById("div4");
        a.classList.remove("class1");
        b.classList.remove("class2");
        c.classList.remove("class3");
        d.classList.remove("class4");

    }

    function toggleClass() {
        var a = document.getElementById("div1");
        var b = document.getElementById("div2");
        var c = document.getElementById("div3");
        var d = document.getElementById("div4");
        a.classList.toggle("class1");
        b.classList.toggle("class2");
        c.classList.toggle("class3");
        d.classList.toggle("class4");

    }
</script>
</html>
