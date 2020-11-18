'use strict';

let yusha = document.getElementById('yusha_name').innerHTML;
let LV = document.getElementById('lv').innerHTML;

if (localStorage.getItem('name')) { // 値が保存されていれば
  const text = localStorage.getItem('name'); // データを取得
  $('#input').val(text); // 取得したデータで上書き
}

if (localStorage.getItem('lv')) { // 値が保存されていれば
  let LV = localStorage.getItem('lv'); // データを取得
  $('#lv').val(LV); // 取得したデータで上書き
  document.getElementById('lv').textContent = LV;
}

//名前の入力
$('#save').hover(function () {
    $('#save').css('background', '#fff');
    $('#save').css('color', '#000');
  },
  function () {
    $('#save').css('background', '#000');
    $('#save').css('color', '#fff');
  });

$('#save').click(function () {
  $('div').removeClass('battle_scene');
  $('.form').css('display', 'none');
  const text = $('#input').val();
  localStorage.setItem('name', text);
  //console.log(text);
  let yusha = document.getElementById('yusha_name').innerHTML;
  yusha = $('#input').val();
  document.getElementById('yusha_name').textContent = yusha;
  console.log(yusha);
});

//たたかうにカーソルを乗せる
$('#battle').hover(function () {
    $('#battle').css('background', '#fff');
    $('#battle').css('color', '#000');
  },
  function () {
    $('#battle').css('background', '#000');
    $('#battle').css('color', '#fff');
  });

//たたかうをクリック
$('.battle').click(function () {
  $('div').removeClass('janken');
});

$('#battle').click(function () {
  $('#herbs').addClass('herbs');
});

//グーにカーソルを乗せる
$('#gu').hover(function () {
    $('#gu').css('background', '#fff');
    $('#gu').css('color', '#000');
  },
  function () {
    $('#gu').css('background', '#000');
    $('#gu').css('color', '#fff');
  });
//グーをクリック
$('#gu').on('click', function () {
  const randomNumber = Math.floor(Math.random() * 3);

  //ゆうしゃ：グー, スライム：チョキ
  if (randomNumber == 0) {
    $('#hand').html('チョキ');
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    if (slimeHP >= 4) {
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html('<p>スライムはチョキをだした！<br>スライムに3のダメージをあたえた！</p>');
    } else if (slimeHP == 3) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>スライムに3のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    } else if (slimeHP == 2) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 2;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>スライムに2のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    } else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>スライムに1のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：グー, スライム：グー
  } else if (randomNumber == 1) {
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    $('#hand').html('グー');
    //それ以外
    if (yushaHP >= 2 && slimeHP >= 2) {
      $('p').html('<p>スライムはグーをだした！<br>おたがいに1のダメージをうけた！</p>');
      let yushaHP = document.getElementById('remainingHP').innerHTML;
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;

      let slimeHP = document.getElementById('slimeHP').innerHTML;
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
    }
    //ゆうしゃのHPが1になった時
    else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>おたがいに1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
    //スライムのHPが1になった時
    else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>おたがいに1のダメージをうけた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：グー, スライム：パー
  } else if (randomNumber == 2) {
    $('#hand').html('パー');
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    if (yushaHP >= 4) {
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>${yusha}は3のダメージをうけた！</p>`);
    } else if (yushaHP == 3) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>${yusha}は3のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 2) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 2;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>${yusha}は2のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>${yusha}は1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
  }
});

//チョキにカーソルを乗せる
$('#cho').hover(function () {
    $('#cho').css('background', '#fff');
    $('#cho').css('color', '#000');
  },
  function () {
    $('#cho').css('background', '#000');
    $('#cho').css('color', '#fff');
  });
//チョキをクリック
$('#cho').on('click', function () {
  const randomNumber = Math.floor(Math.random() * 3);

  //ゆうしゃ：チョキ, スライム：パー
  if (randomNumber == 0) {
    $('#hand').html('パー');
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    if (slimeHP >= 4) {
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html('<p>スライムはパーをだした！<br>スライムに3のダメージをあたえた！</p>');
    } else if (slimeHP == 3) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>スライムに3のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);

    } else if (slimeHP == 2) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 2;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>スライムに2のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    } else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはパーをだした！<br>スライムに1のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：チョキ, スライム：チョキ
  } else if (randomNumber == 1) {
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    $('#hand').html('チョキ');
    //それ以外
    if (yushaHP >= 2 && slimeHP >= 2) {
      $('p').html('<p>スライムはチョキをだした！<br>おたがいに1のダメージをうけた！</p>');
      let yushaHP = document.getElementById('remainingHP').innerHTML;
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;

      let slimeHP = document.getElementById('slimeHP').innerHTML;
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
    }
    //ゆうしゃのHPが1になった時
    else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html(`<p>スライムはチョキをだした！<br>おたがいに1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
    //スライムのHPが1になった時
    else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html(`<p>スライムはチョキをだした！<br>おたがいに1のダメージをうけた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：チョキ, スライム：グー
  } else if (randomNumber == 2) {
    $('#hand').html('グー');
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    if (yushaHP >= 4) {
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>${yusha}は3のダメージをうけた！</p>`);
    } else if (yushaHP == 3) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>${yusha}は3のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 2) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 2;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>${yusha}は2のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainigHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>${yusha}は1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
  }
});

