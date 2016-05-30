
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();
    

    //lesson
    $( "#etapes" ).tabs();

    $noDistraction = $('#no-distraction');
    $noDistraction2 = $('#no-distraction2');
    $noDistraction.puiswitch({
        onLabel: "oui",
        offLabel: "non",
        change: noDistract
    });

    function noDistract() {
        $('#poem-navbar').slideToggle();
        $('#poem-footer').slideToggle();
        $('#ligthbox').fadeToggle();
    }

    //CKEDITOR pour les questions
    var $questionEditors = $('.questionEditor');
    $questionEditors.each(function () {
        var $questionEditor = CKEDITOR.replace( $(this)[0].id, {
            toolbarCanCollapse: true,
            toolbarStartupExpanded : false,
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
            toolbarStartupExpanded : true,
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

    
});
