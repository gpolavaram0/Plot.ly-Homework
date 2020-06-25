 // javascript

//  d3.json("samples.json", function(data) {
//     console.log(data.samples["0"].otu_ids.splice(0,10));
// });
// #################################################################

let dataset = [];
d3.json("samples.json", function(data) {
    
    console.log(data);
    dataset=data.samples["0"].otu_ids.splice(0,10).sort(function(a, b){return b-a});
    console.log(data.samples["0"].sample_values);
    var sample_val = data.samples["0"].sample_values;
    console.log(data.samples["0"].otu_ids);
    var ids = data.samples["0"].otu_ids;

var svgWidth = 500, svgHeight = 500, barPadding = 20;
var barWidth = (svgWidth / dataset.length);

console.log("21");
console.log(data.samples["0"]);
console.log("23");

var axisScaleX = d3.scaleLinear()
.domain([0, 1600])
.range([0, 400]);

var axisScaleY = d3.scaleBand()
.domain(dataset)
.range([0, svgHeight-18]);

var x_axis = d3.axisBottom()
    .scale(axisScaleX);

var y_axis = d3.axisLeft()
    .scale(axisScaleY);

var svg = d3.select('#barChart')
     .attr("width", svgWidth)
     .attr("height", svgHeight);


     svg.append("g")
     .call(x_axis)
     .attr("transform", "translate(50,482)");

     svg.append("g")
     .call(y_axis)
     .attr("transform", "translate(50,0)");


var barChart = svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("y", function(d) {
          return 0; 
     })
     .attr("height", function(d) { 
         return (barWidth-barPadding); 
         
     })
     .attr("width", function(d) { 
        return d/10; 
        
    })
     .attr("transform", function (d, i) {
         var translate = [50, barWidth * i]; 
         return "translate("+ translate +")";
     })
     
     ;
 
     var width = 400,
     height = 100;

//  var data = [10, 15, 20, 25, 30];
 
 // Append SVG 
 var svg = d3.select("body")
             .append("svg")
             .attr("width", width)
             .attr("height", height);

 // Create scale
 var scale = d3.scaleLinear()
               .domain([d3.min(dataset), d3.max(dataset)])
               .range([0, svgWidth]);

 // Add scales to axis
 var x_axis = d3.axisBottom()
                .scale(scale);
                

 //_________________________________________________________________________


// var svgBubble = d3.select('#bubbleChart')
//      .attr("width", svgWidth)
//      .attr("height", svgHeight);


//      svgBubble
//      .append("circle")
//        .attr("class", "bubbles")
//        .attr("cx", 100  )
//        .attr("cy", 100 )
//        .attr("r", 10 )
//        .style("fill", "red");

//      svgBubble.append("g")
//      .call(x_axis)
//      .attr("transform", "translate(50,482)");

//      svgBubble.append("g")
//      .call(y_axis)
//      .attr("transform", "translate(50,0)");

var svgBubble = d3.select('#bubbleChart')
     .attr("width", svgWidth)
     .attr("height", svgHeight);


     svgBubble
     .append('g')
     .selectAll("dot")
     .data(dataset)
     .enter()
     .append("circle")
       .attr("class", "bubbles")
       .attr("cx", function(d, i) { 
        return d;
            })
       .attr("cy", function(d, i) { 
        return d; 
            })
       .attr("r", function(d, i) { 
        return d/10;
            })
       .style("fill", "red")
       .attr("transform", "translate(100,0)")
       .on("mouseleave", "hideTooltip" );

     svgBubble.append("g")
     .call(x_axis)
     .attr("transform", "translate(50,482)");

     svgBubble.append("g")
     .call(y_axis)
     .attr("transform", "translate(50,0)");



    var metadata = data.metadata["0"]
    var legendVar = ["id: " + metadata.id ,"age: " + metadata.age, "bbtype: " + metadata.bbtype , "ethnicity: " + metadata.ethnicity, "gender: " + metadata.gender, "location: " + metadata.location,    
  "ethnicity: " + metadata.ethnicity, "wfreq: " + metadata.wfreq]

     var svgLegend = d3.select('#legend')
     .attr("width", 150)
     .attr("height", 170);


     svgLegend.selectAll("mylabels")
  .data(legendVar)
  .enter()
  .append("text")
    .attr("x", 0)
    .attr("y", function(d, i) { 
        return i*20;}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", "blue")
    .text( function(d) { 
        return d;});
 //_________________________________________________________________________
});



