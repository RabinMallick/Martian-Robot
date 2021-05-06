const Grid = require("./grid");
const Robot = require("./robot");

const instructions = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";

const mars = new Mars();
mars.operate(instructions);

function Mars() {

    let result = ``;

    this.operate = function (instructions) {
        const _instructions = instructions.split('\n');
        const _grid = _instructions[0].split(' ');

        const grid = new Grid(_grid);

        for (i = 1; i < _instructions.length; i = i + 2) {
            const _direction = _instructions[i + 1].split('');
            const _position = _instructions[i].split(' ');
            let robot = new Robot(_position);

            for (let j = 0; j < _direction.length; j++) {

                if (grid.isForbidden(robot.position)) {
                    j++; // Ignores current instruction
                }

                if (robot.position.lost == true) {
                    // console.log("OFF ",position)
                    break;
                }

                robot.position = robot.movement(robot.position, _direction[j], grid);
            }
            result += `${robot.position.x} ${robot.position.y} ${robot.position.orientation}${robot.position.lost?' LOST\n':'\n'}`
        }
        console.log(result);
        return result;
    }
}

module.exports = Mars;
