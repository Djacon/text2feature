function prettify(num) {
    num = +num;
    let mark = '';
    if (num >= 10**9) {
        num /= 10 ** 9;
        mark = 'b';
    } else if (num >= 10**6) {
        num /= 10 ** 6;
        mark = 'm';
    } else if (num >= 1000) {
        num /= 1000;
        mark = 'k';
    }
    if (num > 100) {
        num = Math.ceil(num);
    } else if (num > 10) {
        num = +num.toFixed(1);
    } else {
        num = +num.toFixed(2);
    }
    return num + mark;
}

function median(arr) {
    arr.sort((a, b) => a - b);

    var middle = Math.floor(arr.length / 2);

    if (arr.length % 2 === 1) {
        return +arr[middle].toFixed(2);
    }
    var mid1 = arr[middle - 1];
    var mid2 = arr[middle];
    return +((mid1 + mid2) / 2).toFixed(2);
}

function get_info(arr) {
    let [min, max] = d3.extent(arr);
    let avg = +(arr.reduce((a, b) => a + b) / arr.length).toFixed(2);
    let dev = +Math.sqrt(arr.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / (arr.length - 1)).toFixed(2);
    let q50 = median(arr);
    return [min, max, avg, q50, dev];
}


function plot_hist(col_name, chart_id) {
    let column = cache_df.dataset[chart_id];

    let min = column.metadata.min, max = column.metadata.max;
    let nan_count = column.metadata.nan_count;
    let valid_count = column.metadata.total_values - nan_count;
    let nan_percentage = nan_count / column.metadata.total_values * 100;
    let info = [
        ['DataType', 'Numerical'],
        ['Mean', prettify(column.metadata.mean)],
        ['Median', prettify(column.metadata.median)],
        ['Std. Deviation', prettify(column.metadata.var)],
        ['Missing Values', `${nan_count} (${+(nan_percentage).toFixed(1)}%)`],
        ['Valid Values', `${valid_count} (${+(100 - nan_percentage).toFixed(1)}%)`],
    ]

    addChart(chart_id, col_name, info);

    var width = document.getElementById(`chart-${chart_id}`).clientWidth;
    var height = 300;
    var margin = { top: 20, right: 20, bottom: 20, left: 20 };

    var svg = d3.select(`#chart-${chart_id}`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    var xScale = d3.scaleLinear()
        .domain([min, max])
        .range([margin.left, width - margin.right])

    var histogram = d3.histogram()
        .domain(xScale.domain())(column.data);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(histogram, d => d.length)])
        .range([height - margin.bottom, margin.top]);

    var xAxis = d3.axisBottom(xScale)
        .tickValues([min, max])
        .tickFormat(function(d) {
            if ([min, max].includes(d))
                return prettify(d);
            else
                return "";
        })

    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .style("font", "12px arial")
        .call(xAxis)

    const rect = svg.selectAll("rect")
        .data(histogram)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("width", d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr("height", d => height - margin.bottom - yScale(d.length))
        .attr("fill", "#ffa116")

    const tooltip = d3.select(`#tooltip-${chart_id}`);

    rect.on("mouseover", (event, d) => {
        let left = prettify(d[0]), right = prettify(d[d.length-1])
        if (left === right) {
            tooltip.html(left);
        } else {
            tooltip.html(`[${left}; ${right}]`);
        }
        tooltip.style("display", "block")
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
    }).on("mouseout", () => {
        tooltip.style("display", "none");
    });
}

function mode(data) {
    let modeLabel = 'Not Found';
    let maxCount = 0;

    for (let item of data) {
        if (item[1] > maxCount) {
          modeLabel = item[0];
          maxCount = item[1];
        }
    }
    return [modeLabel, maxCount];
}


