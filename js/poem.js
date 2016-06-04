/*********************************************************************************
/*** Librairie des fonctions JS de POEM
/***
/*** Cette librairie definit un objet nommé poem dans lequel sont repertoriés
/*** toutes les fonctions et attributs principaux employés dans une page poem
/***
/*** Exemple utilisation:
/***      Voir les fichiers poem-dashbord.js, poem-explorer.js poem-resultats
/***
/**********************************************************************************/


//objet POEM
var poem = {
    //var objet fixes
    container: $('body'), //global pas touche
    compteurAnimCard: 0, //global pas touche
    host : window.location.protocol + '//' + window.location.host, //global pas touche
    sessionListLessons : [], //global pas touche
    sessionListCollaborateurs : [], //global pas touche
    sessionListEleves : [], //global pas touche
    
    //var objet modifiables
    imgTagCloudUrl: './css/assets/ball5.png', // image de fond de l'explorateur
    maxTagInCloud: 80, //nombre de tags maxi de l'explorateur
    tagfontMultiplier: 0.952, //taille initiale des fonts de l'explorateur rem
    tagZoomFontHover: 1, //zoom lors du survol des tags de l'explorateur
    delayAnimCards : 300, //delay animation entre chaque carte
    notifsLife: 6000, //durée de vie des notifications
    dataOfExplorer: '/fake_remote_data/explorer-n2.php', //Ajax url liste imbriquée domaines/champs/leçon pour l'explorer
    listOfInputResults: '/fake_remote_data/list-input-results.php', //AJAX url liste de l'input de la page "voir les resultats
    domainesList: '/fake_remote_data/domaines-list.php', //AJAX url liste domaines pour creer leçon
    champsList: '/fake_remote_data/champs-list.php', //AJAX url liste champs pour creer leçon
    levelsList: '/fake_remote_data/levels-list.php', //AJAX url liste niveaux pour creer leçon
    lessonsList: '/fake_remote_data/lessons-list.php', //AJAX url liste leçons pour ajouter leçon à un cours
    languagesList: '/fake_remote_data/languages-list.php', //AJAX url liste langues pour preferences utilisateur
    collaborateursList: '/fake_remote_data/collaborateurs-list.php', //AJAX url liste collaborateurs pour ajouter leçon à un cours
    elevesList: '/fake_remote_data/eleves-list.php', //AJAX url liste leçons pour ajouter leçon à un cours
    questionProf: '/fake_remote_data/question-prof.php', //AJAX url page question du prof
    reponseEleveEtape1: '/fake_remote_data/reponse-eleve-etape1.php', //AJAX url page question du prof
    
    //Fonctions objet utiles
    animCard: poem_animCard,  //Animation d'une carte
    animCards: poem_animCards, //Animation des cartes du tableau de bord et de la page liste des sessions
    findEndAnimCards: poem_findEndAnimCards, //Recherche de fin de sequence animation carte
    moreCards: poem_moreCards, //Affichage de plus de cartes dans le parent d'un bouton nommé
    initResults: poem_init_results, //Init de l'input result de la page Voir les résultats
    loadResults: poem_loadResults, //Chargement des résultats demandés de la page Voir les résultats
    initNotifAndMessages: poem_init_notification_and_messages, //Init des div #messages et #notification
    loadExplorer: poem_load_explorer, //Chargement de l'explorer
    formLesson: poem_formLesson, //Init des UI de la page creer une leçon ou modifier une leçon
    addCours: poem_addCours, //Ajouter un cours page creer session ou modifier session
    addLesson: poem_addLesson, //Ajouter une leçon page creer session ou modifier session
    addProf: poem_addProf, //Ajouter une leçon page creer session ou modifier session
    addEleve: poem_addEleve, //Ajouter une leçon page creer session ou modifier session
    addEventClickLesson: poem_addEventClickLesson, //Ajout de l'evenement en cas de click sur bouton ajouter leçon page creer sessions ou modifier session
    initSessions: poem_init_sessions, //Init des UI de la page creer une session ou modifier une session
    recommandations: poem_recommandations, //gere l'integration en background des imagettes recommandations
    selections: poem_selection, //gere l'integration en background des imagettes selections
    initDashboard: poem_init_dashboard, //init du dashboard front
    init_lesson: poem_init_lesson, //init de la page des leçons
    init_profil: poem_init_profil, //init de la page du profil
};

//function d'animation de chargement d'une carte
//$elem: élément à animer
//$num: numéro délément à animer pour delay timer
function poem_animCard($elem, $num) {
    var $poem = this;
    setTimeout(function () {
        $elem.removeClass("hidden-sm-up");
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $elem.addClass("animated flipInY").one(animationEnd, function() {
            $(this).removeClass("animated flipInY").addClass("not-animed");
            $poem.compteurAnimCard ++;
        });
    },$poem.delayAnimCards*$num);
}

//function d'animation de plusieurs cartes
//par defaut les cartes à animer sont toutes saus les celles qui ont la classe '.not-animated'
function poem_animCards() {
    var $poem = this;
    $poem.compteurAnimCard = 0;
    var $cards = $('.card:not(.not-animed)');
    $poem.container.addClass("disable-scroll"); //sinon l'animation fait sauter l'ecran
    $cards.each(function ($num) {
        var $card = $(this);
        $poem.animCard($card, $num);
    });
    $poem.findEndAnimCards($cards.length);
}

