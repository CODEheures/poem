<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/poem.js"></script>
<?php
if($_SESSION['page']=='dashboard') {
    //template des pages de lists
    print '<script src="js/dashboard.js"></script>';
} elseif($_SESSION['page']=='resultats') {
    //template des pages de lists
    print '<script src="js/resultats.js"></script>';
}