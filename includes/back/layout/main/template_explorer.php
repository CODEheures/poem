<section id="explorer">

    <!-- Sortie de résultats -->
    <div class="row selectors">
        <div class="col-md-4">
            <h3 class="text-xs-center"><a href="#">Domaines</a></h3>
            <input id="dropdown1" name="dropdown" type="text" placeholder="domaine"/>
        </div>
        <div class="col-md-4">
            <h3 class="text-xs-center"><a href="#">Champs</a></h3>
            <input id="dropdown2" name="dropdown" type="text" placeholder="champs"/>

        </div>
        <div class="col-md-4">
            <h3 class="text-xs-center"><a href="#">Lecon</a></h3>
            <input id="dropdown3" name="dropdown" type="text" placeholder="leçon"/>
        </div>
    </div>
    <div class="row selectors">
        <div class="col-md-4">
            <p class="elo-slider">
                <label for="elo-range">ELO:</label>
                <input type="text" id="elo-min" readonly size="9"/>
                <input type="text" id="elo-max" readonly size="9"/>
            </p>
            <div id="elo-slider" class="elo-slider"></div>
        </div>
        <div class="col-md-4">
            <p class="language">Uniquement dans ma langue préférée?</p>
            <div class="language">
                <input id="language" type="checkbox" />
            </div>
        </div>
        <div class="col-md-4">
            <p class="filter">Ajouter un filtre</p>
            <div class="input-group filter">
                <span class="input-group-btn">
                    <button id="filter" class="btn btn-secondary" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                </span>
                <input type="text" class="form-control" placeholder="N°, Titre, Contenu">
            </div>
        </div>
    </div>
    <div class="row load">
        <div class="col-sm-12">
            <img class="center-block hidden-xs-up" src="/css/assets/loader1.gif" alt="loader fourmis" />
        </div>
    </div>
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
            <div id="tagcloud" class="tag-cloud">
                <h3 class="text-xs-center"></h3>
                <ul>
                </ul>
                <button class="btn btn-info-outline backward"></button>
                <button class="btn btn-info-outline forward"></button>
            </div>
        </div>
        <div class="col-sm-1"></div>
    </div>
</section>
<section id="selection">
    <div class="row">
        <div class="col-sm-12">
            <h2>Résultat de la recherche</h2>
        </div>
    </div>
    <!-- leçons trouvées -->
    <?php for($i = 1; $i<=5 ; $i++) {?>
    <div class="row">
        <div class="col-sm-12 arianne">
            <hr />
            <p>
                Résumé de la leçon:
                <span>biological and biomedical science</span><i class="fa fa-chevron-right" aria-hidden="true"></i>
                <span>génétic</span><i class="fa fa-chevron-right" aria-hidden="true"></i>
            </p>
            <hr />
        </div>
        <div class="col-md-2 thumb-lesson">
            <a href="#" title="vers la leçon"><img src="http://lorempixel.com/300/200/technics/<?php echo (($i+1) % 10) ?>" class="img-fluid" alt="image de la leçon n°<?php print $i ?>"></a>
        </div>
        <div class="col-md-7 description">
            <h3><a href="#" title="vers la leçon">Titre de la leçon trouvée n°<?php print $i ?></a></h3>
            <h4>Description de la leçon en une dixaine de mots...</h4>
            <p>Ce paragraphe decrit la leçon plus precisement car  on aime bien decrire precisement les choses</p>
            <blockquote class="blockquote">
                <p class="m-b-0">Ce paragraphe est le mot du prof qui encourage à suivre cette leçon et à la réussire</p>
            </blockquote>
        </div>
        <div class="col-md-3 avatar">
            <img src="./css/assets/avatar.png" alt="avatar professeur" class="img-rounded center-block">
            <p class="small text-xs-center">Pr. Pierre C.</p>
        </div>
        <div class="col-sm-12">
            <hr />
        </div>
    </div>
    <?php } ?>

</section>