function plot_pie(col_name, chart_id) {
    let column = cache_df.dataset[chart_id];

    let nan_count = column.metadata.nan_count;
    let valid_count = column.metadata.total_values - nan_count;
    let nan_percentage = nan_count / column.metadata.total_values * 100;
    let info = [
        ['DataType', 'Categorical'],
        ['Unique', column.metadata.unique],
        ['Most Common', column.metadata.mode_info],
        ['Missing Values', `${nan_count} (${+(nan_percentage).toFixed(1)}%)`],
        ['Valid Values', `${valid_count} (${+(100 - nan_percentage).toFixed(1)}%)`],
    ];

    addChart(chart_id, col_name, info);

    var width = document.getElementById(`chart-${chart_id}`).clientWidth;
    var height = 300;

    const radius = Math.min(width, height) / 2;

    const svg = d3.select(`#chart-${chart_id}`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
        .value(d => d[1]);
 
    const arc = d3.arc() 
        .innerRadius(radius / 2)
        .outerRadius(radius)
        .cornerRadius(2)
 
    const arcs = svg.selectAll("arc") 
        .data(pie(column.data)) 
        .enter() 
        .append("g")
        .append("path") 
        .attr("fill", (_, i)=> color(i)) 
        .attr("d", arc)

    // svg.selectAll("label")
    //     .data(pie(column))
    //     .enter()
    //     .append("text")
    //     .attr("transform", d => `translate(${arc.centroid(d)})`)
    //     .attr("text-anchor", "middle")
    //     .text(d => d.data[0]);

    arcs.on("mouseover", (_, d) => {
        svg.append("text")
            .text(`${d.data[0]}: ${+(d.data[1] / valid_count * 100).toFixed(1)}%`)
            .attr("x", 0)
            .attr("y", 5)
            .attr("text-anchor", "middle")
            .attr("class", "no-invert")
    }).on("mouseout", () => {
        svg.select("text").remove();
    });
}
   

const fileInput = document.getElementById("data");
const charts = document.getElementById('my-charts');

const color = d3.scaleOrdinal().range(d3.schemeSet3);

const MAX_CATS = 10;
const MAX_CHARTS = 5; // temporary

const cache_df = {is_empty: true, dataset: []};

function _is_number(n) {
    return n && !isNaN(n - 0)
}

function _handle_column(data, col) {
    let cols = [];
    let cats_count = 0, cats = {}, maybe_cats = true;
    let type = 'none';

    for (let row of data) {
        let value = row[col];
        if (value !== '') {
            if (type != 'object') {
                if (_is_number(value)) {
                    type = 'num';
                } else {
                    type = 'object';
                }
            }

            if (maybe_cats) {
                if (value in cats) {
                    cats[value] += 1;
                } else {
                    cats_count += 1;
                    cats[value] = 1
                    if (cats_count > MAX_CATS) {
                        maybe_cats = false;
                        cats = {};
                    }
                }
            }
            cols.push(value);
        }
    }

    type = maybe_cats ? 'cat' : type == 'num' ? type : 'object';
    // console.log(col, type);

    let nan_count = data.length - cols.length;
    if (type == 'cat') {
        cats = Object.entries(cats);
        let [mode_col, mode_count] = mode(cats);
        let col_data = {type, col, data: cats,
                        metadata: {nan_count, total_values: data.length,
                                   unique: cats_count, mode_info: `${mode_col} (${+(mode_count / cols.length * 100).toFixed(1)}%)`}}
        return [true, col_data];
    } else if (type == 'num') {
        cols = new Float32Array(cols);
        let [min, max, mean_col, median_col, var_col] = get_info(cols);
        let col_data = {type, col, data: cols,
            metadata: {nan_count, total_values: data.length,
                       min: min, max: max, mean: mean_col, median: median_col, var: var_col}}
        return [true, col_data];
    }
    return [false, {}];
}

function _update_cache(data) {
    cache_df.is_empty = false;
    for (let col of data.columns) {
        let [is_valid, col_data] = _handle_column(data, col);
        if (is_valid) {
            cache_df.dataset.push(col_data);
        }
    }
    _update_options();
}

function _update_options() {
    for (let i = 0; i < cache_df.dataset.length; i++) {
        const name = cache_df.dataset[i].col;
        const newColumnOption = document.createElement('li');
        newColumnOption.innerHTML = `
            <div class="pl-5 flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-${i}" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-${i}" class="w-full pl-3 text-sm font-medium text-gray-900 rounded dark:text-gray-300 capitalized">${name}</label>
                <a href="#col-${i}">jump</a>
            </div>`;
        ulColumns.appendChild(newColumnOption);
    }

    const inputs = ulColumns.querySelectorAll('input');
    const total = inputs.length - 1;

    inputs[0].addEventListener('click', function(_) {
        const count = inputs[0].checked * total;
        _update_dropdown_text(count, total);
        for (let i = 1; i < inputs.length; i++) {
            inputs[i].checked = inputs[0].checked;
        }
    })

    let count = 0;
    for (let i = 1; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function(_) {
            inputs[0].checked = false;

            let count = 0;
            let total = inputs.length - 1;
            for (let input of inputs) {
                count += input.checked;
            }
            _update_dropdown_text(count, total);
        })
        if (i <= MAX_CHARTS) {
            inputs[i].checked = true;
            count += 1;
        }
    }

    document.getElementById('dropdown').classList.remove('hidden');
    _update_dropdown_text(count, total);
}

function _update_dropdown_text(count, total) {
    showDropdownButton.innerHTML = `Select Columns (${count} of ${total})<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 15.41l-4.29-4.29a1.01 1.01 0 0 0-1.42 0 1.01 1.01 0 0 0 0 1.42l5 5a1.01 1.01 0 0 0 1.42 0l5-5a1.01 1.01 0 0 0 0-1.42 1.01 1.01 0 0 0-1.42 0L12 15.41z"/></svg>`
}

