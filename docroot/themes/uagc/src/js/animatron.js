document.addEventListener("DOMContentLoaded", () => {
  //st26
  function orderElements(elementList) {
    let orderedElements = [];
    for (let i = 0; i < elementList.length; i++) {
      let order = parseInt(elementList[i].dataset.order);
      orderedElements[order - 1] = elementList[i];
    }
    return orderedElements;
  }
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    let degreeSVG = document.querySelector("#degree-find-svg");
    let advisorsSVG = document.querySelector("#advisors-svg");
    let admissionProcessSVG = document.querySelector("#admission-process-svg");
    let creditTransferSVG = document.querySelector("#credit-transfer-svg");
    let militarySVG = document.querySelector("#military-svg");
    let tuitionResourcesSVG = document.querySelector("#tuition-resources-svg");
    let nonTraditionalCreditsSVG = document.querySelector(
      "#non-traditional-credits-svg"
    );
    let partnersSVG = document.querySelector("#partners-svg");

    if (degreeSVG) {
      let degreeFinderTimeline = gsap.timeline({
        scrollTrigger: { trigger: degreeSVG, start: "top 60%" },
      });
      let elements = degreeSVG.querySelectorAll(".path-fill");
      let orderedElements = orderElements(elements);
      for (let i = 0; i < orderedElements.length; i++) {
        degreeFinderTimeline.set(orderedElements[i], { opacity: 1 });
        degreeFinderTimeline.from(orderedElements[i], {
          duration: 0.75,
          drawSVG: "100% 100%",
        });
      }
    }

    if (advisorsSVG) {
      let advisorsTimeline = gsap.timeline({
        scrollTrigger: { trigger: advisorsSVG, start: "top 60%" },
      });
      let elements = advisorsSVG.querySelectorAll(".pop-in");
      let orderedElements = orderElements(elements);
      for (let i = 0; i < orderedElements.length; i++) {
        advisorsTimeline.from(orderedElements[i], { duration: 0.75, y: 20 });
        advisorsTimeline.to(
          orderedElements[i],
          { duration: 0.75, opacity: 1 },
          "-=.75"
        );
      }
    }

    if (admissionProcessSVG) {
      let admissionProcessTimeline = gsap.timeline({
        scrollTrigger: { trigger: admissionProcessSVG, start: "top 60%" },
      });
      let elements = admissionProcessSVG.querySelectorAll(".pop-in");
      let orderedElements = orderElements(elements);
      for (let i = 0; i < orderedElements.length; i++) {
        admissionProcessTimeline.from(orderedElements[i], {
          duration: 0.75,
          y: 20,
        });
        admissionProcessTimeline.to(
          orderedElements[i],
          { duration: 0.75, opacity: 1 },
          "-=.75"
        );
      }
    }

    if (creditTransferSVG) {
      let creditTransferTimeline = gsap.timeline({
        scrollTrigger: { trigger: creditTransferSVG, start: "top 60%" },
      });
      let elements = creditTransferSVG.querySelectorAll(".path-fill");
      let orderedElements = orderElements(elements);

      for (let i = 0; i < orderedElements.length; i++) {
        if (i > 0) {
          creditTransferTimeline.set(
            orderedElements[i],
            { opacity: 1 },
            "-=.75"
          );
          creditTransferTimeline.from(
            orderedElements[i],
            { duration: 0.75, drawSVG: "100% 100%" },
            "-=.75"
          );
        } else {
          creditTransferTimeline.set(orderedElements[i], { opacity: 1 });
          creditTransferTimeline.from(orderedElements[i], {
            duration: 0.75,
            drawSVG: "100% 100%",
          });
        }
      }
    }

    if (tuitionResourcesSVG) {
      console.log("hellos");
      let tuitionResourcesTimeline = gsap.timeline({
        scrollTrigger: { trigger: tuitionResourcesSVG, start: "top 60%" },
      });
      let elements = tuitionResourcesSVG.querySelectorAll("#circleMaskElement");
      let orderedElements = orderElements(elements);
      for (let i = 0; i < orderedElements.length; i++) {
        tuitionResourcesTimeline.fromTo(
          orderedElements[i],
          { drawSVG: "50% 50%" },
          { duration: 2, drawSVG: "50% 150%" }
        );
      }
    }

    if (militarySVG) {
      let militaryTimeline = gsap.timeline({
        scrollTrigger: { trigger: militarySVG, start: "top 60%" },
      });
      let elements = militarySVG.querySelectorAll(".pop-in");
      let orderedElements = orderElements(elements);
      for (let i = 0; i < orderedElements.length; i++) {
        militaryTimeline.from(orderedElements[i], { duration: 0.75, y: 20 });
        militaryTimeline.to(
          orderedElements[i],
          { duration: 0.75, opacity: 1 },
          "-=.75"
        );
      }
    }

    if (nonTraditionalCreditsSVG) {
      let nonTraditionalCreditsTimeline = gsap.timeline({
        scrollTrigger: { trigger: nonTraditionalCreditsSVG, start: "top 60%" },
      });
      nonTraditionalCreditsTimeline.from(nonTraditionalCreditsSVG, {
        duration: 1,
        y: 20,
      });
      nonTraditionalCreditsTimeline.to(
        nonTraditionalCreditsSVG,
        { duration: 1, opacity: 1 },
        "-=1"
      );
    }

    if (partnersSVG) {
      let partnersTimeline = gsap.timeline({
        scrollTrigger: { trigger: partnersSVG, start: "top 60%" },
      });
      partnersTimeline.from(partnersSVG, { duration: 1, y: 20 });
      partnersTimeline.to(partnersSVG, { duration: 1, opacity: 1 }, "-=1");
    }

    let scrollElements = document.querySelectorAll(".js-scrolly");
    for (let i = 0; i < scrollElements.length; i++) {
      if (i === scrollElements.length - 1) {
        continue;
      }
      scrollElements[i].addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let target = event.target.getAttribute("href");
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: target, offsetY: 250 },
          ease: "power2",
        });
      });
    }
  }
});
