// Time Start
function updateTime(){
  var now = new Date();

  var days = ["07", "01", "02", "03", "04", "05", "06", "07"]
  var day = days[now.getDay()];

  // for get the data
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') +':' + seconds.toString().padStart(2, '0')

  var jam = hours.toString().padStart(2, '0')
  var menit = minutes.toString().padStart(2, '0')
  var detik = seconds.toString().padStart(2, '0')

  document.getElementById('day').textContent = day;
  document.getElementById('hour').textContent = jam;
  document.getElementById('minute').textContent = menit;
  document.getElementById('second').textContent = detik;

  setTimeout(updateTime, 1000);
}

updateTime();
// Time End