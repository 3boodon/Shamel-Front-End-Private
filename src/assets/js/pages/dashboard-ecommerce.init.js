/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Ecommerce Dashboard init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(
                        newValue
                    );
                    if (color) return color;
                    else return newValue;
                } else {
                    var val = value.split(",");
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(
                            document.documentElement
                        ).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors atributes not found on', chartId);
        }
    }
}

var linechartcustomerColors = getChartColorsArray("customer_impression_charts");
if (linechartcustomerColors) {
    var options = {
        series: [{
            name: "Orders",
            type: "area",
            data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
        },
        {
            name: "Earnings",
            type: "bar",
            data: [
                89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
                88.51, 36.57,
            ],
        },
        {
            name: "Refunds",
            type: "line",
            data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
        },
        ],
        chart: {
            height: 310,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            dashArray: [0, 0, 8],
            width: [0.1, 0, 2],
        },
        fill: {
            opacity: [0.03, 0.9, 1],
        },
        markers: {
            size: [0, 0, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10,
            },
        },
        legend: {
            show: true,
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: -5,
            markers: {
                width: 9,
                height: 9,
                radius: 6,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                barHeight: "100%",
                borderRadius: [8],
            },
        },
        colors: linechartcustomerColors,
        tooltip: {
            shared: true,
            y: [{
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;
                },
            },
            {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;
                },
            },
            {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " Sales";
                    }
                    return y;
                },
            },
            ],
        },
    };
    var chart = new ApexCharts(
        document.querySelector("#customer_impression_charts"),
        options
    );
    chart.render();
}

// Simple Donut Charts
var chartDonutBasicColors = getChartColorsArray("#store-visits-source");
if (chartDonutBasicColors) {
    var options = {
        series: [44, 55, 41, 17, 15],
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: {
            height: 333,
            type: "donut",
        },
        legend: {
            position: "bottom",
        },
        stroke: {
            show: false
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            },
        },
        colors: chartDonutBasicColors,
    };

    var chart = new ApexCharts(
        document.querySelector("#store-visits-source"),
        options
    );
    chart.render();
}

// world map with line & markers
var vectorMapWorldLineColors = getChartColorsArray("world-map-line-markers");
if (vectorMapWorldLineColors)
    var worldlinemap = new jsVectorMap({
        map: "world_merc",
        selector: "#world-map-line-markers",
        zoomOnScroll: false,
        zoomButtons: false,
        markers: [{
            name: "Greenland",
            coords: [72, -42]
        },
        {
            name: "Canada",
            coords: [56.1304, -106.3468],
        },
        {
            name: "Brazil",
            coords: [-14.2350, -51.9253]
        },
        {
            name: "Serbia",
            coords: [44.0165, 21.0059]
        },
        {
            name: "Russia",
            coords: [61, 105]
        },
        {
            name: "China",
            coords: [35.8617, 104.1954]
        },
        {
            name: "United States",
            coords: [37.0902, -95.7129]
        },
        {
            name: "Norway",
            coords: [60.472024, 8.468946]
        },
        {
            name: "Sydney",
            coords: [33.8688, 151.2093]
        },
        ],
        lines: [{
            from: "Canada",
            to: "Serbia"
        },
        {
            from: "Russia",
            to: "Serbia"
        },
        {
            from: "Greenland",
            to: "Serbia"
        },
        {
            from: "Brazil",
            to: "Serbia"
        },
        {
            from: "United States",
            to: "Serbia"
        },
        {
            from: "China",
            to: "Serbia"
        },
        {
            from: "Norway",
            to: "Serbia"
        },
        {
            from: "Sydney",
            to: "Serbia"
        },
        ],
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapWorldLineColors,
                fillOpacity: 1,
            },
        },
        labels: {
            markers: {
                render(marker, index) {
                    return marker.name || marker.labelName || 'Not available'
                }
            }
        },
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6",
        },
    });

