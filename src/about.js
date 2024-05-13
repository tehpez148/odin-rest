
const aboutFunction = () => {


    const mainBox = document.getElementById('content');
    const topBox = document.createElement('div');
    topBox.classList.add('topper');
    const botBox = document.createElement('div');
    botBox.classList.add('bottom');


    const aboutHead = document.createElement('h1');
    aboutHead.textContent="Stats Surrounding Silly Sausages?!";
    const aboutSecond = document.createElement('h2');
    aboutSecond.textContent = "Interested in a summary of our porky endevours?"



    topBox.appendChild(aboutHead)
    topBox.appendChild(aboutSecond);
    mainBox.appendChild(topBox);


};

export {aboutFunction};
