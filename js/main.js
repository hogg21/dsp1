window.onload = function(){

     
    // EQ график чарт
    const ctx = document.getElementById('eq_chart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['100', '1k', '20000'],
            datasets: [{
                label: 'high',
                data: [-40, -2, -2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
                pointBorderWidth : 5
            },
                {
                    label: 'mid',
                    data: [-10, 2, 2],
                    backgroundColor: ['rgb(0, 0, 255)'],
                    borderColor: [
                        'rgb(100, 153, 255, 1)',
                    ],
                    borderWidth: 1,
                    pointBorderWidth : 5
                },
                {
                    label: 'sub',
                    data: [5, -20, 14],
                    backgroundColor: ['rgb(255, 255, 0)'],
                    borderColor: [
                        'rgb(255, 255, 0)'
                    ],
                    borderWidth: 1,
                    pointBorderWidth : 5
                },
                {
                    label: 'low',
                    data: [2, -2, -5],
                    backgroundColor: ['rgb(150, 255, 100)'],
                    borderColor: ['rgb(150, 255, 100)'],
                    borderWidth: 1,
                    pointBorderWidth : 5
                }
            ]
        },
        options: {
            scales: {
                y: {
                    display: true,
                    stacked: true,
                    ticks: {
                        min: 100, // minimum value
                        max: 20000 // maximum value
                    }
                }
            },
        },
    });
    // toggle buttons(hi, mid, low, sub) - EQ
    (function () {
        const changeValue = document.querySelector('input[range]')
        console.log(changeValue);
        let buttonHigh = document.querySelector('.high')
        buttonHigh.style.backgroundColor = '#5B5B5B'
        buttonHigh.addEventListener('click', function () {
            myChart.show(0)
            myChart.hide(1)
            myChart.hide(2)
            myChart.hide(3)
            // #E23A3A - bgc hi
            buttonHigh.style.backgroundColor = '#E23A3A'

        })
        let buttonMid = document.querySelector('.mid')
        buttonMid.style.backgroundColor = '#5B5B5B'

        buttonMid.addEventListener('click', function () {
            myChart.show(1)
            myChart.hide(0)
            myChart.hide(2)
            myChart.hide(3)
            buttonMid.style.backgroundColor = '#6499FF'

        })
        let buttonLow = document.querySelector('.low')
        buttonLow.style.backgroundColor = '#5B5B5B'

        buttonLow.addEventListener('click', function () {
            myChart.show(2)
            myChart.hide(0)
            myChart.hide(1)
            myChart.hide(3)
            buttonLow.style.backgroundColor = '#7DD155'
        })

        let buttonSub = document.querySelector('.sub')
        buttonSub.style.backgroundColor = '#5B5B5B'
        buttonSub.addEventListener('click', function () {
            myChart.show(3)
            myChart.hide(0)
            myChart.hide(2)
            myChart.hide(1)
            buttonSub.style.backgroundColor = '#F4CE44'
        })
    })();
    // Char Line
    // Код для работы навигации в нижнем части
    let navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function(link){
        link.addEventListener('click',function(e){
            e.preventDefault();

            let target = this.getAttribute('href'); 
            clearContentBlocks();
            clearNavItems();

            let targetBlock = document.querySelector(target)
            if(targetBlock)
                targetBlock.classList.add('active');

            this.classList.add('active');
            
        })
    })
    // second chart
    // const ctx1 = document.getElementById('cross_chart')
    // const myChart1 = new Chart(ctx1, {
    //     type: 'line',
    //     data: {
    //         labels: ['100', '1k', '20000'],
    //         datasets: [{
    //             label: 'high',
    //             data: [-40, -2, -2],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //             ],
    //             borderWidth: 1,
    //             pointBorderWidth: 5
    //         },
    //         {
    //             label: 'mid',
    //             data: [-10, 2, 2],
    //             backgroundColor: ['rgb(0, 0, 255)'],
    //             borderColor: [
    //                 'rgb(100, 153, 255, 1)',
    //             ],
    //             borderWidth: 1,
    //             pointBorderWidth: 5
    //         },
    //         {
    //             label: 'sub',
    //             data: [5, -20, 14],
    //             backgroundColor: ['rgb(255, 255, 0)'],
    //             borderColor: [
    //                 'rgb(255, 255, 0)'
    //             ],
    //             borderWidth: 1,
    //             pointBorderWidth: 5
    //         },
    //         {
    //             label: 'low',
    //             data: [2, -2, -5],
    //             backgroundColor: ['rgb(150, 255, 100)'],
    //             borderColor: ['rgb(150, 255, 100)'],
    //             borderWidth: 1,
    //             pointBorderWidth: 5
    //         }
    //         ]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 display: true,
    //                 stacked: true,
    //                 ticks: {
    //                     min: 100, // minimum value
    //                     max: 20000 // maximum value
    //                 }
    //             }
    //         },
    //     },
    // });
    // Спикеры все off или on
    switcherInput = document.querySelector('[name=switchers_all]');
    switcherInput.addEventListener('input',function(e){
        e.preventDefault();
        let allSpeakers = document.querySelectorAll('#speakers .speakers_all [type=checkbox]');
        if(this.checked){
            allSpeakers.forEach(function(item){
                item.checked = true;
            })
        }else{
            allSpeakers.forEach(function(item){
                item.checked = false;
            })
        }
    })

    // style 5 frequency level
    const dbNum = document.querySelector('.cross_number')
    dbNum.style.color = '#A482EE';
    dbNum.style.fontSize = '12px';
    dbNum.style.fontWeight = '700';


    // Eq list frequency
    (function () {
        const levelName = document.querySelector('.frequenc')
        // levelName.textContent = 1
        const frequList = document.getElementById('cross_frequency')
        frequList.style.backgroundColor = '#272727'
        frequList.style.color = '#9D9D9D'
        frequList.style.fontSize = '16px'
        frequList.addEventListener('click', function () {
            if (frequList.value === 'Low') {
                levelName.textContent = 'Low'
            }
            if (frequList.value === 'High') {
                levelName.textContent = 'High'
            }
            if (frequList.value === 'Band') {
                levelName.textContent = 'Band'
            }
            if (frequList.value === 'Level') {
                levelName.textContent = 'Level'
            }
            if (frequList.value === 'Q Factor') {
                levelName.textContent = 'Q Factor'
            }
            if (frequList.value === 'Frequency') {
                levelName.textContent = 'Frequency'
            }
        })
    })();
    (function () {
        let buttonHigh = document.querySelector('.cross_high');
        let buttonLow = document.querySelector('.cross_low');
        let buttonSub = document.querySelector('.cross_sub');
        let buttonMid = document.querySelector('.cross_mid');
        buttonHigh.style.backgroundColor = '#5B5B5B'
        buttonLow.style.backgroundColor = '#5B5B5B'
        buttonMid.style.backgroundColor = '#5B5B5B'
        buttonSub.style.backgroundColor = '#5B5B5B'
        buttonHigh.addEventListener('click', function () {
            myChart.show(0)
            myChart.hide(1)
            myChart.hide(2)
            myChart.hide(3)
            buttonHigh.style.backgroundColor = '#E23A3A'
        })
        buttonMid.addEventListener('click', function () {
            myChart.show(1)
            myChart.hide(0)
            myChart.hide(2)
            myChart.hide(3)
            buttonMid.style.backgroundColor = '#6499FF'
        })
        buttonLow.addEventListener('click', function () {
            myChart.show(2)
            myChart.hide(0)
            myChart.hide(1)
            myChart.hide(3)
            buttonLow.style.backgroundColor = '#7DD155'
        })
        buttonSub.addEventListener('click', function () {
            myChart.show(3)
            myChart.hide(0)
            myChart.hide(2)
            myChart.hide(1)
            buttonSub.style.backgroundColor = '#F4CE44'
        })
    })();


    const crossSettingsBlock = document.querySelector('.cross_settings_block');
    // Styling crossSettingsBlock
    crossSettingsBlock.style.marginLeft = '-360px';
    crossSettingsBlock.style.marginRight = '20px';
    crossSettingsBlock.style.marginTop = '220px'



    // Range Slider Стилы &&  Change Value by Range
    let allRangeSliders = document.querySelectorAll("[type=range]");
    allRangeSliders.forEach(function(item){
        item.oninput = function () {
            let buttonHigh = document.querySelector('.high');
            let buttonLow = document.querySelector('.low');
            let buttonSub = document.querySelector('.sub');
            let buttonMid = document.querySelector('.mid');
            let lowButton = document.querySelector('.fl_item')
            let highButton = document.querySelector('.high-button')

            const values = [1, 1.1, 1.25, 1.4, 1.6, 1.8, 2, 2.25, 2.85, 3.15, 3.6, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11.2, 12.5, 14.3, 16, 18];
            let percent = (this.value / 20) * 100;

            
            console.log(values[this.value] * 1000);
            
            if(item.classList.contains('cross_range')){
                percent = ((this.value*1) / 25) * 100;
            }
            if (buttonHigh) {
                lowButton = myChart.data.datasets[0].data[0] = values[this.value]
                highButton = myChart.data.datasets[0].data[1] = values[this.value]
                myChart.update()
            }
            if (buttonMid) {
                lowButton = myChart.data.datasets[1].data[1] = values[this.value]
                myChart.update()
            } else {
                highButton = myChart.data.datasets[1].data[0] = values[this.value]
                myChart.update()
            }
            if (buttonSub) {
                lowButton = myChart.data.datasets[2].data[2] = values[this.value]
                myChart.update()
            } else {
                highButton = myChart.data.datasets[2].data[1] = values[this.value]
                myChart.update()
            }
            if (buttonLow) {
                lowButton = myChart.data.datasets[3].data[1] = values[this.value]
                myChart.update()
            } else {
                highButton = myChart.data.datasets[3].data[0] = values[this.value]
                myChart.update()
            }
            this.parentNode.querySelector('.range_text .range_value .number').textContent = values[this.value];
            this.style.background = 'linear-gradient(to right, #A482EE 0%, #A482EE '+ percent +'%, #535353 ' + percent + '%, #535353 100%)'
        };
    })
    

   
    // TCORR элементы для управление
    let allTcorrSpeakers = document.querySelectorAll('#tcorr .speakers_all input');
    allTcorrSpeakers.forEach(function(item){
        item.addEventListener('click',function(e){
           
            clearTcorrSpeakers();
            this.checked = true;
            
            let targetParameter = this.dataset.target;
            clearTcorrParametres();
            document.querySelector(targetParameter).classList.add('active')
        })
    })

    // Cross Select отключить выборку
    document.querySelectorAll('.frequency_slope select').forEach(function(item){
        item.addEventListener('mousedown',function(e){
            e.preventDefault()
            this.blur();
        })
    })

    // Cross Select Навигация
    document.querySelectorAll('.slope_navigation span').forEach(function(item){
        item.addEventListener('click',function(e){
            
            e.preventDefault();
            let select = this.parentNode.parentNode.querySelector('select')
            let selectOptions = select.querySelectorAll('option');
            let i = 0;
            if(this.classList.contains('prev')){
                
                selectOptions.forEach(function(optionItem){
                    
                    if(optionItem.selected){
                        previousOptionElement = i - 1;
                    }

                    i++;
                })

                if( i >= 0){
                    selectOptions[previousOptionElement].selected = true;
                }

            }else{
                selectOptions.forEach(function(optionItem){
                    
                    if(optionItem.selected){
                        nextOptionElement = i + 1;
                    }

                    i++;
                })

                if( i <= selectOptions.length){
                    selectOptions[nextOptionElement].selected = true;
                }
            }
            
        })
    })


    // Cross Переключатель Low/High для частоты
    frequencyLevels = document.querySelectorAll('.fl_levels_row .fl_item');
    frequencyLevels.forEach(function(item){
        
        let target = item.dataset.target;
        let bigParent = item.parentNode.parentNode.parentNode;
        let levels = bigParent.querySelectorAll('.frequency_levels_item');
        item.addEventListener('click',function(e){
            e.preventDefault();
            clearFrequencyLevels();

            this.classList.add('active');

            levels.forEach(function(level){
                level.classList.remove('active')
            })

            bigParent.querySelector('.frequency_levels_item' + target).classList.add('active');  
        })
        
              
    })


   


}
// Очишаем все контент элементы
function clearContentBlocks(){
    let blocks = document.querySelectorAll('.content_block');
    blocks.forEach(function(item){
        item.classList.remove('active');
    })
}
(function () {
    const changeRange = document.querySelector('.range_value')
    const frList = document.getElementById('.cross_fr')
    frList.addEventListener('click', function () {
        if (frList.value === '-6dB/Oct') {
            changeRange.textContent = '-6db/Oct'
        }
        if (frList.value === '-12dB/Oct') {
            changeRange.textContent = '-12db/Oct'
        }
        if (frList.value === '-18dB/Oct') {
            changeRange.textContent = '-18db/Oct'
        }
        if (frList.value === '-24dB/Oct') {
            changeRange.textContent = '-24db/Oct'
        }
        if (frList.value === '-30dB/Oct') {
            changeRange.textContent = '-30db/Oct'
        }
    })
})();

// Очишаем все элементы навигации
function clearNavItems(){
    let blocks = document.querySelectorAll('.navigation a');
    blocks.forEach(function(item){
        item.classList.remove('active');
    })
}

// Очишаем все элементы tcorr Спикеров
function clearTcorrSpeakers(){
    let speakers = document.querySelectorAll('#tcorr .speakers_all input');
    speakers.forEach(function(item){
        item.checked = false;
    })
}

// Очишаем все элементы tcorr Параметров
function clearTcorrParametres(){
    let speakers = document.querySelectorAll('#tcorr .speakers_params .param_item');
    speakers.forEach(function(item){
        item.classList.remove('active');
    })
}


function clearFrequencyLevels(){
    frequencyLevels = document.querySelectorAll('.fl_levels_row .fl_item');
    frequencyLevels.forEach(function(item){
        item.classList.remove('active')
    })
}