//function de recherche de la fin de la séquence d'animation pour retablir le scroll sur body
//$nbCards: le nombre de cartes animées
function poem_findEndAnimCards($nbCards) {
    var $poem = this;
    var $interval1= setInterval(findEndAnim, $poem.delayAnimCards);
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
    var $poem = this;
    var $img = $button.next('img');
    var $list = $button.parent().parent().prev('.list-vignettes');
    var $cards_init = $list.children('div').children('.card');
    $button.blur();
    $button.toggleClass('hidden-xs-up');
    $img.toggleClass('hidden-xs-up');
    var $nbCardInit = $cards_init.length;
    var $url = poem.host + "/back_list_more.php?more="+ $button.data('quantity') +"&startcount="+($nbCardInit)+"&what="+$button.data('what');
    $button.data('modifier') ? $url=$url+"&modifier=true": false;
    var jqxhr = $.ajax($url)
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

//Function d'initialisation des données de l'input de la page sortie des resultats
function poem_init_results() {

    var $url = poem.host + poem.listOfInputResults;
    var jqxhr = $.ajax($url)
        .done(function(data, textStatus, jqXHR) {
            $('#dropdown1').puiautocomplete({
                completeSource: data,
                //forceSelection: true,
                dropdown: true,
                select: function (event, item) {
                    //rien à faire on laisse le button voir s'en charger
                }
            });
        })
        .fail(function() {
            alert( "erreur de chargement" );
        })
        .always(function () {

        });
}

//Function de chargement des résultats prof
//$button: le bouton cliqué sui déclenche la fonction
function poem_loadResults($button) {
    var $poem = this;
    $button.blur();
    $('.results table').children().remove();
    var $url = $poem.host + "/url_requete_sql_sortie_resultat.php";
    var jqxhr = $.ajax($url)
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
                var $tr = $(this);
                setTimeout(function () {
                    $tr.fadeIn(800);
                },$poem.delayAnimCards*$num);
            });
        });
}

//function pour mettre à jour les data dans un dropdown autocomplétion
function poem_init_dropdown($url, $dropName) {
    //Fonction Ajax pour mise à jour des dropdown champs domaine
    function ajax($url, $dropName) {
        $.ajax($url)
            .done(function(data, textStatus, jqXHR) {
                updateDropdown($dropName, data);
            })
            .fail(function() {
                alert( "erreur de chargement" );
            })
            .always(function () {

            });
    }

    //Fonction Mise à jour des dropdown Domaine champs et level
    function updateDropdown($name, $data) {
        var $dropDown = $('#' + $name);
        $dropDown.puiautocomplete({
            completeSource: $data,
            forceSelection: true,
            dropdown: true,
            select: function (event, item) {
                //si c'est un select du dropdown domaines on met à jour le dropdown champs
                if($name == 'domaines'){
                    ajax(poem.host + poem.champsList, 'champs');
                    $messages.puimessages('show', 'info', {summary: 'requete AJAX à faire', detail: 'Mise à jour de l\'input champs à faire sur AJAX'});
                }
            }
        });
    }
    
    ajax($url, $dropName);
}
 
//Function qui initie la mise en place des div message et notification
//A appeler dans tous les JS des pages
function poem_init_notification_and_messages() {
    $notification = $('#notification');
    $messages = $('#messages');
    $notification.puigrowl({life: poem.notifsLife});
    $messages.puimessages();
}

