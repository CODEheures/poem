/**
 * jQuery TagCloud plugin
 *
 * @version 1.2.2 (12-MAY-2009)
 * @author Nurul Ferdous <nurul_ferdous@yahoo.com>
 * @requires jQuery v1.4.3 or later Examples and documentation at:
 * http://dynamicguy.com/ Dual licensed under the MIT and GPL
 * licenses: http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 */

;( function($) {
    var tags;
    var mathAssets = {
        halfHeight : null,
        halfWidth : null,
        hwratio : null,
        dtr : null,
        diameter : null,
        speedX : null,
        speedY : null,
        tLength : null
    };
    var settings = {
        //height of sphere container
        height : 43.95,
        //width of sphere container
        width : 43.95,
        //radius of sphere
        radius : 16.11,
        //maximum tag
        maxtags: 80,
        //rotation speed
        speed : 3,
        //sphere rotations slower
        slower : 0.9,
        //delay between update position 
        //timer : 5, ==> obsolete avec requestAnimationFrame
        //dependence of a font size on axis Z
        fontMultiplier : 1.1,
        //zoom font on mouseover
        fontZoomHover : 1.5,
        //tag max-width %
        tagMaxWidth : 20,
        //imgBackUrl
        imgBackUrl: '',
        //tag css stylies on mouse over
        hoverStyle : {
            border : '0.073rem solid #935C26',
            color : '#935C26'
        },
        //tag css stylies on mouse out
        mouseOutStyle : {
            border : 'none',
            color : 'red'
        }
    };

    var curState = {
        mouseOver : null,
        lastFy : null,
        lastFx : null,
        sy : null,
        cy : null,
        sx : null,
        cx : null,
        mouseX : null,
        mouseY : null
    };
    var options = {};
    var $first = true;
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    jQuery.fn.tagoSphere = function(opt) {
        if (opt == 'cancelAnim') {
            options.requestAnimationFrameId ? window.cancelAnimationFrame(options.requestAnimationFrameId) : null;
        } else {
            options = jQuery.extend(settings, opt);
            options.rootFontSize = getRootElementFontSize();
            options.zIndexInit = 10000;
            initContainer(this);
            initTags(this);
            initMaths();
            deployTags();
            //opt.interval = setInterval(updateTags, options.timer);
            options.requestAnimationFrameId ? window.cancelAnimationFrame(options.requestAnimationFrameId) : null;
            requestAnimationFrame(updateTags);
            return this;
        }
    };

    var $html = document.querySelector('html');
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
            mutation.attributeName == 'style' ? options.rootFontSize = getRootElementFontSize() : null;
        });
    });
    // configuration of the observer:
    var config = { attributeFilter: ['style'] };

    // pass in the target node, as well as the observer options
    observer.observe($html, config);

    function initMaths() {
        mathAssets.halfHeight = options.height / 2;
        mathAssets.halfWidth = options.width / 2;
        mathAssets.speedX = options.speed / mathAssets.halfWidth;
        mathAssets.speedY = options.speed / mathAssets.halfHeight;
        mathAssets.dtr = Math.PI / 180;
        mathAssets.diameter = options.radius * 2;
        mathAssets.hwratio = options.height / options.width;
        mathAssets.whratio = options.width / options.height;
        mathAssets.tLength = tags.length - 1;
        //curState.mouseOver = false;
        curState.lastFx = options.speed;
        curState.lastFy = options.speed;
    }

    function getRootElementFontSize( ) {
        // Returns a number
        return parseFloat(
            // of the computed font-size, so in px
            getComputedStyle(
                // for the root <html> element
                document.documentElement
            )
                .fontSize
        );
    }

    function convertRem(value) {
        return value / options.rootFontSize;
    }

    function getOffsetLeft( elem ) {
        var offsetLeft = 0;
        do {
            if ( !isNaN( elem.offsetLeft ) )
            {
                offsetLeft += elem.offsetLeft;
            }
        } while( elem = elem.offsetParent );
        return offsetLeft;
    }

    function getOffsetTop( elem )  {
        var offsetTop = 0;
        do {
            if ( !isNaN( elem.offsetTop ) )
            {
                offsetTop += elem.offsetTop;
            }
        } while( elem = elem.offsetParent );
        return offsetTop;
    }

    function initContainer(tagContainer) {
        $first=true;
        tagContainer.height(options.height + 'rem');
        tagContainer.width(options.width + 'rem');
        tagContainer.css( {
            'position' : 'relative',
            'border-radius' : options.height / 2 + 'rem',
            'z-index' : options.zIndexInit
        });
        tagContainer.mousemove( function(e) {
            //correction bug coordonnées Sylvain GAGNOT
            curState.mouseX = e.pageX - getOffsetLeft(this);
            curState.mouseY = e.pageY - getOffsetTop(this);
            // curState.mouseX = e.pageX - this.offsetLeft();
            // curState.mouseY = e.pageY - this.offsetTop();
        });
        tagContainer.hover( function() {
            curState.mouseOver = true;
        }, function() {
            curState.mouseOver = false;
        });

        if(!$('#imgcloud').length){
            tagContainer.append('<img src="'+ options.imgBackUrl + '" id="imgcloud"/>');
        }

        var $topImg =  (70*options.height/100)/2;

        $('#imgcloud').css({
            'display' : 'block',
            'margin' : '0 auto',
            'width' : (70*options.height/100) + 'rem',
            'height' : (70*options.height/100) + 'rem',
            'position' : 'absolute',
            'top' : 'calc(50% - ' + $topImg + 'rem)',
            'left' : 'calc(50% - ' + $topImg + 'rem)',
            'z-index' : options.zIndexInit
        });
        tagContainer.find('h3').css({
            'z-index' : options.zIndexInit
        });
    }

    function initTags(tagContainer) {
        tags = tagContainer.children('ul').children();
        while (tags.length > options.maxtags) {
            tagContainer.children('ul').children(':nth-of-type('+ Math.round(Math.random()*tags.length) +')').remove();
            tags = tagContainer.children('ul').children();
        }
        tags.css( {
            'position' : 'absolute',
            'top' : '0',
            'left' : '0',
            'list-style-type' : 'none',
            'list-style-position' : 'outside',
            'list-style-image' : 'none',
            'max-width' : options.tagMaxWidth + '%',
            'word-wrap': 'break-word',
            'border-radius': '0.5em'
        });
        for ( var i = 0; i < tags.length; i++) {
            var jTag = jQuery(tags[i]);
            var link = jQuery(jTag.children()[0]);
            tags[i] = jTag;
            jTag.data('hover', '0');
            jTag.hover( function() {
                jQuery(this).css(options.hoverStyle);
                jQuery(this).data('hover' , '1');
            }, function() {
                jQuery(this).css(options.mouseOutStyle);
                jQuery(this).data('hover' , '0');
            })
        }
    }

    function deployTags() {
        var phi = 0;
        var theta = 0;
        var max = mathAssets.tLength + 1;
        var i = 0;
        while (i++ < max) {
            phi = Math.acos(-1 + (2 * i - 1) / max);
            theta = Math.sqrt(max * Math.PI) * phi;
            tags[i - 1].cx = options.radius * Math.cos(theta) * Math.sin(phi);
            tags[i - 1].cy = options.radius * Math.sin(theta) * Math.sin(phi);
            tags[i - 1].cz = options.radius * Math.cos(phi);
            tags[i - 1].h = convertRem(jQuery(tags[i - 1]).height() / 4);
            tags[i - 1].w = convertRem(jQuery(tags[i - 1]).width() / 4);
            tags[i - 1].zoomFont = 1;
        }
    }

    function calcRotation(fy, fx) {
        curState.sy = Math.sin(fy * mathAssets.dtr);
        curState.cy = Math.cos(fy * mathAssets.dtr);
        curState.sx = Math.sin(fx * mathAssets.dtr);
        curState.cx = Math.cos(fx * mathAssets.dtr);
    }

    function updateTags() {
        var fy;
        var fx;

        if (curState.mouseOver) {
            fy = options.speed - mathAssets.speedY * convertRem(curState.mouseY);
            fx = mathAssets.speedX * convertRem(curState.mouseX) - options.speed;
        } else {
            fy = curState.lastFy * options.slower;
            fx = curState.lastFx * options.slower;
        }
        if (curState.lastFy != fy || curState.lastFx != fx) {
            calcRotation(fy, fx);
            curState.lastFy = fy;
            curState.lastFx = fx;
        }
        if (Math.abs(fy) > 0.1 || Math.abs(fx) > 0.1) {
            j = -1;
            while (j++ < mathAssets.tLength) {
                rx1 = tags[j].cx;
                ry1 = tags[j].cy * curState.cy + tags[j].cz * -curState.sy;
                rz1 = tags[j].cy * curState.sy + tags[j].cz * curState.cy;
                tags[j].cx = rx1 * curState.cx + rz1 * curState.sx;
                tags[j].cy = tags[j].cy * curState.cy + tags[j].cz
                    * -curState.sy;
                tags[j].cz = rx1 * -curState.sx + rz1 * curState.cx;
                var per = mathAssets.diameter
                    / (mathAssets.diameter + tags[j].cz);
                tags[j].x = tags[j].cx * per;
                tags[j].y = tags[j].cy * per;
                tags[j].alpha = per / 2;
                tags[j].data('hover') == 1 ? tags[j].zoomFont = options.fontZoomHover : tags[j].zoomFont = 1;
                tags[j].tagMaxWidth = options.tagMaxWidth*options.fontZoomHover;
                var left = mathAssets.whratio * (tags[j].x - tags[j].w * per) + mathAssets.halfWidth;
                var top = mathAssets.hwratio * (tags[j].y - tags[j].h * per) + mathAssets.halfHeight;
                tags[j][0].style.transform = 'translateX(' + left + 'rem) translateY(' + top + 'rem)';
                tags[j][0].style.fontSize = options.fontMultiplier * tags[j].zoomFont  * tags[j].alpha + 'rem';
                tags[j][0].style.maxWidth = tags[j].tagMaxWidth * tags[j].alpha + '%';
                tags[j][0].style.zIndex = Math.round(-tags[j].cz) + options.zIndexInit;
                tags[j][0].style.opacity = tags[j].alpha;
            }
        }
        
        options.requestAnimationFrameId = requestAnimationFrame(updateTags);
    }
})(jQuery);