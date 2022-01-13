const Twitter = require('twitter');
const config = require('./config.js');
let T = new Twitter(config);
//Setting up my parameters

let params = {
    q: '#Onepiece',
    count: 20,
    result_type: 'recent',
    lang: 'en'
}

T.get('search/tweets', params, (err, data, response) =>{
    if(!err){      
        for(let i = 0; i < data.statuses.length; i++){            
            let id = { id: data.statuses[i].id_str }      
            
            T.post('favorites/create', id, (err, response)=>{                     
                if(err){                    
                    console.log(err);                                                          
                }else{
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('Likes: ', `https://twitter.com/${username}/status/${tweetId}`);
                }
            });            
        }
    }    
    else{
      console.log(err);    
    }  
});