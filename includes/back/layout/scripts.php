<script src="js/jquery-2.2.3.min.js"></script>
<script src="js/tether.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/poem.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/primeui.js"></script>
<!-- attention primeUI bibliotheque corrigée
    /* attention primeUI bibliotheque corrigée 

    **** https://github.com/primefaces/primeui/issues/242 ****
    modifie ligne 727 à 729
    change
        if(emptyQuery||itemLabel.indexOf(this.query) === 0) {
            data.push({label:array[i], value: item});
        }
    par
        if(emptyQuery||itemLabel.indexOf(this.query) >= 0) {
            data.push({label:itemLabel, value: item.value});
        }
    
    *****https://github.com/primefaces/primeui/issues/216 *****
    ajoute ligne 13130 à 13151
    
-->
<?php
if($_SESSION['page']=='dashboard') {
    //scripts de la page dashboard
    print '<script src="js/poem-dashboard.js"></script>';
} elseif($_SESSION['page']=='resultats') {
    //scripts de la page resultats
    print '<script src="js/poem-resultats.js"></script>';
} elseif($_SESSION['page']=='explorer') {
    //scripts de la page explorer
    print '<script src="js/jquery-mousewheel.min.js"></script>';
    print '<script src="js/tagcloud-jquery.js"></script>';
    print '<script src="js/poem-explorer.js"></script>';
} elseif($_SESSION['page']=='explorer2') {
    //scripts de la page explorer
    print '<script src="js/d3.v3.min.js"></script>';
    print '<script src="js/poem-explorer2.js"></script>';
} elseif ($_SESSION['page']=='lecons_ajout') {
    //scripts de la page resultats
    print '<script src="ckeditor/ckeditor.js"></script>';
    print '<script src="js/poem-lecon-ajout.js"></script>';
}