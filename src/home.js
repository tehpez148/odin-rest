import Sosig from './sosig.png';

const homeFunction = () => {


    const mainBox = document.getElementById('content');

    const welcome = document.createElement('h1');
    welcome.textContent="Welcome to Silly Sausage Sausage Sanctuary";

    mainBox.appendChild(welcome);

    const mySosig = new Image();
    mySosig.src = Sosig;
    mainBox.appendChild(mySosig);


};

export {homeFunction};
