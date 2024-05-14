
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

    const firstPara = document.createElement('h4');
    const secondPara = document.createElement('h4');

    firstPara.textContent = "We've been slinging sausages since Sixty-Six. Our cylindrical dream began when our founder, the great silly sausage himself, grew tired of the dull, lifeless and limp meat holders that dare call themselves sausages in this town. Since then, we've strived to succeed at sausage science."
    secondPara.textContent = "We seriously select only the most superior pig farms to source a select sausage insides. We take time to really get in there with the pigs and much and such to ensure we're delivering the best quality SNACKS. We then take that porcine goodness and lovingly pump them into tenderly selected skins. We then deep fry them in the most re-used oil this side of the atlantic, to give that genuine silly sausage taste."


    topBox.appendChild(aboutHead)
    topBox.appendChild(aboutSecond);
    mainBox.appendChild(topBox);

    botBox.appendChild(firstPara);
    botBox.appendChild(secondPara);
    mainBox.appendChild(botBox);

};

export {aboutFunction};
