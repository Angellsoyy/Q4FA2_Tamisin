function generateTable() {
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    var table = document.getElementById('table');

    table.innerHTML = '';

    if (start < 2 || start > 10 || end < 2 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    var html = '<table>';
    for (var i = 1; i <= 10; i++) {
        html += '<tr>';
        for (var j = start; j <= end; j++) {
            html += '<td>' + j + ' x ' + i + ' = ' + (j * i) + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';

    table.innerHTML = html;
}
