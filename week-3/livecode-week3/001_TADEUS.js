// 001 TADEUS NUGRAHA
// Competencies: Pseudocode
//
// Buatlah Pseudocode untuk kasus berikut:
// Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
// Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain
//
// - Jika ombak dibawah 1 meter maka kecepatan tetap.
// - Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
// - Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
// - Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam
//
// Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter


SET variable `ombak` to any numeric value;
SET variable `speed` to 30; //(units in km/jam)
IF `ombak` is below 1 meter THEN
      `speed` is still the same;
    ELSE IF `ombak` is bigger or equal to 1 meter, AND `ombak` is lower than 2 meters THEN
      `speed` is reduced by 7 km/hour;
    ELSE IF `ombak` is equal to 2 meters THEN
      `speed` is reduced by 15 km/hour;
    ELSE IF `ombak` is higher than 2 meters THEN
      `speed` is reduced to 0 km/hour;
      DISPLAY message "perahu terbalik";
    ElSE
      DISPLAY message "error";
END IF
