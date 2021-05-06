function Grid (_grid){
    
    this.forbidden = [];

    let gridLength = _grid[0];
    let gridHeight = _grid[1];

    if (gridHeight > 50 || gridLength > 50) {
        throw new Error("Grid size must be smaller than 50x50");
    }
    else if (gridHeight < 0 || gridLength < 0) {
        throw new Error("Grid size must be 1x1 or greater");
    }
    else {
        this.length = gridLength;
        this.height = gridHeight;
    }

    this.isForbidden = (position) => {
        return findIndexOf(this.forbidden, position) > -1;
    }

    this.addForbidden = (position) => {
        this.forbidden.push(position);
    }
}

function findIndexOf(forbidden, position) {
    for (var i = 0; i < forbidden.length; i++) {
        if (forbidden[i].x == position.x && forbidden[i].y == position.y && forbidden[i].orientation == position.orientation) {
            return i;
        }
    }
    return -1;
}

module.exports = Grid;