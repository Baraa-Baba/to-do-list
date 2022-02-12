$(document).ready(function () {
  var ul = $('<ul></ul>')
  ul.appendTo($('.cont'))
  if (localStorage.getItem('i') == null) {
    var i = 0
  } else {
    var i = localStorage.getItem('i')
  }
  for (var l = 0; l < i; l++) {
    var value = localStorage.getItem(`li${l}`)
    if (value) {
      var li = `<li id="${l}"><p class="p">${value}</p> <label>
  <input type="checkbox" id="check${l}" class="check"/><i class="checkk">&#10004;</i></label><p class="trash"id="${l}">
  <i class="fa fa-trash-o" style="font-size: 48px; color: red"></i><p> </li>`}
    $(li).appendTo(ul)

    if (localStorage.getItem(`${l}`) != null) {
      $(`#check${l}`).prop('checked', true);
      $(`#check${l}`).siblings('.checkk').css('color', 'lightgreen')
    }
    
    $('ul').on("click", ".trash", function () {
      $(this).parent('li').fadeOut(500);
      var n = $(this).parent('li').attr('id')
      localStorage.removeItem(`li${n}`)
    });
    $(".check").change(function () {
      if (this.checked) {
        $(this).siblings('.checkk').css('color', 'lightgreen')
        var m = $(this).parents('li').attr('id')
        localStorage.setItem(`${m}`, `${m}`)
      } else {
        $(this).siblings('.checkk').css('color', 'black')
        var m = $(this).parents('li').attr('id')
        localStorage.removeItem(`${m}`, `${m}`)
      }
    })
  }
  $('#theinput').keydown((e) => e.keyCode === 13 ? addtodolist() : null);
  function addtodolist() {
    if (theinput.value != "") {
      var li = `<li id="${i}"><p class="p">${theinput.value}</p> <label>
  <input type="checkbox" id="check${i}" class="check"/><i class="checkk">&#10004;</i></label><p class="trash"id="${i}">
  <i class="fa fa-trash-o" style="font-size: 48px; color: red"></i><p> </li>`
      $(li).appendTo(ul)
      $('ul').on("click", ".trash", function () {
        $(this).parent('li').fadeOut(500);
        var n = $(this).parent('li').attr('id')
        localStorage.removeItem(`li${n}`)
      });
      $(".check").change(function () {
        if (this.checked) {
          $(this).siblings('.checkk').css('color', 'lightgreen')
          var m = $(this).parents('li').attr('id')
          localStorage.setItem(`${m}`, `${m}`)
        } else {
          $(this).siblings('.checkk').css('color', 'black')
          var m = $(this).parents('li').attr('id')
          localStorage.removeItem(`${m}`, `${m}`)
        }
      })
      localStorage.setItem(`li${i}`, theinput.value)
      i++
      localStorage.setItem('i', i)
      theinput.value = null
    }

    else {
      alert('task is required')
    }
  }

})
