<?php if(!$_SESSION['anonymous']) { ?>
<ul class="nav navbar-nav">
    <li class="nav-item <?php if ($_SESSION['page']=='dashboard') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_dashboard" title="Mon tableau de bord personnel"><?php print $type['front_dashboard']['menu'] ?></a></li>
    <li class="nav-item <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_explorer" title="Explorer les leçons"><?php print $type['front_explorer']['menu'] ?></a></li>
    <li class="nav-item <?php if ($_SESSION['page']=='profil') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_profil" title="Mes données personnelles"><?php print $type['front_profil']['menu'] ?></a></li>
    <li class="nav-item"><a  class="nav-link" href="/index.php" id="logout" title="se deconnecter">Deconnexion</a></li>
</ul>
<?php } else { ?>
<ul class="nav navbar-nav">
    <li class="nav-item <?php if ($_SESSION['page']=='explorer') print 'active' ; ?>"><a class="nav-link" href="/index.php?want=front_anonymous_explorer" title="Explorer les leçons"><?php print $type['front_anonymous_explorer']['menu'] ?></a></li>
    <li class="nav-item">
        <a  class="nav-link" href="#" id="login" title="se connecter">Connexion</a>
        <div class="inputs login">
            <label for="email">email</label>
            <div class="input-group">
                <input type="email" name="email" id="email" />
            </div>
            <label for="passwd">Mot de passe</label>
            <div class="input-group">
                <input type="password" id="passwd" name="passwd" required="" minlength="8"
                       pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                /><!-- 2ieme patern ici : http://html5pattern.com/Passwords -->
                <button type="button"><i class="fa fa-eye-slash" aria-hidden="true"></i></button>
                <div class="reveal"></div>
            </div>
            <input type="submit" class="btn" value="entrer" id="welcome"/>
        </div>
    </li>
</ul>
<?php } ?>