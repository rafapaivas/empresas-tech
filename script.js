//efeito fade in
$(document).ready(function(){
  $("body").fadeIn("slow");
});

//slide up-down da tabela 01
$(document).ready(function(){
  $("#slide-tec").click(function(){
    $("#tecnologia").slideToggle("slow");
  });
});

//slide up-down da tabela 02
$(document).ready(function(){
  $("#slide-banco").click(function(){
    $("#banco").slideToggle("slow");
  });
});

//função para classificar as colunas da tabela 01
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tecnologia");
    switching = true;
    
    dir = "asc"; 
    
    while (switching) {
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  
//função para classificar as colunas da tabela 02
function sortTabela(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("banco");
    switching = true;
    
    dir = "asc"; 
    
    while (switching) {
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  