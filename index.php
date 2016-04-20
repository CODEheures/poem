<?php
session_start();

$type = array(
    'lecons' => array(
      'page' => 'leçons_list',
      'menu' => 'leçons',
      'titre' => 'liste des leçons',
      'nb_list' => 8
    ),
    'cours' => array(
        'page' => 'cours_list',
        'menu' => 'cours',
        'titre' => 'liste des cours',
        'nb_list' => 8
    ),
    'sessions' => array(
        'page' => 'sessions_list',
        'menu' => 'sessions',
        'titre' => 'liste des sessions',
        'nb_list' => 8
    ),
);

if(isset($_GET['want']) && key_exists($_GET['want'],$type)){
    $_SESSION['page']=$type[$_GET['want']]['page'];
    $_SESSION['menu']=$type[$_GET['want']]['menu'];
    $_SESSION['titre']=$type[$_GET['want']]['titre'];
    $_SESSION['nb_list']=$type[$_GET['want']]['nb_list'];
    
} else {
    $_SESSION['page']=$type['lecons']['page'];
    $_SESSION['menu']=$type['lecons']['menu'];
    $_SESSION['titre']=$type['lecons']['titre'];
    $_SESSION['nb_list']=$type['lecons']['nb_list'];
}

include('./includes/back/layout.php');