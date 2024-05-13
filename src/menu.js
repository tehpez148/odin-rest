const menuFunction = () => {
    
    const mainBox = document.getElementById('content');
    const topBox = document.createElement('div');
    topBox.classList.add('topper');
    const botBox = document.createElement('div');
    botBox.classList.add('bottom');

    const menuHead = document.createElement('h1');
    menuHead.textContent = "Select Suitable Silly Sausage";
    const menuSecond = document.createElement('h2');
    menuSecond.textContent = "Browse our bountiful brace of bouncy sausages";
    


    topBox.appendChild(menuHead);
    topBox.appendChild(menuSecond);
    mainBox.appendChild(topBox);






};
export {menuFunction};