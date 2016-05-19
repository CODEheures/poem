<?php
$niveau=[
    'DU',
    'Licence',
    'Master 1',
    'Master 2',
];
$session = file_get_contents('http://loripsum.net/api/1/short/plaintext');
$session = $niveau[rand(0,3)].' '.rand(2015,2017).': '.substr($session,57,20);


?>

<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 clear-card">
    <div class="card hidden-sm-up">
        <div class="img-card">
            <img class="card-img-top" src="http://lorempixel.com/640/200/nature/<?php echo (($i+1) % 10) ?>/POEM" alt="Card image cap" />
        </div>
        <div class="card-block">
            <h5 class="card-title"><?php echo $session ?></h5>
            <a href="/back.php?want=back_sessions_modif" class="btn btn-primary">Modifier</a>
        </div>
        <div class="card-footer text-muted">
            <div class="row">
                <p class="card-text col-md-6" title="Nombre d'élèves inscrits à cette session">
                    <small class="text-muted"><i class="fa fa-users" aria-hidden="true"></i><?php echo rand(5,900) ?></small>
                </p>
                <p class="card-text col-md-6 text-md-right" title="Moyenne globale de cette session">
                    <small class="text-muted"><i class="fa fa-line-chart" aria-hidden="true"></i><?php echo (rand(90, 199)/10).'/20' ?></small>
                </p>
            </div>
        </div>
    </div>
</div>

