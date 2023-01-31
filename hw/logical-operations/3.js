// Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let hidden = function(value) {
  if (value === "hidden") {
    hidden = "visible";
  } else {
    hidden = "hidden";
  }
  return hidden;
};



console.log(hidden("hidden"));