var layoutRightSideBtn = document.querySelector('.layout-rightside-btn');
if (layoutRightSideBtn) {
    Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function (item) {
        var userProfileSidebar = document.querySelector(".layout-rightside-col");
        item.addEventListener("click", function () {
            document.querySelectorAll(".layout-rightside").forEach(function (elem) {
                elem.classList.remove("show")
            });
            if (userProfileSidebar.classList.contains("d-block")) {
                userProfileSidebar.classList.remove("d-block");
                userProfileSidebar.classList.add("d-none");
            } else {
                userProfileSidebar.classList.remove("d-none");
                userProfileSidebar.classList.add("d-block");
            }
        });
    });

    window.addEventListener("resize", function () {
        var userProfileSidebar = document.querySelector(".layout-rightside-col");
        if (userProfileSidebar) {
            Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function () {
                if (window.outerWidth < 1699 || window.outerWidth > 3440) {
                    userProfileSidebar.classList.remove("d-block");
                } else if (window.outerWidth > 1699) {
                    userProfileSidebar.classList.add("d-block");
                }
            });
        }
    });

    var overlay = document.querySelector('.overlay');
    if (overlay) {
        document.querySelector(".overlay").addEventListener("click", function () {
            if (document.querySelector(".layout-rightside-col").classList.contains('d-block') == true) {
                document.querySelector(".layout-rightside-col").classList.remove("d-block");
            }
        });
    }
}

window.addEventListener("load", function () {
    var userProfileSidebar = document.querySelector(".layout-rightside-col");
    if (userProfileSidebar) {
        Array.from(document.querySelectorAll(".layout-rightside-btn")).forEach(function () {
            if (window.outerWidth < 1699 || window.outerWidth > 3440) {
                userProfileSidebar.classList.remove("d-block");
            } else if (window.outerWidth > 1699) {
                userProfileSidebar.classList.add("d-block");
            }
        });
    }
});


var swiper = new Swiper(".selling-product", {
    slidesPerView: "auto",
    spaceBetween: 15,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Multi-Radial Bar
var chartRadialbarMultipleColors = getChartColorsArray("multiple_radialbar");
if (chartRadialbarMultipleColors) {
    var options = {
        series: [44, 55, 67, 83],
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Fashion', 'Electronics', 'Groceries', 'Others'],
        colors: chartRadialbarMultipleColors,
        legend: {
            show: true,
            fontSize: '16px',
            position: 'bottom',
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#multiple_radialbar"), options);
    chart.render();
}

document.querySelectorAll(".chat-panel-list li").forEach(function (elem) {
    elem.addEventListener("click", function () {
        document.querySelectorAll(".layout-rightside").forEach(function (item) {
            item.classList.add("show")
        });


        //user Name and user Profile change on click
        var username = elem.querySelector(".chatlist-user-name").innerHTML;
        var userProfile = elem.querySelector(".chatlist-user-image").getAttribute("src");
    
        document.querySelector(".chat-topbar .profile-username").innerHTML = username;
        document.querySelector(".chat-topbar .userprofile").setAttribute("src", userProfile);
        var conversationImg = document.getElementById("users-conversation");
        Array.from(conversationImg.querySelectorAll(".left .chat-avatar")).forEach(function (item) {
            if (userProfile) {
                item.querySelector("img").setAttribute("src", userProfile);
            } else {
                item.querySelector("img").setAttribute("src", dummyUserImage);
            }
        });
    });
});

document.getElementById("close-chatlist").addEventListener("click", function () {
    document.querySelectorAll(".layout-rightside").forEach(function (item) {
        item.classList.remove("show")
    });
})

function currentTime() {
    var ampm = new Date().getHours() >= 12 ? "pm" : "am";
    var hour =
        new Date().getHours() > 12 ?
            new Date().getHours() % 12 :
            new Date().getHours();
    var minute =
        new Date().getMinutes() < 10 ?
            "0" + new Date().getMinutes() :
            new Date().getMinutes();
    if (hour < 10) {
        return "0" + hour + ":" + minute + " " + ampm;
    } else {
        return hour + ":" + minute + " " + ampm;
    }
}

setInterval(currentTime, 1000);

var forms = document.querySelectorAll('.chat-form')

var chatInput = document.getElementById("chat-input");
var chatInputfeedback = document.querySelector(".chat-input-feedback");

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault();

            var chatInputValue = chatInput.value

            if (chatInputValue.length == 0) {
                chatInputfeedback.classList.add("show");
                setTimeout(function () {
                    chatInputfeedback.classList.remove("show");
                }, 2000);
            } else {

                document.getElementById("users-conversation").insertAdjacentHTML("beforeend", '<li class="chat-list right">\
        <div class="conversation-list">\
            <div class="user-chat-content">\
                <div class="ctext-wrap">\
                    <div class="ctext-wrap-content">\
                        <p class="mb-0 ctext-content">'+ chatInputValue + '</p>\
                    </div>\
                    <div class="dropdown align-self-start message-box-drop">\
                        <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                            <i class="bi bi-three-dots-vertical"></i>\
                        </a>\
                        <div class="dropdown-menu">\
                            <a class="dropdown-item" href="#"><i class="bi bi-reply me-2 text-muted align-bottom"></i>Reply</a>\
                            <a class="dropdown-item" href="#"><i class="bi bi-share me-2 text-muted align-bottom"></i>Forward</a>\
                            <a class="dropdown-item" href="#"><i class="bi bi-files me-2 text-muted align-bottom"></i>Copy</a>\
                            <a class="dropdown-item" href="#"><i class="bi bi-bookmark me-2 text-muted align-bottom"></i>Bookmark</a>\
                            <a class="dropdown-item delete-item" href="#"><i class="bi bi-trash3 me-2 text-muted align-bottom"></i>Delete</a>\
                        </div>\
                    </div>\
                </div>\
                <div class="conversation-name"><small class="text-muted time">'+ currentTime() + '</small> <span class="text-muted check-message-icon"><i class="ri-check-line align-bottom"></i></span></div>\
            </div>\
        </div>\
    </li>');

                scrollToBottom("users-chat");
                deleteMessage();
            }

        }
        chatInput.value = "";
    }, false)
})


