import Sosig from './sosig.png';

const homeFunction = () => {


    const mainBox = document.getElementById('content');
    const topBox = document.createElement('div');
    topBox.classList.add('topper');
    const botBox = document.createElement('div');
    botBox.classList.add('bottom');

    const mySosig = new Image();
    mySosig.src = Sosig;


    const welcomeHead = document.createElement('h1');
    welcomeHead.textContent= "Welcome to Silly Sausage Sanctuary";
    const welcomeSecond = document.createElement('h2');
    welcomeSecond.textContent = "Are you in the mood for some funky, spunky sausages?"

    const firstPara = document.createElement('h4');
    const secondPara = document.createElement('h4');

    firstPara.textContent = "Welcome to our special sausage zone. Where all your most salubrious sausage-y desires can be answered. Anything sausage shaped, we've got for you. So take a look around!"
    secondPara.textContent = "Fancy a spicy salami? A sweet slim-jim? A seductive saucisson? We've got whatever tickles your pickle (we've even got pickles!)"
    topBox.appendChild(welcomeHead);
    topBox.appendChild(welcomeSecond);
    mainBox.appendChild(topBox);

    botBox.appendChild(firstPara);
    botBox.appendChild(mySosig);
    botBox.appendChild(secondPara);
    mainBox.appendChild(botBox);


    
    


};

export {homeFunction};
