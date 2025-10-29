const btn = document.getElementById('generate');
  const input = document.getElementById('text');
  const qrcodeDiv = document.getElementById('qrcode');
const clearBtn = document.getElementById("clear");
    let qrcode;

    btn.addEventListener("click", function() {
      const text = input.value.trim();
      if (!text) {
        alert("Please enter some valid text or url!");
        return;
      }
      qrcodeDiv.innerHTML = "";
      qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 200,
        height: 200,
      });
    });

    clearBtn.addEventListener("click", function() {
      input.value = "";
      qrcodeDiv.innerHTML = "";
    });