//パーにカーソルを乗せる
$('#par').hover(function () {
    $('#par').css('background', '#fff');
    $('#par').css('color', '#000');
  },
  function () {
    $('#par').css('background', '#000');
    $('#par').css('color', '#fff');
  });
//パーをクリック
$('#par').on('click', function () {
  const randomNumber = Math.floor(Math.random() * 3);

  //ゆうしゃ：パー, スライム：グー
  if (randomNumber == 0) {
    $('#hand').html('グー');
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    if (slimeHP >= 4) {
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html('<p>スライムはグーをだした！<br>スライムに3のダメージをあたえた！</p>');
    } else if (slimeHP == 3) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 3;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>スライムに3のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    } else if (slimeHP == 2) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 2;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>スライムに2のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    } else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはグーをだした！<br>スライムに1のダメージをあたえた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：パー, スライム：パー
  } else if (randomNumber == 1) {
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    let slimeHP = document.getElementById('slimeHP').innerHTML;
    let LV = document.getElementById('lv').innerHTML;
    $('#hand').html('パー');
    //それ以外
    if (yushaHP >= 2 && slimeHP >= 2) {
      $('p').html('<p>スライムはパーをだした！<br>おたがいに1のダメージをうけた！</p>');
      let yushaHP = document.getElementById('remainingHP').innerHTML;
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;

      let slimeHP = document.getElementById('slimeHP').innerHTML;
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
    }
    //ゆうしゃのHPが1になった時
    else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html(`<p>スライムはパーをだした！<br>おたがいに1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
    //スライムのHPが1になった時
    else if (slimeHP == 1) {
      $('.slime').css('color', 'red');
      $('.slime').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      slimeHP = slimeHP - 1;
      document.getElementById('slimeHP').textContent = slimeHP;
      $('p').html(`<p>スライムはパーをだした！<br>おたがいに1のダメージをうけた！<br>スライムをたおした！<br>${yusha}は4のけいけんちをかくとく！<br>${yusha}のレベルがあがった！</p>`);
      LV = parseInt(LV) + 1;
      document.getElementById('lv').textContent = LV;
      localStorage.setItem('lv', LV);
    }

    //ゆうしゃ：パー, スライム：チョキ
  } else if (randomNumber == 2) {
    $('#hand').html('チョキ');
    let yushaHP = document.getElementById('remainingHP').innerHTML;
    if (yushaHP >= 4) {
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>${yusha}は3のダメージをうけた！</p>`);
    } else if (yushaHP == 3) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 3;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>${yusha}は3のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 2) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 2;
      document.getElementById('remainingHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>${yusha}は2のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    } else if (yushaHP == 1) {
      $('.yusha').css('color', 'red');
      $('.yusha').css('border-color', 'red');
      yushaHP = yushaHP - 1;
      document.getElementById('remainigHP').textContent = yushaHP;
      yusha = $('#input').val();
      $('p').html(`<p>スライムはチョキをだした！<br>${yusha}は1のダメージをうけた！<br>${yusha}はしんでしまった！</p>`);
    }
  }
});

