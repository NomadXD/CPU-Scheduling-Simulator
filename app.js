$(document).ready(function(){
    $('#opt1').click(function() {
        renderFCFSTable()
        renderFCFSForm()
    });

    $('#opt2').click(function() {
        renderSJFTable()
        renderSJFForm()
    });

    $('#opt3').click(function() {
        renderRoundRobinTable()
        renderSJFForm()
    });




});

const renderFCFSTable = function(){

$("#process-table-div").load("src/FCFSTable.html")

}

const renderFCFSForm = function(){

    $("#create-process-form").load("src/FCFSForm.html")

}

const renderSJFTable = function(){

    $("#process-table-div").load("src/FCFSTable.html")
    
}
    
const renderSJFForm = function(){

    $("#create-process-form").load("src/FCFSForm.html")

}

const renderRoundRobinTable = function(){

    $("#process-table-div").load("src/RoundRobinTable.html")
}


