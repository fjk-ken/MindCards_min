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
                        <img src="image/${data.charactor}" alt="${data.text}" class="dataimg" id="img${data.id}">
                    </div> 
                </div> 
            </div>`);
      }
      
}

var starttime = 0;
var graphValue = [];
const graphview = (data) =>{
    starttime = new Date();
    graphValue = data;
    $(".dataimg").css({"visibility": "hidden"});
    window.requestAnimationFrame(graphrefresh);
}

const graphrefresh = timestamp => {

    for (i = 0; i < graphData.length; i ++) {
        var data = graphData[i];
        data.percentage = graphValue[i] / maxgraph * 100;

        if(Math.abs(data.view_width -  data.percentage) > 1.0){
            if (data.view_width < data.percentage) {
                data.view_width = data.view_width + 1.1;
      
                if (data.view_width > (data.percentage * 0.8)) {
                    data.view_width = data.view_width - 0.5;
                }
            }
            else{
                data.view_width = data.view_width - 1.1;
      
                if (data.view_width < (data.percentage * 1.2)) {
                    data.view_width = data.view_width + 0.5;
                }
            }
    
        }
        else
        {
            data.view_width = data.percentage;
        }
        $("#graph" + data.id).width(data.view_width + '%');
        if(graphValue[i] > 0){
            $("#graph" + data.id + " span").text(graphValue[i]);
            $("#img" + data.id).css({'visibility': 'visible'});
            $("#img" + data.id).offset({left: $("#graph" + data.id).offset().left + $("#graph" + data.id).width() +5, top: $("#img" + data.id).offset().top});
        }
        else{
            $("#graph" + data.id + " span").text("");
        }
    }
  
    if ((new Date()).getTime() <= starttime.getTime() + 3000) {
        window.requestAnimationFrame(graphrefresh);
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
        var img = $($(".graphmargin")[i]).find("img").first();
        var graphbar =  $($(".graphmargin")[i]).find(".graphbar");
        $(img).offset({left: $(graphbar).offset().left + $(graphbar).width() +5, top: $(img).offset().top});

    }
    
  });
  