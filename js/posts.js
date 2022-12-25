let grid = document.querySelector(".grid");

fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
  res.json().then((data) => {
    data.forEach((p, arr, a = 0, b = 10) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.append(cardBody);
      let h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = `User Id: ${p.userId}`;
      cardBody.append(h5);
      let h6 = document.createElement("h6");
      h6.classList.add("card-subtitle");
      h6.classList.add("mb-2");
      h6.classList.add("text-muted");
      h6.textContent = `Title: ${p.title}`;
      cardBody.append(h6);
      let paragraph = document.createElement("p");
      paragraph.classList.add("card-text");
      paragraph.textContent = `Body: ${p.body}`;
      cardBody.append(paragraph);
      grid.append(card);
    });
    // let grid = document.querySelector(".grid");
  });
});
