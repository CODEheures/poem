<section id="dashboard">
    <!-- Indicateurs -->
    <div class="row">
        <div class="col-sm-12 col-lg-4 col-xl-2">
            <div class="card card-block not-animed indicator1">
                <h3 class="card-title">16.2/20</h3>
                <div class="card-footer">
                    <p class="card-text">Moyenne générale de mes leçons</p>
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
                <a href="/index.php?want=back_cours" class="text-primary" title="Voir les cours"><i class="ion-network"></i><?php print $type['back_cours']['menu'] ?></a>
                <a href="/index.php?want=back_sessions" class="text-primary" title="Voir les sessions privées"><i class="ion-university"></i><?php print $type['back_sessions']['menu'] ?></a><a href="/index.php?want=back_sessions_ajout" title="Ajouter une sessions"><span class="ion-plus-circled"></span></a>
            </p>
        </div>
    </div>
    
    <!-- Sortie de résultats -->
    <div class="row">
        <div class="col-sm-12 results">
            <h2>Sortie des résultats</h2>
            <form class="form-inline">
                <div class="form-group">
                    <label for="critere">Critère d'export</label>
                    <input type="text" class="form-control" id="critere" placeholder="Ex: nom d'étudiant, email, session, leçon">
                    <button type="submit" class="btn btn-primary">Charger</button>
                    <button type="submit" class="btn btn-primary">Télécharger CSV</button>
                </div>
            </form>
        </div>
        <div class="col-sm-12">
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                    <tr>
                        <th>Nom Prénom</th>
                        <th>Session</th>
                        <th>Cours</th>
                        <th>Leçon</th>
                        <th>Début</th>
                        <th>Fin</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Etudiant 1</td>
                        <td>Lpatc 2015</td>
                        <td>xyz</td>
                        <td>abc</td>
                        <td>21-02-2013</td>
                        <td>28-02-2013</td>
                        <td>13.2</td>
                        <td><a href="#" title="anoter">annoter les réponses</a> </td>
                    </tr>
                    <tr>
                        <td>Etudiant 1</td>
                        <td>Lpatc 2015</td>
                        <td>xyz</td>
                        <td>123</td>
                        <td>28-04-2013</td>
                        <td>03-06-2013</td>
                        <td>11.8</td>
                        <td><a href="#" title="anoter">annoter les réponses</a> </td>
                    </tr>
                    <tr>
                        <td>Etudiant 1</td>
                        <td>Lpatc 2015</td>
                        <td>xyz</td>
                        <td>de fin</td>
                        <td>01-07-2013</td>
                        <td>01-08-2013</td>
                        <td>18.8</td>
                        <td><a href="#" title="anoter">annoter les réponses</a> </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-12"><hr /></div>
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