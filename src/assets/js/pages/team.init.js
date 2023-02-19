/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Team Init Js File
*/


var url="assets/json/";
var allmemberlist = '';
var editlist = false;

var prevButton = document.getElementById('page-prev');
var nextButton = document.getElementById('page-next');

// configuration variables
var currentPage = 1;
var itemsPerPage = 8;

var getJSON = function (jsonurl, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + jsonurl, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

// get json
getJSON("team-member-list.json", function (err, data) {
    if (err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        allmemberlist = data;
        loadTeamData(allmemberlist, currentPage);
        paginationEvents();
        sortElementsById();
    }
});

// load team data
function loadTeamData(datas, page) {
    var pages = Math.ceil(datas.length / itemsPerPage)
    if (page < 1) page = 1
    if (page > pages) page = pages
    document.querySelector("#team-member-list").innerHTML = '';

    for (var i = (page - 1) * itemsPerPage; i < (page * itemsPerPage) && i < datas.length; i++) {
        var checkBookmark = datas[i].bookmark ? "active" : "";
        var isUserProfile = datas[i].memberImg ? '<img src="'+datas[i].memberImg+'" alt="" class="member-img img-fluid d-block rounded-3" />'
                    : '<div class="avatar-title border bg-light text-primary rounded-3 text-uppercase fs-22">' + datas[i].nickname + '</div>';
        var text = datas[i].memberName;
        var myArray = text.split(" ");
        var shortName = myArray[0].toLowerCase();

        document.querySelector("#team-member-list").innerHTML +=
        '<div class="col-xxl-3 col-md-6">\
        <div class="card team-box">\
            <div class="card-body p-4 m-2">\
                <div class="row mb-4 pb-2">\
                    <div class="col">\
                        <div class="flex-shrink-0 me-2">\
                            <button type="button" class="btn btn-outline-warning custom-toggle rounded-circle btn-icon btn-sm ' + checkBookmark + '" data-bs-toggle="button">\
                                <span class="icon-on"><i class="ri-star-line fs-14"></i></span>\
                                <span class="icon-off"><i class="ri-star-fill fs-14"></i></span>\
                            </button>\
                        </div>\
                    </div>\
                    <div class="col text-end dropdown"> <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"> <i class="ri-more-fill fs-17"></i> </a>\
                        <ul class="dropdown-menu dropdown-menu-end">\
                            <li><a class="dropdown-item edit-list" href="#addmemberModal" data-bs-toggle="modal" data-edit-id="'+datas[i].id+'"><i class="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</a></li>\
                            <li><a class="dropdown-item remove-list" href="#removeMemberModal" data-bs-toggle="modal" data-remove-id="'+datas[i].id+'"><i class="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</a></li>\
                        </ul>\
                    </div>\
                </div>\
                <div class="text-center mb-4">\
                    <div class="avatar-md mx-auto">'+isUserProfile+'</div>\
                </div>\
                <div class="text-center mb-4 pb-3">\
                    <a href="#member-overview" class="member-name" data-bs-toggle="offcanvas">\
                        <h5 class="fs-17">'+datas[i].memberName+'</h5>\
                    </a>\
                    <p class="text-muted mb-4">@'+shortName+'</p>\
                    <div class="d-none member-contact">'+datas[i].contactNo+'</div>\
                    <div class="d-none member-email">'+datas[i].email+'</div>\
                    <span class="badge badge-soft-success member-designation">'+datas[i].position+'</span>\
                </div>\
                <div class="progress animated-progress progress-sm progress-label">\
                    <div class="progress-bar bg-primary" role="progressbar" style="width: '+datas[i].progress+'" aria-valuenow="'+datas[i].progress.split("%")[0]+'" aria-valuemin="0" aria-valuemax="100">\
                        <div class="label">'+datas[i].progress+'</div>\
                    </div>\
                </div>\
                <div class="row text-muted text-center mt-4">\
                    <div class="col-4 border-end border-end-dashed">\
                        <h5 class="mb-1 projects-num">'+datas[i].projects+'</h5>\
                        <p class="text-muted mb-0">Projects</p>\
                    </div>\
                    <div class="col-4 border-end border-end-dashed">\
                        <h5 class="mb-1 projects-num">'+datas[i].overdue+'</h5>\
                        <p class="text-muted mb-0">Overdue</p>\
                    </div>\
                    <div class="col-4">\
                        <h5 class="mb-1 tasks-num">'+datas[i].tasks+'</h5>\
                        <p class="text-muted mb-0">Tasks</p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>';
    };

    selectedPage();
    currentPage == 1 ? prevButton.parentNode.classList.add('disabled') : prevButton.parentNode.classList.remove('disabled');
    currentPage == pages ? nextButton.parentNode.classList.add('disabled') : nextButton.parentNode.classList.remove('disabled');
    editMemberList();
    removeItem();
    memberDetailShow();
}

function selectedPage() {
    var pagenumLink = document.getElementById('page-num').getElementsByClassName('clickPageNumber');
    for (var i = 0; i < pagenumLink.length; i++) {
        if (i == currentPage - 1) {
            pagenumLink[i].parentNode.classList.add("active");
        } else {
            pagenumLink[i].parentNode.classList.remove("active");
        }
    }
};

// paginationEvents
function paginationEvents() {
    var numPages = function numPages() {
        return Math.ceil(allmemberlist.length / itemsPerPage);
    };

    function clickPage() {
        document.addEventListener('click', function (e) {
            if (e.target.nodeName == "A" && e.target.classList.contains("clickPageNumber")) {
                currentPage = e.target.textContent;
                loadTeamData(allmemberlist, currentPage);
            }
        });
    };

    function pageNumbers() {
        var pageNumber = document.getElementById('page-num');
        pageNumber.innerHTML = "";
        // for each page
        for (var i = 1; i < numPages() + 1; i++) {
            pageNumber.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
        }
    }

    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            loadTeamData(allmemberlist, currentPage);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < numPages()) {
            currentPage++;
            loadTeamData(allmemberlist, currentPage);
        }
    });

    pageNumbers();
    clickPage();
    selectedPage();
}

