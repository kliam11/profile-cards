window.onload = function (){ 
    for(card of document.getElementsByClassName('profile-card')){ 
        if(card.dataset.user!==null && Object.values(card.classList).includes('github')) { 
            try { getGithub(card); } 
            catch {} 
        } 
    }
} 

function getGithub(card){ 
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.github.com/users/'+card.dataset.user, true);
    xhttp.setRequestHeader('Accept', 'application/json'); 
    xhttp.send();
    xhttp.onreadystatechange = (function(xhttp) { 
        return function(){ 
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
                createGithubCard(card, JSON.parse(xhttp.responseText)); 
            } else {}
        }
    })(xhttp); 
}

function createGithubCard(card, user){ 
    let cardData = '<a href=https://github.com/'+user.login+'>'; 
    cardData += '<img src='+user.avatar_url+'>'; 
    cardData += '<div id="info-div"><h4>GitHub</h4>'; 
    cardData += '<h5>'+user.login+' ('+user.name+')</h5>'; 
    cardData += '<h6>'+user.bio+'</h6>'; 
    cardData += '<ul><li>Updated: '+ new Date(user.updated_at).toString().slice(4,15)+'</li><li>Repos: '+user.public_repos+'</li></ul></div>'; 
    cardData += '</div></a>'; 
    card.innerHTML = cardData; 
}
