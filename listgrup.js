function add(ele) {
  console.log(ele);
}
function see(el) {
  const text = el.value;
  console.log(text);
  el.innerHTML = text;
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
      div.innerHTML = `<p >${itemgrup.nom}</p> <p>${maxdesc} <button value=${itemgrup.des} onclick="see(this)"> + </button></p> <p>${itemgrup.img}</p><p>${itemgrup.tag}</p> <button onclick='add(${itemgrup.id})'>Suscripción</button>`;
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