//Function de mise à jour de l'explorer
//data: resultat de la requete AJAX
//$tagCloudSettings: les settings du cloud de tag
function poem_update_explorer(data, $tagCloudsettings) {

    var $root = data; //Node root
    var $nodeId = 0;
    var $nodeFound; //node trouvé par une recherche par ID
    var $finalChoice; //node de la leçon choisie
    var $dataR = []; //Tous les nodes classés par niveau de profondeur
    var $dataN = []; //Nodes filtrés (seulement parents et enfant du node selectionné) classés par niveau de profondeur
    var $dropDown = [];
    var $tagCloudContainer = $('#tagcloud');
    var $ulTagCloud = $tagCloudContainer.find('ul');
    var $message;
    var $tagCloudViewDepth; //Profondeur du cloud en cours de visualisation

    //****************************************
    // Gestion des filtre slider ELO, langue, et filtre
    //****************************************
    var $eloSlider = $('#elo-slider');
    var $language = $('#language');
    var $filter = $('#filter');

    $eloSlider.slider({
        range: true,
        min: 1000,
        max: 9999,
        values: [ 2500, 4500 ],
        slide: function( event, ui ) {
            $('#elo-min').val( "min=" + ui.values[ 0 ]);
            $('#elo-max').val( "max=" + ui.values[ 1 ] );
            $messages.puimessages('show', 'info', [{
                summary: 'Requete Ajax à creer ici:',
                detail: " Faire la requete et lancer la fonction poem_update_explorer"
            }]);
        }
    });
    $('#elo-min').val( "min=" + $eloSlider.slider("values", 0));
    $('#elo-max').val( "max=" + $eloSlider.slider("values", 1));
    $language.puiswitch({
        onLabel: "oui",
        offLabel: "non",
        change: function (e) {
            $messages.puimessages('show', 'info', [{
                    summary: 'Requete Ajax à creer ici:',
                    detail: " Faire la requete et lancer la fonction poem_update_explorer"
                }]);
        }
    });

    $filter.click(function (e) {
        e.preventDefault();
        $messages.puimessages('show', 'info', [{
            summary: 'Requete Ajax à creer ici:',
            detail: " Faire la requete et lancer la fonction poem_update_explorer"
        }]);
    });



    //************************************
    //Fonctions de gestion des noeuds JSON
    //************************************

    //Attribution initiale récursive des parents - profondeur de noeud - et attribut visible=true à chaque node
    function setParentAndDepth($node, $depth) {
        $depth = typeof $depth !== 'undefined' ? $depth : 0;

        $nodeId++;
        $node.id = $nodeId;
        $node.depth = $depth;
        $node.visible = true;
        if($node.children != undefined){
            $depth++;
            for($num in $node.children){
                $node.children[$num].parent = $node;
                setParentAndDepth($node.children[$num], $depth);
            }
        }
    }

    //Setting de l'attribut récursif visible à un node et ses enfants recursifs
    function setVisibleChild($node, $visible, $recursive) {
        $visible = typeof $visible !== 'undefined' ? $visible : true;
        $recursive = typeof $recursive !== 'undefined' ? $recursive : false;

        $node.visible = $visible;
        if($node.children != undefined){
            for($num in $node.children){
                $node.children[$num].visible = $visible;
                $recursive ? setVisibleChild($node.children[$num], $visible, $recursive) : null;
            }
        }
    }

    //Ajuste l'attribut visible à true des parents et enfant du noeud choisi
    //Met l'attribut visible à false pour tous les autres
    function dataFilter($node) {
        setVisibleChild($root, false, true);
        setVisibleChild($node, true, true);
        //tant que le node selectionné a un parent tous les freres seront visibles dans le dropdown apres selection
        var $tempNode = $node.parent;
        while ($tempNode !== undefined) {
            setVisibleChild($tempNode, true, false);
            $tempNode = $tempNode.parent;
        }
        $dataN = [];
        setDataN($root);

        $message = $dataN[3].length + ' leçons dans ';
        if($dropDown[2] === undefined || $dropDown[2].val()== ''){
            $message  = $message + $dataN[2].length + ' champs dans ';
        } else if ($dropDown[2] !== undefined && $dropDown[2].val() !== ''){
            $message  = $message + 1 + ' champs dans ';
        }
        if($dropDown[1] === undefined || $dropDown[1].val() == '') {
            $message = $message + $dataN[1].length  + ' domaines';
        } else if ($dropDown[1] !== undefined && $dropDown[1].val() !== ''){
            $message = $message + 1  + ' domaines';
        }
    }

    //Mise à jour dataN
    function setDataN($node) {
        if($node.visible==true){
            if($dataN[$node.depth] == undefined) { $dataN[$node.depth] = []}
            $dataN[$node.depth].push({"label": $node.name, "value": $node.id});
        }
        if($node.children != undefined){
            for($num in $node.children){
                setDataN($node.children[$num]);
            }
        }
    }

    //Mise à jour dataR
    function setDataR($node) {
        $node = typeof $node !== 'undefined' ? $node : $root;

        if($node.visible==true){
            if($dataR[$node.depth] == undefined) { $dataR[$node.depth] = []}
            $dataR[$node.depth].push({"label": $node.name, "value": $node.id});
        }
        if($node.children != undefined){
            for($num in $node.children){
                setDataR($node.children[$num]);
            }
        }
    }

    //recherche d'un node par Id
    function getNodeById($nodeId, $node) {
        $node = typeof $node !== 'undefined' ? $node : $root;

        if($node==$root){ $nodeFound = null }
        if($node.children != undefined){
            for($num in $node.children){
                if($node.children[$num].id == $nodeId) {
                    $nodeFound = $node.children[$num];
                } else {
                    getNodeById($nodeId, $node.children[$num]);
                }
            }
        }
    }

    //Ajout des tags au cloud
    function addTagsCloud($depth) {
        for(var $i in $dataN[$depth]) {
            $ulTagCloud.append('<li data-node-id="'+ $dataN[$depth][$i].value +'">'+$dataN[$depth][$i].label +'</li>')
        }
        $tagCloudViewDepth=($depth);
        $tagCloudContainer.tagoSphere($tagCloudsettings);

        $ulTagCloud.find('li').click(function (e) {
            e.preventDefault();
            var $this = this;
            getNodeById($this.dataset.nodeId);
            update($nodeFound);
        });

        $ulTagCloud.find('li').mousewheel(function (e) {
            e.preventDefault();
            if(e.deltaY == 1) {
                var $this = this;
                getNodeById($this.dataset.nodeId);
                update($nodeFound);
            } else {
                if($depth > 1) { $('button.backward').trigger('click'); }
            }
        });
    }

    //Mise à jour des tags du cloud
    function updateTagsCloudLi($depth) {
        $messages.puimessages('clear');
        $tagCloudContainer.tagoSphere('cancelAnim');
        if($ulTagCloud.find('li').length > 0){
            $ulTagCloud.find('li').each(function () {
                var $style = window.getComputedStyle($(this)[0]);
                var $transform = ($style.transform || $style.webkitTransform || $style.mozTransform).split(',');
                var $left = parseFloat($transform[4]);
                var $top = parseFloat($transform[5]);
                $(this)[0].style.transform = 'translateX(0) translateY(0)';
                $(this).css({'left' : $left +'px', 'top' : $top +'px'});
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass("animated zoomOut").one(animationEnd, function() {
                    $(this).remove();
                    if ($ulTagCloud.find('li').length == 0) {
                        addTagsCloud($depth);
                    }
                });
            });
        } else {
            addTagsCloud($depth);
        }
        if ($depth == 2) {
            $tagCloudContainer.parent().find('button.backward').html('<i class="fa fa-step-backward"></i> Domaine').show();
            $tagCloudContainer.parent().find('button.forward').html('Leçons <i class="fa fa-step-forward"></i>').show();
            $tagCloudContainer.find('h3').html('Champs');
        } else if ($depth == 3) {
            $tagCloudContainer.parent().find('button.backward').html('<i class="fa fa-step-backward"></i> Champs').show();
            $tagCloudContainer.parent().find('button.forward').hide();
            $tagCloudContainer.find('h3').html('Leçons');
        } else if ($depth == 1) {
            $tagCloudContainer.parent().find('button.forward').html('Champs <i class="fa fa-step-forward"></i>').show();
            $tagCloudContainer.parent().find('button.backward').hide();
            $tagCloudContainer.find('h3').html('Domaines');
        } else {
            $tagCloudContainer.parent().find('button.backward').hide();
            $tagCloudContainer.parent().find('button.forward').hide();
        }

        if($dataN[$depth].length > $tagCloudsettings.maxtags) {
            $messages.puimessages('show', 'info', [{
                summary: 'Ajouter des filtres:',
                detail: " l'affichage de l'explorateur graphique à été limité à 80 résultats sur les "
                + $dataN[$depth].length + " disponibles."
            }]);
        }
    }

    //Mise à jour des dropdown
    function updateDropDown($nodeSelected) {
        //Pour chaque niveau de profondeur
        var $tempNodeParent = $nodeSelected.parent;
        for(var $depth = $dataR.length-1 ; $depth > 0 ; $depth--) {
            $source = [];
            //Si le niveau est inferieur tous les nodes sont acceptés dans la liste (pour pouvoir changer d'avis!)
            if ($depth <= 1 /*$nodeSelected.depth*/ && $depth < $dataN.length-1) {
                for($num in $dataR[$depth]){
                    $source.push({label:$dataR[$depth][$num].label , value: $dataR[$depth][$num].value})
                }
                //si le niveau est superieur alors la liste ne contient que les nodes enfants filtrés
            } else {
                for($num in $dataN[$depth]){
                    $source.push({label:$dataN[$depth][$num].label , value: $dataN[$depth][$num].value})
                }
            }

            //creation du dropdown
            $dropDown[$depth] = $('#dropdown' + $depth);
            $dropDown[$depth].puiautocomplete({
                completeSource: $source,
                forceSelection: true,
                dropdown: true,
                select: function (event, item) {
                    var $nodeId = item.data('value');
                    getNodeById($nodeId);
                    update($nodeFound);
                    $notification.puigrowl('show', [{
                        severity: 'info',
                        summary: 'Votre choix',
                        detail: item.data('label')
                    }]);
                }
            });

            $dropDown[$depth].on('input', (function($depth) {
                return function () {
                    if($dropDown[$depth].val() == '') {
                        if($depth > 1) {
                            var $nodeId = $dataN[$depth-1][0].value;
                            getNodeById($nodeId);
                            update($nodeFound);
                        } else {
                            //si c'est le dropdown niveau 1 qui est effacé on revient au node root
                            update($root);
                        }
                    }
                }
            })($depth));

            //Si le niveau est inferieur on affiche le choix fait dans le dropdown
            if ($depth < $nodeSelected.depth) {
                $dropDown[$depth].val($tempNodeParent.name);
                $tempNodeParent = $tempNodeParent.parent;
                //Si le niveau est superieur alors le dropdown est vide et l'utilisateur pourra selectionner un enfant du node
            } else if ($depth > $nodeSelected.depth) {
                $dropDown[$depth].val('');
            } else if ($depth = $nodeSelected.depth) {
                $dropDown[$depth].val($nodeSelected.name);
            }
        }

    }

    //Mise à jour globale
    function update($nodeSelected) {
        //exemple: dataFilter($root.children[1].children[2]);
        dataFilter($nodeSelected);

        //Mise à jour des listes dropdown
        updateDropDown($nodeSelected);


        //Génération du cloud
        if($nodeSelected.depth+1 < $dataN.length) {
            updateTagsCloudLi($nodeSelected.depth+1);
        }



        $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: $message}]);
    }

    //Initiate page
    //setting parents et profondeur de noeud sur JSON
    setParentAndDepth($root);
    setDataR();
    $nodeFound = $root;
    update($nodeFound);


    $('button.backward').click(function (e) {
        e.preventDefault();
        $(this).blur();
        if($tagCloudViewDepth == $dataR.length-1 && $nodeFound.depth == $dataR.length-1) {
            $nodeFound = ($nodeFound.parent).parent;
            update($nodeFound);
        } else if($tagCloudViewDepth > $nodeFound.depth+1){
            updateTagsCloudLi($tagCloudViewDepth-1);
        } else {
            $nodeFound = $nodeFound.parent;
            update($nodeFound);
        }
    });

    $('button.forward').click(function (e) {
        e.preventDefault();
        $(this).blur();
        updateTagsCloudLi($tagCloudViewDepth+1);
    });



}

