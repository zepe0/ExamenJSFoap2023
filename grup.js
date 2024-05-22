const censoredWords = ["word1", "word2", "word3"];
function malsonantes(inputText) {
  const lowerCaseInput = inputText.toLowerCase();
  return censoredWords.some((word) =>
    lowerCaseInput.includes(word.toLowerCase())
  );
}
const amigosGuardados = [];
const gruposGuardados = [];
if (!localStorage.amigosData) {
  const amigos = [
    {
      nom: "Toni",
      cognom: "Oller",
      img: "toni.jpeg",
      grup: [{ grupid: 2 }, { grupid: 1 }],
    },
    { nom: "Juan", cognom: "Vidal", img: "juan.jpeg" },
    { nom: "Neus", cognom: "Vidal", img: "neus.jpeg" },
    { nom: "Gepeto", cognom: "Perez", img: "gepeto.png" },
    { nom: "Perez", cognom: "Perez", img: "perez.jpg" },
    { nom: "Ikram", cognom: "Bghiel", img: "ikram.jpeg" },
  ];
  let amigosString = JSON.stringify(amigos);
  localStorage.setItem("amigosData", amigosString);
  amigosGuardados = JSON.parse(localStorage.getItem("amigosData"));
}
if (!localStorage.gruposData) {
  const grups = [
    {
      id: 1,
      nom: " Tu no ets de Vilanova si no ...",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio blanditiis voluptates reiciendis nesciunt recusandae maxime ducimus rerum magni, labore eligendi, neque nisi fuga aperiam ex laborum, tenetur ea? Dicta.
      Aut, nihil soluta. Nobis possimus ratione repudiandae blanditiis porro officiis animi exercitationem nesciunt temporibus cupiditate aliquam adipisci iusto recusandae dolorem nemo vitae repellat rerum eaque, ducimus eveniet necessitatibus aperiam molestiae!
      Voluptatem veritatis blanditiis quidem molestias nobis recusandae quo doloribus illum facilis totam quas enim pariatur commodi maiores minus quod magnam similique excepturi, reiciendis qui doloremque sequi accusantium voluptate earum! Repellat.
      Dicta est at illo cum nisi! Animi reiciendis quasi corporis veritatis autem est quibusdam error blanditiis quod, doloribus quia? Esse voluptatem corrupti reprehenderit earum minima labore totam ipsa quisquam tempore.
      Provident sapiente sint ipsum, nostrum dignissimos natus nulla deleniti. Autem reiciendis qui repudiandae perspiciatis deleniti odio mollitia beatae quas reprehenderit, temporibus, quisquam rerum eligendi, illo fuga et. Mollitia, at praesentium.
      Eveniet repudiandae earum dolore necessitatibus nulla mollitia ipsa, distinctio dolor eligendi commodi excepturi cum saepe! Aliquid quas quibusdam at optio possimus repellat, magni assumenda aut ratione velit blanditiis quaerat illum?
      Harum porro possimus consequatur quis natus animi, magni sit. Molestiae, quisquam? Esse quibusdam veritatis deleniti ullam exercitationem omnis, eveniet deserunt dolor consequatur sunt ducimus, facilis facere? Officia autem harum quos.
      Illum libero animi dolores fugit corrupti? Qui, vitae obcaecati!`,
      img: "http//xxxxx",
      tag: ["social"],
    },
    {
      id: 2,
      nom: " Vilanova imatges d'ahir i avui",
      des: "...",
      img: "http//xxxxx",
      tag: ["records"],
    },
    {
      id: 3,
      nom: "anem a caminar",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio blanditiis voluptates reiciendis nesciunt recusandae maxime ducimus rerum magni, labore eligendi, neque nisi fuga aperiam ex laborum, tenetur ea? Dicta.
      Aut, nihil soluta. Nobis possimus ratione repudiandae blanditiis porro officiis animi exercitationem nesciunt temporibus cupiditate aliquam adipisci iusto recusandae dolorem nemo vitae repellat rerum eaque, ducimus eveniet necessitatibus aperiam molestiae!
      Voluptatem veritatis blanditiis quidem molestias nobis recusandae quo doloribus illum facilis totam quas enim pariatur commodi maiores minus quod magnam similique excepturi, reiciendis qui doloremque sequi accusantium voluptate earum! Repellat.
      Dicta est at illo cum nisi! Animi reiciendis quasi corporis veritatis autem est quibusdam error blanditiis quod, doloribus quia? Esse voluptatem corrupti reprehenderit earum minima labore totam ipsa quisquam tempore.
      Provident sapiente sint ipsum, nostrum dignissimos natus nulla deleniti. Autem reiciendis qui repudiandae perspiciatis deleniti odio mollitia beatae quas reprehenderit, temporibus, quisquam rerum eligendi, illo fuga et. Mollitia, at praesentium.
      Eveniet repudiandae earum dolore necessitatibus nulla mollitia ipsa, distinctio dolor eligendi commodi excepturi cum saepe! Aliquid quas quibusdam at optio possimus repellat, magni assumenda aut ratione velit blanditiis quaerat illum?
      Harum porro possimus consequatur quis natus animi, magni sit. Molestiae, quisquam? Esse quibusdam veritatis deleniti ullam exercitationem omnis, eveniet deserunt dolor consequatur sunt ducimus, facilis facere? Officia autem harum quos.
      Illum libero animi dolores fugit corrupti? Qui, vitae obcaecati! Consectetur, nisi consequuntur earum officia, unde modi, sunt ab in quibusdam necessitatibus quidem laudantium id nobis ex alias veritatis repudiandae. Voluptates?
      In ipsam tempora, mollitia voluptates fugit sed dolore nulla ea architecto maxime. Delectus, labore omnis pariatur odio ab autem ipsam mollitia commodi deleniti dolorum ut debitis dolor error voluptatem assumenda!
     tem vitae numquam ipsa explicabo maiores natus optio sunt pariatur quod voluptates aliquid voluptatibus alias. Assumenda, quibusdam? Necessitatibus, nostrum. Nesciunt qui pariatur a?`,
      img: "http//xxxxx",
      tag: ["esport", "salut"],
    },
    {
      id: 4,
      nom: " Club ESportiu",
      des: "...",
      img: "http//xxxxx",
      tag: ["esport", "aventura"],
    },
  ];
  const gruposString = JSON.stringify(grups);
  localStorage.setItem("gruposData", gruposString);
  const gruposGuardados = JSON.parse(localStorage.getItem("gruposData"));
}

