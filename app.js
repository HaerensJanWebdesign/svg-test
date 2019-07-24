// Gets the DOM-element         
//const drawBoard = document.getElementsByClassName('drawBoard')[0];    (1)
//returns array
const drawingBoard = d3.select('.drawBoard');

//console.log(drawBoard);
//console.log(drawingBoard);

//add Data array                                                        (4)
let randomData = [[0,6],[1,3],[2,1],[3,1],[4,1],[5,-4],[6,0],[7,-5],[8,-9],[9,-13]];
let convertedArray = [];
for (i = 0 ; randomData.length > i ; i++){
        convertedArray.push(randomData[i][1]);
};
console.log(convertedArray)

//add an svg element                                                    (2)
const svg = drawingBoard.append('svg')
                        .attr('width', '800' )
                        .attr('height', '600');

// draw some elements                                                   (3)

svg.append('line')
.attr('x1', 20)
.attr('x2', 20)
.attr('y1', 20)
.attr('y2', 580)
.attr('stroke', 'black');

svg.append('line')
        .attr('x1', 20)
        .attr('x2', 780)
        .attr('y1', 580)
        .attr('y2', 580)
        .attr('stroke', 'black');

svg.append('line')
        .attr('x1', 20)
        .attr('x2', 780)
        .attr('y1', 290)
        .attr('y2', 290)
        .attr('stroke', 'black');

svg.append('line')
        .attr('x1', 780)
        .attr('x2', 780)
        .attr('y1', 20)
        .attr('y2', 580)
        .attr('stroke', 'black');

svg.append('line')
        .attr('x1', 20)
        .attr('x2', 780)
        .attr('y1', 20)
        .attr('y2', 20)
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

for (i = 0; i < convertedArray.length; i++){
svg.append('rect');
svg.append('text');
}

//select all rectangles                                                 (6)
const dataVisualization = d3.selectAll('rect');
const dataNumbers = d3.selectAll('text');

// give a position and size to each rectangle                           (7)
dataVisualization.data(convertedArray)
        .attr('width', 63)
        .attr('fill','black')
        .attr('stroke', 'red')
        .attr('y', (d,i) => {
                if (d >= 0){
            return 290 - (d*10);
                } else {
                        return 290
                }
    })
    .attr('x', (d, i) =>{
        return 40 + (i * 73);
    })
    .attr('height', (d,i) => {
            return Math.abs(d * 10);
    });

dataNumbers.data(convertedArray)
        .text((d,i) => {
                return convertedArray[i];
        })
        .attr('text-anchor', 'middle')
        .attr('width', 63)
        .attr('fill','black')
        .attr('stroke', 'red')
        .attr('y', (d,i) => {
                if (d >= 0){
            return 290 - (d*10);
                } else {
                        return 290
                }
    })
    .attr('x', (d, i) =>{
        return 71 + (i * 73);
    })
    .attr('height', (d,i) => {
            return Math.abs(d * 10);
    });