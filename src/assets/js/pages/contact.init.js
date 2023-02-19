/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: contact init Js File
*/

var contactData = [
    {
        "id": 1,
        "user": {
            "img": "assets/images/users/avatar-1.jpg",
            "name": "Danielle Wright"
        },
        "email": "danielle@example.com",
        "phone": "+(380) 39 489 7330",
        "country": "Ukraine",
        "label": "Family",
        "tab" : "frequently",
    }, {
        "id": 2,
        "user": {
            "img": "assets/images/users/avatar-2.jpg",
            "name": "Stephen Bird"
        },
        "email": "stephen@example.com",
        "phone": "+(907) 225-4144",
        "country": "USA",
        "label": "Imported",
        "tab" : "important",
    }, {
        "id": 3,
        "user": {
            "img": "assets/images/users/avatar-3.jpg",
            "name": "Jeffrey Hunt"
        },
        "email": "jeffrey@example.com",
        "phone": "+(907) 694-7675",
        "country": "USA",
        "label": "Business",
        "tab" : "groups",
    }, {
        "id": 4,
        "user": {
            "img": "assets/images/users/avatar-4.jpg",
            "name": "Michael Brown"
        },
        "email": "michael@example.com",
        "phone": "+(244) 948 701 110",
        "country": "Angola",
        "label": "Imported",
        "tab" : "trash",
    }, {
        "id": 5,
        "user": {
            "img": "assets/images/users/avatar-5.jpg",
            "name": "David Daly"
        },
        "email": "david@example.com",
        "phone": "+(244) 948 701 110",
        "country": "Angola",
        "label": "Imported",
        "tab" : "frequently",
    }, {
        "id": 6,
        "user": {
            "img": "assets/images/users/avatar-5.jpg",
            "name": "Terry White"
        },
        "email": "terry@example.com",
        "phone": "+(32) 493 33 65 89",
        "country": "Belgium",
        "label": "Family",
        "tab" : "groups",
    }, {
        "id": 7,
        "user": {
            "img": "assets/images/users/avatar-7.jpg",
            "name": "Daniel Gonzalez"
        },
        "email": "daniel@example.com",
        "phone": "+(55) 93 90819-1376",
        "country": "Brazil",
        "label": "Business",
        "tab" : "groups",
    }, {
        "id": 8,
        "user": {
            "img": "assets/images/users/avatar-8.jpg",
            "name": "Stephen Garrison"
        },
        "email": "stephen@example.com",
        "phone": "+(44) 7937 756071",
        "country": "Jersey",
        "label": "Family",
        "tab" : "frequently",
    }, {
        "id": 9,
        "user": {
            "img": "assets/images/users/avatar-9.jpg",
            "name": "Ashley Silva"
        },
        "email": "ashley@example.com",
        "phone": "+(55) 21 92608-8982",
        "country": "Brazil",
        "label": "Friends",
        "tab" : "frequently",
    }, {
        "id": 10,
        "user": {
            "img": "assets/images/users/avatar-10.jpg",
            "name": "Charles Welch"
        },
        "email": "welch@example.com",
        "phone": "+(264) 81 063 8558",
        "country": "Namibia",
        "label": "Friends",
        "tab" : "important",
    }, {
        "id": 11,
        "user": {
            "img": "assets/images/users/avatar-1.jpg",
            "name": "Aaron Bauer"
        },
        "email": "aaron@example.com",
        "phone": "+(34) 723 26 58 31",
        "country": "Spain",
        "label": "Imported",
        "tab" : "trash",
    }, {
        "id": 12,
        "user": {
            "img": "assets/images/users/avatar-2.jpg",
            "name": "Heather Jimenez"
        },
        "email": "heather@example.com",
        "phone": "+(380) 39 085 1057",
        "country": "Ukraine",
        "label": "Family",
        "tab" : "",
    }, {
        "id": 13,
        "user": {
            "img": "assets/images/users/avatar-3.jpg",
            "name": "Scott Wilson"
        },
        "email": "scott@example.com",
        "phone": "+(54) 9 3327 46-0897",
        "country": "Argentina",
        "label": "Friends",
        "tab" : "",
    }, {
        "id": 14,
        "user": {
            "img": "assets/images/users/avatar-4.jpg",
            "name": "James Wolfe"
        },
        "email": "wolfe@example.com",
        "phone": "+(264) 60 778 1765",
        "country": "Namibia",
        "label": "Business",
        "tab" : "",
    }, {
        "id": 15,
        "user": {
            "img": "assets/images/users/avatar-5.jpg",
            "name": "Michelle Peterson"
        },
        "email": "michelle@example.com",
        "phone": "+(244) 948 701 110",
        "country": "Angola",
        "label": "Imported",
        "tab" : "",
    }, {
        "id": 16,
        "user": {
            "img": "assets/images/users/avatar-6.jpg",
            "name": "Denise Bowers"
        },
        "email": "denise@example.com",
        "phone": "+(32) 493 33 65 89",
        "country": "Belgium",
        "label": "Family",
        "tab" : "",
    }, {
        "id": 17,
        "user": {
            "img": "assets/images/users/avatar-7.jpg",
            "name": "William Hensley"
        },
        "email": "william@example.com",
        "phone": "+(55) 22 95640-1280",
        "country": "Brazil",
        "label": "Business",
        "tab" : "",
    }, {
        "id": 18,
        "user": {
            "img": "assets/images/users/avatar-8.jpg",
            "name": "Sharon Brewer"
        },
        "email": "sharon@example.com",
        "phone": "+(44) 7797 929140",
        "country": "Jersey",
        "label": "Family",
        "tab" : "",
    }, {
        "id": 19,
        "user": {
            "img": "assets/images/users/avatar-9.jpg",
            "name": "Barbara Nelson"
        },
        "email": "nelson@example.com",
        "phone": "+(264) 85 162 8897",
        "country": "Namibia",
        "label": "Friends",
        "tab" : "",
    }, {
        "id": 20,
        "user": {
            "img": "assets/images/users/avatar-10.jpg",
            "name": "Victoria Medina"
        },
        "email": "victoria@example.com",
        "phone": "+(264) 85 162 8897",
        "country": "Namibia",
        "label": "Friends",
        "tab" : "",
    }, {
        "id": 21,
        "user": {
            "img": "assets/images/users/avatar-1.jpg",
            "name": "Stacy Martin"
        },
        "email": "stacy@example.com",
        "phone": "+(34) 590 60 09 06",
        "country": "Spain",
        "label": "Imported",
        "tab" : "",
    }, {
        "id": 22,
        "user": {
            "img": "assets/images/users/avatar-2.jpg",
            "name": "Leslie Fink"
        },
        "email": "leslie@example.com",
        "phone": "+(55) 93 90819-1376",
        "country": "Brazil",
        "label": "Business",
        "tab" : "",
    }, {
        "id": 23,
        "user": {
            "img": "assets/images/users/avatar-3.jpg",
            "name": "Sean Walker"
        },
        "email": "sean@example.com",
        "phone": "+(55) 93 90819-1376",
        "country": "Brazil",
        "label": "Business",
        "tab" : "",
    }, {
        "id": 24,
        "user": {
            "img": "assets/images/users/avatar-4.jpg",
            "name": "Kristen Gray"
        },
        "email": "gray@example.com",
        "phone": "+(44) 7937 756071",
        "country": "Jersey",
        "label": "Family",
        "tab" : "frequently",
    }, {
        "id": 25,
        "user": {
            "img": "assets/images/users/avatar-5.jpg",
            "name": "Zachary Brown"
        },
        "email": "brown@example.com",
        "phone": "+(55) 21 92608-8982",
        "country": "Brazil",
        "label": "Friends",
        "tab" : "important",
    }, {
        "id": 26,
        "user": {
            "img": "assets/images/users/avatar-6.jpg",
            "name": "Dana Trevino"
        },
        "email": "dana@example.com",
        "phone": "+(264) 81 063 8558",
        "country": "Namibia",
        "label": "Friends",
        "tab" : "groups",
    }, {
        "id": 27,
        "user": {
            "img": "assets/images/users/avatar-10.jpg",
            "name": "Tonya Noble"
        },
        "email": "tonyanoble@hybrix.com	",
        "phone": "+(34) 414 453 5725",
        "country": "Germany",
        "label": "Business",
        "tab" : "trash",
    }
];

