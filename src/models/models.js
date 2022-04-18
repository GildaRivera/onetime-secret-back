const Secret = {
  id: "",
  url: "",
  secret: "",
  count: 1,
  hash:""
};
const Secrets = [];
let counter = 0;
exports.addSecret = (newSecret) => {
  let hash = generateHash();
  if(!newSecret.count){
    newSecret["count"] = 1;
  }
  newSecret["url"] = `http://localhost:8080/api/secret-url/${hash}`;
  newSecret["id"] = Secrets.length + 1;
  newSecret["hash"] =hash
  Secrets.push(newSecret);
  counter = counter + 1;
  return newSecret;
};

exports.getSecret = (id) => {
  let verify = countSecret(id)
  if(verify){
    let element = searchSecret(id);
    if (!element) {
      return null;
    }
  
    return element;
  }
 return false
};
exports.getAll = () => {
  return Secrets;
};
const searchSecret = (hash) => {
  let e = Secrets.find((element) => {
    if (element.hash == hash) {
      element.count = element.count - 1;
      return element;
    }
  });
  return e;
};
const countSecret = (hash) => {
  let element = Secrets.find((element) => {
    if (element.hash == hash) {
      return element;
    }
  });
  if(element.count==0){
    return false
  }
  return true;
};

function getrandom() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function generateHash() {
  let hash = getrandom();
  return hash;
}
