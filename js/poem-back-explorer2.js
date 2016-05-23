
$(document).ready(function () {

    //initialisation des notificationc
    $notification = $('#notification');
    $notification.puigrowl();
    function notification(event, item) {
        $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: item.data('label')}]);
    }


    //D3JS
    var margin = 20,
        diameter = 960;
    var $limitFontSize = 18;

    var color = d3.scale.linear()
        .domain([-1, 5])
        .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
        .interpolate(d3.interpolateHcl);

    var pack = d3.layout.pack()
        .padding(2)
        .size([diameter - margin, diameter - margin])
        .value(function(d) { return d.size; });

    var svg = d3.select(".d3-explorer").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    //Lecture du JSON et creation du svg et des dropdowns associés
    d3.json("./fake_remote_data/explorer-n2.php", function(error, root) {
        if (error) throw error;

        var focus = root,
            nodes = pack.nodes(root),
            view,
            circle,
            text,
            node,
            $dataN = [],
            $dropDown = [];


        createSvgCirclesAndTexts();
        node = svg.selectAll("circle,text");
        zoom(root, true);

        $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: svg.selectAll("circle")[0].length + " leçons visibles"}]);
        //console.log(svg.selectAll("circle")[0].length);

        //CREATION DES DROPDOWNS
        for (var $i = 1; $i<=3 ; $i++) {
            //DATA
            $dataN[$i] = [];
            d3.selectAll("circle")
                .filter(function(d) { return (d.depth == $i) })
                .each(function (d) {
                    $dataN[$i].push(d.name);
                });

            //DROPDOWNS
            $dropDown[$i] = $('#dropdown'+$i);
            $dropDown[$i].puiautocomplete({
                completeSource: $dataN[$i],
                dropdown: true,
                select: function (event, item) {
                    event.preventDefault();
                    $toSelect = svg.selectAll("circle")
                        .filter(function(d) { return (d.name ==item.data('label')) })
                        .each(function (d) {
                            if($i>=2) {
                                for (var $j = 1; $j <= $i; $j++){
                                    var $d = d;
                                    for ($k = $j; $k < $i; $k++) {
                                        $d = $d.parent;
                                    }
                                    $dropDown[$j].val($d.name);
                                }
                            }
                            zoom(d);
                        });
                    $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: item.data('label')}]);
                }
            });
        }

        //creation des cercle et textes svg
        function createSvgCirclesAndTexts() {
            circle = svg.selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", function (d) { return d.name })
                .style("fill", function(d) { return d.children ? color(d.depth) : '#fff'; });

            text = svg.selectAll("text")
                .data(nodes)
                .enter().append("text")
                .attr("class", "label")
                .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
                .style("display", function(d) { return d.parent === root ? "inline" : "none"; });

            var $j=0;
            text.each(function () {
                d3.select(this)
                    .append('textPath')
                    .attr('xlink:href', '#path-text'+$j)
                    //.attr('text-anchor', 'start')
                    .attr('startOffset', '0')
                    .style('font-size', function (d) { return Math.min(d.fontSizeMaxi,d.limitFonSize) })
                    .text(function(d) { return d.name; });
                $j++;
            });
        }

        //creation des chemins de textes
        function pathText(k, d) {
            for (var $i in nodes) {
                if(!d || nodes[$i]===d){
                    var $fzinit = 10;
                    var $ratiomax = 0.85; //le texte fera un rond de 0.9 tour maxi

                    var $testPathTextExist = $('#path-text'+$i).get(0);

                    if(!d || !$testPathTextExist){
                        //longueur de la chaine en px:
                        $('body').append('<span id="tempo" style="font-size: '+ $fzinit + 'px">'+ (nodes[$i].name) + '</span>');
                        var $tempo = $("#tempo");
                        var $strlen = $tempo.width();
                        $tempo.remove();
                        nodes[$i].strlen = $strlen;
                    }

                    //calcul du font-size maxi $fzm et attribution au noeud
                    //$fzm =  $ratiomax*$fzinit*$perimetre/$strLen; // formule txt sur perimetre => pas terrible
                    //formule pour txt à l'interieur du cercle = equation a 2 inconnue
                    //1°) $perimetre = (nodes[$i].r-$fzm)*2*Math.PI;
                    //2°) $fzm =  $ratiomax* $fzinit*$perimetre/$strLen
                    var $fontSizeMaxi = (nodes[$i].r*k/nodes[$i].strlen)*((nodes[$i].strlen*$ratiomax*2*Math.PI*$fzinit)/(nodes[$i].strlen+$ratiomax*2*Math.PI*$fzinit));
                    nodes[$i].fontSizeMaxi = $fontSizeMaxi;
                    nodes[$i].limitFonSize = $limitFontSize;

                    //creation d'un arc

                    var $arc = d3.svg.arc()
                        .innerRadius(nodes[$i].r*k-Math.min($fontSizeMaxi,$limitFontSize))
                        .outerRadius(nodes[$i].r*k-Math.min($fontSizeMaxi,$limitFontSize))
                        .startAngle(-Math.PI/2)
                        .endAngle(3*Math.PI/2-0.001);

                    if($testPathTextExist){
                        //modification
                        d3.select('#path-text'+$i)
                            .attr('d', $arc);
                    } else {
                        //creation de la path-text
                        svg.append('path')
                            .attr('id', 'path-text'+$i)
                            .attr('d', $arc);
                    }
                }

            }
        }

        //action lors d'un zoom (click dans un cercle)
        function zoom(d, firstTime) {
            firstTime = typeof firstTime !== 'undefined' ? firstTime : false;

            var focus0 = focus; focus = d;

            var factors = [focus.x, focus.y, focus.r * 2 + margin];
            var $k = diameter / factors[2];

            //erase des evenements click et tooltip de tous les cercles
            svg.selectAll("circle")
                .on("click", null)
                .style("cursor", "auto")
                .each(function () {
                    //$(this).tooltip('dispose');
                });

            //ajout evenements click et tooltip au cercles
            svg.selectAll("circle")
                .filter(function(d) { return (d.parent === focus || d.depth <= focus.depth) })
                .on("click", function(d) {
                    var $detail;

                    if(d.depth == 1) {
                        $detail = 'domaine: ';
                        $dropDown[1].val(d.name);
                        $dropDown[2].val('');
                        $dropDown[3].val('');
                    } else if (d.depth == 2) {
                        $detail = 'champs: ';
                        $dropDown[1].val(d.parent.name);
                        $dropDown[2].val(d.name);
                        $dropDown[3].val('');
                    } else if (d.depth == 3) {
                        $detail = 'leçon: ';
                        $dropDown[1].val(d.parent.parent.name);
                        $dropDown[2].val(d.parent.name);
                        $dropDown[3].val(d.name);
                    } else {
                        $dropDown[1].val('');
                        $dropDown[2].val('');
                        $dropDown[3].val('');
                    }
                    $detail += d.name;

                    $notification.puigrowl('show', [{severity: 'info', summary: 'Votre choix', detail: $detail}]);

                    if (focus !== d) zoom(d), d3.event.stopPropagation();
                })
                .style("cursor", "pointer")
                .each(function (d) {
                    $(this).tooltip();
                });

            if(firstTime) {
                zoomTo(factors);
                svg.selectAll("textPath")
                    .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
                    .each(function (d) { pathText($k,d); })
                    .style('font-size', function (d) { return Math.min(d.fontSizeMaxi,d.limitFonSize) });
            } else {

                var transition = d3.transition()
                    //.duration(d3.event.altKey ? 7500 : 750)
                    .duration(750)
                    .tween("zoom", function(d) {
                        var i = d3.interpolateZoom(view, factors);
                        return function(t) { zoomTo(i(t)); };
                    });

                transition.selectAll("text")
                    //.filter(function(d) { return d.parent === focus || d === focus; })
                    .style("fill-opacity", function(d) { return ((d.parent === focus || d === focus) && d !== root) ? 1 : 0; })
                    .each("start", function(d) {if (d.parent === focus || d === focus) this.style.display = "inline"})
                    .each("end", function(d) {if (d.parent !== focus && d !== focus) this.style.display = "none"});

                svg.selectAll("textPath")
                    .filter(function(d) { return d.parent === focus || d === focus; })
                    .each(function (d) { pathText($k,d); })
                    .style('font-size', function (d) { return Math.min(d.fontSizeMaxi,d.limitFonSize) });
            }

        }

        //zoom incrémental
        function zoomTo(v) {
            var k = diameter / v[2]; view = v;
            node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function(d) { return d.r * k; });
        }


    });

    d3.select(self.frameElement).style("height", diameter + "px");


});