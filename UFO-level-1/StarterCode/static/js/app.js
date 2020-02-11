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

    // Append a cell to the row for each value in ufoReport
    var cell = row.append("td");
    cell.text(value);

  });
});

function handleClick() {

// create search function
// get date from search filter location

  var searchDate = d3.select("#datetime");
  var searchDateValue = searchDate.property("value");
  
  console.log(searchDateValue);
  console.log(searchDate);

  // empty table
  tbody.html("");

  // filter table data to match search date value
  if (searchDate) {

    var filteredData = ufoData.filter(bydate => bydate.datetime === searchDateValue);

    filteredData.forEach(function(filteredSearch) {
      console.log(filteredSearch);
      var row = tbody.append("tr");

      // use d3 to update page w/ searched values
      Object.entries(filteredSearch).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value in ufoReport
        var cell = row.append("td");
        cell.text(value);
        
      });
    });
  }

  console.log(filteredData);
}

// event for search click
d3.selectAll("#filter-btn").on("click", handleClick);


