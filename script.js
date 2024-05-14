const AS_URL_BASE =
  "https://script.google.com/macros/s/AKfycbxGx5CJu96BKwYVZrNW2KaoWkjBj9DIjgLtQ4yvhAxkDjyhI2EjshEx9YR_MeG4_8qI5Q/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + "?k=" + k)
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch((err) => console.log(err));
}