function sortElementsById() {
    var manymember = contactData.sort(function (a, b) {
        var x = fetchIdFromObj(a);
        var y = fetchIdFromObj(b);

        if (x > y) {
            return -1;
        }
        if (x < y) {
            return 1;
        }
        return 0;
    })
}
sortElementsById();

var editlist = false;
// recomended-jobs
if (document.getElementById("recomended-jobs")) {
    var contactList = new gridjs.Grid({
        columns: [
            {
                name: 'Name',
                data: (function (row) {
                    return gridjs.html('<div class="d-flex align-items-center">\
						<div class="flex-shrink-0 me-2">\
						<div class="avatar-xs rounded-circle"><img src="' + row.user.img + '" alt="" class="img-fluid rounded-circle d-block user-img"></div>\
						</div>\
						<div class="flex-grow-1">\
						<h6 class="fw-medium mb-1 user-name">' + row.user.name + '</h6>\
						</div>\
						</div>');
                }),
                
            },
            {
                name: 'Email',  
            },
            {
                name: 'Phone'
            },
            {
                name: 'Country'
            },
            {
                name: 'Label',
                data: (function (row) {
                    return gridjs.html(isStatus(row.label));
                })
            }, {
                name: 'Action',
                width: '150px',
                data: (function (row) {
                    return gridjs.html('<div class="d-flex align-items-center gap-2 justify-content-center">\
                        <div><a href="#viewContactoffcanvas" data-bs-toggle="offcanvas" onClick="overviewList()" class="text-muted px-1 d-block viewlist-btn"><i class="bi bi-eye-fill"></i></a></div>\
                        <div><a href="#addContactModal" data-bs-toggle="modal" onClick="editMemberList('+ row.id + ')"  class="text-muted px-1 d-block"><i class="bi bi-pencil-fill"></i></a></div>\
                        <div><a href="#removeContactModal" data-bs-toggle="modal" class="text-muted px-1 d-block" onClick="removeItem('+ row.id + ')"><i class="bi bi-trash-fill"></i></a></div>\
						</div>');
                })
            },
        ],
        sort: true,
        pagination: {
            limit: 10
        },
        data: contactData,
    }).render(document.getElementById("recomended-jobs"));
};


