function loadPresentation() {
    const pptUrl = document.getElementById('pptUrl').value;
    if (!pptUrl) {
      alert("https://www.slideshare.net/Hubakhan3/listening-skills-71370905");
      return;
    }
    
    const viewer = document.getElementById('viewer');
    viewer.innerHTML = `<iframe src="${pptUrl}" frameborder="0" width="100%" height="100%"></iframe>`;
  }
  