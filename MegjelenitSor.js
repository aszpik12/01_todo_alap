class MegjelenitSor {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.pipaElem = this.sorElem.children("td").children(".kesz");
    this.megseElem = this.sorElem.children("td").children(".megse");
    this.torolElem = this.sorElem.children("td").children(".torol");
    console.log(this.pipaElem);
    this.pipaElem.on("click", () => {
      this.sorElem.css("background-color", "lightgreen");
      this.#esemenyTrigger("pipa");
    });
    this.megseElem.on("click", () => {
      this.sorElem.css("background-color", "white");
      this.#esemenyTrigger("megse");
    });
    this.torolElem.on("click", () => {
      this.sorElem.remove();
      this.#esemenyTrigger("torles");
    });
  }
  #sor() {
    let txt = "";
    txt += "<tr>";

    for (const key in this.#adat) {
      const element = this.#adat[key];
      txt += `<td>${element}</td>`;
    }
    txt += `<td><span class="kesz"> ✔️ </span> <span class="megse"> ❌ </span> <span class="torol"> 🗑️ </span></td>>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }
  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { deatail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default MegjelenitSor;
