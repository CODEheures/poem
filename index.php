<?php
session_start();

$type = array(
    'back_lecons' => array(
      'type' => 'back',
      'page' => 'lecons_list',
      'menu' => 'leçons',
      'titre' => 'liste des leçons',
      'nb_list' => 8
    ),

    'back_lecons_ajout' => array(
        'type' => 'back',
        'page' => 'lecons_ajout',
        'menu' => 'créer une leçon',
        'titre' => 'créer une leçon',
        'nb_list' => 0
    ),

    'back_lecons_modif' => array(
        'type' => 'back',
        'page' => 'lecons_modif',
        'menu' => 'modifier une leçon',
        'titre' => 'modifier une leçon',
        'nb_list' => 0
    ),

    'back_cours' => array(
        'type' => 'back',
        'page' => 'cours_list',
        'menu' => 'cours',
        'titre' => 'liste des cours',
        'nb_list' => 8
    ),

    'back_cours_ajout' => array(
        'type' => 'back',
        'page' => 'cours_ajout',
        'menu' => 'créer un cours',
        'titre' => 'créer un cours',
        'nb_list' => 0
    ),

    'back_cours_modif' => array(
        'type' => 'back',
        'page' => 'cours_modif',
        'menu' => 'modifier un cours',
        'titre' => 'modifier un cours',
        'nb_list' => 0
    ),

    'back_sessions' => array(
        'type' => 'back',
        'page' => 'sessions_list',
        'menu' => 'sessions',
        'titre' => 'liste des sessions',
        'nb_list' => 8
    ),

    'back_sessions_ajout' => array(
        'type' => 'back',
        'page' => 'sessions_ajout',
        'menu' => 'créer une session',
        'titre' => 'créer une session',
        'nb_list' => 0
    ),

    'back_sessions_modif' => array(
        'type' => 'back',
        'page' => 'sessions_modif',
        'menu' => 'modifier une session',
        'titre' => 'modifier une session',
        'nb_list' => 0
    ),
);

if(isset($_GET['want']) && key_exists($_GET['want'],$type)){
    $_SESSION['type']=$type[$_GET['want']]['type'];
    $_SESSION['page']=$type[$_GET['want']]['page'];
    $_SESSION['menu']=$type[$_GET['want']]['menu'];
    $_SESSION['titre']=$type[$_GET['want']]['titre'];
    $_SESSION['nb_list']=$type[$_GET['want']]['nb_list'];
    
} else {
    $_SESSION['type']=$type['back_lecons']['type'];
    $_SESSION['page']=$type['back_lecons']['page'];
    $_SESSION['menu']=$type['back_lecons']['menu'];
    $_SESSION['titre']=$type['back_lecons']['titre'];
    $_SESSION['nb_list']=$type['back_lecons']['nb_list'];
}


include('./includes/'.$_SESSION['type'].'/layout.php');