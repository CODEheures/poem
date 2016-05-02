
$(document).ready(function () {

    //action ajax du bouton charger section sortie des resultats
    $('.results-filter button.load').click(function (e) {
        e.preventDefault();
        var $button = $(this);
        poem.loadResults($button);
    });

});