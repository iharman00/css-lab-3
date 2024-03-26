document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.tabs [role="tabpanel"]');
  const tabLinks = document.querySelectorAll('.tabs [role="tab"] a');

  // Function to show a specific tab panel and hide others
  function showTab(tabId) {
    tabs.forEach((tab) => {
      if (tab.id === tabId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }

  // Event listener for tab links
  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("href").substring(1);
      tabLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      showTab(tabId);
    });
  });

  // Show the initial tab panel
  if (tabs.length > 0) {
    showTab(tabs[0].id);
  }
});
