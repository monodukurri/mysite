'use strict';





{
  // constは再代入不可。letは再代入可能。
  const gallery_list = document.getElementById('slide_box');
  const count = gallery_list.childElementCount;
  // console.log(count);
  
  // 現在、どの画像を表示しているかを知るために、画像のli要素を取得。初期値は仮の値として、ulの最初の要素を代入している。関数を開くごとに書き換わる。modalの画像が常に表示されるようにする。
  let lichild = gallery_list.firstElementChild;
  // console.log(lichild);


  // 画像クリックでモーダルを表示する設定
  $(function(){
    $('.modal_open').on('click', function(){
      const target = $(this).data('modal-btn');
      // console.log(target);
      const modal = document.getElementsByClassName(target);

      // lichildに現在表示されている画像を代入。targetのclassを持つ最初の要素を取得している。
      lichild = document.getElementsByClassName(target)[0];

      //fadeInはdisplay:noneになっている要素を表示する命令、()内は表示に要する時間を指定できる。
      $(modal).fadeIn();
      // console.log(modal);
      // モーダルの背景を表示する。
      const modal_bg = document.getElementsByClassName("modal_bg");
      $(modal_bg).fadeIn();
      // モーダルのボタンを表示する。
      const modal_btn_next = document.getElementsByClassName("modal_btn_next");
      $(modal_btn_next).fadeIn();
      const modal_btn_prev = document.getElementsByClassName("modal_btn_prev");
      $(modal_btn_prev).fadeIn();
    });

    // モーダルを非表示にする。
    $('.modal_close').on('click' , function(){
      $('.gallery_img').fadeOut();
      $('.modal_bg').fadeOut();
      $('.modal_btn_next').fadeOut();
      $('.modal_btn_prev').fadeOut();
    });
    
  });



// モーダルの画像をクリックでスライドする設定
  $('.gallery_img').on('click', function(){
    // const first_child = gallery_list.firstElementChild;
    // console.log(first_child);
    const target = $(this).data('modal-btn');
    // console.log(target);
    const click_child = document.getElementById(target);
    // console.log(click_child);
    // const modal = first_child.nextElementSibling;
    lichild = click_child.nextElementSibling;
    // console.log(lichild);
    // 最後の画像をクリックした場合、nextElementがnullになるので、その場合は、firstElementを代入して最初の画像に戻る。
    if(lichild === null){
      lichild = gallery_list.firstElementChild;
    }
    console.log(lichild);
    // 次の画像をフェードイン
    $(lichild).fadeIn();

    //現在表示されている画像をフェードアウト 
    $(click_child).fadeOut();

  });

  // 次へボタンをクリックした時の処理
  $('.modal_btn_next').on('click', function(){
    // 現在の画像をclick_childに格納
    const click_child = lichild;
    // console.log(click_child);
    // 次の画像を格納。
    lichild = lichild.nextElementSibling;
    // console.log(lichild);
    // 最後の画像をクリックした場合、nextElementがnullになるので、その場合は、firstElementを代入して最初の画像に戻る。
    if(lichild === null){
      lichild = gallery_list.firstElementChild;
    }
    // console.log(lichild);
    // 次の画像をフェードイン
    $(lichild).fadeIn();

    //現在表示されている画像をフェードアウト 
    $(click_child).fadeOut();
    
  });

  // 戻るボタンをクリックした時の処理
  $('.modal_btn_prev').on('click', function(){
    // 現在の画像をclick_childに格納
    const click_child = lichild;
    // console.log(click_child);
    // 次の画像を格納。
    lichild = lichild.previousElementSibling;
    // console.log(lichild);
    // 最後の画像をクリックした場合、nextElementがnullになるので、その場合は、firstElementを代入して最初の画像に戻る。
    if(lichild === null){
      lichild = gallery_list.lastElementChild;
    }
    // console.log(lichild);
    // 次の画像をフェードイン
    $(lichild).fadeIn();

    //現在表示されている画像をフェードアウト 
    $(click_child).fadeOut();

  });


};