function _plot(col_id) {
    values = cache_df.dataset[col_id];
    if (values.type == 'cat') {
        plot_pie(values.col, col_id);
    } else if (values.type == 'num') {
        plot_hist(values.col, col_id);
    }
}

function _toggle_column(col_id, is_open=true) {
    let chart_div = document.getElementById(`col-${col_id}`);
    if (!chart_div) {
        _plot(col_id);
        chart_div = document.getElementById(`col-${col_id}`);
    }

    if (is_open) {
        chart_div.classList.remove('hidden');
    } else {
        chart_div.classList.add('hidden');
    }
}

function addChart(chartID, name, info) {
    info_div = [];
    for (let item of info) {
        let v = `<p class="mt-1 text-sm text-gray-500 truncate sm:w-auto"><b>${item[0]}:</b> ${item[1]}</p>`
        info_div.push(v);
    }

    const newChartDiv = document.createElement('div');
    newChartDiv.id = `col-${chartID}`;
    newChartDiv.className = 'cols p-4 mt-4 w-full overflow-hidden bg-white rounded-lg';
    newChartDiv.innerHTML = `
        <div class="w-full p-4 bg-white rounded-lg xl:p-6">
            <h1 class="text-lg font-medium text-gray-700 capitalize sm:text-xl md:text-2xl">${name}</h1>
            <div class="grid gap-12 mt-8 sm:grid-cols-2">
                <div id="tooltip-${chartID}" class="rounded-lg" style="position: absolute; display: none; background-color: black; color: white; border: 1px solid black; padding: 5px; z-index: 1;"></div>
                <div id="chart-${chartID}" class="flex items-center capitalize no-invert">
                </div>
                <div class="flow-root mt-6">
                    <ul>
                        <li>
                            <span class="absolute top-4 left-4 rtl:right-4 rtl:left-auto -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                            <div class="relative flex">
                                <span class="flex items-center justify-center w-8 h-8 bg-white rounded-full ring-8 ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600 no-invert" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                                    </svg>
                                </span>

                                <div class="min-w-0 flex-1 pt-1.5 mx-3">
                                    <p class="text-sm font-medium text-gray-700">General Info:</p>
                                    ${info_div.join('\n')}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
    charts.appendChild(newChartDiv);
}

var lastWidth = window.innerWidth;
document.getElementById("submit").addEventListener("click", render);
window.addEventListener("resize", () => {
    if (Math.abs(lastWidth - window.innerWidth) > 25) {
        render();
        lastWidth = window.innerWidth;
    }
});

fileInput.addEventListener('change', function() {
    cache_df.is_empty = true;
    cache_df.dataset = [];
});


function render() {
    if (fileInput.files.length > 0) {
        if (!fileInput.files[0].name.endsWith('.csv')) {
            console.warn('Invalid Format!');
            return;
        }

        charts.innerHTML = '';
        var selectedFile = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            var fileContent = event.target.result;
            var data = d3.csvParse(fileContent);

            if (cache_df.is_empty) {
                ulColumns.innerHTML = '<li><div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"><input id="checkbox-item-main" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label for="checkbox-item-main" class="w-full pl-3 text-sm font-medium text-gray-900 rounded dark:text-gray-300">All Columns</label></div></li>';
                _update_cache(data);
            } else {
                console.log('We already have cache!');
            }

            inputs = ulColumns.querySelectorAll('input');
            for (let i = 1; i < inputs.length; i++) {
                if (!inputs[i].checked) continue;
                _plot(i-1);
            }
        };
        reader.readAsText(selectedFile);
    } else {
        console.warn('There is no file!');
    }
}

function _comeback_options() {
    dropdownSearch.style.display = 'none';
    let ids = new Set();
    for (let chart of charts.getElementsByClassName('cols')) {
        ids.add(+chart.id.split('-')[1]);
    }
    
    const inputs = ulColumns.querySelectorAll('input');
    inputs[0].checked = false;
    for (let i = 1; i < inputs.length; i++) {
        inputs[i].checked = ids.has(i-1);
    }

    _update_dropdown_text(ids.size, inputs.length-1);
}

function _apply_options() {
    dropdownSearch.style.display = 'none';
    const inputs = ulColumns.querySelectorAll('input');
    for (let i = 1; i < inputs.length; i++) {
        _toggle_column(i-1, inputs[i].checked);
    }
}

const showDropdownButton = document.getElementById('showDropdown');
const dropdownSearch = document.getElementById('dropdownSearch');
const ulColumns = document.getElementById('ul-columns');

showDropdownButton.addEventListener('click', function() {
    if (dropdownSearch.style.display === 'none' || dropdownSearch.style.display === '') {
        dropdownSearch.style.display = 'block';
    } else {
        dropdownSearch.style.display = 'none';
    }
});

document.getElementById('cancel').addEventListener('click', _comeback_options);
document.getElementById('apply').addEventListener('click', _apply_options);
