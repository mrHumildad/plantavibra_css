const container = document.getElementById("bolos-container")
const next = document.getElementById("next")
const data = {
    next: {
      img: './img/cartelForn.jpg'
    },
    bolos: [
      {
        title: 'IMPLANTACIÓN 01',
        img: './img/figa.png',
        link: 'https://youtu.be/ToZSPY-I2NA',
        infoLink: 'blank',
      },
      {
        title: 'IMPLANTACIÓN 02',
        img: './img/sinestesia.png',
        link: 'https://youtu.be/Uq7W1PfTmJI',
        infoLink: 'blank',
      },
      {
        title: 'IMPLANTACIÓN 03',
        img: './img/niu.png',
        link: 'https://youtu.be/2qzouZsFKm4',
        infoLink: 'blank',
      },
      {
        title: 'IMPLANTACIÓN 04',
        img: './img/zwikau.png',
        link: 'https://youtu.be/lerEpxIW37c',
        infoLink: 'blank',
      },
    ]
  }
  if (data.next) {
    nextImg = document.createElement('img');
    nextImg.src = data.next.img;
    nextImg.classList.add('next')
    next.appendChild(nextImg)
  }
  const bolo2html = (data) => {
    let bolo = document.createElement('div');
    bolo.classList.add("bolo");
    bolo.style.backgroundImage = "url('./"+ data.img + "')";
    let boloTitle = document.createElement("span");
    boloTitle.classList.add("bolo-title");
    let textoTitulo = document.createTextNode(data.title);
    boloTitle.appendChild(textoTitulo);
    bolo.appendChild(boloTitle);
    return bolo;
  }
let frag = new DocumentFragment;
frag.appendChild(next)
const bolos = data.bolos.reverse();
for (let i = 0; i < bolos.length; i++) {
  const bolo = bolos[i];
  let c = bolo2html(bolo);
  frag.appendChild(c)
}
container.append(frag)