
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();

    //init des UI de la page
    poem.initSessions();

    //Exemple pour Ajout de qqcours en mode script au lieu de HTML pour démo
    // poem.addCours('du soir', '2016-12-10');
    // poem.addLesson('coursdusoir', {'name':'leçon 3', 'id': 3}, '2016-12-10');
    // poem.addLesson('coursdusoir', {'name':'leçon 4', 'id': 4}, '2016-07-10');
    //
    // poem.addCours('toujours', '2016-08-21');
    // poem.addLesson('courstoujours', {'name':'leçon 6', 'id': 6}, '2016-08-21');
    //
    // poem.addProf({'name': 'Roger Waters - rogerw@free.fr', 'id':4});
    //
    // poem.addEleve({'name': 'jimmy Hendrix - jimmyH@free.fr', 'id':4});
});