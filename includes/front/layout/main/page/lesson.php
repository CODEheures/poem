<div id="etapes">
    <div class="filter">
        <p>sans distraction</p>
        <input type="checkbox" id="no-distraction" name="no-distraction"/>
    </div>
    <ul>
        <li><a href="#tabs-1">Leçon</a></li>
        <li <?php if($_SESSION['anonymous']) { print 'class="unable"'; } ?>><a href="#tabs-2">Evaluation étape 1</a></li>
        <li <?php if($_SESSION['anonymous']) { print 'class="unable"'; } ?>><a href="#tabs-3">Evaluation étape 2</a></li>
        <li class="unable"><a href="#tabs-4">Evaluation étape 3</a></li> <!-- class unable forcée pour l'exemple -->
        <li><a href="#tabs-5">Description de la leçon</a></li>
    </ul>
    <div id="tabs-1">
        <?php include('./includes/front/layout/main/page/lesson/tab1.php') ?>
    </div>
    <div id="tabs-2">
        <?php include('./includes/front/layout/main/page/lesson/tab2.php') ?>
    </div>
    <div id="tabs-3">
        <?php include('./includes/front/layout/main/page/lesson/tab3.php') ?>
    </div>
    <div id="tabs-4">
        <?php include('./includes/front/layout/main/page/lesson/tab4.php') ?>
    </div>
    <div id="tabs-5">
        <?php include('./includes/front/layout/main/page/lesson/tab5.php') ?>
    </div>
</div>