//Summoner ID for Shajae is 52371378
//Summoner ID for Lebanese Night is 83469669.
var player = "Shajae";
window.onload=getData();

function getData(){
    if(player == "Shajae"){
$.ajax({
        url:"https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/52371378?api_key=bb84ac28-9890-40ff-9bd1-9331359bf653",
        crossDomain:true,
        type: 'GET',
        dataType: 'json',
        data:{},
        success: function(data){
             console.log(data[52371378]);
    var rank=data[52371378][0].tier //gets rank
    var hrank = document.getElementById("rank");
    hrank.innerHTML=(rank);
    for(var i=0; i<198; i++){
       // console.log(data[52371378][0].entries[i].playerOrTeamName)
        if((data[52371378][0].entries[i].playerOrTeamName)=="Shajae"){
            div=data[52371378][0].entries[i].division; //gets current divison
            lp=data[52371378][0].entries[i].leaguePoints; //gets current LP
           console.log(div);
            console.log(lp);
            var hdiv=document.getElementById("div");
            hdiv.innerHTML=(div);
            var hlp=document.getElementById("lp");
            hlp.innerHTML=(lp+" LP");
            if((data[52371378][0].entries[i].miniSeries)!=undefined){
                console.log(data[52371378][0].entries[i].miniSeries.progress);
                console.log(data[52371378][0].entries[i].miniSeries);
                var hseries=document.getElementById("series");
                var progress = data[52371378][0].entries[i].miniSeries.progress;
                hseries.innerHTML=(progress);
            }
            
            break;
    }
    }
            
}
});
    } else if(player == "Lebanese Night"){
        $.ajax({
        url:"https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/83469669?api_key=bb84ac28-9890-40ff-9bd1-9331359bf653",
        crossDomain:true,
        type: 'GET',
        dataType: 'json',
        data:{},
        success: function(data){
             console.log(data[83469669]);
    var rank=data[83469669][0].tier //gets rank
    var hrank = document.getElementById("rank");
    hrank.innerHTML=(rank);
    for(var i=0; i<198; i++){
       // console.log(data[52371378][0].entries[i].playerOrTeamName)
        if((data[83469669][0].entries[i].playerOrTeamName)=="Lebanese Night"){
            div=data[83469669][0].entries[i].division; //gets current divison
            lp=data[83469669][0].entries[i].leaguePoints; //gets current LP
           console.log(div);
            console.log(lp);
            var hdiv=document.getElementById("div");
            hdiv.innerHTML=(div);
            var hlp=document.getElementById("lp");
            hlp.innerHTML=(lp+" LP");
            if((data[83469669][0].entries[i].miniSeries)!=undefined){
                console.log(data[83469669][0].entries[i].miniSeries.progress);
                console.log(data[83469669][0].entries[i].miniSeries);
                var hseries=document.getElementById("series");
                var progress = data[83469669][0].entries[i].miniSeries.progress;
                hseries.innerHTML=(progress);
            }
            
            break;
    }
    }
            
}
});
        
        
    }
}

function switchPlayer(){
    var button = document.getElementById("playerswitch");
    var curPlayer = document.getElementById("currentPlayer")
    if(player == "Shajae"){
        player = "Lebanese Night";
        $(curPlayer).html("Current player is Lebanese Night");
    $(button).html("Shajae");
        getData();
    } else if(player == "Lebanese Night"){
        player = "Shajae";
        $(curPlayer).html("Current player is Shajae");
        $(button).html("Lebanese Night");
        getData();
    }
}
//5 mins in miliseconds is 300000, 15 mins=900000
var refreshTimer = setInterval(getData, 900000);

    