// from data.js
var ufoData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Use d3 to update each cell's text with ufoReport values (date/time, city, state, country, shape, duration, comments)
data.forEach(function(ufoReport) {
  // console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value in ufoReport
    var cell = row.append("td");
    cell.text(value);

  });
});

function handleClick() {

// create search function
// get date from search filter location

  var searchDate = d3.select("#datetime").property("value");
  var searchDateData = ufoData;
  
  console.log(searchDateData);
  console.log(searchDate);

  tbody.html("");

  // filter table data to match search date value
  if (searchDate) {
    searchDateData = searchDateData.filter(row => row.datetime === searchDate);

    data.forEach(function(searchDateData) {
      // console.log(searchDateData);
      var row = tbody.append("tr");
      Object.entries(searchDateData).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value in search date
        var cell = row.append("td");
        cell.text(value);
        
  

      });
    });
  }


  
// load table with new "searched" data
//  ufoReport(searchDateData);
  console.log(searchDateData);
}


// event for search click
d3.selectAll("#filter-btn").on("click", handleClick);

// load table with original data (all dates)
// loadTable(ufoData);
