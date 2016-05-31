<div class="arianne">
    <?php if($_SESSION['page'] != 'lesson') { ?>
    <p><a href="/">POEM</a> > <span class="actif"><?php print $_SESSION['titre'];  ?></span></p>
    <?php } else { ?>
    <p><a href="/">POEM</a> > <?php print $_SESSION['titre'];  ?> > <span class="actif">Titre de la leçon</span></p>
    <?php } ?>
</div>