<?php

for($i = $_GET['startcount']; $i < $_GET['startcount']+$_GET['more']; $i++) {
    if(isset($_GET['modifier']) && $_GET['modifier']==true){
        $modifier=true;
    } else {
        $modifier = false;
    }
    include('./includes/back/layout/main/list_vignettes/vignette_'.$_GET['what'].'.php');
}