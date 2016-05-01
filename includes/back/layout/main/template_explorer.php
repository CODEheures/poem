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
                <input type="text" id="elo-min" readonly style="border:0; color:#f6931f; font-weight:bold;" />
                <input type="text" id="elo-max" readonly style="border:0; color:#f6931f; font-weight:bold;" />
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
    <div class="row tag-cloud">
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
    
<!--    <div class="row tag-cloud">-->
<!--        <div class="col-sm-1"></div>-->
<!--        <div class="col-sm-10">-->
<!--            <div id="tagcloudDomain" class="tag-cloud">-->
<!--                <h3 class="text-xs-center">Domaines</h3>-->
<!--                <ul>-->
<!--                </ul>-->
<!--                <button class="btn btn-info-outline forward"><i class="fa fa-step-forward"> Champs</i></button>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-1"></div>-->
<!--    </div>-->
<!--    <div class="row tag-cloud">-->
<!--        <div class="col-sm-1"></div>-->
<!--        <div class="col-sm-10">-->
<!--            <div id="tagcloudChamp" class="tag-cloud">-->
<!--                <h3 class="text-xs-center">Champs</h3>-->
<!--                <ul>-->
<!--                </ul>-->
<!--                <button class="btn btn-info-outline backward"><i class="fa fa-step-backward"> Domaines</i></button>-->
<!--                <button class="btn btn-info-outline forward"><i class="fa fa-step-forward"> Leçons</i></button>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-1"></div>-->
<!--    </div>-->
<!--    <div class="row tag-cloud">-->
<!--        <div class="col-sm-1"></div>-->
<!--        <div class="col-sm-10">-->
<!--            <div id="tagcloudLecon" class="tag-cloud">-->
<!--                <h3 class="text-xs-center">Leçon</h3>-->
<!--                <ul>-->
<!--                </ul>-->
<!--                <button class="btn btn-info-outline backward"><i class="fa fa-step-backward"> Champs</i></button>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-1"></div>-->
<!--    </div>-->
</section>