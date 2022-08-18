Vue.config.productionTip = false
/* 位置二 */
new Vue({
    el: '#sit2',
    data() {
        return {
            dataGradeCS: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeCS1: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeCS2: [
                { value: 60, name: '男生' },
                { value: 40, name: '女生' }
            ],
            dataGradeCS3: [
                { value: 50, name: '男生' },
                { value: 50, name: '女生' }
            ],
            dataGradeCS4: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto1: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto2: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeAuto3: [
                { value: 70, name: '男生' },
                { value: 30, name: '女生' }
            ],
            dataGradeAuto4: [
                { value: 60, name: '男生' },
                { value: 40, name: '女生' }
            ],
            grade: [
                { name: '22级', item: 1 },
                { name: '21级', item: 2 },
                { name: '20级', item: 3 },
                { name: '19级', item: 4 },
            ],
            grades: '22级',
        }
    },
    mounted() {
        this.drawC(),
            this.setTimer2()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet2)
    },
    methods: {
        changedata(item) {
            if (item == 1) {
                this.dataGradeCS = this.dataGradeCS1
                this.dataGradeAuto = this.dataGradeAuto1
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 2) {
                this.dataGradeCS = this.dataGradeCS2
                this.dataGradeAuto = this.dataGradeAuto2
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 3) {
                this.dataGradeCS = this.dataGradeCS3
                this.dataGradeAuto = this.dataGradeAuto3
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 4) {
                this.dataGradeCS = this.dataGradeCS4
                this.dataGradeAuto = this.dataGradeAuto4
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            }
        },
        startAuto() {
            this.setTimer2()
        },
        changedataA(item) {
            if (item == 1) {
                this.dataGradeCS = this.dataGradeCS1
                this.dataGradeAuto = this.dataGradeAuto1
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 2) {
                this.dataGradeCS = this.dataGradeCS2
                this.dataGradeAuto = this.dataGradeAuto2
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 3) {
                this.dataGradeCS = this.dataGradeCS3
                this.dataGradeAuto = this.dataGradeAuto3
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 4) {
                this.dataGradeCS = this.dataGradeCS4
                this.dataGradeAuto = this.dataGradeAuto4
                this.grades = this.grade[item - 1].name
                this.drawC()
            }
        },
        setTimer2() {
            var gradeIndex = 0
            this.clearTimeSet2 = setInterval(() => {
                gradeIndex++;
                gradeIndex %= this.grade.length
                this.changedataA(gradeIndex + 1)
            }, 1000);
        },
        clearTimer() {
            clearInterval(this.clearTimeSet2)
        },
        drawC() {
            var sexrate = echarts.init(document.getElementById('sexrate'));
            var total = {
                name: this.grades + '学生'
            };
            option = {
                title: [{
                    text: total.name,
                    left: '48%',
                    top: '37%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                }, {
                    text: total.value,
                    left: '48%',
                    top: '44%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 18
                    }
                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                color: ['#70a3ff', '#ff7f4e'],
                legend: {
                    orient: 'vertical',
                    x: 'center',
                    bottom: '5%',
                    selectedMode: false,
                    formatter: function (name) {
                        var oa = option.series[0].data;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < option.series[0].data.length; i++) {
                            if (name == oa[i].name) {
                                return name + "  " + oa[i].value + "  " + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    },
                    data: ['男生', '女生'],
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    },
                },

                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['45%', '55%'],
                        center: ['50%', '40%'],
                        data: this.dataGradeCS,
                        label: {
                            normal: {
                                show: false,
                                position: "outer",
                                align: 'left',
                                textStyle: {
                                    rotate: true
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {c}'
                                }
                            }

                        }
                    }
                ]
            };
            sexrate.setOption(option);

            var householdrate = echarts.init(document.getElementById('householdrate'));
            var total = {
                name: this.grades + '学生'
            };
            option = {
                title: [{
                    text: total.name,
                    left: '48%',
                    top: '37%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                }, {
                    text: total.value,
                    left: '48%',
                    top: '44%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 18
                    }
                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                color: ['#70a3ff', '#ff7f4e'],
                legend: {
                    orient: 'vertical',
                    x: 'center',
                    bottom: '5%',
                    selectedMode: false,
                    formatter: function (name) {
                        var oa = option.series[0].data;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < option.series[0].data.length; i++) {
                            if (name == oa[i].name) {
                                return name + "  " + oa[i].value + "  " + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    },
                    data: ['男生', '女生'],
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    },
                },
                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['45%', '55%'],
                        center: ['50%', '40%'],
                        data: this.dataGradeAuto,
                        label: {
                            normal: {
                                show: false,
                                position: "outer",
                                align: 'left',
                                textStyle: {
                                    rotate: true
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {c}'
                                }
                            }
                        }
                    }
                ]
            };
            householdrate.setOption(option);
        }
    },
})
/* 位置5*/
new Vue({
    el: '#sit5',
    data() {
        return {
            grades5: [
                { name: '22级计算机', item: 1 },
                { name: '21级计算机', item: 2 },
                { name: '20级计算机', item: 3 },
                { name: '19级计算机', item: 4 },
                { name: '22级自动化', item: 5 },
                { name: '21级自动化', item: 6 },
                { name: '20级自动化', item: 7 },
                { name: '19级自动化', item: 8 },
            ],
            grade5: '22级计算机',
            grade5CSAuto: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 63 }
            ],
            grade5CS22: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 63 }
            ],
            grade5CS21: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 67 },
                { A: 64, B: 62, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 63, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 65, F: 63 }
            ],
            grade5CS20: [
                { A: 79, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 79, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 79 },
                { A: 82, B: 81, C: 93, D: 75, F: 73 }
            ],
            grade5CS19: [
                { A: 59, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 59, C: 93, D: 73, F: 77 },
                { A: 84, B: 52, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 75, D: 59, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 53 }
            ],
            grade5Auto22: [
                { A: 79, B: 84, C: 83, D: 79, F: 67 },
                { A: 73, B: 89, C: 73, D: 73, F: 77 },
                { A: 87, B: 72, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 79 },
                { A: 82, B: 81, C: 93, D: 75, F: 73 }
            ],
            grade5Auto21: [
                { A: 88, B: 84, C: 83, D: 79, F: 57 },
                { A: 88, B: 89, C: 58, D: 73, F: 78 },
                { A: 58, B: 52, C: 78, D: 75, F: 87 },
                { A: 56, B: 88, C: 73, D: 58, F: 69 },
                { A: 52, B: 81, C: 93, D: 75, F: 68 }
            ],
            grade5Auto20: [
                { A: 69, B: 84, C: 86, D: 76, F: 67 },
                { A: 63, B: 89, C: 93, D: 73, F: 66 },
                { A: 86, B: 62, C: 66, D: 75, F: 67 },
                { A: 86, B: 84, C: 63, D: 89, F: 66 },
                { A: 86, B: 81, C: 63, D: 75, F: 63 }
            ],
            grade5Auto19: [
                { A: 79, B: 84, C: 83, D: 79, F: 66 },
                { A: 73, B: 88, C: 96, D: 76, F: 77 },
                { A: 74, B: 88, C: 73, D: 78, F: 88 },
                { A: 76, B: 86, C: 78, D: 89, F: 69 },
                { A: 72, B: 86, C: 93, D: 78, F: 63 }
            ],
        }
    },
    computed: {
        grade5CSAutoA() {
            return [
                this.grade5CSAuto[0].A,
                this.grade5CSAuto[1].A,
                this.grade5CSAuto[2].A,
                this.grade5CSAuto[3].A,
                this.grade5CSAuto[4].A
            ]
        },
        grade5CSAutoB() {
            return [
                this.grade5CSAuto[0].B,
                this.grade5CSAuto[1].B,
                this.grade5CSAuto[2].B,
                this.grade5CSAuto[3].B,
                this.grade5CSAuto[4].B
            ]
        },
        grade5CSAutoC() {
            return [
                this.grade5CSAuto[0].C,
                this.grade5CSAuto[1].C,
                this.grade5CSAuto[2].C,
                this.grade5CSAuto[3].C,
                this.grade5CSAuto[4].C
            ]
        },
        grade5CSAutoD() {
            return [
                this.grade5CSAuto[0].D,
                this.grade5CSAuto[1].D,
                this.grade5CSAuto[2].D,
                this.grade5CSAuto[3].D,
                this.grade5CSAuto[4].D
            ]
        },
        grade5CSAutoE() {
            return [
                this.grade5CSAuto[0].F,
                this.grade5CSAuto[1].F,
                this.grade5CSAuto[2].F,
                this.grade5CSAuto[3].F,
                this.grade5CSAuto[4].F
            ]
        },
        grade5CSAutoTotal(){
            var a =this.grade5CSAuto[0].A+this.grade5CSAuto[1].A+this.grade5CSAuto[2].A+this.grade5CSAuto[3].A+this.grade5CSAuto[4].A
            var b =this.grade5CSAuto[0].B+this.grade5CSAuto[1].B+this.grade5CSAuto[2].B+this.grade5CSAuto[3].B+this.grade5CSAuto[4].B
            var c =this.grade5CSAuto[0].C+this.grade5CSAuto[1].C+this.grade5CSAuto[2].C+this.grade5CSAuto[3].C+this.grade5CSAuto[4].C
            var d =this.grade5CSAuto[0].D+this.grade5CSAuto[1].D+this.grade5CSAuto[2].D+this.grade5CSAuto[3].D+this.grade5CSAuto[4].D
            var e =this.grade5CSAuto[0].F+this.grade5CSAuto[1].F+this.grade5CSAuto[2].F+this.grade5CSAuto[3].F+this.grade5CSAuto[4].F
            return [a,b,c,d,e]
        }
    },
    mounted() {
        this.drawSit5()
        this.setTimer5()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet5)
    },
    methods: {
        startAuto5() {
            this.setTimer5()
        },
        setTimer5() {
            var gradeIndex5 = 0
            this.clearTimeSet5 = setInterval(() => {
                gradeIndex5++;
                gradeIndex5 %= this.grades5.length
                this.changeDataA5(gradeIndex5 + 1)
            }, 1000);
        },
        clearTimer5() {
            clearInterval(this.clearTimeSet5)
        },
        changeDataSit5(item) {
            if (item == 1) {
                this.grade5CSAuto = this.grade5CS22
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 2) {
                this.grade5CSAuto = this.grade5CS21
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 3) {
                this.grade5CSAuto = this.grade5CS20
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 4) {
                this.grade5CSAuto = this.grade5CS19
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item ==5) {
                this.grade5CSAuto = this.grade5Auto22
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 6) {
                this.grade5CSAuto = this.grade5Auto21
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item ==7) {
                this.grade5CSAuto = this.grade5Auto20
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 8) {
                this.grade5CSAuto = this.grade5Auto19
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            
        },
        changeDataA5(item) {
            if (item == 1) {
                this.grade5CSAuto = this.grade5CS22
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item == 2) {
                this.grade5CSAuto = this.grade5CS21
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item == 3) {
                this.grade5CSAuto = this.grade5CS20
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item == 4) {
                this.grade5CSAuto = this.grade5CS19
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item ==5) {
                this.grade5CSAuto = this.grade5Auto22
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item == 6) {
                this.grade5CSAuto = this.grade5Auto21
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item ==7) {
                this.grade5CSAuto = this.grade5Auto20
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            if (item == 8) {
                this.grade5CSAuto = this.grade5Auto19
                this.grade5 = this.grades5[item - 1].name
                this.drawSit5()
            };
            
        },
        drawSit5() {
            var edubalance = echarts.init(document.getElementById('edubalance'));
            option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['思想', '科研竞赛', '文体', '实践', '学业', '总分'],
                    right: "15%",
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    top: '18%',
                    right: '5%',
                    bottom: '8%',
                    left: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2022年', '2023年', '2024年', '2025年', '2026年'],
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#3c4452'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            lineStyle: {
                                color: '#519cff'
                            },
                            alignWithLabel: true,
                            interval: 0,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',

                        nameTextStyle: {
                            color: '#fff'
                        },
                        interval: 20,
                        max: 200,
                        min: 0,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    },
                    {
                        min: 0,
                        max: 500,
                        interval: 50,
                        type: 'value',
                        name: '',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    }
                ],
                color: "yellow",
                series: [
                    {
                        name: '思想',
                        type: 'bar',
                        data: this.grade5CSAutoA,
                        itemStyle: {
                            normal: {
                                color: '#76da91'
                            }, label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '科研竞赛',
                        type: 'bar',
                        data: this.grade5CSAutoB,
                        itemStyle: {
                            normal: {
                                color: '#f8cb7f'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '文体',
                        type: 'bar',
                        data: this.grade5CSAutoC,
                        itemStyle: {
                            normal: {
                                color: '#f89588'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'

                            }
                        }
                    },
                    {
                        name: '实践',
                        type: 'bar',
                        data: this.grade5CSAutoD,
                        itemStyle: {
                            normal: {
                                color: '#7cd6cf'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '学业',
                        type: 'bar',
                        data: this.grade5CSAutoE,
                        itemStyle: {
                            normal: {
                                color: '#fcdfff'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '总分',
                        type: 'line',
                        yAxisIndex: 1,
                        lineStyle: {
                            normal: {
                                color: '#d37735'
                            }
                        },
                        data: this.grade5CSAutoTotal
                    }
                ]
            };
            edubalance.setOption(option);
        }
    }
})
/* 位置六 */
new Vue({
    el: '#sit6',
    data() {
        return {
            gradeCS6: [80, 78, 86, 78, 86],
            gradeAuto6: [89, 77, 79, 88, 98],
            gradeCS61: [89, 97, 76, 88, 96],
            gradeCS62: [43, 87, 96, 78, ''],
            gradeCS63: [65, 98, 86, '', ''],
            gradeCS64: [85, 88, '', '', ''],
            gradeAuto61: [83, 79, 89, 98, 87],
            gradeAuto62: [87, 89, 86, 78, ''],
            gradeAuto63: [68, 78, 78, '', ''],
            gradeAuto64: [78, 87, '', '', ''],
            gradesSit6: [
                { name: '22级', item: 1 },
                { name: '21级', item: 2 },
                { name: '20级', item: 3 },
                { name: '19级', item: 4 }
            ],
            gradeSit6: '22级'
        }
    },
    mounted() {
        this.drawSit6()
        this.setTimer6()

    },
    beforeCreate() {
        clearInterval(this.clearTimeSet6)
    },
    methods: {
        startAuto6() {
            this.setTimer6()
        },
        setTimer6() {
            var gradeIndex6 = 0
            this.clearTimeSet6 = setInterval(() => {
                gradeIndex6++;
                gradeIndex6 %= this.gradesSit6.length
                this.changedataA6(gradeIndex6 + 1)
            }, 1000);
        },
        clearTimer6() {
            clearInterval(this.clearTimeSet6)
        },
        changeDataSit6(item) {
            if (item == 1) {
                this.gradeCS6 = this.gradeCS61
                this.gradeAuto6 = this.gradeAuto61
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
                clearInterval(this.clearTimeSet6)
            };
            if (item == 2) {
                this.gradeCS6 = this.gradeCS62
                this.gradeAuto6 = this.gradeAuto62
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
                clearInterval(this.clearTimeSet6)
            };
            if (item == 3) {
                this.gradeCS6 = this.gradeCS63
                this.gradeAuto6 = this.gradeAuto63
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
                clearInterval(this.clearTimeSet6)
            };
            if (item == 4) {
                this.gradeCS6 = this.gradeCS64
                this.gradeAuto6 = this.gradeAuto64
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
                clearInterval(this.clearTimeSet6)
            };
        },
        changedataA6(item) {
            if (item == 1) {
                this.gradeCS6 = this.gradeCS61
                this.gradeAuto6 = this.gradeAuto61
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 2) {
                this.gradeCS6 = this.gradeCS62
                this.gradeAuto6 = this.gradeAuto62
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 3) {
                this.gradeCS6 = this.gradeCS63
                this.gradeAuto6 = this.gradeAuto63
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 4) {
                this.gradeCS6 = this.gradeCS64
                this.gradeAuto6 = this.gradeAuto64
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
        },
        drawSit6() {
            var graduateyear = echarts.init(document.getElementById('graduateyear'));
            option = {
                title: {
                    text: "",
                    x: 'center',
                    y: 'top',
                    textStyle:
                    {
                        color: '#fff',
                        fontSize: 13
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '8%',
                    bottom: '5%',
                    top: "13%",
                    containLabel: true
                },
                color: ["#72b332", '#35a9e0'],
                legend: {
                    data: [this.gradeSit6 + '计算机', this.gradeSit6 + '自动化'],
                    show: true,

                    right: '15%',
                    y: "0",
                    textStyle: {
                        color: "#999",
                        fontSize: '13'
                    },
                },
                toolbox: {
                    show: false,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2022年', '2023年', '2024年', '2025年', '2026年'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2d3b53'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0,
                            rotate: '15'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2d3b53'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#999"
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: this.gradeSit6 + '计算机',
                        type: 'line',
                        smooth: true,
                        symbol: 'roundRect',
                        data: this.gradeCS6
                    },
                    {
                        name: this.gradeSit6 + '自动化',
                        type: 'line',
                        smooth: true,
                        symbol: 'roundRect',
                        data: this.gradeAuto6
                    }
                ]
            };
            graduateyear.setOption(option);
        }
    }
})
/* 位置七 */
new Vue({
    el: '#sit7',
    data() {
        return {
            grades7: [
                { name: '22级计算机', item: 1 },
                { name: '21级计算机', item: 2 },
                { name: '20级计算机', item: 3 },
                { name: '19级计算机', item: 4 },
                { name: '22级自动化', item: 5 },
                { name: '21级自动化', item: 6 },
                { name: '20级自动化', item: 7 },
                { name: '19级自动化', item: 8 },
            ],
            grade7: '22级计算机',
            grade7CSAuto: [
                { index: 01, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS22: [
                { index: 01, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS21: [
                { index: 01, name: 'xox', score1: 91, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'oqq', score1: 91, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wow', score1: 91, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'oee', score1: 91, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 91, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aoa', score1: 81, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'oss', score1: 81, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 81, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'off', score1: 81, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ogg', score1: 81, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xox', score1: 91, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qoq', score1: 91, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wow', score1: 91, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eoe', score1: 91, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'ror', score1: 91, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aoa', score1: 81, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sos', score1: 81, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dod', score1: 81, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fof', score1: 81, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gog', score1: 81, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS20: [
                { index: 01, name: 'xqx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wqw', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eqe', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rqr', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aqa', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sqs', score1: 86, score2: 87, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dqd', score1: 84, score2: 87, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fqf', score1: 82, score2: 87, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gqg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xqx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wwq', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'qee', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrq', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'qaa', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'ssq', score1: 86, score2: 87, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'qdd', score1: 84, score2: 87, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'ffq', score1: 82, score2: 87, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'qgg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS19: [
                { index: 01, name: 'sxx', score1: 97, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'sqq', score1: 97, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'sww', score1: 97, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'see', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrs', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aas', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 87, score4: 86, score5: 86 },
                { index: 08, name: 'dsd', score1: 84, score2: 84, score3: 87, score4: 84, score5: 84 },
                { index: 09, name: 'fsf', score1: 82, score2: 82, score3: 87, score4: 82, score5: 82 },
                { index: 10, name: 'gsg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xsx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qsq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'sww', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'ese', score1: 92, score2: 92, score3: 97, score4: 92, score5: 92 },
                { index: 15, name: 'srr', score1: 90, score2: 90, score3: 90, score4: 97, score5: 90 },
                { index: 16, name: 'asa', score1: 88, score2: 88, score3: 88, score4: 87, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 87, score5: 86 },
                { index: 18, name: 'dsd', score1: 84, score2: 84, score3: 87, score4: 84, score5: 84 },
                { index: 19, name: 'sff', score1: 87, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gsg', score1: 87, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto22: [
                { index: 01, name: 'kxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'kqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wkw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eke', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rkr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'kaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sks', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dkd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fkf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gkg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qkq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wkw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eke', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'kaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'kss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dkd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'kff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gkg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto21: [
                { index: 01, name: 'wxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'wqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'ewe', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'wrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaw', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'wss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'wdd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fwf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gwg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'wqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'wee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sws', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dwd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fwf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gwg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto20: [
                { index: 01, name: 'xmx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wmw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eme', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'maa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sms', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'mff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'mxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qmq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wmw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eme', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'ama', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'mff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gmg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto19: [
                { index: 01, name: 'lxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'lqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wwl', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'laa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'lss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dld', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'lff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'lgg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qlq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wlw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rlr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'lss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ldd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'glg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ]
        }
    },
    mounted() {
        this.setTimer7()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet7)
    },
    methods: {
        changeDataSit7(item) {
            if (item == 1) {
                this.grade7CSAuto = this.grade7CS22
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 2) {
                this.grade7CSAuto = this.grade7CS21
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 3) {
                this.grade7CSAuto = this.grade7CS20
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 4) {
                this.grade7CSAuto = this.grade7CS19
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 5) {
                this.grade7CSAuto = this.grade7Auto22
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 6) {
                this.grade7CSAuto = this.grade7Auto21
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 7) {
                this.grade7CSAuto = this.grade7Auto20
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 8) {
                this.grade7CSAuto = this.grade7Auto19
                this.grade7 = this.grades7[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
        },
        startAuto7() {
            this.setTimer7()
        },
        setTimer7() {
            var gradeIndex7 = 0
            this.clearTimeSet7 = setInterval(() => {
                gradeIndex7++;
                gradeIndex7 %= this.grades7.length
                this.changedataA7(gradeIndex7 + 1)
            }, 1000);
        },
        changedataA7(item) {
            if (item == 1) {
                this.grade7CSAuto = this.grade7CS22
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 2) {
                this.grade7CSAuto = this.grade7CS21
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 3) {
                this.grade7CSAuto = this.grade7CS20
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 4) {
                this.grade7CSAuto = this.grade7CS19
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 5) {
                this.grade7CSAuto = this.grade7Auto22
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 6) {
                this.grade7CSAuto = this.grade7Auto21
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 7) {
                this.grade7CSAuto = this.grade7Auto20
                this.grade7 = this.grades7[item - 1].name
            };
            if (item == 8) {
                this.grade7CSAuto = this.grade7Auto19
                this.grade7 = this.grades7[item - 1].name
            };
        },

    }
})
/* 位置八 */
new Vue({
    el:'#sit8',
    data(){
        return{
            grade8CS22: { A: 89, B: 84, C: 83, D: 79, F: 87 },
            grade8CS21: { A: 89, B: 84, C: 83, D: 79, F: 75 },
            grade8CS20: { A: 79, B: 84, C: 83, D: 79, F: 47 },
            grade8CS19: { A: 59, B: 84, C: 83, D: 79, F: 88 },
            grade8Auto22: { A: 79, B: 84, C: 83, D: 79, F: 67 },
            grade8Auto21: { A: 88, B: 84, C: 83, D: 79, F: 57 },
            grade8Auto20: { A: 69, B: 84, C: 86, D: 76, F: 79 },
            grade8Auto19: { A: 79, B: 84, C: 83, D: 79, F: 66 },

        }
    },
    mounted(){
        this.drawSit8()
    },
    methods:{
        drawSit8(){
            var juniorservice = echarts.init(document.getElementById('juniorservice'));
            option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color:['#eaff00','#22ac38','#6bc0fb','#7fec9d','#fedd8b',],
                legend: {
                    right:'0',
                    data: ['思想', '科研竞赛','文体','实践','学业'],
                    textStyle:{
                        color:'#00ffff'
                    }
                },
                grid: {
                    left: '8%',
                    right: '4%',
                    bottom: '3%',
                    top:'10%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color: '#1e2b43'
                        }
                    },
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: '#115372'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        },
                        alignWithLabel: true,
                        interval:0
        
                    }
                },
                dataZoom: [{
                    type: 'slider',
                    width:'57',
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    start: 0,
                    x:'0',
                    end: 60,
                    handleStyle:{
                        color:"#519cff",
                        backgroundColor:'#519cff'
                    },
                    textStyle:{
                        color:"#fff"},
                    borderColor:"#519cff"
                }],
                yAxis: {
                    type: 'category',
                    data: ['22级计算机','21级计算机','20级计算机',' 19级计算机','22级自动化','21级自动化','20级自动化','19级自动化'],
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color: '#1e2b43'
                        }
                    },
        
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show:true,
                        lineStyle: {
                            color: '#115372'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:"#419aff"
                        },
                        lineStyle:{
                            color: '#519cff'
                        },
                        alignWithLabel: true,
                        interval:0
                    }
                },
                series: [
                    {
                        name: '思想',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle:{
                                    color:'#333'
                                }
                            }
        
                        },
                        data: [
                            this.grade8CS22.A,
                            this.grade8CS21.A,
                            this.grade8CS20.A,
                            this.grade8CS19.A,
                            this.grade8Auto22.A,
                            this.grade8Auto21.A,
                            this.grade8Auto20.A,
                            this.grade8Auto19.A,
                        ],
                    },
                    {
                        name: '科研竞赛',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle:{
                                    color:'#00f0ff'
                                }
        
                            }
                        },
                        data: [
                            this.grade8CS22.B,
                            this.grade8CS21.B,
                            this.grade8CS20.B,
                            this.grade8CS19.B,
                            this.grade8Auto22.B,
                            this.grade8Auto21.B,
                            this.grade8Auto20.B,
                            this.grade8Auto19.B,
                        ],
                    },
                    {
                        name: '文体',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle:{
                                    color:'#00f0ff'
                                }
        
                            }
                        },
                        data:[                   
                            this.grade8CS22.C,
                            this.grade8CS21.C,
                            this.grade8CS20.C,
                            this.grade8CS19.C,
                            this.grade8Auto22.C,
                            this.grade8Auto21.C,
                            this.grade8Auto20.C,
                            this.grade8Auto19.C,
                        ],
                    },
                    {
                        name: '实践',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle:{
                                    color:'#00f0ff'
                                }
        
                            }
                        },
                        data: [
                            this.grade8CS22.D,
                            this.grade8CS21.D,
                            this.grade8CS20.D,
                            this.grade8CS19.D,
                            this.grade8Auto22.D,
                            this.grade8Auto21.D,
                            this.grade8Auto20.D,
                            this.grade8Auto19.D,
                        ],
                    },
                    {
                        name: '学业',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle:{
                                    color:'#00f0ff'
                                }
        
                            }
                        },
                        data: [
                            this.grade8CS22.F,
                            this.grade8CS21.F,
                            this.grade8CS20.F,
                            this.grade8CS19.F,
                            this.grade8Auto22.F,
                            this.grade8Auto21.F,
                            this.grade8Auto20.F,
                            this.grade8Auto19.F,
                        ],
                    }
                ]
            };
            juniorservice.setOption(option);
        
        
        }
    }
})
