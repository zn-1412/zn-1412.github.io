"use strict";

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const copyStatus = document.getElementById("copy-status");
const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    if (!value) {
      return;
    }

    const copied = await copyText(value);
    const label = button.querySelector("[data-copy-label]");
    const originalLabel = label ? label.textContent : "复制";

    if (!copied) {
      if (copyStatus) {
        copyStatus.textContent = "复制失败，请手动选择地址。";
      }
      return;
    }

    button.classList.add("is-copied");
    if (label) {
      label.textContent = "已复制";
    }
    if (copyStatus) {
      copyStatus.textContent = `已复制 ${value}`;
    }

    window.clearTimeout(Number(button.dataset.resetTimer || 0));
    const timer = window.setTimeout(() => {
      button.classList.remove("is-copied");
      if (label) {
        label.textContent = originalLabel;
      }
    }, 1800);
    button.dataset.resetTimer = String(timer);
  });
});

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the legacy copy path.
    }
  }

  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  } catch (error) {
    return false;
  }
}
