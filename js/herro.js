const heroes = [
  {'name' : 'Prof. Xavier', 'twitter' : '@profx', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif','following':0},
  {'name' : 'Spiderman', 'twitter' : '@spidey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif','following':0},  
  {'name' : 'Wolverine', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif', 'twitter' : '@logan' ,'following':0}
];

const moreHeroes = [
   {'name' : 'Cyclops', 'twitter' : '@oneye', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif','following':0},
   {'name' : 'Storm', 'twitter' : '@rainsitpours', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif','following':0},
   {'name' : 'Phoenix', 'twitter' : '@jeangrey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif','following':0}
];


function render(){
  const bodyhero = document.querySelector('#body_hero');

  const snippet = heroes.map((hero,idx) => `
    <article id=article_${idx} class="dt w-100 bb b--black-05 pb2 mt2"  href="#0">
      <div class="dtc w2 w3-ns v-mid">
        <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
      </div>
      <div class="dtc v-mid pl3">
        <h1 id="name"class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
        <h2 class="unique f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
      </div>
      <div class="dtc v-mid">
        <div class="w-100 tr">
          <button data-idx="${idx}" class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">${ hero.following ?  "- Following" : "+Follow"}</button>
        </div>
      </div>
    </article>
  `).join('');
  
  body_hero.innerHTML = snippet;
  
  const btns = Array.from(document.querySelectorAll('button'));
    btns.map(btn => {
     btn.addEventListener('click', () => {
        if(heroes[btn.dataset.idx].following) {
          heroes[btn.dataset.idx].following = 0
          console.info('Unfollowing user');
        } else {
          heroes[btn.dataset.idx].following = 1
          console.info('Following user');
        }
       render();
     });
  
   });
        
};//end render
render();

const btn_hero= document.getElementById('btn_submit_hero');
  btn_hero.addEventListener('click', function(event) {
    event.preventDefault();
    if(moreHeroes.length > 0){
      heroes.push(moreHeroes[0]);
      moreHeroes.shift();
      console.info('add more hero..');
      render();
      
    }else{
      console.info('No more hero.');
    }
    
  });