function isStatus(val) {
    switch (val) {
        case "Family":
            return ('<span class="badge badge-soft-success">' + val + "</span>");
        case "Friends":
            return ('<span class="badge badge-soft-secondary">' + val + "</span>");
        case "Business":
            return ('<span class="badge badge-soft-info">' + val + "</span>");
        case "Imported":
            return ('<span class="badge badge-soft-danger">' + val + "</span>");
    }
}



// contact image
document.querySelector("#contact-image-input").addEventListener("change", function () {
    var preview = document.querySelector("#contact-img");
    var file = document.querySelector("#contact-image-input").files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
});


// Form Event
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    var userImg = document.getElementById("contact-img").src;
                    var inputName = document.getElementById('name').value;
                    var inputEmail = document.getElementById('email').value;
                    var inputPhone = document.getElementById('phoneNumber').value;
                    var inputCountry = document.getElementById('country').value;
                    var inputlabel = document.getElementById('label').value;

                    if (inputName !== "" && inputEmail !== "" && inputPhone !== "" && inputCountry !== "" && !editlist) {
                        var newMemberId = findNextId();
                        var newMember = {
                            'id': newMemberId,
                            "user": {
                                "img": userImg,
                                "name": inputName
                            },
                            "email": inputEmail,
                            "phone": inputPhone,
                            "country": inputCountry,
                            "label": inputlabel
                        };

                        contactData.push(newMember);
                        sortElementsById();
                    } if (inputName !== "" && inputEmail !== "" && inputPhone !== "" && inputCountry !== "" && editlist) {
                        var getEditid = 0;
                        getEditid = document.getElementById("contactid-input").value;
                        contactData = contactData.map(function (item) {
                            if (item.id == getEditid) {
                                var editObj = {
                                    'id': getEditid,
                                    "user": {
                                        "img": userImg,
                                        "name": inputName
                                    },
                                    "email": inputEmail,
                                    "phone": inputPhone,
                                    "country": inputCountry,
                                    "label": inputlabel
                                }
                                return editObj;
                            }
                            return item;
                        });
                        editlist = false;
                    }

                    contactList.updateConfig({
                        data: contactData
                    }).forceRender();

                    document.getElementById("addContact-btnClose").click();
                }
                form.classList.add('was-validated');
            }, false)
        })
})()

function fetchIdFromObj(member) {
    return parseInt(member.id);
}

function findNextId() {
    if (contactData.length === 0) {
        return 0;
    }
    var lastElementId = fetchIdFromObj(contactData[contactData.length - 1]),
        firstElementId = fetchIdFromObj(contactData[0]);
    return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}


