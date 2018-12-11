(function() {
  //Game Objects
  var gos = [];
  var game = {
    running: true,
    cycle: 17
  };
  var ObjectTypes = {
    Pie: 1,
    Square: 2,
    Pie: 3,
    Image: 4
  };
  var canvas = null;
  var ctx = null;

  window.addEventListener("load", function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    canvas.addEventListener("mousedown", function(ev) {
      console.log(ev);
      if (gos.length > 0) {
        for (var i = 0; i < gos.length; i++) {}
      }
    });

    window.engine = {
      gos: gos,
      game: game,
      ObjectTypes: ObjectTypes,
      canvas: canvas,
      ctx: ctx
    };

    // gos.push(
    //   {
    //     x: 50,
    //     y: 50,
    //     type: ObjectTypes.Pie,
    //     color: "#938459",
    //     props: {
    //       ray: 20,
    //       xdir: 1,
    //       ydir: 1
    //     },
    //     update: function() {
    //       if (this.x + this.props.ray > canvas.width) this.props.xdir = -1;
    //       if (this.y + this.props.ray > canvas.height) this.props.ydir = -1;
    //       if (this.x - this.props.ray < 0) this.props.xdir = 1;
    //       if (this.y - this.props.ray < 0) this.props.ydir = 1;
    //       this.x += this.props.xdir * 10;
    //       this.y += 3.2 * this.props.ydir;
    //     },
    //     touch: function() {
    //       console.log("Don't touch (`^')");
    //     }
    //   },
    //   {
    //     x: 250,
    //     y: 450,
    //     type: ObjectTypes.Pie,
    //     color: "#93ff59",
    //     props: {
    //       ray: 10,
    //       xdir: 1,
    //       ydir: 1
    //     },
    //     update: function() {
    //       if (this.x + this.props.ray > canvas.width) this.props.xdir = -1;
    //       if (this.y + this.props.ray > canvas.height) this.props.ydir = -1;
    //       if (this.x - this.props.ray < 0) this.props.xdir = 1;
    //       if (this.y - this.props.ray < 0) this.props.ydir = 1;
    //       this.x += this.props.xdir * 3;
    //       this.y += 3.2 * this.props.ydir;
    //     },
    //     touch: function() {
    //       console.log("Don't touch (`^')");
    //     }
    //   }
    // );
    run();
  });

  function run() {
    setTimeout(function() {
      if (game.running) {
        update();
        draw();
        run();
      }
    }, game.cycle);
  }

  function update() {
    if (gos.length > 0) {
      for (var i = 0; i < gos.length; i++) {
        gos[i].update();
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < gos.length; i++) {
      var o = gos[i];
      switch (o.type) {
        case ObjectTypes.Pie:
          ctx.fillPie(o.x, o.y, o.props.ray, o.color);
          break;
        default:
          break;
      }
    }
  }

  CanvasRenderingContext2D.prototype.fillPie = function(
    centerx,
    centery,
    ray,
    color
  ) {
    var ctx = this;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    // ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerx, centery, ray, 0, 2 * Math.PI);
    ctx.fill();
  };

  window.addEventListener("keydown", function(ev) {
    // this.console.log(ev.keyCode);
    if (ev.keyCode === 27) {
      game.running = !game.running;
      if (game.running) run();
    }
  });
})();
