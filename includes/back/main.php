<!-- Titre et fil d'arianne -->
<div class="row">
    <div class="col-sm-12">
        <h1 class="page-header"><?php print $_SESSION['titre'];?></h1>
        <ol class="breadcrumb">
            <li><a href="#">POEM</a></li>
            <li class="active"><?php print $_SESSION['menu'];?></li>
        </ol>
    </div>
</div>

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


<!-- dans le cas d'une liste à afficher -->
<div class="row" id="list">
            <?php
            for($i = 0; $i < $_SESSION['nb_list']; $i++) {
                /* Pour les leçons */
                if($_SESSION['page']=='leçons_list') include('./includes/back/vignette_leçons.php');
                /* Pour les cours */
                if($_SESSION['page']=='cours_list') include('./includes/back/vignette_cours.php');
                /* Pour les sessions */
                if($_SESSION['page']=='sessions_list') include('./includes/back/vignette_sessions.php');
            }
            ?>
</div>
<div class="row more">
    <div class="col-sm-12">
        <button type="button" class="btn btn-info-outline center-block" data-what="<?php echo $_SESSION['menu'] ?>">Charger plus de <?php echo $_SESSION['menu'] ?></button>
        <img class="center-block hidden-xs-up" src="/css/assets/loader1.gif" alt="loader fourmis" />
    </div>
</div>

