async function addComment() {

    const comments = {

      namn: document.getElementById('namn-input').value,

      kategori: document.getElementById('kategori-input').value,

      kommentar: document.getElementById('kommentar-input').value

    };

 

    const resp = await fetch('/add', {

      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(comments),

    });

 

    const jsonData = await resp.json();

    console.log(jsonData);

 

    await getComments(); // Använd await för att vänta på att kommentarerna hämtas innan du går vidare

  }

 

  async function getComments() {

    const response = await fetch('/comments');

    const data = await response.json();

 

    const tableBody = document.getElementById('comments-table-body');

    tableBody.innerHTML = '';

 

    data.forEach(comment => {

      const row = document.createElement('tr');

      row.innerHTML = `

        <td>${comment.namn}</td>

        <td>${comment.kategori}</td>

        <td>${comment.kommentar}</td>

      `;

      tableBody.appendChild(row);

    });

  }