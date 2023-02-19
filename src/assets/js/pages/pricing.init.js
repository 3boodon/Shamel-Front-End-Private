/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: pricing init js
*/
if (document.querySelectorAll(".plan-nav .nav-item .nav-link")) {
    Array.from(document.querySelectorAll(".plan-nav .nav-item .nav-link")).forEach(function (e) {
        var month = document.getElementsByClassName("month");
        var annual = document.getElementsByClassName("annual");
        if (e.classList.contains("active") == true) {
            var i = 0;
            Array.from(month).forEach(function (m) {
                annual[i].style.display = "none";
                m.style.display = "block";
                i++;
            });
        }
    });
}

if (document.getElementById("month-tab")) {
    document.getElementById("month-tab").addEventListener("click", function () {
        var month = document.getElementsByClassName("month");
        var annual = document.getElementsByClassName("annual");
        document.querySelectorAll(".plan-radio").forEach(function (elem) {
            elem.setAttribute("name", "plan-month");
        })
        var i = 0;
        Array.from(month).forEach(function (m) {
            if (annual[i]) annual[i].style.display = "none";
            if (m) m.style.display = "block";
            i++;
        });

        planMonth();
    });
}

if (document.getElementById("annual-tab")) {
    document.getElementById("annual-tab").addEventListener("click", function () {
        var month = document.getElementsByClassName("month");
        var annual = document.getElementsByClassName("annual");

        document.querySelectorAll(".plan-radio").forEach(function (elem) {
            elem.setAttribute("name", "plan-annual");
        })

        var i = 0;
        Array.from(month).forEach(function (m) {
            if (annual[i]) annual[i].style.display = "block";
            if (m) m.style.display = "none";
            i++;
        });

        planyear();
    });
}

// plan features

var planList = [{
    "project": "3",
    "customers": "229",
    "bandwidth": "scalable Bandwidth",
    "ftp": "7",
    "support": "No",
    "storage": "2GB",
    "domain": "domain"
}]

planListData(planList);

function planListData(datas) {
    document.getElementById("plan-list").innerHTML = "",
        datas.forEach(function (listData) {
            document.getElementById("plan-list").innerHTML += '<li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">\
                    <b>'+ listData.project + '</b> Projects\
                </div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">\
                    <b>'+ listData.customers + '</b> Customers\
                </div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">'+ listData.bandwidth + '</div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">\
                    <b>'+ listData.ftp + '</b> FTP Login\
                </div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">\
                    <b>'+ listData.support + '</b> Support\
                </div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">\
                    <b>'+ listData.storage + '</b> Storage\
                </div>\
            </div>\
        </li>\
        <li>\
            <div class="d-flex">\
                <div class="flex-shrink-0 me-1">\
                    <i class="ri-checkbox-circle-fill text-success fs-15 align-middle"></i>\
                </div>\
                <div class="flex-grow-1">'+ listData.domain + '</div>\
            </div>\
        </li>'
        });
}

document.querySelectorAll(".plan-radio").forEach(function (elem) {
    elem.setAttribute("name", "plan-month");
})

function planMonth() {
    document.querySelectorAll("[name='plan-month']").forEach(function (elem) {
        elem.addEventListener("change", function () {
            var tabValue = elem.value;
            planList = [];

            if (elem.checked) {
                if (tabValue == "startup") {
                    planList.push({
                        "project": "3",
                        "customers": "229",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "7",
                        "support": "No",
                        "storage": "2GB",
                        "domain": "domain"
                    })
                } else if (tabValue == "professional") {
                    planList.push({
                        "project": "8",
                        "customers": "449",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "7",
                        "support": "24/7",
                        "storage": "8GB",
                        "domain": "domain"
                    })
                } else if (tabValue == "enterprise") {
                    planList.push({
                        "project": "15",
                        "customers": "999",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "12",
                        "support": "24/7",
                        "storage": "16GB",
                        "domain": "domain"
                    })
                } else if (tabValue == "unlimited") {
                    planList.push({
                        "project": "Unlimited",
                        "customers": "Unlimited",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "Unlimited",
                        "support": "24/7",
                        "storage": "Unlimited",
                        "domain": "domain"
                    })
                }
                planListData(planList);
            }
        })
    });
}

function planyear() {
    document.querySelectorAll("[name='plan-annual']").forEach(function (elem) {
        elem.addEventListener("change", function () {
            var tabValue = elem.value;
            planList = [];

            if (elem.checked) {
                if (tabValue == "startup") {
                    planList.push({
                        "project": "13",
                        "customers": "2229",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "7",
                        "support": "24/7",
                        "storage": "Unlimited",
                        "domain": "domain"
                    })
                } else if (tabValue == "professional") {
                    planList.push({
                        "project": "18",
                        "customers": "4449",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "7",
                        "support": "24/7",
                        "storage": "Unlimited",
                        "domain": "domain"
                    })
                } else if (tabValue == "enterprise") {
                    planList.push({
                        "project": "215",
                        "customers": "9999",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "12",
                        "support": "24/7",
                        "storage": "Unlimited",
                        "domain": "domain"
                    })
                } else if (tabValue == "unlimited") {
                    planList.push({
                        "project": "Unlimited",
                        "customers": "Unlimited",
                        "bandwidth": "scalable Bandwidth",
                        "ftp": "Unlimited",
                        "support": "24/7",
                        "storage": "Unlimited",
                        "domain": "domain"
                    })
                }
                planListData(planList);
            }
        })
    });
}

planMonth();
planyear();