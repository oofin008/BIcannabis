function bicannabisindex() {
  //cannibisFake should get data from API
  //This is for mockup purpose
  let myDate = new Date();
  month_arr = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  //document.getElementById("header_date").innerText += (myDate.getDate() + ' ' + month_arr[(myDate.getMonth())] + ' ' + (myDate.getFullYear()+543));
  //test
  cannabisFake = {
    "TH-57": 150, //Comment
    "TH-56": 178,
    "TH-55": 7,
    "TH-54": 223,
    "TH-53": 168,
    "TH-52": 14,
    "TH-51": 36,
    "TH-50": 233,
    "TH-93": 91,
    "TH-92": 148,
    "TH-91": 20,
    "TH-90": 297,
    "TH-96": 272,
    "TH-95": 186,
    "TH-58": 248,
    "TH-13": 2,
    "TH-12": 32,
    "TH-11": 67,
    "TH-10": 288,
    "TH-17": 35,
    "TH-16": 152,
    "TH-15": 62,
    "TH-14": 147,
    "TH-71": 170,
    "TH-70": 97,
    "TH-19": 113,
    "TH-72": 54,
    "TH-75": 120,
    "TH-73": 72,
    "TH-77": 197,
    "TH-76": 133,
    "TH-18": 75,
    "TH-39": 281,
    "TH-": 132,
    "TH-74": 159,
    "TH-84": 150,
    "TH-85": 49,
    "TH-86": 197,
    "TH-80": 86,
    "TH-81": 287,
    "TH-82": 287,
    "TH-83": 97,
    "TH-32": 171,
    "TH-40": 270,
    "TH-41": 8,
    "TH-42": 229,
    "TH-43": 57,
    "TH-44": 3,
    "TH-45": 156,
    "TH-46": 233,
    "TH-47": 76,
    "TH-48": 261,
    "TH-49": 131,
    "TH-26": 264,
    "TH-27": 83,
    "TH-24": 123,
    "TH-25": 203,
    "TH-22": 154,
    "TH-23": 215,
    "TH-20": 93,
    "TH-21": 62,
    "TH-62": 140,
    "TH-63": 227,
    "TH-60": 51,
    "TH-61": 43,
    "TH-66": 159,
    "TH-67": 221,
    "TH-64": 36,
    "TH-65": 17,
    "TH-35": 10,
    "TH-34": 49,
    "TH-37": 61,
    "TH-33": 263,
    "TH-38": 184,
    "TH-36": 107,
    "TH-31": 196,
    "TH-94": 61,
    "TH-30": 12,
  };
  //ใบอนุญาตนำเข้ายาเสพติดประเภท5
  cannabisImport = {
    "TH-37": 0,
    "TH-15": 0,
    "TH-10": 2,
    "TH-38": 0,
    "TH-31": 0,
    "TH-24": 0,
    "TH-18": 0,
    "TH-36": 0,
    "TH-22": 0,
    "TH-50": 0,
    "TH-57": 0,
    "TH-20": 0,
    "TH-86": 0,
    "TH-46": 0,
    "TH-62": 0,
    "TH-71": 0,
    "TH-40": 0,
    "TH-81": 0,
    "TH-52": 0,
    "TH-51": 0,
    "TH-42": 0,
    "TH-16": 0,
    "TH-58": 0,
    "TH-44": 0,
    "TH-49": 0,
    "TH-26": 0,
    "TH-73": 0,
    "TH-48": 0,
    "TH-30": 0,
    "TH-60": 0,
    "TH-80": 0,
    "TH-55": 0,
    "TH-96": 0,
    "TH-39": 0,
    "TH-43": 0,
    "TH-12": 1,
    "TH-13": 0,
    "TH-94": 0,
    "TH-82": 0,
    "TH-93": 0,
    "TH-56": 0,
    "TH-67": 0,
    "TH-76": 0,
    "TH-66": 0,
    "TH-65": 0,
    "TH-14": 0,
    "TH-54": 0,
    "TH-83": 0,
    "TH-25": 0,
    "TH-77": 0,
    "TH-85": 0,
    "TH-70": 0,
    "TH-21": 0,
    "TH-45": 0,
    "TH-27": 0,
    "TH-47": 0,
    "TH-11": 0,
    "TH-74": 0,
    "TH-75": 0,
    "TH-19": 0,
    "TH-91": 0,
    "TH-33": 0,
    "TH-17": 0,
    "TH-90": 0,
    "TH-64": 0,
    "TH-72": 0,
    "TH-84": 0,
    "TH-32": 0,
    "TH-63": 0,
    "TH-92": 0,
    "TH-23": 0,
    "TH-34": 0,
    "TH-41": 0,
    "TH-61": 0,
    "TH-53": 0,
    "TH-95": 0,
    "TH-35": 0,
  };

  //ใบอนุญาตผลิต
  cannabisPlant = {
    "TH-37": 0,
    "TH-15": 0,
    "TH-10": 2,
    "TH-38": 0,
    "TH-31": 1,
    "TH-24": 0,
    "TH-18": 0,
    "TH-36": 0,
    "TH-22": 0,
    "TH-50": 2,
    "TH-57": 0,
    "TH-20": 0,
    "TH-86": 0,
    "TH-46": 0,
    "TH-62": 0,
    "TH-71": 0,
    "TH-40": 0,
    "TH-81": 0,
    "TH-52": 1,
    "TH-51": 0,
    "TH-42": 0,
    "TH-16": 0,
    "TH-58": 1,
    "TH-44": 2,
    "TH-49": 0,
    "TH-26": 0,
    "TH-73": 1,
    "TH-48": 0,
    "TH-30": 2,
    "TH-60": 0,
    "TH-80": 0,
    "TH-55": 0,
    "TH-96": 0,
    "TH-39": 0,
    "TH-43": 0,
    "TH-12": 1,
    "TH-13": 1,
    "TH-94": 0,
    "TH-82": 0,
    "TH-93": 0,
    "TH-56": 0,
    "TH-67": 0,
    "TH-76": 0,
    "TH-66": 0,
    "TH-65": 0,
    "TH-14": 0,
    "TH-54": 0,
    "TH-83": 0,
    "TH-25": 1,
    "TH-77": 0,
    "TH-85": 0,
    "TH-70": 0,
    "TH-21": 0,
    "TH-45": 0,
    "TH-27": 0,
    "TH-47": 2,
    "TH-11": 0,
    "TH-74": 0,
    "TH-75": 0,
    "TH-19": 0,
    "TH-91": 0,
    "TH-33": 0,
    "TH-17": 0,
    "TH-90": 0,
    "TH-64": 0,
    "TH-72": 0,
    "TH-84": 0,
    "TH-32": 0,
    "TH-63": 0,
    "TH-92": 0,
    "TH-23": 0,
    "TH-34": 0,
    "TH-41": 0,
    "TH-61": 0,
    "TH-53": 0,
    "TH-95": 0,
    "TH-35": 0,
  };
  //ใบอนุญาตผลิตแปรรูปหรือสกัด
  cannabisConvert = {
    "TH-37": 0,
    "TH-15": 0,
    "TH-10": 5,
    "TH-38": 0,
    "TH-31": 1,
    "TH-24": 0,
    "TH-18": 0,
    "TH-36": 0,
    "TH-22": 0,
    "TH-50": 1,
    "TH-57": 0,
    "TH-20": 0,
    "TH-86": 0,
    "TH-46": 0,
    "TH-62": 0,
    "TH-71": 0,
    "TH-40": 2,
    "TH-81": 0,
    "TH-52": 0,
    "TH-51": 0,
    "TH-42": 0,
    "TH-16": 0,
    "TH-58": 0,
    "TH-44": 0,
    "TH-49": 0,
    "TH-26": 0,
    "TH-73": 2,
    "TH-48": 0,
    "TH-30": 1,
    "TH-60": 0,
    "TH-80": 0,
    "TH-55": 0,
    "TH-96": 0,
    "TH-39": 0,
    "TH-43": 0,
    "TH-12": 2,
    "TH-13": 1,
    "TH-94": 0,
    "TH-82": 0,
    "TH-93": 0,
    "TH-56": 0,
    "TH-67": 0,
    "TH-76": 0,
    "TH-66": 0,
    "TH-65": 1,
    "TH-14": 0,
    "TH-54": 0,
    "TH-83": 0,
    "TH-25": 1,
    "TH-77": 0,
    "TH-85": 0,
    "TH-70": 0,
    "TH-21": 0,
    "TH-45": 0,
    "TH-27": 0,
    "TH-47": 1,
    "TH-11": 0,
    "TH-74": 0,
    "TH-75": 0,
    "TH-19": 0,
    "TH-91": 1,
    "TH-33": 0,
    "TH-17": 0,
    "TH-90": 0,
    "TH-64": 0,
    "TH-72": 0,
    "TH-84": 0,
    "TH-32": 0,
    "TH-63": 0,
    "TH-92": 0,
    "TH-23": 0,
    "TH-34": 0,
    "TH-41": 0,
    "TH-61": 0,
    "TH-53": 0,
    "TH-95": 0,
    "TH-35": 0,
  };
  //ใบอนุญาตจำหน่าย รวม
  cannabisSell_old = {
    "TH-37": 5,
    "TH-15": 1,
    "TH-10": 32,
    "TH-38": 1,
    "TH-31": 18,
    "TH-24": 2,
    "TH-18": 6,
    "TH-36": 7,
    "TH-22": 3,
    "TH-50": 7,
    "TH-57": 5,
    "TH-20": 7,
    "TH-86": 2,
    "TH-46": 5,
    "TH-62": 9,
    "TH-71": 2,
    "TH-40": 6,
    "TH-81": 4,
    "TH-52": 15,
    "TH-51": 7,
    "TH-42": 2,
    "TH-16": 3,
    "TH-58": 8,
    "TH-44": 2,
    "TH-49": 5,
    "TH-26": 2,
    "TH-73": 7,
    "TH-48": 3,
    "TH-30": 5,
    "TH-60": 13,
    "TH-80": 4,
    "TH-55": 1,
    "TH-96": 2,
    "TH-39": 1,
    "TH-43": 4,
    "TH-12": 10,
    "TH-13": 4,
    "TH-94": 7,
    "TH-82": 2,
    "TH-93": 3,
    "TH-56": 5,
    "TH-67": 4,
    "TH-76": 1,
    "TH-66": 22,
    "TH-65": 4,
    "TH-14": 3,
    "TH-54": 8,
    "TH-83": 3,
    "TH-25": 3,
    "TH-77": 0,
    "TH-85": 3,
    "TH-70": 4,
    "TH-21": 4,
    "TH-45": 2,
    "TH-27": 4,
    "TH-47": 20,
    "TH-11": 4,
    "TH-74": 3,
    "TH-75": 1,
    "TH-19": 4,
    "TH-91": 5,
    "TH-33": 17,
    "TH-17": 1,
    "TH-90": 13,
    "TH-64": 2,
    "TH-72": 4,
    "TH-84": 17,
    "TH-32": 7,
    "TH-63": 6,
    "TH-92": 2,
    "TH-23": 1,
    "TH-34": 22,
    "TH-41": 19,
    "TH-61": 9,
    "TH-53": 3,
    "TH-95": 6,
    "TH-35": 7,
  };

  //ใบอนุญาตครอบครองเพื่อศึกษา
  cannabisOwn_study = {
    "TH-37": 1,
    "TH-15": 0,
    "TH-10": 11,
    "TH-38": 0,
    "TH-31": 2,
    "TH-24": 0,
    "TH-18": 0,
    "TH-36": 0,
    "TH-22": 0,
    "TH-50": 2,
    "TH-57": 0,
    "TH-20": 0,
    "TH-86": 0,
    "TH-46": 0,
    "TH-62": 0,
    "TH-71": 0,
    "TH-40": 2,
    "TH-81": 0,
    "TH-52": 3,
    "TH-51": 0,
    "TH-42": 0,
    "TH-16": 0,
    "TH-58": 0,
    "TH-44": 1,
    "TH-49": 0,
    "TH-26": 0,
    "TH-73": 4,
    "TH-48": 0,
    "TH-30": 0,
    "TH-60": 1,
    "TH-80": 0,
    "TH-55": 0,
    "TH-96": 0,
    "TH-39": 1,
    "TH-43": 0,
    "TH-12": 3,
    "TH-13": 3,
    "TH-94": 0,
    "TH-82": 0,
    "TH-93": 1,
    "TH-56": 0,
    "TH-67": 0,
    "TH-76": 0,
    "TH-66": 0,
    "TH-65": 3,
    "TH-14": 0,
    "TH-54": 1,
    "TH-83": 0,
    "TH-25": 1,
    "TH-77": 0,
    "TH-85": 0,
    "TH-70": 1,
    "TH-21": 1,
    "TH-45": 0,
    "TH-27": 0,
    "TH-47": 6,
    "TH-11": 0,
    "TH-74": 0,
    "TH-75": 0,
    "TH-19": 0,
    "TH-91": 0,
    "TH-33": 0,
    "TH-17": 0,
    "TH-90": 2,
    "TH-64": 0,
    "TH-72": 1,
    "TH-84": 1,
    "TH-32": 0,
    "TH-63": 0,
    "TH-92": 0,
    "TH-23": 0,
    "TH-34": 1,
    "TH-41": 1,
    "TH-61": 1,
    "TH-53": 0,
    "TH-95": 0,
    "TH-35": 0,
  };

  var map;
  // cannabisFake = cannabisOwn_study;

  //build new map to display overall data
  var palette = ["#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3", "#A6D854"];
  map = new jvm.Map({
    map: "th_mill",
    backgroundColor: "#999b9e",
    container: $("#thaimapjvector"),
    regionsSelectable: false,
    zoomOnScroll: false,
    series: {
      regions: [
        {
          values: cannabisOwn_study,
          scale: ["#ffffff", "#ffc107"],
          // normalizeFunction: 'linear',
          normalizeFunction: function (val) {
            console.log("val=>", val);
            return val;
          },
          attribute: "fill",
          min: 0,
          max: 30,
          legend: {
            vertical: true,
            title: "จำนวน(ฉบับ)",
            labelRender: (val) => {
              var label = "";
              console.log("label Render =>", val);
              //return Math.floor(val*2)
              if (val == 0) {
                return val;
              }
              return {
                5: "1-5",
                10: "6-10",
                15: "11-15",
                20: "16-20",
                25: "21-25",
                30: "26+",
              }[val];
            },
          },
        },
      ],
    },
    onRegionTipShow: function (e, el, code) {
      el.html(el.html() + " (ใบอนุญาต - " + cannabisOwn_study[code] + " ฉบับ)");
      console.log(code + el.html());
    },
    onRegionSelected: function () {
      //regionSelected contain array of region selected
      var regionSelected = map.getSelectedRegions();
      console.log(regionSelected);
      window.location.href =
        "./provinceDetail.html?regionselected=" + regionSelected[0];
      return 0;
    },
  });

  //Sort select for right col
  $("#sortSelect a").click(function () {
    var select_opt = $(this).attr("value");
    if (map != undefined) {
      map.remove();
    }

    if (select_opt == "import") {
      map = new jvm.Map({
        map: "th_mill",
        backgroundColor: "#999b9e",
        container: $("#thaimapjvector"),
        regionsSelectable: false,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: cannabisImport,
              scale: ["#ffffff", "#605ca8"],
              normalizeFunction: "linear",
              attribute: "fill",
              min: 0,
              legend: {
                vertical: true,
                title: "จำนวน(ฉบับ)",
                labelRender: (val) => {
                  return Math.round(val * 2);
                },
              },
            },
          ],
        },
        onRegionTipShow: function (e, el, code) {
          el.html(
            el.html() + " (ใบอนุญาต - " + cannabisImport[code] + " ฉบับ)"
          );
          console.log(code + el.html());
        },
        onRegionSelected: function () {
          //regionSelected contain array of region selected
          var regionSelected = map.getSelectedRegions();
          console.log(regionSelected);
          window.location.href =
            "./provinceDetail.html?regionselected=" + regionSelected[0];
          return 0;
        },
      });
    }
    if (select_opt == "plant") {
      map = new jvm.Map({
        map: "th_mill",
        backgroundColor: "#999b9e",
        container: $("#thaimapjvector"),
        regionsSelectable: false,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: cannabisPlant,
              scale: ["#ffffff", "#39cccc"],
              normalizeFunction: "linear",
              attribute: "fill",
              min: 0,
              legend: {
                vertical: true,
                title: "จำนวน(ฉบับ)",
                labelRender: (val) => {
                  console.log("label Render =>", val);
                  return Math.floor(val * 2);
                },
              },
            },
          ],
        },
        onRegionTipShow: function (e, el, code) {
          el.html(el.html() + " (ใบอนุญาต - " + cannabisPlant[code] + " ฉบับ)");
          console.log(code + el.html());
        },
        onRegionSelected: function () {
          //regionSelected contain array of region selected
          var regionSelected = map.getSelectedRegions();
          console.log(regionSelected);
          window.location.href =
            "./provinceDetail.html?regionselected=" + regionSelected[0];
          return 0;
        },
      });
    }
    if (select_opt == "convert") {
      map = new jvm.Map({
        map: "th_mill",
        backgroundColor: "#999b9e",
        container: $("#thaimapjvector"),
        regionsSelectable: false,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: cannabisConvert,
              scale: ["#ffffff", "#dc3545"],
              normalizeFunction: "linear",
              attribute: "fill",
              min: 0,
              legend: {
                vertical: true,
                title: "จำนวน(ฉบับ)",
              },
            },
          ],
        },
        onRegionTipShow: function (e, el, code) {
          el.html(
            el.html() + " (ใบอนุญาต - " + cannabisConvert[code] + " ฉบับ)"
          );
          console.log(code + el.html());
        },
        onRegionSelected: function () {
          //regionSelected contain array of region selected
          var regionSelected = map.getSelectedRegions();
          console.log(regionSelected);
          window.location.href =
            "./provinceDetail.html?regionselected=" + regionSelected[0];
          return 0;
        },
      });
    }
    if (select_opt == "sell_old") {
      map = new jvm.Map({
        map: "th_mill",
        backgroundColor: "#999b9e",
        container: $("#thaimapjvector"),
        regionsSelectable: false,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: cannabisSell_old,
              scale: ["#ffffff", "#e83e8c"],
              normalizeFunction: "linear",
              attribute: "fill",
              min: 0,
              legend: {
                vertical: true,
                title: "จำนวน(ฉบับ)",
                labelRender: (val) => {
                  console.log("label Render =>", val);

                  return {
                    0: "0",
                    5: "1-5",
                    10: "6-10",
                    15: "11-15",
                    20: "16-20",
                    25: "21-25",
                    30: "26-30",
                    35: "31+",
                  }[val];
                },
              },
            },
          ],
        },
        onRegionTipShow: function (e, el, code) {
          el.html(
            el.html() + " (ใบอนุญาต - " + cannabisSell_old[code] + " ฉบับ)"
          );
          console.log(code + el.html());
        },
        onRegionSelected: function () {
          //regionSelected contain array of region selected
          var regionSelected = map.getSelectedRegions();
          console.log(regionSelected);
          window.location.href =
            "./provinceDetail.html?regionselected=" + regionSelected[0];
          return 0;
        },
      });
    }
    if (select_opt == "own_study") {
      map = new jvm.Map({
        map: "th_mill",
        backgroundColor: "#999b9e",
        container: $("#thaimapjvector"),
        regionsSelectable: false,
        zoomOnScroll: false,
        series: {
          regions: [
            {
              values: cannabisOwn_study,
              scale: ["#ffffff", "#ffc107"],
              normalizeFunction: "linear",
              attribute: "fill",
              min: 0,
              max: 30,
              legend: {
                vertical: true,
                title: "จำนวน(ฉบับ)",
                labelRender: (val) => {
                  var label = "";
                  console.log("label Render =>", val);
                  //return Math.floor(val*2)
                  if (val == 0) {
                    return val;
                  }
                  var val_low = Math.floor(val % 2);
                  var val_hi = Math.ceil(val * 2 - 1);
                  label = val_low + "-" + val_hi;
                  return {
                    5: "1-5",
                    10: "6-10",
                    15: "11-15",
                    20: "16-20",
                    25: "21-25",
                    30: "26+",
                  }[val];
                },
              },
            },
          ],
        },
        onRegionTipShow: function (e, el, code) {
          el.html(
            el.html() + " (ใบอนุญาต - " + cannabisOwn_study[code] + " ฉบับ)"
          );
          console.log(code + el.html());
        },
        onRegionSelected: function () {
          //regionSelected contain array of region selected
          var regionSelected = map.getSelectedRegions();
          console.log(regionSelected);
          window.location.href =
            "./provinceDetail.html?regionselected=" + regionSelected[0];
          return 0;
        },
      });
    }
  });
  //-------------
  //- DONUT CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var donutChartCanvas = $("#donutChart").get(0).getContext("2d");
  var donutData = {
    labels: [
      "ผู้ป่วยมะเร็ง",
      "ภาวะกล้ามเนื้อหดเกร็ง",
      "ภาวะคลื่นไส้อาเจียน",
      "ภาวะปวดประสาท",
      "โรคพาร์กินสัน",
      "อื่นๆ",
    ],
    datasets: [
      {
        data: [700, 500, 400, 600, 300, 100],
        backgroundColor: [
          "#f56954",
          "#00a65a",
          "#f39c12",
          "#00c0ef",
          "#3c8dbc",
          "#d2d6de",
        ],
      },
    ],
  };
  var donutOptions = {
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#faf7f7",
      },
    },
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  var donutChart = new Chart(donutChartCanvas, {
    type: "pie",
    data: donutData,
    options: donutOptions,
  });

  //-----------------
  //- END DONUT CHART -
  //-----------------
}
