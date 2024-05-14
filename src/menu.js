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

    const menuSign = document.createElement('h2');
    menuSign.textContent= "Menu";

    const menuItems = document.createElement('div');
    menuItems.setAttribute('id','menuitems');

    const item1 = document.createElement('h3');
    item1.textContent = "Lorem Sausage_____£4";
    const item2 = document.createElement('h3');
    item2.textContent = "Ipsum Sausage_____£4";
    const item3 = document.createElement('h3');
    item3.textContent = "Cheese Sausage_____£4";
    const item4 = document.createElement('h3');
    item4.textContent = "Chilly Sausage_____£3";

    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(item4);
   
   







    botBox.appendChild(menuSign);
    botBox.appendChild(menuItems);
    mainBox.appendChild(botBox);


};
export {menuFunction};