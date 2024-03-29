function createSVGEl(e) {
    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return e ? (t.setAttributeNS(null, "viewBox", e.viewBox), t.setAttributeNS(null, "preserveAspectRatio", e.preserveAspectRatio)) : t.setAttributeNS(null, "viewBox", "0 0 100 100"), t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t
}

function controlCheckbox(e, t, a) {
    var n = createSVGEl(a);
    e.parentNode.appendChild(n), e.checked && draw(e, t), e.addEventListener("change", function() {
        e.checked ? draw(e, t) : reset(e)
    })
}

function draw(e, t) {
    var a, n, i = [],
        o = e.parentNode.querySelector("svg");
    a = pathDefs.checkmark, n = animDefs.checkmark, i.push(document.createElementNS("http://www.w3.org/2000/svg", "path"));
    for (var r = 0, s = i.length; r < s; ++r) {
        var l = i[r];
        o.appendChild(l), l.setAttributeNS(null, "d", a[r]);
        var c = l.getTotalLength();
        l.style.strokeDasharray = c + " " + c, l.style.strokeDashoffset = 0 === r ? Math.floor(c) - 1 : c, l.getBoundingClientRect(), l.style.transition = l.style.WebkitTransition = l.style.MozTransition = "stroke-dashoffset " + n.speed + "s " + n.easing + " " + r * n.speed + "s", l.style.strokeDashoffset = "0"
    }
}

