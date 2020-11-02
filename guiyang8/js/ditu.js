var flag = false;
//中间地图
var data = {
    "衡阳富泰宏精密工业有限公司":{point:[112.090357, 26.799896],industry:"精密模具行业企业",area:"雁峰区"},
    "南岳生物制药有限公司":{point:[112.655117,26.851381],industry:"医药医疗行业企业",area:"雁峰区"},
    "湖南新岳电力设备股份有限公司":{point:[112.641435,26.824002],industry:"特高压输变电行业企业",area:"雁峰区"},
    "燕京啤酒（衡阳）有限公司":{point:[112.660968,26.830412],industry:"食品加行业企业",area:"雁峰区"},
    "衡阳湘玻特种玻璃有限公司":{point:[112.621682,26.830199],industry:"制造业行业企业",area:"雁峰区"},
    "湖南稀土新材料有限责任公司":{point:[112.598769,26.830887],industry:"新材料行业企业",area:"雁峰区"},
    "湖南一豆食品科技有限公司":{point:[112.644069,26.823512],industry:"食品加行业企业",area:"雁峰区"},
    "衡阳智电客车有限责任公司":{point:[112.707469,26.864383],industry:"汽车行业企业",area:"珠晖区"},
    "湖南刘文龙生物医药有限责任公司":{point:[112.607509,26.828059],industry:"医药医疗行业企业",area:"雁峰区"},
    "湖南顺万伦电子有限公司":{point:[112.617335,26.825178],industry:"电子信息行业企业",area:"雁峰区"},
    "湖南新融创科技有限公司":{point:[112.618498,26.824011],industry:"电子信息行业企业",area:"雁峰区"},
    "衡阳市林肯液压设备有限公司":{point:[112.617508,26.828819],industry:"汽车行业企业",area:"雁峰区"},
    "衡阳通用电缆有限公司":{point:[112.694512,26.867578],industry:"特高压输变电行业企业",area:"珠晖区"},
    "衡阳新华华致橡塑制品有限公司":{point:[112.65194,26.82961],industry:"汽车行业企业",area:"雁峰区"},
    "衡阳远大建筑工业有限公司":{point:[112.634845,26.826148],industry:"制造业行业企业",area:"雁峰区"},
    "鸿富锦精密工业（衡阳）有限公司":{point:[112.618767,26.822401],industry:"精密模具行业企业",area:"雁峰区"},
    "湖南长宏锅炉科技股份有限公司":{point:[112.650259,26.828617],industry:"军民融合行业企业",area:"雁峰区"},
    "衡阳市金则利特种合金股份有限公司":{point:[112.636812,26.828189],industry:"军民融合行业企业",area:"雁峰区"},
    "湖南特达液压有限公司":{point:[112.63552,26.828414],industry:"汽车行业企业",area:"雁峰区"},
    "湖南长高森源电力设备有限公司":{point:[112.655173,26.828333],industry:"特高压输变电行业企业",area:"雁峰区"},
    "湖南君灏科技发展有限公司":{point:[112.617335,26.825178],industry:"电子信息行业企业",area:"雁峰区"},
    "湖南卓伦创新科技有限公司":{point:[112.617335,26.825178],industry:"电子信息行业企业",area:"雁峰区"},
    "湖南星鑫航天新材料股份有限公司":{point:[112.641369,26.822356],industry:"新材料行业企业",area:"雁峰区"},
    "衡阳市金威机械有限公司":{point:[112.617454,26.827575],industry:"制造业行业企业",area:"雁峰区"},
    "衡阳凯新特种材料科技有限公司":{point:[112.641323,26.822396],industry:"汽车行业企业",area:"雁峰区"},
    "湖南华南制造集团股份公司":{point:[112.636154,26.823892],industry:"新材料行业企业",area:"雁峰区"},
    "衡阳合力工业车辆有限公司":{point:[112.645966,26.82776],industry:"汽车行业企业",area:"雁峰区"},
    "南岳电控（衡阳）工业技术股份有限公司":{point:[112.655931,26.856882],industry:"制造业行业企业",area:"雁峰区"},
    "湖南衡阳南方新材料科技有限公司":{point:[112.632057,26.81933],industry:"新材料行业企业",area:"雁峰区"},
    "湖南天之衡酒业有限公司":{point:[112.713912,26.865364],industry:"食品加行业企业",area:"珠晖区"},
    "湖南国能电气有限公司":{point:[112.654257,26.829606],industry:"特高压输变电行业企业",area:"雁峰区"}
}

