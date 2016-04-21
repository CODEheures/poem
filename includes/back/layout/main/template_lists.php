<!-- champs de recherche dans une liste -->
<div class="row find">
    <div class="col-sm-12">
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
<div class="row" id="list">
    <?php
    for($i = 0; $i < $_SESSION['nb_list']; $i++) {
        /* Pour les leçons */
        if($_SESSION['page']=='lecons_list') include('./includes/back/layout/main/template_lists/vignette_lecons.php');
        /* Pour les cours */
        if($_SESSION['page']=='cours_list') include('./includes/back/layout/main/template_lists/vignette_cours.php');
        /* Pour les sessions */
        if($_SESSION['page']=='sessions_list') include('./includes/back/layout/main/template_lists/vignette_sessions.php');
    }
    ?>
</div>
<div class="row more">
    <div class="col-sm-12">
        <button type="button" class="btn btn-info-outline center-block" data-what="<?php echo $_SESSION['menu'] ?>">Charger plus de <?php echo $_SESSION['menu'] ?></button>
        <img class="center-block hidden-xs-up" src="/css/assets/loader1.gif" alt="loader fourmis" />
    </div>
</div>