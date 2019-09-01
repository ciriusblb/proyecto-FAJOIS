 function doSearch() {
                var tableReg = document.getElementById('lista');
                var searchText = document.getElementById('busqueda').value.toLowerCase();
                for (var i = 0; i < tableReg.rows.length; i++) {
                    var cellsOfRow = tableReg.rows[i].getElementsByClassName('desplegar');
                    var found = false;
                    for (var j = 0; j < cellsOfRow.length && !found; j++) {
                        var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                        if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                            found = true;
                        }
                    }
                    if (found) {
                        tableReg.rows[i].style.display = '';
                    } else {
                        tableReg.rows[i].style.display = 'none';
                    }
                }
            }