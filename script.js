

function obj(title,rules,rules2, date, time, venue, cost, prize) {
        this.title = title;
        this.rules = rules;
        this.rules
        this.date = date;
        this.time = time;
        this.venue = venue;
        this.cost = cost;
        this.prize = prize;
    }

var arr=[];
arr[0]=new obj("BEG BORROW STEAL","A team will comprise of 2 players.All the teams will be provided with a list of items.Team members will have to complete the task within a time limit of 1 hour.Team can either beg, borrow or steal the items enlisted.Teams will be judged on first come first serve basis and also on  the number of items and the relevance of the items collected.","8th","2PM",'202','80','!.800,2.400');
arr[1]=new obj("CODEATHON","This is an Individual Event. Any Programming Language can be used. This Event consists of two rounds.(Round 1):Preliminary Round where Easy and Intermediate type of problem statements would be given , that should be solved within given time limit. - 50% of total participants on the leaderboard after Round 1 would be entering Round 2 for the Final Phase of CodeAthon. - In case of tie breakers , total execution time will be considered and promotion to Round 2 will be declared. - This round will last for 25 mins.(Round 2) In the Final Round of CodeAthon , Intermediate and Hard type of problem statements would be given , that should be solved within given time limit. - Top 2 on the leaderboard would be declared as winners for CodeAthon. - In case of tie breakers , same total execution time will be considered and winners would be declared. - This round will last for 25 mins.","8th","2PM",'CN LAB','50','1.500,2.200');
// arr[2]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[3]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[4]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[5]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[6]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[7]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[8]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[9]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[10]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[11]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[12]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[13]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[14]=new obj(" "," "," "," ",' ',' ',' ','');
// arr[15]=new obj(" "," "," "," ",' ',' ',' ','');

cards();

function create_node(v,k){
    var p1=document.createElement('p');
    var strong=document.createElement('strong');
    strong.innerHTML=v;
    p1.appendChild(strong);
    var text=document.createTextNode(k);
    p1.appendChild(text);
    return p1;
}

function cards(){
    for(var i=0;i<arr.length;i++){
            events(arr[i]);
    }
}

    function events(arr){
        var div=document.createElement("div");
        div.classList.add("col");
        div.classList.add("col-lg-8");
        div.classList.add("col-des")
        var h3=document.createElement("h3");
        h3.innerText=arr.title; 
        div.appendChild(h3);
        var p1=create_node('Rules: ',arr.rules);
        div.appendChild(p1);
        var p1=create_node('Date: ',arr.date);
        div.appendChild(p1);
       
        var p1=create_node('Time ',arr.time);
        div.appendChild(p1);
       
        var p1=create_node('Room ',arr.venue);
        div.appendChild(p1);
    
        var p1=create_node('Cost ',arr.cost);
        div.appendChild(p1);
        
        var p1=create_node('Prize ',arr.prize);
        div.appendChild(p1);

        var main=document.getElementById("main-event");
        main.appendChild(div);
    }
