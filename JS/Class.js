function Class(){}

Class.Extends = function(props){

  var Parent = this;
  var proto;

  Parent['extending'] = true;
  proto = new Parent();
  delete Parent['extending'];

  for (prop in props){
    proto[prop] = props[prop]
  }

  function Class (){
    if (!Class['extending'] && typeof proto.init == 'function'){
      proto.init.apply(this,arguments);
    }
  }

  Class.prototype = proto;
  Class.prototype.constructor = Class;

  Class.Extends = Parent.Extends;
  return Class
}