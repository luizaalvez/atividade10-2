function js_add_rows() {
    var numRowsInput = document.getElementById("txtNumRows");
    var numRows = parseInt(numRowsInput.value);
  
    // Verificar se o valor é um número e está entre 1 e 10
    if (isNaN(numRows) || numRows < 1 || numRows > 10) {
      alert("Por favor, digite um número válido entre 1 e 10.");
    } else {
      var table = document.getElementById("sampleTable");
  
      for (var i = 0; i < numRows; i++) {
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = "Nova linha cell1";
        cell2.innerHTML = "Nova linha cell2";
      }
  
      numRowsInput.value = ""; // Limpa o campo de entrada
    }
  }
  