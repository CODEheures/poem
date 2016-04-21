<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {

        var $timeoutAnimCard = 300;

        //function d'animation de chargement de cartes
        var $compteur = -1;
        function animCard($elem, $num) {
            setTimeout(function () {
                $elem.removeClass("hidden-sm-up");
                $elem.addClass("animated flipInY");
                $compteur ++;
            },$timeoutAnimCard*$num);
        }

        //chargement initial des cartes
        $container = $('body');
        $container.addClass("disable-scroll");
        $cards = $('.card');
        $cards.each(function ($num) {
            var $card = $(this);
            animCard($card, $num);
        });

        var interval1 = setInterval(findEndAnim, ($timeoutAnimCard));

        function findEndAnim() {
            if($compteur == $cards.length-1){
                setTimeout(function () {
                    $container.removeClass("disable-scroll");
                    clearInterval(interval1);
                },$timeoutAnimCard*2);
            }
        }


        //action ajax du bouton voir plus
        $('.more button').click(function (e) {
            var $button = $(this);
            var $img = $('.more img');
            $button.blur();
            $button.toggleClass('hidden-xs-up');
            $img.toggleClass('hidden-xs-up');
            e.preventDefault();
            var $nbCardInit = $('.card').length;
            var $url = "http://poem.dev/back_list_more.php?more=8&startcount="+($nbCardInit)+"&what="+$button.data('what');
            var jqxhr = $.ajax($url)
                .done(function(data, textStatus, jqXHR) {
                    $('#list').append(data);
                    $('.card').each(function ($num) {
                        if($num >= $nbCardInit) {
                            var $card = $(this);
                            animeCard($card, $num-$nbCardInit);
                        }
                    });
                    $button.toggleClass('hidden-xs-up');
                    $img.toggleClass('hidden-xs-up');
                })
                .fail(function() {
                    alert( "erreur de chargement" );
                    $button.toggleClass('hidden-xs-up');
                    $img.toggleClass('hidden-xs-up');
                })
                .always(function () {

                });
        });
    });
</script>