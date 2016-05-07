
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();

    function updateDropdown($name, $data) {
        $dropDown = $('#' + $name);
        $dropDown.puiautocomplete({
            completeSource: $data,
            forceSelection: true,
            dropdown: true,
            select: function (event, item) {
                ajax(poem.host + poem.champsList, 'champs');
                $messages.puimessages('show', 'info', {summary: 'requete AJAX à faire', detail: 'Mise à jour de l\'input champs à faire sur AJAX'});
            }
        });
    }

    function ajax($url, $dropName) {
        var jqxhr = $.ajax($url)
            .done(function(data, textStatus, jqXHR) {
                updateDropdown($dropName, data);
            })
            .fail(function() {
                alert( "erreur de chargement" );
            })
            .always(function () {

            });
    }

    $("#public-lesson").puiswitch();
    $('#lang').puiautocomplete();

    $("#public-lesson").puiswitch('check');
    $("#public-lesson").puiswitch({
        'change': function () {
            $('div.prive-date').toggleClass('hidden-xs-up')
        }
    });

    ajax(poem.host + poem.domainesList, 'domaines');
    $('#champs').puiautocomplete({
        completeSource: [],
        forceSelection: true,
        dropdown: true,
        select: function (event, item) {
            //
        }
    });

    ajax(poem.host + poem.levelsList, 'level');

    $('#description').puiinputtextarea({
        autoResize: true
    });
    $('#annexes').puiinputtextarea({
        autoResize: true
    });
    $('#message').puiinputtextarea({
        autoResize: true
    });
    $('#formules').puitogglebutton({
        onLabel: "j'autorise l’étudiant à apporter des réponses avec images et/ou formules",
        offLabel: "j'autorise l’étudiant à apporter des réponses avec images et/ou formules",
        onIcon: 'fa-check-square',
        offIcon: 'fa-square'
    });

    $('#questions').puitabview();


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

    CKEDITOR.replace( 'questionEditor1' );
    CKEDITOR.replace( 'answerEditor1' );
    CKEDITOR.replace( 'questionEditor2' );
    CKEDITOR.replace( 'answerEditor2' );
    CKEDITOR.replace( 'questionEditor3' );
    CKEDITOR.replace( 'answerEditor3' );
});