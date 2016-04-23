var poem = {
    compteurAnimCard: 0,
    host : window.location.protocol + '//' + window.location.host,
    delayAnimCards : 300,
    container: $('body'),
    animCard: poem_animCard,
    animCards: poem_animCards,
    findEndAnimCards: poem_findEndAnimCards,
    moreCards: poem_moreCards,
    loadResults: poem_loadResults
};

//function d'animation de chargement d'une carte
//$elem: élément à animer
//$num: numéro délément à animer pour delay timer
function poem_animCard($elem, $num) {
    let $poem = this;
    setTimeout(function () {
        $elem.removeClass("hidden-sm-up");
        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $elem.addClass("animated flipInY").one(animationEnd, function() {
            $(this).removeClass("animated flipInY").addClass("not-animed");
            $poem.compteurAnimCard ++;
        });
    },$poem.delayAnimCards*$num);
}

//function d'animation de plusieurs cartes
//par defaut les cartes à animer sont toutes saus les celles qui ont la classe '.not-animated'
function poem_animCards() {
    let $poem = this;
    $poem.compteurAnimCard = 0;
    let $cards = $('.card:not(.not-animed)');
    $poem.container.addClass("disable-scroll"); //sinon l'animation fait sauter l'ecran
    $cards.each(function ($num) {
        let $card = $(this);
        $poem.animCard($card, $num);
    });
    $poem.findEndAnimCards($cards.length);
}

//function de recherche de la fin de la séquence d'animation pour retablir le scroll sur body
//$nbCards: le nombre de cartes animées
function poem_findEndAnimCards($nbCards) {
    let $poem = this;
    let $interval1= setInterval(findEndAnim, $poem.delayAnimCards);
    function findEndAnim() {
        //console.log($poem.compteurAnimCard);
        if($poem.compteurAnimCard == $nbCards){
            setTimeout(function () {
                $poem.container.removeClass("disable-scroll");
                clearInterval($interval1);
            },$poem.delayAnimCards*2);
        }
    }
}

//Function de rajout de carte avec une requete Ajax
//$button: le bouton cliqué sui déclenche la fonction
function poem_moreCards($button) {
    let $poem = this;
    let $img = $button.next('img');
    let $list = $button.parent().parent().prev('.list-vignettes');
    let $cards_init = $list.children('div').children('.card');
    $button.blur();
    $button.toggleClass('hidden-xs-up');
    $img.toggleClass('hidden-xs-up');
    let $nbCardInit = $cards_init.length;
    let $url = poem.host + "/back_list_more.php?more="+ $button.data('quantity') +"&startcount="+($nbCardInit)+"&what="+$button.data('what');
    $button.data('modifier') ? $url=$url+"&modifier=true": false;
    let jqxhr = $.ajax($url)
        .done(function(data, textStatus, jqXHR) {
            $list.append(data);
            $poem.animCards();
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
}

function poem_loadResults($button) {
    let $poem = this;
    $button.blur();
    $('.results table').children().remove();
    let $url = $poem.host + "/url_requete_sql_sortie_resultat.php";
    let jqxhr = $.ajax($url)
        .done(function(data, textStatus, jqXHR) {
            //rien pour l'instant ici
        })
        .fail(function() {
            //rien pour l'instant ici
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

            $('.results table tr').each(function ($num) {
                let $tr = $(this);
                setTimeout(function () {
                    $tr.fadeIn(800);
                },$poem.delayAnimCards*$num);
            });
        });
}