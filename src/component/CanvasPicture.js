import React, { Component } from 'react'
const canvas = {
  init(studio) {
    this.studio= studio
    //设置一些属性
    this.setProperty();

    //创建微粒
    this.createParticles();
    //canvas的循环
    this.loop();
  },
  setProperty() {
    this.ctx = this.studio.getContext('2d');
    this.width = 360;
    this.height = 600;
    this.particles = [];
  },
  createParticles() {
    let dots = []
    ShapeBuilder.write('我对你', this.width / 2, this.height / 3, 360);
    dots = ShapeBuilder.getPositions(6);
    ShapeBuilder.write('何止一句中意', this.width / 2, this.height * 2 / 3, 360);
    dots = dots.concat(ShapeBuilder.getPositions(6));
    //dots已经获取到了字的坐标点 
    //每一个微粒的目标地点都是dots的坐标
    //每一个微粒都随机出生在画布的某个位置
    for (let i = 0; i < dots.length; i++) {
      this.particles.push(new Particle({
        xEnd: dots[i].x,
        yEnd: dots[i].y,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: 6,
        color: 'hsla(360, 90%, 65%, 1)'
      }));
    }
  },
  loop() {
    //每一帧清除画布，然后再渲染微粒就可以了
    requestAnimationFrame(this.loop.bind(this));
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].render(this.ctx);
    }
  }
}

const ShapeBuilder = {
  //初始化字的对齐方式等，我认为middle 与 center比较好计算一点
  init(width = 360, height = 600){
      const cache = document.createElement('canvas');
      cache.width = width
      cache.height = height
      this.width = width;
      this.height = height;
      this.ctx = cache.getContext('2d');
      this.ctx.fillStyle = 'red';
      this.ctx.textBaseline = 'middle';
      this.ctx.textAlign = 'center';
  },
  //获取位置之前必须先要写入文字。 这里的size=40是默认值
  write(words, x, y, size = 120){
      //清除之前写的字。
      // this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.font = `bold 60px Arial`;
      this.ctx.fillText(words, x, y);
      //记录当前文字的位置，方便计算获取像素的区域
      this.x = x;
      this.y = y;
      this.size = size;
      this.length = words.length;
  },
  getPositions(){
      //因为imgData数据非常的大，所以尽可能的缩小获取数据的范围。
      const xStart = this.x - (this.length / 2) * this.size, 
          xEnd = this.x + (this.length / 2) * this.size,
          yStart = this.y - this.size / 2, 
          yEnd = this.y + this.size / 2, 
          
          //getImageData(起点x, 起点y, 宽度, 高度);
          data = this.ctx.getImageData(xStart, yStart, this.size * this.length, this.size).data;
          
      //间隔 （下面有介绍）
      const gap = 4;
      let positions = [], x = xStart, y = yStart;
        
      for(var i = 0;i < data.length; i += 4 * gap){
          if(data[i+3] > 0){
              positions.push({x, y});	
          }
          
          x += gap;
          
          if(x >= xEnd){
              x = xStart;
              y += gap;
              i += (gap - 1) * 4 * (xEnd - xStart);
          }
      }
      return positions;
  }
}




class CanvasPicture extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      const myCanvas = document.getElementById('myCanvas')
      const winH = document.documentElement.clientHeight
      const winW = document.documentElement.clientWidth
      myCanvas.width = winW
      myCanvas.height = winH
      ShapeBuilder.init();
      canvas.init(myCanvas)
    })
  }

  render() {
    return (
      <div id='myCanvasContainer' >
          <canvas id='myCanvas' ></canvas>
      </div>
    )
  }
}


class Particle {
  constructor({x, y, size = 2, color, xEnd, yEnd, e = 60} = {}){
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color ||  `hsla(${Math.random() * 360}, 90%, 65%, 1)`;
      this.xEnd = xEnd;
      this.yEnd = yEnd;
      
      //经过e帧之后到达目标地点
      this.e = e;
      //计算每一帧走过的距离
      this.dx = (xEnd - x) / e;
      this.dy = (yEnd - y) / e;
  }
  go(){
      //到目的后保持不动 （其实这里也可以搞点事情的）
      if(--this.e <= 0) {
          this.x = this.xEnd;
          this.y = this.yEnd;
          return ;
      }
      this.x += this.dx;
      this.y += this.dy;
  }
  render(ctx){
      this.go();
      //下面是画出心型的贝塞尔曲线
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
      ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, 
                      this.y + 0.6 * this.size, this.x + 0.5 * 
                      this.size, this.y + 0.9 * this.size);
      ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * 
                      this.size, this.x + 0.9 * this.size, this.y, 
                      this.x + 0.5 * this.size,
                      this.y + 0.3 * this.size);
      ctx.closePath();
      ctx.fill();
      return true;
  }
}

export default CanvasPicture
