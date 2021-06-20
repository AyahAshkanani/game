import React from "react";
import { images } from "./Images/index";

class Images extends React.Component {
state={failed : 0,};
  characters = [];
  handleClick = (event) => {
    let character = event.target;
    if (character.getAttribute("check") === "found") {
      return;
    }

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length > 2) {
      // using switch to remove the className of "image-blank" & show the card's image and store it into the array.
      if (!this.checkName(this.characters[0], this.characters[1])) {
        this.switch(this.characters[0]);
        this.switch(this.characters[1]);
        this.characters.shift();
        this.characters.shift();
      } else {
        this.characters.shift();
        this.characters.shift();
      }
    }
    //give the same background image to all the cards
    let allPictures = document.getElementsByClassName("image-blank");
    //check if we're done and resets and shuffle images
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    }
  };
//checks if the two cards are a match or not depending on their names
// check value to every div so that I can know whether it has been flipped, has a pair, or not been flipped. 
  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    // If the same imaged is clicked again then it would turn around again.
    return false;
  };
  switch = (target) => {
    // if I click on another card, it will open & check if the cards match, they remaining facing up if they are by setting the "check" value to "found",if not they should both face down again and be removed from the array.
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };
  render() {
    return (
      <div className="images">
      {/* randomize the position of all the cards every time the game starts over using sort and math */}
        {images
          .sort(() => Math.random() - 0.5)
          .map((element) => {
            return (
              <div
              // image-blank is backside of the card. 
                className="image image-blank"
                name={element.name}
                style={{ background: `url(${element.pic})` }}
                check="false"
                onClick={this.handleClick}
              />
            );
          })}
      </div>
    );
  }
}
export default Images;