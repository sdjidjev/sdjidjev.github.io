Vue.component('home', {
	template: "#home-template"
});
Vue.component('projects', {
	template: "#projects-template",
	partials: {
		cows: 'This was a hack done at Big Hack on April 2014. Big Hack is an annual hackathon where UC Berkeley and Stanford hackers compete against each other. A-maze-ing cows is a first-person shooter inside a maze with cows that drop from the sky who also try to attack you. This ridiculous game was made with Unreal Engine 4 using its programming flow language "Blueprint". Unreal Engine provided the physics engine, the cow .obj file was from online, and the rest of the logic was coded by my team. I worked on this hack with <a href = "http://www.fmeyer.com" class="text-link" target="_blank">Freddie Meyer</a>. I will be showing off this hack at the Cal Day Hackerfair.',
		cards: 'This was a quick hack done at BearHack on November 2013. I wanted to get familiar with Facebook\'s API, so I made an app that tests you on the names of the people on your friends list on Facebook. It shows you the profile picture of your Facebook friend and asks you for their first and last name. If you don\'t know their name, the app gives you a link so that you can unfriend them. This hack uses basic HTML+CSS, Javascript, and the Facebook API.',
		pokepon: 'Pokepon is a multiplayer game that combines the battle elements of the Pokemon game with the dance and rhythm elements of Patapon (a game sort of like Dance Dance Revolution). Start a battle, send the link to your friends, and type the battle commands in time with the beat of a song on your Soundcloud playlist. This game won the Firebase API award at the PennApps Hackathon in September 2013. I worked on this with Thanh Hai Mai, Melanie Cebula, and Achal Dave. Pokepon uses HTML5, CSS, node.js, Express, Javascript, Firebase, and the Soundcloud API.',
		geoly: 'Geo.ly is a website where if you can\'t find your friends, click on "Create," send the generated link to your friend, and then you can see the location of you and your friend in real time! There is a compass which shows you in which direction your friend is. I worked on this with <a href="http://www.dchunwong.com" class="text-link" target="_blank"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link" target="_blank">Melanie Cebula</a> at the <a href="https://www.hacksy.com/BigHack" class="text-link" target="_blank">Big Hack</a> on April 2013. It currently works only for iPhone, so we are working on making it available to most mobile platforms. We\'re also working on making it available publicly (i.e. it runs only on localhost now). geo.ly uses node.js, HTML5, CSS, Google Maps API, Python\'s SimpleHTTPServer, PhoneGap, and Webkit.',
		ratemycat: 'Rate My Cat is a website where users can upload pictures of their cat so that others can rate them. I worked on this with <a href="http://www.dchunwong.com" class="text-link"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link">Melanie Cebula</a> at HackJam2 on February 2013. We\'re currently in the process of adding a rating feature. Rate My Cat uses HTML5, CSS, MongoDB, and Flask.'
	},
	data: {
		projects: [
			{
				title: 'A-maze-ing Cows',
				url: 'https://drive.google.com/file/d/0BzXTrCgoCjR1cEdUbVh5ZVpQYkE/edit?usp=sharing',
				pic: '/img/cows.png',
				description: 'cows'
			},
			{
				title: 'Flashionable Cards',
				url: 'http://sdjidjev.com/flashionable-cards/',
				pic: '/img/flashionablecards.png',
				description: 'cards'
			},
			{
				title: 'Pokepon',
				url: 'https://github.com/thanhhaimai/pokepon',
				pic: '/img/pokemon.png',
				description: 'pokepon'
			},
			{
				title: 'geo.ly',
				url: 'https://github.com/melaniecebula/geo.ly',
				pic: '/img/geolypic.jpg',
				description: 'geoly'
			},
			{
				title: 'Rate My Cat',
				url: 'http://ratemycat.herokuapp.com',
				pic: '/img/pic.png',
				description: 'ratemycat'
			}
		]
	}
});
Vue.component('notfound', {
	template: "#notfound-template",
	data: {
		bgPos: 0,
		bgPosArr: [[-10,-10],[-150,-10],[-10,-132],[-150,-132]],
		bgX: '-10',
		bgY: '-10'
	},
	created: function(){
		this.interval = setInterval(function(){
			if (this.bgPos >= this.bgPosArr.length-1) {
				this.bgPos = 0;
			} else {
				this.bgPos++;
			}
			this.bgX = String(this.bgPosArr[this.bgPos][0]);
			this.bgY = String(this.bgPosArr[this.bgPos][1]);
		}.bind(this),200);
	},
	afterDestroy: function(){
		clearInterval(this.interval);
		this.interval = null;
	}
});

// simple routing
var routes = ['home', 'projects'];

function getRoute() {
    var path = location.hash.replace(/^#\/?/, '') || 'home';
    if (routes.indexOf(path) > -1){
    	return path;
    } else {
    	return 'notfound';
    }
}

window.addEventListener('hashchange', function () {
    app.currentView = getRoute();
});


var app = new Vue({
	el: '#app',
	data: {
		currentView: getRoute(),
		routes: routes
	}
});
