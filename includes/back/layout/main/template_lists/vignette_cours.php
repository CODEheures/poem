<?php
$cours = file_get_contents('http://loripsum.net/api/1/short/plaintext');
$cours = 'Cours '.($i+1).': '.substr($cours,57,40);
$cours = $cours.'...';

$resume = file_get_contents('http://loripsum.net/api/1/long/plaintext');
$resume = substr($resume,57,94);
$resume = $resume.'...';
?>




<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 clear-card">
    <div class="card hidden-sm-up">
        <div class="img-card">
            <img class="card-img-top" src="http://lorempixel.com/640/200/abstract/<?php echo (($i+1) % 10) ?>/POEM" alt="Card image cap" />
        </div>
        <div class="card-block">
            <h5 class="card-title"><?php echo $cours ?></h5>
            <p class="card-text"><?php echo $resume ?></p>
            <a href="/index.php?want=back_cours_modif" class="btn btn-primary">Modifier</a>
        </div>
        <div class="card-footer text-muted">
            <div class="row">
                <p class="card-text col-md-6" title="Nombre d'élèves inscrits à ce cours">
                    <small class="text-muted"><i class="ion-stats-bars"></i><?php echo rand(5,900) ?></small>
                </p>
                <p class="card-text col-md-6 text-md-right" title="Moyenne globale de ce cours">
                    <small class="text-muted"><i class="ion-ios-pulse-strong"></i><?php echo (rand(90, 199)/10).'/20' ?></small>
                </p>
            </div>
        </div>
    </div>
</div>