// member image
document.querySelector("#member-image-input").addEventListener("change", function () {
    var preview = document.querySelector("#member-img");
    var file = document.querySelector("#member-image-input").files[0];
    var reader = new FileReader();
    reader.addEventListener("load",function () {
        preview.src = reader.result;
    },false);
    if (file) {
        reader.readAsDataURL(file);
    }
});

Array.from(document.querySelectorAll(".addMembers-modal")).forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      document.getElementById("createMemberLabel").innerHTML = "Add New Members";
      document.getElementById("addNewMember").innerHTML = "Add Member";
      document.getElementById("teammembersName").value = "";
      document.getElementById("designation").value = "";

      document.getElementById("member-img").src = "assets/images/users/user-dummy-img.jpg";
      document.getElementById("memberlist-form").classList.remove('was-validated');
    });
});



// Form Event
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                var inputName = document.getElementById('teammembersName').value;
                var inputDesignation = document.getElementById('designation').value;
                var memberImg = document.getElementById("member-img").src;

                var memberImgValue = memberImg.substring(
                    memberImg.indexOf("/as") + 1
                );
                
                var memberImageValue
                if(memberImgValue == "assets/images/users/user-dummy-img.jpg"){
                    memberImageValue = ""
                }else{
                    memberImageValue = memberImg
                }

                var str = inputName;
                var matches = str.match(/\b(\w)/g);
                var acronym = matches.join(''); // JSON
                var nicknameValue = acronym.substring(0,2)

                if (inputName !== "" && inputDesignation !== "" && !editlist) {
                    var newMemberId = findNextId();
                    var newMember = {
                        'id': newMemberId,
                        "bookmark": false,
                        "memberImg": memberImageValue,
                        "nickname": nicknameValue,
                        'memberName': inputName,
                        'position': inputDesignation,
                        'progress': "0%",
                        'projects': "0",
                        'overdue': "0",
                        'tasks': "0"
                    };
                    allmemberlist.push(newMember);
                    sortElementsById();
                }else if(inputName !== "" && inputDesignation !== "" && editlist){
                    var getEditid = 0;
                    getEditid = document.getElementById("memberid-input").value;
                    allmemberlist = allmemberlist.map(function (item) {
                        if (item.id == getEditid) {
                            var editObj = {
                                'id': getEditid,
                                "bookmark": item.bookmark,
                                "memberImg": memberImg,
                                "nickname": nicknameValue,
                                'memberName': inputName,
                                'position': inputDesignation,
                                'progress': item.progress,
                                'projects': item.projects,
                                'overdue': item.overdue,
                                'tasks': item.tasks,
                            }
                            return editObj;
                        }
                        return item;
                    });
                    editlist = false;
                }

                var pageNumber = document.getElementById('page-num');
                pageNumber.innerHTML = "";
                var dataPageNum = Math.ceil(allmemberlist.length / itemsPerPage)
                // for each page
                for (var i = 1; i < dataPageNum + 1; i++) {
                    pageNumber.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
                }
                loadTeamData(allmemberlist, currentPage)
                document.getElementById("createMemberBtn-close").click();
            }
            form.classList.add('was-validated');
        }, false)
    })
})()

function fetchIdFromObj(member) {
    return parseInt(member.id);
}

