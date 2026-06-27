     function updateClock() {
      const now = new Date();

      // Extract parts
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const day = now.toLocaleString('en-US', { weekday: 'long' });
      const date = now.getDate();
      const month = now.toLocaleString('en-US', { month: 'long' });
      const year = now.getFullYear();

      // Format output
      const timeString = `${hours}:${minutes}:${seconds}`;
      const dateString = `${day}, ${date} ${month} ${year}`;

      document.getElementById('clock').innerHTML = `${timeString}<br>${dateString}`;
    }

    // Update every second
    setInterval(updateClock, 1000);
    updateClock();