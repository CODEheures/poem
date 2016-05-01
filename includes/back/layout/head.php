<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/font-awesome.min.css" rel="stylesheet">
<?php
    if($_SESSION['page']=='explorer' || $_SESSION['page']=='explorer2') {
        //css de la page explorer
        print '<link href="css/jquery-ui.min.css" rel="stylesheet">';
        print '<link href="css/primeui-theme.css" rel="stylesheet">';
        print '<link href="css/primeui.min.css" rel="stylesheet">';
    }
?>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <title>POEM</title>
</head>