import { db } from "./firebase/config.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const form = document.getElementById("contestForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const stageName = document.getElementById("stageName").value;
  const gender = document.getElementById("gender").value;
  const state = document.getElementById("state").value;
  const school = document.getElementById("school").value;

  try {
    await addDoc(collection(db, "contestants"), {
      fullName,
      stageName,
      gender,
      state,
      school,
      createdAt: serverTimestamp()
    });

    msg.innerText = "✅ Registration successful!";
    form.reset();

  } catch (error) {
    console.error(error);
    msg.innerText = "❌ Error submitting form";
  }
});
