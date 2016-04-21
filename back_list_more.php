<?php

for($i = $_GET['startcount']; $i < $_GET['startcount']+$_GET['more']; $i++) {
    include('./includes/back/layout/main/list_vignettes/vignette_'.$_GET['what'].'.php');
}


?>