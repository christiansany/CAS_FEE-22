const fs = require("fs");
const { mdToPdf } = require("md-to-pdf");

const mdToPdfProxy = async (from, to) => {
  if (!fs.existsSync(to)) {
    fs.writeFileSync(to, "");
  }

  await mdToPdf({ path: from }, { dest: to }).catch(console.error);
};

(async () => {
  // 00_HTML_CSS_Vorkurs
  await mdToPdfProxy(
    "./00_HTML_CSS_Vorkurs/was-ist-html.md",
    "./00_HTML_CSS_Vorkurs/dist/was-ist-html.pdf"
  );
  await mdToPdfProxy(
    "./00_HTML_CSS_Vorkurs/was-ist-css.md",
    "./00_HTML_CSS_Vorkurs/dist/was-ist-css.pdf"
  );

  // 01_HTML_CSS_Basics
  await mdToPdfProxy(
    "./01_HTML_CSS_Basics/fortgeschrittene-basics-html.md",
    "./01_HTML_CSS_Basics/dist/fortgeschrittene-basics-html.pdf"
  );
  await mdToPdfProxy(
    "./01_HTML_CSS_Basics/fortgeschrittene-basics-css.md",
    "./01_HTML_CSS_Basics/dist/fortgeschrittene-basics-css.pdf"
  );
})();
