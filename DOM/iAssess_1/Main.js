<html>

<body>
<!--  fill your code here -->
 <h1>Grade Sheet</h1>
    <p>Marks
        <input type="text" id="mark" name="mark"></p>
    <input type="button" name="submit" value="Submit" onclick="myFunction()"><br>
    <div id="result">
    </div>
    <script>
        function myFunction() {
            var x = (document.getElementById("mark").value);
            if (x == 100)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : A+"
            else if (x < 100 && x >= 90)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : A";
            else if (x < 90 && x >= 80)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : B";
            else if (x < 80 && x >= 70)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : C";
            else if (x < 70 && x >= 60)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : D";
            else if (x < 60 && x >= 50)
                document.getElementById("result").innerHTML = "Grade obtained by the student is : E";
            else
                document.getElementById("result").innerHTML = "Grade obtained by the student is : RA";
        }
    </script>

</body>
</html>
