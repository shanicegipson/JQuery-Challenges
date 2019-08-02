
// Feel free to add more data here
const petOne = {name: 'Charlie', type: 'dog', age: 6};
const petTwo = {name: 'Thorin', type: 'rabbit', age: 4};
const petThree = {name: 'Cedar', type: 'dog', age: 7};
const petFour = {name: 'Juniper', type: 'cat', age: 3};

const pets = [petOne, petTwo, petThree, petFour];

$(readyNow); // Shorthand for $(document).ready(readyNow);

function readyNow(){
  appendDom();
}

function appendDom(){
  let header = $('<h1>Challenge 170</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);

  // YOUR CODE HERE
  // Remember, small steps!

  // Display each of the pets on the DOM.

  // Add an input field that allows users to add new pets from the index page.
  
  // Add a button that clears out the list of pets.
}
