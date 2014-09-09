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
        home: 'Hey there! I am currently a junior studying <b>Electrical Engineering &amp; Computer Science</b> at the <b>University of California, Berkeley</b>. I&lsquo;m originally from New Mexico and I worked at the <a href="http://www.lanl.gov" class="text-link" target="_blank">Los Alamos National Laboratory</a> doing research during the Summer of 2013 and worked at <a href="http://www.eventable.com" class="text-link" target="_blank">Eventable</a> doing frontend developement during the Summer of 2014. I love web development and I am an officer at <a href="http://hackersatberkeley.com" class="text-link" target="_blank">Hackers@Berkeley</a> in order to contribute to the growing hacking culture at UC Berkeley. I play the cello and piano, as well as tennis and ping-pong.',
        cows: 'This was a hack done at Big Hack on April 2014. Big Hack is an annual hackathon where UC Berkeley and Stanford hackers compete against each other. A-maze-ing cows is a first-person shooter inside a maze with cows that drop from the sky who also try to attack you. This ridiculous game was made with Unreal Engine 4 using its programming flow language "Blueprint". Unreal Engine provided the physics engine, the cow .obj file was from online, and the rest of the logic was coded by my team. I worked on this hack with <a href = "http://www.fmeyer.com" class="text-link" target="_blank">Freddie Meyer</a>. I will be showing off this hack at the Cal Day Hackerfair.',
        cards: 'This was a quick hack done at BearHack on November 2013. I wanted to get familiar with Facebook\'s API, so I made an app that tests you on the names of the people on your friends list on Facebook. It shows you the profile picture of your Facebook friend and asks you for their first and last name. If you don\'t know their name, the app gives you a link so that you can unfriend them. This hack uses basic HTML+CSS, Javascript, and the Facebook API.',
        pokepon: 'Pokepon is a multiplayer game that combines the battle elements of the Pokemon game with the dance and rhythm elements of Patapon (a game sort of like Dance Dance Revolution). Start a battle, send the link to your friends, and type the battle commands in time with the beat of a song on your Soundcloud playlist. This game won the Firebase API award at the PennApps Hackathon in September 2013. I worked on this with Thanh Hai Mai, Melanie Cebula, and Achal Dave. Pokepon uses HTML5, CSS, node.js, Express, Javascript, Firebase, and the Soundcloud API.',
        geoly: 'Geo.ly is a website where if you can\'t find your friends, click on "Create," send the generated link to your friend, and then you can see the location of you and your friend in real time! There is a compass which shows you in which direction your friend is. I worked on this with <a href="http://www.dchunwong.com" class="text-link" target="_blank"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link" target="_blank">Melanie Cebula</a> at the <a href="https://www.hacksy.com/BigHack" class="text-link" target="_blank">Big Hack</a> on April 2013. It currently works only for iPhone, so we are working on making it available to most mobile platforms. We\'re also working on making it available publicly (i.e. it runs only on localhost now). geo.ly uses node.js, HTML5, CSS, Google Maps API, Python\'s SimpleHTTPServer, PhoneGap, and Webkit.',
        ratemycat: 'Rate My Cat is a website where users can upload pictures of their cat so that others can rate them. I worked on this with <a href="http://www.dchunwong.com" class="text-link"> Dylan Chun Wong</a> and <a href="http://www.melaniecebula.com" class="text-link">Melanie Cebula</a> at HackJam2 on February 2013. We\'re currently in the process of adding a rating feature. Rate My Cat uses HTML5, CSS, MongoDB, and Flask.',
        notfound: '<div class="project-title project-heading">404 - Page Not Found</div><div v-style="background-position: bgX + \'px \' + bgY + \'px\';" class="pic-404"></div><div class="description"><div class="text-container" style="text-align:center;">Nothin&rsquo; to see here!</div></div>'
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
                title: 'Rate My Cat',
                url: 'http://ratemycat.herokuapp.com',
                pic: '/img/pic.png',
                description: 'ratemycat',
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
                }.bind(this),1000);
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
