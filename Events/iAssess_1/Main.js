<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        #myDiv {
            width: 400px;
            height: 200px;
            border: 1px solid black;
        }
    </style>
    <script>
        function addSize() {
            var widthElem = document.getElementById('myDiv').offsetWidth;
            var heightElem = document.getElementById('myDiv').offsetHeight;
            document.getElementById('myDiv').style.width = widthElem + 8 + 'px'
            document.getElementById('myDiv').style.height = heightElem + 8 + 'px'

        }
    </script>

</head>

<body>
    <h1>Increase width and height of div</h1>
    <div id="myDiv" ondblclick="addSize()">
        <h3>Pink frag Event Organization</h3>
        Our events team handles all your requirements from conceptuallization to execution,leaving you free to foocus completely on achieving your objectives. With proper planning and logistics management and the ability to activate requisite resources, we have
        undertaken a wide variety of projects.
    </div>

</body>

</html>
