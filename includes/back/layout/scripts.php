<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {

        //Variables globales
        let $host = window.location.protocol + '//' + window.location.host;
        let $timeoutAnimCard = 300; //delay d'animation entre chaque nouvelle carte
        let $compteur = -1;
        let $container = $('body');

        //function d'animation de chargement de cartes
        //$elem: élément à animer
        //$num: numéro délément à animer pour delay timer
        function animCard($elem, $num) {
            setTimeout(function () {
                $elem.removeClass("hidden-sm-up");
                $elem.addClass("animated flipInY");
                $compteur ++;
            },$timeoutAnimCard*$num);
        }

        //chargement initial des cartes
        $container.addClass("disable-scroll"); //sinon l'animation fait sauter l'ecran
        let $cards = $('.card:not(.not-animed)');
        $cards.each(function ($num) {
            let $card = $(this);
            animCard($card, $num);
        });

        //interval timer de recherche de fin de séquence d'animation pour retablir le scroll sur body
        let $interval1= setInterval(function() { findEndAnim($interval1, $cards.length); }, ($timeoutAnimCard));
        function findEndAnim($interval, $nbCards) {
            if($compteur == $nbCards-1){
                setTimeout(function () {
                    $container.removeClass("disable-scroll");
                    clearInterval($interval);
                },$timeoutAnimCard*2);
            }
        }


        //action ajax du bouton charger section sortie des resultats
        $('.results-filter button.load').click(function (e) {
            let $button = $(this);
            $button.blur();
            e.preventDefault();
            $('.results table').children().remove();
            let $url = $host + "/url_requete_sql_sortie_resultat.php";
            let jqxhr = $.ajax($url)
                .done(function(data, textStatus, jqXHR) {
                })
                .fail(function() {

                })
                .always(function () {
                    alert( "ce chargement est bidon, il faudra dev le back pour recuperer l'objet JSON!" );
                    $('.results table').append('<thead><tr><th>Nom Prénom</th><th>Session</th><th>Cours</th><th>Leçon</th>'+
                        '<th>Début</th><th>Fin</th><th>Note</th><th>Action</th></tr></thead><tbody><tr><td>Etudiant 1</td>'+
                        '<td>Lpatc 2015</td><td>xyz</td><td>abc</td><td>21-02-2013</td><td>28-02-2013</td><td>13.2</td>'+
                        '<td><a href="#" title="anoter">annoter les réponses</a></td></tr><tr><td>Etudiant 1</td><td>Lpatc 2015</td>'+
                        '<td>xyz</td><td>123</td><td>28-04-2013</td><td>03-06-2013</td><td>11.8</td><td><a href="#" title="anoter">'+
                        'annoter les réponses</a></td></tr><tr><td>Etudiant 1</td><td>Lpatc 2015</td><td>xyz</td><td>de fin</td>'+
                        '<td>01-07-2013</td><td>01-08-2013</td><td>18.8</td><td><a href="#" title="anoter">annoter les réponses</a>'+
                        '</td></tr></tbody>').children().children('tr').hide();
//                    $('.results table tr').each(function () {
//                       $(this).hide();
//                    });
                    $('.results table tr').each(function ($num) {
                        let $tr = $(this);
                        setTimeout(function () {
                            $tr.fadeIn(800);
                        },$timeoutAnimCard*$num);
                    });
                });
        });

        //action ajax du bouton voir plus
        $('.more button').click(function (e) {
            let $button = $(this);
            let $img = $button.next('img');
            let $list = $button.parent().parent().prev('.list-vignettes');
            let $cards_init = $list.children('div').children('.card');
            $button.blur();
            $button.toggleClass('hidden-xs-up');
            $img.toggleClass('hidden-xs-up');
            e.preventDefault();
            let $nbCardInit = $cards_init.length;
            let $url = $host + "/back_list_more.php?more="+ $button.data('quantity') +"&startcount="+($nbCardInit)+"&what="+$button.data('what');
            $button.data('modifier') ? $url=$url+"&modifier=true": false;
            let jqxhr = $.ajax($url)
                .done(function(data, textStatus, jqXHR) {
                    $list.append(data);
                    $list.children('div').children('.card').each(function ($num) {
                        if($num >= $nbCardInit) {
                            let $card = $(this);
                            $compteur = -1;
                            $container.addClass("disable-scroll");
                            let $interval2 = setInterval(function() { findEndAnim($interval2, $button.data('quantity')); }, ($timeoutAnimCard));
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