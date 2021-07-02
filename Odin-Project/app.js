const body = document.body
body.setAttribute('style', 'margin: 0;')

const div = document.createElement('div');
// //div.innerText = "Hello World";
// div.textContent = "Hello World 2";

body.append(div);

const p = document.createElement('p');
p.innerText = "Hello World";
p.setAttribute('style', 'color: white; background: grey; font-size: 20px; margin: 0;')
body.append(p);

div.setAttribute('id', 'theDiv');
div.textContent = "Hello World :-)";
div.innerHTML = "<b>Taksim is beautiful</b>";