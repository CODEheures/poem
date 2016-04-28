var settings = {
    height: 800, //height of sphere container
    width: 800, //width of sphere container
    radius: 300, //radius of sphere
    speed: 1, //rotation speed
    slower: 0.9, //sphere rotations slower
    timer: 50, //delay between up<a href="http://www.jqueryscript.net/time-clock/">date</a> position
    fontMultiplier: 12, //dependence of a font size on axis Z
    hoverStyle: { //tag css stylies on mouse over
        border: 'none',
        color: '#0b2e6f',
        cursor: 'pointer'
    },
    mouseOutStyle: { //tag css stylies on mouse out
        border: '',
        color: ''
    }
};


$(document).ready(function () {

    //initialisation des notificationc
    $notification = $('#notification');
    $notification.puigrowl();

    //DATAS DOMAINS-CHAMPS-LECONS
    var domains = [
        "agriculture, agriculture operations, and related sciences",
        "natural resources and conservation",
        "architecture and related services",
        "area, ethnic, cultural, gender, and group studies",
        "communication, journalism, and related programs",
        "communications technologies/technicians and support services",
        "computer and information sciences and support services",
        "personal and culinary services",
        "education",
        "engineering",
        "engineering technologies and engineering-related fields",
        "foreign languages, literatures, and linguistics",
        "family and consumer sciences/human sciences",
        "legal professions and studies",
        "english language and literature/letters",
        "liberal arts and sciences, general studies and humanities",
        "library science",
        "biological and biomedical sciences",
        "mathematics and statistics",
        "military science, leadership and operational art",
        "military technologies and applied sciences",
        "multi/interdisciplinary studies",
        "parks, recreation, leisure, and fitness studies",
        "basic skills and developmental/remedial education",
        "citizenship activities",
        "health-related knowledge and skills",
        "interpersonal and social skills",
        "leisure and recreational activities",
        "personal awareness and self-improvement",
        "philosophy and religious studies",
        "theology and religious vocations",
        "physical sciences",
        "science technologies/technicians",
        "psychology",
        "homeland security, law enforcement, firefighting and related protective services",
        "public administration and social service professions",
        "social sciences",
        "construction trades",
        "mechanic and repair technologies/technicians",
        "precision production",
        "transportation and materials moving",
        "visual and performing arts",
        "health professions and related programs",
        "business, management, marketing, and related support services",
        "high school/secondary diplomas and certificates",
        "history",
        "residency program"
    ];
    var champs = [
        "Nombres reels",
        "Nombres relatifs",
        "Nombres entiers"
    ];
    var lecons = [
        "Addition",
        "Soustraction",
        "Division",
        "Programmation Génétique : Introns, Bloat et Surapprentissage"
    ];

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    for ($i=0; $i<60; $i++) {
        var rString = randomString((Math.floor(Math.random()*50)+10), ' abcde,fghijklm,nopqrst uvwxyz :');
        champs.push(rString);
        lecons.push(rString);
    }

    //DROPDOWNS
    let $dropDown1 = $('#dropdown1');
    let $dropDown2 = $('#dropdown2');
    let $dropDown3 = $('#dropdown3');
    
    $dropDown1.puiautocomplete({
        completeSource: domains,
        dropdown: true,
        select: function (event, item) {
            $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: item.data('label')}]);
        }
    });

    $dropDown2.puiautocomplete({
        completeSource: champs,
        dropdown: true,
        select: notification
    });

    $dropDown3.puiautocomplete({
        completeSource: lecons,
        dropdown: true,
        select: notification
    });

    function notification(event, item) {
        $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: item.data('label')}]);
    }

    //3D TAGS CLOUDS
    let $tagcloudDomain = $('#tagcloudDomain');
    let $tagcloudChamps = $('#tagcloudChamps').hide();
    let $tagcloudLecon = $('#tagcloudLecon').hide();

    let $tagcloudDomainUl = $tagcloudDomain.find('ul');
    let $tagcloudChampsUl = $tagcloudChamps.find('ul');
    let $tagcloudLeconUl = $tagcloudLecon.find('ul');


    for(var $i in domains) { $tagcloudDomainUl.append('<li>' + domains[$i] + '</li>'); }
    for(var $i in champs) { $tagcloudChampsUl.append('<li>' + champs[$i] + '</li>'); }
    for(var $i in lecons) { $tagcloudLeconUl.append('<li>' + lecons[$i] + '</li>'); }

    let $lisDomains = $tagcloudDomainUl.children('li');
    let $lisChamps = $tagcloudChampsUl.children('li');
    let $lisLecons = $tagcloudLeconUl.children('li');

    $tagcloudDomain.tagoSphere(settings);

    //Click dans les TAG
    $lisDomains.click(function (e) {
        e.preventDefault();
        let $this = this;
        let item = {"data": function () { return $this.innerHTML;} };
        notification(e,item);
        $dropDown1.val($this.innerHTML);
        $tagcloudDomain.fadeOut(500);
        $tagcloudChamps.tagoSphere(settings);
        $tagcloudChamps.fadeIn(300);
    });

    $lisChamps.click(function (e) {
        e.preventDefault();
        let $this = this;
        let item = {"data": function () { return $this.innerHTML;} };
        notification(e,item);
        $dropDown2.val($this.innerHTML);
        $tagcloudChamps.fadeOut(500);
        $tagcloudLecon.tagoSphere(settings);
        $tagcloudLecon.fadeIn(300);
    });

    $lisLecons.click(function (e) {
        e.preventDefault();
        let $this = this;
        let item = {"data": function () { return $this.innerHTML;} };
        notification(e,item);
        $dropDown3.val($this.innerHTML);
        $tagcloudChamps.fadeOut(500);
        $tagcloudLecon.tagoSphere(settings);
        $tagcloudLecon.fadeIn(300);
    });


    //Wheel IN sur un tag
    $lisDomains.mousewheel(function (e) {
        e.preventDefault();
        if(e.deltaY == 1) {
            let $this = this;
            let item = {
                "data": function () {
                    return $this.innerHTML;
                }
            };
            notification(e, item);
            $dropDown1.val($this.innerHTML);
            $tagcloudDomain.fadeOut(500);
            $tagcloudChamps.tagoSphere(settings);
            $tagcloudChamps.fadeIn(300);
        }
    });

    $lisChamps.mousewheel(function (e) {
        e.preventDefault();
        if(e.deltaY == 1) {
            let $this = this;
            let item = {
                "data": function () {
                    return $this.innerHTML;
                }
            };
            notification(e, item);
            $dropDown2.val($this.innerHTML);
            $tagcloudChamps.fadeOut(500);
            $tagcloudLecon.tagoSphere(settings);
            $tagcloudLecon.fadeIn(300);
        }
    });

    $lisLecons.mousewheel(function (e) {
        e.preventDefault();
        if(e.deltaY == 1) {
            let $this = this;
            let item = {
                "data": function () {
                    return $this.innerHTML;
                }
            };
            notification(e, item);
            $dropDown3.val($this.innerHTML);
            $tagcloudChamps.fadeOut(500);
            $tagcloudLecon.tagoSphere(settings);
            $tagcloudLecon.fadeIn(300);
        }
    });


    //Wheel OUT == remonter au niveau supérieur
    $tagcloudChamps.mousewheel(function(e) {
        e.preventDefault();
        if(e.deltaY == -1){
            $tagcloudChamps.fadeOut(300);
            $tagcloudDomain.tagoSphere(settings);
            $tagcloudDomain.fadeIn(300);
        }
    });

    $tagcloudLecon.mousewheel(function(e) {
        e.preventDefault();
        if(e.deltaY == -1){
            $tagcloudLecon.fadeOut(300);
            $tagcloudChamps.tagoSphere(settings);
            $tagcloudChamps.fadeIn(300);
        }
    });


});