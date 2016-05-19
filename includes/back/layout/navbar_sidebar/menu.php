<div class="collapse hidden-sm-up" id="poemBackNavbar">
    <div class="bg-inverse p-a-1 poemMenu">
        <h4>Menu utilisateur</h4>
        <ul class="nav nav-pills nav-stacked">
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>" href="/back.php?want=back_dashboard" title="Tableau de bord"><i class="fa fa-table" aria-hidden="true"></i><?php print $type['back_dashboard']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='lecons_ajout') print 'active' ; ?>" href="/back.php?want=back_lecons_ajout" title="Créer une leçon"><i class="fa fa-plus-square-o" aria-hidden="true"></i><?php print $type['back_lecons_ajout']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>" href="/back.php?want=back_explorer" title="Explorer les leçons"><i class="fa fa-search" aria-hidden="true"></i><?php print $type['back_explorer']['menu'] ?></a></li>
<!--            <li class="nav-item"><a class="nav-link --><?php //if ($_SESSION['page']=='explorer2') print 'active' ; ?><!--" href="/back.php?want=back_explorer2" title="Explorer les leçons 2"><i class="fa fa-search" aria-hidden="true"></i>--><?php //print $type['back_explorer2']['menu'] ?><!--</a></li>-->
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='resultats') print 'active' ; ?>" href="/back.php?want=back_resultats" title="Voir les résultats"><i class="fa fa-tachometer" aria-hidden="true"></i><?php print $type['back_resultats']['menu'] ?></a></li>
            <li class="nav-item"><a class="nav-link" href="#" title="se deconnecter"><i class="fa fa-sign-out" aria-hidden="true"></i>logout</a></li>
        </ul>
        <span class="text-muted">En cas de problème contactez xyz@poem.fr.</span>
    </div>
</div>
<div class="col-xs-12 hidden-xs-down">
    <p class="text-xs-right"><a href="#" id="logout" title="se deconnecter"><i class="fa fa-sign-out" aria-hidden="true"></i>logout</a></p>
    <ul class="nav nav-pills nav-stacked">
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>" href="/back.php?want=back_dashboard" title="Tableau de bord"><i class="fa fa-table" aria-hidden="true"></i><?php print $type['back_dashboard']['menu'] ?></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='lecons_ajout') print 'active' ; ?>" href="/back.php?want=back_lecons_ajout" title="Créer une leçon"><i class="fa fa-plus-square-o" aria-hidden="true"></i><?php print $type['back_lecons_ajout']['menu'] ?></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>" href="/back.php?want=back_explorer" title="Explorer les leçons"><i class="fa fa-search" aria-hidden="true"></i><?php print $type['back_explorer']['menu'] ?></a></li>
<!--        <li class="nav-item"><a class="nav-link --><?php //if ($_SESSION['page']=='explorer2') print 'active' ; ?><!--" href="/back.php?want=back_explorer2" title="Explorer les leçons 2"><i class="fa fa-search" aria-hidden="true"></i>--><?php //print $type['back_explorer2']['menu'] ?><!--</a></li>-->
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['page']=='resultats') print 'active' ; ?>" href="/back.php?want=back_resultats" title="Voir les résultats"><i class="fa fa-tachometer" aria-hidden="true"></i><?php print $type['back_resultats']['menu'] ?></a></li>
    </ul>
</div>