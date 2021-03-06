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

function animate(totalExecutionTime) {
	$('fresh').prepend('<div id="curtain" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
  
  $('#curtain').width($('#resultTable').width());
  $('#curtain').css({left: $('#resultTable').position().left});
  
  var sum = totalExecutionTime;
//   $('.exectime').each(function() {
//       sum += Number($(this).val());
//   });
  
  console.log($('#resultTable').width());
  var distance = $("#curtain").css("width");
  
  animationStep(sum, 0);
  jQuery('#curtain').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}

function animationStep(steps, cur) {
	$('#timer').html(cur);
	if(cur < steps) {
		setTimeout(function(){ 
   	     animationStep(steps, cur + 1);
  	}, 500);
  }
  else {
  }
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
    //runSimulationFCFS(temp)
    //runSimulationSJF(temp)
    //runSimulationPriority(temp)
    runRoundRobinSimulation(temp)

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
                record.push(row.cells[4].innerText)
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

var runSimulationSJF =function(data){

    //Sort the process data array according to arrival time
    var sortedData = data.sort(function(a,b){
        return a[1]-b[1]
    })

    //If there are several processes with the same arrival time, pick the process with the least execute time
    var tempArr = []
    var sortedTempArr =[]
    if(sortedData[0][1]==sortedData[1][1]){
        console.log("Entered")
        sortedData.forEach(function(e){
            if(e[1]==sortedData[0][1]){
                tempArr.push(e)
            }
        })
        console.log(tempArr)

        sortedTempArr = tempArr.sort(function(a,b){
            return a[2]-b[2]
        })
       
    }

    console.log(sortedData)

    
    $('fresh').html('');
    var th = '';
    var td = '';
    var totalExecutionTime = 0;
    var threshold = 0;
    console.log(sortedData[0])
    var e= (sortedTempArr.length==0) ? sortedData[0] : sortedTempArr[0]
    var executeTime = parseInt(e[2]);
    var arrivalTime = parseInt(e[1]);
    totalExecutionTime+=executeTime;
    threshold=(arrivalTime+executeTime)
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
    (sortedTempArr.length==0) ? sortedData.splice(0,1) : sortedData.splice(sortedData.indexOf(sortedTempArr[0]),1)
    //sortedData.splice(0,1)
    console.log(sortedData)
    
    //Select the next process to run from the arrived processes according to their execution time
    while(sortedData.length>0){
        
        var processesArrived=sortedData.filter(function(e){
            return e[1]<=threshold
        })

        var processesArrivedSorted = processesArrived.sort(function(a,b){
            return a[2]-b[2]
        })

        var nextProcess = processesArrivedSorted[0]
        var nextProcessIndex = sortedData.indexOf(nextProcess)
        var executeTime = parseInt(nextProcess[2]);
        var arrivalTime = parseInt(nextProcess[1]);
        totalExecutionTime+=executeTime;
        threshold+=executeTime

        if(nextProcess[0]=="1"){
            th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="2"){
            th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="3"){
            th += '<th id="three" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="4"){
            th += '<th id="four" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }
        
        td += '<td>' + executeTime + '</td>';
        sortedData.splice(nextProcessIndex,1)


    }

    $('fresh').html('<table id="resultTable"><tr>'
    + th
    + '</tr><tr>'
    + td
    + '</tr></table>'
    );
    animate(totalExecutionTime)


}


var runSimulationPriority = function(data){

    //Sort the process data array according to arrival time
    var sortedData = data.sort(function(a,b){
        return a[1]-b[1]
    })

    //If there are several processes with the same arrival time, pick the process with the highest priority
    var tempArr = []
    var sortedTempArr =[]
    if(sortedData[0][1]==sortedData[1][1]){
        console.log("Entered")
        sortedData.forEach(function(e){
            if(e[1]==sortedData[0][1]){
                tempArr.push(e)
            }
        })
        console.log(tempArr)

        sortedTempArr = tempArr.sort(function(a,b){
            return b[3]-a[3]
        })

        console.log(sortedTempArr)
       
    }

    $('fresh').html('');
    var th = '';
    var td = '';
    var totalExecutionTime = 0;
    var threshold = 0;
    console.log(sortedData[0])
    var e= (sortedTempArr.length==0) ? sortedData[0] : sortedTempArr[0]
    var executeTime = parseInt(e[2]);
    var arrivalTime = parseInt(e[1]);
    totalExecutionTime+=executeTime;
    threshold=(arrivalTime+executeTime)
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
    (sortedTempArr.length==0) ? sortedData.splice(0,1) : sortedData.splice(sortedData.indexOf(sortedTempArr[0]),1)
    //sortedData.splice(0,1)
    console.log(sortedData)
    
    //Select the next process to run from the arrived processes according to their execution time
    while(sortedData.length>0){
        
        var processesArrived=sortedData.filter(function(e){
            return e[1]<=threshold
        })

        var processesArrivedSorted = processesArrived.sort(function(a,b){
            return b[3]-a[3]
        })

        var nextProcess = processesArrivedSorted[0]
        var nextProcessIndex = sortedData.indexOf(nextProcess)
        var executeTime = parseInt(nextProcess[2]);
        var arrivalTime = parseInt(nextProcess[1]);
        totalExecutionTime+=executeTime;
        threshold+=executeTime

        if(nextProcess[0]=="1"){
            th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="2"){
            th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="3"){
            th += '<th id="three" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }else if(nextProcess[0]=="4"){
            th += '<th id="four" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        }
        
        td += '<td>' + executeTime + '</td>';
        sortedData.splice(nextProcessIndex,1)


    }

    $('fresh').html('<table id="resultTable"><tr>'
    + th
    + '</tr><tr>'
    + td
    + '</tr></table>'
    );
    animate(totalExecutionTime)

    



}

var runRoundRobinSimulation = function(data){

    //Sort the process data array according to arrival time
    var sortedData = data.sort(function(a,b){
        return a[1]-b[1]
    })

    var quantum = 2;


    $('fresh').html('');
    var th = '';
    var td = '';
    var totalExecutionTime = 0;
    var threshold = 0;
    console.log(sortedData[0])
    var e= sortedData[0]
    //var executeTime = parseInt(e[2]);
    //var arrivalTime = parseInt(e[1]);
    //totalExecutionTime+=executeTime;
    threshold= parseInt(sortedData[0][2])
    
    // if(e[0]=="1"){
    //     th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
    // }else if(e[0]=="2"){
    //     th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
    // }else if(e[0]=="3"){
    //     th += '<th id="three" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
    // }else if(e[0]=="4"){
    //     th += '<th id="four" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + e[0] + '</th>';
    // }
    
    //td += '<td>' + executeTime + '</td>';
    //(sortedTempArr.length==0) ? sortedData.splice(0,1) : sortedData.splice(sortedData.indexOf(sortedTempArr[0]),1)
    //sortedData.splice(0,1)
    console.log(sortedData)
    
    //Select the next process to run from the arrived processes according to their execution time
    while(sortedData.length>0){
        console.log("while")
        console.log(threshold)
        var processesArrived=sortedData.filter(function(e){
            return e[1]<=threshold
        })

        if(processesArrived.length==0){
            threshold+=quantum
        }

        // var processesArrivedSorted = processesArrived.sort(function(a,b){
        //     return b[3]-a[3]
        // })

        processesArrived.forEach(function(e){
            if(e[2]<=quantum){
                console.log("From 1")
                threshold+=parseInt(e[2])
                totalExecutionTime+=parseInt(e[2])
                if(e[0]=="1"){
                    th += '<th id="one" style="height: 60px; width: ' + e[2] * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="2"){
                    th += '<th id="two" style="height: 60px; width: ' + e[2] * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="3"){
                    th += '<th id="three" style="height: 60px; width: ' + e[2] * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="4"){
                    th += '<th id="four" style="height: 60px; width: ' + e[2] * 20 + 'px;">P' + e[0] + '</th>';
                }
    
                td += '<td>' + e[2] + '</td>';
                sortedData.splice(sortedData.indexOf(e),1)

            }else{
                console.log("From 2")
                threshold+=quantum
                totalExecutionTime+=quantum
                e[2]-=quantum
                if(e[0]=="1"){
                    th += '<th id="one" style="height: 60px; width: ' + quantum * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="2"){
                    th += '<th id="two" style="height: 60px; width: ' + quantum * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="3"){
                    th += '<th id="three" style="height: 60px; width: ' + quantum * 20 + 'px;">P' + e[0] + '</th>';
                }else if(e[0]=="4"){
                    th += '<th id="four" style="height: 60px; width: ' + quantum * 20 + 'px;">P' + e[0] + '</th>';
                }
    
                td += '<td>' + quantum + '</td>';


            }



        })

        // var nextProcess = processesArrivedSorted[0]
        // var nextProcessIndex = sortedData.indexOf(nextProcess)
        // var executeTime = parseInt(nextProcess[2]);
        // var arrivalTime = parseInt(nextProcess[1]);
        // totalExecutionTime+=executeTime;
        // threshold+=executeTime

        // if(nextProcess[0]=="1"){
        //     th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        // }else if(nextProcess[0]=="2"){
        //     th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        // }else if(nextProcess[0]=="3"){
        //     th += '<th id="three" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        // }else if(nextProcess[0]=="4"){
        //     th += '<th id="four" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + nextProcess[0] + '</th>';
        // }
        
        // td += '<td>' + executeTime + '</td>';
        // sortedData.splice(nextProcessIndex,1)


    }

    $('fresh').html('<table id="resultTable"><tr>'
    + th
    + '</tr><tr>'
    + td
    + '</tr></table>'
    );
    animate(totalExecutionTime)





}






