//矢印にカーソルを乗せる
$('#arrow1').hover(function () {
    $('#arrow1').css('background', '#fff');
    $('#arrow1').css('color', '#000');
  },
  function () {
    $('#arrow1').css('background', '#000');
    $('#arrow1').css('color', '#fff');
  });

//矢印をクリック
$('#arrow1').click(function () {
  $('#janken').addClass('janken');
});

//にげるにカーソルを乗せる
$('#escape').hover(function () {
    $('#escape').css('background', '#fff');
    $('#escape').css('color', '#000');
  },
  function () {
    $('#escape').css('background', '#000');
    $('#escape').css('color', '#fff');
  });
//にげるをクリック
$('.escape').click(function () {
  $('#janken').addClass('janken');
  $('#herbs').addClass('herbs');
  $('p').html('<p>ゆうしゃたちはにげだした！<br>しかしまわりこまれてしまった！</p>');
  const runAway = Math.floor(Math.random() * 4);
  if (runAway == 1) {
    history.back();
  }
});

//ぼうぎょにカーソルを乗せる
$('#defense').hover(function () {
    $('#defense').css('background', '#fff');
    $('#defense').css('color', '#000');
  },
  function () {
    $('#defense').css('background', '#000');
    $('#defense').css('color', '#fff');
  });
//ぼうぎょをクリック
$('.defense').click(function () {
  $('p').html('<p>ゆうしゃはみをまもっている！</p>');
});

$('#defense').click(function () {
  $('#janken').addClass('janken');
});

$('#defense').click(function () {
  $('#herbs').addClass('herbs');
});

//どうぐにカーソルを乗せる
$('#tool').hover(function () {
    $('#tool').css('background', '#fff');
    $('#tool').css('color', '#000');
  },
  function () {
    $('#tool').css('background', '#000');
    $('#tool').css('color', '#fff');
  });

//どうぐをクリック
$('.tool').click(function () {
  $('div').removeClass('herbs');
});

$('.tool').click(function () {
  $('#janken').addClass('janken');
});

//薬草１にカーソルを乗せる
$('#herb1').hover(function () {
    $('#herb1').css('background', '#fff');
    $('#herb1').css('color', '#000');
  },
  function () {
    $('#herb1').css('background', '#000');
    $('#herb1').css('color', '#fff');
  });

//薬草１をクリック
$('#herb1').click(function () {
  let HP = document.getElementById('remainingHP').textContent
  document.getElementById('remainingHP').textContent = parseInt(HP) + parseInt(3);
  $('div#herb1').remove();
});

//薬草２にカーソルを乗せる
$('#herb2').hover(function () {
    $('#herb2').css('background', '#fff');
    $('#herb2').css('color', '#000');
  },
  function () {
    $('#herb2').css('background', '#000');
    $('#herb2').css('color', '#fff');
  });
//薬草２をクリック
$('#herb2').click(function () {
  let HP = document.getElementById('remainingHP').textContent
  document.getElementById('remainingHP').textContent = parseInt(HP) + parseInt(3);
  $('div#herb2').remove();
});

//薬草３にカーソルを乗せる
$('#herb3').hover(function () {
    $('#herb3').css('background', '#fff');
    $('#herb3').css('color', '#000');
  },
  function () {
    $('#herb3').css('background', '#000');
    $('#herb3').css('color', '#fff');
  });
//薬草３をクリック
$('#herb3').click(function () {
  let HP = document.getElementById('remainingHP').textContent
  document.getElementById('remainingHP').textContent = parseInt(HP) + parseInt(3);
  $('div#herb3').remove();
});

//矢印にカーソルを乗せる
$('#arrow2').hover(function () {
    $('#arrow2').css('background', '#fff');
    $('#arrow2').css('color', '#000');
  },
  function () {
    $('#arrow2').css('background', '#000');
    $('#arrow2').css('color', '#fff');
  });

//矢印をクリック
$('#arrow2').click(function () {
  $('#herbs').addClass('herbs');
});