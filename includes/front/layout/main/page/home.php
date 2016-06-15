<div class="home">
    <h1>Présentation de POEM</h1>
    <div class="intro">
        <p>POEM (Personalized Open Education for the Masses) a pour but de faciliter l’acquisition de la
            connaissance par le peuple à travers des cursus créés sur-mesure et impliquants l’apprenant.
        </p>
        <a href="/index.php?want=front_anonymous_explorer">Découvrir</a>
    </div>
    <div class="third">
        <div class="left">
            <img src="/css/assets/masses.png" alt="picto masse etudiants" />
        </div>
        <div class="middle">
            <img src="/css/assets/pair_06.png" alt="picto pairs etudiants" />
        </div>
        <div class="right">
            <img src="/css/assets/surMesure_11.png" alt="picto sur mesure" />
        </div>
        <div class="clearfix"></div>
        <div class="left">
            <p>
                Un enseignement pour tout le monde
            </p>
        </div>
        <div class="middle">
            <p>
                Une évaluation par vos pairs
            </p>
        </div>
        <div class="right">
            <p>
                des cursus créés sur mesure
            </p>
        </div>
        <div class="clearfix"></div>
    </div>
    <?php if($_SESSION['anonymous']) { ?>
    <div class="go">
        <p><a href="/index.php?want=front_anonymous_explorer" class="btn btn-big">Accedez à l'explorateur</a></p>
    </div>
    <?php } ?>
</div>