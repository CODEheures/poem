$(document).ready(function () {
    //initialisation des notifications
    poem.initNotifAndMessages();

    //load de l'explorer
    var $tagCloudsettings = {
        height: 43.95, //height of sphere container rem
        width: 43.95, //width of sphere container rem
        radius: 16.11, //radius of sphere
        maxtags: poem.maxTagInCloud, //maximum of visible tags
        imgBackUrl: poem.imgTagCloudUrl, //image du background
        speed: 3, //rotation speed
        slower: 0.7, //sphere rotations slower
        //timer: 40, OBSOLETE AVEC requestAnimationFrame //40 = 25img/seconde //delay between up<a href="http://www.jqueryscript.net/time-clock/">date</a> position
        fontMultiplier: poem.tagfontMultiplier, //dependence of a font size on axis Z
        fontZoomHover: poem.tagZoomFontHover,
        tagMaxWidth : 20, //max width tag in %
        hoverStyle: { //tag css stylies on mouse over
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        mouseOutStyle: { //tag css stylies on mouse out
            textDecoration: 'none'
        }
    };
    poem.loadExplorer($tagCloudsettings);

});