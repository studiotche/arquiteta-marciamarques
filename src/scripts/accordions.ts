const accordions = document.querySelectorAll<HTMLDetailsElement>("details.process-accordion-item, details.faq-item");
const accordionTimeouts = new WeakMap<HTMLDetailsElement, number>();
const ACCORDION_DURATION = 400;

const getContentWrapper = (details: HTMLDetailsElement) => {
  const wrapper = details.querySelector<HTMLElement>(".process-body, .faq-answer");
  if (!wrapper) return null;
  
  if (!wrapper.querySelector(":scope > .accordion-inner")) {
    const inner = document.createElement("div");
    inner.className = "accordion-inner";
    while (wrapper.firstChild) {
      inner.appendChild(wrapper.firstChild);
    }
    wrapper.appendChild(inner);
  }
  
  return wrapper;
};

const clearAccordionTimeout = (details: HTMLDetailsElement) => {
  const timeout = accordionTimeouts.get(details);
  if (timeout !== undefined) window.clearTimeout(timeout);
};

const finishOpenAccordion = (details: HTMLDetailsElement, wrapper: HTMLElement) => {
  clearAccordionTimeout(details);
  accordionTimeouts.set(details, window.setTimeout(() => {
    if (details.open && !details.classList.contains("is-closing")) wrapper.style.height = "auto";
  }, ACCORDION_DURATION));
};

const animatedCloseAccordion = (details: HTMLDetailsElement) => {
  const wrapper = getContentWrapper(details);
  if (!details.open || !wrapper || details.classList.contains("is-closing")) return;
  details.classList.add("is-closing");
  wrapper.style.height = `${wrapper.offsetHeight}px`;
  wrapper.style.opacity = "1";
  void wrapper.offsetHeight; // force reflow
  wrapper.style.height = "0px";
  wrapper.style.opacity = "0";
  clearAccordionTimeout(details);
  accordionTimeouts.set(details, window.setTimeout(() => {
    details.removeAttribute("open");
    details.classList.remove("is-closing");
    wrapper.style.height = "";
    wrapper.style.opacity = "";
  }, ACCORDION_DURATION));
};

const animatedOpenAccordion = (details: HTMLDetailsElement) => {
  const wrapper = getContentWrapper(details);
  if (!wrapper || details.open) return;
  details.classList.remove("is-closing");
  details.setAttribute("open", "");
  wrapper.style.height = "0px";
  wrapper.style.opacity = "0";
  void wrapper.offsetHeight; // force reflow
  wrapper.style.height = `${wrapper.scrollHeight}px`;
  wrapper.style.opacity = "1";
  finishOpenAccordion(details, wrapper);
};

accordions.forEach((details) => {
  const summary = details.querySelector("summary");
  if (!summary) return;
  
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (details.classList.contains("is-closing")) {
      clearAccordionTimeout(details);
      details.classList.remove("is-closing");
      const wrapper = getContentWrapper(details);
      if (wrapper) {
        wrapper.style.height = `${wrapper.scrollHeight}px`;
        wrapper.style.opacity = "1";
        finishOpenAccordion(details, wrapper);
      }
      return;
    }
    
    if (details.open) {
      animatedCloseAccordion(details);
    } else {
      const name = details.getAttribute("name");
      if (name) {
        document.querySelectorAll<HTMLDetailsElement>(`details[name="${name}"]`).forEach((other) => {
          if (other !== details && other.open) animatedCloseAccordion(other);
        });
      }
      animatedOpenAccordion(details);
    }
  });
});

accordions.forEach((details) => {
  if (details.open) {
    const wrapper = getContentWrapper(details);
    if (wrapper) {
      wrapper.style.height = "auto";
    }
  }
});
