<div class="collapse hidden-sm-up" id="poemBackNavbar">
    <div class="bg-inverse p-a-1 poemMenu">
        <h4>Menu utilisateur</h4>
        <ul class="nav nav-pills nav-stacked">
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>" href="/index.php?want=back_dashboard" title="Voir les leçons"><i class="ion-clipboard"></i><?php print $type['back_dashboard']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='lecons_ajout') print 'active' ; ?>" href="/index.php?want=back_lecons_ajout" title="Créer une leçon"><i class="ion-ios-plus-outline"></i><?php print $type['back_lecons_ajout']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>" href="/index.php?want=back_explorer" title="Explorer les leçons"><i class="ion-ios-search"></i><?php print $type['back_explorer']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='resultats') print 'active' ; ?>" href="/index.php?want=back_resultats" title="Voir les résultats"><i class="ion-ios-pulse"></i><?php print $type['back_resultats']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link" href="#" title="se deconnecter"><i class="ion-log-out"></i>logout</a></li>
        </ul>
        <span class="text-muted">En cas de problème contactez xyz@poem.fr.</span>
    </div>
</div>
<div class="col-xs-12 hidden-xs-down">
    <p class="text-xs-right"><a href="#" id="logout" title="se deconnecter"><i class="ion-log-out"></i>logout</a></p>
    <ul class="nav nav-pills nav-stacked">
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>" href="/index.php?want=back_dashboard" title="Voir les leçons"><i class="ion-clipboard"></i><?php print $type['back_dashboard']['menu'] ?></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='lecons_ajout') print 'active' ; ?>" href="/index.php?want=back_lecons_ajout" title="Créer une leçon"><i class="ion-ios-plus-outline"></i><?php print $type['back_lecons_ajout']['menu'] ?></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>" href="/index.php?want=back_explorer" title="Explorer les leçons"><i class="ion-ios-search"></i><?php print $type['back_explorer']['menu'] ?></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='resultats') print 'active' ; ?>" href="/index.php?want=back_resultats" title="Voir les résultats"><i class="ion-ios-pulse"></i><?php print $type['back_resultats']['menu'] ?></a></li>
<!--        <li class="nav-item"><a class="nav-link --><?php //if ($_SESSION['page']=='leçons') print 'active' ; ?><!--" href="/index.php?want=back_lecons" title="Voir les leçons"><i class="ion-clipboard"></i>leçons</a><a href="/index.php?want=back_lecons_ajout" title="Ajouter une leçon"><span class="ion-plus-circled"></span></a></li>-->
<!--        <li class="nav-item"><a class="nav-link --><?php //if ($_SESSION['page']=='cours') print 'active' ; ?><!--" href="/index.php?want=back_cours" title="Voir les cours"><i class="ion-network"></i>cours</a><a href="/index.php?want=back_cours_ajout" title="Ajouter un cours"><span class="ion-plus-circled"></span></a></li>-->
<!--        <li class="nav-item"><a class="nav-link --><?php //if ($_SESSION['page']=='sessions') print 'active' ; ?><!--" href="/index.php?want=back_sessions" title="Voir les sessions"><i class="ion-university"></i>sessions</a><a href="/index.php?want=back_sessions_ajout" title="Ajouter une session"><span class="ion-plus-circled"></span></a></li>-->
    </ul>
</div>