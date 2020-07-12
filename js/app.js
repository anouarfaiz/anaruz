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
                'img': 'img/mlc.png',
                'postes': ["Vice-Président", "Chef d'actions"],
                'motivation': 'Anaruz for ever',
                'fb': 'https://www.facebook.com/anouar.faiz.507'
            },
            {
                'name': 'Kham achraf',
                'img': 'img/KhamAchraf.jpg',
                'postes': ["chef d'actions", "vice-président"],
                'motivation': "Andir lif jehdi bach n3awn club.",
                'fb': 'https://www.facebook.com/achraf.kham.9'
            },
            {
                'name': 'EL Hassnaoui Aous',
                'img': 'img/',
                'postes': ["responsable de cellule infographie","chef d'actions"],
                'motivation': `Doing good/faire du bien, has been one of my goals since high school, where my first humanitarian activity was at an orphanage, where you can see all those little kids that need love, affection and being take cared of.
                               From that experience, I have learned that in this world we should be helpful to each other, we should take care of the needed people, we should spread love between us.
                               That's why in Anaruz ❤️, I get to do all of this, and together we can do a lot more than we can imagine, that what stands for Anaruz ❤️; hope.
                               #Together_we_create_hope 💚.`,
                'fb': 'https://www.facebook.com/AOX.ELH'
            },
            {
                'name': 'khadija',
                'img': 'img/Khadijael.jpg',
                'postes': ["Responsable d'infographie"],
                'motivation': 'Waa rakum 3arfin li kayen',
                'fb': ''
            },
            {
                "name": "Kadimi hamza",
                "img": "https://scontent.frba2-2.fna.fbcdn.net/v/t1.0-1/37873311_2118905555046654_3759187155369328640_n.jpg?_nc_cat=106&_nc_oc=AQnpkbs7c4oG8tlgvhegVfuHsiaL6li08oolpdAcs-cnv-S_IQlUAoeYs1DwTzMjv-U&_nc_ht=scontent.frba2-2.fna&oh=705a60356f08f1f18bf95aceb78e783e&oe=5DD31AE4",
                "postes": [
                    "Secrétaire géneral"
                ],
                "motivation": "Je peux m en occuper de tout ce qui est administratif (les papiers...)\n",
                "fb": "https://www.facebook.com/kadimihamza99"
            },
            {
                "name": "Mohammed El Attouch",
                "img": "https://scontent.frba2-1.fna.fbcdn.net/v/t1.0-9/44443615_2371336636242279_4332598175949914112_n.jpg?_nc_cat=105&_nc_oc=AQlfk-fUqyDMqce3W1KadE7oyKShG-u_qPVxrWapJm5e86cO2gefZJ66rKZJTmdNTkk&_nc_ht=scontent.frba2-1.fna&oh=55fbb7ff931cbb5d4183e346b49063bb&oe=5DEC7559",
                "postes": [
                    "Secrétaire géneral",
                    " Tresorier"
                ],
                "motivation": "..\n",
                "fb": "https://www.facebook.com/simo.pock"
            },
            {
                "name": "El khanfri hajar",
                "img": "img/hajar.png",
                "postes": [
                    "Présidente",
                    "Responsable d'infographie"
                ],
                "motivation": "J'aimerais bien nkoun présidente pour rendre Anaruz une association inchaalahhh puisque daba on a association des étudiants, et pour le deuxieme choix c'est ce qui me passionne\n",
                "fb": "https://www.facebook.com/valeria.aguirey"

            },
            {
                "name": "Ikram agouzal",
                "img": "",
                "postes": [
                    "Chef d'actions"
                ],
                "motivation": ".\n",
                "fb": "#"
            },
            {
                "name": "Laila Elhaloui",
                "img": "img/laila.png",
                "postes": [
                    "Présidente",
                    "Chef d'actions"
                ],
                "motivation": "\"Apres avoir passé une tres bonne année avec la famille Anaruz , où j'ai rencontré des gens formidables qui se donnent réellement pour les autres , la chose qui a développé l amour que j avais depuis toujours envers ce travail noble , bénévolat. Qui est devenu une source de bonheur pour moi .  Je veux sincèrement être un membre actif, de cette famille,je veux apporter mes idées (j'en ai bcp la raison pour laquelle je postule pour le poste présidente') , participer comme je peux, et donner beaucoup de temps a notre petit univers, et vraiment Je serai heureuse d'apporter ma petite goutte d'eau à l'océan, de partager tant que je peux du respect,d'aide , l'écoute, et de partage.  Une grande responsabilité,  mais d autre part un grand amour de ma part ,aider les autres et dessiner un sourire sera notre objectif et notre motivation.  Vivons heureux, vivons solidaires !\"\n",
                "fb": "https://www.facebook.com/alial.elhalouii"
            },
            {
                "name": "Rania Boumazzough",
                "img": "img/rania.png",
                "postes": [
                    "Tresorier",
                    "Chef d'actions"
                ],
                "motivation": "Le travail humainitaire est l'un de mes motivation dans la vie\n",
                "fb": "https://www.facebook.com/rania.bmg.9"
            },
            {
                "name": "Benkaddour chaima",
                "img": "https://scontent.frba2-2.fna.fbcdn.net/v/t1.0-9/48423247_2384530698502141_3969617596273131520_o.jpg?_nc_cat=110&_nc_oc=AQlGuS7iSNuBIWsVqJdrjnVJeO2emFhj34awbrSDzcumOCEnV_EJN6UN94tJKS9rpS0&_nc_ht=scontent.frba2-2.fna&oh=c08ff6c50f2d32f3f70df23d2650beec&oe=5DD97DAB",
                "postes": [
                    "Secrétaire géneral",
                    "Tresorier"
                ],
                "rtl": true,
                "motivation": "الهدف ديال club anaruz هو هدف انساني أخلاقي و اجتماعي.ملي دخلت ليه تعلمت شحال من حاجة. أول حاجة هي انك خاصك تحط ديما قدام عينيك داك الهدف لي خدام على قبلو.تقاتل باش توصل ليه باش ما كان .و لي هو انك تساعد شحال من ناس محتاجين و لو بدعم بسيط منك او ترسم البسمة في وجوه ناس لي محنين بزاف. ختاريت هاد البوسط حيت نقدر نعطي فيه بكل ما استطعت باش تحقق  anaruz ديما المبتغى المنشود.\n",
                "fb": "https://www.facebook.com/cho.cho.18062"
            },
            {
                "name": "Belqaid salma",
                "img": "https://saraha.online/assets/user_img/51c347d9f6f84078f6f3b5f433d02c4b.jpeg",
                "postes": [
                    "Vice-Président",
                    "Responsable de sponsoring"
                ],
                "motivation": "Anaruz kant la famille tanya dyali pendant had 2ans lifato obritha tb9a kifma kant oktar ondiro lkhir ktar oktar.....\n",
                "fb": "https://www.facebook.com/bela.salma.3"
            },
            {
                "name": "Attouch Mohammed",
                "img": "https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.0-9/107896967_4201757173200207_2128423823446339923_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=1qPCsPckNFEAX80sIOS&_nc_ht=scontent.fcmn2-1.fna&oh=5b63f9e18ba65528a428cd34ff8922d6&oe=5F312088",
                "postes": [
                    "Vice-Président",
                    "Responsable de sponsoring"
                ],
                "motivation": "Anaruz kant la famille tanya dyali pendant had 2ans lifato obritha tb9a kifma kant oktar ondiro lkhir ktar oktar.....\n",
                "fb": "https://www.facebook.com/bela.salma.3"
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
