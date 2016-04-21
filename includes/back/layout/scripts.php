<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {

        var $timeoutAnimCard = 300;
        var $compteur = -1;

        //function d'animation de chargement de cartes
        function animCard($elem, $num) {
            setTimeout(function () {
                $elem.removeClass("hidden-sm-up");
                $elem.addClass("animated flipInY");
                $compteur ++;
            },$timeoutAnimCard*$num);
        }

        //chargement initial des cartes
        var $container = $('body');
        $container.addClass("disable-scroll");
        var $cards = $('.card:not(.not-animed)');
        $cards.each(function ($num) {
            var $card = $(this);
            animCard($card, $num);
        });


        var $interval1= setInterval(function() { findEndAnim($interval1, $cards.length); }, ($timeoutAnimCard));

        function findEndAnim($interval, $nbCards) {
            console.log('hello');
            if($compteur == $nbCards-1){
                setTimeout(function () {
                    $container.removeClass("disable-scroll");
                    clearInterval($interval);
                },$timeoutAnimCard*2);
            }
        }


        //action ajax du bouton voir plus
        $('.more button').click(function (e) {
            var $button = $(this);
            var $img = $button.next('img');
            var $list = $button.parent().parent().prev('.list-vignettes');
            var $cards_init = $list.children('div').children('.card');
            $button.blur();
            $button.toggleClass('hidden-xs-up');
            $img.toggleClass('hidden-xs-up');
            e.preventDefault();
            var $nbCardInit = $cards_init.length;
            var $url = "http://poem.dev/back_list_more.php?more="+ $button.data('quantity') +"&startcount="+($nbCardInit)+"&what="+$button.data('what');
            var jqxhr = $.ajax($url)
                .done(function(data, textStatus, jqXHR) {
                    $list.append(data);
                    $list.children('div').children('.card').each(function ($num) {
                        if($num >= $nbCardInit) {
                            var $card = $(this);
                            $compteur = -1;
                            $container.addClass("disable-scroll");
                            var $interval2 = setInterval(function() { findEndAnim($interval2, $button.data('quantity')); }, ($timeoutAnimCard));
                            animCard($card, $num-$nbCardInit);
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