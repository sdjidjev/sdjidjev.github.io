function getRoute() {
    var routes = ['home','projects','tidbits'];   
    var path = location.hash.replace(/^#\/?/, '') || 'home';
    if (routes.indexOf(path) > -1){
        return path;
    } else {
        return 'notfound';
    }
}

Vue.effect('card-effect', {
    enter: function (el, insert, timeout) {
        el.classList.add('v-enter-h');
        el.classList.add('v-enter-w');
        insert();
        timeout(function(){
            el.classList.remove('v-enter-h');
            el.classList.remove('v-enter-w');
        },500);
    },
    leave: function (el, remove, timeout) {
        el.classList.add('v-leave-w');
        el.classList.add('v-leave-h');
        timeout(function() {
            el.classList.remove('v-leave-w');
            el.classList.remove('v-leave-h');
            remove();
        }, 500);
    }
});

Vue.component('home', {
    template: "#home-template",
    data: {
        show: false
    },
    created: function(){
        var self = this;
        setTimeout(function(){
            self.show = true;
        }, 100);
    },
    beforeDestroy: function(){
        this.show = false;
    }
});
Vue.component('content', {
    template: "#content-template",
    partials: {
        home: 'Hey there! I am a Software Engineer at Airbnb currently working on the Transportation team! I studied <b>Electrical Engineering &amp; Computer Science</b> at the <b>University of California, Berkeley</b>. I love EDM, hiking, food, and recently obsessed with TikTok.',
        logigif: 'This hack was done at CSUA Hacktahon in Fall 2014. It won 3rd place! <a href="http://www.cburch.com/logisim/" class="text-link">Logisim</a> is an educational tool for designing and simulating digital logic circuits. Using this software, I made a circuit that can display GIFs from the internet. I first used the ImageMagick library to split a gif into its png frames. Then I used Python and the OpenCV library to get every pixels value and encode it into a hex string and load it onto a text file. I then loaded the text file into a RAM in the circuit that updates registers which pipe in the value 0 or 1 into an LED in a LED Matrix. To make and display your own gifs, <a href="https://github.com/sdjidjev/Logi-gif" class="text-link">clone the repo</a> from my Github.',
        twittercsim: 'This hack was done at HackJam in Fall 2014 with <a href="http://fmeyer.com" class="text-link">Freddie Meyer</a>. The purpose is to see the general mood about a movie on Twitter by classifying a tweet as \'positive\' or \'negative\' based on what kind of words (positive or negative) we find in the tweet. We then compare the rating gave by Twitter users with the actual rating given by IMdB. Sometimes, the results are more accurate than others, which we feel we could fix if we had a better sentiment determining algorithm. We used HTML+CSS3, jQuery, NodeJS, the Twitter API, and IMdB API.',
        cows: 'This was a hack done at Big Hack on April 2014. Big Hack is an annual hackathon where UC Berkeley and Stanford hackers compete against each other. A-maze-ing cows is a first-person shooter inside a maze with cows that drop from the sky who also try to attack you. This ridiculous game was made with Unreal Engine 4 using its programming flow language "Blueprint". Unreal Engine provided the physics engine, the cow .obj file was from online, and the rest of the logic was coded by my team. I worked on this hack with <a href = "http://www.fmeyer.com" class="text-link" target="_blank">Freddie Meyer</a>. I will be showing off this hack at the Cal Day Hackerfair. You can download it for Windows <a href="https://drive.google.com/file/d/0BzXTrCgoCjR1cEdUbVh5ZVpQYkE/edit?usp=sharing" class="text-link">here</a>, and you launch it by clicking \'launcher.cmd\'',
        cards: 'This was a quick hack done at BearHack on November 2013. I wanted to get familiar with Facebook\'s API, so I made an app that tests you on the names of the people on your friends list on Facebook. It shows you the profile picture of your Facebook friend and asks you for their first and last name. If you don\'t know their name, the app gives you a link so that you can unfriend them. This hack uses basic HTML+CSS, Javascript, and the Facebook API.',
        pokepon: 'Pokepon is a multiplayer game that combines the battle elements of the Pokemon game with the dance and rhythm elements of Patapon (a game sort of like Dance Dance Revolution). Start a battle, send the link to your friends, and type the battle commands in time with the beat of a song on your Soundcloud playlist. This game won the Firebase API award at the PennApps Hackathon in September 2013. I worked on this with Thanh Hai Mai, Melanie Cebula, and Achal Dave. Pokepon uses HTML5, CSS, node.js, Express, Javascript, Firebase, and the Soundcloud API.',
        geoly: 'Geo.ly is a website where if you can\'t find your friends, click on "Create," send the generated link to your friend, and then you can see the location of you and your friend in real time! There is a compass which shows you in which direction your friend is. I worked on this with <a href="http://www.dchunwong.com" class="text-link" target="_blank"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link" target="_blank">Melanie Cebula</a> at the <a href="https://www.hacksy.com/BigHack" class="text-link" target="_blank">Big Hack</a> on April 2013. It currently works only for iPhone, so we are working on making it available to most mobile platforms. We\'re also working on making it available publicly (i.e. it runs only on localhost now). geo.ly uses node.js, HTML5, CSS, Google Maps API, Python\'s SimpleHTTPServer, PhoneGap, and Webkit.',
        ratemycat: 'Rate My Cat is a website where users can upload pictures of their cat so that others can rate them. I worked on this with <a href="http://www.dchunwong.com" class="text-link"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link">Melanie Cebula</a> at HackJam2 on February 2013. We\'re currently in the process of adding a rating feature. Rate My Cat uses HTML5, CSS, MongoDB, and Flask.',
        notfound: '<div class="project-title project-heading">404 - Page Not Found</div><div v-style="background-position: bgX + \'px \' + bgY + \'px\';" class="pic-404"></div><div class="description"><div class="text-container" style="text-align:center;">Nothin&rsquo; to see here!</div></div>',
        threejs: 'On this page, I\'m going to be trying out cool things with ThreeJS. It will constantly be updating, so be sure to check back now and again!',
        randompokemon: 'Random Pokemon will give you a random pokemon everytime you hit a button. This quick hack uses AngularJS, localStorage, HTML, Javascript, and a binary localStorage compressor called <a href="http://dungfu.github.io/SASStore/" class="textlink">SASStore</a>. This hack will be used for a <a href="http://hackersatberkeley.com" class="textlink">Hackers@Berkeley</a> workshop called "Intro to Javascript." Catch \'em all!',
        duckclicker: 'Click the duck before it vanishes forever! This quick hack uses more AngularJS, as well as HTML and Javascript.',
        ocd: 'This was a <a href="http://challenge.nm.org" class="text-link">Supercomputing Challenge</a> project that I worked on my senior year of high school. My team (Alexandra Porter and Lauren Li) and I developed an algorithm which uses characteristics of both the Power Iteration and Ant Colony optimzation techniques in order to find communities in networks with maximum modularity. This novel algorithm proved to run faster and with more accuracy than traditionally used algorithms for most cases. Read our <a href="http://challenge.nm.org/archive/11-12/finalreports/56.pdf" class="text-link">report</a> for more information. This project won 3rd place in the Supercomputing Challenge. The algorithms and the visualization were coded in Java.',
        aco: 'This was a <a href="http://challenge.nm.org" class="text-link">Supercomputing Challenge</a> project that I worked on my junior year of high school. My team (Peter Ahrens and Dustin Tauxe) and I analyzed the performance of different implementations of Ant Colony Optimizations as applied to the Travelling Salesman Problem. Ant Colony Optimziations are interesting because they use real life ant behavior in order to find a very good solution to the problem in a small amount of time. Read our <a href="http://challenge.nm.org/archive/10-11/finalreports/56.pdf" class="text-link">report</a> for more information. This project won 2nd place in the Supercomputing Challenge. Python was used for the algorithm and the visualization.',
        setchecker: '"Set" is a popular card game that involves finding patterns under time pressure. Sometimes, it\'s hard to tell whether or not one of these patterns exists, which is why I built this "set" checker. More detailed rules of "Set" can be found <a href="http://en.wikipedia.org/wiki/Set_(game)" class="text-link">here</a>.'
    },
    data: {
        interval: null,
        bgPos: 0,
        bgPosArr: [[-10,-10],[-150,-10],[-10,-132],[-150,-132]],
        bgX: '-10',
        bgY: '-10',
        contentItems: [
            {
                type: 'home',
                description: 'home',
                show: false
            },
            {
                type: 'notfound',
                description: 'notfound',
                show: false
            },
            {
                title: 'Logi-gif',
                url: 'http://youtu.be/5OTRVfKFdp4',
                pic: '/img/logigif.png',
                description: 'logigif',
                type: 'projects',
                show: false
            },
            {
                title: 'Twittercism',
                url: 'http://twittercism.herokuapp.com/',
                pic: '/img/twittercism.png',
                description: 'twittercsim',
                type: 'projects',
                show: false
            },
            {
                title: 'A-maze-ing Cows',
                url: 'https://drive.google.com/file/d/0BzXTrCgoCjR1cEdUbVh5ZVpQYkE/edit?usp=sharing',
                pic: '/img/cows.png',
                description: 'cows',
                type: 'projects',
                show: false
            },
            {
                title: 'Flashionable Cards',
                url: 'http://sdjidjev.com/flashionable-cards/',
                pic: '/img/flashionablecards.png',
                description: 'cards',
                type: 'projects',
                show: false
            },
            {
                title: 'Pokepon',
                url: 'https://github.com/thanhhaimai/pokepon',
                pic: '/img/pokemon.png',
                description: 'pokepon',
                type: 'projects',
                show: false
            },
            {
                title: 'geo.ly',
                url: 'https://github.com/melaniecebula/geo.ly',
                pic: '/img/geolypic.jpg',
                description: 'geoly',
                type: 'projects',
                show: false
            },
            {
                title: 'Rate My Cat',
                url: 'http://ratemycat.herokuapp.com',
                pic: '/img/pic.png',
                description: 'ratemycat',
                type: 'projects',
                show: false
            },
            {
                title: 'Optimizing Community Detection',
                url: 'http://challenge.nm.org/archive/11-12/finalreports/56.pdf',
                pic: '/img/ocdpic.png',
                description: 'ocd',
                type: 'projects',
                show: false
            },
            {
                title: 'BrilliAnts',
                url: 'http://challenge.nm.org/archive/10-11/finalreports/56.pdf',
                pic: '/img/acopic.png',
                description: 'aco',
                type: 'projects',
                show: false
            },
            {
                title: 'Set Checker',
                url: 'http://sdjidjev.com/set-checker',
                pic: '/img/setchecker.png',
                description: 'setchecker',
                type: 'tidbits',
                show: false
            },
            {
                title: 'Crazy ThreeJS',
                url: 'http://sdjidjev.com/threejs',
                pic: '/img/threejs.png',
                description: 'threejs',
                type: 'tidbits',
                show: false
            },
            {
                title: 'Random Pokemon',
                url: 'http://sdjidjev.com/randompokemon',
                pic: '/img/randompokemon.png',
                description: 'randompokemon',
                type: 'tidbits',
                show: false
            },
            {
                title: 'Duck Clicker',
                url: 'http://sdjidjev.com/duckclicker',
                pic: '/img/duckclicker.png',
                description: 'duckclicker',
                type: 'tidbits',
                show: false
            }
        ]
    },
    created: function(){
        // simple routing
        var routes = ['home','projects','tidbits'];
        var interval;

        this.interval = setInterval(function(){
            if (this.bgPos >= this.bgPosArr.length-1) {
                this.bgPos = 0;
            } else {
                this.bgPos++;
            }
            this.bgX = String(this.bgPosArr[this.bgPos][0]);
            this.bgY = String(this.bgPosArr[this.bgPos][1]);
        }.bind(this),200);

        function turnOffOnElements(true_arr){
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
            if (true_arr.length > 0){
                this.contentItems[true_arr.shift()].show = true;
            }
            interval = setInterval(function(){
                if (true_arr.length > 0){
                    this.contentItems[true_arr.shift()].show = true;
                } else {
                    clearInterval(interval);
                    interval = null;
                }
            }.bind(this),500);
        }
        var timeout;
        function slideContent(route){
            var true_arr = [];
            var turnedOffVar = false;
            for (var i=0; i<this.contentItems.length;i++){
                if (this.contentItems[i].type !== route){
                    if (this.contentItems[i].show){
                        this.contentItems[i].show = false;
                        turnedOffVar = true;
                    }
                } else {
                    true_arr.push(i);
                }
            }
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
            if (turnedOffVar) {
                timeout = setTimeout(function(){
                    turnOffOnElements.call(this,true_arr);
                }.bind(this),500);
            } else {
                turnOffOnElements.call(this,true_arr);
            }
        }

        window.addEventListener('hashchange', function() {
            var route = getRoute();
            slideContent.call(this,route);
        }.bind(this));
        Vue.nextTick(function(){
            slideContent.call(this,getRoute());
        }.bind(this));
    },
    afterDestroy: function(){
        clearInterval(this.interval);
        this.interval = null;
    }
});

var app = new Vue({
    el: '#app',
    data: {
        currentView: 'content',
        type: getRoute(),
        first: false
    },
    created: function(){
        this.first = true;
    }
});

window.addEventListener('hashchange', function() {
    var route = getRoute();
    app.type = route;
    app.first = true;
});
