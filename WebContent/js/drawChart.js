google.charts.load('current', { 'packages': ['corechart'] });

function drawChart(category) {
    if(category == 1){
        command='getGreenRatio';
    }else if(category == 2 || category==3){
        command='getBudget';
    }

    axios.post("http://localhost/Project_Happiness/happiness.do?command="+command)
        .then(res => {
            let chartData = eval(res.data);
            for (let i in chartData) {
                chartData[i][0] = parseFloat(chartData[i][0]);
                chartData[i][1] = parseFloat(chartData[i][1]);
            }
            console.log(chartData);
            if (category == 1) {
                drawGreen(chartData);
            }else if(category ==2 ){
                drawBudget(chartData);
            }else if(category ==3){
                drawFitBudget(chartData);
            }

        })
        .catch(function (err) {
            console.log('안돼...', err);
        });
}

function drawGreen(chartData) {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', '녹지 비율 (%)');
    dataTable.addColumn('number', '행복 지수 (10점 만점)');
    dataTable.addColumn({ type: 'string', role: 'tooltip' });

    dataTable.addRows(chartData);

    var options = {
        width: 600,
        height: 400,
        vAxis: { title: "행복지수 (10점 만점)" },
        hAxis: { title: "녹지비율 (%)" },
        legend: { position: "none" }
      };

    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));
    chart.draw(dataTable, options);
}

function drawBudget(chartData) {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', '문화/관광 예산');
    dataTable.addColumn('number', '행복 지수 (10점 만점)');
    dataTable.addColumn({ type: 'string', role: 'tooltip' });

    dataTable.addRows(chartData);

    var options = {
        width: 600,
        height: 400,
        vAxis: { title: "행복지수 (10점 만점)" },
        hAxis: { title: "문화/관광 예산" },
        legend: { position: "none" }
      };

    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));
    chart.draw(dataTable, options);
}

function drawFitBudget(chartData) {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', '문화/관광 예산');
    dataTable.addColumn('number', '행복 지수 (10점 만점)');
    dataTable.addColumn({ type: 'string', role: 'tooltip' });
    dataTable.addColumn('number', 'line')

    

    let x=[];
    let y=[]
    for (let i in chartData){
        x.push(chartData[i][0]);
        y.push(chartData[i][1]);
    }

    let xAverage = sum(x)/x.length;
    let yAverage = sum(y)/y.length;

    let tempD = 0;
    let tempN = 0;
    for (let i in x){
        tempN+=(yAverage-y[i])*(xAverage-x[i])
        tempD+=(xAverage-x[i])*(xAverage-x[i])
    }
    let a = tempN/tempD;
    let b = yAverage-a*xAverage;


    var max = x.reduce( function (previous, current) { 
        return previous > current ? previous:current;
    });
    
    //최소값
    var min = x.reduce( function (previous, current) { 
        return previous > current ? current:previous;
    });

    let fitData = [];
    for(let i in chartData){
        if(chartData[i][0]==min || chartData[i][0]==max){
            fitData.push([chartData[i][0],chartData[i][1],chartData[i][2],a*chartData[i][0]+b]);
        }else{
            fitData.push([chartData[i][0],chartData[i][1],chartData[i][2], a*chartData[i][0]+b]);
        }
    }
    console.log(fitData);

    dataTable.addRows(fitData);

    var options = {
        width: 600,
        height: 400,
        vAxis: { title: "행복지수 (10점 만점)" },
        hAxis: { title: "문화/관광 예산" },
        legend: { position: "none" },
        series: {
            seriesType: 'line',
            1: {
                lineWidth: 3,
                pointSize: 0,
                curveType: 'function'
            }
          }
      };

    var chart = new google.visualization.ScatterChart(document.getElementById('dataView'));
    chart.draw(dataTable, options);
}

function sum(list){
    let result = 0;
    for(let i in list){
        result += list[i];
    }
    return result;
}

