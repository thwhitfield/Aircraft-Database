(function() {

    document.addEventListener('DOMContentLoaded', function() {

        var gridDiv = document.querySelector('#myGrid');

        var gridOptions = {
            defaultColDef: {
				resizable: true,
				sortable: true,
				filter: true,
				minWidth: 50
			},
			
			
			columnDefs: [
				{headerName: 'Aircraft', field: 'index'},
				{headerName: 'Match 1',field:'0'},
				{headerName: 'Match 2',field:'1'},
				{headerName: 'Match 3',field:'2'},
				{headerName: 'Match 4',field:'3'},
				{headerName: 'Match 5',field:'4'}
				



				// {headerName: 'Manufacturer', field: 'manufacturer'},
				// {headerName: 'Role', field: 'role'},
				// {headerName: 'National Origin', field: 'national_origin'},
				// {headerName: 'First Flight', field: 'first_flight_date'},
				// {headerName: 'Number Built', field: 'number_built_qty'},
				// {headerName: 'Wingspan (ft)', field: 'wingspan_ft'},
				// {headerName: 'Length (ft)', field: 'length_ft'},
				// {headerName: 'Height (ft)', field: 'height_ft'},
				// {headerName: 'Empty Weight (lb)', field: 'empty_weight_lb', filter: 'agNumberColumnFilter'},
				// {headerName: 'Gross Weight (lb)', field: 'gross_weight_lb', filter: 'agNumberColumnFilter'},
				// {headerName: 'Maximum Speed (knots)', field: 'maximum_speed_kn', filter: 'agNumberColumnFilter'},
				// {headerName: 'Cruise Speed (knots)', field: 'cruise_speed_kn', filter: 'agNumberColumnFilter'},
				// {headerName: 'Stall Speed (knots)', field: 'stall_speed_kn', filter: 'agNumberColumnFilter'}				
            ],
        };

        new agGrid.Grid(gridDiv, gridOptions);

        jsonLoad( function(data) {
            gridOptions.api.setRowData(data);
        });
    });
})();


function jsonLoad(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'best_matches.json'); // by default async
    xhr.responseType = 'json'; // in which format you expect the response to be

    xhr.onload = function() {
        if(this.status == 200) {// onload called even on 404 etc so check the status
            callback(this.response);
        }
    };

    xhr.onerror = function() {
        console.log('loading data error');
    };

    xhr.send();
}

function CustomTooltip () {}

CustomTooltip.prototype.init = function(params) {
    var eGui = this.eGui = document.createElement('div');
    var color = params.color || 'white';
    var data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;


    eGui.classList.add('custom-tooltip');
    eGui.style['background-color'] = color;
    eGui.innerHTML =
        '<p><span class"name">' + data.aircraft + '</span></p>';
        // '<p><span>Country: </span>' + data.country + '</p>' +
        // '<p><span>Total: </span>' + data.total + '</p>';
};

CustomTooltip.prototype.getGui = function() {
    return this.eGui;
};