//Function de chargement de l'explorer: AJAX + lancement de poem_update_explorer
function poem_load_explorer($tagCloudsettings) {

    var $img = $('.load img');
    $img.hasClass('hidden-xs-up') ? $img.toggleClass('hidden-xs-up') : $img.toggleClass('hidden');

    var $url = poem.host + poem.dataOfExplorer;
    var jqxhr = $.ajax($url)
        .done(function(data, textStatus, jqXHR) {
            var $img = $('.load img');
            $img.addClass('hidden');
            poem_update_explorer(data, $tagCloudsettings)
        })
        .fail(function() {
            alert( "erreur de chargement" );
        })
        .always(function () {

        });
}

//Function du form de la page creer leçons
function poem_formLesson() {



    //Init Dropdowns domaines et champs
    poem_init_dropdown(poem.host + poem.domainesList, 'domaines');
    $('#champs').puiautocomplete({
        completeSource: [],
        forceSelection: true,
        dropdown: true,
        select: function (event, item) {
            //
        }
    });

    //Switch public
    //initialisation puis check on puis event sur change pour affichage de la date de fin "privé"
    $("#public-lesson").puiswitch();
    $("#public-lesson").puiswitch('check');
    $("#public-lesson").puiswitch({
        'change': function () {
            $('div.prive-date').toggleClass('hidden-xs-up')
        }
    });

    //init dropdown des langes
    $('#lang').puiautocomplete();

    //init dropdown level
    poem_init_dropdown(poem.host + poem.levelsList, 'level');

    //init textareas en autoresize
    $('#description').puiinputtextarea({autoResize: true});
    $('#annexes').puiinputtextarea({autoResize: true});
    $('#message').puiinputtextarea({autoResize: true});

    //Button pour l'autorisation aux etudiants
    $('#formules').puitogglebutton({
        onLabel: "j'autorise l’étudiant à apporter des réponses avec images et/ou formules",
        offLabel: "j'autorise l’étudiant à apporter des réponses avec images et/ou formules",
        onIcon: 'fa-check-square',
        offIcon: 'fa-square'
    });

    //init du tabView Questions
    $('#questions').puitabview();

    //Ajout d'un tab question
    $('#add-question').click(function (e) {
        e.preventDefault();
        $questions = $('#questions');
        $lis = $questions.find('li');
        function myInnerHtml($number) {
            return ''
                + '<div class="row">'
                + '<div class="col-sm-12">'
                + '<p class="text-xs-center bg-info">*Creer votre question et fournissez la réponse. La leçon ne sera publiée que si vous posez au moins 3 questions*</p>'
                + '</div>'
                + '</div>'
                + '<div class="row">'
                + '<div class="col-sm-12">'
                + '<button type="button" class="btn btn-primary pull-right"><i class="fa fa-hdd-o"></i> Sauver cette question</button>'
                + '</div>'
                + '</div>'
                + '<div class="row">'
                + '<div class="col-md-6">'
                + '<h2>Question ' + $number + '</h2>'
                + '<textarea name="questionEditor' + $number + '" id="questionEditor' + $number + '" rows="10" cols="80"></textarea>'
                + '</div>'
                + '<div class="col-md-6">'
                + '<h2>Réponse attendue</h2>'
                + '<textarea name="answerEditor' + $number + '" id="answerEditor' + $number + '" rows="10" cols="80"></textarea>'
                + '</div>'
                + '</div>';
        }
        $questions.puitabview('add', 'question'+ ($lis.length+1), 'tab' + ($lis.length+1), myInnerHtml($lis.length+1));
        CKEDITOR.replace( 'questionEditor' + ($lis.length+1) );
        CKEDITOR.replace( 'answerEditor' + ($lis.length+1) );
    });

    //CKeditor des textarea questions/responses
    // voir ici pour config: http://docs.ckeditor.com/#!/api/CKEDITOR.config
    // voir ici pour lire les données: http://docs.ckeditor.com/#!/guide/dev_savedata
    CKEDITOR.replace( 'questionEditor1' );
    CKEDITOR.replace( 'answerEditor1' );
    CKEDITOR.replace( 'questionEditor2' );
    CKEDITOR.replace( 'answerEditor2' );
    CKEDITOR.replace( 'questionEditor3' );
    CKEDITOR.replace( 'answerEditor3' );

}

