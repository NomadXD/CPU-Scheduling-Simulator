// function animate(totalExecutionTime) {
// 	$('fresh').prepend('<div id="curtain" style="position: absolute; right: 0; width:100%; height:100px;"></div>');
  
//   $('#curtain').width($('#resultTable').width());
//   $('#curtain').css({left: $('#resultTable').position().left});
  
//   var sum = totalExecutionTime;
// //   $('.exectime').each(function() {
// //       sum += Number($(this).val());
// //   });
  
//   console.log($('#resultTable').width());
//   var distance = $("#curtain").css("width");
  
//   animationStep(sum, 0);
//   jQuery('#curtain').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
// }

// function animationStep(steps, cur) {
// 	$('#timer').html(cur);
// 	if(cur < steps) {
// 		setTimeout(function(){ 
//    	     animationStep(steps, cur + 1);
//   	}, 500);
//   }
//   else {
//   }
// }

// $('fresh').html('');
// var th = '';
// var td = '';
// var executeTime = 40;
// th += '<th id="one" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + (10 - 1) + '</th>';
// td += '<td>' + executeTime + '</td>';
// var executeTime = 20;
// th += '<th id="two" style="height: 60px; width: ' + executeTime * 20 + 'px;">P' + (10 - 1) + '</th>';
// td += '<td>' + executeTime + '</td>';



// $('fresh').html('<table id="resultTable"><tr>'
// + th
// + '</tr><tr>'
// + td
// + '</tr></table>'
// );
// animate()


































// const [...barEls] = document.querySelectorAll(`.progress > .progress-bar`);// collection to array

// function updateProgress(e) {
//     let value = e.target.value;
//     const maxVals = [33.33, 33.33, 33.33];// max width values of elements

//     for (let i = 0; i < barEls.length; i++) {
//         if (value > maxVals[i]) {
//             updateElWidth(barEls[i], maxVals[i]);
//             value -= maxVals[i];
//         } else {
//             updateElWidth(barEls[i], value);
//             barEls.slice(i + 1).forEach(bar => updateElWidth(bar, 0));// nullify rest bars
//             break;
//         }
//     }

//     function updateElWidth(el, width) {
//         el.style.width = `${width}%`;
//     }
// }

// const rangeEl = document.getElementById(`range`);
// [`input`, `change`].forEach(event => rangeEl.addEventListener(event, updateProgress));