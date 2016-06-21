var $theH2;
var searchTwitter;
var nouns = [];
var adjvs = [];
var verbs = [];
var wordsandpos = [];
var randomhai;
var tweetWords;
var tweetPOS;
var currentitem;
var theTweet;

function saveData(obj){
	$.ajax({
		url: '/save',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(obj),
		error: function(resp){
			console.log("Oh no...");
			console.log(resp);
		},
		success: function(resp){
			console.log('WooHoo!');
			console.log(resp);
			//var htmlString = '<li>' + obj.user + ' : ' + obj.word + '</li>';
			//$('ol').append(htmlString);
		}
	});

	/*setTimeout(function () {
		window.location.reload();
	}, 300000);*/
	
}

function makeaHaiku(){
	finaltext = randomhai;
	for (var i = 0; i < nouns.length; i++){
		var newnoun = nouns[i];
		var noun = 'noun' + [i];
		finaltext = finaltext.replace(noun, newnoun);
	}
	for (var g = 0; g < verbs.length; g++){
		var newverb = verbs[g];
		var verb = 'verb' + [g];
		finaltext = finaltext.replace(verb, newverb);
	}
	for (var h = 0; h < adjvs.length; h++){
		var newadjv = adjvs[h];
		var adjv = 'adjv' + [h];
		finaltext = finaltext.replace(adjv, newadjv);
	}

	for (var n = 0; n < lastreplace.length; n++){
		var curToBeRepla = lastreplace[n];
		finaltext = finaltext.replace(curToBeRepla, '');
	}
	console.log(finaltext);

	var data = {
		body: finaltext
	};

	saveData(data);
}

function gettwipos(){
	tweetPOS = RiTa.getPosTags(theTweet); //analize each sentence and indicate the part of speech of each word
	tweetWords = RiTa.tokenize(theTweet); //separate the sentence into words
	for (var y = 0; y < tweetWords.length; y++){
		wordsandpos.push([tweetWords[y], tweetPOS[y]]); //populate the array with arrays made of each word and its part of speech
		}
	for (var x = 0; x < wordsandpos.length; x++){
		if (wordsandpos[x][1] == "nn" || wordsandpos[x][1] == "nns" || wordsandpos[x][1] == "nnp") {
			currentitem = wordsandpos[x][0];
			nouns.push(currentitem);
			}
		if (wordsandpos[x][1] == "vb" || wordsandpos[x][1] == "vbd" || wordsandpos[x][1] == "vbg" || wordsandpos[x][1] == "vbn" || wordsandpos[x][1] == "vbp" || wordsandpos[x][1] == "vbz") {
			currentitem = wordsandpos[x][0];
			verbs.push(currentitem);
			}
		if (wordsandpos[x][1] == "jj" || wordsandpos[x][1] == "jjr" || wordsandpos[x][1] == "jjs" || wordsandpos[x][1] == "rb" || wordsandpos[x][1] == "rbr" || wordsandpos[x][1] == "rbs") {
			currentitem = wordsandpos[x][0];
			adjvs.push(currentitem);
			}
		}
	nouns = _.shuffle(nouns);
	verbs = _.shuffle(verbs);
	adjvs = _.shuffle(adjvs);
	console.log(nouns);
	console.log(adjvs);
	console.log(verbs);
	makeaHaiku();
}

function cleanTweet(){

	for (var h = 0; h < replaceterms.length; h++){
		var curToBeRepla = replaceterms[h];
		theTweet = theTweet.replace(curToBeRepla, '');
	}

	console.log(theTweet);
	gettwipos();
}

function makeTwitterSearchRequest(){
	$.ajax({
		url: '/search',
		type: 'GET',
		dataType: 'JSON',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			//console.log(data);
			theTweet = data.tweet || 'Waiting...';
			//$theH2.html(theTweet);
			console.log(theTweet);

			//console.log("Will call again in: " + delay + " millis...");
			/*setTimeout(function(){
				makeTwitterSearchRequest();
			}, delay);*/
			cleanTweet();
		}
	});
}

$('document').ready(function(){
	randomhai = RumiHai[Math.floor(Math.random()*RumiHai.length)];
	console.log(randomhai);
	//$theH2 = $('#tweetText');
	makeTwitterSearchRequest();
});