//fonction ajouter un cours page creer sessions ou modif session
function poem_addCours($name, $date) {
    var $id = $name.toLowerCase().replace(/\s+/, "");
    if($name && !$('#cours'+$id).length && $date) {
        var $templateCours = ''
            +'<table id="cours' + $id + '" class="table table-hover cours">'
            +'<thead class="thead-inverse">'
            +'<tr>'
            +'<th>' + $name + '</th>'
            +'<th>0 leçons</th>'
            +'<th>à finir le ' + $date + '</th>'
            +'<th><button type="button" class="btn btn-danger btn-sm">supprimer</button></th>'
            +'<th><a href="#" class="btn btn-secondary open-lessons" title="editer les leçons"><i class="fa fa-arrow-down"></i></a></th>'
            +'</tr>'
            +'</thead>'
            +'<tbody>'
            +'<fielset>'
            +'<td></td>'
            +'<td>'
            +'<fieldset class="form-group">'
            +'<label for="input-add-lesson-name-'+ $id +'">ajouter une leçon</label>'
            +'<input id="input-add-lesson-name-'+ $id +'" name="input-add-lesson-name-'+ $id +'" class="input-add-lesson-name" type="text">'
            +'</fielset>'
            +'</td>'
            +'<td>'
            +'<fieldset class="form-group">'
            +'<label for="input-add-lesson-date-'+ $id +'">date de fin leçon</label>'
            +'<input id="input-add-lesson-date-'+ $id +'" name="input-add-lesson-date-'+ $id +'" class="form-control input-add-lesson-date" type="date">'
            +'</fielset>'
            +'</td>'
            +'<td><button id="addleçon-' + $id + '" type="button" class="btn btn-primary add-lesson">Ajouter</button></td>'
            +'</tr>'
            +'</tbody>'
            +'</table>';
        //insertion du template lessons
        $('.list-cours').append($templateCours);

        //hide des lessons
        var $cours = $('#cours'+$id);
        $cours.find('tbody').toggle();

        //toogle lessons si clic du btn .open-lessons
        $cours.find('.open-lessons').click(function (e) {
            e.preventDefault();
            is_expended = $(this).parent().parent().parent().siblings('tbody').toggle().is(':visible');
            if (is_expended)
                $(this).children().removeClass("fa-arrow-down").addClass("fa-arrow-up")
            else
                $(this).children().removeClass("fa-arrow-up").addClass("fa-arrow-down")
                
        });

        //init puiautocomplete de 'input lesson
        var $lesson = {};
        $cours.find('.input-add-lesson-name').each(function () {
            $(this).puiautocomplete({
                completeSource: poem.sessionListLessons,
                forceSelection: true,
                dropdown: true,
                select: function (event, item) {
                    $lesson.name = item.data('label');
                    $lesson.id = item.data('value');
                }
            });
        });

        $cours.find('.add-lesson').each(function () {
            poem.addEventClickLesson(this, $lesson);
        });

        $cours.find('thead th .btn-danger').click(function (e) {
            e.preventDefault();
            var $alert = $('<div id="alert"></div>').prependTo('body');
            $alert.attr('title', 'confirmez la suppression');
            $alert.html('<p>Confirmez-vous la suppression de ce cours?</p>');
            $alert.puidialog({
                showEffect: 'fade',
                hideEffect: 'fade',
                minimizable: false,
                maximizable: false,
                responsive: true,
                minWidth: 200,
                modal: true,
                buttons: [{
                    text: 'Oui',
                    icon: 'fa-check',
                    click: function() {
                        $alert.puidialog('hide');
                        $cours.remove();
                        $alert.remove();
                    }
                },
                    {
                        text: 'Non',
                        icon: 'fa-close',
                        click: function() {
                            $alert.puidialog('hide');
                            $alert.remove();
                        }
                    }
                ]
            });
            $alert.puidialog('show');
        });

    } else {
        $('#'+$id).length ? $notification.puigrowl('show', [{severity: 'info', summary: 'Ce cours existe déjà', detail: 'Le nom de ce cours est déjà attribué à cette session'}]) : null;
        !$name ? $notification.puigrowl('show', [{severity: 'info', summary: 'Nom du cours', detail: 'Nommez le cours pour l\'ajouter'}]) : null;
        !$date ? $notification.puigrowl('show', [{severity: 'info', summary: 'Date de fin du cours', detail: 'attribuez une date de fin à votre cours'}]) : null;
    }
}

//fonction ajouter un prof page creer sessions ou modif session
function poem_addEleve($eleve) {
    var $id = $eleve.id;
    var $name = $eleve.name;
    if($name && !$('#eleve'+$id).length) {
        var $templateProf = ''
            +'<tr id="eleve' + $id + '">'
            +'<td>' + $name + '</td>'
            +'<td><button type="button" class="btn btn-danger btn-sm">retirer</button></td>'
            +'</tr>';
        //insertion du template lessons
        $('#tbody-addEleve').append($templateProf);

        $eleve = $('#eleve'+$id);
        $eleve.find('.btn-danger').click(function (e) {
            e.preventDefault();
            var $alert = $('<div id="alert"></div>').prependTo('body');
            $alert.attr('title', 'confirmez la suppression');
            $alert.html('<p>Confirmez-vous la suppression de ce collaborateur?</p>');
            $alert.puidialog({
                showEffect: 'fade',
                hideEffect: 'fade',
                minimizable: false,
                maximizable: false,
                responsive: true,
                minWidth: 200,
                modal: true,
                buttons: [{
                    text: 'Oui',
                    icon: 'fa-check',
                    click: function() {
                        $alert.puidialog('hide');
                        $eleve.remove();
                        $alert.remove();
                    }
                },
                    {
                        text: 'Non',
                        icon: 'fa-close',
                        click: function() {
                            $alert.puidialog('hide');
                            $alert.remove();
                        }
                    }
                ]
            });
            $alert.puidialog('show');
        });

    } else {
        $('#eleve'+$id).length ? $notification.puigrowl('show', [{severity: 'info', summary: 'Cet élève est déjà dans la liste', detail: 'Le nom de cet élève est déjà attribué à cette session'}]) : null;
        !$name ? $notification.puigrowl('show', [{severity: 'info', summary: 'Nom de l\'élève', detail: 'Choisissez un élève pour l\'ajouter'}]) : null;
    }
}

