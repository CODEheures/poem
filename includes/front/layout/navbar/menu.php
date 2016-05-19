<ul class="nav navbar-nav">
    <li class="nav-item <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_dashboard" title="Mon tableau de bord personnel"><?php print $type['front_dashboard']['menu'] ?></a></li>
    <li class="nav-item <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_explorer" title="Explorer les leçons"><?php print $type['front_explorer']['menu'] ?></a></li>
    <li class="nav-item <?php if ($_SESSION['page']=='profil') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_profil" title="Mes données personnelles"><?php print $type['front_profil']['menu'] ?></a></li>
    <li class="nav-item"><a  class="nav-link" href="#" id="logout" title="se deconnecter">Deconnexion</a></li>
</ul>