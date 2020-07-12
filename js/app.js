var body = document.body,
    html = document.documentElement;

var condidat = Vue.component('condidat-component', {
    props: ['condidat'],
    data: function() {
        return {
            isModal :false
        }
    },
    template: `
    <div class="card">
        <h1>{{ condidat.name }}
            <h6 v-for="p in condidat.postes">{{ p }}</h6>
        </h1>
        <div class="image-crop">
            <img id="avatar" :src="condidat.img" @click="isModal = true"></img>
        </div>
        <div v-if="isModal" class="modal" id="myModal" @click="isModal = false">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01" :src="condidat.img"/>
            <div id="caption">{{ condidat.name }}</div>
        </div>
        <div id="bio">
            <p :class="{ arabic: condidat.rtl }">{{ condidat.motivation }}</p>
        </div>
        <div class="buttons">
            <button><a :href="condidat.fb" target="_blank">Facebook</a></button>
        </div>
    </div>

    `
})

const app = new Vue({
    el: '#app',
    components: {
        'condidat-component': condidat
    },
    data: {
        current_slide : 0,
        condidats: [
            {
                'name': 'Anouar Faiz',
                'img': 'img/anouaaaar.jpg',
                'postes': ["1 Président", "2 Vice-Président"],
                "rtl": true,
                'motivation': 'تجربة Anaruz تجربة فريدة و غنية طبعت مساري  داخل Ensa ،من خلال صداقات و ذكرايات أقل ما يقال عنها رائعة و مليئة بالتجارب الإنسانية . بعد سنتين قضيتها داخل النادي  كما  شغلت منصب نائب الرئيس راكمت تجربة و خبرة متواضعة أود استثمارها و تسخيرها لخدمة النادي بمعية جميع أعضاء النادي',
                'fb': 'https://www.facebook.com/anouar.faiz.507'
            },
            {
                'name': 'Kham achraf',
                'img': 'img/KhamAchraf.jpg',
                'postes': ["1 Chef d'actions", "2 Vice-président"],
                'motivation': "Andir lif jehdi bach n3awn club.",
                'fb': 'https://www.facebook.com/achraf.kham.9'
            },
            {
                'name': 'EL Hassnaoui Aous',
                'img': 'img/aous.jpg',
                'postes': ["1 Responsable de cellule infographie","2 Chef d'actions"],
                'motivation': `Doing good/faire du bien, has been one of my goals since high school, where my first humanitarian activity was at an orphanage, where you can see all those little kids that need love, affection and being take cared of.
                               From that experience, I have learned that in this world we should be helpful to each other, we should take care of the needed people, we should spread love between us.
                               That's why in Anaruz ❤️, I get to do all of this, and together we can do a lot more than we can imagine, that what stands for Anaruz ❤️; hope.
                               #Together_we_create_hope 💚.`,
                'fb': 'https://www.facebook.com/aous.elh'
            },
            {
                'name': 'Hajji khadija',
                'img': 'img/Khadijael.jpg',
                'postes': ["1 Chef d'actions","2 Trésorière"],
                'motivation': 'Anaruz, the club that gives hope not only to the poor, but also to its members .Being in Anaruz gave me such a great experience and a great change of personality, and when having hard times, Anaruz was my only outlet .We hugged children, laughed so hard to their stories  and smiled when seeing their angelic smile, we talked to adults and cried with them, we shared their pain and we felt it deep inside our hearts.Being in Anaruz made me rethink my behavior towards everything, gave me the opportunity to meet new people, that are now my second family herefore, after two years in my second home, I really want to make Anaruz a better place to complete what we began. I want to free my ideas from the prison of my mind and make them a topic to discuss with the anaruzits for the goal that we all share: seeing Anaruz at its finestAnd if I have to tell one motivation to be a member of the clubs board, it would definitely be my infinite love to Anaruz.',
                'fb': 'https://www.facebook.com/khadija.ahmed.75'
            },
            {
                "name": "Halaoui mohammed",
                "img": "img/SimoHala.jpg",
                "postes": ["1 Chef d'actions","2 Trésorier"],
                    
                "motivation": "Anaruz c' est a famille,je suis très motivé et actif et j aime bcp le bénévolat en général ,en résumé anaruz c' est quelque chose de très précieux vraiment ça m a permis de voir ma vie d' une manière franchement je veux faire des choses spécial et donner le plus❤",
                "fb": "https://www.facebook.com/profile.php?id=100008026516593"
            },
            {
                "name": "Houria Laarabi ",
                "img": "img/Hourialar.jpeg",
                "postes": [
                    "1 Vice-présidente",
                    " 2 Chef d'actions"
                   
                ],
                "motivation": "D'après ma trés belle expérience dans ce club je suis trés passionnée par  ce poste",
                "fb": "https://www.facebook.com/houria.laarabi.3"
            },
            {
                "name": "Oubelkacem Manal",
                "img": "img/oubelmanal.jpg",
                "postes": [
                    "1 Responsable de cellule sponsoring",
                    "2 Présidente"
                ],
                "motivation": "Je suis fière d'être une membre de la famille anaruz pendant 3 ans je veux être une membre de bureau pour donner encore et encore pour ce club qui ma donner beaucoup de joie. ",
                "fb": "https://www.facebook.com/manal.obelkacem.7"

            },
             
            {
                "name": "Elmorjani Fatima-zahra ",
                "img": "img/fatimazahra.jpg",
                "postes": [
                    "1 Vice_Présidente",
                    "2 Chef d'actions"
                ],
                "motivation": "L'amour du club , l'envie de participer de nouveau aux différentes activités, améliorer mon expérience au sein du club et assurer sa continuité.ANARUZ qui ma beaucoup affecté au niveau personnel et la famille avec laquelle j'ai vécu mes meilleurs jours. ", 
                  "fb": "https://www.facebook.com/fleurita.zora.1"
            
            },
            
            {
                "name": "Tanane reda",
                "img": "img/RedaTanane.jpg",
                "postes": [
                    "1 Tresorier",
                    "2 Chef d'actions"
                ],
                "motivation": "J'ai toujours été intéressé par le travail social, aujourd'hui j'ai la chance de pouvoir intégrer le bureau des postes du club ANARUZ afin que je puisse donner de mon temps pour aider le club à réaliser des actions humanitaires et de mettre en pratique toutes les connaissances et compétences que j'ai acquises dans les deux dernières années #Ensemble_nous_créons_l_espoir",
                "fb": "https://web.facebook.com/reda.winner"
            },
            
            {
                "name": "Rharmili Kenza",
                "img": "img/kenzarharmili.jpg",
                "postes": [
                    "1 Responsable de cellule médiatisation",
                    "2 Vice-Président"
                ],
                "motivation": "Mettre le club en valeur , le représenter dans une belle image",
                "fb": "https://web.facebook.com/kenza.rharmili"
            },
            

        ]
    },
    methods : {
        next_slide : function () {
            if(this.condidats[this.current_slide + 1]){
               this.current_slide += 1;
               console.log("dsad");
            }
        },
        previous_slide : function () {
            if(this.condidats[this.current_slide - 1]){
                this.current_slide -= 1;
                console.log("dsad");

            }
        }
    },
    mounted() {
        body.addEventListener('keyup', ev => {
            if(ev.code == 'ArrowLeft') {
                this.previous_slide();
            }
            if(ev.code == 'ArrowRight') {
                this.next_slide();
            }
        })
    }


})
