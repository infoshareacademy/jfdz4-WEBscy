// Adam, obsługa formularza przed grą

$('#button').unbind('click').bind('click', function () {
  var form = document.forms["myForm"]["email"].value;
  var monkey = form.indexOf("@");
  var dot = form.lastIndexOf(".");
  if (monkey < 1 || dot < monkey + 2 || dot + 2 >= form.length) {
    alert("Wprowadź poprawny adres e-mail");
    $('.placeholder').val('');
    return false;
  }
  if (!jQuery("#checkbox").is(":checked")) {
    alert("Musisz wyrazić zgode aby przejść dalej");
    return false;

  }

  else {
    $('#game_area').css('display', 'inline-flex');
    $('#zapiszsie').toggle(400).toggleClass('hide');
    setTimeout(function () {
      $('.placeholder').val('');
    }, 1);
    return false;
  }
});

// Gra

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function convertStringToCoordinates(stringCoordinates) {
  var arrayOfStringCoordinates = stringCoordinates.split("_");
  new_coo_x = arrayOfStringCoordinates[0].replace('x', '');
  new_coo_y = arrayOfStringCoordinates[1].replace('y', '');
  return arrayCoordinates = [new_coo_x, new_coo_y];
}

function levelTimer() {
  var start = new Date;
  setInterval(function () {
    levelTime = Math.round((new Date - start) / 1000, 0);
    $('.level-time').text(levelTime + "s");
  }, 1000);
}

function levelTimerEndGame(gamePlayTime) {
  $timer = $('.level-time');
  $timer.addClass('level-time-end');
  $timer.removeClass('level-time');
  $timer.text(gamePlayTime + 's');
}

function generateTrapField(level) {
  var trapFieldRandom = getRandomInt(0, 3);

  if (level === 1) {
    var trapFieldCoordinates = convertStringToCoordinates(map_level_1_config.trapFiledsArray[trapFieldRandom]);
  }

  if (level === 2) {
    var trapFieldCoordinates = convertStringToCoordinates(map_level_2_config.trapFiledsArray[trapFieldRandom]);
  }

  $oldTrapTd = $('td.map-field-17');
  $oldTrapTd.removeClass();
  $oldTrapTd.addClass("map-td map-field-0 active");

  $oldTrapTd = $('td.map-field-18');
  $oldTrapTd.removeClass();
  $oldTrapTd.addClass("map-td map-field-0 rotate-90 active");

  $trapTd = $('td[x=' + trapFieldCoordinates[0] + '][y=' + trapFieldCoordinates[1] + '].active');
  var newTdOrientation
  if ($trapTd.hasClass('rotate-90')) {
    newTdOrientation = 'vertical';
  } else {
    newTdOrientation = 'horizontal';
  }
  $trapTd.removeClass()
  $trapTd.addClass('map-td noactive');
  if (newTdOrientation === 'vertical') {
    $trapTd.addClass('map-field-18');
  } else {
    $trapTd.addClass('map-field-17');
  }
}

function generateEventMarker(fieldXY, color) {
  activeLevelEventFieldsArray.push(fieldXY);
  var eventMarkerCoordinates = convertStringToCoordinates(fieldXY);
  var $eventMarker = $('<img>');
  $eventMarker.addClass('game-event-marker');
  $eventMarker.attr("src", "images/game/marker_" + eventMarkerColors[color] + ".png");
  $eventMarker.css("left", eventMarkerCoordinates[0] * 50 + "px");
  $eventMarker.css("top", (eventMarkerCoordinates[1] * 50) - 10 + "px");
  $eventMarkers = $('.game-event-marker');
  $eventMarker.attr('id', fieldXY);
  $container.append($eventMarker);
}

function generateEvents(level) {
  var randEventsPack = getRandomInt(0, 3);
  for (var i = 0; i < 4; i += 1) {
    if (level === 1) {
      generateEventMarker(map_level_1_config.eventFieldsArrays[randEventsPack][i], i);
    }
    if (level === 2) {
      generateEventMarker(map_level_2_config.eventFieldsArrays[randEventsPack][i], i);
    }
  }
}

