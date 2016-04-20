<div class="collapse hidden-sm-up" id="poemBackNavbar">
    <div class="bg-inverse p-a-1 poemMenu">
        <h4>Menu utilisateur</h4>
        <ul class="nav nav-pills nav-stacked">
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='leçons') print 'active' ; ?>" href="/index.php?want=lecons" title="Voir les leçons"><i class="ion-clipboard"></i>leçons</a><a href="#" title="Ajouter une leçon"><span class="ion-plus-circled"></span></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='cours') print 'active' ; ?>" href="/index.php?want=cours" title="Voir les cours"><i class="ion-network"></i>cours</a><a href="#" title="Ajouter un cours"><span class="ion-plus-circled"></span></a></li>
            <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='sessions') print 'active' ; ?>" href="/index.php?want=sessions" title="Voir les sessions"><i class="ion-university"></i>sessions</a><a href="#" title="Ajouter une session"><span class="ion-plus-circled"></span></a></li>
            <li class="nav-item"><a class="nav-link" href="#" title="se deconnecter"><i class="ion-log-out"></i></i>logout</a></li>
        </ul>
        <span class="text-muted">En cas de problème contactez xyz@poem.fr.</span>
    </div>
</div>
<div class="col-xs-12 hidden-xs-down">
    <p class="text-xs-right"><a href="#" id="logout"><i class="ion-log-out"></i>logout</a></p>
    <ul class="nav nav-pills nav-stacked">
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='leçons') print 'active' ; ?>" href="/index.php?want=lecons" title="Voir les leçons"><i class="ion-clipboard"></i>leçons</a><a href="#" title="Ajouter une leçon"><span class="ion-plus-circled"></span></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='cours') print 'active' ; ?>" href="/index.php?want=cours" title="Voir les cours"><i class="ion-network"></i>cours</a><a href="#" title="Ajouter un cours"><span class="ion-plus-circled"></span></a></li>
        <li class="nav-item"><a class="nav-link <?php if ($_SESSION['menu']=='sessions') print 'active' ; ?>" href="/index.php?want=sessions" title="Voir les sessions"><i class="ion-university"></i>sessions</a><a href="#" title="Ajouter une session"><span class="ion-plus-circled"></span></a></li>
    </ul>
</div>