var optionData = [
]
var industryShow = {
}

Object.keys(data).forEach(function (key) {
    var industry = data[key].industry
    if (industryShow[industry] === undefined) {
        industryShow[industry] = [];
    }
    data[key].point.push(50);
    industryShow[industry].push({
        name: key,
        area: data[key].area,
        value: data[key].point,
        industry: industry
    });
});

Object.keys(industryShow).forEach(function (key) {
    optionData = optionData.concat(industryShow[key]);
});

// console.log(optionData)
showIndustry();

var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['red'],
    tooltip: {
        show: false,
        color: '#1D344C',
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#777',
        borderWidth: 1,
    },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {
                // backgroundColor:'rgba(0,0,0,0)'
            }
        }
    },
    geo: {
        // map: 'hengyangtest',
        // map: 'china',
        label: {
            emphasis: {
                show: false,
                // formatter:,
                color: '#fff'
            }
        },
        roam: false,
        layoutSize: '100%',
        itemStyle: {
            normal: {
                areaColor: '#00a4e7',
                borderColor: '#ccc',
                borderWidth: 1
            },
            emphasis: {
                areaColor: '#ECB94E',
                borderWidth: 2
            }
        },
    },
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            /* data: [
                 {
                     name: '衡阳市凯晋峰机械制造有限公司',
                     value: [112.617815, 26.827686, 50]
                 },
                 {
                     name: 'test',
                     value: [112.631138, 26.82443, 50]
                 }
             ],*/
            data: optionData,
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                color: 'red',
                scale: 5,
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: false,
                    formatter: '{b}',
                    position: 'right',
                    fontSize: 18
                },
                emphasis: {
                    show: true,
                    position: 'insideTop',
                    distance: 20,
                    padding: [7, 7, 4],
                    formatter: '{b}',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#10253D',
                    borderColor: '#288FB5',
                    backgroundColor: '#fff',
                    borderWidth: 2,
                    borderRadius: 4,
                }
            },
//				            tooltip: {
//		                   		formatter: function (obj) {
//		                            var value = obj.value;
//		                            return obj.seriesName + '：{a}' + '<br>' + value[0];
//			                      },
//		                    },
            itemStyle: {
                normal: {
                    color: '#fff',
                    shadowBlur: 10,
                    shadowColor: '#fff'
                },
                emphasis: {
                    color: 'red',
                    shadowBlur: 20,
                    shadowColor: 'red'
                }
            },
            zlevel: 2
        }
    ]
};
optionData.push({
    name: '归阳工业园',
    value: [112.204434,26.555864,50]
})
optionData.push({
    name: '南岳机场',
    value: [112.621995,26.718615,50]
})
optionData.push({
    name: '武广高铁衡阳站',
    value: [112.709559,26.896474,50]
})
optionData.push({
    name: '衡阳东站',
    value: [112.709559,26.896474,50],

})
var myChart = echarts.init(document.getElementById('map'));
myChart.setOption(option);

var index = 0;
var companySize = optionData.length;
var currentIndustry = optionData[index].industry;
var currentArea = optionData[index].area;
$('.industry-part .item[data-industry=' + currentIndustry + ']').addClass('selected').find('.company-list').slideDown(600);


turnCompany()
setInterval(turnCompany, 3000);

function turnCompany () {
    if (index === companySize) {
        index = 0;
    }
    var area = optionData[index].area;
    // map action
    if (area !== currentArea) {
        myChart.dispatchAction({
            type: 'geoUnSelect',
            name: currentArea
        })
        currentArea = area;
    }

    myChart.dispatchAction({
        type: 'downplay'
    });

    myChart.dispatchAction({
        type: 'geoSelect',
        name: area
    })
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
    });


    // 左侧切换行业
    var industry = optionData[index].industry;
    if (industry !== currentIndustry) {
        currentIndustry = industry;
        $('.industry-part .item.selected').find('.company-list').slideUp(600);
        $('.industry-part .item.selected').removeClass('selected');
        $('.industry-part .item[data-industry=' + currentIndustry + ']').addClass('selected').find('.company-list').slideDown(600);
    }
    index++;
    //地图线段
    if(flag){
        maps();
    }
}

