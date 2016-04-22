<!-- Titre et champs de recherche dans mes leçons -->
<div class="row vignettes-list find">
    <div class="col-sm-12">
        <h2><?php print $h2 ?></h2>
        <form class="form-inline pull-sm-right">
            <div class="form-group">
                <label for="find">Ajoutez un filtre</label>
                <div class="input-group">
                    <span class="input-group-btn">
                        <button class="btn btn-secondary" type="button"><i class="ion-search"></i></button>
                    </span>
                    <input type="text" class="form-control" id="find" placeholder="N°, Titre, Contenu">
                </div>
            </div>
        </form>
    </div>
</div>
<!-- list -->
<div class="row list-vignettes">
    <?php
    for($i = 0; $i < $nbVignettes; $i++) {
        /* Pour mes dernieres leçons */
        include('./includes/back/layout/main/list_vignettes/vignette_'. $vignettes .'.php');
    }
    ?>
</div>
<div class="row more">
    <div class="col-sm-12">
        <button type="button" class="btn btn-info-outline center-block" <?php if($modifier==true) {print 'data-modifier="true"';} ?>data-what="<?php print $dataWhat ?>" data-quantity="<?php print $moreQuantity ?>">Charger plus de <?php echo $moreLink ?></button>
        <img class="center-block hidden-xs-up" src="/css/assets/loader1.gif" alt="loader fourmis" />
    </div>
</div>