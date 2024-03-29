<!DOCTYPE html>
<html>
<style>
    body {
        text-align: center;
    }
    
    table,
    th,
    td {
        width: 50%;
        font-size: 18px;
        border: 1px solid black;
        border-collapse: collapse;
    }
    
    tbody tr:nth-child(odd) {
        background-color: #e0dfdf;
    }
    
    table.center {
        margin-left: auto;
        margin-right: auto;
    }
    
    button {
        padding: 5px;
        margin: 15px;
        cursor: pointer;
    }
</style>

<body>
    <table id="rateTable" class="center">
        <thead>
            <tr>
                <th>Month</th>
                <th>Income Rate</th>
            </tr>
        </thead>
        <tbody id="tbod">
            <tr>
                <td>January</td>
                <td>5.5</td>
            </tr>
            <tr>
                <td>February</td>
                <td>5.5</td>
            </tr>
            <tr>
                <td>March</td>
                <td>4.6</td>
            </tr>
        </tbody>
    </table>
    <button id="button" onclick="getMonths()">Get Months</button>
    <script>
        function getMonths() {
          document.getElementById("button").style.display = "none";
            var tables = document.getElementById("rateTable");
            var tbod = document.getElementById("tbod");
            tables.insertAdjacentHTML("beforebegin", "<h2>Rate table of monthly income</h2>");
            var node1 = document.createElement("tr");
            var node11 = document.createElement("td");
            var node12 = document.createElement("td");
            var textnode11 = document.createTextNode("April");
            var textnode12 = document.createTextNode("8");
            node11.appendChild(textnode11);
            node12.appendChild(textnode12);
            node1.append(node11);
            node1.append(node12);
            document.getElementById("tbod").appendChild(node1);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("May");
            var textnode12 = document.createTextNode("6");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("June");
            var textnode12 = document.createTextNode("7.2");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("July");
            var textnode12 = document.createTextNode("4.6");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("August");
            var textnode12 = document.createTextNode("6.9");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("September");
            var textnode12 = document.createTextNode("8.5");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("October");
            var textnode12 = document.createTextNode("9.4");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("November");
            var textnode12 = document.createTextNode("5.1");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);
            var x = node1.cloneNode();
            var y = node11.cloneNode();
            var z = node12.cloneNode();
            var textnode11 = document.createTextNode("December");
            var textnode12 = document.createTextNode("7.5");
            y.appendChild(textnode11);
            z.appendChild(textnode12);
            x.append(y);
            x.append(z);
            document.getElementById("tbod").appendChild(x);

        }
    </script>
</body>

</html>
