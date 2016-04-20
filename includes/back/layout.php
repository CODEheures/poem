<!DOCTYPE html>
<html lang="en">
<?php include('./includes/back/head.php'); ?>
<body>

<div class="container-fluid">
    <div class="row">
        <!-- navbar -->
        <div class="col-xs-12 hidden-sm-up" id="navbar">
            <?php include('./includes/back/navbar.php'); ?>
        </div>
    </div>
    <div class="row" id="container">
        <!-- Sidebar -->
        <div class="col-sm-4 col-md-3 col-lg-2 hidden-xs-down" id="sidebar">
            <?php include('./includes/back/sidebar.php'); ?>
        </div>
        <!-- Corps de page -->
        <div class="col-sm-8 col-sm-offset-4 col-md-9 col-md-offset-3 col-lg-10 col-lg-offset-2" id="main">
            <?php include('./includes/back/main.php'); ?>
        </div>
    </div>
</div>
<?php include('./includes/back/scripts.php'); ?>
</body>
</html>