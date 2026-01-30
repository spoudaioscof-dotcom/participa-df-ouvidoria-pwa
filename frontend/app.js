let mediaRecorder;
let audioChunks = [];

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      audioChunks = [];

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      document.getElementById("audioStatus").innerText = "Gravando áudio...";
      
      setTimeout(() => mediaRecorder.stop(), 5000);
      mediaRecorder.onstop = () => {
        document.getElementById("audioStatus").innerText =
          "Áudio gravado (simulação de transcrição).";
      };
    });
}

function submitManifestation() {
  if (!document.getElementById("consent").checked) {
    alert("É necessário consentimento LGPD.");
    return;
  }

  const protocol = "DF-" + Date.now();
  document.getElementById("protocol").innerText =
    "Protocolo gerado: " + protocol;
}
