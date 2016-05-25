<section id="explorer">
    <div class="filters">
        <div class="col3">
            <h3><a href="#">Domaines</a></h3>
            <input id="dropdown1" name="dropdown" type="text" placeholder="domaine"/>
        </div>
        <div class="col3">
            <h3><a href="#">Champs</a></h3>
            <input id="dropdown2" name="dropdown" type="text" placeholder="champs"/>
        </div>
        <div class="col3">
            <h3><a href="#">Lecon</a></h3>
            <input id="dropdown3" name="dropdown" type="text" placeholder="leçon"/>
        </div>
        <div class="clearfix"></div>
        <div class="col3">
            <p class="elo-slider">
                <label for="elo-range">ELO:</label>
                <input type="text" id="elo-min" readonly size="9"/>
                <input type="text" id="elo-max" readonly size="9"/>
            </p>
            <div id="elo-slider" class="elo-slider"></div>
        </div>
        <div class="col3">
            <p class="language">Uniquement dans ma langue préférée?</p>
            <div class="language">
                <input type="checkbox" id="language" name="language"/>
            </div>
        </div>
        <div class="col3">
            <p class="filter">Ajouter un filtre</p>
            <div class="search">
                <input type="search" name="search" />
                <button type="button"><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

    <div class="explorer">
        <div class="load">
            <img src="/css/assets/loader1.gif" alt="loader fourmis" />
        </div>
        <div id="tagcloud" class="tag-cloud">
            <h3></h3>
            <ul>
            </ul>
        </div>
        <button class="btn btn-info-outline backward"></button>
        <button class="btn btn-info-outline forward"></button>
        <?php if($_SESSION['explorermode'] == 'attractive'){ ?>
            <p class="info-track">Mode souris attractive<br />(<a href="/index.php?want=front_explorer&explorermode=trackball" title="glisser votre doigt sur la sphere ou maintenez le clic de la souris pour tourner">recharger l'exploreur en mode digital trackball</a>)</p>
        <?php } else { ?>
            <p class="info-track">Mode digital trackball<br />(<a href="/index.php?want=front_explorer&explorermode=attractive" title="la position du curseur de la souris attire les tags vers lui">recharger l'explorer en mode souris attractive</a>)</p>
        <?php } ?>
    </div>

    <div class="selection">
        <h2>Quelques résultats de votre recherche</h2>
        <!-- leçons trouvées -->
        <p>
            <span>biological and biomedical science</span><i class="fa fa-chevron-right" aria-hidden="true"></i>
            <span>génétic</span><i class="fa fa-chevron-right" aria-hidden="true"></i>
        </p>
        <?php for($i = 1; $i<=4 ; $i++) {?>
            <a href="#" class="vignette">
                <div class="orange"></div>
                <div class="content">
                    <div class="img" data-img="neurone.jpg"></div>
                    <p>Titre de la leçon</p>
                </div>
            </a>
            <div class="description">
                <h4>Description de la leçon en une dixaine de mots...</h4>
                <p>Ce paragraphe decrit la leçon plus precisement car  on aime bien decrire precisement les choses Ce paragraphe decrit la leçon plus precisement car  on aime bien decrire precisement les choses Ce paragraphe decrit la leçon plus precisement car  on aime bien decrire precisement les choses Ce paragraphe decrit la leçon plus precisement car  on aime bien decrire precisement les choses </p>
            </div>
            <div class="clearfix"></div>
        <?php } ?>
    </div>
    <div class="clearfix"></div>
</section>