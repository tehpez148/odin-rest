import Sosig from './sosig.png';

const homeFunction = () => {


    const mainBox = document.getElementById('content');
    const topBox = document.createElement('div');
    topBox.classList.add('topper');
    const botBox = document.createElement('div');
    botBox.classList.add('bottom');


    //const innerBox = document.createElement('div');

    const welcomeHead = document.createElement('h1');
    welcomeHead.textContent= "Welcome to Silly Sausage Sanctuary";
    const welcomeSecond = document.createElement('h2');
    welcomeSecond.textContent = "Are you in the mood for some funky, spunky sausages?"

    
    topBox.appendChild(welcomeHead);
    topBox.appendChild(welcomeSecond);
    mainBox.appendChild(topBox);


    const mySosig = new Image();
    mySosig.src = Sosig;
    mainBox.appendChild(mySosig);


};

export {homeFunction};
