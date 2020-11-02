$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 10000
        },
        // loop : true,
        // initialSlide: 4,
        touchStartPreventDefault:false,
        keyboard: true
    });

    // setInterval(loadImg,6000)
    //
    // function loadImg () {
    //     $('.banner-img').each(function () {
    //         var src=$(this).attr('src')+'?'+new Date().getTime();
    //         $(this).attr('src',src);
    //     })
    // };
    //第一个
    (function(){
        var myChart=echarts.init(document.getElementById("main-1-1"));
        option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['规上工业总产值',  '工业总产值'],
                right:0,
                textStyle:{
                    fontSize: 12,//字体大小
                    color: '#ffffff'//字体颜色
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '34%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine:{
                    show:false
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    color:"#fff",
                    fontSize:"12"
                },
                data: ['2017', '2018', '2019', '2020']
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    // color:"#02175c",
                    show:false
                },
                axisLabel:{
                    color:"#fff",
                    fontSize:"12"
                },
                axisTick: {
                    show: false
                },
                splitLine:{
                    lineStyle:{
                        color:"#02175c"
                    }
                },

            },
            series: [
                {
                    name: '规上工业总产值',
                    type: 'line',
                    smooth:true,
                    data: [129, 135, 124, 139, 125, 134, 127],
                    color:"#e1bd2e"
                },
                {
                    name: '工业总产值',
                    type: 'line',
                    smooth:true,
                    data: [110, 122, 111, 134, 110, 130, 112],
                    color:"#2cf3c2"
                },
            ]
        };
        myChart.setOption(option);
        setInterval(function () {
            myChart.clear();
            myChart.setOption(option);
        }, 4000);

    })();
//第二个
    (function(){
        var myChart=echarts.init(document.getElementById("main-1-2"));
        option2 = {
            tooltip: {
                formatter: ' <br/>{b} {c} ({d}%)'
            },
            // title: {
            //     text: '签约重点总项目数：14个',
            //     x:'center',
            //     y: '70%',
            //     textStyle: {
            //         fontSize: 20,
            //         fontWeight: 'bolder',
            //         color: '#fff'
            //     },
            // },
            color:['#c2c530','#010cff','#2cf3ec',],
            series: [
                {
                    type: 'pie',
                    radius: '60%',
                    labelLine: {
                        show: false },

                    center: ['50%', '35%'],
                    data: [
                        {value: 14,label: {
                                show: true,
                                position:'inner',
                                formatter: '{d}%',
                                textStyle: {
                                    // baseline: 'bottom',
                                    fontSize: '16'
                                }
                            },},
                        {value: 12},
                        {value: 9}

                    ],
                }
            ]
        };

        myChart.setOption(option2);
        setInterval(function () {
            myChart.clear();
            myChart.setOption(option2);
        }, 4000);
    })();
//第三个
    (function(){
        var myChart=echarts.init(document.getElementById("main-1-3"));
        option3 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['一般公共预算', '公共预算'],
                right:0,
                textStyle:{
                    fontSize: 12,//字体大小
                    color: '#ffffff'//字体颜色
                },
            },
            grid: {
                left: '5%',
                right: '11%',
                bottom: '27%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020'],
                axisLabel:{
                    color:"#fff",
                    fontSize:"12"
                },
                axisTick: {
                    show: false
                },

                axisLine:{
                    // color:"#02175c",
                    show:false
                }
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    color:"#fff",
                    fontSize:"12"
                },
                aixsLine:{
                    lineStyle:{
                        color:"#02175c",
                        // width:20
                    }
                },
                //y轴分割线
                splitLine:{
                    lineStyle:{
                        color:"#02175c"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine:{
                    // color:"#02175c",
                    show:false
                }

            },
            series: [
                {
                    name: '一般公共预算',
                    type: 'bar',
                    data: [41, 29,38,46,21],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#0503ff" // 0% 处的颜色
                            },{
                                offset: 1,
                                color: "#017dff" // 100% 处的颜色
                            }], false)
                        }
                    },
                },
                {
                    name: '公共预算',
                    type: 'bar',
                    data: [21, 18,24,38,28],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#017491" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#32fec5" // 100% 处的颜色
                            }], false)
                        }
                    },
                }
            ]
        };

        myChart.setOption(option3);
        setInterval(function () {
            myChart.clear();
            myChart.setOption(option3);
        }, 4000);
    })();
