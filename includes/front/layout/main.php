<section id="<?php print $_SESSION['page'] ?>">
    <!-- header -->
    <div class="header">
        <div class="inner-container">
            <?php include('./includes/front/layout/main/header/' . $_SESSION['page'] . '.php') ?>
        </div>
        <div class="extend-header"></div>
        <div class="clearfix"></div>
    </div>
    <!-- Page -->
        <div class="page">
            <div class="inner-container">
                <div id="messages"></div>
                <?php include('./includes/front/layout/main/page/' . $_SESSION['page'] . '.php') ?>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- Recommandations -->
        <?php $_SESSION['recommandations'] ? include('./includes/front/layout/main/recommandations/recommandations.php') : null ?>
</section>