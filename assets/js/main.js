document.addEventListener("DOMContentLoaded", () => {
  // スクロールアニメーション
  const elements = document.querySelectorAll('.mv, .news, .greeting, .affection, .faq, .link, .middle, .footer, .copyRight');

  // スクロール時の関数
  const handleScroll = () => {
      elements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
          }
      });
  };

  // スクロールイベントのリスナー
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // リロード時の表示処理

  //定義
  const actionOpen = document.querySelectorAll(".faq__list");
  const descBlocks = document.querySelectorAll(".faq__descBlock");

  //ハンバーガーメニュー関数
  const hamburgerButton = document.getElementById('js-header-btn');
  const navMenu = document.getElementById('js-nav');
  

  // アコーディオンを開閉する関数
  const openAco = (e) => {
    const target = e.currentTarget;
    const hiddenBlock = target.querySelector(".faq__descBlock");
    const descList = target.querySelector(".faq__listBlock");
    const descListHeight = descList.offsetHeight;

    descBlocks.forEach((elem) => {
      elem.style.height = `0`;
    });

    if(target.classList.contains('on')) {
      target.classList.remove('on');
      hiddenBlock.style.height = `0`;
    } else {
      target.classList.add('on');
      hiddenBlock.style.height = `${descListHeight}px`;
    }
      
  }

  // アコーディオン開閉のイベントリスナー
  actionOpen.forEach((elem) => {
    elem.addEventListener("click",(e) => {
      openAco(e);
    });
  });

  // ハンバーガーメニューのイベントリスナー
  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    navMenu.classList.toggle('open');
    
  });
});
