// replace these values with those generated in your TokBox Account
var apiKey 		= "46203322";
var sessionId 	= "1_MX40NjIwMzMyMn5-MTUzOTUwMjI2NDkzMn56dFhsWWFVd3djRnJBdk5nNG1pVWJUNGt-fg";
var token 		= "T1==cGFydG5lcl9pZD00NjIwMzMyMiZzaWc9NWI2YjRmZTcwZGE3N2U3MTFmMWQyOTNmMjZiNjhhYWQ0M2U4OGMyMjpzZXNzaW9uX2lkPTFfTVg0ME5qSXdNek15TW41LU1UVXpPVFV3TWpJMk5Ea3pNbjU2ZEZoc1dXRlZkM2RqUm5KQmRrNW5ORzFwVldKVU5HdC1mZyZjcmVhdGVfdGltZT0xNTM5NTAyMzYwJm5vbmNlPTAuMjI3NDM0NzAzNDk3OTc2MjMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUzOTUwNTk1NyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
// initializeSession();


// Handling all of our errors here by alerting them
function handleError(error) {
	if (error) alert(error.message);
}

function initializeSession() {
	var session = OT.initSession(apiKey, sessionId);

	// Subscribe to a newly created stream
	session.on('streamCreated', function(event) {
		session.subscribe(event.stream, 'subscriber', {insertMode: 'append', width: '100%', height: '100%'}, handleError);
	});

	// Create a publisher
	var publisher = OT.initPublisher('publisher', {insertMode: 'append', width: '100%', height: '100%'}, handleError);

	// Connect to the session
	session.connect(token, function(error) {
		if (error)
		handleError(error);
		else
		session.publish(publisher, handleError);
	});
}