function isEmpty(str) {
  return !str || str.length === 0;
}
const isValidURL = (urlString) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return !!urlPattern.test(urlString);
};

// Validaciones Formulario
let tagerror = true;
function newGrup() {
  event.preventDefault();
  const nom = document.getElementById("nom").value;
  const desc = document.getElementById("desc").value;
  const img = document.getElementById("img").value;
  const tag = document.getElementById("tag").value;
  const federror = document.getElementsByName("error");

  if (isEmpty(nom)) {
    federror[0].classList.remove("hiden");
    federror[0].classList.add("error");
    federror[0].innerText = "EL nombre del grupo es obligatorio";
  }
  if (isEmpty(desc)) {
    federror[1].classList.remove("hiden");
    federror[1].classList.add("error");
    federror[1].innerText = "La Descripcion del grupo es obligatoria";
  }
  if (malsonantes(desc)) {
    federror[1].classList.remove("hiden");
    federror[1].innerText = "";
    federror[1].innerText = desc + "No esta permitida";
  }
  if (isEmpty(img)) {
    federror[2].classList.remove("hiden");
    federror[2].classList.add("error");
    federror[2].innerText = "La Imagen es obligatoria";
  }
  if (isValidURL(img)) {
    federror[2].classList.remove("hiden");
    federror[2].classList.add("error");
    federror[2].innerText = "Introduce una Url Valida";
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let selectedCount = 0;
  let selectedTags = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCount++;
      selectedTags.push(checkbox.value);
    }
  });

  if (selectedCount === 0) {
    tagerror = false;
    federror[3].classList.remove("hiden");
    federror[3].classList.add("error");
    federror[3].innerText = "Debes seleccionar al menos una etiqueta.";
  } else if (selectedCount > 3) {
    tagerror = false;
    federror[3].classList.remove("hiden");
    federror[3].classList.add("error");
    federror[3].innerText = "No puedes seleccionar más de tres etiquetas.";
  } else tagerror = true;
  const idnext = JSON.parse(localStorage.getItem("gruposData"));
  const newGrup = {
    id: idnext.length + 1,
    nom: nom,
    des: desc,
    img: img,
    tag: selectedTags,
  };
  if (
    !isEmpty(nom) &&
    !isEmpty(desc) &&
    tagerror &&
    !isEmpty(img) &&
    !malsonantes(desc) &&
    !isValidURL(img)
  ) {
    const gruposData = JSON.parse(localStorage.getItem("gruposData"));
    gruposData.push(newGrup);
    localStorage.setItem("gruposData", JSON.stringify(gruposData));

    const federrorArray = Array.from(federror);
    federrorArray.map((nerror) => {
      nerror.classList.add("hiden");
    });
    document.getElementById("exit").innerText = "Grupo Guardado correctamente";
  }
  console.log(localStorage.gruposData);
}

/// Buscador de Grupos
document.addEventListener("DOMContentLoaded", function () {
  const grupoSelect = document.getElementById("grupos");
  const amicSelect = document.getElementById("amigos");

  gruposGuardados.forEach((data) => {
    const option = document.createElement("option");
    option.value = data.nom;
    option.text = data.tag;
    grupoSelect.appendChild(option);
  });
  amigosGuardados.forEach((dataamic) => {
    const option = document.createElement("option");
    option.value = dataamic.nom;
    option.text = dataamic.cognom;
    amicSelect.appendChild(option);
  });
});
