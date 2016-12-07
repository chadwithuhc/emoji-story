/**
 * Emoji Story Library
 **/

function Screen() {
  this.$el = $('#story');
  this.update.apply(this, arguments);
}

Screen.prototype.items = [];
Screen.prototype.queue = [];
Screen.prototype.currentIndex = 0;

Screen.prototype.start = function() {
  this.next();
}

Screen.prototype.show = function(className) {
  this.queue.push([
    function() {
      this.items.forEach(function(item) {
        this.$el.append(item);
      }.bind(this));
      this.$el.show().addClass(className + ' animated');
    },
    0
  ]);
}

Screen.prototype.hide = function(className, timeout) {
  this.queue.push([
    function() {
      this.$el.attr('class', '');
      this.$el.addClass(className + ' animated');
    },
    (timeout || 0) * 1000
  ]);
  this.queue.push([
    function() {
      this.$el.hide().html('');
      this.$el.attr('class', '');
    },
    1000
  ]);
}

Screen.prototype.update = function() {
  var args = arguments;
  this.queue.push([
    function() {
      this.items = Array.prototype.slice.call(args);
    },
    0
  ]);
}

Screen.prototype.next = function() {
  if (this.currentIndex === this.queue.length) {
    this.currentIndex = 0;
  }

  var current = this.queue[this.currentIndex];
  setTimeout(function() {
    current[0].call(this);
    this.next();
  }.bind(this), current[1] || 0);

  this.currentIndex++;
}

function Icon(iconName) {
  return '<i class="em ' + iconName + '"></i>';
}

function Text(value) {
  return '<p>' + value + '</p>';
}
