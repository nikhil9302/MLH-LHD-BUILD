const Twitter = require('twitter');
const config = require('./config');
let T = new Twitter(config);

var tweet = {
    status: "#bottweet from twitterBOT"
}

T.post('statuses/update', tweet, (err, data, response)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});