//fonction ajouter un prof page creer sessions ou modif session
function poem_addProf($prof) {
    var $id = $prof.id;
    var $name = $prof.name;
    if($name && !$('#prof'+$id).length) {
        var $templateProf = ''
            +'<tr id="prof' + $id + '">'
            +'<td>' + $name + '</td>'
            +'<td><button type="button" class="btn btn-danger btn-sm">retirer</button></td>'
            +'</tr>';
        //insertion du template lessons
        $('#tbody-addProf').append($templateProf);

        $prof = $('#prof'+$id);
        $prof.find('.btn-danger').click(function (e) {
            e.preventDefault();
            var $alert = $('<div id="alert"></div>').prependTo('body');
            $alert.attr('title', 'confirmez la suppression');
            $alert.html('<p>Confirmez-vous la suppression de ce collaborateur?</p>');
            $alert.puidialog({
                showEffect: 'fade',
                hideEffect: 'fade',
                minimizable: false,
                maximizable: false,
                responsive: true,
                minWidth: 200,
                modal: true,
                buttons: [{
                    text: 'Oui',
                    icon: 'fa-check',
                    click: function() {
                        $alert.puidialog('hide');
                        $prof.remove();
                        $alert.remove();
                    }
                },
                    {
                        text: 'Non',
                        icon: 'fa-close',
                        click: function() {
                            $alert.puidialog('hide');
                            $alert.remove();
                        }
                    }
                ]
            });
            $alert.puidialog('show');
        });

    } else {
        $('#prof'+$id).length ? $notification.puigrowl('show', [{severity: 'info', summary: 'Ce collaborateur est déjà dans la liste', detail: 'Le nom de ce collaborateur est déjà attribué à cette session'}]) : null;
        !$name ? $notification.puigrowl('show', [{severity: 'info', summary: 'Nom du collaborateur', detail: 'Choisissez un collaborateur pour l\'ajouter'}]) : null;
    }
}

//function ajouter une leçon à un cours page creer session ou modifier session
function poem_addLesson($idCours, $lesson, $date) {
    var $cours = $('#' + $idCours);
    var $templateLesson = ''
        +'<tr id="lesson'+ $lesson.id +'">'
        +'<td></td>'
        +'<td>' + $lesson.name + '</td>'
        +'<td>à finir le ' + $date + '</td>'
        +'<td><button type="button" class="btn btn-danger btn-sm">supprimer</button></td>'
        +'</tr>';

    var $lastTr = $cours.find('tbody').find('tr').last();
    $($templateLesson).insertBefore($lastTr);

    $('#lesson'+$lesson.id).find('td button.btn-danger').click(function (e) {
        e.preventDefault();
        var $alert = $('<div id="alert"></div>').prependTo('body');
        $alert.attr('title', 'confirmez la suppression');
        $alert.html('<p>Confirmez-vous la suppression de cette leçon?</p>');
        $alert.puidialog({
            showEffect: 'fade',
            hideEffect: 'fade',
            minimizable: false,
            maximizable: false,
            responsive: true,
            minWidth: 200,
            modal: true,
            buttons: [{
                text: 'Oui',
                icon: 'fa-check',
                click: function() {
                    $alert.puidialog('hide');
                    var $cours = $('#lesson'+$lesson.id).parent().parent();
                    $('#lesson'+$lesson.id).remove();
                    var $nbcours=$cours.find('tbody').find('tr').length-1;
                    $cours.find('thead th:nth-of-type(2)').html($nbcours+' leçons');
                    $alert.remove();
                }
            },
                {
                    text: 'Non',
                    icon: 'fa-close',
                    click: function() {
                        $alert.puidialog('hide');
                        $alert.remove();
                    }
                }
            ]
        });
        $alert.puidialog('show');
    });

    var $nbcours=$cours.find('tbody').find('tr').length-1;
    $cours.find('thead th:nth-of-type(2)').html($nbcours+' leçons');
}

