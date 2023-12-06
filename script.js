const Commentform = document.getElementById('comment-form');





Commentform.addEventListener('submit', (event) => {

    event.preventDefault();

    addComment();

    getComments();

    Commentform.reset();

});




async function addComment() {

    let comments = {




    namn : document.getElementById('namn-input').value,

    kategori : document.getElementById('kategori-input').value,

    comment : document.getElementById('comment-input').value




    };




       const resp = await fetch('/add', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(comments),

    });

     

    const jsonData = await resp.json();

    console.log(jsonData);

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

       <td>${comment.comment}</td>

      `;

      tableBody.appendChild(row);

    });

  }
