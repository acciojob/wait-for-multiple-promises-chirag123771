//your JS code here. If required.
 function getRandomTime() {
      return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
    }

    function createPromise(id) {
      return new Promise((resolve) => {
        const startTime = Date.now();
        setTimeout(() => {
          const endTime = Date.now();
          resolve({ id, timeTaken: (endTime - startTime) / 1000 });
        }, getRandomTime());
      });
    }

    const promises = [
      createPromise("Promise 1"),
      createPromise("Promise 2"),
      createPromise("Promise 3"),
    ];

    Promise.all(promises)
      .then((results) => {
        const loadingRow = document.getElementById("loadingRow");
        loadingRow.parentNode.removeChild(loadingRow);

        const table = document.querySelector('table');
        results.forEach(({ id, timeTaken }) => {
          const row = table.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          cell1.textContent = id;
          cell2.textContent = timeTaken.toFixed(3);
        });

        const totalRow = table.insertRow();
        const totalCell1 = totalRow.insertCell(0);
        const totalCell2 = totalRow.insertCell(1);
        totalCell1.textContent = 'Total';
        totalCell2.textContent = results.reduce((acc, result) => acc + result.timeTaken, 0).toFixed(3);
      });
