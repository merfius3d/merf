(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 360,
	height: 329,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.image15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.image17 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-180.5,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.5,-165,361,330);


(lib.text32OverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#590000").s().p("AgEAcIAAgYIgVgfIANAAIAMAXIANgXIANAAIgVAfIAAAYg");
	this.shape.setTransform(27.9,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#590000").s().p("AAQAcIgFgNIgVAAIgFANIgMAAIAWg3IAKAAIAXA3gAgHAGIAOAAIgHgUg");
	this.shape_1.setTransform(22.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#590000").s().p("AgTAcIAAg3IAMAAIAAAtIAbAAIAAAKg");
	this.shape_2.setTransform(17.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#590000").s().p("AgUAcIAAg3IASAAQAJAAADABQAFABADAEQADAFAAAHQAAAFgBADQgCACgDACIgGADIgKABIgIAAIAAAVgAgJgBIAGAAIAIgBIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgDgCgCQgCgCgDgBIgGAAIgGAAg");
	this.shape_3.setTransform(11.9,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#590000").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_4.setTransform(6.6,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#590000").s().p("AALAcIgIgMIgEgJIgEgCIgFgBIgDAAIAAAYIgLAAIAAg3IAYAAQAHAAAEACQAEABADAEQACAEAAAFQAAAGgDAFQgEACgIABIAHAFIAGAJIAHALgAgNgDIAJAAIAIAAIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgCAAIgHAAIgJAAg");
	this.shape_5.setTransform(1.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4.2,47.5,22.3);


(lib.text30Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D02325").s().p("AgEAcIAAgYIgVgfIANAAIAMAXIANgXIANAAIgVAfIAAAYg");
	this.shape.setTransform(27.9,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D02325").s().p("AAQAcIgFgNIgVAAIgFANIgMAAIAWg3IAKAAIAXA3gAgHAGIAOAAIgHgUg");
	this.shape_1.setTransform(22.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D02325").s().p("AgTAcIAAg3IAMAAIAAAtIAbAAIAAAKg");
	this.shape_2.setTransform(17.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D02325").s().p("AgUAcIAAg3IASAAQAJAAADABQAFABADAEQADAFAAAHQAAAFgBADQgCACgDACIgGADIgKABIgIAAIAAAVgAgJgBIAGAAIAIgBIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgDgCgCQgCgCgDgBIgGAAIgGAAg");
	this.shape_3.setTransform(11.9,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D02325").s().p("AgUAcIAAg3IAoAAIAAAKIgdAAIAAAMIAbAAIAAAIIgbAAIAAAQIAeAAIAAAJg");
	this.shape_4.setTransform(6.6,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D02325").s().p("AALAcIgIgMIgEgJIgEgCIgFgBIgDAAIAAAYIgLAAIAAg3IAYAAQAHAAAEACQAEABADAEQACAEAAAFQAAAGgDAFQgEACgIABIAHAFIAGAJIAHALgAgNgDIAJAAIAIAAIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgCAAIgHAAIgJAAg");
	this.shape_5.setTransform(1.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4.2,47.5,22.3);


(lib.text27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EBB09").s().p("AAdA4IgUAIQgIACgFABQgdAAgPgQQgOgQAAgfQAAgbAVgWQAXgUAcAAQALAAAQAGQASAIAAALQAAAEgDADIgCAMIgBARQAAAWAEAJIAFANIAFAMQAAAGgFAEQgFAFgGAAQgGAAgMgLgAgQgXQgNANAAAPQABAQAFAJQAHAHALABQAFAAAIgDQAGgCAGgFQgEgcABgNIAAgJIACgMIgFgCIgDgBQgPAAgMAOg");
	this.shape.setTransform(102.4,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EBB09").s().p("AAhBcQgIAEgJACQgJACgHAAQgcAAgSgSQgSgRAAgcQAAghASgSQATgUAcAAQAJAAAHACQAHACAGADQABgqACgPQACgPAOAAQAHAAAFAFQAEAFAAAGQAAATgCAjQgDAhAAASQAAArADAQIAAADQAAAHgFAEQgFAFgGAAQgJgBgFgHgAgYAFQgJAKAAAWQAAANAKAJQAKAJANAAQAHAAAFgCQADgCAIgGIAEgDIAAgtQgEgIgGgCQgHgEgJAAQgQAAgJAJg");
	this.shape_1.setTransform(77,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EBB09").s().p("AAYA4IgDgZQgCgOAAgLIABgJIAAgMIABgDIAAgHQAAgKgGAAQgKAAgIAOQgKANgGATIgBALIAAALIgBAKIgBALQAAAHgFAFQgEAEgIABQgHgBgFgEQgEgEgBgIIgBgKIAAgLIABghIACgfIAAgLIgBgMQAAgGAGgFQAFgEAGgBQAQAAACAUIAAABQASgRARAAQAYgBAIAUQAGANAAAZIAAAJIAAAGQAAAJADAQQACAPAAAJQAAAHgFAEQgEAEgIABQgPgBgCgOg");
	this.shape_2.setTransform(63.4,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EBB09").s().p("AgpA0QgUgPAAgcQAAgdARgWQASgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape_3.setTransform(49.5,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9EBB09").s().p("AghA/QgTgHABgNQAAgMAOAAQAFAAALADQAKAEAHAAQAWAAABgKQAAgGgSgIQgXgLgHgDQgSgMAAgRQAAgZAagIQAQgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgNAAgCgKIgKgBQgcAAABAIQAAAFAPAIQAYALAJAGQARALAAARQAAAVgTAKQgPAJgWAAQgQAAgNgFg");
	this.shape_4.setTransform(36.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.6,-3.4,104.8,73.7);


(lib.text26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D02325").s().p("AgkBRQgRgLgLgWQgLgXAAgZQAAgZALgWQALgWARgMQASgLASAAQATAAASALQARAMALAWQALAWAAAZQAAAZgLAXQgLAWgSALQgRAMgTAAQgSAAgSgMgAgchBQgOAKgJARQgJASAAAUQAAAUAJATQAJARAOAKQAOAIAOABQAPgBAOgIQAOgKAJgRQAJgTAAgUQAAgUgJgSQgJgRgOgKQgOgJgPAAQgOAAgOAJgAAPAyIgHgRQgGgQgDgEQgEgFgHAAIgFAAIAAAqIgQAAIAAhiIAQAAQAXAAAFABQAIACAGAHQAGAHAAALQAAALgGAIQgGAFgKACQAFACADAFIAJARIAKAUgAgRgFIAHAAQALAAADgBQAEgBADgEQACgDAAgFQAAgFgCgDQgDgDgEgBQgDgBgLAAIgHAAg");
	this.shape.setTransform(5.6,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.5,43.7,61.1);


(lib.text24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D02325").s().p("AgjBeQgFgFAAgGQAAgMAag4QgOgYgdg0IgGgJQgDgGAAgEQAAgHAFgFQAFgFAHAAQAIAAAFAGQARAXAVAuIAQgiQAJgTAIgNQAFgJAKAAQAGAAAGAEQAFAFAAAHQAAADgCAFIgqBVQgQAfgHAVIgHAXQgEALgMAAQgHAAgFgEg");
	this.shape.setTransform(128.2,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D02325").s().p("AAhBcQgIAEgJACQgJACgHAAQgcAAgSgSQgSgRAAgcQAAghASgSQATgUAcAAQAJAAAHACQAHACAGADQABgqACgPQACgPAOAAQAHAAAFAFQAEAFAAAGQAAATgCAjQgDAhAAASQAAArADAQIAAADQAAAHgFAEQgFAFgGAAQgJgBgFgHgAgYAFQgJAKAAAWQAAANAKAJQAKAJANAAQAHAAAFgCQADgCAIgGIAEgDIAAgtQgEgIgGgCQgHgEgJAAQgQAAgJAJg");
	this.shape_1.setTransform(113.9,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D02325").s().p("AAhBcQgIAEgJACQgJACgHAAQgcAAgSgSQgSgRAAgcQAAghASgSQATgUAcAAQAJAAAHACQAHACAGADQABgqACgPQACgPAOAAQAHAAAFAFQAEAFAAAGQAAATgCAjQgDAhAAASQAAArADAQIAAADQAAAHgFAEQgFAFgGAAQgJgBgFgHgAgYAFQgJAKAAAWQAAANAKAJQAKAJANAAQAHAAAFgCQADgCAIgGIAEgDIAAgtQgEgIgGgCQgHgEgJAAQgQAAgJAJg");
	this.shape_2.setTransform(99.2,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D02325").s().p("AAYA8QgQAGgOAAQgSAAgMgIQgNgIgDgQQgEgeAAgWQAAgQADgUQADgOAOAAQAHAAAFAEQAFAFAAAGIgCARIgCASQAAARACAKQABANACAJIAGACIAGAAQALAAAQgEIAAgVIAAgSQAAgZACgTQACgOAPAAQAHAAAFAEQAFAFAAAHIgCArIAAAWIAAAZIAAAIIABAHQAAAHgFAFQgFAEgHAAQgKAAgFgJg");
	this.shape_3.setTransform(85.4,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D02325").s().p("AgjBcQgFAFgGAAQgHAAgFgEQgEgFAAgGIABgJIAAgJIAAiJQAAgJADgGQAFgJAKAAQANAAAAAOIgBAFIAAAFIAAAvQAJgFAIgCQAJgDAFAAQAdAAASAVQAQARAAAcQAAAdgTATQgUAUgbAAQgQAAgQgGgAgNgBQgIACgKAHIAAA0QAQAHAMAAQAOAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgEAAgJAEg");
	this.shape_4.setTransform(71.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D02325").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_5.setTransform(58.3,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D02325").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQABgHAEgEQAEgFAIAAQANAAADAOQATgQAbAAQAYAAAAAhIAAAIQgCASgPAAQgQAAAAgPIAAgNQgaAFgLAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_6.setTransform(46.6,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D02325").s().p("AAdA4IgUAIQgJACgDABQgdAAgPgQQgPgQAAgfQAAgbAWgWQAVgUAcAAQAMAAAPAGQATAIAAALQAAAEgDADIgCAMIAAARQgBAWAEAJIAGANIAEAMQAAAGgEAEQgGAFgGAAQgGAAgMgLgAgQgXQgMANAAAPQgBAQAHAJQAFAHAMABQAGAAAGgDQAHgCAGgFQgDgcgBgNIABgJIABgMIgDgCIgEgBQgOAAgNAOg");
	this.shape_7.setTransform(33.5,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D02325").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgVAGIgmATQAFAGAIAEQAJADAJAAQAQAAALgIQALgFAFAAQANAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgTgOgAgPgcQgJAHgEAQIAcgMQAOgHAKgHQgIgFgOABQgJgBgIAIg");
	this.shape_8.setTransform(19.3,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D02325").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKAAQgHgBgFgEQgFgEAAgIIABgGQABgDAAgeIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_9.setTransform(5.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.4,169.2,73.7);


(lib.text23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F8500").s().p("AgpA0QgUgPAAgcQAAgdAQgWQASgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape.setTransform(89.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F8500").s().p("Ag9BNQgBgGAFgEQAEgEAHgBIAQADQAKACAIAAQAQgBAJgKQAIgLACgYQgHAHgHADQgIACgHAAQgZAAgPgPQgPgQAAgXQAAghAUgUQAVgWAiABQAMAAAHACQAJADAFAGQAPACABAQQAAAIgDAOQgFAegBAdQgBAngMATQgQAXgnAAQgvABAAgUgAgSg2QgJAMgBAUQAAAPAGAGQAGAGALAAQAIAAAKgJQAJgMABgLIAGgkIgIgDIgIgBQgTAAgMANg");
	this.shape_1.setTransform(76.1,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F8500").s().p("AAdA4IgUAIQgJACgDABQgdAAgPgQQgPgQAAgfQAAgbAWgWQAVgUAcAAQAMAAAPAGQATAIAAALQAAAEgDADIgCAMIAAARQgBAWAEAJIAGANIAEAMQAAAGgEAEQgGAFgGAAQgGAAgMgLgAgQgXQgMANAAAPQgBAQAHAJQAFAHAMABQAGAAAGgDQAHgCAGgFQgDgcgBgNIABgJIABgMIgDgCIgEgBQgOAAgNAOg");
	this.shape_2.setTransform(62.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6F8500").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgcAAAAAIQAAAFAQAIQAZALAIAGQASALAAARQAAAVgUAKQgPAJgWAAQgQAAgOgFg");
	this.shape_3.setTransform(49.5,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6F8500").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgcAAAAAIQAAAFAQAIQAZALAIAGQASALAAARQAAAVgUAKQgQAJgVAAQgQAAgOgFg");
	this.shape_4.setTransform(37.4,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F8500").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgVAGIgmATQAFAGAIAEQAJADAJAAQAQAAALgIQALgFAFAAQANAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgTgOgAgPgcQgJAHgEAQIAcgMQAOgHAKgHQgIgFgOABQgJgBgIAIg");
	this.shape_5.setTransform(24.2,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6F8500").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_6.setTransform(8,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-3.4,127,73.7);


(lib.text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE2427").s().p("AgoA0QgVgPAAgcQAAgdAQgWQATgXAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAJAAQARAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgTAAQgbAAgSgOgAgPgcQgJAHgEAQIAbgMQAPgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape.setTransform(213.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE2427").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_1.setTransform(197.4,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_2.setTransform(170.7,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE2427").s().p("AAYA8QgQAGgOAAQgSAAgMgIQgNgIgDgQQgEgeAAgWQAAgQADgUQADgOAOAAQAHAAAFAEQAFAFAAAGIgCARIgCASQAAARACAKQABANACAJIAGACIAGAAQALAAAQgEIAAgVIAAgSQAAgZACgTQACgOAPAAQAHAAAFAEQAFAFAAAHIgCArIAAAWIAAAZIAAAIIABAHQAAAHgFAFQgFAEgHAAQgKAAgFgJg");
	this.shape_3.setTransform(158.2,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE2427").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_4.setTransform(145,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE2427").s().p("AgjBcQgFAFgGAAQgGAAgGgEQgEgFAAgGIABgJIAAgJIAAiJQAAgJADgGQAGgJAJAAQANAAgBAOIAAAFIgBAFIAAAvQAKgFAIgCQAIgDAGAAQAdAAARAVQARARAAAcQAAAdgTATQgUAUgbAAQgRAAgPgGgAgNgBQgIACgLAHIAAA0QARAHAMAAQAOAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgEAAgJAEg");
	this.shape_5.setTransform(131.2,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CE2427").s().p("AAdA4IgUAIQgIACgFABQgcAAgQgQQgOgQAAgfQAAgbAVgWQAXgUAcAAQALAAAPAGQATAIAAALQAAAEgDADIgCAMIgBARQAAAWAEAJIAFANIAFAMQAAAGgFAEQgFAFgGAAQgGAAgMgLgAgQgXQgMANAAAPQAAAQAFAJQAHAHALABQAFAAAIgDQAGgCAGgFQgEgcABgNIAAgJIABgMIgDgCIgEgBQgPAAgMAOg");
	this.shape_6.setTransform(116.9,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE2427").s().p("Ag+BNQABgGAEgEQAEgEAHgBIAQADQAKACAIAAQAQgBAJgKQAJgLABgYQgGAHgIADQgIACgIAAQgYAAgPgPQgPgQAAgXQAAghAUgUQAVgWAiABQALAAAJACQAIADAFAGQAPACAAAQQAAAIgCAOQgFAegBAdQgBAngMATQgQAXgnAAQgwABAAgUgAgRg2QgLAMABAUQgBAPAGAGQAFAGALAAQAJAAAJgJQAKgMACgLIAEgkIgIgDIgIgBQgSAAgLANg");
	this.shape_7.setTransform(92.3,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CE2427").s().p("AAYA4IgDgZQgCgOAAgLIABgJIAAgMIAAgDIAAgHQABgKgGAAQgKAAgIAOQgKANgGATIgBALIgBALIAAAKIgBALQAAAHgEAFQgGAEgHABQgHgBgFgEQgFgEAAgIIgBgKIAAgLIABghIACgfIAAgLIgBgMQABgGAFgFQAEgEAHgBQARAAAAAUIAAABQATgRARAAQAYgBAIAUQAGANAAAZIAAAJIAAAGQAAAJADAQQACAPAAAJQAAAHgFAEQgFAEgHABQgPgBgCgOg");
	this.shape_8.setTransform(79.4,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE2427").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_9.setTransform(69.5,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE2427").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKAAQgHgBgFgEQgFgEAAgIIABgGQABgDAAgeIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_10.setTransform(58.7,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_11.setTransform(45.3,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_12.setTransform(22.7,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE2427").s().p("AgiA/QgSgHAAgNQAAgMAPAAQAFAAALADQAKAEAHAAQAWAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgMAAgDgKIgKgBQgbAAAAAIQAAAFAPAIQAZALAIAGQARALAAARQABAVgUAKQgQAJgUAAQgRAAgOgFg");
	this.shape_13.setTransform(10.6,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE2427").s().p("AgpA0QgUgPAAgcQAAgdAQgWQASgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape_14.setTransform(-2.6,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE2427").s().p("AgjBcQgFAFgGAAQgHAAgEgEQgFgFAAgGIAAgJIAAgJIAAiJQAAgJAFgGQAFgJAIAAQANAAABAOIgBAFIAAAFIAAAvQAJgFAIgCQAIgDAGAAQAdAAASAVQAQARAAAcQAAAdgTATQgUAUgaAAQgRAAgQgGgAgMgBQgJACgKAHIAAA0QAQAHANAAQANAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgFAAgHAEg");
	this.shape_15.setTransform(-16.8,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE2427").s().p("AgpA0QgUgPAAgcQAAgdARgWQASgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape_16.setTransform(-42.3,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE2427").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKAAQgHgBgFgEQgFgEAAgIIABgGQABgDAAgeIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_17.setTransform(-56.1,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE2427").s().p("AgKBYQgGgEAAgIIABgFIAAgFIgBgRIAAgRQAAgQgDgaIgDgtIgHAAQgbAAgQgEQgOgDAAgNQAAgGAFgFQAFgGAIABIAUACIATABIAXAAIAUAAIAcABIAbABQAIAAAFAFQAFAFAAAHQAAAHgFAFQgFAEgIAAIgdgBIgegBIADAxQADAeAAASIABANIABAMQAAAJgEAHQgFAKgJAAQgFAAgFgFg");
	this.shape_18.setTransform(-72.1,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-3.4,350.2,73.7);


(lib.text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE2427").s().p("AgLBeQgFgHAAgHQAAgGAFgEQAFgEAGgBQAFAAAGAIQAGAHAAAHQAAAGgFAEQgFAFgGgBQgFAAgHgHgAgIA1QgEgFAAgGIgBgOIAAgOIAAgxIABgzQAAgGAEgEQAFgFAEABQAHgBAFAFQAEAEAAAGIAACAQAAAGgEAFQgFAEgHAAQgFAAgEgEg");
	this.shape.setTransform(210.7,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_1.setTransform(202,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE2427").s().p("AglA1QgTgQAAgaQAAgXARgZQATgeAZAAQAMAAARAHQAVAIAAALQAAAGgEAFQgFAFgHAAQgFAAgIgGQgHgFgOAAQgIAAgLASQgLASAAALQAAANAKAHQAIAHANAAQAJAAALgGQAMgHADAAQAHAAAFAFQAEAFAAAGQAAAJgVAKQgSAIgMAAQgZAAgSgPg");
	this.shape_2.setTransform(189.5,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE2427").s().p("AgpA0QgUgPAAgcQAAgdAQgWQATgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape_3.setTransform(176.1,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE2427").s().p("AgWBmQgFgEAAgHIAAgDQADgRAAgQIAAg7IgIABIgHABQgIAAgFgEQgEgFAAgHQAAgLALgEQAGgCAQAAIABgOQAEgbALgNQAMgRAeAAQAWAAAAAQQAAAQgVAAQgPAAgGAKQgFAIgCAQIAAAEIAXgCQAXAAAAAQQAAAQgYgBIgYACIAAAeIABAhQAAAXgDANQgDANgLAAQgHAAgFgFg");
	this.shape_4.setTransform(162.8,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE2427").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQgBgHAFgEQAEgFAIAAQANAAACAOQAUgQAbAAQAYAAAAAhIgBAIQgBASgPAAQgPAAAAgPIgBgNQgaAFgMAXIAAA8QABAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_5.setTransform(150.8,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CE2427").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAFgUAGIgoATQAGAGAJAEQAHADAKAAQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgHAKgHQgJgFgNABQgJgBgIAIg");
	this.shape_6.setTransform(137.4,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE2427").s().p("AgyBhQgEgEAAgIIAAgtIAAguQAAgbgCgSIgCgYQAAgLAFgHQAFgIAJAAQAHAAAFAFQAEAEAAAHIAAABQAIgFAJgCQAGgCAIgBQAcABANAYQAKARAAAdQAAAYgQATQgQASgbAAQgJAAgLgCIgBAxQAAAIgEAEQgFAFgHAAQgIAAgFgFgAgGg5QgIAEgIAGIACAxQALAEAJgBQAMABAHgIQAGgHAAgOIgBgXQgEgOgMAAQgIgBgGAEg");
	this.shape_7.setTransform(124.1,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_8.setTransform(100.5,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE2427").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_9.setTransform(87.8,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE2427").s().p("AAYA4IgDgZQgCgOAAgLIABgJIAAgMIABgDIAAgHQgBgKgFAAQgKAAgIAOQgKANgGATIAAALIgBALIgBAKIgBALQAAAHgFAFQgEAEgIABQgHgBgFgEQgEgEgBgIIAAgKIgBgLIABghIACgfIAAgLIgBgMQAAgGAGgFQAEgEAHgBQAQAAACAUIAAABQASgRARAAQAXgBAJAUQAGANAAAZIAAAJIAAAGQAAAJADAQQACAPAAAJQAAAHgFAEQgFAEgHABQgPgBgCgOg");
	this.shape_10.setTransform(75,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE2427").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_11.setTransform(48,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE2427").s().p("AgMAaQgEgFAAgGIAEgeQACgNAMAAQAGAAAFADQAEAFAAAGIgFAdQAAAFgEAEQgEAGgFgBQgHAAgEgDg");
	this.shape_12.setTransform(35.1,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE2427").s().p("Ag5BYQgEgEAAgIQAAgGAFgFQAFgFAIAAQAJAAAOgCIAAg3QAAggACgeIgaABQgIAAgEgEQgFgGAAgHQAAgGAEgFQAFgEAGgBIAkgBQAVAAAlAGQAOABAAAPQAAAIgFAEQgFAEgGAAIgggDQgBAWAAAkIgBA3IAigBQAHAAAFAFQAEAEAAAIQAAAHgEAEQgFAFgIAAIgVABIgVAAQgGAAgQACIgZACQgIAAgFgFg");
	this.shape_13.setTransform(25.5,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_14.setTransform(2,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE2427").s().p("AAdA4IgUAIQgJACgEABQgdAAgPgQQgOgQAAgfQAAgbAWgWQAVgUAdAAQALAAAQAGQASAIAAALQAAAEgDADIgCAMIgBARQABAWADAJIAFANIAFAMQAAAGgFAEQgEAFgHAAQgGAAgMgLgAgQgXQgNANAAAPQAAAQAHAJQAFAHAMABQAGAAAGgDQAHgCAGgFQgEgcAAgNIABgJIACgMIgFgCIgDgBQgPAAgMAOg");
	this.shape_15.setTransform(-10.7,20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE2427").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKAAQgHgBgFgEQgFgEAAgIIABgGQABgDAAgeIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_16.setTransform(-24.8,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE2427").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_17.setTransform(-38.1,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE2427").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgLAAgDgKIgKgBQgcAAAAAIQABAFAPAIQAZALAIAGQARALAAARQABAVgUAKQgQAJgUAAQgRAAgOgFg");
	this.shape_18.setTransform(-61.1,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE2427").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_19.setTransform(-70.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-3.4,335,73.7);


(lib.text20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE2427").s().p("AgRAZQgFgEAAgFQAAgDAIgOIAKgUQAEgHAHAAQAHAAAEAEQAFAEAAAGQAAACgJAOIgJATQgEAIgHAAQgHAAgEgEg");
	this.shape.setTransform(69.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.5,-3.4,30.2,73.7);


(lib.shape33Hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCCC").ss(1,1,1).p("AEYj+IAAH9IovAAIAAn9g");
	this.shape.setTransform(2.6,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#590000").s().p("AkXD+IAAn7IIuAAIAAH7g");
	this.shape_1.setTransform(2.6,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-21.6,58,53);


(lib.shape31OverDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#590000").s().p("AhaBcQgmgmAAg2QAAg0AmgnQAQgPATgKQAagNAdAAQA2ABAlAlQAnAnAAA0QAAA2gnAmQgbAcgmAHIgaADQg0AAgmgmgAg/hBQgbAbAAAmQAAAlAbAbQAbAbAkAAQAnAAAbgbQAbgbAAglQAAgmgbgbIgEgDIAPgPIg1ACIABAxIASgRIADAEQAUATgBAaQABAZgUATQgSATgbAAQgYAAgUgTQgSgTgBgZQABgaASgTIAHgGIgSgVg");
	this.shape.setTransform(0.6,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhAA8QgbgbAAgkQAAgnAbgbIAJgHIASAVIgHAGQgSATgBAbQABAYASATQAUATAYAAQAbAAASgTQAUgTgBgYQABgbgUgTIgDgEIgSARIgBgwIA1gCIgPAOIAEADQAbAbAAAnQAAAkgbAbQgbAbgmAAQglAAgbgbg");
	this.shape_1.setTransform(0.7,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-6.6,26,26);


(lib.shape28Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAA8QgbgbAAgkQAAgnAbgbIAJgHIASAVIgHAGQgSATgBAbQABAYASATQAUATAYAAQAbAAASgTQAUgTgBgYQABgbgUgTIgDgEIgSARIgBgwIA1gCIgPAOIAEADQAbAbAAAnQAAAkgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(0.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D02325").s().p("AhaBcQgmgmAAg2QAAg0AmgnQAQgPATgKQAagNAdAAQA2ABAlAlQAnAnAAA0QAAA2gnAmQgbAcgmAHIgaADQg0AAgmgmg");
	this.shape_1.setTransform(0.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-6.6,26,26);


(lib.shape18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-35,-15.5)).s().p("AlcCbIAAk1IK5AAIAAE1g");
	this.shape.setTransform(260.6,189.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.6,173.6,70,31);


(lib.shape16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],2), null, new cjs.Matrix2D(1,0,0,1,-93,-38.5)).s().p("AuhGAIAAr/IdCAAIAAL/g");
	this.shape.setTransform(-7.9,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.9,-48,186,77);


(lib.shape14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],1), null, new cjs.Matrix2D(0.995,0,0,1,-15.9,-19.5)).s().p("AieDDIAAmFIE9AAIAAGFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-19.5,31.9,39);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,35,36,0.286)").s().p("AgTgEIAdAAIAKAAQAAAEgCAAQgMAFgHAAQgNAAgFgJg");
	this.shape.setTransform(-23,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5A4A4").s().p("AAOAEIglAAIAAgIIAuAEQABAAAAAEg");
	this.shape_1.setTransform(-27.5,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#908F90").s().p("AgdgFIA6AFQABAAAAADIgKABIgSACQgVAAgKgLg");
	this.shape_2.setTransform(-40,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0AFAF").s().p("AAPAEIgnAAIAAgIIAnAAIAKAAIAAAIg");
	this.shape_3.setTransform(-32.5,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,152,153,0.996)").s().p("AgYgDIAnAAIAKAAIgBADIgwAFg");
	this.shape_4.setTransform(-5.5,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#070304").s().p("AgEAJIAAgbQAPAHgLAdIgEABg");
	this.shape_5.setTransform(-4.5,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4A3A3").s().p("AAAASIgEgkIAIAAIAAAbIAAAKg");
	this.shape_6.setTransform(-5.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#423F40").s().p("AgGAbIgCgGIAFgBQAKgdgPgIIAAgKQAeAIgVAvg");
	this.shape_7.setTransform(-4,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D7C7C").s().p("AgSgDIAbAAIAKAAIgBADIgkAEg");
	this.shape_8.setTransform(-17,-18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2728").s().p("AgPAfQgEgCAAgKIAAgmQAvgugKBUQgCARgOAAQgGAAgLgFg");
	this.shape_9.setTransform(-31,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(181,180,181,0.89)").s().p("ABBAEIiLAAIAAgIICUAEIAAAEg");
	this.shape_10.setTransform(11.5,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(131,129,130,0.965)").s().p("Ag/gEIB1AAIAKAAIAAAEIh/AEg");
	this.shape_11.setTransform(-4.5,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(74,73,74,0.49)").s().p("AAUAEIgxAAIAAgIIA6AEIABAEg");
	this.shape_12.setTransform(4,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(45,42,43,0.996)").s().p("AAFAnIgIAAIgpAAIgKAAIgdAAIgKAAQhLgKgPhEQAjAOAZAZIATATICBAAIAKAAQAPgKAQgEQAkgGAfgNIAYgKQANgFAPAAQgNAfglAJQgfAIgdALQgZAKgjAAIgKgBg");
	this.shape_13.setTransform(-3.5,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(33,34,34,0.275)").s().p("AgSgEIAbAAIAKAAIgBAEQgMAFgHAAQgNAAgEgJg");
	this.shape_14.setTransform(28,21.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#959394").s().p("AgngEIBFAAIAKAAIgBAEIhOAEg");
	this.shape_15.setTransform(41,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#171415").s().p("AgLAMQgDgCAAgGQAQgCAGgOQABgCAGAAIgBAKQgCAQgQADQgFAAgCgDg");
	this.shape_16.setTransform(22.5,-5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2728").s().p("AgSAXIAAgKIAAgmIAAgKQAfgTAHAxIAAAIQgFAAgBACQgHAPgPADQAAAFADACQACADADAAQAAAFAAABQgHADgEAAQgLAAAEgTg");
	this.shape_17.setTransform(21.9,-7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E8D8E").s().p("ABBBxIAdAAIAKAAIAAAKIgKABIgMACQgPAAgCgNgAl7BSQgFgTABgUIAKAAIAAAeIAAAKgAF8hMQgGgYAAgZIAKAAIAAAoIAAAKg");
	this.shape_18.setTransform(-18.5,2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#838182").s().p("AgTgFIAlAFIABADIgKABIgKACQgPAAgDgLg");
	this.shape_19.setTransform(11,-19.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(37,34,35,0.878)").s().p("AokC8QAAgFgCgBQgogWACg+IAAgKIAAgKQA7hZBThCQBLg8BnggIBIgaIAagKIAggFQAvgDAhgRICKAAIAKAAQAEAaAkgBIAKABQBGAJA0ATIAkAMQC/BBBlCdQgDAmgGAgIgBAKIg6A1QgCACAAAFQhVAeh9gJIgKgBIgKAAIgeAAIg8gCQhNgEg1AQIgBgFIg7gFIAAAKIgKAAIjQAAIgKAAIgeAAIgKABQghACgfAAQiHAAhbgrgAo0B1IAGABQAgBEBYAMIAKAAQANARAlgGIAKgBIAKAAIAKAAIAoAAIAKAAIAoAAIAKAAIBGAAIAKAAIAyAAIAKAAIB/gFIABgFIAKAAIAKAAICMAAIAKAAICqAAIAKAAIBPgFIABgFIAdgDIAMgFQAUgKAOgRQAWgbANgmIgCgIQgXglgPgrQg3g3hJgmQhHgmhRgdIgdgEQgigNgvgDIgBgFIgngFIiUgHQg4ABgiAQIgKAAIgeAAIAAAKIgnANIgMADQglAHgdAOIgQAHIgYANIguAdIgOAJQhVA/hEBQIAAAKIgKAAQAAAUAEATg");
	this.shape_20.setTransform(0,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ABAAAB").s().p("AAUAEIgxAAIAAgIIAxAAIAKAAIAAAIg");
	this.shape_21.setTransform(-14,19.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(248,248,248,0.996)").s().p("AizDLIhGAAQAAgFgBAAIgwgFIgKAAIgpAAIAAAKIgKAAIgJAAQAAgFgBAAIg8gFIgKAAQhXgMgghEIAAgKIAAgeIAAgKQBEhQBVg/IANgKIAvgcIAXgNIARgHQAdgPAlgGIAMgDIAngNIAmgFIABgFQAjgQA3gBICVAHQACARAbgGIAKgBQAvADAjAMIAdAFQBQAdBIAlQBJAnA3A3QAOArAXAkIACAJQgMAmgWAbQgOAQgUALIgNAEIgcAEIgKAAIhHAAIAAAKIgJAAIirAAIAAgFIiWgFIAAAKIgKAAIgKAAIgKAAIh1AAIgKAAIgzAAIAAAKgAiACOIAKABQACARAbgGIAKgBIAygFIABgFQAnABAdgKQAdgLAfgIQAlgJANghQgPAAgNAFIgYAKQgfAMgkAJQgQAEgPAKIgIAAIiDAAIgTgUQgZgagjgOQAPBFBLAKgAg2AgIAFABIADAGIAJABQAVgwghgHIAAAKIgKAAgADDguIAEABQgGAaAYgKQACgBAAgFQASgDACgRIABgKIgBgKQgHgxghATIAAAKIgKAAQAAAZAGAYgAlJhVIAAAoQAAAKAEABQAgAOADgZQAHg4gTAAQgKAAgRAQg");
	this.shape_22.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-24,118,47);


(lib.shape10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A386").s().p("AApACIgJgCIARgCQAEgBgCADIgCABIgFACgAgzAAIADAAIgCAAg");
	this.shape.setTransform(-52,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#827E57").s().p("AAEAAIgKAAIAAAAIANAAIAAAAg");
	this.shape_1.setTransform(-33.3,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#828283").s().p("AAlBaIgUgGIgCAAIgSAAQgRgLgVgIIgOgFIgDgBIgLgFIgJgFQgLgIgQgCIAAgCIgBgRQAEgEgBgJIgBgCIAAgBIAFgHIAAgDIAGgEIABgBIAIgXIADgJIABgDIApgqIACgBIAAACIgpAsIAAACIgDAHIgIAZIgCABIgGAFIAAACIgEAIIAAADQACAJgEADQgEAQAOAAIADABIAOAFIAFAGIAAABIAHABQAGACAFAEIAMADIADABQAUAIARALIASAAIADAAIAPAHIACAAQAGgFAJgBIAAgCQAcgCAYADIADAAIgPACQgQgDgVADIgBABQgJACgFAEg");
	this.shape_2.setTransform(-85.8,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#979899").s().p("AgHAAIAMAAIADAAIAAAAIgPABg");
	this.shape_3.setTransform(2.8,51.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0B966").s().p("AAAAEIAAgBQgEgDgCgDIAGADIAEAAIADADIAAAAIgFABg");
	this.shape_4.setTransform(46.2,-11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F9C8A").s().p("AAFAEIgLgHQAJgBADAGIABACg");
	this.shape_5.setTransform(35.6,-19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A19E8D").s().p("AAHAGIgPgMQAIgBABAGQACACAEADIABADg");
	this.shape_6.setTransform(33,-21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3A18E").s().p("AAEAEIgJgIQAHABADAFIABACg");
	this.shape_7.setTransform(43.3,-14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A19F8E").s().p("AALAIIgDgBQgEgFgGgBIgBgBIgJgGQAIgDACAHIACABIAAABQAGAAAEAFIADACIAAABg");
	this.shape_8.setTransform(40.5,-16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#959381").s().p("AACADQgFAAgBgFIAIADIABACg");
	this.shape_9.setTransform(27.8,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5A391").s().p("AgDgDQAEAAAEADIAAAEg");
	this.shape_10.setTransform(26.5,-25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999788").s().p("AAGAEIgMgHIAGABIADABIAEADIAAACg");
	this.shape_11.setTransform(23.5,-27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A8A68F").s().p("AgHADQAHgCACgFIADgBIADAAIAAACIgDACQgEAGgIABg");
	this.shape_12.setTransform(-28.6,-17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E7E7E").s().p("AAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(-23.5,-22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#96958E").s().p("AgPAJIAJgIIAAgBQAGAAABgCIABgBQADgGAJgBIACAAIAAACQgIABgEAHIgBAAQgCADgEgCIgBACQgEAGgHACg");
	this.shape_14.setTransform(-22.4,-21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#989689").s().p("AgvA4IAAgCQAJgFAFgHIAAgBIABgCQALAAADgIIAAgDQAHACACgDIABgBIATgYIABgCIAKgCIACgBQAHgFAEgHIABgBQgCgEAFgHIADgFIABgBQgCgPAFgJIACgBQgEALABAPIAAABIAAADQABAGgCABIgBADIgQASIgCAAIgKADIgBACIgOASIgFAFIgCABQgBACgEAAIgDAAIAAADIgBAAQgDAHgLAAIAAADQgHAIgKAHg");
	this.shape_15.setTransform(-15.9,-28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E8D7E").s().p("AABAFIgDgHQADADABgGIABAAIAAAIIAAADg");
	this.shape_16.setTransform(-11,-37.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDDF36").s().p("AAAAPIgBgBQgFgDABgIIAAgCIgBgFIAFgMQABACAAAHIAAAAQAFAFACAHQABAFgDADIgBAAQAAAEgCAAIgCgCg");
	this.shape_17.setTransform(-11.3,-39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B8A83").s().p("AAAAMQABgHgBgCIAAgEQAAgEAAgGIAAAAIABAUIAAADg");
	this.shape_18.setTransform(-11.4,-41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#716F54").s().p("AAEABIgKAAIAAgBIANAAIAAABg");
	this.shape_19.setTransform(-4.4,-45.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1F0EA").s().p("AAHAIIgDgDIgNgJIAAgDQAKACAGgEIACgBIABASIAAADg");
	this.shape_20.setTransform(2.5,-45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#97989A").s().p("AiRIkIALAAIADAAIAAABIgIABgAh0IhIAsgBIADAAIAAABIgvADgAgbIcIAZAAIACAAIAAABIgbACgAAKIZIAPAAIADAAIAAABIgSACgABhIPIACAAIAAACgAAhnYIgRgCIATAAIABACgAA3nbIAggBIADAAIAAABIgjACgABpnfIAjgBIACAAIAAABIglADgACOnlIgBgWQAFAFAAAMQAAAHgEABgACNoRIAAgUQADAEABALQAAAGgEABg");
	this.shape_21.setTransform(-10.6,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#828282").s().p("AALAVIABgTQADgWgGgXIgBgCQgJgJgKAJIgDAAIAAgDIAAgCIAHgEIAAgBIAIgBIADAAQALAFAAASIgBAqIAAADIgBAqIgCADg");
	this.shape_22.setTransform(4.9,-55.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCFCFC").s().p("AgjA4IgTAAIgBgDQgGgWAAgeIgBAAQgCgIgEgHIADgBIACgJQABgTgHgIIAAgCIADgBICDgDIADAAIACAAIgBACIgBABIABAiIAAADIAAASIAAACIAAARIAAADIABAWIAAADIAAACIgCAAIgjABIAAADIgCAAIgNAAIgDAAIgeABIAAACIgCAAIgRABg");
	this.shape_23.setTransform(-3.4,-54.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7F7F80").s().p("AgJAmIgDhBQAIgOAQAHIABABIgCABIAAACQgLgFgEAIIgFAIIABAZQACAMgCAUg");
	this.shape_24.setTransform(-11.6,-56.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#82827D").s().p("AgGACIgBgCIAEgCIABABIAHgBIADgCIgBACIgMAHg");
	this.shape_25.setTransform(-41.7,-7.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A5A38E").s().p("AgKAHQAJgCABgFIACgCIACgDIADgCIAEgCQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAIgCADIgCABIgFADQgBAHgJABg");
	this.shape_26.setTransform(-39.1,-9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ADADAC").s().p("AmRAfIACAAIAAACQgEAGgIACgAGQgnIgCgCIACAAQAHACAFAIQgIgCgEgGg");
	this.shape_27.setTransform(0.4,-16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A6A48F").s().p("AgFACIAAgCIAIgDIADAAIgBABIgKAHg");
	this.shape_28.setTransform(-36.7,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A9A791").s().p("AgKAGIAAgCQAGgBADgDIACgBIAFgDIAFgEQgCAIgIACIgLAGg");
	this.shape_29.setTransform(-34.2,-13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8A8A8A").s().p("AgKALIgDgGIAGgCQAHgEAGgIIAFgDIAAAAIADABIgCACIgMAJIgFAHIgFAGg");
	this.shape_30.setTransform(-44.1,-5.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B7B6B4").s().p("Am8AwQgCgGgFgDIALgKIACAAIgBABIgHAKQAEACAAAEIAAACgAG9geQgBgFADgCIgHgJIgBgCIACAAQAGADAFAGQgEAFgBAFIgCABg");
	this.shape_31.setTransform(0.4,-12.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9A9884").s().p("AgGACQAHgBAEgEIACgBIAAADQgDAGgKgBg");
	this.shape_32.setTransform(-32.4,-14.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FBED0E").s().p("AmwBvIAAAAIgCgBIgJgKIAAgCIABgDIAAgCQAAgFgEgBIAGgKIABgCIAagSIABAAQAIgCAEgHIAAgCIALgOIABgCQAZgLAWgOQASgIATgHQANgEAMgHIAogZIAGgEQARgMATgIQgEAIgKAFIAAACIAAADIgCAAQgJAAgDAHIgBABQgCAEgHgCIAAACIgJAIIAAADIgDAAQgKAGgHAJIgCABQgBADgHgBIAAACIgHAFIAAADIgDAAIgDABQgEAFgHACIAAADIgFACIgDACIgDACIgLAHIAAACIgCABQgEAGgIABIAAACIgFADIgFAEIgEACQgDADgGABIAAADIAAACIgCABIgFACIAAADIgCAAIgKAFIAAACIAAADIgCAAIgFAAIAAACIgDACIgDACIgDADIgCACQgDAHgIACIAAADIgBAAQgBAEgGgCIABADIgDACIgJAAIAAgBIgFAFIABACIABACIgBACIgCABIAAACgAjvguIAAAAIACAAgAGyAiIgBgCQgCgHgJgBIgBgBIgIgGIAAgBIgCgCQgFgGgIAAIAAgCIgCgBQgCgFgIABQgBgEgHABIgDgBIgDgCIgNgHIgBgCQgDgIgMABIAAgCQgCgFgIACIgBgDQgEgCgCgFQgCgFgJABIAAgCQgMgDgFgKIgCAAIgIgCIAAgCIgKgIIgBgBIgJgGIgDAAIAAgBIAAgFQgEgDgGAAIgDgEIgDgCQgDgFgJABIAAgCIgDgFQATALAWAJIAYAIIAlANQAYALAZAIIABACIALANIACACQAEAGAIABIACAAIAaAPIABABIAHAIQgEACABAFIABACIABADIABACIgHALIgCABIAAACgADfhmIgBgCIgLgHIAQAIIAEACg");
	this.shape_33.setTransform(0.5,-17.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#98999A").s().p("AozIQIAlgBIADAAQgHAFgNAAgApiIOIAWACIAAABIgCAAIgUAAgAJRHPIARAAIABACIgDAAIgHABQgFAAgDgDgAIuHNIAbABIABABIgKABIgGAAQgIAAgEgDgAH1HMQAQAAAQAAIABACIgSABIgEAAQgHAAgEgDgAHkHMIgUgBIAWAAIABABgAG6HJIAOABIABABIgDAAIgEAAQgGAAgCgCgAGVHHIAYABIABABIgKABgAFyHFIAgABIAAABIgRACgAFKHGIAggBIADAAIAAACIgfACgACqmDIgBgOIgBgJIADAKIAAAKIAAADgACnmkQgCgGAAgIQAEADgBAKIAAACgACkm3IgCgPIADAAIAAANIAAACgACknXIgBgjQAFAGAAALQAAANgEAIgAgLnsIgCgPQAEAEgBAJIAAACgAgPoFIgBgOQAEADgBAJIAAACg");
	this.shape_34.setTransform(-10.2,2.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EBDD20").s().p("AAeAMIg6gDIAAgCQgWgCgNgIIAggFIAZgBIADABIAKgBIAWAAIADgBQASgCAOADIgBACQgGAEgDAFIgCAAQgMADgIAHg");
	this.shape_35.setTransform(62,49.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#848485").s().p("AgRACIAKAAIACAAQAHgEAOgCIACAAIAAABQgNADgHAEIgDAAIgMABg");
	this.shape_36.setTransform(87.6,43.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#858586").s().p("AgCAGIgMAAIAAgCIAKAAIACAAIAPgIIACgBIAAACIgPAJg");
	this.shape_37.setTransform(91,42.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#838484").s().p("AgMAHIAAgDQAOgCAIgHIABgCQAFADgGADIgHAEIgDACQgEADgEAAIgEgBg");
	this.shape_38.setTransform(93.9,41.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#878787").s().p("AgIAKIAAgDIAPgRIACgBIAAACIgRAVg");
	this.shape_39.setTransform(96,38.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#858686").s().p("AAXASIgDgEIgFgGIgOgNIgBAAIgWgJIgBgCQgFgDgCgFQAGABADAEIABACIAVAJIACABIAYAWIACACIACAAIAAAFIAAADg");
	this.shape_40.setTransform(95.9,31.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EFEFEF").s().p("AweBdIABgIIADgDIACgCIAEgIQAEgLADgOIgBgBQgEgOAGAHIADAAIAEACIAEAKIABAEIAEATIABABQAKAHABANQgKAHgOACIgFABQgMAAgFgMgAQNgjQgOAAgLgGQgCgNAKgIIAAgCIABgUIAAgDQAAgHADgEIAEgDIACAAQAFgIgCAOIgBABQAFAOAFALIAGAIIACABIACAEIADAHQgDAOgPAAIAAAAg");
	this.shape_41.setTransform(3.1,42);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A0A1A3").s().p("AwhBOIgYgFIAAgDIAbAHIAAABgAQihDQALgGAMgEIACACIgXAIIgCABg");
	this.shape_42.setTransform(2.5,36.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D4D5D6").s().p("AviBLIgFgIIABgCIACgEIABAAIAEALIAAAAIAAADIAAAAgAPhg+IACgMIACAAIACADIABADIgDAIIgDABg");
	this.shape_43.setTransform(3,40.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E1E1E1").s().p("AgHADIABgBIACgBIAAgBIAAgHIAAgCIAAgFIgCgBIgCgBIABgBQAJgIADALIABADQgFAHAFALIABACQAFAKgHACQgHgFgFgNg");
	this.shape_44.setTransform(99.6,35.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F2F2F2").s().p("AxFCJIgKgDQgLgCgDgFIgCgBQgGgIACgNIACAAQAKgFAGgKIABgCIADgQIgCgBQgDgEACgIIgBgBQgCgIgHgEIgCAAQgGAHgJADIgMAQIgBACQgBAMgIAAIgHgDQgGgEgIgDIgCgDIgBgDQgBgJgFgFQABgTAIgGIABgCQAHgBAEgHIABAAIAOgDIACABIAJAJIACABQgBAHAHACIADAAQAJgBAGgHQAHgIAOADQAJAEgIAHIgBACIAEAeIAAACIAJAOIABACIgBACIAZAFIACABQAMAEgLAGIgFADIgCACQgJAEAFAIIgBACIgIAOQgGAEgGAAQgHAAgGgEgARAgIIgKgOIgBgCQADgJgIgDIgDgBIgEgDQgMgFAKgFIADgBIAWgJIgBgCIAAgCIAIgPIgBgDIgBgfIgBgBQgJgGAJgGQAMgEAIAHQAGAGAJAAIADgBQAFgDgBgHIACgBIAHgLIACAAIANAAIABAAQAEAHAHAAIABACQAJAGAEASQgEAGABAJIgBAEIgCADQgHAEgFAFIgGAEQgIABgCgMIgCgCIgMgPQgKgBgHgHIgBAAQgGAFgBAJIgBABQAEAIgDAFIgBABIAFAPIABADQAHAJAKADIACAAQADANgEAJIgBACIgNAJQgEABgEADQgIAGgHAAQgFAAgEgCg");
	this.shape_45.setTransform(1.9,35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#272425").s().p("Av4C5IgfgEIAAgCQgLgKgEgPQgCgDgFAAIgtgIIgCgDIgCgBQgIgCgDgDIgMgMIAAgCQgGgIAAgMIABgBIgegIIAAgCIgUgXIAAgDQgBgGgFgDQABgHgDgFIgBgEQACgIgEgDIADgPIAAgDQAJgEAEgHIABgDIAMgIIABgCQAJgBAIgFIABgBIANABIADABQALABAGAGQAJAAAGgFIABgCIALgBIAAgCIAXADIACAAIADAOIAAACQAEAEABAHQABADAFABIAEAAIADgCIACAAIgBACIAAADQAFACgBAHQgBAJAHAFIAAADIgBAFIANALIAGAAIgBADIAAADIATAGIACABIAAABIAUAAIADABIAWACIgIAYIgBAAIgGAFIAAACIgFAKIgDgLIgCAAIgCAEIAAACIAFAIIACAAIABAAQACAJgEADIAAARIAAADQAQACALAHIAKAGIgNAEIgDgBQgIgEgEACQgKACgHAHIgDACQgNACgKAHgAwABlIABABQgDAOgEALIgEAIIgCACIgDADIgBAIQAFANARgCQAOgCAKgHQgBgNgKgHIgBgBIgEgTIgBgEIgEgKIgEgCIgDAAIgDgCQgCAAADAJgAxdBvIACABQADAFALACIAJADQAOAGAMgGIAIgOIAAgDQgEgIAJgEIACgCIAEgDQAMgGgMgEIAAgBIgbgHIAAgCIgKgNIAAgDIgDgeIAAgBQAJgHgJgFQgOgCgHAIQgGAGgJACIgDgBQgHgCABgHIgCgBIgJgJIgDAAIgNACIgBAAQgEAHgHABIgBACQgJAHAAASQAFAFAAAJIACADIABADQAJADAGAEIAHADQAIABABgNIABgCIALgQQAKgCAGgHIABgBQAIAEABAIIACABQgCAIADAFIACABIgEAPIAAADQgGAJgKAFIgCAAQgCANAGAJgAQDAnIgCgBQgIgHgKgBQgFgBgGAFIgDACIgNgDIgDAAIgYgYIgBgBIASgRQAFALAJAGQAHgDgEgIIgCgCQgEgNAEgHIgBgCQgCgMgLAJIgBAAIgZgYIACgCQADgDALgBIAEgBQAJgDACAGIAagHIADgBQAHAEAMgHIAAgBIACgBQALgDAGgGIgBgDIgBgCIAEgBQAJgFACgIIgBgGIgBgCQAGgGgCgKQgCgHAFgCIgBgDIgBgCIACAAIACACIAEgBIAFgFQAAgIAEgGIgBgCIAAgPIADAAQAJABAMgHIABACIAJAAIACACQAGAEAJgBQAEgHALgDIACgBQAHgEAFACIACAAQAIAEAJAAIACACQAEAGAHABIABACQAGAJAIADIABADIAFAPQgEADAEAIIgBAFQgCAFACAHQgEAEABAGIAAADIgQAbIAAACIgaALIAAABQACAMgEAKIAAACQgHAFgDAIIgJAGIgCACIgCAEIgoALIgHAFQgBAPgJAMIAAACIgcAIIgCAAQgKgGgNAAgAQUguIgCAAIgEADQgDAEAAAHIAAADIgBAUIAAACQgKAHACAMQALAGAOAAQAPABADgPIgDgFIgCgEIgCgBIgGgIQgFgLgFgOIABgBQABgJgCAAIgCADgAPugUIABADIACgBIADgIIgBgDIgCgDIgBAAgARFiOQgIAGAJAGIABACIABAfIABADIgIAOIAAACQgMAFgMAGIAAABQgKAGALAEIAFADIACACQAJADgDAIIABADIAJANQANAFAMgIQAEgDAEgCIAMgJIACgBQAEgJgEgNIgCAAQgJgEgIgJIAAgCIgGgPIACgCQACgFgDgIIABgBQABgIAFgFIACAAQAHAGAJACIANAOIACACQACANAIgCIAGgEQAEgEAIgEIABgEIABgDQgBgJAFgGQgEgTgJgGIgBgBQgHAAgEgHIgBAAIgNAAIgDAAIgHALIgCABQACAHgFADIgDABQgJgBgGgGQgGgEgGAAIgJABg");
	this.shape_46.setTransform(1.7,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEEF01").s().p("AtXHvIgEgBIgIgDIgUgGIgDgBIgZgKIgMgIIgCgBIgHgCIgIgIIgBgDIADgFIADgHIAHgPIAEgIIALgSIABgDIAAgCQAUgRAPgVIAIgMQATguAjgfIAIgHQAGgEADgIIABgDIAogiIALgIIAdgbIASgSIAegZIAfgYIAjggIAfgYIABgDIACgDQADgDAEAAIADAAQACgGAGgDQAGgEADgHQAGABACgDIACgBQADgHAGgDIADAAIAJgJIABgBQACgBAFAAIADAAQACgIAGgEIACgCIADgCIAGgDIAKgJIAHgHIAagXIALgKIAHgGIABgBQAEgDACgGQAGACACgEIACgBIAcgfIAAgCIAIgCIACAAQACgJAHgDIACgCIADgDIAFgGIAIgDIACAAQgBgGAGAAIAAgBIARgJIADgDQAFgFAJgBQACgIAIgEIAAgBIAHgDIADAAQACgHAHgEIABgBIAHgDIACAAIAKgLIAAgCIARgHIACgBQAFgLAMgDIADgBQACgIAKgCIADAAQAAgKALgBIADAAQACgJALgBIACAAQABgIAIgDIAAgBIAHgDIADAAQgBgHAGABIAAgCIAIgCIACAAQgBgLAEAFIABABQgBgMALgBIADAAQAAgIAKAAIACAAIAEgGIABgBIARgDIADAAQADgDADgEIABAAIAEgBQgCgIADgDIAEgBIADgBQgCgLAIgDIABgDIAAgDIgEgHIgJgKIAAgCQgEgDgGgBIAAgBQgFgMABgPIgBgKIAAgKQAAgMgDgGIAAgBQgDgKABgPQADgEAHACIADAAIAOACQAGAAAAgEIALAAIADAAQAJAAAFgEIABAAQAFABADADIAPgBIAFgBIADAAIAEABIAPALIADADIACADIACAMQgBABAAAAQAAABAAAAQAAABAAAAQABAAAAABIADAIQgBARADAPIABAWIAAABQgBARAHAHIABAAQAEAEAHAAIABABIAEAMIALABIAmgCIAAABQAJABABAIIADAAQAIgDAAAIIACgBIAMADIAAABQAGgBAAAHIAKABQAEAEAFACIAAABQAGAAAAAGIACAAIAIACIAAACQAGgBgCAHIADAAIAHACIAAABQAHAAgBAGIACAAIAHADIABABQAJAFAGALIAEgBIAEABQADAGAJABIAVASIAEAIIADABIARAGIABACIAFAFIACAAIAIADIAAABQAGgBgCAHIADAAIARAHIABABQAHAEADAHIACAAQAIAAACAHQAJABAFAFQAFAFAJABQABAIAGACQAGADACAGIADAAIAHACIABACIATARIADADIAAACQAEABgBAHIACAAIAIACIAAACIACAAIADAIIACABQAGABAFAFQABAGADAEIAEAGIACAEIAAABIAMALIADABIAHABIABACQAPASARAOIABACQADABgBAHIADAAIAHACIABACQAGADADAHIADAAQAEAAADADIADACIACADQAEAHALgBIABACIAlAeIABACIACAIIAEABIACACIADADIADACIACADIABABQAGgDAAAKIAAAAIABABIAAAAIAJACIAAACIABAEIABACQAJALALAIQAFADADAGIADAAQAEAAADACIAAACQAHADADAHIADAAIAHADIABABQAGADADAIQAJABAFAEIAMAHIAGAEIAKAFIAEACQAKACAGAHIACACIACACQAHADAEAEIAJAIIAEACIACADIAbAcIABAAIAIACIABACIAZAbIABABQADACgBAHQAHACAEAGQAMASARANQAOAJAJAPQABAKgEAGIgCAEIgFAGQgFACgDAFQgJASgVAHQgGABgDAEIgDAAIgZADIAAACQgRAEgNAHIgCAAIgOABIAAABQgIgBAAAFIgDAAIgKAAIAAABQgGAAAAAEIgNACIgCAAQgOAAgEAGIgZACIgVAEIAAACQgIgBAAAFIguAEIgwADIgDgBQgCgDgEADQgFADgKgDIgKAAIgKABQgjAFgjgEIgJgCIghgCIgjADIgjgBIgzgCIAAgCQgHABgBgEIgogBIgdgCIgKABIgNADIgCAAIgRAAIgjAEIgCAAQgSgCgCALIgPAAQgUgCgKAIIgCAAIgSAAIABACQgHgBgBAFIgnAEIgNAAIgOACIgKACIgcAEIggABIAAACQgHADgKAAIAAABQgHAAgBAEIgEAAIgNAAIg0ADIgDAAIgpAEIgDAAIgRgBIgOACIhEAHIgjAEIAAgCIgOAAIAAACIgXABIgTABIgqABIgDAAIg0AAIglAAIg0gBIgDAAIgRAAIgCABIgZABIgcgBIh0AFIgUgBIgiABIgDAAIggACg");
	this.shape_47.setTransform(0.6,3.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#292626").s().p("AtCJHIgQgHIgCAAIgUAAQgSgKgTgJIgDgBIgNgDQgEgEgGgCIgHgBIAAgBIgFgGIgPgFIgDAAQgNAAADgQQAEgEgCgJIAAgDIAEgJIABgDIAGgFIABgBIAJgZIACgHIABgCIAogsIABgCIAAgCIAAgFQAGgFAEgHIACgBIAIgSIAKgUIAAgCIAbgdIAggnQAQgUAYgOIADgCIAlgkIADgDQAUgXAegMQASgTAVgQQAVgRAVgQIAPgMQALgNARgGIAtgqIABgCIAIgCIACAAQADgJAIgGIACgCIADgDIABgBIAHgBIACAAQAEgJAJgGIACAAIAGgFIAHgHIALgLIACgCIAAgDIACgBIABgBIAOgJIABgBIgBgDQAGACABgFIABAAQAJAAACgIIAFgEIACgBIACgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgCIAEAAIADAAIALgJIABgBIAAgDIAFgDIACAAIANgHQAIgCABgJQAMAAADgIIAAgCIAAgCIALgHIACgCIAEgDIAFgCQAKgBAEgIIACgBIABgCIAAgDIAHgFIAAgCQAHABABgEIACAAQAHgJAKgGIACAAQAIgDAEgFIABgDQAGACACgEIABgBQADgGAJgCIAAgCQAKgGAHgJIAAgDQALABADgIIABAAIAAgCIADAAQAEAAABgCIACgBIAFgGIAQgSIABgBIAKgGIACAAIAQgSIABgCQACgBgBgHIAAgCIAAgBQgBgPAEgLQALgFgGgNIgBgCIAAgDIAAgKQACgDgBgEQgBgJgGgFIAAgDIAAgXIAAgEIABgDIgBgMIgBgUIAAgDQABgJgEgDIAAgCIAAgIIAAgCQABgKgEgDIgCAAIgDgRQABgUgBgMIgCgbIAFgHQAGgJALAGQAIAHgCAUIgCAJIgDABQAEAGADALIABAAQgBAeAHAVIAAADIARACIADAAIARAAIADAAIAigCIAAgCIANAAIACAAIAjgDIAAgBIAAgCQAEgBAAgGQAAgMgEgGIAAgCIgBgRQAEgBAAgHQAAgKgEgFIAAgDIgBgiIACgBIAAgBQALgKALAKIAAABQAGAXgDAYIgBAUIABAjIAAANIAAABIABAkIAAACIAAANIABACIgDAAIACAOIABAAIAAADIAAACQAAAIACAHIABABIAAAGIAAADIABAJIABANIABAAQALALARgDIAAABQALALAQAFIAAABIASACIACAAIARAIIABACIAMALIAAABIASAGIACABQAEAEAHACIACABIAJAKIALAIIAAABIAOAJIABABQAIgBAEAFIADABIADAFIAKAIIAAABIACAAQABAHAHAAIADAAIAJAIIABABIAIADIACAAQAFAJAMAEIAAABIAQAPIACAAQAIgCACAEIAAACIANAJIACABIAOAHIADABIADACQAHgBABAFIAJAIIABACQAIABAEAFIADABIACAAIAHAGIABABIALAKIACAAIAEABIAFAHIAGALQACAGAFADIABAAIACABQAEAGAHgCIABABQAJANAOAIIAEAJIACABQACAIAGAEIACAAQgCAHAEABIABACIATASIAIAHIALAMIAUAHIACAAQACAGAFAFIABABIAIABIACABIAEAGIABACQAHgCADADIACAAQADAIAIACIACAAIAMAQIAJAIIAFADQAAAEABADIABADIARARIAeAfQAGAFAKADQAUAUAeALIALAFIABAAIAIAFIANAGQAGACACAIQATAHAOAOIAyAxQAHAQAOAKIACAAQAAAHADAEIAAACQAHABACAIIABAAQACAFAFADIABACIAXAIIACABIAPAPIAFAGIADAEIAIAHIAAAHIAAADIgCAAIgCABIgSASIAAABIAAACIgCABIgRAUIAAACIAAACIAAADIgBACQgIAJgQACIAAACIgCABIgRAKIgDAAIgKAAIABADIgDAAQgNACgJAFIgCAAIgKABIAAADIgBABIgTAEIAAABQgQAEgLAIIgiAEIgeAFIAAABQgHAAAAAEIgPACIgNACQgQABgLAGQgOgDgSADIgCAAIgWABIgNAAIgCAAIgZABIggAEIAAgCIgUACIgDAAIgYgCIgBgBIgRAAIgCAAIgFAAIgBgBIgbgBIgCAAIgWABIgBgCQgQgBgQABIgCAAIgMAAIgBgBIgWgBIgCAAIgFAAIgBgBIgOgBIgDAAIgJAAIgBgBIgYgBIgDAAIAAAAIgggBIgCAAIgDAAIgDAAIggABIgjABIgOAIIAAAAIgjADIgiAHIgKAAIhAANIgDAAIgOAAIAAADIgDAAIgUACIgDAAIgggBQgQAAgMAKIgJABIgCAAIgPAAIAAADIgDAAIgJAAIgDAAIgZABIAAADIgCAAIgoAAIgCAAIgtABIAAADIgCAAIgNAAIgCAAIgMAAIgwACIgFABIgYACIgxABQgVgBgNAHIg4ADQACgEgEABIgRACQgogLgqAKIgDABIgCAAIg0AAIgDAAIglABIgCAAIgXABIAAgBIgWgBIAAACIgCABIgjAAIgCAAQgYgDgcACIgBACQgJABgFAFgAozBfQgGADgCAGIgDAAQgFAAgCACIgCADIgCAEIgeAYIgjAfIgfAZIgeAYIgTASIgdAbIgKAJIgoAiIgCADQgDAIgFAEIgIAHQgjAfgUAtIgHANQgPAVgUARIAAACIgBACIgLASIgEAJIgHAPIgDAHIgDAFIABACIAIAJIAGACIADABIAMAIIAZAKIADABIAUAGIAIADIAEABIADABIAggBIADAAIAigBIAUABIB0gFIAcABIAZgCIACAAIARAAIADgBIA0ABIAlABIA0AAIADAAIAqgBIATgBIAXgCIAMAAIACAAIAjgDIBDgHIAPgCIARABIADAAIApgEIADAAIA0gDIAMAAIAFAAQABgEAHAAIAAgBQAKAAAGgDIABgCIAggBIAegFIAHgBIAPgCIANAAIAngFQABgEAHABIgBgCIASAAIACAAQAKgJAUADIAPAAQACgMASACIACAAIAjgDIARAAIABAAIAOgEIAKAAIAdABIAoABQABAFAGgBIAAABIA0ADIAjABIAjgDIAgABIAKACQAiAFAjgFIAKgBIALgBQAKADAFgDQAEgCACACIADACIAvgDIAvgEQAAgFAHAAIAAgBIAWgEIAZgCQAEgHANABIADAAIAMgCQABgEAGAAIAAgBIAKAAIADAAQAAgFAHAAIAAgBIAPAAIACAAQANgHARgEIAAgCIAZgDIACgBQAEgDAGgBQAVgHAJgSQACgFAGgDIAFgFIACgEQADgHAAgKQgJgOgOgJQgSgNgLgTQgEgGgHgCQABgGgEgCIAAgCIgZgbIgBgBIgIgCIgCAAIgagcIgDgDIgDgDIgJgHQgEgFgHgDIgCgBIgDgCQgGgHgKgDIgDgBIgKgGIgGgDIgMgHQgGgEgIgCQgDgHgHgDIAAgCIgIgCIgCAAQgDgHgHgDIAAgCQgDgCgFgBIgCABQgDgHgFgDQgMgHgIgMIgCgBIgBgFIAAgCIgIgCIAAAAIgCAAIAAAAQABgLgGAEIgBgBIgDgDIgCgDIgDgCIgDgCIgDgBIgCgIIgBgCIglggIgBgCQgMAAgDgHIgCgCIgDgCQgDgDgFAAIgCAAQgDgIgHgDIAAgBIgIgCIgCAAQABgHgDgBIgBgCQgSgNgOgRIgBgCIgIgBIgCgBIgMgLIgBgCIgCgDIgDgGQgDgFgCgFQgEgFgGgCIgCAAIgEgIIgBgBIgBgBIgHgCIgDAAQACgHgEgCIAAgBIgDgDIgUgRIAAgCIgIgCIgCAAQgCgHgGgCQgHgCAAgJQgJAAgFgGQgGgEgIgBQgCgHgIAAIgDAAQgCgHgHgEIgBgBIgRgHIgDAAQACgHgHAAIAAgBIgHgCIgDAAIgEgGIgBgBIgSgHIgCAAIgEgJIgVgSQgJAAgDgGIgEgBIgEABQgGgLgJgFIgBgBIgHgDIgDAAQACgHgHABIAAgBIgHgDIgDAAQACgGgHABIAAgCIgHgCIgDAAQABgHgGABIAAgBQgFgCgEgEIgLgBQABgHgGAAIAAAAIgNgDIgCABQABgIgJACIgCAAQgBgHgJgBIAAgBIgmABIgMAAIgDgMIgBgBQgIAAgDgEIgBgBQgHgGABgRIAAgBIgBgWQgDgQABgQIgDgIQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgBgMIAAgDIAAgUIgDAAQgGAFgLgCIAAADIgDgBIgCAAIgIABIgPAAQgDgCgEgBIgCAAQgFADgIABIAAgBIgPgBIAAACQAAAEgFgBIgPgBIgCgBQgIgCgCAEQgBAQADAJIAAACQADAGAAAMIAAAKIAAAKQAAAPAFAMIAAABQAGAAAEADIAAACIAJAKIADAIIABADIgBADQgIADACALIgDABIgEABQgDACACAJIgFABIgBAAQgCAEgEADIgCAAIgSACIAAACIgEAGIgDAAQgJgBgBAJIgCAAQgLAAABAMIgBgBQgEgEAAALIgCAAIgHACIAAABQgHAAACAHIgDAAIgHACIAAABQgIAEgBAIIgDAAQgKABgCAJIgDAAQgLAAgBALIgCAAQgKACgCAIIgDAAQgMAEgFALIgCABIgRAHIgBACIgJALIgCAAIgIACIAAACQgHAEgCAHIgDAAIgHACIgBACQgHAEgCAHQgJACgFAEIgEADIgQAJIAAACQgHgBACAHIgCAAIgIADIgFAGIgDADIgCACQgIADgBAIIgCAAIgIADIgBACIgcAfIgBAAQgCAEgHgBQgBAGgEADIgBABIgHAGIgLAIIgaAXIgHAHIgKAJIgGADIgDACIgCACQgHAEgCAIIgCAAQgFAAgDACIAAACIgJAIIgDABQgHACgCAIIgCAAQgCAEgGgBQgDAHgGAEg");
	this.shape_48.setTransform(1.4,-2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#908F80").s().p("AASASIgEgJQgOgJgHgLIgBgBQgHADgEgHIAFgBIAAAAQAEAEAGACIAWAXIACAEIAAACg");
	this.shape_49.setTransform(48.5,-9.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAFAFA").s().p("AwMEkIgNgMIABgFIAAgCQAFgGAEgIQAKgZATgLIANgOIABgCQALgFAKgJIACAAIAJgLIACgCIAPgKIACAAQAOgXATgQIABgCQANgHAKgNIAUgdQAEAAADgDIABAAQACgHAFgCIADAAQACgGAFgCIACAAIAMgOIABgCIASgPIABgCIAVgOIACAAQAGgJAHgEIASgIQACgGAFgCIACAAQAHgOAKgKIABgCQANgCAKgIIACAAIAJgMIACgCQAJgEAJgHIACgBQAFgIAIgEIACAAQAGgLAMgDQAPgFAPgHIACgCQAMgJAPgDIAKgOIABgCQANgGAMgJIACgBIATgQIACAAIAJgMIABgCQAMgEAJgKIABgDQAGAEgBAIIAAADIAMARIABABIgGADIACAFIAAACIgCAAQgIAFgEAKIgDAAIgHADIAAABIgEADIgCACQgHAGgEAIIgCABIgIACIAAACIguApQgQAHgMAMIgOANQgWAQgUARQgVAQgTARQgdAMgVAWIgCADIglAlIgDACQgYAOgQAUIghAnIhDApIgFADIgFACIgSASIgBACIgLAIIgBACIgMAJIgBACIgLAIIgBADIgKAFIgCAAIgNANIgCAAQgCAIgHACIgBABgAQKCTQgHgBgDgIIgCAAIgOgLIgCAAQgFgEgFAAIgBgCQgFgFgHgCIgBgCIgMgHIgBgCQgFgGgHgBIgCgCIgUgQIgEgCIgFgCIhdgsQgvgWgxgQQgugSgsgXIgQgRIgBgDQgCgDAAgEIgFgDIgIgIIgMgQIgDAAQgHgDgDgHIgCAAQgEgDgGABIgBgBIgFgGIgCgBIgIgBIAAgCQgGgEgBgGIgDgBIgUgGIgLgOIgHgHIgUgSIAAgCQgEgBABgHIgCAAQgGgEgCgIIAAgDIgBgDIgYgaQgGgCgFgEIgDgCIgEgCIACgIIABgCQADgKAGgJIAAgDQgDgIAGgFIABADQAJAJAMADIACACIAKAKIACAAIAVAOIABAAQAMAIAOAFIABACIALANQAPABAMAHIADACQAPAGAPACQALACAHAKIACAAIAPALIABAAQAJAGAKADIACACIAKALIACAAQALAGANABIABACIATAWIACAAIAIAHIASAIIAOALIACAAQAKAHAMAEIABACQAIAJALAEIABACIAOANIACgBIAIAIIACAAQAFABADAHIABAAQADADAEgBIAXAbQALAMAOAFIABAAQATAOARAVIACAAQAHAGAJACIABACIALAKIACAAQAKAHAMAEIABACIAOAMQATAKAOAYQAEAIAGAEIABADIABAFQgDAJgIAFIgEAAg");
	this.shape_50.setTransform(2.3,13);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#080808").s().p("AvyGUIgTgGIAAgDIABgDIAAgBQAHgCADgIIACAAIANgMIACgBIAJgFIABgCIAMgJIABgCIALgIIABgCIALgJIABgCIATgSIAFgCIAEgDIBEgpIgbAdIAAACIgKAUIgUAKIgSASIgBABQgLAGgIAJIgCAAIgNAMIgCAAIgQAQIgBACIgTAOIgCABgAwcFnQABgIgFgBIAAgDIABgDQALgYARgPIABgCQAIgDAGgIIABgCQAHgCAEgGIABgCQAKgEAJgHIACgBQAGgKAKgEIACAAIAUgcIABgCQAHgDAFgGIABgCQAPgKAMgPIAWgfIAMgIIABgDQALgGAJgLIABgCIARgLIABgBIAKgMIABgCQARgJAQgMIACAAQAFgIAIgFIACAAIAUgZIABgCIAegRIACgBIAJgLIABgCQAMgFAKgHIABAAQAIgMANgFIAYgNIAIAAIACAAIAegSIACAAIAHgJIABgCQAKgFAIgHIACAAQAGgLAMgFIAEgDIAFgCIAQgSIABgCQAJgDAHgGIABAAQAFgJAJgEIASgHQAGgLAJgEIAFgCIAOgIIANgQIABgCQAsgcAygWQAlgPAfgZIAHgDIADgBIApgYQAUgLAUgNIADgCIAcgTIACAAIgDAEQgFAHACAFIgBABQgEAHgHAFIgCAAIgKAFIgBACIgVAXIgBABQgCADgHgBIAAADQgDAHgLABIgBABIAAABQgUAHgRANIgFAEIgoAZQgMAGgNAFQgUAHgRAKQgXAOgZALIgBACIgKAOIgCAAIgKAKIgCABIgZASIgCAAIgKALQAFACACAHIABAAIAAADIgBACIAJAJIACABIgFAEQgGAIgJAFIAAgBIgNgRIAAgDQABgIgGgDIgBACQgIAKgMAEIgBADIgKALIgCAAIgTARIgCAAQgLAJgNAHIgBACIgKANQgQADgLAJIgDACQgOAIgQAEQgLADgGAJIgCABQgJADgFAIIgCABQgIAHgKAEIgBADIgJALIgCABQgKAHgOACIgBACQgJAKgIAOIgCAAQgFACgCAHIgRAKQgIADgFAJIgCAAIgVAOIgBACIgSAPIgBACIgNAOIgCAAQgFACgCAHIgCAAQgFACgCAGIgCAAQgDADgEABIgTAcQgKAOgOAGIgBADQgSAQgPAWIgCABIgPAJIgBACIgJALIgCAAQgKAJgMAFIgBACIgMAOQgTALgLAZQgDAIgFAGQgIgFABgJgAP6EIQgJgIgLgEIgBgBIgRgPIgCAAQgIgEgGgGIgCAAQgJgJgLgDIgBgCIgUgQIglgQIgWgLQgugYgwgSIgLgDIgLgFQgegLgUgUQgKgDgGgFIgegfQArAYAvASQAwASAvAVIBdAsIAFACIAFADIAUAPIABACQAHABAFAGIABACIAMAHIABADQAHABAFAFIACADQAFAAAEADIACAAIAOALIACAAQAEAJAGAAIABABIABADIABADQgGAFgLAEIgCABgAQQDWQgNgYgUgJIgNgMIgCgDQgMgDgKgIIgCAAIgKgKIgBgCQgJgCgHgFIgCAAQgRgWgTgNIgCgCQgOgFgLgNIgWgaQgEAAgDgDIgCAAQgDgGgFgCIgCABIgIgIIgCAAIgNgMIgCgDQgKgEgJgIIgBgCQgMgFgKgFIgCAAIgOgLIgRgIIgIgHIgDAAIgTgWIgBgBQgNgCgKgGIgCAAIgLgKIgBgCQgKgEgJgFIgCgBIgOgLIgCAAQgHgJgLgDQgQgCgOgGIgDgCQgNgHgOgBIgMgNIgBgCQgNgEgMgJIgCAAIgUgOIgCAAIgLgKIgBgCQgMgDgJgJIgCgDQgFAFACAIIABADQgHAJgDAKIgBACIgBAIIgIgEIgGgLIgFgHIAAgBIABgBIAIgLIgBgDIgBgCIABgBQABgGAEgEQgEgHgHgCIgCAAIgagPIgCAAQgEgIgHgCIgCAAIgLgMIgBgDQgZgHgYgMIglgMIgZgIQgVgJgUgLIgCgBIgEgDIgQgIIgJgKIgCgBQgHgCgEgEIgCgBIgSgGIAAgBIgMgLIgBgCIgRgIIgCAAIgSgCIAAgBQgQgFgLgLIAAgBQgRADgLgLIAAgCIAAgKIAPABIABABIATALIACAAIAIgBQAOAJAPAHIADABQAUAMAVAIIApATIADABIAIABQAgAWAlALQAyAPAuAWIACADIAOAOIAOAHIAFACQAJACAHALIATAFQAIACAGAIIACAAQAHAHAJAAIABACIARARIAFACIAFACQALADAIAKIACAAQAJAHAKADIABACIAHAJIADgBIAeAOIACAAIAIAAIAYAJQAMAEAKAMIACAAQAKAGAMAEIABACIALALIABAAQAPAIAQAFIABACIAWAXIACAAIAPALIABAAQARAKASAIIABACIALAKIABAAQAIAFAJADIABACIAWAPIACACIAMAHIAZAcQANAPAQAIIABACQAFAFAHACIACACIAXAaIACgBQAJAEAIAJIACAAQAJAGAKADIABACQAFAGAHABIABACIAPAJIACACQASANANAYIABACIABACQgFADACAHQACAJgGAGQgFgEgFgIg");
	this.shape_51.setTransform(2.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-61,241.7,117.6);


(lib.shape9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7A7A").s().p("AgNgFIAaAFQACAAAAADIgKABIgHACQgNAAACgLg");
	this.shape.setTransform(-5,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747373").s().p("AgNgFIAaAFQACAAAAADIgKABIgHACQgNAAACgLg");
	this.shape_1.setTransform(-10,33.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C7B7C").s().p("AAAATQgFgTAAgTQAPADgGAaIgBAKg");
	this.shape_2.setTransform(-0.9,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(37,37,37,0.4)").s().p("AAAAcQgFgcAAgcQAPAMgGAjIgBAKg");
	this.shape_3.setTransform(-3.9,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(48,47,48,0.518)").s().p("AgEATIAAgvQAPARgLAnQAAABgEAAg");
	this.shape_4.setTransform(-4,-12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A5759").s().p("AAAANQgDgNgBgNIAIAAIAAASIAAAJg");
	this.shape_5.setTransform(-2,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#828182").s().p("AgFAPIAAgKIAAgSQAOgCgFAUIgBAKg");
	this.shape_6.setTransform(-1.9,-18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(44,44,45,0.408)").s().p("AAAANQgFgNAAgNQAPgCgGAUIgBAKg");
	this.shape_7.setTransform(-4.9,-21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(105,105,105,0.91)").s().p("AAAAhQgEgdAAgbIAAgKIAIAAIAAA5IAAAKg");
	this.shape_8.setTransform(-4,-31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9E9D9E").s().p("AAFAEIgTAAIAAgIIAbAEIACAEg");
	this.shape_9.setTransform(0,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#848384").s().p("AgOgEIATAAIAKAAIgCAEIgbAEg");
	this.shape_10.setTransform(10,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(49,48,48,0.416)").s().p("AgFAOIAAgKIAAgSIAIAAIABAKQAFATgMAAIgCgBg");
	this.shape_11.setTransform(23.1,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#838182").s().p("AjIAUIAeAAIAKAAIgBAFIgnAEgAC8AAIAAgdIAKAAIABALQAGAZgRADg");
	this.shape_12.setTransform(1.6,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(42,41,41,0.247)").s().p("AgEAYIAAgJIAAgmIAIAAIAAAmIAAAJg");
	this.shape_13.setTransform(24,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(49,48,48,0.376)").s().p("AAAAYQgFgYAAgYQAPAIgGAfIgBAKg");
	this.shape_14.setTransform(23.1,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727070").s().p("AAAAdQgFgdAAgdQAPANgGAkIgBAKg");
	this.shape_15.setTransform(21.1,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(49,48,48,0.404)").s().p("AAAANQgFgNAAgNQAPgCgGAUIgBAKQgDAAAAgCg");
	this.shape_16.setTransform(22.1,-8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(48,47,48,0.392)").s().p("AAAAXQgFgXAAgXQAPAIgGAdIgBAKg");
	this.shape_17.setTransform(21.1,-15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#797777").s().p("AAAANQgFgNAAgNQAPgCgGAUIgBAKQgDAAAAgCg");
	this.shape_18.setTransform(20.1,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#898788").s().p("AAAAXQgFgXAAgXQAPAHgGAeIgBAKg");
	this.shape_19.setTransform(19.1,-14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#737172").s().p("AAAANQgFgNAAgNQAPgCgGAUIgBAKg");
	this.shape_20.setTransform(18.1,-20);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(49,49,49,0.373)").s().p("AAAANQgFgNAAgNQAPgCgGAUIgBAKQgDAAAAgCg");
	this.shape_21.setTransform(19.1,-26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(34,31,32,0.902)").s().p("ABpFoIjGAAQgigWgugJQhCgOAGhWQAUgdAxgEIApgGIAogKQAfgiANg3IAGgBIAAhjIAAgKIABgKQAGglgRgMIAAgKIAAgLQAFAAAAgBQAMgpgRgRIAAgKIAAgfIABgJQAFgWgQABIgCgJIgEgLQgEgUAGgRQADgHgJgjIALgJIAJgBQAAAdAFAdIAFABQAHAhACAlIABAKIAAAVIAAAKQAAAOAEAOIAGABIAABkIAAAKQAAAVAEARIAGABIAAAKIAABQIgGABQgLAlgNAfQgFAAgDADIgWAcIgJACQgaASgtAAIgKAAIgeAAIAAAJQgFAAgBACQgHAPgRADQAJApAoAMQAaAHAZAKQgCARAWgGIAKgBIAKAAIAKAAQgCARAWgGIAKgBIAKAAIAKAAIASAAIAKAAIA8AAIAKAAIAcgEIACgGQAUgKAUgIIAKgBQAWgrAQgwIACgJQARgDgGgbIgBgLIAAgKIAAh3IABgKQAGgkgRgNIAAgKIAAgnIABgKQAFgWgQABIAAgKIAAgKIABgKQAGgggRgHIAAgKIAAgLIABgJQAFgWgQABIgBgKQgGgXgNgQIAAgLQAFgygPgdQAoAAgFAyIACAKIADATQAAAQAEANQABABAFABIAJA7IABALQAAAYAFAYIAFABIAAAUIAAAKQAAAQAEANQABABAFABIAAAnIAAAKQAAAXAFAZIAFABIAAAxIAAALIAAAoIAAAJIAAAzIAAAKIgKAAIAAAUIAAAJIAAAKQABAlgfAEIgBAJQgIAggVASIgKACQgUAJgUAKg");
	this.shape_22.setTransform(0,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(161,161,161,0.639)").s().p("AgOgEIASAAIAKAAIgBAEQgNAFgOAAg");
	this.shape_23.setTransform(7,-36);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(249,249,249,0.996)").s().p("ABKFkIg7AAIgCgGIgbgEIAAAKIgKAAIgKAAQABgFgCgBIgcgEIgKAAIgKAAQAAgFgCgBIgdgEQgZgKgZgIQgogLgKgpQARgDAIgPQABgCAEAAIAogFIABgFQAtAAAagSIAJgCIAWgcQADgCAEAAQAOggALglIAFgBIAAhQIAAgKIACgKQAEgZgQgDIAAgKIAAhkIAAgKIAAgUIABgKQAFgWgQACIAAgKQgCgmgIggIAAgKIAAg8IALgIIAJgCIA7AAIAJAAQAPAAAOgFIABgFQAmgHAPAOQADADAEAAQAQAdgFAzIgBAKQAOAQAFAYIABAKQAAAPAFANIAGACIAAAKIAAAKQAAAZAEAYIAGABIAAAKIAAAKQgBAPAFANQAAACAGAAIAAAoIAAAKQAAAcAEAdIAGABIAAB4IAAAKIgKAAIAAAeIAAAKIgCAJQgQAwgXArIgJABQgVAJgTAKIgKAAIgVAAIAAAKg");
	this.shape_24.setTransform(0,-1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(93,93,93,0.373)").s().p("AAZAFIg7AAIAAgJIA7AAIAJAAIAAAJg");
	this.shape_25.setTransform(2,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-36.7,48.1,73.3);


(lib.shape8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969596").s().p("AgNgFIAaAFQACAAAAADIgKABIgHACQgNAAACgLg");
	this.shape.setTransform(-5,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(34,34,34,0.388)").s().p("AgNgFIAaAFQACAAAAADIgKABIgHACQgMAAABgLg");
	this.shape_1.setTransform(-9,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(45,44,45,0.682)").s().p("AgIgJIAJAIIAJABIAAAJIgKABIAAAAQgOAAAGgTg");
	this.shape_2.setTransform(-22.6,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(150,150,150,0.765)").s().p("AACAOQgFgEgBgGQABgHAFgLIACAAIAAASIAAAKg");
	this.shape_3.setTransform(-22,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(120,120,120,0.741)").s().p("AAAAOQgFgFAGgOIACgIIAAARIAAAKg");
	this.shape_4.setTransform(-21.8,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#868485").s().p("AAAANQgFgNAAgNQAOgCgFAUIgBAKg");
	this.shape_5.setTransform(-1.9,-24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(156,156,156,0.949)").s().p("AAAANQgDgNgBgOIAIAAIAAASIAAAKg");
	this.shape_6.setTransform(-3,-34.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(87,87,87,0.769)").s().p("AAAATIgCgJIgIgKIAAgJIAKgIIAIgCIAAAKIABAJQAFAUgOAAIAAgBg");
	this.shape_7.setTransform(-20.4,-34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(132,132,132,0.545)").s().p("AgOgEIATAAIAKAAQAAAEgCAAIgbAEg");
	this.shape_8.setTransform(-18,-35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(49,48,49,0.584)").s().p("AAFAEIgSAAIAAgIIAaAEIACAEg");
	this.shape_9.setTransform(12,36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(251,250,250,0.996)").s().p("ACaFeIgdAAIgKAAIgBgGIgogEIgKAAIhiAAQABgGgCAAIgcgEIgKAAIgfAAQAAgGgBABIgwgGIgKgBQgcgLgXgSQABgEgDgEQgHgMgBgTIAAgKIAAgfQASgRgHgqIgBgLIAAgKIAAgUIAAgJIAAgTQABgGgIgPIACgDIAEgLIAEgLIgDgCIAAgEIAAgKIAAgJIAAgKIAAiyIAAgKQARgIgGghIgBgKIAAgKIAAgnIAAgKIAAgLQAQACgFgWIgBgKIAdgEQACgBAAgFIB3AAIAKAAQABAQAEANIAFABIAAA8IAAAKQABAPAEAOIAFABIAAAVIAAAKQAAATAFATIAFABIAAAfIAAAKQAAAUAEASIAFABIAAB2IAAALQgBATAFAUIAGABQAWBIBEAaIAKABQANASAkgHIAKgBQAGABACACQAcAWAPAkIgCAJQgSAvgpAYg");
	this.shape_10.setTransform(0,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(35,32,33,0.918)").s().p("ACfFsIgoAAIgBgFIgdgEIgKAAIgUAAIAAgGIhsgEIgKAAIgeAAQAAgFgBgBIgdgEIgKAAIgKAAIgBgGIgngEIgKAAQgdgBgLgUIAAgKIAAgKIAAgKQAXASAcALIAJABQAIASAggGIAKgBIAeAAIAKAAQgBAQAWgFIAJgBIBiAAIAKAAQADAQAbgFIAKgBIAKAAQAIARAfgMIABgFQApgYASgvIABgJQgOgkgcgWQgDgCgFgBIgBgEIg7gGIgJgBQhEgagWhIIAAgKQAGgbgPgDIAAgLIAAh2IABgKQAGgbgRgCIAAgKIAAgfIABgKQAGgbgRgCIAAgKIAAgVIABgJQAFgWgQABIAAgKIAAg8IAAgKIAAgUQAeAPgEA4QgBAKACAKQAXCAgCCVQAAAVAFASIAFACQAABGAwAXQACABAAAGQANAMAbACIAAAGIAyAAIAKAAQAlAXAVAmIACAJQABBag7AhQgCACAAAEg");
	this.shape_11.setTransform(1.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(47,46,46,0.573)").s().p("AgSgFIAkAFIABADIgKABIgKACQgPAAgCgLg");
	this.shape_12.setTransform(-14.5,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E7C7E").s().p("AgXgFIAuAFQABAAAAADIgKABIgOACQgSAAgFgLg");
	this.shape_13.setTransform(-13,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(50,50,50,0.816)").s().p("AAAAiQgDgiAAghIAHAAIAAATIAAAKIAAAdIAAAKg");
	this.shape_14.setTransform(-23,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(197,197,197,0.933)").s().p("AgFAYIAAgTIAAgIQAAgPAGgQIACAAIABALQAHAogQARg");
	this.shape_15.setTransform(-21.9,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#868585").s().p("AAAASQgFgSAAgSQAPACgGAZIgBAKg");
	this.shape_16.setTransform(-0.9,-18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(38,38,38,0.929)").s().p("AAABeQgEheAAhdIAIAAIAACyIAAAKg");
	this.shape_17.setTransform(-22,-9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(153,153,153,0.98)").s().p("AgFAPIAAgnIAIAAIABAKQAGAfgPAIg");
	this.shape_18.setTransform(-20.9,-22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(8,8,8,0.753)").s().p("AAFEaIgJgIQAAgEgCgFQgNgzAFhFQAPgXgBgvQgEiKAEiMQAAgoAEgpIAKAAIAAAKIAAAKIAAApIAAAKIAAAKIgKAAQAABeAFBfIAFAAIAAAKIAAAIIAAAEIACACIgEALIgEALIgBADQAHAPAAAGIgCAIQgIAPAHAFQgHALAAAJQAAAGAHAEQgHAQAAAPIAAAKIgIAAQAAAiAEAjIAEABQAAATAHAMQADAEAAAEIAAAKIAAAKg");
	this.shape_19.setTransform(-22.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(90,90,90,0.988)").s().p("AgEAYIAAgKIAAgKIAAgHIAAgUIAIAAIAAAlIAAAKg");
	this.shape_20.setTransform(-21,-27.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(21,21,21,0.878)").s().p("AgJAiIAAgJIAAgcQAPAAgGgVIAAgKIAHALIACAJIAAALIAAAIIgJAAIAAAUIAAAJg");
	this.shape_21.setTransform(-21.5,-30.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(33,32,33,0.443)").s().p("Ag2gFIBsAFIAAADIgnACIgUABQgfAAgSgLg");
	this.shape_22.setTransform(2,35.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6F6D6E").s().p("AgSgEIAbAAIAKAAIgBAEQgMAFgHAAQgNAAgEgJg");
	this.shape_23.setTransform(14.5,34.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8A8989").s().p("AgTgFIAmAFIABADIgKABIgLACQgPAAgDgLg");
	this.shape_24.setTransform(9.5,33.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8E8D8D").s().p("AgcgFIA4AFIABADIgKABIgRACQgVAAgJgLg");
	this.shape_25.setTransform(14.5,19.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7F7C7D").s().p("AAAATQgFgTAAgSQAPADgGAZIgBAKg");
	this.shape_26.setTransform(1.1,7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(40,40,40,0.471)").s().p("AAAASQgFgSAAgTQAPADgGAZIgBALg");
	this.shape_27.setTransform(3.1,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6E6C6D").s().p("AAAASQgFgSAAgSQAPACgGAZIgBAKg");
	this.shape_28.setTransform(0.1,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-36,49.2,73);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C93023").s().p("AgYB2IgmghQgygpgPg9QgIghADghQABgQAKgLIAIgIIAPgEQAnADAlAQIAGgaQAFgRALgIIASgHQAggGASAGIAYAIQAXARALAVQAKAVgCAVQgDAVgIAdIgIATIgPAXIgQAaIgHARIgLAwIgDAZIgEAYIgCAGQgugPgjggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-16.5,26.9,33.1);


(lib.shape2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}
	this.frame_83 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(56).call(this.frame_83).wait(1));

	// Layer 4
	this.instance = new lib.shape11("synched",0);
	this.instance.setTransform(2.2,-82.4,0.999,0.999,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,x:-0.5,y:-83},2).to({rotation:0.3,x:-2.8,y:-83.6},2).to({rotation:-1.8,x:-5.8,y:-84.4},3).to({rotation:-3.3,x:-8.1,y:-84.9},3).to({rotation:-3.8,x:-8.8,y:-85.1},1).to({rotation:-4.5,x:-9.8,y:-85.4},2).to({rotation:1.6,x:-1.4,y:-83.1},9).to({rotation:2.5,x:-0.2,y:-82.7},2).to({rotation:3,x:0.4},1).to({rotation:3.3,x:0.9,y:-82.4},1).to({rotation:3.7,x:2.2},2).to({rotation:1.8,x:-0.3,y:-83},4).to({rotation:1,x:-1.5,y:-83.3},2).to({rotation:0.8,x:-2.1},1).to({rotation:0.3,x:-2.6,y:-83.6},1).to({rotation:-0.8,x:-4.6,y:-84},4).to({rotation:-1.8,x:-6,y:-84.4},3).to({rotation:-2,x:-6.4,y:-84.5},1).to({rotation:-2.3,x:-6.8,y:-84.7},1).to({rotation:-2.8,x:-7.5},2).to({rotation:-3.3,x:-8.1,y:-85},2).to({rotation:-3.5,x:-8.5},1).to({rotation:-3.8,x:-8.8,y:-85.1},1).to({rotation:-4,x:-9.1},1).to({rotation:-4.3,x:-9.6,y:-85.3},2).to({rotation:-4.5,x:-9.8,y:-85.4},1).to({rotation:-4,x:-9.2,y:-85.3},1).to({rotation:-2.3,x:-7,y:-84.7},4).to({rotation:0.3,x:-3.3,y:-83.6},8).to({rotation:0.5,x:-2.9,y:-83.4},1).to({rotation:1.1,x:-2.1,y:-83.2},2).to({rotation:1.3,x:-1.7},1).to({rotation:2.8,x:0.2,y:-82.6},6).to({rotation:3,x:0.4,y:-82.7},1).to({rotation:3.3,x:0.9,y:-82.4},2).to({rotation:3.5,x:1.1},1).to({rotation:3.7,x:1.2},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.shape10("synched",0);
	this.instance_1.setTransform(0,-5.8,1,1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.8},1).to({rotation:1},1).to({rotation:-0.5},3).to({scaleX:1,scaleY:1,rotation:-2},3).to({scaleX:1,scaleY:1,rotation:-3.7},5).to({scaleX:1,scaleY:1,rotation:-3},1).to({scaleX:1,scaleY:1,rotation:1.3},9).to({rotation:1.6},1).to({rotation:2},1).to({rotation:2.3},1).wait(1).to({rotation:2.6},0).to({rotation:2.1},2).to({rotation:1.8},1).to({rotation:0.8},3).to({rotation:0.5},1).to({rotation:0.3},1).to({rotation:-3.7},20).to({scaleX:1,scaleY:1,rotation:-3},2).to({rotation:-2},3).to({scaleX:1,scaleY:1,rotation:0.3},10).to({rotation:0.5},1).to({rotation:0.8},1).to({rotation:1.3},3).to({rotation:1.8},3).to({rotation:2.6},5).wait(1));

	// Layer 2
	this.instance_2 = new lib.shape9("synched",0);
	this.instance_2.setTransform(-29.5,67.8,1,1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.98,scaleY:0.98,rotation:8,x:-29.3,y:67.9},1).to({scaleX:0.97,scaleY:0.97,x:-29.1,y:68},1).to({scaleX:0.95,scaleY:0.95,x:-28.9,y:68.2},1).to({scaleX:0.94,scaleY:0.94,x:-28.7},1).to({scaleX:0.93,scaleY:0.93,x:-28.6,y:68.3},1).to({scaleX:0.91,scaleY:0.91,x:-28.2,y:68.4},2).to({scaleX:0.89,scaleY:0.89,x:-28.1,y:68.6},1).to({scaleX:0.89,scaleY:0.89,x:-27.9},1).to({scaleX:0.88,scaleY:0.88,y:68.7},1).to({scaleX:0.86,scaleY:0.86,x:-27.6,y:68.8},2).to({scaleX:0.86,scaleY:0.86,rotation:8.1,x:-27.5},1).to({scaleX:0.89,scaleY:0.89,rotation:8,x:-27.9,y:68.6},2).to({scaleX:0.9,scaleY:0.9,x:-28.1,y:68.5},1).to({scaleX:0.91,scaleY:0.91,x:-28.3,y:68.4},1).to({scaleX:0.96,scaleY:0.96,x:-28.9,y:68.1},4).to({scaleX:0.97,scaleY:0.97,x:-29},1).to({scaleX:0.97,scaleY:0.97,x:-29.2,y:68},1).to({scaleX:0.98,scaleY:0.98,y:67.9},1).to({scaleX:0.99,scaleY:0.99,x:-29.4},1).to({scaleX:0.99,scaleY:0.99,y:67.8},1).wait(1).to({scaleX:1,scaleY:1,rotation:8.1,x:-29.5},0).to({startPosition:0},1).to({scaleX:0.99,scaleY:0.99,rotation:8,x:-29.4,y:67.9},1).to({scaleX:0.98,scaleY:0.98,x:-29.3},1).to({scaleX:0.98,scaleY:0.98,x:-29.2},1).to({scaleX:0.96,scaleY:0.96,x:-29.1,y:68.1},2).to({scaleX:0.95,scaleY:0.95,x:-28.8,y:68.2},2).to({scaleX:0.94,scaleY:0.94},1).to({scaleX:0.94,scaleY:0.94,x:-28.6,y:68.3},1).to({scaleX:0.93,scaleY:0.93},1).to({scaleX:0.92,scaleY:0.92,x:-28.5},1).to({scaleX:0.92,scaleY:0.92,x:-28.4,y:68.4},1).to({scaleX:0.91,scaleY:0.91,x:-28.3},1).to({scaleX:0.91,scaleY:0.91,x:-28.2},1).to({scaleX:0.9,scaleY:0.9,y:68.5},1).to({scaleX:0.9,scaleY:0.9,x:-28.1},1).to({scaleX:0.89,scaleY:0.89,x:-28},1).to({scaleX:0.88,scaleY:0.88,x:-27.9,y:68.7},3).to({scaleX:0.88,scaleY:0.88,x:-27.8,y:68.6},1).to({scaleX:0.87,scaleY:0.87,y:68.7},1).to({scaleX:0.87,scaleY:0.87,x:-27.7},1).to({scaleX:0.87,scaleY:0.87,x:-27.6,y:68.8},1).to({scaleX:0.86,scaleY:0.86},1).to({scaleX:0.86,scaleY:0.86,x:-27.5},1).to({scaleX:0.86,scaleY:0.86,x:-27.7},2).to({scaleX:0.87,scaleY:0.87,y:68.7},1).to({scaleX:0.88,scaleY:0.88,x:-27.8,y:68.6},1).to({scaleX:0.89,scaleY:0.89,x:-27.9},1).to({scaleX:0.89,scaleY:0.89,x:-28,y:68.5},1).to({scaleX:0.9,scaleY:0.9,x:-28.1},1).to({scaleX:0.91,scaleY:0.91,x:-28.2},1).to({scaleX:0.91,scaleY:0.91,x:-28.3,y:68.4},1).to({scaleX:0.92,scaleY:0.92,x:-28.4},1).to({scaleX:0.92,scaleY:0.92,y:68.3},1).to({scaleX:0.93,scaleY:0.93,x:-28.5},1).to({scaleX:0.94,scaleY:0.94,x:-28.6,y:68.2},1).to({scaleX:0.94,scaleY:0.94,x:-28.7},1).to({scaleX:0.95,scaleY:0.95,y:68.1},1).to({scaleX:0.95,scaleY:0.95,x:-28.8},1).to({scaleX:0.96,scaleY:0.96,x:-28.9},1).to({scaleX:0.97,scaleY:0.97,x:-29.1},3).to({scaleX:0.97,scaleY:0.97,x:-29.2,y:68},1).to({scaleX:0.98,scaleY:0.98,y:67.9},1).to({scaleX:0.99,scaleY:0.99,x:-29.4},3).to({scaleX:0.99,scaleY:0.99},1).to({scaleX:0.99,scaleY:0.99,y:67.8},1).to({scaleX:1,scaleY:1},1).to({scaleX:1,scaleY:1,rotation:8.1,x:-29.5},1).wait(1));

	// Layer 1
	this.instance_3 = new lib.shape8("synched",0);
	this.instance_3.setTransform(19.1,70.5,0.862,0.862,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9,scaleY:0.9,rotation:-3.5,x:19.8,y:71},2).to({scaleX:0.92,scaleY:0.92,x:20.1,y:71.1},1).to({scaleX:0.94,scaleY:0.94,x:20.3,y:71.3},1).to({scaleX:0.95,scaleY:0.95,x:20.6,y:71.4},1).to({scaleX:0.98,scaleY:0.98,rotation:-3.3,x:21.1,y:71.9},2).to({scaleX:1,scaleY:1,x:21.3},1).to({scaleX:1.02,scaleY:1.02,x:21.7,y:72.2},2).to({scaleX:1.04,scaleY:1.04,x:22,y:72.4},2).to({scaleX:1.04,scaleY:1.04,x:22.1,y:72.5},1).to({scaleX:1.02,scaleY:1.02,x:21.7,y:72.3},1).to({scaleX:1.01,scaleY:1.01,x:21.5,y:72.1},1).to({scaleX:0.97,scaleY:0.97,x:20.9,y:71.7},2).to({scaleX:0.93,scaleY:0.93,rotation:-3.5,x:20.2,y:71.3},3).to({scaleX:0.92,scaleY:0.92,x:20,y:71.1},1).to({scaleX:0.91,scaleY:0.91,x:19.8,y:71},1).to({scaleX:0.9,scaleY:0.9,x:19.6,y:70.8},1).to({scaleX:0.89,scaleY:0.89,rotation:-3.6,x:19.5,y:70.7},1).to({scaleX:0.87,scaleY:0.87,rotation:-3.8,x:19.2,y:70.6},2).wait(1).to({scaleX:0.86,scaleY:0.86,x:19.1,y:70.5},0).to({startPosition:0},1).to({scaleX:0.87,scaleY:0.87,x:19.2},1).to({scaleX:0.92,scaleY:0.92,rotation:-3.5,x:20.1,y:71.1},5).to({scaleX:0.93,scaleY:0.93,y:71.2},1).to({scaleX:0.94,scaleY:0.94,x:20.3,y:71.3},1).to({scaleX:0.94,scaleY:0.94,x:20.5,y:71.4},1).to({scaleX:0.95,scaleY:0.95},1).to({scaleX:0.96,scaleY:0.96,x:20.7,y:71.5},1).to({scaleX:0.97,scaleY:0.97,x:20.8,y:71.6},1).to({scaleX:0.97,scaleY:0.97,rotation:-3.3,x:20.9,y:71.7},1).to({scaleX:0.98,scaleY:0.98,x:21.1,y:71.8},1).to({scaleX:0.99,scaleY:0.99,x:21.2},1).to({scaleX:0.99,scaleY:0.99,y:71.9},1).to({scaleX:1,scaleY:1,x:21.4},1).to({scaleX:1,scaleY:1,y:72},1).to({scaleX:1.01,scaleY:1.01,x:21.5,y:72.1},1).to({scaleX:1.01,scaleY:1.01,x:21.6},1).to({scaleX:1.03,scaleY:1.03,x:21.8,y:72.4},3).to({scaleX:1.04,scaleY:1.04,x:22},2).to({scaleX:1.04,scaleY:1.04,x:22.1},1).to({scaleX:1.04,scaleY:1.04,y:72.5},1).to({scaleX:1.03,scaleY:1.03,x:21.9,y:72.3},1).to({scaleX:1.02,scaleY:1.02,x:21.7},1).to({scaleX:1.02,scaleY:1.02,x:21.6,y:72.2},1).to({scaleX:1.01,scaleY:1.01,x:21.5,y:72.1},1).to({scaleX:1,scaleY:1,x:21.4,y:72},1).to({scaleX:0.98,scaleY:0.98,x:21,y:71.8},2).to({scaleX:0.97,scaleY:0.97,x:20.9,y:71.7},1).to({scaleX:0.96,scaleY:0.96,rotation:-3.5,x:20.7,y:71.6},2).to({scaleX:0.95,scaleY:0.95,x:20.6,y:71.5},1).to({scaleX:0.94,scaleY:0.94,x:20.4,y:71.4},1).to({scaleX:0.94,scaleY:0.94,y:71.3},1).to({scaleX:0.93,scaleY:0.93,x:20.2},1).to({scaleX:0.92,scaleY:0.92,x:20.1,y:71.1},1).to({scaleX:0.92,scaleY:0.92,x:20},1).to({scaleX:0.91,scaleY:0.91,x:19.9,y:71},1).to({scaleX:0.91,scaleY:0.91,x:19.8},1).to({scaleX:0.9,scaleY:0.9,x:19.7,y:70.9},1).to({scaleX:0.9,scaleY:0.9,x:19.6,y:70.8},1).to({scaleX:0.89,scaleY:0.89,rotation:-3.6,x:19.5},1).to({scaleX:0.89,scaleY:0.89,y:70.7},1).to({scaleX:0.88,scaleY:0.88,x:19.3,y:70.6},2).to({scaleX:0.87,scaleY:0.87,rotation:-3.8,x:19.2},1).to({scaleX:0.87,scaleY:0.87},1).to({scaleX:0.86,scaleY:0.86,x:19.1,y:70.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,-106.7,242.2,212.3);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14},14).to({startPosition:0},14).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-16.5,26.9,33.1);


(lib.shape5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(180.5,165);
	this.instance.filters = [new cjs.ColorFilter(0.82, 0.82, 0.82, 1, 45.9, 45.9, 45.9, 0)];
	this.instance.cache(-182,-167,365,334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,330);


(lib.button35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.text30Up("synched",0);
	this.instance.setTransform(-16.3,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Layer 2
	this.instance_1 = new lib.shape28Up("synched",0);

	this.instance_2 = new lib.text32OverDown("synched",0);
	this.instance_2.setTransform(-16.3,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 1
	this.instance_3 = new lib.shape31OverDown("synched",0);

	this.instance_4 = new lib.shape33Hit("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-21.5,47.5,40.9);


(lib.button34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.text30Up("synched",0);
	this.instance.setTransform(-16.3,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Layer 2
	this.instance_1 = new lib.shape28Up("synched",0);

	this.instance_2 = new lib.text32OverDown("synched",0);
	this.instance_2.setTransform(-16.3,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 1
	this.instance_3 = new lib.shape31OverDown("synched",0);

	this.instance_4 = new lib.shape33Hit("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-21.5,47.5,40.9);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}
	this.frame_1 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}
	this.frame_2 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}
	this.frame_249 = function() {
		/* //Warning: in this unregistered version, no Action Script will be generated while exporting the FLA. Please purchase the full version to get Action Script at http://www.sothink.com/product/flashdecompiler/index.htm.*/
	}
	this.frame_408 = function() {
		this.stop();
		var that = this;
		
		this.qwe.addEventListener("click", function(){
				that.play();
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(247).call(this.frame_249).wait(159).call(this.frame_408).wait(1));

	// Layer 24
	this.instance = new lib.text23("synched",0);
	this.instance.setTransform(11.7,263,0.946,0.946);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(367).to({_off:false},0).to({y:269.8,alpha:0.34},3).to({y:275.2,alpha:0.609},3).to({y:279.2,alpha:0.809},3).to({y:281.8,alpha:0.941},3).to({y:282.9,alpha:1},3).wait(1).to({y:283},0).wait(26));

	// Layer 23
	this.instance_1 = new lib.text26("synched",0);
	this.instance_1.setTransform(171.2,237.6,0.525,0.525);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(373).to({_off:false},0).to({y:244,alpha:0.34},3).to({y:249.2,alpha:0.609},3).to({y:252.9,alpha:0.809},3).to({y:255.4,alpha:0.941},3).to({y:256.5,alpha:1},3).wait(1).to({y:256.6},0).wait(20));

	// Layer 22
	this.instance_2 = new lib.text24("synched",0);
	this.instance_2.setTransform(10.3,230,1.16,1.16);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(373).to({_off:false},0).to({y:236.4,alpha:0.34},3).to({y:241.6,alpha:0.609},3).to({y:245.3,alpha:0.809},3).to({y:247.8,alpha:0.941},3).to({y:248.9,alpha:1},3).wait(1).to({y:249},0).wait(20));

	// Layer 21
	this.instance_3 = new lib.text27("synched",0);
	this.instance_3.setTransform(-19.7,201.6,0.966,0.966);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(380).to({_off:false},0).to({y:208.3,alpha:0.34},3).to({y:213.7,alpha:0.609},3).to({y:217.7,alpha:0.809},3).to({y:220.3,alpha:0.941},3).to({y:221.4,alpha:1},3).wait(1).to({y:221.6},0).wait(13));

	// Layer 17
	this.instance_4 = new lib.button34();
	this.instance_4.setTransform(336.4,300.7);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_4.cache(-22,-23,52,45);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.button34(), 3);

	this.qwe = new lib.button35();
	this.qwe.setTransform(336.4,300.7);
	new cjs.ButtonHelper(this.qwe, 0, 1, 2, false, new lib.button35(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},399).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.qwe}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(399).to({_off:false},0).wait(8).to({_off:true},1).wait(1));

	// Layer 15
	this.instance_5 = new lib.sprite7();
	this.instance_5.setTransform(258.9,172,0.405,0.405);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({scaleX:0.64,scaleY:0.64,alpha:0.391},5).to({scaleX:0.78,scaleY:0.78,alpha:0.629},4).to({scaleX:0.81,scaleY:0.81,alpha:0.68},1).to({scaleX:0.84,scaleY:0.84,alpha:0.73},1).to({scaleX:0.86,scaleY:0.86,alpha:0.77},1).to({scaleX:0.93,scaleY:0.93,alpha:0.879},3).to({scaleX:0.99,scaleY:0.99,alpha:0.98},5).to({scaleX:1,scaleY:1,alpha:1},2).wait(1).to({scaleX:1,scaleY:1},0).wait(319));

	// Layer 14
	this.instance_6 = new lib.shape18("synched",0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(366).to({_off:false},0).wait(43));

	// Layer 13
	this.instance_7 = new lib.text22("synched",0);
	this.instance_7.setTransform(107.1,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(367).to({_off:false},0).wait(42));

	// Layer 12
	this.instance_8 = new lib.text21("synched",0);
	this.instance_8.setTransform(107,29.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(367).to({_off:false},0).wait(42));

	// Layer 11
	this.instance_9 = new lib.shape16("synched",0);
	this.instance_9.setTransform(250,294);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.text20("synched",0);
	this.instance_10.setTransform(262.5,-1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},277).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},2).to({state:[]},1).to({state:[{t:this.instance_10}]},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(277).to({_off:false},0).to({alpha:0.02},3).to({alpha:0.129},9).to({alpha:0.199},5).to({alpha:0.34},8).to({alpha:0.52},8).to({alpha:0.73},8).to({alpha:0.969},8).wait(1).to({alpha:1},0).to({startPosition:0},4).to({scaleX:0.61,scaleY:0.61,x:258.2,y:230.3},16).to({scaleX:0.48,scaleY:0.48,x:260.9,y:209},8).to({scaleX:0.47,scaleY:0.47,x:261.2,y:206.8},1).to({scaleX:0.46,scaleY:0.46,x:261.4,y:204.7},1).to({scaleX:0.43,scaleY:0.43,x:261.9,y:200.9},2).to({scaleX:0.42,scaleY:0.42,x:262.1,y:199.2},1).to({scaleX:0.41,scaleY:0.41,x:262.3,y:197.6},1).to({scaleX:0.4,scaleY:0.4,x:262.5,y:196},1).to({scaleX:0.4,scaleY:0.4,x:262.7,y:194.6},1).to({scaleX:0.38,scaleY:0.38,x:263,y:192.1},2).to({_off:true},1).wait(43));

	// Layer 6
	this.heartBuddy = new lib.sprite12();
	this.heartBuddy.setTransform(258,170.5,0.096,0.096);
	this.heartBuddy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.heartBuddy).wait(109).to({_off:false},0).to({scaleX:0.1,scaleY:0.1,x:257.9,y:170.6},1).to({scaleX:0.1,scaleY:0.1},1).to({scaleX:0.11,scaleY:0.11,x:257.8},1).to({scaleX:0.11,scaleY:0.11},1).to({scaleX:0.11,scaleY:0.11,x:257.7,y:170.7},1).to({scaleX:0.12,scaleY:0.12},1).to({scaleX:0.12,scaleY:0.12,x:257.6},1).to({scaleX:0.13,scaleY:0.13},1).to({scaleX:0.13,scaleY:0.13,x:257.5,y:170.8},2).to({scaleX:0.14,scaleY:0.14,x:257.4},1).to({scaleX:0.14,scaleY:0.14,x:257.3,y:170.9},1).to({scaleX:0.14,scaleY:0.14},1).to({scaleX:0.15,scaleY:0.15,x:257.2,y:171},2).to({scaleX:0.16,scaleY:0.16,x:257.1},1).to({scaleX:0.16,scaleY:0.16,x:257},1).to({scaleX:0.17,scaleY:0.17,y:171.1},1).to({scaleX:0.17,scaleY:0.17,x:256.9,y:171},1).to({scaleX:0.17,scaleY:0.17,y:171.1},1).to({scaleX:0.18,scaleY:0.18,x:256.8,y:171.2},1).to({scaleX:0.18,scaleY:0.18,x:256.7},1).to({scaleX:0.19,scaleY:0.19,x:256.6,y:171.3},2).to({scaleX:0.2,scaleY:0.2,x:256.5},1).to({scaleX:0.2,scaleY:0.2},1).to({scaleX:0.21,scaleY:0.21,x:256.4,y:171.4},1).to({scaleX:0.21,scaleY:0.21,x:256.3},1).to({scaleX:0.22,scaleY:0.22},1).to({scaleX:0.22,scaleY:0.22,x:256.2,y:171.5},1).to({scaleX:0.23,scaleY:0.23},1).to({scaleX:0.23,scaleY:0.23,x:256.1,y:171.6},1).to({scaleX:0.24,scaleY:0.24,x:256},1).to({scaleX:0.24,scaleY:0.24,x:255.9},1).to({scaleX:0.25,scaleY:0.25,x:255.8,y:171.7},1).to({scaleX:0.25,scaleY:0.25},1).to({scaleX:0.26,scaleY:0.26,x:255.7,y:171.8},1).to({scaleX:0.26,scaleY:0.26,x:255.6},1).to({scaleX:0.27,scaleY:0.27},1).to({scaleX:0.27,scaleY:0.27,x:255.5,y:171.9},1).to({scaleX:0.28,scaleY:0.28,x:255.4},1).to({scaleX:0.28,scaleY:0.28,x:255.3,y:172},1).to({scaleX:0.29,scaleY:0.29,x:255.2},1).to({scaleX:0.31,scaleY:0.31,x:254.9,y:172.2},4).to({scaleX:0.32,scaleY:0.32,x:254.8,y:172.3},2).to({scaleX:0.33,scaleY:0.33,x:254.6},1).to({scaleX:0.33,scaleY:0.33,y:172.4},1).to({scaleX:0.34,scaleY:0.34,x:254.5},1).to({scaleX:0.35,scaleY:0.35,x:254.3,y:172.5},2).to({scaleX:0.36,scaleY:0.36,x:254.2,y:172.6},1).to({scaleX:0.36,scaleY:0.36,x:254.1},1).to({scaleX:0.37,scaleY:0.37},1).to({scaleX:0.38,scaleY:0.38,x:253.9,y:172.7},1).to({scaleX:0.38,scaleY:0.38},1).to({scaleX:0.41,scaleY:0.41,x:253.5,y:172.9},4).to({scaleX:0.43,scaleY:0.43,x:253.2,y:173.1},3).to({scaleX:0.44,scaleY:0.44,x:253,y:173.2},2).to({scaleX:0.48,scaleY:0.48,x:252.5,y:173.5},5).to({scaleX:0.48,scaleY:0.48},1).to({scaleX:0.49,scaleY:0.49,x:252.3,y:173.6},1).to({scaleX:0.51,scaleY:0.51,x:252,y:173.7},3).to({scaleX:0.53,scaleY:0.53,x:251.8,y:173.9},2).to({scaleX:0.54,scaleY:0.54,x:251.7},1).to({scaleX:0.54,scaleY:0.54,x:251.6,y:174},1).to({scaleX:0.56,scaleY:0.56,x:251.3,y:174.1},2).to({scaleX:0.56,scaleY:0.56,x:251.2,y:174.2},1).to({scaleX:0.6,scaleY:0.6,x:250.8,y:174.4},4).to({scaleX:0.6,scaleY:0.6,x:250.7,y:174.5},1).to({scaleX:0.62,scaleY:0.62,x:250.4,y:174.6},2).to({scaleX:0.64,scaleY:0.64,x:250.2,y:174.8},2).to({scaleX:0.64,scaleY:0.64,x:250.1},1).to({scaleX:0.67,scaleY:0.67,x:249.7,y:175},3).to({scaleX:0.68,scaleY:0.68},1).to({scaleX:0.72,scaleY:0.72,x:249,y:175.3},5).to({scaleX:0.73,scaleY:0.73,x:248.9,y:175.4},1).to({scaleX:0.74,scaleY:0.74,x:248.8,y:175.5},1).to({scaleX:0.75,scaleY:0.75,x:248.6,y:175.6},1).to({scaleX:0.75,scaleY:0.75},1).to({scaleX:0.76,scaleY:0.76,x:248.4,y:175.7},1).to({scaleX:0.77,scaleY:0.77,x:248.3,y:175.8},1).to({scaleX:0.78,scaleY:0.78,x:248.1},1).to({scaleX:0.79,scaleY:0.79,x:248,y:175.9},1).to({scaleX:0.8,scaleY:0.8,x:247.9,y:176},1).to({scaleX:0.81,scaleY:0.81,x:247.7},1).to({scaleX:0.82,scaleY:0.82,x:247.6,y:176.1},1).to({scaleX:0.83,scaleY:0.83,x:247.5,y:176.2},1).to({scaleX:0.84,scaleY:0.84,x:247.3},1).to({scaleX:0.85,scaleY:0.85,y:176.3},1).to({scaleX:0.85,scaleY:0.85,x:247.1,y:176.4},1).to({scaleX:0.88,scaleY:0.88,x:246.7,y:176.6},3).to({scaleX:0.89,scaleY:0.89,x:246.5,y:176.7},1).to({scaleX:0.9,scaleY:0.9,x:246.4,y:176.8},1).to({scaleX:0.91,scaleY:0.91,x:246.3},1).to({scaleX:0.92,scaleY:0.92,x:246.1,y:177},1).to({scaleX:0.93,scaleY:0.93,x:246},1).to({scaleX:0.94,scaleY:0.94,x:245.8,y:177.1},1).to({scaleX:0.95,scaleY:0.95,x:245.7},1).to({scaleX:0.96,scaleY:0.96,x:245.6,y:177.2},1).to({scaleX:0.99,scaleY:0.99,x:245.2,y:177.4},3).wait(1).to({scaleX:1,scaleY:1,x:245,y:177.5},0).wait(166));

	// Layer 5
	this.instance_11 = new lib.shape14("synched",0);
	this.instance_11.setTransform(218.4,172.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(261).to({_off:false},0).to({alpha:0.801},4).wait(1).to({alpha:1},0).wait(143));

	// Mask Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_42 = new cjs.Graphics().p("AlxPzQkxkeABmUQgBmRExkeQExkdGtAAQGvAAExEdQExEeAAGRQAAGUkxEeQkxEdmvAAQmtAAkxkdg");
	var mask_graphics_43 = new cjs.Graphics().p("AlzPzQkykeAAmVQAAmTEykeQExkeGuAAQGwAAExEeQEyEeAAGTQAAGVkyEeQkxEfmwAAQmuAAkxkfg");
	var mask_graphics_44 = new cjs.Graphics().p("Al7P2Qk0khAAmYQAAmWE0khQE0kgGxAAQGyAAE0EgQE0EhAAGWQAAGYk0EhQk0EhmyAAQmxAAk0khg");
	var mask_graphics_45 = new cjs.Graphics().p("AmIP6Qk3klAAmdQAAmcE3klQE3kkG2AAQG4AAE3EkQE3ElAAGcQAAGdk3ElQk3Ekm4AAQm2AAk3kkg");
	var mask_graphics_46 = new cjs.Graphics().p("AmaQAQk9kqABmlQgBmkE9kqQE8kqG9AAQG/AAE8EqQE8EqAAGkQAAGlk8EqQk8Eqm/AAQm9AAk8kqg");
	var mask_graphics_47 = new cjs.Graphics().p("Am1QIQlDkyAAmwQAAmuFDkyQFEkyHHAAQHJAAFDEyQFDEyAAGuQAAGwlDEyQlDExnJAAQnHAAlEkxg");
	var mask_graphics_48 = new cjs.Graphics().p("AnPQQQlLk6ABm7QgBm5FLk5QFLk6HRAAQHSAAFLE6QFLE5AAG5QAAG7lLE6QlLE5nSAAQnRAAlLk5g");
	var mask_graphics_49 = new cjs.Graphics().p("An2QcQlWlFABnMQgBnJFWlFQFVlFHgAAQHiAAFVFFQFWFFAAHJQAAHMlWFFQlVFFniAAQngAAlVlFg");
	var mask_graphics_50 = new cjs.Graphics().p("AoeQoQlglRABncQgBnaFglQQFglRHwAAQHxAAFgFRQFfFQAAHaQAAHclfFRQlgFQnxAAQnwAAlglQg");
	var mask_graphics_51 = new cjs.Graphics().p("ApFQ0QlrlcAAntQAAnqFrlcQFqlcH/AAQIAAAFrFcQFqFcAAHqQAAHtlqFcQlrFcoAAAQn/AAlqlcg");
	var mask_graphics_52 = new cjs.Graphics().p("Ap8REQl6lsABoDQgBoCF6lsQF5lsIUAAQIVAAF6FsQF6FsAAICQAAIDl6FsQl6FtoVAAQoUAAl5ltg");
	var mask_graphics_53 = new cjs.Graphics().p("AqzRVQmJl8ABobQgBoYGJl9QGIl8IpAAQIrAAGIF8QGJF9AAIYQAAIbmJF8QmIF9orAAQopAAmIl9g");
	var mask_graphics_54 = new cjs.Graphics().p("ArqRmQmYmNABoxQgBovGYmNQGXmNI+AAQJAAAGXGNQGYGNAAIvQAAIxmYGNQmXGNpAAAQo+AAmXmNg");
	var mask_graphics_55 = new cjs.Graphics().p("AssR6QmpmgAApNQAApKGpmhQGqmgJXAAQJYAAGqGgQGpGhAAJKQAAJNmpGgQmqGgpYAAQpXAAmqmgg");
	var mask_graphics_56 = new cjs.Graphics().p("At9STQnAm4ABpvQgBpsHAm5QG/m4J3AAQJ4AAG/G4QHAG5AAJsQAAJvnAG4Qm/G4p4AAQp3AAm/m4g");
	var mask_graphics_57 = new cjs.Graphics().p("AvOSsQnWnQAAqRQAAqOHWnRQHVnQKWAAQKXAAHVHQQHWHRAAKOQAAKRnWHQQnVHQqXAAQqWAAnVnQg");
	var mask_graphics_58 = new cjs.Graphics().p("AwgTFQnrnoAAqzQAAqwHrnpQHsnnK1AAQK2AAHsHnQHrHpAAKwQAAKznrHoQnsHoq2AAQq1AAnsnog");
	var mask_graphics_59 = new cjs.Graphics().p("AxxTdQoCn/ABrVQgBrSICoAQICoALUAAQLVAAICIAQICIAAALSQAALVoCH/QoCIBrVAAQrUAAoCoBg");
	var mask_graphics_60 = new cjs.Graphics().p("AzCUOQoYoYAAr2QAAr1IYoYQIYoYLzAAQL0AAIYIYQIYIYAAL1QAAL2oYIYQoYIYr0AAQrzAAoYoYg");
	var mask_graphics_61 = new cjs.Graphics().p("A0pVWQozo2AAsgQAAsfIzo3QI0o2MbAAQMcAAIzI2QI0I3AAMfQAAMgo0I2QozI3scAAQsbAAo0o3g");
	var mask_graphics_62 = new cjs.Graphics().p("A2PWfQpPpUAAtLQAAtKJPpVQJPpUNCAAQNEAAJPJUQJPJVAANKQAANLpPJUQpPJVtEAAQtCAApPpVg");
	var mask_graphics_63 = new cjs.Graphics().p("A3VXoQprpyAAt2QAAt1JrpzQJrpyNqAAQNqAAJrJyQJsJzAAN1QAAN2psJyQprJztqAAQtqAAprpzg");
	var mask_graphics_64 = new cjs.Graphics().p("A4iY8QqMqVABunQgBumKMqWQKLqVOXAAQOXAAKMKVQKLKWAAOmQAAOnqLKVQqMKWuXAAQuXAAqLqWg");
	var mask_graphics_65 = new cjs.Graphics().p("A5waQQqrq4ABvYQgBvXKrq5QKsq3PEAAQPFAAKrK3QKrK5AAPXQAAPYqrK4QqrK4vFAAQvEAAqsq4g");
	var mask_graphics_66 = new cjs.Graphics().p("A69bkQrMrbABwJQgBwILMrcQLLraPyAAQPyAALLLaQLMLcAAQIQAAQJrMLbQrLLbvyAAQvyAArLrbg");
	var mask_graphics_67 = new cjs.Graphics().p("A8Rc/QrvsAABw/QgBw+LvsBQLusBQjAAQQjAALvMBQLuMBAAQ+QAAQ/ruMAQrvMCwjAAQwjAArusCg");
	var mask_graphics_68 = new cjs.Graphics().p("A9rehQsTspAAx4QAAx3MTspQMUspRXAAQRYAAMTMpQMUMpAAR3QAAR4sUMpQsTMpxYAAQxXAAsUspg");
	var mask_graphics_69 = new cjs.Graphics().p("EgfEAgCQs5tRAByxQgBywM5tRQM4tRSMAAQSMAAM4NRQM5NRAASwQAASxs5NRQs4NRyMAAQyMAAs4tRg");
	var mask_graphics_70 = new cjs.Graphics().p("EggjAhoQtgt7ABztQgBzsNgt8QNgt8TDAAQTDAANgN8QNgN8AATsQAATttgN7QtgN9zDAAQzDAAtgt9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_graphics_42,x:140.6,y:129.7}).wait(1).to({graphics:mask_graphics_43,x:140.8,y:129.8}).wait(1).to({graphics:mask_graphics_44,x:141.2,y:130.3}).wait(1).to({graphics:mask_graphics_45,x:142,y:131.1}).wait(1).to({graphics:mask_graphics_46,x:143.1,y:132.2}).wait(1).to({graphics:mask_graphics_47,x:144.6,y:133.8}).wait(1).to({graphics:mask_graphics_48,x:146.1,y:135.4}).wait(1).to({graphics:mask_graphics_49,x:148.4,y:137.7}).wait(1).to({graphics:mask_graphics_50,x:150.7,y:140.1}).wait(1).to({graphics:mask_graphics_51,x:153,y:142.4}).wait(1).to({graphics:mask_graphics_52,x:156.2,y:145.7}).wait(1).to({graphics:mask_graphics_53,x:159.4,y:149}).wait(1).to({graphics:mask_graphics_54,x:162.6,y:152.4}).wait(1).to({graphics:mask_graphics_55,x:166.5,y:156.3}).wait(1).to({graphics:mask_graphics_56,x:171.2,y:161.2}).wait(1).to({graphics:mask_graphics_57,x:176,y:166.1}).wait(1).to({graphics:mask_graphics_58,x:180.7,y:170.9}).wait(1).to({graphics:mask_graphics_59,x:185.4,y:175.8}).wait(1).to({graphics:mask_graphics_60,x:190.2,y:178.4}).wait(1).to({graphics:mask_graphics_61,x:196.1,y:180.4}).wait(1).to({graphics:mask_graphics_62,x:202.1,y:182.4}).wait(1).to({graphics:mask_graphics_63,x:204.8,y:184.4}).wait(1).to({graphics:mask_graphics_64,x:207.6,y:186.7}).wait(1).to({graphics:mask_graphics_65,x:210.5,y:188.9}).wait(1).to({graphics:mask_graphics_66,x:213.3,y:191.2}).wait(1).to({graphics:mask_graphics_67,x:216.3,y:193.8}).wait(1).to({graphics:mask_graphics_68,x:219.6,y:196.4}).wait(1).to({graphics:mask_graphics_69,x:222.8,y:199}).wait(1).to({graphics:mask_graphics_70,x:226.1,y:201.9}).wait(339));

	// Masked Layer 3 - 2
	this.instance_12 = new lib.shape5("synched",0);
	this.instance_12.setTransform(0.2,-0.6);
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).wait(367));

	// Layer 1
	this.instance_13 = new lib.shape2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(409));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;