let body = document.querySelector("body");
let burgerButton = document.querySelector(".burger_div");
let sideBar = document.querySelector(".sideBar");
let bgCover = document.querySelector(".bg_cover");
let htmlroot = document.querySelector("html");
let lightBtn = document.querySelector(".light");
let darkBtn = document.querySelector(".dark");
let notification = document.querySelector(".icon");
let notificationMenu = document.querySelector(".notification_menu");
let eyeSvg = document.querySelector(".eye_icon svg use");
let eyeIcon = document.querySelector(".eye_icon");
let totalValue = document.querySelector(".first_left_content div h5");
let flagEye = true;
let listSideBar = document.querySelectorAll(".list_item ul li");
let listBitcoin = document.querySelectorAll(".bitcoinlist ul li");
let accountBar = document.querySelector(".account");
let accountExtra = document.querySelector(".account_extra");
let lightModeBtn = document.querySelector(".light");
let darkModeBtn = document.querySelector(".dark");
let tableBottomRow = document.querySelectorAll(".table_bottom table tbody tr");
let usersMessege = document.querySelectorAll(".users");
let userName = document.querySelectorAll(".user_lists .name_users span:first-child");
let usersSelectMessege = document.querySelector(".users_select");
let searchUser = document.querySelector("#search_user");
let userLists = document.querySelector(".user_lists")
let mainChatSide = document.querySelector(".main_chat_side")
let sendMessegeButton = document.querySelector(".send")
let inputMessege = document.querySelector("#input_messege")
let logOutItem = document.querySelector(".logoutitem")




let colorchart = null;

accountBar.addEventListener("click", function () {
  notificationMenu.classList.remove("opacity_on");
  if (accountExtra.classList.contains("opacity_on")) {
    accountExtra.classList.remove("opacity_on");
  } else {
    accountExtra.classList.add("opacity_on");
  }
});

notification.addEventListener("click", function () {
  accountExtra.classList.remove("opacity_on");
  if (notificationMenu.classList.contains("opacity_on")) {
    notificationMenu.classList.remove("opacity_on");
  } else {
    notificationMenu.classList.add("opacity_on");
  }
});

listBitcoin.forEach(function (li) {
  li.addEventListener("click", function () {
    for (let key of listBitcoin) {
      key.classList.remove("active_bitcoinlist");
    }
    li.classList.add("active_bitcoinlist");
  });
});

listSideBar.forEach(function (li) {
  li.addEventListener("click", function (event) {
    for (let key of listSideBar) {
      key.classList.remove("active_sidebar");
    }
    li.classList.add("active_sidebar");
  });
});

eyeIcon?.addEventListener("click", function () {
  if (flagEye) {
    eyeSvg.setAttribute("href", "#eye");
    totalValue.style.opacity = 0;
    eyeIcon.style.transform = "translateX(-234px)";
    flagEye = false;
  } else {
    eyeSvg.setAttribute("href", "#openeye");
    totalValue.style.opacity = 1;
    eyeIcon.style.transform = "translateX(0px)";
    flagEye = true;
  }
});

burgerButton.addEventListener("click", function () {
  sideBar.classList.add("d_block");
  bgCover.classList.add("d_block");
});

bgCover.addEventListener("click", function () {
  sideBar.classList.remove("d_block");
  bgCover.classList.remove("d_block");
});

let dateSeries = [30, 40, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15];
let dateCategories = [
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2001,
];

