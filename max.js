const config = {
    count: 20,
    separation: 56,
    width: 400,
    speed: 0.0015,
    warity: 0.2
};


let lines = [];
let time = 0;

const gaussianCurve = x => Math.exp(-(Math.pow(x / 30, 2) / 2)) * 100;

function setup() {
    createCanvas(400, 550);
    background(0);

    for (let i = 0; i < config.count; i++) {
        lines.push(new DivisionLine(i * config.separation));
    }
}

let timeStamp = Date.now();
function draw() {
    background(0);
    const dt = Date.now() - timeStamp;
    //center it
    translate(
      width / 2 - config.width / 2,
      height / 1.8 - (config.count * config.separation) / 2
    );

    for (const line of lines) {
        line.draw();
    }

    time += config.speed * dt * 0.057;
    timeStamp = Date.now();
}

class DivisionLine {
    baseline;
    width = config.width;
    sampling = 3;
    timeOffset = 0;
    patternOffset = random(300);

    constructor(baseline) {
        this.baseline = baseline;
    }

    draw() {
        stroke(25);
        strokeWeight(2);
        fill(0);

        let noiseOffset = this.patternOffset;
        const steps = this.width / this.sampling;

        beginShape();
        for (let i = 0; i < steps; i++) {
            const noiseValue = noise(noiseOffset, time);
            const gaussValue = gaussianCurve(i - (steps / 2)) + 10;

            const value = abs(map(noiseValue, 0, 1, -gaussValue, gaussValue));

            vertex(this.sampling * i, this.baseline - value);
            noiseOffset += config.warity;
        }
        endShape();
    };
}