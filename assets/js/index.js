// NavBar Section Start

var mainMenu = document.querySelector('.main-menu');
var barIcon = document.querySelector('#navBar');
var menu = document.querySelector('#menu');

const navMenu = () => {
mainMenu.style.background = '#00000080';
menu.style.display = 'block';
barIcon.style.display = 'none';
}
const closeNav = () => {
mainMenu.style.background = 'none';
menu.style.display = 'none';
barIcon.style.display = 'inline-block';
}
// NavBar Section End



// Text Blinking Start
async function init() {
    const node = document.querySelector("#type-text");
  
    await sleep(1000);
    node.innerText = "";
    await node.type("I'm Web ");
  
    while (true) {
      await node.type("Designer");
      await sleep(2000);
      await node.delete("Designer");
      await node.type("Developer");
      await sleep(2000);
      await node.delete("Developer");
    }
  }
  
  
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
      const randomMs = 100 * Math.random();
      return randomMs < 50 ? 10 : randomMs;
    }
  
    async type(text) {
      for (let character of text) {
        this.innerText += character;
        await sleep(this.typeInterval);
      }
    }
  
    async delete(text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length - 1);
        await sleep(this.typeInterval);
      }
    }
  }
  
  customElements.define("type-async", TypeAsync, { extends: "span" });
  
  init();
  

// Text Blinking End


const aboutShow = () => {
    var show = document.getElementById('about');
    show.style.display = 'block';
    show.style.visibility = 'visible';
}

const closeItem = () =>{
    var closeITEM = document.getElementById('about');
    closeITEM.style.display = 'none';
}

// Text Hide and show
const moreText = () => {
    const spanText = document.getElementById('readMore');

    const less = `<span onclick="lessText()">Less</span>`

    spanText.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, ad asperiores ipsam architecto, necessitatibus quam placeat eius in deleniti praesentium dolorem numquam nihil incidunt assumenda quis fugit! Fugit ducimus praesentium omnis dolores placeat animi perspiciatis minus dolorem, harum, nihil dicta beatae, rem necessitatibus sed maxime nemo tempore tenetur. Facilis harum voluptatum sapiente repudiandae quaerat quo ad consectetur! Excepturi, aspernatur a! Veritatis, nihil odio! Officiis sit corporis minus placeat tempore reprehenderit molestiae accusantium. Corrupti, tempore. Itaque necessitatibus veniam eveniet? Nostrum, qui omnis obcaecati deleniti cupiditate perferendis voluptate, possimus, ex sequi quibusdam quis unde commodi laborum maiores atque. Saepe error tempore corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quidem repellat quos sed sapiente. Perspiciatis, possimus porro mollitia eos atque laudantium tempora neque, hic minima quia ullam modi quis voluptatibus!. Corrupti, tempore. Itaque necessitatibus veniam eveniet? Nostrum, qui omnis obcaecati deleniti cupiditate perferendis voluptate, possimus, ex sequi quibusdam quis unde commodi laborum maiores atque. Saepe error tempore corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quidem repellat quos sed sapiente. Perspiciatis, possimus porro mollitia eos atque laudantium tempora neque, hic minima quia ullam modi quis voluptatibus!. ${less}`;
    spanText.style.textDecoration = 'none';
    spanText.style.color = '#fff';
}

const lessText = () => {
    const more = `<span onclick="moreText()">Read More</span>`;

    document.getElementById('readMore').innerHTML =`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, ad asperiores ipsam architecto, necessitatibus quam placeat eius in deleniti praesentium dolorem numquam nihil incidunt assumenda quis fugit! Fugit ducimus praesentium omnis dolores placeat animi perspiciatis minus dolorem, harum, nihil dicta beatae, rem necessitatibus sed maxime nemo tempore tenetur. Facilis harum voluptatum sapiente repudiandae quaerat quo ad consectetur! Excepturi, aspernatur a! Veritatis, nihil odio! Officiis sit corporis minus placeat tempore reprehenderit molestiae accusantium. Corrupti, tempore. Itaque necessitatibus veniam eveniet? Nostrum, qui omnis obcaecati deleniti cupiditate perferendis voluptate, possimus, ex sequi quibusdam quis unde commodi laborum maiores atque. Saepe error tempore corporis. ${more}`;

}



const eduShow = () => {
    var show = document.getElementById('eduexe');
    show.style.display = 'block';
    show.style.visibility = 'visible';
}

const closeEdu = () =>{
    var closeITEM = document.getElementById('eduexe');
    closeITEM.style.display = 'none';
}



const skillShow = () => {
    var show = document.getElementById('skill');
    show.style.display = 'block';
    show.style.visibility = 'visible';
}

const closeSkill = () =>{
    var closeITEM = document.getElementById('skill');
    closeITEM.style.display = 'none';
}


const contactShow = () => {
    var show = document.getElementById('contact');
    show.style.display = 'block';
    show.style.visibility = 'visible';
}

const closeContact = () =>{
    var closeITEM = document.getElementById('contact');
    closeITEM.style.display = 'none';
}

const socialHover = () => {
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const icon5 = document.getElementById('icon5');
    const icon6 = document.getElementById('icon6');

    icon1.style.display = 'none';
    icon2.style.display = 'inline-block';
    icon3.style.display = 'inline-block';
    icon4.style.display = 'inline-block';
    icon5.style.display = 'inline-block';
    icon6.style.display = 'inline-block';
    
}

const offBtn = () => {
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const icon5 = document.getElementById('icon5');
    const icon6 = document.getElementById('icon6');

    icon1.style.display = 'inline-block';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
    icon6.style.display = 'none';
}



// Education and Experience Start
    var exep = document.querySelector('.exe');
    var educ = document.querySelector('.edu');
    var wrk = document.querySelector('.work');

    const exe = () => {
        exep.style.display = 'block';
        educ.style.display = 'none';
        wrk.style.display = 'none';
    } 

    const edu = () => {
        exep.style.display = 'none';
        educ.style.display = 'block';
        wrk.style.display = 'none';
    } 

    const work = () => {
        exep.style.display = 'none';
        educ.style.display = 'none';
        wrk.style.display = 'block';
    } 
// Education and Experience End