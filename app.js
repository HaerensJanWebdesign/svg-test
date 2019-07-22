// Gets the DOM-element         
//const drawBoard = document.getElementsByClassName('drawBoard')[0];    (1)
//returns array
const drawingBoard = d3.select('.drawBoard');

//console.log(drawBoard);
//console.log(drawingBoard);

//add Data array                                                        (4)
let randomData = [4, 15, 24, 28, 47];
let i = 20;

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

// add rectangles to create data visualisation                          (5)
const bar1 = svg.append('rect');
const bar2 = svg.append('rect');
const bar3 = svg.append('rect');
const bar4 = svg.append('rect');
const bar5 = svg.append('rect');

//select all rectangles                                                 (6)
const dataVisualization = d3.selectAll('rect');

// console.log(dataVisualization);

dataVisualization.data(randomData)
    .attr('width', 100)
    .attr('fill','black')
    .attr('y', 80)
    .attr('x', (d, i) =>{
        return i * 105;
    })
    .attr('height', 400)