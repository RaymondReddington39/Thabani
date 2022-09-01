<!DOCTYPE html>
<html>
<head>
    <title>HTML dynamic table using JavaScript</title>
    <script type="text/javascript" src="project.js"></script>
</head>
<body onload="load()">
<div id="myform">
<b>Table Form</b>
<table>
    <tr>
        <td>Name:</td>
        <td><input type="text" id="name"></td>
    </tr>
    <tr>
        <td>Age:</td>
        <td><input type="text" id="age>
        <input type="button" id="add" value="Add" onclick="Javascript:addRow()"></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
</table>
</div>
<div id="mydata">
<b>System Data</b>
<table id="myTableData"  border="10" cellpadding="10">
    <tr>
        <td>&nbsp;</td>
        <td><b>Name</b></td>
        <td><b>Age</b></td>
    </tr>
</table>
&nbsp;
 
<script>

function addRow() {
          
          var myName = document.getElementById("name");
          var age = document.getElementById("age");
          var table = document.getElementById("myTableData");
       
          var rowCount = table.rows.length;
          var row = table.insertRow(rowCount);
       
          row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
          row.insertCell(1).innerHTML= myName.value;
          row.insertCell(2).innerHTML= age.value;
       
      }
       
      function deleteRow(obj) {
            
          var index = obj.parentNode.parentNode.rowIndex;
          var table = document.getElementById("myTableData");
          table.deleteRow(index);
          
      }
       
      function addTable() {
            
          var myTableDiv = document.getElementById("myDynamicTable");
            
          var table = document.createElement('TABLE');
          table.border='1';
          
          var tableBody = document.createElement('TBODY');
          table.appendChild(tableBody);
            
          for (var i=0; i<3; i++){
             var tr = document.createElement('TR');
             tableBody.appendChild(tr);
             
             for (var j=0; j<4; j++){
                 var td = document.createElement('TD');
                 td.width='75';
                 td.appendChild(document.createTextNode("Cell " + i + "," + j));
                 tr.appendChild(td);
             }
          }
          myTableDiv.appendChild(table);
          
      }
       
      function load() {
          
          console.log("Page load finished");
       
      }
</script>
</body>
</html>