function animateEventMarker() {
  $('.game-event-marker').animate({"top": "-=12px"}).animate({"top": "+=12px"}, animateEventMarker);
}

function getRandomNeutralFieldClass() {
  var randomNeutralFieldsArray = [5, 6, 7, 8, 10, 11, 12, 13, 14];
  var randomNeutralFieldClassNumber = randomNeutralFieldsArray[Math.floor(Math.random() * randomNeutralFieldsArray.length)];
  return 'map-td map-field-' + randomNeutralFieldClassNumber + ' noactive';
}

function generateFieldClass(level_number, field_coordinates) {
  if (level_number === 1) {
    map_level_config = map_level_1_config;
  } else {
    map_level_config = map_level_2_config;
  }

  if (map_level_config.hasOwnProperty(field_coordinates) && map_level_config[field_coordinates].length > 0) {
    return map_level_config[field_coordinates];
  } else {
    return getRandomNeutralFieldClass();
  }
}

function create(x, action) {
  for (var i = 0; i < x; i += 1) {
    action(i);
  }
}

function hideEventMarker(id) {
  $('#' + id).remove();
}

function refreshLevelScore() {
  $('.level-score').text(levelScore);
}

function addEventScore(currFieldXY, level) {
  var pointedField = activeLevelEventFieldsArray.indexOf(currFieldXY);
  if (pointedField !== -1) {
    activeLevelEventFieldsArray[pointedField] = 'scored';
    generateTrapField(level);
    levelScore++;
    refreshLevelScore();
    if (levelScore === 4) {
      gameCurrLevel = 2;
      generateGameScreen(gameCurrLevel);
    }

    if (levelScore === 8) {
      gameCurrLevel = 3;
      generateGameScreen(gameCurrLevel);
    }
    // console.log('event zlapany');
    // console.log(levelScore);
  }
}

var car = {
  name: "WEBscy car",
  posX: 42,
  posY: 10,
  maxPosX: 692,
  minPosX: -8,
  minPosY: 10,
  maxPosY: 710,
  fieldX: 1,
  fieldY: 0,
  currFieldXY: 'x1_y0',
  generateCar: function (level) {
    var $div = $('<div>');
    $div.attr('id', 'car');
    $div.css("left", "42px");
    $div.css("top", "10px");
    $container.append($div);
  },
  driveUp: function () {
    if (this.posY > this.minPosY && this.isDriveAvailable(this.fieldX, this.fieldY, 'up')) {
      $("#car").animate({"top": "-=50px"}, "fast");
      this.posY = this.posY - 50;
      this.secondLevelRelocate(gameCurrLevel, carLevelControl);
    }
  },
  driveRight: function () {
    if (this.posX < this.maxPosX && this.isDriveAvailable(this.fieldX, this.fieldY, 'right')) {
      $("#car").animate({"left": "+=50px"}, "fast");
      this.posX = this.posX + 50;
      $("#car").addClass('car-drive-right');
      this.secondLevelRelocate(gameCurrLevel, carLevelControl);
    }
  },
  driveDown: function () {
    if (this.posY < this.maxPosY && this.isDriveAvailable(this.fieldX, this.fieldY, 'down')) {
      $("#car").animate({"top": "+=50px"}, "fast");
      this.posY = this.posY + 50;
      this.secondLevelRelocate(gameCurrLevel, carLevelControl);
    }
  },
  driveLeft: function () {
    if (this.posX > this.minPosX && this.isDriveAvailable(this.fieldX, this.fieldY, 'left')) {
      $("#car").animate({"left": "-=50px"}, "fast");
      this.posX = this.posX - 50;
      $("#car").removeClass('car-drive-right');
      this.secondLevelRelocate(gameCurrLevel, carLevelControl);
    }
  },
  secondLevelRelocate: function (level, carLevel) {
    if (level === 2 && carLevel === 1) {
      carLevelControl = 2;
      $("#car").animate({"top": "10px", "left": "42px"}, "fast");
      this.posX = 42;
      this.posY = 10;
      this.fieldX = 1;
      this.fieldY = 0;
      this.currFieldXY = 'x1_y0';
    }
  },
  isDriveAvailable: function (currFieldX, currFieldY, driveDirection) {

    filedToDriveX = currFieldX;
    filedToDriveY = currFieldY;

    if (driveDirection === 'up') {
      filedToDriveY = currFieldY - 1;
    }

    if (driveDirection === 'right') {
      filedToDriveX = currFieldX + 1;
    }

    if (driveDirection === 'down') {
      filedToDriveY = currFieldY + 1;
    }

    if (driveDirection === 'left') {
      filedToDriveX = currFieldX - 1;
    }

    var checkTd = $('td[x=' + filedToDriveX + '][y=' + filedToDriveY + '].active');
    if (checkTd.length !== 0) {
      this.fieldX = filedToDriveX;
      this.fieldY = filedToDriveY;
      this.currFieldXY = 'x' + this.fieldX + '_y' + this.fieldY;
      hideEventMarker(this.currFieldXY);
      addEventScore(this.currFieldXY, gameCurrLevel);
      return true;
    } else {
      return false;
    }
  }
}

