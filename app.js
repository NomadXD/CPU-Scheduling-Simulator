var renderFCFSTable = function(){

$("#process-table-div").load("src/FCFSTable.html")

}

var renderFCFSForm = function(){

    $("#create-process-form").load("src/FCFSForm.html")

}

var renderSJFTable = function(){

    $("#process-table-div").load("src/FCFSTable.html")
    
}
var renderSJFForm = function(){

    $("#create-process-form").load("src/FCFSForm.html")

}
var renderRoundRobinTable = function(){

    $("#process-table-div").load("src/RoundRobinTable.html")
}

var renderRoundRobinForm = function(){
    $("#create-process-form").load("src/RoundRobinForm.html")
}

var renderPriorityTable = function(){
    $("#process-table-div").load("src/PriorityTable.html")
}

var renderPriorityForm = function(){
    $("#create-process-form").load("src/PriorityForm.html")
}


if(document.getElementById("btn-submit-index")){
    document.querySelector("#btn-submit-index").addEventListener("click",function(e){
        e.preventDefault()
        console.log("Submitted")
        let PID = document.getElementById("process-id-list-index").value
        let arrivalTime = document.getElementById("arrival-time-index").value
        let executeTime = document.getElementById("execute-time-index").value
    
        console.log(PID)
        console.log(arrivalTime)
        console.log(executeTime)
    
        let table = document.getElementById("process-table-index")
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            if(row.cells[0].innerText==PID){
                row.cells[1].innerText=arrivalTime
                row.cells[2].innerText=executeTime
            }
    
         }
    })

}else if(document.getElementById("btn-submit-FCFS")){
    document.querySelector("#btn-submit-FCFS").addEventListener("click",function(e){
        e.preventDefault()
        console.log("Submitted")
        let PID = document.getElementById("process-id-list-FCFS").value
        let arrivalTime = document.getElementById("arrival-time-FCFS").value
        let executeTime = document.getElementById("execute-time-FCFS").value
    
        console.log(PID)
        console.log(arrivalTime)
        console.log(executeTime)
    
        let table = document.getElementById("process-table-FCFS")
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            if(row.cells[0].innerText==PID){
                row.cells[1].innerText=arrivalTime
                row.cells[2].innerText=executeTime
            }
    
         }
    })
    
}else if(document.getElementById("btn-submit-RR")){
    document.querySelector("#btn-submit-RR").addEventListener("click",function(e){
        e.preventDefault()
        console.log("Submitted")
        let PID = document.getElementById("process-id-list-RR").value
        let arrivalTime = document.getElementById("arrival-time-RR").value
        let executeTime = document.getElementById("execute-time-RR").value
    
        console.log(PID)
        console.log(arrivalTime)
        console.log(executeTime)
    
        let table = document.getElementById("process-table-RR")
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            if(row.cells[0].innerText==PID){
                row.cells[1].innerText=arrivalTime
                row.cells[2].innerText=executeTime
            }
    
         }
    })
}else if(document.getElementById("btn-submit-PR")){
    document.querySelector("#btn-submit-PR").addEventListener("click",function(e){
        e.preventDefault()
        console.log("Submitted")
        let PID = document.getElementById("process-id-list-PR").value
        let arrivalTime = document.getElementById("arrival-time-PR").value
        let executeTime = document.getElementById("execute-time-PR").value
        let priority = document.getElementById("priority").value
    
        console.log(PID)
        console.log(arrivalTime)
        console.log(executeTime)
    
        let table = document.getElementById("process-table-PR")
        for (var i = 0, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            if(row.cells[0].innerText==PID){
                row.cells[1].innerText=arrivalTime
                row.cells[2].innerText=executeTime
                row.cells[4].innerText=priority
            }
    
         }
    })
}








document.getElementById("btn-submit-sim").addEventListener('click',function(e){
    e.preventDefault()
    var temp = getSelection()
    console.log(temp)
    runSimulationFCFS(temp)


})


// const runSimulation = function(){













// }

var getSelection = function(){

    var data = []

    if(document.querySelector('input[name="optradio"]:checked').value=="fcfs"){

        //console.log(document.getElementById("process-table-index"))
        //console.log(document.getElementById("process-table-FCFS"))
        
        if(document.getElementById("process-table-FCFS")==null){
            var table = document.getElementById("process-table-index")
            
        }else{
            var table = document.getElementById("process-table-FCFS")
        }

        for (var i = 1, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            var record = []
            if(row.cells[1].innerText){
                record.push(row.cells[0].innerText)
                record.push(row.cells[1].innerText)
                record.push(row.cells[2].innerText)
                data.push(record)

            }
    
         }

    }else if(document.querySelector('input[name="optradio"]:checked').value=="sjf"){
        let table =  document.getElementById("process-table-FCFS")
        for (var i = 1, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            var record = []
            if(row.cells[1].innerText){
                record.push(row.cells[0].innerText)
                record.push(row.cells[1].innerText)
                record.push(row.cells[2].innerText)
                data.push(record)

            }
    
         }
    }else if(document.querySelector('input[name="optradio"]:checked').value=="rr"){
        let table =  document.getElementById("process-table-RR")
        for (var i = 1, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            var record = []
            if(row.cells[1].innerText){
                record.push(row.cells[0].innerText)
                record.push(row.cells[1].innerText)
                record.push(row.cells[2].innerText)
                data.push(record)

            }
    
         }
    }else if(document.querySelector('input[name="optradio"]:checked').value=="pr"){
        let table = document.getElementById("process-table-PR")
        for (var i = 1, row; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            var record = []
            if(row.cells[1].innerText){
                record.push(row.cells[0].innerText)
                record.push(row.cells[1].innerText)
                record.push(row.cells[2].innerText)
                data.push(record)

            }
    
         }
    }

    return data

}







// var temp = getSelection()

// console.log(temp)

var runSimulationFCFS = function(data){

    var sortedData = data.sort(function(a,b){
        return a[1]-b[1]
    })

    $('fresh').html('');
    var th = '';
    var td = '';
    var totalExecutionTime = 0;

    sortedData.forEach(function(e){
        var executeTime = parseInt(e[2]);
        totalExecutionTime+=executeTime;
        if(e[0]=="1"){
            th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
        }else if(e[0]=="2"){
            th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
        }else if(e[0]=="3"){
            th += '<th id="three" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
        }else if(e[0]=="4"){
            th += '<th id="four" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
        }
        
        td += '<td>' + executeTime + '</td>';
    })

    $('fresh').html('<table id="resultTable"><tr>'
    + th
    + '</tr><tr>'
    + td
    + '</tr></table>'
    );
    animate(totalExecutionTime)

    console.log(totalExecutionTime)

}






































