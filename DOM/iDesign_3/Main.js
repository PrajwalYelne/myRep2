<!DOCTYPE html>
<head>
    <script>
        function welcome() {
            const x = document.getElementById("name").value;
            document.getElementById("result").innerHTML = `<h2> Welcome ${x}</h2>`;


        }
    </script>


</head>

<body>
    <h1>Welcome Page</h1>
    <p>Name
        <input type="text" id="name" name="Name"></p>
    <input type="button" id="post" value="Post" onclick="welcome()"><br>
    <div id="result">

    </div>


</body>

</html>