//Function init de la page creer session ou ajout session
function poem_init_sessions() {
    //init de la liste des leçons disponibles à l'ajout
    var jqxhr = $.ajax(poem.host + poem.lessonsList)
        .done(function(data, textStatus, jqXHR) {
            poem.sessionListLessons = data;
            $('.input-add-lesson-name').each(function () {
                $(this).puiautocomplete({completeSource: poem.sessionListLessons});
            });
        })
        .fail(function() {
            alert( "erreur de chargement de la liste des leçons" );
        })
        .always(function () {

        });

    //init de la liste des collaborateurs disponibles à l'ajout
    var $prof={};
    var jqxhr2 = $.ajax(poem.host + poem.collaborateursList)
        .done(function(data, textStatus, jqXHR) {
            poem.sessionListCollaborateurs = data;
            $('#input-add-prof').puiautocomplete({
                completeSource: poem.sessionListCollaborateurs,
                forceSelection: true,
                dropdown: true,
                select: function (event,item) {
                    $prof.name = item.data('label');
                    $prof.id = item.data('value');
                }
            });
        })
        .fail(function() {
            alert( "erreur de chargement de la liste des collaborateurs" );
        })
        .always(function () {

        });

    //init de la liste des eleves disponibles à l'ajout
    var $eleve={};
    var jqxhr3 = $.ajax(poem.host + poem.elevesList)
        .done(function(data, textStatus, jqXHR) {
            poem.sessionListEleves = data;
            $('#input-add-eleve').puiautocomplete({
                completeSource: poem.sessionListEleves,
                forceSelection: true,
                dropdown: true,
                select: function (event,item) {
                    $eleve.name = item.data('label');
                    $eleve.id = item.data('value');
                }
            });
        })
        .fail(function() {
            alert( "erreur de chargement de la liste des eleves" );
        })
        .always(function () {

        });
    
    //switch cours<->users
    $('.edit-users').hide();
    $('.to-cours').hide();
    $('button.to-cours').click(function () {
        $('.edit-cours').show("slow");
        $('.edit-cours').find('table').css({'min-width': ''});
        $('.edit-users').hide("slow");
        $('.to-cours').hide("slow");
        $('.to-users').show("slow");
    });
    $('button.to-users').click(function () {
        $('.edit-users').show("slow");
        $('.edit-cours').find('table').css({'min-width': '0'});
        $('.edit-cours').hide("slow");
        $('.to-users').hide("slow");
        $('.to-cours').show("slow");
    });

    //**********************************************************
    //Si la page est chargée avec des éléments HTML Cours-Leçon 
    //**********************************************************
    //Fermer le tableau leçon pour chaque cours déjà present en HTML
    $('.cours').each(function () { $(this).find('tbody').toggle(); });

    //ouverture-fermeture du panneau des leçons déjà presentes en HTML
    $('.open-lessons').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $(this).parent().parent().parent().siblings('tbody').toggle();
        });
    });

    //init des input de la liste des leçon
    $('.input-add-lesson-name').each(function () {
        $(this).puiautocomplete({
            completeSource: poem.sessionListLessons,
            forceSelection: true,
            dropdown: true,
            select: function (event, item) {
                $lesson.name = item.data('label');
                $lesson.id = item.data('value');
            }
        });
    });

    //Evenement click ajouter un cours
    $('#addcours').click(function (e) {
        e.preventDefault();
        var $name = $('#add-cours-name').val().toLowerCase();
        var $date = $('#add-cours-date').val();
        poem.addCours($name, $date);
    });

    //ajouter evenement click sur bouton ajouter leçon
    $('.add-lesson').each(function () {
        poem.addEventClickLesson(this,$lesson);
    });

    //Evenement click ajouter un prof
    $('#addprof').click(function (e) {
        e.preventDefault();
        poem.addProf($prof);
    });

    //Evenement click ajouter un prof
    $('#addeleve').click(function (e) {
        e.preventDefault();
        poem.addEleve($eleve);
    });


}

//function partagée pour l'ajout de l'evenement click sur le bouton ajouter leçon page creer session ou ajout session
function poem_addEventClickLesson(elem, $lesson) {
    $(elem).click(function (e) {
        e.preventDefault();
        var $idCours = $(this).parent().parent().parent().parent().attr("id");
        var $cours = $('#' + $idCours);
        var $date = $cours.find('.input-add-lesson-date').val();
        poem.addLesson($idCours, $lesson, $date)
    });
}

//function d'ajout d'un background sur une selection DOM en fonction de leur data-img
function poem_addBackgound($selecteur) {
    $($selecteur).each(function () {
        $(this).css({
            "backgroundImage" : 'url("./public/img/' + $(this).data('img')+'")'
        });
    });
}

//function gestion des imagettes recommandations
function poem_recommandations() {
    var $selecteur = '.recommandations .content .img';
    poem_addBackgound($selecteur);
}

//function de gestion des imagettes de la selection de l'explorateur
function poem_selection() {
    var $selecteur = '.selection .content .img';
    poem_addBackgound($selecteur);
}
//function init_dashboard front
function poem_init_dashboard() {
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultFontSize = 8 ;
    Chart.defaults.global.defaultColor = '#fff';
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.titleFontSize = 10;
    Chart.defaults.global.tooltips.bodyFontSize = 10;
    Chart.defaults.global.responsive = false;
    Chart.defaults.global.backGroundColor = 'rgba(255,255,255,0.5)';

    Chart.pluginService.register({
        beforeDraw: function (chart, easing) {
            if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                var helpers = Chart.helpers;
                var ctx = chart.chart.ctx;
                var chartArea = chart.chartArea;

                ctx.save();
                ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                ctx.restore();
            }
        }
    });


    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#fff",
                borderColor: "#fff",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#fff",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#000",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1000, 1200, 2300, 1953, 2005, 2500, 3243],
            }
        ]
    };

    var ctx = $('#chartdiv');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            chartArea: {backgroundColor: "#a4c5e4"},
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {display: false},
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        tickMarkLength: 5,
                        color: "rgba(255,255,255,1)",
                        zeroLineColor: "rgba(255,255,255,1)"
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {display: true},
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        tickMarkLength: 4,
                        color: "rgba(255,255,255,1)",
                        zeroLineColor: "rgba(255,255,255,1)"
                    }
                }]
            }
        }
    });

    ctx.css({
       'height' : '7.5rem',
       'width' : '16.72rem'
    });

    $("#dashboard").find('.list .badge').each(function() {
        $(this).hide();
    });

    $("#dashboard").find('.badges .plus a').click(function (e) {
        e.preventDefault();

        $(this).parent().parent().find('.list .badge').each(function() {
            $(this).slideToggle();
        });
    });

    $('.list').find('table').dataTable({
        //voir options ici: https://www.datatables.net/reference/option/
        autoWidth: false,
        lengthChange: false,
        searching: false,
        pageLength: 4,
        order: [[4, 'asc']]
    });
}

