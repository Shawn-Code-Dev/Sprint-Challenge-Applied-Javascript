// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const headContainer = document.createElement('div');
    const dated = document.createElement('span');
    const headTitle = document.createElement('h1');
    const temperature = document.createElement('span');

    headContainer.append(dated);
    headContainer.append(headTitle);
    headContainer.append(temperature);

    headContainer.classList.add('header');
    dated.classList.add('date');
    temperature.classList.add('temp');

    dated.textContent = 'SMARCH 28, 2019';
    headTitle.textContent = title;
    temperature.textContent = '98°';

    return headContainer;
}

const headerCont = document.querySelector('.header-container')

const headerOne = Header('Lambda Times');

headerCont.append(headerOne);