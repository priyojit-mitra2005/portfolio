const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".about-section",
    triggerHook: 0.8,
    reverse: false
})
.setClassToggle(".about-section", "visible")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".secondSection",
    triggerHook: 0.8,
    reverse: false
})
.on("enter", function () {
    document.querySelectorAll('.secondSection .vertical').forEach(el => {
        el.classList.add('pop-in');
    });
})
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".contact-section",
    triggerHook: 0.8,
    reverse: false
})
.setClassToggle(".contact-section", "pulse")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "footer",
    triggerHook: 1,
    reverse: false
})
.setClassToggle("footer", "visible")
.addTo(controller);