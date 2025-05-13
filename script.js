document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.certificate-wrapper');
    let cards = Array.from(document.querySelectorAll('.certificate-card'));
    const prevBtn = document.getElementById('prevCert');
    const nextBtn = document.getElementById('nextCert');
  
    const langLogos = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-plain.svg"
    ];
    
    const dbmsLogos = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
    ];
    
    const toolLogos = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg",
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swagger.svg",
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gradle.svg",
      "https://imgs.search.brave.com/w92ztcB4TXAzAHz5tr510uIruDWPPNnaLYMgE67td6Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZHJSRG1aMl9G/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc0MDA1MzQ1OTk0/Mw",
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jupyter.svg",
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecolab.svg",
    ];
    
    
    let langIndex = 0;
    let dbmsIndex = 0;
    let toolIndex = 0;
    
    setInterval(() => {
      const langLogo = document.getElementById("lang-logo");
      langLogo.style.opacity = 0;
      setTimeout(() => {
        langIndex = (langIndex + 1) % langLogos.length;
        langLogo.src = langLogos[langIndex];
        langLogo.style.opacity = 1;
      }, 500);
    }, 3000);
    
    setInterval(() => {
      const dbmsLogo = document.getElementById("dbms-logo");
      dbmsLogo.style.opacity = 0;
      setTimeout(() => {
        dbmsIndex = (dbmsIndex + 1) % dbmsLogos.length;
        dbmsLogo.src = dbmsLogos[dbmsIndex];
        dbmsLogo.style.opacity = 1;
      }, 500);
    }, 3000);

    setInterval(() => {
      const toolLogo = document.getElementById("tool-logo");
      toolLogo.style.opacity = 0;
      setTimeout(() => {
        toolIndex = (toolIndex + 1) % toolLogos.length;
        toolLogo.src = toolLogos[toolIndex];
        toolLogo.style.opacity = 1;
      }, 500);
    }, 3000);
    
    
    
    // Cloning first & last
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);
    wrapper.appendChild(firstClone);
    wrapper.insertBefore(lastClone, cards[0]);
  
    cards = Array.from(document.querySelectorAll('.certificate-card')); // refresh
    let index = 1;

    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('play-music-btn');


    btn.addEventListener('click', () => {
        audio.play().then(() => {
            btn.style.display = 'none'; // sembunyikan tombol setelah dipakai
        }).catch((err) => {
            console.error("Playback error:", err);
        });
    });
  
    function scrollToCenter(animated = true) {
      const container = document.querySelector('.certificate-container');
      const card = cards[index];
      const offset = card.offsetLeft - (container.offsetWidth / 2 - card.offsetWidth / 2);
      wrapper.style.transition = animated ? 'transform 0.5s ease' : 'none';
      wrapper.style.transform = `translateX(-${offset}px)`;
  
      cards.forEach((c, i) => c.classList.toggle('active', i === index));
    }
  
    nextBtn.addEventListener('click', () => {
      if (index < cards.length - 1) {
        index++;
        scrollToCenter();
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        scrollToCenter();
      }
    });
  
    wrapper.addEventListener('transitionend', () => {
      if (cards[index].isSameNode(firstClone)) {
        index = 1;
        scrollToCenter(false);
      } else if (cards[index].isSameNode(lastClone)) {
        index = cards.length - 2;
        scrollToCenter(false);
      }
    });
  
    // Initial scroll
    scrollToCenter(false);
  });
  
