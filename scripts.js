// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    const takeoffButton = this.document.getElementById("takeoff");
    const status = this.document.getElementById("flightStatus");
    const shuttleBackground = this.document.getElementById("shuttleBackground");
    const shuttleHeight = this.document.getElementById("spaceShuttleHeight");

    const landButton = this.document.getElementById("landing");

    const abortButton = this.document.getElementById("missionAbort");

    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");
    const left = this.document.getElementById("left");
    const right = this.document.getElementById("right");

    const rocket = this.document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '100px';




    takeoffButton.addEventListener("click", function(event) {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
  if (answer) {
      status.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      rocket.style.bottom = (parseInt(rocket.style.bottom) + 5) + 'px';
      shuttleHeight.innerHTML = "10000";
  };
    });

    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        rocket.style.bottom = (parseInt(rocket.style.bottom) - 5) + 'px';
        shuttleHeight.innerHTML = "0";
    });

    abortButton.addEventListener("click", function(event) {
        let answer = window.confirm("Confirm that you want to abort the mission.")
    if (answer) {
        status.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        };
    });

    up.addEventListener("click", function(event) {
        rocket.style.bottom = (parseInt(rocket.style.bottom) + 5) + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
    });

    down.addEventListener("click", function(event) {
       
        if (shuttleHeight.innerHTML >= 10000) {  
            rocket.style.bottom = (parseInt(rocket.style.bottom) - 5) + 'px';
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
        } else if (shuttleHeight.innerHTML > 0) {
            rocket.style.bottom = (parseInt(rocket.style.bottom) - 5) + 'px';
            shuttleHeight.innerHTML = 0;
        }
    });

    left.addEventListener("click", function(event) {
        rocket.style.left = (parseInt(rocket.style.left) - 5) + 'px';
    });

    right.addEventListener("click", function(event) {
        rocket.style.left = (parseInt(rocket.style.left) + 5) + 'px';
    });


});