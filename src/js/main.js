TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: .85 });
    if (destination.index === 1) {
      const hairs = document.querySelector(".hair");
      const description = document.querySelector(".description");
      tl.fromTo(hairs, 0.7, { x: "100%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(
          hairs,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        // .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        // .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(hairs, 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});
