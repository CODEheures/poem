
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();
    
    //init results: charge le json des choix possibles de l'input
    poem.initResults();
    
    //action ajax du bouton charger section sortie des resultats
    $('.results-filter button.load').click(function (e) {
        e.preventDefault();
        var $button = $(this);
        poem.loadResults($button);
    });

});