function generateMap(level) {
  create(map_size, function (y) {
    $("#game_map_" + (level - 1)).empty();
    $game_table.attr("id", "game_map_" + level);

    var $tr = $('<tr>');

    $game_table.append($tr);


    create(map_size, function (x) {
      var field_coordinates = 'x' + x + '_y' + y;
      var $td = $('<td>');
      $td.attr('x', x);
      $td.attr('y', y);
      $td.addClass(generateFieldClass(level, field_coordinates));
      $tr.append($td);
      //var tdPosition = $td.position();
      //var tdX = parseInt(tdPosition.left) + 25;
      //var tdY = parseInt(tdPosition.top) + 25;
      //$td.append('x: ' + tdX + ' y:' + tdY);
    });
  });
}

// left 37; up 38; right 39; down 40
$(document).keyup(function (e) {
  if (e.keyCode === 65) {
    car.driveLeft();
    return false;
  }

  if (e.keyCode === 87) {
    car.driveUp();
    return false;
  }

  if (e.keyCode === 68) {
    car.driveRight();
    return false;
  }

  if (e.keyCode === 83) {
    car.driveDown();
    return false;
  }
});

$("#game-end-btn").on("click", function () {
  $('#game_area').css('display', 'none');
});

$("#game-action-btn").on("click", function () {
  if (gameCurrLevel === 3) {
    gameRestart(gameCurrLevel);
  } else {
    gameCurrLevel = 1;
    generateGameScreen(gameCurrLevel);
  }

});

function generateGameScreen(level) {
  if (level === 0) {
    $("#game_welcome").css("display", "block");
  } else if (level === 1) {
    activeLevelEventFieldsArray = [];
    $("#game_welcome").css("display", "none");
    $("#game_thanks").css("display", "none");
    $("#game-action-btn").css("display", "none");
    $container.append($game_table);
    generateMap(level);
    car.generateCar(level);
    generateEvents(level);
    animateEventMarker();
    generateTrapField(level);
    levelTimer();
    refreshLevelScore();
  } else if (level === 2) {
    activeLevelEventFieldsArray = [];
    $("#game_welcome").css("display", "none");
    $container.empty();
    $container.append($game_table);
    generateMap(level);
    car.generateCar(level);
    generateEvents(level);
    animateEventMarker();
    generateTrapField(level);
    refreshLevelScore();
  } else if (level === 3) {
    $container.empty();
    $container.append('<div id="game_thanks"><p>Dzięki za super przygodę!<br>Twój czas to <span id="game_player_time">0</span> sekund.</p></div>');
    $("#game_thanks").css("display", "block");
    levelTimerEndGame(levelTime);
    $("#game_player_time").text(levelTime);
    // $("#game-action-btn").css("display", "inline");
  } else {
    $("#game_welcome").css("display", "block");
  }
}

generateGameScreen(gameCurrLevel);