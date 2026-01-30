let mediaRecorder;
let audioChunks = [];

function iniciarGravacao() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];
      mediaRecorder.start();

      document.getElementById("statusAudio").innerText =
        "Gravando áudio por 5 segundos...";

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

      setTimeout(() => {
        mediaRecorder.stop();
        document.getElementById("statusAudio").innerText =
          "Áudio gravado (transcrição simulada)";
      }, 5000);
    });
}

function enviar() {
  if (!document.getElementById("consentimento").checked) {
    alert("É necessário aceitar o consentimento LGPD.");
    return;
  }

  fetch("http://localhost:5000/protocolo", {
    method: "POST"
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("protocolo").innerText =
        "Protocolo gerado: " + data.protocolo;
    });
}
