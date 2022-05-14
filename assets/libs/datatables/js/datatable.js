$(document).ready(function() {

    // DataTable initialisation
    $('#datatable').DataTable({

        'ajax'   : {
        'type'   : 'GET',
        'url'    : 'https://api-apollo.pegaxy.io/v1/earnings/historical/user/0xc580Aaf1D3C119E050AAEBf51D8cf912c8183A0A',
        'dataSrc': function (data) {
            var return_data = new Array();
            var len = 1;
            for(var i=data.length-1; i>=0; i--){
                var id = i-(i-len);
                len++;
                var epoch = new Date(data[i].epoch*1000);
                var date  = epoch.toLocaleDateString();
                return_data.push({
                    'id': id,
                    'date' : date,
                    'own_raced_vis'  : data[i].ownRacedVis,
                    'rentee_vis' : data[i].renteeVisShare,
                    'renter_vis' : data[i].renterVisShare,
                    'total_vis' : data[i].ownRacedVis+data[i].renteeVisShare+data[i].renterVisShare
                })
            }
                return return_data;
            }
        },

        'columns': [
            {'data': 'id'},
            {'data': 'date'},
            {'data': 'own_raced_vis'},
            {'data': 'rentee_vis'},
            {'data': 'renter_vis'},
            {'data': 'total_vis'}
        ],

        dom: '<"float-right"f>rt<"row"<"col-sm-4"l><"col-sm-4"i><"col-sm-4"p>>',

        buttons: [
            {
                extend: 'copy',
                titleAttr: 'Copy'
            },
            {
                extend: 'excelHtml5',
                text: 'Excel'
            },
            {
                extend: 'pdf',
                text: 'Pdf'
            },
            {
                extend: 'csvHtml5',
                text: 'CSV'
            },
            {
                extend: 'print',
                text: 'Print'
            },
            {
                extend: 'colvisGroup',
                text: 'Own Raced VIS',
                show: [ 1, 3, 4 ,5],
                hide: [2]
            },
            {
                extend: 'colvisGroup',
                text: 'Rentee VIS',
                show: [ 1, 2 ,4 ,5],
                hide: [3]
            },
            {
                extend: 'colvisGroup',
                text: 'Renter VIS',
                show: [ 1, 2 ,3, 5],
                hide: [4]
            },
            {
                extend: 'colvisGroup',
                text: 'Show all',
                show: ':hidden'
            }

        ],

        columnDefs: [
            { 
                targets: [], 
                visible: false 
            }
        ],

        lengthChange: !1, 
        lengthChange: true,
        scrollX: true,
        searching: true

    });
    
	$('.btn-copy').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '0' ).trigger();
    });
    
    $('.btn-excel').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '1' ).trigger();
    });
    
    $('.btn-pdf').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '2' ).trigger();
    });
    
    $('.btn-csv').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '3' ).trigger();
    });

    $('.btn-print').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '4' ).trigger();
    });

    $('.btn-ownracedvis').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '5' ).trigger();
    });

    $('.btn-renteevis').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '6' ).trigger();
    });

    $('.btn-rentervis').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '7' ).trigger();
    });

    $('.btn-showall').on('click',function(){
        var table = $('#datatable').DataTable();
        table.button( '8' ).trigger();
    });        

});


$(document).ready(function() {
    var dataTable = $('#datatable').dataTable();
    $("#searchbox").keyup(function() {
        dataTable.fnFilter(this.value);
    });    
});
