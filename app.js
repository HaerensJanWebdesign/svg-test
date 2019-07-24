// Gets the DOM-element         
//const drawBoard = document.getElementsByClassName('drawBoard')[0];    (1)
//returns array
const drawingBoard = d3.select('.drawBoard');

//console.log(drawBoard);
//console.log(drawingBoard);

//add Data array                                                        (4)
let randomData = [[0,14],[1,13],[2,9],[3,7],[4,6],[5,4],[6,2],[7,0],[8,-2],[9,-3]];
let convertedArray = [];
for (i = 0 ; randomData.length > i ; i++){
        convertedArray.push(randomData[i][1]);
};
console.log(convertedArray)

//add an svg element                                                    (2)
const svg = drawingBoard.append('svg')
                        .attr('width', '800' )
                        .attr('height', '500');

// draw some elements                                                   (3)

svg.append('line')
        .attr('x1', 20)
        .attr('x2', 780)
        .attr('y1', 480)
        .attr('y2', 480)
        .attr('stroke', 'black');

svg.append('line')
        .attr('x1', 20)
        .attr('x2', 20)
        .attr('y1', 20)
        .attr('y2', 480)
        .attr('stroke', 'black');

// // svg.append('text')
//         .text('Epic SVG D3.js')
//         .attr('x', 300)
//         .attr('y', 50)
//         .attr('fill', '#EC4D37')
//         .attr('font-weight', 'bold')
//         .attr('font-size', '2rem')
//         .attr('stroke', '#1D1B1B');

// add rectangle to create data visualisation                          (5)
const bar1 = svg.append('rect');
const bar2 = svg.append('rect');
const bar3 = svg.append('rect');
const bar4 = svg.append('rect');
const bar5 = svg.append('rect');
const bar6 = svg.append('rect');
const bar7 = svg.append('rect');
const bar8 = svg.append('rect');
const bar9 = svg.append('rect');
const bar10 = svg.append('rect');

//select all rectangles                                                 (6)
const dataVisualization = d3.selectAll('rect');

// give a position and size to each rectangle                           (7)
dataVisualization.data(convertedArray)
        .attr('width', 50)
        .attr('fill','black')
        .attr('stroke', 'red')
        .attr('y', (d,i) => {
            return 480 - (d*10);
    })
    .attr('x', (d, i) =>{
        return 40 + (i * 60);
    })
    .attr('height', (d,i) => {
            return d * 10;
    });