function findNextId() {
    if (allmemberlist.length === 0) {
        return 0;
    }
    var lastElementId = fetchIdFromObj(allmemberlist[allmemberlist.length - 1]),
        firstElementId = fetchIdFromObj(allmemberlist[0]);
    return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}

function sortElementsById() {
    var manymember = allmemberlist.sort(function (a, b) {
        var x = fetchIdFromObj(a);
        var y = fetchIdFromObj(b);

        if (x > y) {
            return -1;
        }
        if (x < y) {
            return 1;
        }
        return 0;
    });
    loadTeamData(manymember, currentPage);
}

// editMemberList
function editMemberList() {
    var getEditid = 0;
    Array.from(document.querySelectorAll(".edit-list")).forEach(function (elem) {
        elem.addEventListener('click', function (event) {
            getEditid = elem.getAttribute('data-edit-id');
            allmemberlist = allmemberlist.map(function (item) {
                if (item.id == getEditid) {
                    editlist = true;
                    console.log(document.getElementById("createMemberLabel").innerHTML = "Edit Member")
                    document.getElementById("createMemberLabel").innerHTML = "Edit Member";
                    document.getElementById("addNewMember").innerHTML = "Save";

                    if(item.memberImg == ""){
                        document.getElementById("member-img").src = "assets/images/users/user-dummy-img.jpg";
                    }else{
                        document.getElementById("member-img").src = item.memberImg;
                    }
                    document.getElementById("memberid-input").value = item.id;
                    document.getElementById('teammembersName').value = item.memberName;
                    document.getElementById('designation').value = item.position;
                    
                    document.getElementById("memberlist-form").classList.remove('was-validated');
                }
                return item;
            });
        });
    });
};

// removeItem
function removeItem() {
    var getid = 0;
    Array.from(document.querySelectorAll(".remove-list")).forEach(function (item) {
        item.addEventListener('click', function (event) {
            getid = item.getAttribute('data-remove-id');
            document.getElementById("remove-item").addEventListener("click", function () {
                function arrayRemove(arr, value) {
                    return arr.filter(function (ele) {
                        return ele.id != value;
                    });
                }
                var filtered = arrayRemove(allmemberlist, getid);

                allmemberlist = filtered;

                loadTeamData(allmemberlist, currentPage);
                document.getElementById("close-removeMemberModal").click();
            });
        });
    });
}

// memberDetailShow
function memberDetailShow() {
    Array.from(document.querySelectorAll(".team-box")).forEach(function (item) {
        item.querySelector(".member-name").addEventListener("click", function () {
            var memberName = item.querySelector(".member-name h5").innerHTML;
            var memberDesignation = item.querySelector(".member-designation").innerHTML;

            var memberProfileImg
            if(item.querySelector(".member-img")){
                memberProfileImg = item.querySelector(".member-img").src;
            }else{
                memberProfileImg = "assets/images/users/user-dummy-img.jpg"
            }
            var memberProject = item.querySelector(".projects-num").innerHTML;
            var memberTask = item.querySelector(".tasks-num").innerHTML;

            var memberContact = item.querySelector(".member-contact").innerHTML;
            var memberEmail = item.querySelector(".member-email").innerHTML;

            document.querySelector("#member-overview .profile-img").src = memberProfileImg;

            document.querySelector("#member-overview .profile-name").innerHTML = memberName;
            document.querySelector("#member-overview .profile-designation").innerHTML = memberDesignation;

            document.querySelector("#member-overview .profile-project").innerHTML = memberProject;
            document.querySelector("#member-overview .profile-task").innerHTML = memberTask;

            document.querySelector("#member-overview .profile-contact").innerHTML = memberContact;
            document.querySelector("#member-overview .profile-email").innerHTML = memberEmail;
        });
    }); 
}

// Search list
var searchElementList = document.getElementById("searchMemberList");
searchElementList.addEventListener("keyup", function () {
    var inputVal = searchElementList.value.toLowerCase();

    function filterItems(arr, query) {
        return arr.filter(function (el) {
            return el.memberName.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.position.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }

    var filterData = filterItems(allmemberlist, inputVal);

    if (filterData.length == 0) {
        document.getElementById("pagination-element").style.display = "none";
    } else {
        document.getElementById("pagination-element").style.display = "flex";
    }

    var pageNumber = document.getElementById('page-num');
    pageNumber.innerHTML = "";
    var dataPageNum = Math.ceil(filterData.length / itemsPerPage)
    // for each page
    for (var i = 1; i < dataPageNum + 1; i++) {
        pageNumber.innerHTML += "<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>" + i + "</a></div>";
    }
    loadTeamData(filterData, currentPage);
});