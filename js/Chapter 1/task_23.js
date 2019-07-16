var currFloor =1;
var Elevator = {

    toFloor: function(num){
        if (num>0 && num<=16){        
            this.printFloor();
            greaterNum=Math.abs(currFloor-num);
            for(var i =0;i<greaterNum;i++){
                if(currFloor<num){
                    this.oneFloorUp();
                    this.printFloor();
                } else if (currFloor>num){
                    this.oneFloorDown();
                    this.printFloor();
                } 
                
            }
        } else console.log("There aren't such stories");
    },

    oneFloorUp: function(){
        if(currFloor<16){
            currFloor+=1;
        } else console.log("Don't pierce the sky");
    },

    oneFloorDown: function(){
        if(currFloor>1){
            currFloor-=1;
        } else console.log("Don't fall to hell");
    },
    
    printFloor: function(){
        console.log("Elevator is on the floor "+currFloor);
    }
  
};

Elevator.toFloor(1);
Elevator.oneFloorDown();
// // Elevator.printFloor();
// // Elevator.oneFloorDown();
// // Elevator.printFloor();
// Elevator.toFloor(4);
