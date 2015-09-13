var resume = resume || {};

(function($, document){
    resume.main = {
        Init: function(){
            $(document).foundation();
            $('<img/>').attr({'src':'img/julien_antony.jpg', 'id':'avatar', "alt":"julien antony", "title":"julien antony DevOp"}).load(function(){
                $('.profile .picture').append(this);
                resume.main.Anim();
            });
        },
        Anim: function(){
            var tl = new TimelineLite();
            var tl2 = new TimelineLite();
            tl.from($('#avatar'), 0.8, {scaleX:0, scaleY:0, ease: Back.easeOut});
            tl.from($('#devop'), 0.8, {css:{bottom:"300px"}, ease: Bounce.easeOut});
            tl2.from($('#name'), 0.8, {css:{left:"500px", display: "none"}, ease: Back.easeOut});
            tl2.from($('#age'), 0.3, {css:{top:"100px", display: "none"}});
            tl2.from($('#phone'), 0.3, {css:{top:"100px", display: "none"}});
            tl2.from($('#mail'), 0.3, {css:{top:"100px", display: "none"}});
        },
    };
})(jQuery, document);