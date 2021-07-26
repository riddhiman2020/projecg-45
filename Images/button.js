class Form{

    constructor() {

      this.player = createElement('h2');
    }
    hide(){
      this.player.hide();
    }
  
    display(){
      this.player.html("You");
      this.player.position(car.x,car.y);
  
    }
  }
  