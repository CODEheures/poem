<script src="js/jquery-2.2.3.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/poem.js"></script>
<?php
if($_SESSION['page']=='dashboard') {
    //scripts de la page dashboard
    print '<script src="js/poem-dashboard.js"></script>';
} elseif($_SESSION['page']=='resultats') {
    //scripts de la page resultats
    print '<script src="js/poem-resultats.js"></script>';
} elseif($_SESSION['page']=='explorer') {
    //scripts de la page explorer
    print '<script src="js/jquery-ui.min.js"></script>';
    print '<script src="js/primeui.min.js"></script>';
    print '<script src="js/jquery-mousewheel.min.js"></script>';
    print '<script src="js/tagcloud-jquery.js"></script>';
    print '<script src="js/poem-explorer.js"></script>';
}