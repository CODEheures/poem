<?php
    if ($_SESSION['page']=='cours_list') {
        $h2 = 'mes cours';
        $vignettes = "cours";
        $nbVignettes = 8;
        $moreLink = 'cours';
        $dataWhat = 'cours';
        $moreQuantity = 8;
    } elseif($_SESSION['page']=='sessions_list') {
        $h2 = 'mes sessions';
        $vignettes = "sessions";
        $nbVignettes = 8;
        $moreLink = 'sessions';
        $dataWhat = 'sessions';
        $moreQuantity = 8;
    }
    
    include('./includes/back/layout/main/list_vignettes/list_vignettes.php');
?>