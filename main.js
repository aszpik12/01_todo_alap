import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";
$(function () {
  const szuloELEM = $(".tarolo");
  new Megjelenit(TODOLIST2, szuloELEM);
  $(window).on("torles", (event) => {
    console.log(event.detail);
  });
});