Array.from(document.querySelectorAll(".addContact-modal")).forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      document.getElementById("addContactModalLabel").innerHTML = "Add Contact";
      document.getElementById("addNewContact").innerHTML = "Add Contact";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phoneNumber").value = "";
      document.getElementById("country").value = "";
      document.getElementById("label").value = "";

      document.getElementById("contact-img").src = "assets/images/users/user-dummy-img.jpg";
      document.getElementById("contactlist-form").classList.remove('was-validated');
    });
});


function editMemberList(elem) {
    var getEditid = elem;
    contactData = contactData.map(function (item) {
        if (item.id == getEditid) {
            editlist = true;
            document.getElementById("addContactModalLabel").innerHTML = "Edit Contact";
            document.getElementById("addNewContact").innerHTML = "Save";

            document.getElementById("contactid-input").value = item.id;
            document.getElementById("contact-img").src = item.user.img;
            document.getElementById("name").value = item.user.name;
            document.getElementById("email").value = item.email;
            document.getElementById("phoneNumber").value = item.phone;
            document.getElementById("country").value = item.country;
            document.getElementById("label").value = item.label;
        }
        return item;
    });
}

// removeItem event
function removeItem(elem) {
    var getid = elem;
    document.getElementById("remove-contact").addEventListener("click", function () {
        function arrayRemove(arr, value) {
            return arr.filter(function (ele) {
                return ele.id != value;
            });
        }
        var filtered = arrayRemove(contactData, getid);

        contactData = filtered;
        contactList.updateConfig({
            data: contactData
        }).forceRender();

        document.getElementById("removeContactModalbtn-close").click();
    });
}


// overviewList event
function overviewList(){
    var rowElem = event.target.parentElement.closest(".gridjs-tr");

    var userImg = rowElem.querySelector(".user-img").src;
    var userName = rowElem.querySelector(".user-name").innerHTML;
    var userEmail = rowElem.querySelector("[data-column-id='email']").innerHTML;
    var userPhone = rowElem.querySelector("[data-column-id='phone']").innerHTML;
    var userCountry = rowElem.querySelector("[data-column-id='country']").innerHTML;
    var userLabel = rowElem.querySelector("[data-column-id='label'] .badge").innerHTML;

    document.querySelector("#viewContactoffcanvas .overview-userimg").src = userImg;
    document.querySelectorAll("#viewContactoffcanvas .overview-name").forEach(function(elem){
        elem.innerHTML = userName;
    });
    document.querySelector("#viewContactoffcanvas .overview-email").innerHTML = userEmail;
    document.querySelector("#viewContactoffcanvas .overview-phone").innerHTML = userPhone;
    document.querySelectorAll("#viewContactoffcanvas .overview-location").forEach(function(elem){
        elem.innerHTML = userCountry;
    });
    document.querySelector("#viewContactoffcanvas .overview-tags").innerHTML = userLabel;
}



// Search result list
var searchProductList = document.getElementById("searchResultList");
searchProductList.addEventListener("keyup", function () {
	var inputVal = searchProductList.value.toLowerCase();
	function filterItems(arr, query) {
		return arr.filter(function (el) {
			return el.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.email.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.phone.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.country.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.label.toLowerCase().indexOf(query.toLowerCase()) !== -1
		})
	}

	var filterData = filterItems(contactData, inputVal);
    
	contactList.updateConfig({
		data: filterData
	}).forceRender();
});


// contact list filter menu

Array.from(document.querySelectorAll('.contact-menu-list a')).forEach(function (menuTab) {
    menuTab.addEventListener("click", function () {
        if (menuTab.querySelector('.menu-list-link').hasAttribute('data-tab')) {
            var tabname = menuTab.querySelector('.menu-list-link').getAttribute("data-tab");
            if (tabname != 'all') {
                var filterData = contactData.filter(list => list.tab === tabname);
            } else {
                var filterData = contactData;
            }
            
        }else if (menuTab.querySelector('.menu-list-link').hasAttribute('data-label')) {
            var tabname = menuTab.querySelector('.menu-list-link').getAttribute("data-label");
            var filterData = contactData.filter(list => list.label === tabname);
        }

        var activeListTab = document.querySelector('.contact-menu-list a.active')
        if (activeListTab) {
            activeListTab.classList.remove("active")
        }
        menuTab.classList.add("active")

        contactList.updateConfig({
            data: filterData
        }).forceRender();
    });
})
