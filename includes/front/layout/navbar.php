<nav class="navbar inner-container">
    <div class="brand">
        <a href="/index.php" title="Acceuil POEM"><img src="./css/assets/logo.png" alt="logo POEM"></a>
    </div>
    <div class="menu <?php if($_SESSION['anonymous']) { print 'anonymous'; } ?>">
        <?php include('./includes/front/layout/navbar/menu.php'); ?>
    </div>
    <?php if(!$_SESSION['anonymous']) { ?>
    <div class="user">
        <img src="./css/assets/user.png" alt="logo POEM">
        <p>Bonjour Isaac A.</p>
    </div>
    <?php } ?>
</nav>