function sendEmail() {
    const emailTo = document.getElementById('emailTo').value.trim();
    const emailSubject = encodeURIComponent(document.getElementById('emailSubject').value.trim());
    const emailBodyRaw = document.getElementById('emailBody').value.trim();
    const emailBody = encodeURIComponent(
        `${emailBodyRaw}\n\n⚠️ Nota: Por favor, recuerda adjuntar el archivo manualmente desde tu cliente de correo.`
    );

    if (emailTo) {
        const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
        window.location.href = mailtoLink;
    } else {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
    }
}
