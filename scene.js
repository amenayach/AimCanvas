(function() {
  window.addEventListener("load", function() {
    var eg = window.engine;
    var canvas = eg.canvas;
    
    eg.gos.push(
      {
        x: 50,
        y: 50,
        type: eg.ObjectTypes.Pie,
        color: "#938459",
        props: {
          ray: 20,
          xdir: 1,
          ydir: 1
        },
        update: function() {
          if (this.x + this.props.ray > canvas.width) this.props.xdir = -1;
          if (this.y + this.props.ray > canvas.height) this.props.ydir = -1;
          if (this.x - this.props.ray < 0) this.props.xdir = 1;
          if (this.y - this.props.ray < 0) this.props.ydir = 1;
          this.x += this.props.xdir * 10;
          this.y += 3.2 * this.props.ydir;
        },
        touch: function() {
          console.log("Don't touch (`^')");
        }
      },
      {
        x: 250,
        y: 450,
        type: eg.ObjectTypes.Pie,
        color: "#93ff59",
        props: {
          ray: 10,
          xdir: 1,
          ydir: 1
        },
        update: function() {
          if (this.x + this.props.ray > canvas.width) this.props.xdir = -1;
          if (this.y + this.props.ray > canvas.height) this.props.ydir = -1;
          if (this.x - this.props.ray < 0) this.props.xdir = 1;
          if (this.y - this.props.ray < 0) this.props.ydir = 1;
          this.x += this.props.xdir * 3;
          this.y += 3.2 * this.props.ydir;
        },
        touch: function() {
          console.log("Don't touch (`^')");
        }
      }
    );
  });//load
})();
