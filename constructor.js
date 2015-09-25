
var Cat = function(name, owner){
  this.name = name;
  this.owner =  owner;
};

Cat.prototype.cuteStatement = function(){
  console.log(this.owner + " loves " + this.name);
};

Cat.prototype.cuteStatement = function(){
  console.log("Everyone loves " + this.name);
};

Cat.prototype.meow = function(){
  console.log("Meow");
};


c1 = new Cat("Meows", "Me");
c2 = new Cat("Hams", "Aliyah");

c1.cuteStatement();
c2.cuteStatement();

c1.meow();
c2.meow = function(){
  console.log("Purrrrrr");
};

c2.meow();
c1.meow();
