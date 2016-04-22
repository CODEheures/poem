<?php
$lecon = file_get_contents('http://loripsum.net/api/1/short/plaintext');
$lecon = 'Leçon '.($i+1).': '.substr($lecon,57,40);
$lecon = $lecon.'...';

$resume = file_get_contents('http://loripsum.net/api/1/long/plaintext');
$resume = substr($resume,57,94);
$resume = $resume.'...';
?>




<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 clear-card">
    <div class="card hidden-sm-up">
        <div class="img-card">
            <img class="card-img-top" src="http://lorempixel.com/640/200/technics/<?php echo (($i+1) % 10) ?>/POEM" alt="Card image cap" />
        </div>
        <div class="card-block">
            <h5 class="card-title"><?php echo $lecon ?></h5>
            <p class="card-text"><?php echo $resume ?></p>
            <a href="/index.php?want=front_lecons_appercu" class="btn btn-info-outline">Voir</a>
            <?php if($modifier)  {?><a href="/index.php?want=back_lecons_modif" class="btn btn-primary">Modifier</a><?php } ?>
        </div>
        <div class="card-footer text-muted">
            <div class="row">
                <p class="card-text col-md-6" title="Nombre d'élèves ayant fini cette leçon avec succès">
                    <small class="text-muted"><i class="ion-stats-bars"></i><?php echo rand(1000,10000) ?></small>
                </p>
                <p class="card-text col-md-6 text-md-right" title="Moyenne globale de cette leçon">
                    <small class="text-muted"><i class="ion-ios-pulse-strong"></i><?php echo (rand(90, 199)/10).'/20' ?></small>
                </p>
            </div>
        </div>
    </div>
</div>

