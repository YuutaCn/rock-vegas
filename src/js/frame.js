document.querySelector('.video__play').addEventListener('click', () => {
  document.querySelector('[data-video]').innerHTML = '<iframe class="fancybox__iframe" id="youtube" allow="autoplay; fullscreen" scrolling="auto" src="https://www.youtube-nocookie.com/embed/zzv7eSQOtk8?autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1"></iframe>';
});
document.querySelector('.hero__play-demo').addEventListener('click', () => {
  document.querySelector('[data-demo]').innerHTML = '<iframe data-src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs4096bufking&amp;jurisdiction=MT&amp;lang=en&amp;lobbyUrl=https%3A%2F%2Fwww.bobcasino.com%2Fexit_iframe" allowfullscreen="true" class="hero-screen__frame" id="demo" src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs4096bufking&amp;jurisdiction=MT&amp;lang=en&amp;lobbyUrl=https%3A%2F%2Fwww.bobcasino.com%2Fexit_iframe"></iframe>';
});
