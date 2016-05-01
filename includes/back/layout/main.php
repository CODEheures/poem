<!-- Titre et fil d'arianne -->
<div class="row">
    <div class="col-sm-12">
        <h1 class="page-header"><?php print $_SESSION['titre'];?></h1>
        <ol class="breadcrumb">
            <li><a href="/index.php">POEM</a></li>
            <li class="active"><?php print $_SESSION['menu'];?></li>
        </ol>
        <div id="messages"></div>
    </div>
</div>

<!-- cas des pages lists -->
<?php
if($_SESSION['page']=='dashboard') {
    //template des pages de lists
    include('./includes/back/layout/main/template_dashboard.php');
} elseif ($_SESSION['page']=='sessions_list') {
    //template des pages de lists
    include('./includes/back/layout/main/template_lists_sessions.php');
} elseif ($_SESSION['page']=='lecons_ajout' || $_SESSION['page']=='lecons_ajout') {
    //template ajout-modif d'une leçon
    include('./includes/back/layout/main/template_ajout_modif_lecon.php');
} elseif ($_SESSION['page']=='resultats') {
    //template résultats
    include('./includes/back/layout/main/template_resultats.php');
} elseif ($_SESSION['page']=='explorer') {
    //template résultats
    include('./includes/back/layout/main/template_explorer.php');
} elseif ($_SESSION['page']=='explorer2') {
    //template résultats
    include('./includes/back/layout/main/template_explorer2.php');
}

