"use strict";

/**
 * @module exports the Player class
 */
module.exports = exports = Monster;

/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Monster(position) {
  this.state = "alive";
  this.frame = 0;
  this.timer = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 14;
  this.height = 14;
  this.spritesheet  = new Image();
  //step
  this.spritesheet.src = encodeURI('assets/horns/horns up.png');
  }
  /**
   * @function updates the player object
   * {DOMHighResTimeStamp} time the elapsed time since the last frame
   */
  Monster.prototype.update = function(elapsedTime) {
    switch(self.state){
      case "alive":
      this.timer++;
      if(this.timer > 1000/160){
        this.frame = (this.frame + 1)%(this.monstersheet.width/this.height);
        this.timer = 0;
          }
          this.y -= 1;
          break;
    }
  }


  /**
   * @function renders the player into the provided context
   * {DOMHighResTimeStamp} time the elapsed time since the last frame
   * {CanvasRenderingContext2D} ctx the context to render into
   */
  Monster.prototype.render = function(time, ctx) {
    ctx.drawImage(
      // image
      this.spritesheet,
      // source rectangle
      0, 0, this.width, this.height,
      // destination rectangle
      this.x, this.y, 2 * this.width, 2 * this.height
    );
  }
