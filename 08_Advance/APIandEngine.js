// API is talking lang b/w two systems (Backend and Frontend) (One system might be in Java and another is in JavaScript)

/*=>XMLHttpRequest (XHR): objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
/*The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states: 

=>Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML
*/

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

//AJAX request
const xhr=new XMLHttpRequest()//XMLHttpRequest is an object we have to make it function to use
xhr.open('GET', 'https://api.github.com/users/hiteshchoudhary')

// onreadystatechange continously check the progress of state in which client is in. This function also returns the response(API data)
//As this response was in string form but for using it we have to convert it to object
xhr.onreadystatechange= function(){
    const data= JSON.parse(this.responseText)
    console.log(data);
    console.log(xhr.readyState)
    if (this.readyState===4) {
        console.log("Done");
    }
}
xhr.send()// Request called