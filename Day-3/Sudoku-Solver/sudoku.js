function solve(matrix) {
  for (var i = 0; i <= 8; i++) {
    for (var j = 0; j <= 8; j++) {
      //check for legitimate values
      if (matrix[i][j] != 0) {
        continue;
      }
      for (var k = 1; k <= 9; k++) {
        if (insert(matrix, i, j, k) == true) {
          matrix[i][j] = k;
          b = solve(matrix);
          if (b == true) {
            return true;
          }
          matrix[i][j] = 0;
        }
      }
      return false;
    }
  }

  return true;
}

function insert(matrix, i, j, k) {
  //check column and rows
  for (var a = 0; a <= 8; a++) {
    if (a != i && matrix[a][j] == k) {
      return false;
    }
  }
  for (var a = 0; a <= 8; a++) {
    if (a != j && matrix[i][a] == k) {
      return false;
    }
  }

  //check the 3 by 3 squares
  var y = Math.floor(i / 3) * 3;
  var x = Math.floor(j / 3) * 3;
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      if (a != i && b != j && matrix[y + a][x + b] == k) {
        return false;
      }
    }
  }
  return true;
}

function test() {
  var holder = [];
  for (var i = 0; i < 81; i++) {    
    //get the form values
    holder[i] = document.form[i].value;
    var matrix = [],j,k;

    // from 1 dimensional to matrix

    for (j = 0, k = -1; j < holder.length; j++) {
      if (j % 9 === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(holder[j]);
    }
  }

  solve(matrix);

  var solved = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      solved.push(matrix[i][j]);
      //make a one dimensional array from  solved matrix;
    }
  }

  for (var z = 0; z < solved.length; z++) {
    document.form[z].value = solved[z];
    //display the solved sudoku numbers
  }
}
