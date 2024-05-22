function add(ele) {
  const gruposGuardados = JSON.parse(localStorage.getItem("gruposData"));
  const amigosGuardados = JSON.parse(localStorage.getItem("amigosData"));
  let encontrado = false;

  amigosGuardados[0].grup.forEach((grupamig) => {
    if (grupamig.grupid === ele) {
      encontrado = true;
    }
  });

  if (!encontrado) {
    amigosGuardados[0].grup.push({ grupid: gruposGuardados[ele - 1].id });
    const amigosString = JSON.stringify(amigosGuardados);
    localStorage.setItem("amigosData", amigosString);
    location.reload();
  }
}
function see(el) {
  const text = el.value;
  debugger;
  const parent = el.parentElement;
  parent.innerHTML = `<p>${text}</p>`;
}
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const gruposGuardados = JSON.parse(localStorage.getItem("gruposData"));

  gruposGuardados.forEach((itemgrup) => {
    const div = document.createElement("div");
    div.className = "grupos";
    div.setAttribute("id", `${itemgrup.id}`);
    const maxdesc = itemgrup.des.substring(0, 30);
    if (itemgrup.des.length > 30) {
      div.innerHTML = `<p>${itemgrup.nom}</p> <p>${maxdesc} <button onclick="see(this)" value='${itemgrup.des}'> + </button></p> <p>${itemgrup.img}</p><p>${itemgrup.tag}</p> <button onclick="add(${itemgrup.id})">Suscripción</button>`;

      root.appendChild(div);
    } else {
      div.innerHTML = `<p >${itemgrup.nom}</p> <p>${itemgrup.des} </p> <p>${itemgrup.img}</p><p>${itemgrup.tag}</p> <button onclick='add(${itemgrup.id})'>Suscripción</button>`;
      root.appendChild(div);
    }
  });

  const listmigrup = document.getElementById("misgrupos");
  const amigosGuardados = JSON.parse(localStorage.getItem("amigosData"));

  amigosGuardados[0].grup.forEach((migrupo) => {
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    p.className = "migrupos";

    if (migrupo.grupid) {
      const gruposGuardados = JSON.parse(localStorage.getItem("gruposData"));
      gruposGuardados.forEach((nombre) => {
        if (migrupo.grupid === nombre.id) {
          button.setAttribute("id", nombre.id);
          p.innerHTML = `${nombre.nom}`;
          listmigrup.appendChild(p);
          p.appendChild(button);
          button.onclick = () => {
            const botonId = button.getAttribute("id");
            const valorstring = botonId;

            cont = 0;
            amigosGuardados[0].grup.forEach((eliminar) => {
              if (eliminar.grupid.toString() === botonId) {
                amigosGuardados[0].grup.splice(cont, 1);
                const amigosString = JSON.stringify(amigosGuardados);
                localStorage.setItem("amigosData", amigosString);
                location.reload();
              }
              cont++;
            });
          };
        }
      });
    }
  });
});