function showIndustry () {
    // console.log(industryShow)
    var str = '';
    // var classStr='selected';
    Object.keys(industryShow).forEach(function (key) {
        // var classStr=key==='制造业行业企业'?'selected':''
        str += ' <div class="item"  data-industry="' + key + '">\n' +
            '  <div class="industry-name">' + key + '</div>\n' +
            '  <div class="company-list">'
        var companyList = industryShow[key];
        for (var i = 0, len = companyList.length; i < len; i++) {
            str += ' <div class="company-' + i + '">' + companyList[i].name + '</div>';
        }
        str += ' </div>\n' +
            '       </div>'
        // classStr='';
    })
    $('.industry-part').html(str)
}


//
// //右侧列表
// setInterval(test, 1000);
// setInterval(setP, 1000);
// var index1 = 0;
//
// function test(){
//     index1 = index1 > 7 ? 0 : index1;
//     var len = $('.item1').length;
//     for(var i = 0 ; i < len; i ++){
//         if(index1 == i){
//             $('.item1').eq(index1).addClass('selected');
//         }else{
//             $('.item1').eq(i).removeClass('selected');
//         }
//         if(index1 == 0 && i == 0){
//             $('#hid1').val('1111');
//         }
//         if(index1 == 1 && i == 1){
//             $('#hid2').val('1111');
//         }
//         if(index1 == 2 && i == 2){
//             $('#hid3').val('1111');
//         }
//         if(index1 == 3 && i == 3){
//             $('#hid4').val('1111');
//         }
//
//
//
//         //   setMap(i);
//     }
//     index1 ++;
// }
//
// function setP(){
//     if($('#hid1').val() != ''){
//         var myChart = echarts.init(document.getElementById('map'));
//         myChart.dispatchAction({
//             type: 'highlight',
//             seriesIndex: 0,
//             dataIndex: 31
//         });
//     }
//     if($('#hid2').val() != ''){
//         var myChart = echarts.init(document.getElementById('map'));
//         myChart.dispatchAction({
//             type: 'highlight',
//             seriesIndex: 0,
//             dataIndex: 32
//         });
//     }
//     if($('#hid3').val() != ''){
//         var myChart = echarts.init(document.getElementById('map'));
//         myChart.dispatchAction({
//             type: 'highlight',
//             seriesIndex: 0,
//             dataIndex: 33
//         });
//     }
//     if($('#hid4').val() != ''){
//         var myChart = echarts.init(document.getElementById('map'));
//         myChart.dispatchAction({
//             type: 'highlight',
//             seriesIndex: 0,
//             dataIndex: 34
//         });
//     }
//
// }
//调用地图

