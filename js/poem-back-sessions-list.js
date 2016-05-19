
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();
    
    //chargement initial des cartes
    poem.animCards();

    //action ajax du bouton charger section sortie des resultats
    $('.results-filter button.load').click(function (e) {
        e.preventDefault();
        var $button = $(this);
        poem.loadResults($button);
    });

    //action ajax du bouton voir plus
    $('.more button').click(function (e) {
        e.preventDefault();
        var $button = $(this);
        poem.moreCards($button);
    });
});