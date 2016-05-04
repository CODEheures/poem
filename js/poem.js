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



var poem = {
    compteurAnimCard: 0,
    host : window.location.protocol + '//' + window.location.host,
    dataOfExplorer: '/fake_remote_data/explorer-n2.php',
    delayAnimCards : 300,
    container: $('body'),
    notifsLife: 6000,
    animCard: poem_animCard,
    animCards: poem_animCards,
    findEndAnimCards: poem_findEndAnimCards,
    moreCards: poem_moreCards,
    loadResults: poem_loadResults,
    initNotifAndMessages: poem_init_notification_and_messages,
    loadExplorer: poem_load_explorer
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
    var $nodeFound;
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
    function setVisibleChild($node, $visible) {
        $visible = typeof $visible !== 'undefined' ? $visible : true;

        $node.visible = $visible;
        if($node.children != undefined){
            for($num in $node.children){
                $node.children[$num].visible = $visible;
                setVisibleChild($node.children[$num], $visible);
            }
        }
    }

    //Ajuste l'attribut visible à true des parents et enfant du noeud choisi
    //Met l'attribut visible à false pour tous les autres
    function dataFilter($node) {
        var $parentsOfNode = [];
        $parentsOfNode[$node.depth] = $node;
        setVisibleChild($root, true);
        for(var $depth = $node.depth-1; $depth >= 0 ; --$depth) {
            $parentsOfNode[$depth] = $parentsOfNode[$depth+1].parent;
            for(var $num in $parentsOfNode[$depth].children){
                if($parentsOfNode[$depth].children[$num] != $parentsOfNode[$depth+1]){
                    setVisibleChild($parentsOfNode[$depth].children[$num], false);
                }
            }
        }
        setVisibleChild($node, true);
        $dataN = [];
        setDataN($root);
        $message = $dataN[3].length + ' leçons dans ' + $dataN[2].length + ' champs dans ' + $dataN[1].length  + ' domaines';
    }

    //Mise à jour dataN
    function setDataN($node) {
        if($node.visible==true){
            if($dataN[$node.depth] == undefined) { $dataN[$node.depth] = []}
            $dataN[$node.depth].push({"name": $node.name, "id": $node.id});
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
            $dataR[$node.depth].push({"name": $node.name, "id": $node.id});
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
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        for(var $i in $dataN[$depth]) {
            $ulTagCloud.append('<li data-node-id="'+ $dataN[$depth][$i].id +'">'+$dataN[$depth][$i].name +'</li>')
        }
        $ulTagCloud.find('li').addClass("animated zoomIn").one(animationEnd, function() {
            $(this).removeClass('animated zoomIn');
        });
        $tagCloudViewDepth=($depth);
        if($tagCloudsettings.interval != undefined) { clearInterval($tagCloudsettings.interval); }
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
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        if($ulTagCloud.find('li').length > 0){
            $ulTagCloud.find('li').addClass("animated zoomOut").one(animationEnd, function() {
                $(this).remove();
                if($ulTagCloud.find('li').length == 0){
                    addTagsCloud($depth);
                }
            });
        } else {
            addTagsCloud($depth);
        }
        if ($depth == 2) {
            $tagCloudContainer.find('button.backward').html('<i class="fa fa-step-backward"></i> Domaine').show();
            $tagCloudContainer.find('button.forward').html('Leçons <i class="fa fa-step-forward"></i>').show();
            $tagCloudContainer.find('h3').html('Champs');
        } else if ($depth == 3) {
            $tagCloudContainer.find('button.backward').html('<i class="fa fa-step-backward"></i> Champs').show();
            $tagCloudContainer.find('button.forward').hide();
            $tagCloudContainer.find('h3').html('Leçons');
        } else if ($depth == 1) {
            $tagCloudContainer.find('button.forward').html('Champs <i class="fa fa-step-forward"></i>').show();
            $tagCloudContainer.find('button.backward').hide();
            $tagCloudContainer.find('h3').html('Domaines');
        } else {
            $tagCloudContainer.find('button.backward').hide();
            $tagCloudContainer.find('button.forward').hide();
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
        for(var $depth = 0 ; $depth <= $dataR.length-1 ; $depth++) {
            $source = [];
            //Si le niveau est inferieur tous les nodes sont acceptés dans la liste (pour pouvoir changer d'avis!)
            if ($depth <= $nodeSelected.depth) {
                for($num in $dataR[$depth]){
                    $source.push($dataR[$depth][$num].name + ' [' + $dataR[$depth][$num].id + ']')
                }
                //si le niveau est superieur alors la liste ne contient que les nodes enfants filtrés
            } else {
                for($num in $dataN[$depth]){
                    $source.push($dataN[$depth][$num].name + ' [' + $dataN[$depth][$num].id + ']')
                }
            }

            //creation du dropdown
            $dropDown[$depth] = $('#dropdown' + $depth);
            $dropDown[$depth].puiautocomplete({
                completeSource: $source,
                forceSelection: true,
                dropdown: true,
                select: function (event, item) {
                    var re = /\[(\d)+\]/;

                    var $itemLabelSplitStart = item.data('label').search(re)+1;
                    var $itemLabelSplitEnd = item.data('label').length-1;
                    var $nodeId = item.data('label').substring($itemLabelSplitStart, $itemLabelSplitEnd);
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
                            //recuperation du noeud du dropdown parent et update
                            var re = /\[(\d)+\]/;
                            var $itemLabelSplitStart = $dropDown[$depth-1].val().search(re)+1;
                            var $itemLabelSplitEnd = $dropDown[$depth-1].val().length-1;
                            var $nodeId = $dropDown[$depth-1].val().substring($itemLabelSplitStart, $itemLabelSplitEnd);
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
            if ($depth <= $nodeSelected.depth) {
                $dropDown[$depth].val($dataN[$depth][0].name+ ' [' + $dataN[$depth][0].id + ']');
                //Si le niveau est superieur alors le dropdown est vide et l'utilisateur pourra selectionner un enfant du node
            } else {
                $dropDown[$depth].val('');
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
//$relativeHostURL: adresse (sans le HOST) de la page qui fournit le resultat AJAX
function poem_load_explorer() {
    var $tagCloudsettings = {
        height: 700, //height of sphere container
        width: 700, //width of sphere container
        radius: 250, //radius of sphere
        maxtags: 80, //maximum of visible tags
        speed: 3, //rotation speed
        slower: 0.7, //sphere rotations slower
        timer: 40, //40 = 25img/seconde //delay between up<a href="http://www.jqueryscript.net/time-clock/">date</a> position
        fontMultiplier: 14, //dependence of a font size on axis Z
        hoverStyle: { //tag css stylies on mouse over
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        mouseOutStyle: { //tag css stylies on mouse out
            textDecoration: 'none'
        }
    };

    var $img = $('.load img');
    $img.toggleClass('hidden-xs-up');

    var $url = poem.host + poem.dataOfExplorer;
    var jqxhr = $.ajax($url)
        .done(function(data, textStatus, jqXHR) {
            var $img = $('.load img');
            $img.toggleClass('hidden-xs-up');
            poem_update_explorer(data, $tagCloudsettings)
        })
        .fail(function() {
            alert( "erreur de chargement" );
        })
        .always(function () {

        });
}