maps();
function maps(){

var hengyang = "430400.json";
var qidong = "430426.json";
var hengnan = "430422.json";
var hengdong = "430424.json";

echarts.extendsMap = function(id, opt){
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        "祁东县": qidong,
        // "衡南县": hengnan,
        // "衡东县": hengdong
    };
    var geoCoordMap = {
        '祁东': [112.09587, 26.806253],
        // '归阳工业园': [112.204434,26.555864],
        // '衡东': [112.959492,27.0873]

    };
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };

    var defaultOpt = {
        mapName: 'china',     // 地图展示
        goDown: false,        // 是否下钻
        // bgColor: '#404a59',   // 画布背景色
        activeArea: ['祁东县'],       // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance){}
    };
    if(opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;

    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 98,//左侧图标位置
        top: 50
    };

    var line = [[0, 0], [8, 11], [0, 22]];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n){
            var breadcrumb = this.createBreadcrumb(n);

            var j = name.indexOf(n);
            var l = o.graphic.length;
            if(j < 0){
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if(o.graphic.length > 2){
                    for(var x = 0; x < opt.data.length; x++){
                        if(n === opt.data[x].name + '市'){
                            o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                            break;
                        }else o.series[0].data = [];
                    }
                };
                name.push(n);
                idx++;
            }else{
                o.graphic.splice(j + 2, l);
                if(o.graphic.length <= 2){
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name){
            var cityToPinyin = {
                "祁东县": "qidong",
                // "衡南县": "hengnan",
                // "衡东县": "hengdong"
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus - 100,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function(){
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function(){
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function(){
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function(data){
            var temp = [];
            for(var i = 0;i < data.length;i++){
                var geoCoord = geoCoordMap[data[i].name];
                if(geoCoord){
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            };
            return temp;
        },

        zoomAnimation: function(){
            var count = null;
            var zoom = function(per){
                if(!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if(count < 1) window.requestAnimationFrame(function(){
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function(){
                zoom(0.2);
            });
        }
    };
    var trainLines=[
        [112.147904,26.534826],
        [112.155611,26.538293],
        [112.165739,26.541211],
        [112.183248,26.551039],
        [112.1896,26.552575],
        [112.197593,26.553347],
        [112.208622,26.555286],
        [112.208493,26.555324],
        [112.219265,26.561274],
        [112.230766,26.565343],
        [112.244843,26.565727],
        [112.258833,26.572022],
        [112.267588,26.574401],
        [112.278402,26.584687],
        [112.293079,26.588218],
        [112.317112,26.590521],
        [112.321404,26.592746],
        [112.328442,26.600728],
        [112.334536,26.604412],
        [112.339514,26.609247],
        [112.350071,26.614004],
        [112.355049,26.617457],
        [112.362946,26.62091],
        [112.366036,26.624517],
        [112.36964,26.634414],
        [112.37582,26.641243],
        [112.37685,26.647457],
        [112.380026,26.652289],
        [112.389982,26.657506],
        [112.395819,26.662722],
        [112.410753,26.668858],
        [112.424229,26.678291],
        [112.440279,26.683736],
        [112.459934,26.697923],
        [112.50182,26.728438],
        [112.513493,26.73595],
        [112.517269,26.744229],
        [112.527741,26.754346],
        [112.536495,26.760783],
        [112.546795,26.766301],
        [112.553833,26.777183],
        [112.572544,26.790515],
        [112.60825,26.812272],
        [112.626789,26.816256],
        [112.64344,26.813651],
        [112.658718,26.81503],
        [112.685154,26.813651],
        [112.692192,26.81457],
        [112.726181,26.813804],
        [112.734593,26.815336],
        [112.745579,26.823149],
        [112.77047,26.836017],
        [112.787808,26.843369],
        [112.808407,26.849495],
        [112.814072,26.849955],
        [112.82626,26.847351],
    ];//火车线路
    var trainLines1=[
        [112.163838,27.291897],
        [112.177183,27.257338],
        [112.185079,27.238262],
        [112.181131,27.228341],
        [112.188598,27.214755],
        [112.203189,27.205595],
        [112.215206,27.199793],
        [112.219326,27.196129],
        [112.221386,27.191854],
        [112.220012,27.172919],
        [112.229625,27.158563],
        [112.226535,27.117011],
        [112.221729,27.108454],
        [112.221729,27.080946],
        [112.231871,27.030395],
        [112.238738,27.016938],
        [112.241141,27.008679],
        [112.243888,27.003479],
        [112.254187,26.971356],
        [112.257277,26.954832],
        [112.257621,26.956056],
        [112.253844,26.941366],
        [112.253844,26.922388],
        [112.241141,26.892997],
        [112.233931,26.877074],
        [112.230155,26.854411],
        [112.221228,26.835725],
        [112.221228,26.836644],
        [112.219169,26.816423],
        [112.212645,26.79957],
        [112.218482,26.763557],
        [112.229125,26.728605],
        [112.235991,26.710206],
        [112.23582,26.710819],
        [112.238738,26.697631],
        [112.237708,26.690576],
        [112.241828,26.6803],
        [112.243029,26.668642],
        [112.242858,26.668949],
        [112.241999,26.655142],
        [112.238566,26.647624],
        [112.236335,26.629211],
        [112.234618,26.623227],
        [112.236335,26.614172],
        [112.234275,26.606191],
        [112.237021,26.590535],
        [112.239596,26.583013],
        [112.240455,26.571268],
        [112.237279,26.565895],

    ];//火车线路
    var trainLines2=[
        [112.124429,26.672657],
        [112.165284,26.629391],
        [112.173524,26.601153],
        [112.200818,26.562774],
        [112.201248,26.560394],
        [112.210818,26.553254],
        [112.210818,26.553254],
        [112.210818,26.553254],
        [112.250171,26.53352],
        [112.250686,26.520772],
        [112.259956,26.514628],
        [112.260299,26.514628],
        [112.269912,26.498959],
        [112.274204,26.501878],
        [112.279353,26.497577],
        [112.302699,26.495426],
        [112.28004,26.497577],
        [112.302013,26.496655],
        [112.314973,26.483749],
    ];
    var option = {
        backgroundColor: opt.bgColor,
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',
                right: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                right: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        },
            {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
                type: 'polyline',
                left: 90,
                top: -12,
                shape: {
                    points: line
                },
                style: {
                    stroke: 'transparent',
                    key: name[0]
                },
                onclick: function(){
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                }
            },
                {
                type: 'text',
                left: 0,
                top: 'middle',
                style: {
                    text: name[0] === '衡阳' ? '衡阳市' : name[0],
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                },
                onclick: function(){
                    handleEvents.resetOption(chart, option, '衡阳');
                }
            }, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'JIANGXI',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function(){
                    handleEvents.resetOption(chart, option, '衡阳');
                }
            }
            ]
        }],
        geo: {
            // center: [112.468991,26.775983],
            map: opt.mapName,
            // roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#F0E68C',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item){
                if(typeof item !== 'string'){
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                }else{
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#F0E68C'
                            }
                        }
                    }
                }
            })
        },

        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // symbol: 'diamond',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 6,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: function(params){
                        return levelColorMap[params.value[3]];
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            label: {
                normal: {
                    show: false,
                    formatter: '{b}',
                    position: 'right',
                    fontSize: 18
                },
                emphasis: {
                    show: true,
                    position: 'insideTop',
                    distance: 20,
                    padding: [7, 7, 4],
                    formatter: '{b}',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#10253D',
                    borderColor: '#288FB5',
                    backgroundColor: '#fff',
                    borderWidth: 2,
                    borderRadius: 4,
                }
            },
        //    data: handleEvents.initSeriesData(opt.data)
            data: optionData
        },

            {type:"lines",
                // name:'G72泉南高速',
                coordinateSystem: 'geo',// 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                polyline: true,// 这表示连线是否为多端点的连线
                data: [{
                    coords: trainLines
                }],
                // effect: {
                //     show: true,
                //     color:'#F2F008',
                //     period: 7, //箭头指向速度，值越小速度越快
                //     trailLength: 1, //特效尾迹长度[0,1]值越大，尾迹越长重
                //     symbol: 'circle', //箭头图标
                //     symbolSize: 5, //图标大小
                // },
                lineStyle:{
                    color:"#e70f0f",
                    width:4,
                },
            },
            {type:"lines",
                coordinateSystem: 'geo',// 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                polyline: true,// 这表示连线是否为多端点的连线
                data: [{
                    coords: trainLines1
                }],
                lineStyle:{
                    color:"#e70f0f",
                    width:4,
                },
            },
            {type:"lines",
                coordinateSystem: 'geo',// 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                polyline: true,// 这表示连线是否为多端点的连线
                data: [{
                    coords: trainLines2
                }],
                lineStyle:{
                    color:"#e70f0f",
                    width:2,
                },
            },
        ]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params){
        var _self = this;
        if(opt.goDown && params.name !== name[idx]){
            if(cityMap[params.name]){
                var url = cityMap[params.name];
                $.get(url, function(response){
                    // console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
        }
    });

    chart.setMap = function(mapName){
        var _self = this;
        if(mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if(citySource){
            var url = './map/' + citySource + '.json';
            $.get(url, function(response){
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
        // handleEvents.resetOption(this, option, mapName);
    };

    return chart;
};

$.getJSON(hengyang, function(geoJson){
    echarts.registerMap('衡阳', geoJson);
    var myChart = echarts.extendsMap('map', {
        // bgColor: '#154e90', // 画布背景色
        mapName: '衡阳',    // 地图名
        goDown: true,       // 是否下钻
        // 下钻回调
        callback: function(name, option, instance){
            console.log(name, option, instance);
            if(name == '衡阳'){
                flag = true;
                maps();
            }else{
                flag = false;
            }
        },
        // 数据展示
        data: [

        ]
    });
})

}


/*
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 10000
    },
    // loop : true,
    // initialSlide: 4,
    keyboard: true
});*/