var options = {
  chart: {
    type: "area",
    fontFamily: "Raleway",
    height: 290,
  },
  series: [
    {
      name: "فروش",
      data: dateSeries,
    },
  ],
  xaxis: {
    categories: [
      1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2001,
    ],
    axisBorder: {
      show: true,
      color: "#31353F",
      height: 1,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "353E4D",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#353E4D",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#3A6FF8"],
  fill: {
    colors: ["#3A6FF8"],
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.1,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};
let chartDiv = document.querySelector("#chart")
var chartItem = new ApexCharts(chartDiv , options);
if(chartDiv){
  chartItem.render();
}

document.querySelector(".three")?.addEventListener("click", function () {
  chartItem.updateSeries([
    {
      name: "فروش",
      data: [90, 140, 175, 500, 409, 600, 700, 91, 125],
    },
  ]);
});
document.querySelector(".oneday")?.addEventListener("click", function () {
  chartItem.updateSeries([
    {
      name: "فروش",
      data: [110, 100, 90, 80, 60, 70, 50, 55, 65],
    },
  ]);
});
document.querySelector(".onehoure")?.addEventListener("click", function () {
  chartItem.updateSeries([
    {
      name: "فروش",
      data: [30, 40, 75, 50, 49, 60, 70, 91, 125],
    },
  ]);
});
document.querySelector(".oneweek")?.addEventListener("click", function () {
  chartItem.updateSeries([
    {
      name: "فروش",
      data: [5, 7, 2, 1, 0, 9, 7, 8, 11],
    },
  ]);
});
document.querySelector(".onemin")?.addEventListener("click", function () {
  chartItem.updateSeries([
    {
      name: "فروش",
      data: [100, 250, 98, 145, 378, 512, 219, 91, 285],
    },
  ]);
});


  let changeModeFunc = function (mode) {
    htmlroot.dataset.theme = mode;
    localStorage.setItem("mode", mode);
    chartItem?.updateOptions({
      xaxis: {
        dateCategories: [
          1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2001,
        ],
        labels: {
          style: {
            colors: "#f46d22",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#f46d22",
          },
        },
      },
    });
  };
  darkBtn.addEventListener("click", () => changeModeFunc("dark"));
  lightBtn.addEventListener("click", () => changeModeFunc("light"));
  
  let saveMode = localStorage.getItem("mode");
  changeModeFunc(saveMode);


var optionsChartview = {
  series: [
    {
      name: "Net Profit",
      data: [45, 20, 10, 20, 45, 10, 40],
      colors: ["#fff"],
    },
  ],
  chart: {
    type: "bar",
    height: 173,
    width: 378,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      endingShape: "rounded",
    },
    grid: {
      borderColor: "#111",
      strokeDashArray: 7,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    labels: {
      style: {
        colors: "#fff",
      },
    },
    lines: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
    lines: {
      show: true,
    },
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  fill: {
    opacity: 1,
    colors: ["#fff"],
  },
};
 
let chartWebSiteViews = document.querySelector("#chart_website_view")
var chartWebsiteView = new ApexCharts(
  chartWebSiteViews,
  optionsChartview
);
if(chartWebSiteViews){
  chartWebsiteView.render();
}

var optionsDailySales = {
  series: [
    {
      name: "Desktops",
      data: [0, 0, 210, 220, 410, 250, 190, 199, 420],
      colors: ["#fff"],
    },
  ],
  chart: {
    height: 173,
    type: "line",
    colors: ["#fff"],
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: ["#fff"],
    curve: "straight",
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};

let chartDailySale = document.querySelector("#chart_daily_sales");
var chartDailySales = new ApexCharts(
  chartDailySale,
  optionsDailySales
);
if(chartDailySale){

  chartDailySales.render();
}

var optionsTasks = {
  series: [
    {
      name: "Desktops",
      data: [0, 0, 210, 220, 410, 250, 190, 199, 420],
      colors: ["#fff"],
    },
  ],
  chart: {
    height: 173,
    type: "line",
    colors: ["#fff"],
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: ["#fff"],
    curve: "straight",
  },
  title: {
    align: "left",
  },
  grid: {
    row: {
      colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};
let chartTask = document.querySelector("#chart_tasks")
var charttasks = new ApexCharts(
  chartTask ,
  optionsTasks
);
if(chartTask){
  charttasks.render();
}

var optionsWeeklySleep = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 30,
      bottom: 30,
      left: 0,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
  yaxis: {
    categories: ["3h", "4h", "5h", "6h", "7h", "8h"],
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
};

let chartWeekly = document.querySelector("#chart1")
var chartWeeklySleep = new ApexCharts(
  chartWeekly ,
  optionsWeeklySleep
);
if(chartWeekly){
  chartWeeklySleep.render();
}

var optionsStatic = {
  series: [
    {
      name: "series1",
      data: [31, 40, 37, 51, 42, 50, 30],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
};

let chartstatics = document.querySelector("#chart22")
var chartstatic = new ApexCharts(
  chartstatics ,
  optionsStatic
);
if(chartstatics){
chartstatic.render();
}

var optionsWeeklySleep = {
  series: [
    {
      name: "Desktops",
      data: [22, 33, 44, 12, 16, 18, 14, 60, 50],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 30,
      bottom: 30,
      left: 0,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
  yaxis: {
    categories: ["3h", "4h", "5h", "6h", "7h", "8h"],
    labels: {
      style: {
        colors: "#9e9e9e",
      },
    },
  },
};

let chartWeeklySleeps = document.querySelector("#chart3");
var chartWeeklySleep = new ApexCharts(
  chartWeeklySleeps,
  optionsWeeklySleep
);
if(chartWeeklySleeps){

  chartWeeklySleep.render();
}

tableBottomRow.forEach((tr) => {
  tr.addEventListener("click", function () {
    for (let item of tableBottomRow) {
      item.classList.remove("active_transaction");
    }
    tr.classList.add("active_transaction");
  });
});
usersMessege.forEach(function (item) {
  item.addEventListener("click", function () {
    for (let user of usersMessege) {
      user.classList.remove("active_users");
    }
    item.classList.add("active_users");
    document
      .querySelector(".users_select .img_users img")
      .setAttribute("src", item.querySelector("img").getAttribute("src"));
    document.querySelector(
      ".users_select .name_users span:first-child"
    ).textContent = item.querySelector(
      ".users .name_users span:first-child"
    ).textContent;
  });
});

searchUser?.addEventListener("keyup" , function(){
  let searchInputValue = searchUser.value.trim().toLowerCase()
  Array.from(usersMessege).forEach(function(item){
    let username = item.querySelector(".name_users span:first-child").textContent.trim().toLocaleLowerCase();
    if(username.startsWith(searchInputValue)){
      item.style.display =  "flex";
    }else{
      item.style.display = "none";
    }
    
  })
  
})

let heightScrollFunc = function(){
  if(mainChatSide){
    let scrollHeight = mainChatSide.scrollHeight
    mainChatSide.scrollTop = scrollHeight;

  }
}


let addTextFunc = function(){
  if(inputMessege.value){
    let inputMessegeValue = inputMessege.value;
    mainChatSide.insertAdjacentHTML("beforeend" , 
      `<div class="me_said">
      <div class="me_said_text">${inputMessegeValue}</div>
      <span>1:58 pm</span>
      </div>`
    )
    heightScrollFunc()
    localStorage.setItem("messegeChat" , mainChatSide.innerHTML )
  }
  inputMessege.value = "";
}
sendMessegeButton?.addEventListener("click" , addTextFunc)
inputMessege?.addEventListener("keypress" , function(event){
  if(event.keyCode === 13){
    addTextFunc()
    
  }
  
})
// window.addEventListener("load" , function(){
//   let messegechatUpdate = this.localStorage.getItem("messegeChat")
//   mainChatSide.innerHTML = messegechatUpdate;
// })
window.addEventListener("load" , heightScrollFunc)
window.addEventListener("load" , function(){
  document.querySelector(".loading_page").remove()
})
// localStorage.removeItem("messegeChat")

logOutItem.addEventListener("click" , function(){
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  
})
var editor1 = new RichTextEditor(".container_mailbox");