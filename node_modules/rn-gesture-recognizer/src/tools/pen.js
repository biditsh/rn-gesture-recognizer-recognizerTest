export default class Pen {
  constructor(strokes) {
    this.strokes = strokes || [];
    this._offsetX = 0;
    this._offsetY = 0;
  }

  addStroke(points) {
    if (points.length > 0) {
      this.strokes.push(points);
    }
  }

  rewindStroke() {
    if (this.strokes.length < 1) return
    this.strokes.pop()
  }

  setOffset(options) {
    if (!options) return
    this._offsetX = options.X;
    this._offsetY = options.Y;
  }

  pointsToSvg(points) {
    let offsetX = this._offsetX;
    let offsetY = this._offsetY;
    if (points.length > 0) {
      var path = `M ${points[0].X},${points[0].Y}`
      points.forEach((point) => {
        path = path + ` L ${point.X},${point.Y}`
      });
      return path;
    } else {
      return ''
    }
  }

  clear = () => {
    this.strokes = []
  }

  copy() {
    return new Reaction(this.strokes.slice());
  }
}