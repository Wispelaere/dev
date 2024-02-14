let name = "Little Mac";
let life = 100;



function getPunched(){
  life=life-10;
  console.log("il reste " + life + " de points de vie à " + name);
  
}

function getKick(kick){
  life=life-kick;
  console.log("il restera" + life + " point de vie à " + name);
   recoverLife();
}

function recoverLife(){
  if(life <= 0)
    life=100;
  console.log("il revient a la vie avec " + life + " santé ")
}

