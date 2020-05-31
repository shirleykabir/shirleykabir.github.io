var dict = {};

d3.json("static/terms.json", function (error, data) {
  dict = data;
});

function toId(string) {
  return string.toLowerCase().replace(" ", "-");
}

function toTerm(description) {
  for (const term in dict) {
    description = description.replace(
      term,
      "<term>" + term + "<b>" + dict[term] + "<i></i></b></term>"
    );
    // console.log(`${property}: ${object[property]}`);
  }
  return description;
}

function getCategoryIcon(category) {
  if (category == "Machine Learning") {
    return "static/images/icons/brain.png";
  } else if (category == "Full-Stack") {
    return "static/images/icons/apps.png";
  } else if (category == "Front-end") {
    return "static/images/icons/web.png";
  } else if (category == "Data") {
    return "static/images/icons/data.png";
  } else {
    return "static/images/icons/paint.png";
  }
}

function openModal(e) {
  var modalId = "#" + e.getAttribute("data-modal");
  $(modalId).modal();
}

function formatLinks(links) {
  formattedLinks = "";
  for (var key in links) {
    // check if the property/key is defined in the object itself, not in parent
    if (links.hasOwnProperty(key)) {
      if (key.includes("download")) {
        formattedLinks =
          formattedLinks + "<a download href='" + links[key] + "'>" + key + "</a>";
      }
      else {
        formattedLinks =
          formattedLinks + "<a href='" + links[key] + "'>" + key + "</a>";
      }
    }
  }
  return formattedLinks;
}

function generateImages(images) {
  allImages = "";
  for (var img in images) {
    if (img > 0) {
      allImages =
        allImages + "<img class='more-image' src='" + images[img] + "'>";
    }
  }
  return allImages;
}

d3.json("static/projects.json", function (error, data) {
  console.log(data);
  data.forEach(function (d) {
    $("#projects").append(
      "<div onclick='openModal(this)' data-modal='" +
        d.id +
        "' class='project' data-category='" +
        toId(d.category) +
        "'><div class='project-image'></div><div class='project-details'><img src='" +
        getCategoryIcon(d.category) +
        "'/><h1>" +
        d.name +
        "</h1><h2>" +
        d.organization +
        "</h2><p>" +
        d["short description"] +
        "</p></div></div>"
    );
    $(".project-image")
      .last()
      .css("background-image", "url('" + d.images[0] + "')");
    $("#modals").append(
      "<div id='" +
        d.id +
        "' class='modal'><div class='header'></div><div class='tags'><span><b>Category</b>" +
        d["category"] +
        "</span><span><b>Project Duration</b>" +
        d["project duration"] +
        "</span><span><b>My Role</b>" +
        d["my role"] +
        "</span><span><b>Date</b>" +
        d["date"] +
        "</span><span><b>Status</b>" +
        d["status"] +
        "</span><span><b>Project Stack</b>" +
        d["project stack"] +
        "</span></div><div class='more'><h1>" +
        d.name +
        "</h1><p>" +
        toTerm(d["long description"]) +
        "</p></div><div class='relevant-links'>" +
        formatLinks(d["links"]) +
        "</div>" +
        generateImages(d["images"]) +
        "</div>"
    );

    $(".header")
      .last()
      .css("background-image", "url('" + d.images[0] + "')");
  });
});

d3.json("static/skills.json", function (error, data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      // $("#skills").append("<div>");
      // $("#skills").append();
      var i = "<div><h2>" + key + "</h2>";
      for (const item in data[key]) {
        i = i + "<span>" + data[key][item] + "</span>";
      }
      i = i + "</div>";
      $("#skills").append(i);
    }
  }
});

$(document).ready(function () {
  $("#filters a").click(function () {
    $("#filters a").not(this).removeClass("active");
    $(this).toggleClass("active");

    $(".project").show();
    selected = toId(this.text);

    var x = $(".project", "#projects").filter(function (index) {
      return $(this)[0].getAttribute("data-category") != selected;
    });
    if ($(this).hasClass("active")) {
      x.hide();
    } else {
      x.show();
    }
  });
});
