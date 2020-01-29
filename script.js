const cards = [
    {
      front: 'Flower Power',
      back: 'Here is a collection of TINY flowers for later use on a baby shower cupcakes.  So cute!',
      flipped: false,
      type: 'Decorations',
      image: 'images/accessory-flowers.jpg',
    },
    {
      front: 'Onesies and pins',
      back: 'From pins to onesies, these are more decorations to later be used on a female babyshower cake',
      flipped: false,
      type: 'Decorations',
      image: 'images/accessory-onesies.jpg',
    },
    {
      front: 'Snowman',
      back: 'Uh oh, this poor fella may be melting!  Hopefully we get a chance to eat him first!',
      flipped: false,
      type: 'Decorations',
      image: 'images/accessory-snowman.jpg',
    },
    {
      front: 'Baby Carriage',
      back: "I hope you got a gift receipt...  I don't think the baby is going to fit in that stroller...",
      flipped: false,
      type: 'Decorations',
      image: 'images/accessory-stroller.jpg',
    },
    {
        front: 'Purple Rose',
        back: 'These elegant purple and white roses may be just the decoration to put your wedding cake over the top!',
        flipped: false,
        type: 'Decorations',
        image: 'images/accessory-weddingflowers.jpg',
    },

    {
      front: 'Baby Shower Cupcakes',
        back: "It's hard for pictures to do any justice to how great these cupcakes came out!",
        flipped: false,
        type: 'Cupcakes',
        image: 'images/cupcake-flower.jpg',
    },
    {
        front: 'Chocolate',
        back: 'CHOCOLATE!  What else can we say!?  These valentines cupcakes melted in the mouth!',
        flipped: false,
        type: 'Cupcakes',
        image: 'images/cupcake-choc.jpg',
    },


    {
        front: 'Carmel Apple Delights',
        back: "If you've got a sweet tooth, nothing will hit the spot like these carmel apples!  They are everything you can imagine, with white chocolate on top!",
        flipped: false,
        type: 'Treats',
        image: 'images/treats-apple.jpg',
    },
    {
        front: 'Ha, That Tickles',
        back: 'This Elmo cake pop deserves a lot of credit.  He will surely be eaten in just a moment, and yet maintains a smile despite his impending doom.',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-elmo.jpg',
    },
    {
        front: 'Hansel and Gretel',
        back: 'These delicious gingerbread houses would certainly be enough to lore me',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-gingerbread.jpg',
    },
    {
        front: 'Winter Society',
        back: 'Marshmellow snowmen and reindeer pops.  What can i say?  Now we are just showing off.',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-holiday.jpg',
    },
    {
        front: 'Bagged Chocolate Pretzels',
        back: "Great for the on the go treat.  Just as good for the hungry front-end web developer sitting in the office",
        flipped: false,
        type: 'Treats',
        image: 'images/treats-pretzels.jpg',
    },
    {
        front: 'Chocolate Covered Pretzels',
        back: 'This display of Chocolate covered pretzels has chocolate drizzle on top to add to its style and taste!  wow, I love chocolate.',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-pretzels2.jpg',
    },
    {
        front: 'Snowman Zombies',
        back: 'CARRRRRL!!!!!!',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-snowman.jpg',
    },
    {
        front: 'Chocolate Covered Strawberries',
        back: 'They look too nice to eat.  If you do eat them, you are essentially stealing art from future generations.  Shame on you for even thinking it.',
        flipped: false,
        type: 'Treats',
        image: 'images/treats-strawberry.jpg',
    },


    {
        front: 'Angry Beavers',
        back: 'Answer the phone, your childhood is calling',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-angrybeavers.jpg',
    },
    {
        front: 'Football Mom',
        back: "This is just your run of the mill chocolate, strawberry, football, mother's day cake",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-anothamotha.jpg',
    },
    {
        front: 'Under the Sea',
        back: 'This under water themed ice-cream cake came out swimmingly.',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-aqua.jpg',
    },
    {
        front: 'Baby on Board',
        back: "This may be my personal favorite by our esteemed baker.  I saw the time and love she put into each decoration, and it was truly amazing.",
        flipped: false,
        type: 'Cakes',
        image: 'images/baby-on-board.jpg',
    },
    {
        front: 'Happy B-day Jac!',
        back: 'Happy birthday Jacligza!  Ah, to be 22 again...',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-bdayjac.jpg',
    },
    {
        front: "Happy B-day Dad!",
        back: "I think we'd all agree that a father is the single most important living being in the history of humanity.  *cough cough* I hope you're reading this son",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-birthday.jpg',
    },
    {
        front: 'Patrick Shwasted',
        back:"You take the cake, I'll handle the rest.",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-booze.jpg',
    },
    {
        front: 'Communion Cake',
        back: 'What a way to celebrate a special day!',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-communion.jpg',
    },
    {
        front: 'Congratulations Cake',
        back: "What a charming graduation cake!  This is what we in the biz' refer to as a twofer",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-congrats.jpg',
    },
    {
        front: 'We Miss You',
        back: ':(',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-doggycake.jpg',
    },
    {
        front: 'That Tickles',
        back: "If you saw this cake when she was done with it, you'd be asking who the real monster was...  You deserved better icing Elmo...",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-elmo.jpg',
    },
    {
        front: "Spring Time Mother's Day",
        back: "Look at those cute little lady bugs!  This cake just makes you feel the spring breeze!",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-mothers.jpg',
    },
    {
        front: 'Chocolate Rain',
        back: 'Some grow strong, and others feel the pain.  Lucky for us, this chocolate raindrop icing cake most certainly grew strong!',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-raindrop.jpg',
    },
    {
        front: 'Reptar',
        back: 'Reptar, Reptar, gotta find that Reptar!',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-rugrat.jpg',
    },
    {
        front: 'Pretty Pretty',
        back: 'A very pretty formal styled cake!',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-seanmichelle.jpg',
    },
    {
        front: 'Drizzle',
        back: 'A carmel drizzle over white icing gives a beautiful look on these ice-cream cakes!',
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-squiggly.jpg',
    },
    {
        front: 'Wedding Cake',
        back: "Started makin' cupcakes now we here.",
        flipped: false,
        type: 'Cakes',
        image: 'images/cake-weddingcake.jpg',
    },
  ]; 




  function frontImage(){
    
    var cardImage = document.getElementsByClassName('card-image');
    for (var i = 0; i < cardImage.length; i += 1) {
    cardImage[i].style.backgroundImage = cards.image;
  }
  return frontImage();
}



      
    //   new vue  (flip  cake cards and scroll through)
    // having trouble making it scroll through

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      type: '' 
    },
    methods: {
        filterList: function(){
            this.type = event.target.value;
            console.log(this.type);
        },
        toggleCard: function(card) {
            card.flipped = !card.flipped;
        }
    },
    computed: {
        uniqueItemsList: function(){
          const types = [];
          this.cards.forEach((item)=>{
            if(!types.includes(item.type)){
              types.push(item.type);
            }
          });
          return types;
        }
      }
  });






// HAMBURGER MENU

  $(".hamburger").click(function(){
    if ($("#hamburger").hasClass("is-active")){
        $("#hamburger").removeClass("is-active");
        $("#myDropdown").removeClass("toggle-active");
    } else { 
    $(".hamburger").addClass("is-active");
    $("#myDropdown").addClass("toggle-active");
    }
});

// dropdown close on offclick
$("body").click(function() {
    target = $(".topnav")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#hamburger").removeClass("is-active");
        $("#myDropdown").removeClass("toggle-active");
    }
  });
// close dropbox when link is closed
$("#myDropdown").click(function() {
    $("#hamburger").removeClass("is-active");
    $("#myDropdown").removeClass("toggle-active");
});


// Copyright
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerText = currentYear;












            // ACTIVE ATTRIBUTE ON LINK 

$(".topnav__link-wrap a").each(function() {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('active-link');
    }
});