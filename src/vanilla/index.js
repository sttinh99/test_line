import "./index.css";
import liff from "@line/liff";

document.addEventListener("DOMContentLoaded", async function () {
  await liff.init({ liffId: process.env.LIFF_ID });

  const login_liff = document.getElementById("login_liff");
  const logout_liff = document.getElementById("logout_liff");
  const user_id = document.getElementById("user_id");
  const user_name = document.getElementById("user_name");

  login_liff.addEventListener("click", myFunction);
  logout_liff.addEventListener("click", handleLogoutLine);

  if (liff.isLoggedIn()) {
    const profile = await liff.getProfile();
    user_id.innerText = profile.user_id;
    user_name.innerText = profile.displayName;
    console.log(profile);
  }

  async function myFunction() {
    if (liff.isLoggedIn()) {
      const res = await liff.getProfile();
      console.log(res);
    } else {
      liff.login();
    }
  }

  async function handleLogoutLine() {
    liff.logout();
    user_id.innerText = "";
    user_name.innerText = "";
    window.location.reload();
  }
});