function reset(e) {
    Array.prototype.slice.call(e.parentNode.querySelectorAll("svg > path")).forEach(function(e) {
        e.parentNode.removeChild(e)
    })
}
var isMobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0), $(document).ready(function() {
        if ($("#znav-container").length) {
            $("#znav-container").offset().top;
            $this = $("#znav-container"), $("#znav-container #navbarNavDropdown ul.navbar-nav .dropdown").each(function() {
                $this = $(this), $this.parent("li").addClass("has-dropdown")
            }), $("#znav-container #navbarNavDropdown ul.navbar-nav .megamenu").each(function() {
                $this = $(this), $this.parent("li").addClass("has-megamenu")
            }), $(".has-dropdown > a, .has-megamenu > a").on("click", function() {
                $this = $(this).parent(), $this.each(function() {
                    $this.toggleClass("z-active")
                })
            })
        }
    }), $(document).ready(function() {
        if ($(".hamburger").length) {
            var e = $(".hamburger");
            e.on("click", function(t) {
                e.toggleClass("is-active"), $(".is-active").is(":animated") && $(".navbar-toggler").off("click", function() {})
            })
        }
    }), $(document).ready(function(e) {
        e("a[href*=\\#]:not([href=\\#])").click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var t = e(this.hash);
                if (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]"), t.length) return e("html,body").animate({
                    scrollTop: t.offset().top
                }, 400, "swing", function() {}), !1
            }
        })
    }), $(document).ready(function() {
        function e(e, t, a) {
            var n = a.position().left,
                i = t.children(".nav-bar").outerWidth() - (n + a.outerWidth());
            e.css({
                left: n,
                right: i
            })
        }
        $(".tabs, .navs").length && $(".tabs, .navs").each(function() {
            var t = $(this),
                a = t.children(".nav-bar").children(".nav-bar-item.active");
            t.children(".nav-bar").append('<div class="indicator"></div>');
            var n = t.children(".nav-bar").children(".indicator"),
                a = t.children(".nav-bar").children(".nav-bar-item.active");
            $preIndex = a.index(), e(n, t, a), t.children(".nav-bar").children(".nav-bar-item").click(function() {
                var a = $(this),
                    i = a.index(),
                    o = t.children(".tab-contents").children().eq(i);
                a.siblings().removeClass("active"), a.addClass("active"), o.siblings().removeClass("active"), o.addClass("active"), e(n, t, a), i - $preIndex <= 0 ? $(".indicator").addClass("transition-reverse") : $(".indicator").removeClass("transition-reverse"), $preIndex = i
            }), $(window).on("resize", function() {
                e(n, t, t.children(".nav-bar").children(".nav-bar-item.active"))
            })
        })
    }), $(document).ready(function() {
        if ($(".parallax").length) {
            new Rellax(".parallax", {
                center: !0
            })
        }
    }), $(document).ready(function() {
        $(".youtube-background").length && $(".youtube-background").each(function() {
            var e = $(this),
                t = $(this).attr("data-video-url"),
                a = $(this).attr("data-start-at"),
                n = $(this).attr("data-stop-at"),
                i = $(this).attr("data-quality");
            e.attr("data-property", '{videoURL:"' + t + '",containment:"self",autoPlay:true, mute:true, startAt:' + a + ", stopAt:" + n + ', opacity:1, quality: "' + i + '"}'), e.YTPlayer()
        })
    }), $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip()
    }), $(document).ready(function() {
        $(".flexslider").length && $(".flexslider").each(function() {
            var e = $(this);
            e.flexslider({
                controlNav: e.data("controlnav")
            })
        })
    }), $(document).ready(function() {
        $(".owl-carousel").length && $(".owl-carousel").each(function() {
            var e = $(this),
                t = {
                    dots: e.data("dots"),
                    nav: e.data("nav"),
                    responsive: e.data("items"),
                    autoplay: e.data("autoplay"),
                    margin: e.data("margin"),
                    loop: e.data("loop"),
                    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                };
            e.owlCarousel(t)
        })
    }), function(e, t, a) {
        var n = e.querySelectorAll(".inputfile");
        Array.prototype.forEach.call(n, function(e) {
            var t = e.nextElementSibling,
                a = t.innerHTML;
            e.addEventListener("change", function(e) {
                var n = "";
                n = this.files && this.files.length > 1 ? (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : e.target.value.split("\\").pop(), n ? t.querySelector("span").innerHTML = n : t.innerHTML = a
            }), e.addEventListener("focus", function() {
                e.classList.add("has-focus")
            }), e.addEventListener("blur", function() {
                e.classList.remove("has-focus")
            })
        })
    }(document, window), $(document).ready(function() {
        $(".inputfile").length && $(".inputfile + label").prepend('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewbox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>')
    }), document.createElement("svg").getAttributeNS) {
    var checkbxsCheckmark = Array.prototype.slice.call(document.querySelectorAll('.zinput.zcheckbox input[type="checkbox"]'));
    pathDefs = {
        checkmark: ["M16.7,62.2c4.3,5.7,21.8,27.9,21.8,27.9L87,16"]
    }, animDefs = {
        checkmark: {
            speed: .2,
            easing: "ease-in-out"
        }
    }, checkbxsCheckmark.forEach(function(e, t) {
        controlCheckbox(e, "checkmark")
    })
}
$(document).ready(function() {
    $(".zform").length && $(".zform").each(function() {
        var e = $(this);
        e.on("submit", function(t) {
            t.preventDefault();
            var a = e.find(":submit"),
                n = a.val();
            a.val("Sending..."), $.ajax({
                type: "post",
                url: "assets/php/form-processor.php",
                data: $(this).serialize(),
                success: function(t) {
                    e.children(".zform-feedback").html(t), a.val(n), e.trigger("reset")
                }
            })
        })
    })
}), $(document).ready(function() {
    $(".ui.dropdown").length && $(".ui.dropdown").dropdown(), $(".ui.accordion").length && $(".ui.accordion").accordion({
        exclusive: !1
    })
}), $(document).ready(function() {
    $("[data-lightbox]").length && lightbox.option({
        resizeDuration: 400,
        wrapAround: !0,
        fadeDuration: 300,
        imageFadeDuration: 300
    })
}), $(document).ready(function() {
    if ($(".video-modal").length) {
        $("body").after('<div id="videoModal" class="remodal remodal-video"> <button data-remodal-action="close" class="remodal-close"></button> <div class="embed-responsive embed-responsive-16by9"><div id="videoModalIframeWrapper"></div> </div></div>');
        var e = $("#videoModal").remodal(),
            t = $("#videoModalIframeWrapper");
        $(".video-modal").each(function() {
            $(this).on("click", function(a) {
                a.preventDefault();
                var n = $(this),
                    i = n.attr("href").split("/"),
                    o = n.data("start"),
                    r = n.data("end");
                console.log(i), "www.youtube.com" == i[2] ? t.html('<iframe id="videoModalIframe" src="//www.youtube.com/embed/' + i[3].split("?v=")[1] + "?rel=0&amp;autoplay=1&amp;enablejsapi=0&amp;start=" + o + "&ampend=" + r + '" allowfullscreen="" frameborder="0" class="embed-responsive-item hide"></iframe>') : "vimeo.com" == i[2] && t.html('<iframe id="videoModalIframe" src="https://player.vimeo.com/video/' + i[3] + '?autoplay=1&title=0&byline=0&portrait=0 ?autoplay=1&title=0&byline=0&portrait=0 hide"></iframe>'), e.open()
            })
        }), $(document).on("closed", ".remodal", function(e) {
            "videoModal" == $(this).attr("id") && t.html("")
        })
    }
}), $(window).on("load", function() {
    $(".sortable").length && $(".sortable").each(function() {
        var e = $(this),
            t = e.find(".sortable-container"),
            a = e.children(".dropdown").children(".menu");
        t.isotope({
            itemSelector: ".sortable-item",
            masonry: {
                columnWidth: ".sortable-item"
            }
        }), $(a).on("click", ".item", function() {
            var e = $(this),
                t = e.closest(".sortable").find(".sortable-container"),
                a = e.attr("data-filter");
            t.isotope({
                filter: a
            })
        })
    })
}), $(document).ready(function() {
    $(".typed-text").length && $(".typed-text").each(function() {
        var e = $(this);
        e.typed({
            strings: e.data("typed-text"),
            typeSpeed: 100,
            loop: !0,
            backDelay: 1500
        })
    })
}), $(document).ready(function() {
    $(".palette").length && $(".palette [class*='background-']").each(function() {
        $(this).append('<p class="text-uppercase fs--1 mb-0">' + function(e) {
            return e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i), e && 4 === e.length ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : ""
        }($(this).css("background-color")) + "</p>")
    })
});