<?php

for($i = $_GET['startcount']; $i < $_GET['startcount']+$_GET['more']; $i++) {
    include('./includes/back/vignette_'.$_GET['what'].'.php');
}


?>