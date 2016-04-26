<section id="dashboard">
    <!-- Indicateurs -->
    <div class="row dash">
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">16.2/20</h3>
                <div class="card-footer">
                    <p class="card-text">Moyenne générale de mes étudiants</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">8542</h3>
                <div class="card-footer">
                    <p class="card-text">Nombre d'élève inscris à mes leçons</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">4300</h3>
                <div class="card-footer">
                    <p class="card-text">ELO moyen des élèves inscrits</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">5500</h3>
                <div class="card-footer">
                    <p class="card-text">ELO moyen des mes leçons</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">88</h3>
                <div class="card-footer">
                    <p class="card-text">Nombre de mes leçons en ligne</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">54</h3>
                <div class="card-footer">
                    <p class="card-text">Nombre de mes leçons collectionnées</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Cours et sessions privees -->
    <div class="row links">
        <div class="col-sm-12">
            <p class="text-xs-right">
                <a href="/index.php?want=back_sessions" class="text-primary" title="Voir les sessions privées"><i class="fa fa-graduation-cap" aria-hidden="true"></i><?php print $type['back_sessions']['menu'] ?></a><a href="/index.php?want=back_sessions_ajout" title="Ajouter une sessions"><span class="fa fa-plus-circle" aria-hidden="true"></span></a>
            </p>
        </div>
    </div>

    <!-- Liste de leçons -->
    <?php
    $h2 = 'Mes dernières leçons';
    $vignettes = "lecons";
    $nbVignettes = 4;
    $moreLink = 'leçons';
    $dataWhat = 'lecons';
    $moreQuantity = 4;
    $modifier = true;

    include('./includes/back/layout/main/list_vignettes/list_vignettes.php');

    $h2 = 'Ma collection';
    $vignettes = "lecons";
    $nbVignettes = 4;
    $moreLink = 'collections';
    $dataWhat = 'lecons';
    $moreQuantity = 4;
    $modifier = false;

    include('./includes/back/layout/main/list_vignettes/list_vignettes.php');
    ?>
</section>