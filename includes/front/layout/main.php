<!-- cas des pages -->
<?php
if($_SESSION['page']=='dashboard') {
    include('./includes/front/layout/main/template_dashboard.php');
} elseif ($_SESSION['page']=='explorer') {
    include('./includes/front/layout/main/template_explorer.php');
}