//第四个
    (function(){
        var myChart=echarts.init(document.getElementById("main-1-4"));
        option4 = {
            // color: ['#018df4','#1a53f4'],

            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                right:0,
                textStyle:{
                    fontSize: 12,//字体大小
                    color: '#ffffff'//字体颜色
                },
            },
            //图表大小
            grid: {
                left: '4%',
                right: '8%',
                bottom: '25%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2016', '2017', '2018', '2019', '2020'],
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    //修改刻度标签相关样式
                    axisLabel:{
                        color:"#fff",
                        fontSize:"12"
                    },

                    axisLine:{
                        // color:"#02175c",
                        show:false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel:{
                        color:"#fff",
                        fontSize:"12"
                    },
                    aixsLine:{
                        lineStyle:{
                            color:"#02175c",
                            // width:20
                        }
                    },
                    //y轴分割线
                    splitLine:{
                        lineStyle:{
                            color:"#02175c"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        // color:"#02175c",
                        show:false
                    }


                }
            ],
            series: [
                {
                    name: '进出口总额',
                    type: 'bar',
                    barWidth: '40%',
                    data: [10, 31, 25, 20, 50],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#01ccfe" // 0% 处的颜色
                            }, {
                                offset: 0.6,
                                color: "#08a4fa" // 60% 处的颜色
                            }, {
                                offset: 1,
                                color: "#1268f3" // 100% 处的颜色
                            }], false)
                        }
                    },
                    // animationDelay: function (idx) {
                    //     return idx * 100;
                    // },
                }
            ]
        };
        myChart.setOption(option4);
        setInterval(function () {
            myChart.clear();
            myChart.setOption(option4);
        }, 4000);
    })();
//第五个
    (function(){
        var myChart=echarts.init(document.getElementById("main-1-5"));
        option5 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            // color: ['#1c286b'],
            legend: {
                right:'30%',
                top:'2%',
                textStyle:{
                    fontSize: 12,//字体大小
                    color: '#ffffff'//字体颜色
                },
            },
            grid: {
                left: '4%',
                right: '10%',
                bottom: '25%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['2006', '2007', '2008', '2009', '2010', '2012', '2013','2014','2015','2016', '2017', '2018', '2019', '2020'],
                    axisLabel:{
                        color:"#fff",
                        fontSize:"12"
                    },
                    axisTick: {
                        show: false
                    },

                    axisLine:{
                        // color:"#02175c",
                        show:false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel:{
                        color:"#fff",
                        fontSize:"12"
                    },
                    // aixsLine:{
                    //     show:false,
                    //     // lineStyle:{
                    //     //     color:"#02175c",
                    //     //     // width:20
                    //     // }
                    // },
                    //y轴分割线
                    splitLine:{
                        lineStyle:{
                            color:"#02175c"
                        }
                    },
                    axisLine:{
                        // color:"#02175c",
                        show:false
                    },
                    axisTick: {
                        show: false
                    },
                }
            ],
            series: [

                {
                    name: '一般公共预算收入',
                    type: 'line',
                    lineStyle: {
                        color: '#3400f8',
                    },
                    itemStyle: {
                        normal: {
                            color: '#000e62',
                        }
                    },

                    areaStyle: {},
                    data: [6,12,15,18,14,19,13,17,11,14,15,17,12,14,13,19,24,21],
                }
            ]
        };
        myChart.setOption(option5);
        setInterval(function () {
            myChart.clear();
            myChart.setOption(option5);
        }, 4000);

    })();


})

