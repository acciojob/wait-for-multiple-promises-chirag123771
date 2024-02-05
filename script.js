function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function createPromises() {
    return [
      delay(Math.floor(Math.random() * 2000) + 1000),
      delay(Math.floor(Math.random() * 2000) + 1000),
      delay(Math.floor(Math.random() * 2000) + 1000)
    ];
  }

  async function displayResults() {
    const promises = createPromises();
    const startTime = Date.now();

    await Promise.all(promises);

    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;

    const table = document.getElementById('resultTable');
    table.innerHTML = ''; // Clear existing content

    promises.forEach(async (promise, index) => {
      const duration = (await promise) / 1000;
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.innerHTML = `Promise ${index + 1}`;
      cell2.innerHTML = duration.toFixed(3);
    });

    const totalRow = table.insertRow();
    const totalCell1 = totalRow.insertCell(0);
    const totalCell2 = totalRow.insertCell(1);
    totalCell1.innerHTML = 'Total';
    totalCell2.innerHTML = totalTime.toFixed(3);
  }

  displayResults();