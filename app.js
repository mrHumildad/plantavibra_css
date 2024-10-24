const container = document.getElementById("bolos-container")
//const next = document.getElementById("next")
const data = {
    next: [
      {
        title: '#06 TELENOIKA',
        img: './img/fondonext.png',
        infoLink: './boloPages/telenoika.html',
        date: 'Nov 9, 2024 18:00:00',
        place: 'TELENOIKA'
      },
      {
        title: '#05 ANTIC FORN VKK',
        img: './img/fondonext.png',
        infoLink: './boloPages/forn.html',
        date: 'Oct 25, 2024 00:29:59',
        place: 'Antic Forn de VallCarca'
      },
    ],
    bolos: [
      {
        title: '#01 SEED',
        subtitle: 'IMPLANTACIÓN 01',
        img: './img/figa.png',
        link: 'https://youtu.be/ToZSPY-I2NA',
        infoLink: 'https://www.lalluvia.com/plantavibras/v1',
      },
      {
        title: '#02 SHOWER',
        subtitle: 'IMPLANTACIÓN 02',
        img: './img/sinestesia.png',
        link: 'https://youtu.be/Uq7W1PfTmJI',
        infoLink: 'https://www.lalluvia.com/plantavibras/v2',
      },
      {
        title: '#03 NEUROWAVE',
        subtitle: 'IMPLANTACIÓN 03',
        img: './img/niu.png',
        link: 'https://youtu.be/2qzouZsFKm4',
        infoLink: 'https://www.lalluvia.com/plantavibras/v3',
      },
      {
        title: '#04 STOKASTIK',
        subtitle: 'IMPLANTACIÓN 04',
        img: './img/zwikau.png',
        link: 'https://youtu.be/lerEpxIW37c',
        infoLink: 'https://www.lalluvia.com/plantavibras/v4',
      },
    ]
}
const add0 = (n) => String(n)[1] ? String(n) : '0' + String(n);

const timeRange = (date) => {
  let deadlineTime = new Date(date);
  deadlineTime.setDate(deadlineTime.getDate());
  let deadline = deadlineTime.getTime();
  let now = new Date().getTime();    
  return (deadline - now);
};

function updateCountdown(date, i) {
  let countdown = document.getElementById('countdown-' + i);
  //let nextLogo = document.getElementById('logo-next-' + i); 
  if (countdownInterval !== null) {
    timeToLive = timeRange(date)
    if (timeToLive < 0) {
      countdown.innerText = '00:00:00:00';
      return;
    }
    let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000);
    countdown.innerText = add0(days) + ':' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);
  }
}
const next2html = (next, i) => {
  let nextBolo = document.createElement('a');
  nextBolo.classList.add("bolo", "next-bolo");
  nextBolo.style.backgroundImage = "url('./"+ next.img + "')";
  nextBolo.href = next.infoLink;
  nextBolo.id = 'next-bolo-' + i;
  nextImg = document.createElement('img');
  nextImg.src = './img/logo-next.png';
  nextImg.classList.add('logo-next')
  nextImg.id= 'logo-next-' + i;

  let animSpeed = Math.round(timeRange(next.date) / 86400000) + 0.5;
  nextBolo.style.animationDuration = animSpeed + 's';
  nextImg.style.animationDuration = animSpeed + 's'; 
  
  let boloTitle = document.createElement("span");
  boloTitle.classList.add("bolo-title", "next-title");
  let textoTitulo = document.createTextNode(next.title);
  boloTitle.appendChild(textoTitulo);
  
  let countdown = document.createElement('span');  
  countdown.classList.add('countdown');
  countdown.id = 'countdown-' + i;
  
  nextBolo.appendChild(nextImg);
  nextBolo.appendChild(boloTitle);
  nextBolo.appendChild(countdown)
  
  return(nextBolo);
}
/* if (data.next) {
  let nextBolo = document.createElement('a');
  nextBolo.classList.add("bolo", "next-bolo");
  nextImg = document.createElement('img');
  nextBolo.appendChild(nextImg);
  nextBolo.style.backgroundImage = "url('./"+ data.next.img + "')";
  nextImg.src = './img/logo-next.png';
  nextImg.id= 'logo-next';
  let boloInfo = document.createElement('a');
  nextBolo.href = data.next.infoLink;
  boloInfo.appendChild(document.createTextNode('i'))
  boloInfo.classList.add('info-butt', 'next-info');
  let boloTitle = document.createElement("span");
  boloTitle.classList.add("bolo-title", "next-title");
  let textoTitulo = document.createTextNode(data.next.title);
  boloTitle.appendChild(textoTitulo);
  let countdown = document.createElement('span');  
  //scountdown.appendChild(document.createTextNode(data.next.date));
  countdown.classList.add('countdown');
  countdown.id = 'countdown';
  nextBolo.appendChild(boloTitle);
  nextBolo.appendChild(countdown)
  //nextBolo.appendChild(boloInfo);
  next.appendChild(nextBolo);
} */
const bolo2html = (data) => {
  let bolo = document.createElement('a');
  bolo.href = data.link;
  let boloInfo = document.createElement('a');
  boloInfo.href = data.infoLink;
  boloInfo.appendChild(document.createTextNode('i'))
  boloInfo.classList.add('info-butt')
  bolo.classList.add("bolo");
  bolo.style.backgroundImage = "url('./"+ data.img + "')";
  let boloTitle = document.createElement("span");
  boloTitle.classList.add("bolo-title");
  let textoTitulo = document.createTextNode(data.title);
  boloTitle.appendChild(textoTitulo);
  bolo.appendChild(boloTitle);
  bolo.appendChild(boloInfo);
  return bolo;
}
let frag = new DocumentFragment;
//frag.appendChild(next)
const nextBolos = data.next;
for (let i = 0; i < nextBolos.length; i++) {
  const next = nextBolos[i];
  let c = next2html(next, i);
  frag.appendChild(c);
}
const bolos = data.bolos.reverse();
for (let i = 0; i < bolos.length; i++) {
  const bolo = bolos[i];
  let c = bolo2html(bolo);
  frag.appendChild(c)
}

container.append(frag)

let countdownInterval = setInterval(() => {
  for (let i = 0; i < data.next.length; i++) {
    const nextData = data.next[i];
    updateCountdown(data.next[i].date, i)
  }
}, 1000);
/* 
102 396 296
 86 400 */
