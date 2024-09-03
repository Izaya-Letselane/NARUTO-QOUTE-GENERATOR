let person = document.getElementById('person');
let quote = document.getElementById('quote');
const btn = document.getElementById('new-quote');

const quotes =[{
    quote: `"When you give up, your dreams and everything else they're gone."`,
    person:`Naruto Uzumaki`
},{
    quote: `"If you don't share someone's pain, you can never understand them."`,
    person:`Nagato`
},{
    quote: `"The longer you live… The more you realize that reality is just made of pain, suffering and emptiness"`,
    person:`Madara Uchiha`
},{
    quote: `"When people are protecting something truly precious to them. They truly can become…as strong as they need to be!"`,
    person:`Haku`
},{
    quote: `"A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own."`,
    person:`Jiraiya`
},{
    quote: `"It’s human nature not to realize the true value of something, unless they lose it."`,
    person:`Orochimaru`
},{
    quote: `"The moment people come to know love, they run the risk of carrying hate."`,
    person:`Obito Uchiha`
},{
    quote: `"Even the strongest of opponents always has a weakness."`,
    person:`Itachi Uchiha`
},{
    quote: `"I have long since closed my eyes… My only goal is in the darkness."`,
    person:`Sasuke Uchiha`
},{
    quote: `"Once you question your own belief it's over."`,
    person:`Naruto Uzumaki`
}];

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})