// chat
var currentChatId = "users-chat";
scrollToBottom(currentChatId);
// // Scroll to Bottom
function scrollToBottom(id) {
    setTimeout(function () {
        var simpleBar = (document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper")) ?
            document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : ''

        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
            document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 600 : 0;

        if (offsetHeight)
            simpleBar.scrollTo({
                top: offsetHeight,
                behavior: "smooth"
            });
    }, 100);
}


//Delete Message 
function deleteMessage() {
    var deleteItems = document.querySelectorAll(".delete-item");
    deleteItems.forEach(function (item) {
        item.addEventListener("click", function () {
            item.closest(".user-chat-content").childElementCount == 2
                ? item.closest(".chat-list").remove()
                : item.closest(".ctext-wrap").remove();
        });
    });
}

deleteMessage();


// searchResultList
var searchInput = document.getElementById("searchResultList");
searchInput.addEventListener("keyup", function () {
    var inputLength = searchInput.value.length;
    var chatPanelList = document.querySelectorAll(".chat-panel-list .list-group-item");
    if (inputLength > 0) {
        var inputVal = searchInput.value.toLowerCase();
        Array.from(chatPanelList).forEach(function (element) {
            var notifiTxt = ''
            if (element.querySelector(".chatlist-user-name")) {
                var spantext = element.querySelector(".chatlist-desc").innerText.toLowerCase();
                var name = element.querySelector(".chatlist-user-name").innerText.toLowerCase();
                if (name.includes(inputVal)) {
                    notifiTxt = name
                } else {
                    notifiTxt = spantext
                }
            } else if (element.querySelector(".chatlist-desc")) {
                notifiTxt = element.querySelector(".chatlist-desc").innerText.toLowerCase();
            }

            console.log(notifiTxt)

            if (notifiTxt) {
                if (notifiTxt.includes(inputVal)) {
                    element.classList.add("d-block");
                    element.classList.remove("d-none");
                } else {
                    element.classList.remove("d-block");
                    element.classList.add("d-none");
                }
            }
        })
    } else {
        Array.from(chatPanelList).forEach(function (element) {
            element.classList.add("d-block");
            element.classList.remove("d-none");
        })
    }
})

document.querySelectorAll("#stats-userlist a").forEach(function (elem) {
    elem.addEventListener("click", function () {
        document.querySelectorAll(".layout-rightside").forEach(function (item) {
            item.classList.add("show")
        });

        //user Name and user Profile change on click
        var username = elem.querySelector(".stats-profile-name").innerHTML;
        var userProfile = elem.querySelector(".stats-profile-img").getAttribute("src");
    
        document.querySelector(".chat-topbar .profile-username").innerHTML = username;
        document.querySelector(".chat-topbar .userprofile").setAttribute("src", userProfile);
        var conversationImg = document.getElementById("users-conversation");
        Array.from(conversationImg.querySelectorAll(".left .chat-avatar")).forEach(function (item) {
            if (userProfile) {
                item.querySelector("img").setAttribute("src", userProfile);
            } else {
                item.querySelector("img").setAttribute("src", dummyUserImage);
            }
        });
    });
});

