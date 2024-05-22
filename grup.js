const censoredWords = ["word1", "word2", "word3"];
function malsonantes(inputText) {
  const lowerCaseInput = inputText.toLowerCase();
  return censoredWords.some((word) =>
    lowerCaseInput.includes(word.toLowerCase())
  );
}
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
const amigosString = JSON.stringify(amigos);
localStorage.setItem("amigosData", amigosString);
const amigosGuardados = JSON.parse(localStorage.getItem("amigosData"));

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
    Illum libero animi dolores fugit corrupti? Qui, vitae obcaecati!
    img: "http//xxxxx",
    tag: ["social"],`,
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
    Laboriosam omnis repellendus eos nobis laudantium minus et officia commodi exercitationem sunt perferendis cupiditate suscipit pariatur dolor ducimus, deleniti magni rem deserunt voluptate perspiciatis harum, vitae sed. Unde, delectus ipsam.
    Vero ad aut dolores id vel expedita possimus, corrupti ex odit omnis ab incidunt suscipit a accusamus facilis tempore, voluptate qui quidem et quis dolor aliquid repellat laborum illo. Distinctio.
    Laborum, error? Quam corporis maxime error praesentium aut nihil incidunt fuga quo? Laudantium officiis perspiciatis neque at. Commodi, blanditiis. Similique nisi temporibus beatae, ullam dolores eaque ea sapiente hic consequuntur!
    Distinctio commodi, laborum cumque repudiandae laudantium recusandae sapiente. Sapiente ipsum mollitia totam odio, quam quod dolor eum nemo explicabo tempore fugit repellat omnis quaerat magni qui hic consequuntur aliquid nihil.
    Praesentium sit commodi deserunt provident, modi nam, adipisci tenetur autem sequi quisquam pariatur unde minima sed iste est dolor aut aliquam accusamus quae? Quas modi dignissimos laborum soluta magnam beatae.
    Ullam vero a architecto magni qui cum, autem praesentium optio quis velit voluptas sed! Sunt, quibusdam quae quas blanditiis fugit id eius. Cum libero ratione provident qui, explicabo ad ex.
    Ipsa exercitationem excepturi voluptatum voluptatibus ratione rem ex hic, quis amet recusandae eos, numquam iure. Atque vel quod eos nulla, officiis eveniet. Ab magni laboriosam eligendi velit enim itaque molestias!
    Ullam ipsum hic obcaecati optio aspernatur debitis id voluptatibus tenetur eos assumenda voluptatum consequatur a consequuntur quia facilis nulla recusandae rem, provident perferendis blanditiis distinctio exercitationem vero? Voluptatem, illo tempore.
    Quibusdam tempore delectus quod dolorum numquam! Tempore officiis eum ex iusto necessitatibus repellendus porro mollitia eius nisi, illum molestias accusantium autem explicabo accusamus ullam nobis optio in. Perferendis, ratione quod?
    Commodi accusantium saepe exercitationem accusamus eum tenetur corrupti totam, hic eveniet culpa sit eos vero numquam doloribus debitis facere quasi repellendus voluptates tempore a ipsam esse. Atque inventore animi placeat?
    Harum at ea veniam modi accusamus, vero autem vitae numquam ipsa explicabo maiores natus optio sunt pariatur quod voluptates aliquid voluptatibus alias. Assumenda, quibusdam? Necessitatibus, nostrum. Nesciunt qui pariatur a?`,
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

function isEmpty(str) {
  return !str || str.length === 0;
}
const isValidURL = (urlString) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return !!urlPattern.test(urlString);
};

// Validaciones Formulario
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
  if (isEmpty(tag)) {
    federror[3].classList.remove("hiden");
    federror[3].classList.add("error");
    federror[3].innerText = "Añade un tag";
  }
  const newGrup = {
    nom: nom,
    des: desc,
    img: img,
    tag: [tag],
  };
  if (
    !isEmpty(nom) &&
    !isEmpty(desc) &&
    !malsonantes(desc) &&
    !isEmpty(img) &&
    !isEmpty(tag) &&
    !malsonantes(desc) &&
    !isValidURL(img)
  ) {
    const addgrup = grups.push(newGrup);
    const gruposString = JSON.stringify(addgrup);
    localStorage.setItem("gruposData", gruposString);

    const federrorArray = Array.from(federror);
    federrorArray.map((nerror) => {
      nerror.classList.add("hiden");
    });
    document.getElementById("exit").innerText = "Grupo Guardado correctamente";
  }
  console.log(grups);
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
