"use server";

async function create(state, formData) {
  const name = formData.get("name");
  console.log(name);
  const email = formData.get("email");
  console.log(email);
  const subject = formData.get("subject");
  console.log(subject);
  const text = formData.get("text");
  console.log(text);

  if (name === "" || email === "" || subject === "" || text === "") {
    return {
      status: "error",
      message: "تمام موارد فرم تماس با ما الزمامی است.",
    };
  }
}
export { create };