//function init_lesson de la page des leçon du front
function poem_init_lesson() {

    //creation des onglet jquery-ui
    $( "#etapes" ).tabs();

    //Btn Voir la leçon
    $("#to-lesson").click(function (e) {
        e.preventDefault();
        $( "#etapes" ).tabs("option", "active", 0);
    });

    //Btn s'inscrire à cette leçon
    $("#inscription").click(function (e) {
        e.preventDefault();
        $messages.puimessages('show', 'info', [{
            summary: 'Fonction à creer ici:',
            detail: " creer ici la fonction qui gere l'inscription de l'utilisateur à la leçon"
        }]);
    });

    //Btn no-distraction
    $noDistraction = $('#no-distraction');
    $noDistraction2 = $('#no-distraction2');
    $noDistraction.puiswitch({
        onLabel: "oui",
        offLabel: "non",
        change: noDistract
    });

    function noDistract() {
        $('#poem-navbar').slideToggle();
        $('#lesson').find('.header').slideToggle();
        $('#poem-footer').slideToggle();
        $('#ligthbox').fadeToggle();
    }

    //CKEDITOR
    // voir [url_base_poem]/ckeditor/samples/toolbarconfigurator/index.html#basic
    var toolbarGroups = [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'forms', groups: [ 'forms' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        '/',
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        '/',
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'about' ] },
        ];

    var removeButtons = 'Source,Save,NewPage,Templates,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Anchor,Flash,Smiley,PageBreak,Iframe,Styles,Format,ShowBlocks,About,PasteFromWord';


    //CKEDITOR pour les questions
    // voir ici pour config: http://docs.ckeditor.com/#!/api/CKEDITOR.config
    var $questionEditors = $('.questionEditor');
    $questionEditors.each(function () {
        var $questionEditor = CKEDITOR.replace( $(this)[0].id, {
            toolbarCanCollapse: true,
            toolbarStartupExpanded : false,
            toolbarGroups : toolbarGroups,
            removeButtons: removeButtons,
            readOnly: true,
            skin: 'flat'
        });

        var jqxhr = $.ajax(poem.host + poem.questionProf)
            .done(function(data, textStatus, jqXHR) {
                $questionEditor.setData(data);
            })
            .fail(function() {
                alert( "erreur de chargement de la liste des leçons" );
            })
            .always(function () {

            });
    });

    //CKEDITOR pour les réponses
    // voir ici pour config: http://docs.ckeditor.com/#!/api/CKEDITOR.config
    // voir ici pour lire les données: http://docs.ckeditor.com/#!/guide/dev_savedata
    var $reponseEditors = $('.reponseEditor');
    $reponseEditors.each(function () {
        var $reponseEditor = CKEDITOR.replace( $(this)[0].id, {
            toolbarCanCollapse: true,
            toolbarStartupExpanded : false,
            toolbarGroups : toolbarGroups,
            removeButtons: removeButtons,
            readOnly: false,
            skin: 'flat'
        });

        var jqxhr = $.ajax(poem.host + poem.reponseEleveEtape1)
            .done(function(data, textStatus, jqXHR) {
                $reponseEditor.setData(data);
            })
            .fail(function() {
                alert( "erreur de chargement de la liste des leçons" );
            })
            .always(function () {

            });
    });

    //Notation
    var $sliders = $('.bar');
    var $points = 80;
    $sliders.each(function () {
        $(this).slider({
            min: 0,
            max: 20,
            step: 1,
            slide: function (e, ui) {
                $(this).parent().find('.circle').html(ui.value);
                var $toolTip = $(this).find('.tooltip');
                $toolTip.find('.text').html(($points-ui.value) + ' points restants');
                $messages.puimessages('show', 'info', [{
                    summary: 'Fonction à creer ici:',
                    detail: " creer ici la fonction qui gere les liens des valeurs des tooltip des points restants"
                }]);
            },
            create: function (e, ui) {
                $(this).find('.ui-slider-handle').html('<div class="tooltip"><div class="triangle"></div><div class="text">' + $points + ' points restants</div></div>');
            }
        });
    });

    $sliders.each(function () {
        $(this).mouseenter(function () {
            $(this).parent().parent().find('.tooltip').toggle();
        });
        $(this).mouseleave(function () {
            $(this).parent().parent().find('.tooltip').toggle();
        });
    });

}

//function d'init du profil
function poem_init_profil() {
    $('#form-profil').parsley().on('field:validated', function() {
        var ok = $('.parsley-error').length === 0;
        if(!ok) {
            $messages.puimessages('show', 'warn', [{
                summary: 'Oh mince!',
                detail: " Le formulaire n'est pas valide"
            }]);
        } else {
            $messages.puimessages('clear');
        }
    })
        .on('form:submit', function() {
            $messages.puimessages('hide');
            return false; // Don't submit form for this demo
        });

    poem_init_dropdown(poem.host + poem.languagesList, 'presentation-language');
    poem_init_dropdown(poem.host + poem.languagesList, 'content-language');
    poem_init_dropdown(poem.host + poem.levelsList, 'levelbefore');
    poem_init_dropdown(poem.host + poem.levelsList, 'levelafter');
    poem_init_dropdown(poem.host + poem.domainesList, 'domainebefore');
    poem_init_dropdown(poem.host + poem.domainesList, 'domaineafter');
    poem_init_dropdown(poem.host + poem.champsList, 'champsbefore');
    poem_init_dropdown(poem.host + poem.champsList, 'champsafter');

    $passwdInputs = $('input[type="password"]');
    $passwdInputs.each(function () {
        var $input = $(this);
        var $button = $input.siblings('button')
        var $reveal = $input.siblings('div.reveal');
        $button.on('mousedown', function (e) {
            e.preventDefault();
            $reveal.html($input.val());
            $input.css({'color' : 'transparent'});
            $reveal.fadeIn();
        });
        $button.on('mouseup', function (e) {
            e.preventDefault();
            $reveal.html('');
            $reveal.fadeOut();
            $input.css({'color' : ''});
        });
    });

    Dropzone.options.avatar = {
        previewTemplate: document.querySelector('#preview-template').innerHTML,
        maxFiles: 1,
        parallelUploads: 1,
        thumbnailHeight: 200,
        thumbnailWidth: 170,
        maxFilesize: 1,
        filesizeBase: 1000,
        uploadMultiple: false,
        addRemoveLinks: true,
        acceptedFiles: 'image/png, image/jpeg',
        dictCancelUpload: 'stoper le téléchargement',
        dictRemoveFile: 'supprimer cet avatar',
        thumbnail: function(file, dataUrl) {
            if (file.previewElement) {
                file.previewElement.classList.remove("dz-file-preview");
                var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                for (var i = 0; i < images.length; i++) {
                    var thumbnailElement = images[i];
                    thumbnailElement.alt = file.name;
                    thumbnailElement.src = dataUrl;
                }
                setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
            }
        },
        accept: function(file, done) {
            if(this.files.length > this.options.maxFiles) {
                this.removeFile(this.files[0]);
            }
            done();
            $('.dropzone').css({'background-image': 'none'});
            $('.dz-message').hide();
        },
        error: function (file) {
            if(this.files.length > this.options.maxFiles) {
                this.removeFile(this.files[0]);
            }
        },
        reset: function () {
            $('.dropzone').css({'background-image': ''});
            $('.dz-message').show();
        }
    };
}