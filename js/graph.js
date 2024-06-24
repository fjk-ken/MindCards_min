var graphData = [];
var graphwork = null;

const createGraph = (table, datas) => {
    graphData = $.extend([], datas);
    $('body').append(`<div id="graphwork" style="width: 100%"></div>`);
    graphwork = $("#graphwork");

    for (var data of graphData) {

        data.percentage = data.value / maxgraph * 100;
      
        data.view_width = 0;

        table.css({'border-collapse': 'collapse', 'width': '90%'});
      
        table.append(`
            <tr style="height: 3.5em">
                <th class="dataname">${data.text}</th>
                <td class="tabletop graphcell"></td>
                <td class="graphcell"></td>
                <td class="graphcell"></td>
            </tr>`);
        graphwork.append(`
            <div class="graphmargin"> 
                <div class="graphbg"> 
                    <div class="graphbar" id="graph${data.id}" style="background: ${data.color}">
                        <span class="graphvalue"> </span>
                    </div> 
                    <img src="image/${data.charactor}" alt="${data.text}" class="dataimg" id="img${data.id}">
                </div> 
            </div>`);
      }
      
}

var starttime = 0;
var graphValue = [];
const graphview = (datas) =>{
    starttime = new Date();
    graphValue = datas;
    $(".dataimg").css({"visibility": "hidden"});
    for(i = 0; i < 10; i ++){
        if(graphValue[i] > 0){
            $("#img" + graphData[i].id).css({'visibility': 'visible'});

            $("#graph" + graphData[i].id + " span").text(graphValue[i]);
            }
        else{
            $("#graph" + graphData[i].id + " span").text("");
        }
        $("#graph" + graphData[i].id).animate({width: `${graphValue[i] / maxgraph * 100}%`}, 1000);
    }
}


$(window).on("load",() => {
    var width = $("tr").first().width() - $("th").first().width();
    graphwork.width(width);
    for(var i = 0; i < $(".graphmargin").length; i ++){
        $($(".graphmargin")[i]).offset($($(".tabletop")[i]).offset());
  }

  
});

$(window).resize(() => {
    var width = $("tr").first().width() - $("th").first().width();
    graphwork.width(width);
    for(var i = 0; i < $(".graphmargin").length; i ++){
        $($(".graphmargin")[i]).offset($($(".tabletop")[i]).offset());
        var graphbar =  $($(".graphmargin")[i]).find(".graphbar");

    }
});
