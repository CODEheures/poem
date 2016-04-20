<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {

        //chargement de cartes
        function animeCard($elem, $num) {
            setTimeout(function () {
                $elem.removeClass("hidden-sm-up");
                $elem.addClass("animated flipInY");
            },300*$num);
        }

        $('.card').each(function ($num) {
            var $card = $(this);
            animeCard($card, $num)
        });

        //voir plus
        $('.more button').click(function (e) {
            var $button = $(this);
            var $img = $('.more img');
            $button.blur();
            $button.toggleClass('hidden-xs-up');
            $img.toggleClass('hidden-xs-up');
            e.preventDefault();
            var $nbCardInit = $('.card').length;
            var $url = "http://poem.dev/back_list_more.php?more=8&startcount="+($nbCardInit)+"&what="+$button.data('what');
            var jqxhr = $.ajax($url)
                .done(function(data, textStatus, jqXHR) {
                    $('#list').append(data);
                    $('.card').each(function ($num) {
                        if($num >= $nbCardInit) {
                            var $card = $(this);
                            animeCard($card, $num-$nbCardInit);
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