console.log('JS is working')

$(document).ready( readyNow)

function readyNow() {
    getTestData();
    $('#addPerson').on('click', addPerson)
}; // readyNow

function addPerson() {
    $.ajax({
        type: 'POST',
        url: '/tester',
        data: { // will become req.body
            name : 'Jayden'
        }
    }).then(function(response){
        console.log(response);
        // DOM does not reflect array on server, do another get
        getTestData();
    }).catch(function(error) {
        alert('ERROR IN POST');
    }) // end AJAX
}; // end addPerson

function getTestData() {
    console.log('in getTestData');
    // AJAX GET call /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then( function (response){
        console.log('back from the server with:', response)
        // append to DOM...
        appendToDom(response);
    }).catch( function( err ){
        alert('problem! check console');
        console.log(err);
    }) //end AJAX
}; // end getTestData

function appendToDom( listOfPeople) {

    $('#personList').empty();
    for(let person of listOfPeople) {
        // target UL, add each person to DOM
        $('#personList').append(`<li>${person}</li>`)
    }
} // end appendToDom