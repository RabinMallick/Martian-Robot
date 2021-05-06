function Robot(_position){
    this.position = {
        x: parseInt(_position[0]),
        y: parseInt(_position[1]),
        orientation: _position[2],
        lost: false
    }
    
    this.movement = (position, direction, grid) => {
        if (position.orientation == "N") {
            if (direction == "R") {
                position.orientation = "E";
            }
            else if (direction == "L") {
                position.orientation = "W";
            }
            else if (direction == "F") {
                if (position.y >= grid.height) {
                    grid.addForbidden(position);
                    position.lost = true;
                }
                else
                    position.y++;
            }
        }
        else if (position.orientation == "E") {
            if (direction == "R") {
                position.orientation = "S";
            }
            else if (direction == "L") {
                position.orientation = "N";
            }
            else if (direction == "F") {
                if (position.x >= grid.length) {
                    grid.addForbidden(position);
                    position.lost = true;
                }
                else
                    position.x++;
            }
        }
        else if (position.orientation == "S") {
            if (direction == "R") {
                position.orientation = "W";
            }
            else if (direction == "L") {
                position.orientation = "E";
            }
            else if (direction == "F") {
                if (position.y < 0) {
                    grid.addForbidden(position);
                    position.lost = true;
                }
                else
                    position.y--;
            }
        }
        else if (position.orientation == "W") {
            if (direction == "R") {
                position.orientation = "N";
            }
            else if (direction == "L") {
                position.orientation = "S";
            }
            else if (direction == "F") {
                if (position.x < 0) {
                    grid.addForbidden(position);
                    position.lost = true;
                }
                else
                    position.x--;
            }
        }
    
        return position;
    }
}

module.exports = Robot;