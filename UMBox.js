document.addEventListener('DOMContentLoaded', function() {
  const modalUrl = 'https://raw.githubusercontent.com/Plawro/UnderMaintenance-box/main/UMBox.html';

  // Default configuration
  let modalConfig = {
    title: 'Hello! Voilà! Zdravím!',
    message: 'This site is in maintenance mode. Will be finished soon. Developed by Plawro.',
    statuses: [
      { text: 'Texts / Content', status: 'yellow', detail: 'Progress 40%' },
      { text: 'Style / Graphics', status: 'green', detail: 'Finished' },
      { text: 'Functionality / Scripts', status: 'orange', detail: 'Partially finished' },
      { text: 'Security', status: 'gray', detail: 'None' },
      { text: 'Backend', status: 'blue', detail: 'Waiting' },
    ]
  };

  // Check if a global config is defined
  if (typeof window.modalConfig !== 'undefined') {
    modalConfig = window.modalConfig;
  }

  // Fetch the external modal HTML
  fetch(modalUrl)
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);

      // Apply configurations
      document.getElementById('modal-title').textContent = modalConfig.title;
      document.getElementById('modal-message').innerHTML = modalConfig.message;

      const statusContainer = document.getElementById('status-container');
      modalConfig.statuses.forEach(item => {
        const div = document.createElement('div');
        div.className = 'status-container';
        div.innerHTML = `<span>${item.text}</span> <span class="status ${item.status}">${item.detail}</span>`;
        statusContainer.appendChild(div);
      });

      // Open the modal automatically
      document.getElementById('open-modal').classList.add('open');

      // Close modal on click
      document.querySelector('.modal-close').addEventListener('click', function() {
        document.getElementById('open-modal').classList.remove('open');
      });
    });
});
